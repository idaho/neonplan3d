"""Verify local custom exports against the current candidate before an upstream update is released."""

import json
from pathlib import Path
import sys

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))

from custom_components.neonplan3d.packs import verify_pack


def check(directory: Path) -> None:
    mapping = json.loads((directory / "VARIANTS.json").read_text())
    models = {}
    files = [*sorted((directory / "neon").glob("*.fp3dpack")), *sorted((directory / "color").glob("*.fp3dpack"))]
    if not files:
        raise ValueError("custom exports are missing")
    for file in files:
        pack = verify_pack(file.read_text())
        for item in pack["items"]:
            models[f"pack:{pack['id']}:{item['id']}"] = item
    fields = (
        "shape",
        "axis",
        "rot",
        "x",
        "y",
        "z",
        "w",
        "d",
        "h",
        "tx",
        "tz",
        "tw",
        "td",
        "points",
        "path",
        "radius",
        "thickness",
    )
    for color, base in mapping["color_to_neon"].items():
        a, b = models[color], models[base]
        if a["size"] != b["size"] or [{k: p.get(k) for k in fields} for p in a["parts"]] != [
            {k: p.get(k) for k in fields} for p in b["parts"]
        ]:
            raise ValueError(f"product geometry differs: {color}")
        if a.get("product", {}).get("base") != base:
            raise ValueError(f"product mapping missing: {color}")
    print(
        f"Verified {len(files)} signed packs and {len(mapping['color_to_neon'])} geometry-preserving product variants"
    )


if __name__ == "__main__":
    check(Path(sys.argv[1]))
