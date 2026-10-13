"""Custom pack data contracts, publisher trust and old-plan compatibility."""

import copy
import json
import math

import pytest
import voluptuous as vol

from custom_components.neonplan3d.packs import PackError, validate_payload
from custom_components.neonplan3d.schema import FURNITURE_SCHEMA, OUTDOOR_SCHEMA

PART = {"id": "body", "shape": "box", "x": 0, "z": 0, "y": 0, "w": 1, "d": 1, "h": 1, "color": "body"}


def test_gravel_bed_keeps_free_contour_slope_and_ha_area() -> None:
    area = {
        "id": "gravel",
        "type": "gravel_bed",
        "points": [[0, 0], [3, 0], [3, 1], [1, 1], [1, 3], [0, 3]],
        "freeform": True,
        "area_id": "garden",
        "offset": 0.2,
        "slope": 0.1,
        "slope_dir": "x",
    }
    clean = OUTDOOR_SCHEMA(area)
    for key, value in area.items():
        assert clean[key] == value


PAYLOAD = {
    "format": "fp3dpack",
    "version": 2,
    "id": "test.custom",
    "name": "Custom",
    "publisher": "Test",
    "items": [
        {
            "id": "device",
            "name": {"en": "Device"},
            "size": [1, 1, 1],
            "parts": [PART],
            "bindings": [{"id": "status", "label": "Status", "domains": ["sensor"]}],
        }
    ],
}
FURNITURE = {
    "id": "f",
    "type": "pack:test.custom:device",
    "x": 0,
    "z": 0,
    "w": 1,
    "d": 1,
    "h": 1,
    "rotation": 0,
    "variant": None,
}


def test_extended_pack_fields_and_plan_bindings_roundtrip():
    p = copy.deepcopy(PAYLOAD)
    item = p["items"][0]
    item["parts"][0]["status"] = {"binding": "status", "colors": {"running": "#ff0000"}, "visibility": {"off": False}}
    item["motions"] = [{"id": "door", "kind": "door", "parts": ["body"], "pivot": [-0.5, 0.5, 0], "binding": "status"}]
    item["displays"] = [
        {"id": "time", "kind": "digital", "position": [0, 0.5, 0.5], "size": [0.4, 0.1], "parent": "door"}
    ]
    assert validate_payload(json.loads(json.dumps(p)))["items"][0]["motions"][0]["parts"] == ["body"]
    f = FURNITURE_SCHEMA(
        {
            **FURNITURE,
            "device_id": "my-device",
            "bindings": {"status": "sensor.my_helper"},
            "surface_binding": {"kind": "roof", "id": "roof", "floor_id": "f"},
            "beam_angle": 50,
            "spot_config": {"head": {"entity": "light.head", "beam_angle": None}},
            "animations": False,
        }
    )
    assert FURNITURE_SCHEMA(json.loads(json.dumps(f)))["bindings"] == {"status": "sensor.my_helper"}


def test_missing_and_duplicate_part_references_are_rejected():
    for target in ("missing", "duplicate"):
        p = copy.deepcopy(PAYLOAD)
        p["items"][0]["motions"] = [
            {"id": "door", "kind": "door", "parts": ["missing" if target == "missing" else "body"], "pivot": [0, 0, 0]}
        ]
        if target == "duplicate":
            p["items"][0]["spots"] = [{"id": "spot", "parts": ["body"], "position": [0, 0, 0], "direction": [0, -1, 0]}]
        with pytest.raises(PackError, match="missing or overlapping"):
            validate_payload(p)


def test_shapes_reject_crossed_polygons_repeated_pipe_points_and_nonfinite_values():
    for shape, extras in [
        ("polygon", {"points": [[-0.5, -0.5], [0.5, 0.5], [-0.5, 0.5], [0.5, -0.5]]}),
        ("pipe", {"path": [[0, 0, 0], [0, 0, 0]]}),
        ("sphere", {"w": math.nan}),
    ]:
        p = copy.deepcopy(PAYLOAD)
        p["items"][0]["parts"][0].update(shape=shape, **extras)
        with pytest.raises(PackError):
            validate_payload(p)
    for angle in (math.nan, math.inf, 0, 180):
        with pytest.raises(vol.Invalid):
            FURNITURE_SCHEMA({**FURNITURE, "beam_angle": angle})


def test_outdoor_areas_may_share_a_ha_area_without_merging_geometry():
    points = [[0, 0], [4, 0], [4, 4], [0, 4]]
    areas = [
        OUTDOOR_SCHEMA({"id": id_, "type": "terrace", "points": points, "area_id": "garden"}) for id_ in ("a", "b")
    ]
    assert [a["area_id"] for a in areas] == ["garden", "garden"]
    areas[0]["area_id"] = None
    assert areas[1]["area_id"] == "garden"


def test_future_pack_versions_request_an_update_and_old_models_still_load():
    old = copy.deepcopy(PAYLOAD)
    old["version"] = 1
    del old["items"][0]["parts"][0]["id"]
    del old["items"][0]["bindings"]
    assert validate_payload(old)["version"] == 1
    with pytest.raises(PackError, match="needs_update"):
        validate_payload({**PAYLOAD, "version": 99})
