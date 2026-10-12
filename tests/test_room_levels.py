"""Standalone schema checks for per-room heights and doorway stairs."""

import importlib.util
import json
from pathlib import Path
import unittest

import voluptuous as vol

spec = importlib.util.spec_from_file_location(
    "room_schema", Path(__file__).resolve().parents[1] / "custom_components/neonplan3d/schema.py"
)
schema = importlib.util.module_from_spec(spec)
spec.loader.exec_module(schema)
ROOM = {
    "id": "room",
    "name": "Room",
    "area_id": None,
    "points": [[0, 0], [4, 0], [4, 4], [0, 4]],
    "floor_material": "wood",
}
OPENING = {
    "id": "door",
    "room_id": "room",
    "edge": 1,
    "offset": 2,
    "width": 1.2,
    "type": "door",
    "sill": 0,
    "height": 2.1,
}


class RoomLevelsTests(unittest.TestCase):
    def test_new_room_profiles_and_signed_step_offsets_roundtrip(self):
        r = schema.ROOM_SCHEMA({**ROOM, "wall_offset": 0.1, "floor_offset": 0.3, "ceiling_height": 2.5})
        self.assertEqual(schema.ROOM_SCHEMA(json.loads(json.dumps(r))), r)
        for offset in (-0.3, 0, 0.3):
            o = schema.OPENING_SCHEMA(
                {**OPENING, "steps": {"side": "room", "count": 3, "depth": 0.9, "offset": offset}}
            )
            self.assertEqual(schema.OPENING_SCHEMA(json.loads(json.dumps(o)))["steps"]["offset"], offset)

    def test_new_offsets_reject_nonfinite_and_out_of_range_values(self):
        for key, values in {
            "wall_offset": [-51, 201, float("nan"), float("inf")],
            "floor_offset": [-0.1, 21, float("nan"), float("inf")],
            "ceiling_height": [0, 31, float("nan"), float("inf")],
        }.items():
            for value in values:
                with self.subTest(key=key, value=value), self.assertRaises(vol.Invalid):
                    schema.ROOM_SCHEMA({**ROOM, key: value})
        for offset in (-11, 11, float("nan"), float("inf")):
            with self.assertRaises(vol.Invalid):
                schema.OPENING_SCHEMA({**OPENING, "steps": {"side": "room", "count": 3, "depth": 1, "offset": offset}})

    def test_old_rooms_and_openings_inherit_their_defaults(self):
        r = schema.ROOM_SCHEMA(ROOM)
        self.assertIsNone(r["elevation"])
        self.assertIsNone(r["height"])
        self.assertIsNone(schema.OPENING_SCHEMA(OPENING)["steps"])

    def test_room_and_step_data_survive_json_roundtrip(self):
        r = schema.ROOM_SCHEMA({**ROOM, "elevation": 3.4, "height": 4})
        self.assertEqual(schema.ROOM_SCHEMA(json.loads(json.dumps(r)))["elevation"], 3.4)
        for side in ("room", "other"):
            o = schema.OPENING_SCHEMA({**OPENING, "steps": {"side": side, "count": 3, "depth": 0.9}})
            self.assertEqual(schema.OPENING_SCHEMA(json.loads(json.dumps(o)))["steps"], o["steps"])

    def test_invalid_heights_and_steps_are_rejected(self):
        for key, values in {"elevation": [-51, 201, float("nan")], "height": [0, 21, float("nan")]}.items():
            for value in values:
                with self.subTest(key=key, value=value), self.assertRaises(vol.Invalid):
                    schema.ROOM_SCHEMA({**ROOM, key: value})
        for steps in (
            {"side": "invalid", "count": 3, "depth": 1},
            {"side": "room", "count": 0, "depth": 1},
            {"side": "room", "count": 3, "depth": float("nan")},
        ):
            with self.assertRaises(vol.Invalid):
                schema.OPENING_SCHEMA({**OPENING, "steps": steps})


if __name__ == "__main__":
    unittest.main()
