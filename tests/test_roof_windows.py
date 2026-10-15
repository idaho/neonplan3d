"""Standalone roof-window validation, without importing Home Assistant."""

import importlib.util
import json
from pathlib import Path
import unittest

import voluptuous as vol

spec = importlib.util.spec_from_file_location(
    "neonplan_schema", Path(__file__).resolve().parents[1] / "custom_components/neonplan3d/schema.py"
)
schema = importlib.util.module_from_spec(spec)
spec.loader.exec_module(schema)


class RoofWindowTests(unittest.TestCase):
    def test_legacy_window_defaults_to_top(self):
        result = schema.ROOF_WINDOW_SCHEMA({"id": "sky", "face": "main:a", "u": 1, "v": 1})
        self.assertEqual(result["hinge"], "top")

    def test_all_pivots_survive_save_roundtrip(self):
        for hinge in ("top", "middle", "bottom"):
            result = schema.ROOF_WINDOW_SCHEMA({"id": "sky", "face": "main:a", "u": 1, "v": 1, "hinge": hinge})
            self.assertEqual(schema.ROOF_WINDOW_SCHEMA(json.loads(json.dumps(result)))["hinge"], hinge)

    def test_invalid_pivot_is_rejected(self):
        with self.assertRaises(vol.Invalid):
            schema.ROOF_WINDOW_SCHEMA({"id": "sky", "face": "main:a", "u": 1, "v": 1, "hinge": "left"})

    def test_freeform_and_shading_roundtrip_preserves_bindings(self):
        points = [[0, 0], [1, 0], [1, 0.4], [0.4, 0.4], [0.4, 1], [0, 1]]
        for direction in ("top", "bottom", "left", "right"):
            window = {
                "id": "sky",
                "face": "main:a",
                "u": 1,
                "v": 1,
                "w": 8,
                "h": 5,
                "points": points,
                "cover_style": "awning",
                "cover_direction": direction,
                "cover_color": "#708090",
                "cover": "cover.terrace",
                "window": "cover.motor",
                "contact": "binary_sensor.window",
                "float": True,
                "hinge": "middle",
            }
            result = schema.ROOF_WINDOW_SCHEMA(json.loads(json.dumps(schema.ROOF_WINDOW_SCHEMA(window))))
            for key, value in window.items():
                self.assertEqual(result[key], value)

    def test_invalid_freeform_and_shading_are_rejected(self):
        base = {"id": "sky", "face": "main:a", "u": 1, "v": 1}
        for patch in (
            {"points": [[0, 0], [1, 1], [0, 1], [1, 0]]},
            {"points": [[0, 0], [1, 0], [1, 0], [0, 1]]},
            {"points": [[0, 0], [1.1, 0], [0, 1]]},
            {"points": [[0, 0], [float("nan"), 0], [0, 1]]},
            {"points": [[0, 0], [0.01, 0], [0, 0.01]]},
            {"points": [[0, 0], [1, 0]]},
            {"points": [[0, 0], [1, 0], [1, 1], [0, 1]] * 9},
            {"cover_style": "curtain"},
            {"cover_direction": "diagonal"},
            {"cover_color": "red"},
            {"w": float("nan")},
            {"h": float("inf")},
        ):
            with self.subTest(patch=patch), self.assertRaises(vol.Invalid):
                schema.ROOF_WINDOW_SCHEMA({**base, **patch})


if __name__ == "__main__":
    unittest.main()
