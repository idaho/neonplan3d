"""Bundle finished signed packs and native preview PNGs, never private keys or reference photos."""

import argparse
import hashlib
import json
import math
from pathlib import Path
from zipfile import ZipFile, ZIP_DEFLATED

from catalogue import schema, catalogue


def bundle(out, regrouped=False):
    keys = json.loads((out / "custom-pack-keys.json").read_text())
    packs = sorted(out.glob("*.fp3dpack"))
    if regrouped:
        from catalogue_v2 import catalogue as grouped_catalogue
        expected, _ = grouped_catalogue()
    else:
        expected, _ = catalogue()
    expected_files = {p['id'].split('.', 1)[1] + '.fp3dpack' for p in expected}
    if {p.name for p in packs} != expected_files:
        raise ValueError("Signed pack files do not match the current catalogue")
    payloads = [schema.verify_pack(pack.read_text(encoding="utf-8"), keys=keys) for pack in packs]
    if not regrouped:
        (out / "README.md").write_text(Path(__file__).with_name("RELEASE.md").read_text(encoding="utf-8"), encoding="utf-8")
    files = packs + [out / name for name in ("README.md", "CATALOGUE.md", "research.json", "custom-pack-keys.json")]
    if regrouped:
        files.append(out / "REGROUPING.json")
    files += sorted((out / "previews").rglob("*.png"))
    expected_pngs = sum(len(p["items"]) + math.ceil(len(p["items"]) / 12) for p in payloads)
    if len([p for p in files if p.suffix == ".png"]) != expected_pngs:
        raise ValueError(f"Expected {expected_pngs} individual previews/overview sheets; render first")
    manifest = {str(p.relative_to(out)): hashlib.sha256(p.read_bytes()).hexdigest() for p in files}
    checksum_file = out / "SHA256.json"
    checksum_file.write_text(json.dumps(manifest, indent=2) + "\n")
    archive = out / "produkt-packs.zip"
    with ZipFile(archive, "w", ZIP_DEFLATED) as z:
        for path in files + [checksum_file]:
            z.write(path, path.relative_to(out))
    print(f"{archive}: {len(files) + 1} files, {archive.stat().st_size} bytes")


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("out", type=Path)
    parser.add_argument("--regrouped", action="store_true")
    args = parser.parse_args()
    bundle(args.out.resolve(), args.regrouped)
