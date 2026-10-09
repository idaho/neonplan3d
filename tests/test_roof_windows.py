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


if __name__ == "__main__":
    unittest.main()
