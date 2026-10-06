"""Free contour schema tests; runnable locally without Home Assistant using unittest."""

import importlib.util
import json
from pathlib import Path
import unittest

import voluptuous as vol

_spec = importlib.util.spec_from_file_location(
    "freeform_schema", Path(__file__).resolve().parents[1] / "custom_components/neonplan3d/schema.py"
)
schema = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(schema)

POINTS = [[0, 0], [6, 0], [6, 2], [2, 2], [2, 6], [0, 6]]
ROOF = {"id": "test", "x0": 0, "z0": 0, "x1": 6, "z1": 6, "axis": "x", "eave_a": 3, "eave_b": 3, "base": 3}


class FreeformSchemaTests(unittest.TestCase):
    def test_old_rectangles_do_not_require_new_fields(self):
        area = schema.OUTDOOR_SCHEMA({"id": "test", "type": "lawn", "points": POINTS[:3]})
        self.assertFalse(area["freeform"])
        roof = schema.ROOF_SECTION_SCHEMA(ROOF)
        self.assertIsNone(roof["points"])

    def test_free_contours_survive_json_save_and_restore(self):
        for shape in ("gable", "pent", "hip", "halfhip", "mansard", "pyramid", "flat", "parapet"):
            roof = schema.ROOF_SECTION_SCHEMA({**ROOF, "shape": shape, "points": POINTS})
            restored = schema.ROOF_SECTION_SCHEMA(json.loads(json.dumps(roof)))
            self.assertEqual(restored["points"], POINTS)
        area = schema.OUTDOOR_SCHEMA({"id": "test", "type": "pool", "points": POINTS, "freeform": True})
        self.assertEqual(schema.OUTDOOR_SCHEMA(json.loads(json.dumps(area)))["points"], POINTS)

    def test_invalid_free_contours_are_rejected(self):
        for points in (
            [[0, 0], [6, 6], [0, 6], [6, 0]],
            [[0, 0], [2, 0], [1, 0], [0, 4]],
            [[0, 0], [2, 0], [2, 0], [0, 2]],
            [[0, 0], [float("nan"), 0], [0, 4]],
        ):
            with self.subTest(points=points), self.assertRaises(vol.Invalid):
                schema.ROOF_SECTION_SCHEMA({**ROOF, "points": points})
            with self.assertRaises(vol.Invalid):
                schema.OUTDOOR_SCHEMA({"id": "test", "type": "lawn", "points": points, "freeform": True})


if __name__ == "__main__":
    unittest.main()
