"""Cleanly regrouped collection. Old pack files/IDs remain available separately for existing plans."""
from copy import deepcopy
from pathlib import Path
import argparse
import json
import billy
from catalogue import catalogue as legacy_catalogue, build, ROOT, SOURCES
from neon import standard_packs


def visual_geometry(item):
    clean = {k: v for k, v in item.items() if k not in {"id", "name", "parts"}}
    clean["parts"] = [{k: v for k, v in p.items() if k not in {"color", "top", "edges"}} for p in item["parts"]]
    return json.dumps(clean, sort_keys=True)

CATEGORIES = {
    "haustechnik": "Haustechnik", "multimedia": "Multimedia", "beleuchtung": "Beleuchtung",
    "kuechenmoebel": "Küchenmöbel", "kuechengeraete": "Küchengeräte", "kuechenzubehoer": "Küchenzubehör",
    "ikea_buero": "IKEA Büro", "ikea_schlafzimmer": "IKEA Schlafzimmer", "ikea_kallax": "IKEA KALLAX",
    "ikea_pax": "IKEA PAX", "ikea_wohnen": "IKEA Wohnen", "ikea_billy": "IKEA BILLY",
    "dekoration": "Dekoration", "garten": "Garten", "grills": "Grills & Grillzubehör",
    "fahrzeuge": "Fahrzeuge", "computer_zubehoer": "Computer & Zubehör",
}


def category(record):
    old, source, item = record["pack"], record["source"], record["item"]
    if source in {"askvoll", "malm_bed", "malm_drawers", "kura"}:
        return "ikea_schlafzimmer"
    if source in {"poang", "kvistbro"}:
        return "ikea_wohnen"
    if source == "billy":
        return "ikea_billy"
    if source == "rodalm" or item == "clock_orange_white":
        return "dekoration"
    if old == "local.kueche":
        return "kuechenmoebel" if item.startswith("corner_") else "kuechenzubehoer" if source == "farmarkvast" or item == "knife_block" else "kuechengeraete"
    if source in {"burnhard", "weber"}:
        return "grills"
    if old == "local.garten_grill":
        return "garten"
    if source == "sony":
        return "multimedia"
    if old == "local.apple_audio":
        return "computer_zubehoer"
    return old.removeprefix("local.")


def catalogue():
    old_packs, old_records = legacy_catalogue()
    original_records = {(r["pack"], r["item"]): r for r in old_records if not r["pack"].endswith("_neon")}
    groups = {key: [] for key in CATEGORIES}
    records = []
    for pack in old_packs:
        if pack["id"].endswith("_neon"):
            continue
        for item in pack["items"]:
            record = original_records[pack["id"], item["id"]]
            key = category(record)
            # Expanded BILLY generator includes the three exact existing models itself.
            if key == "ikea_billy":
                continue
            groups[key].append(deepcopy(item))
            records.append({**record, "pack": f"local.v2.{key}_farben", "previous_pack": pack["id"]})
    for item in billy.models():
        groups["ikea_billy"].append(item)
        previous = "local.ikea_wohnen" if item["id"] in {"billy_40x28x202_"+f for f in ("weiss", "eiche_weiss", "buche")} else None
        records.append(dict(pack="local.v2.ikea_billy_farben", item=item["id"], name=item["name"]["de"],
                            size_m=item["size"], source="billy", suggested_entity_domains=[], previous_pack=previous))
    packs = [dict(format="fp3dpack", version=1, id=f"local.v2.{key}_farben", name=label+" · Produktfarben",
                  publisher="Lokale Produkt-Packs", release=1,
                  description="Produktfarben und bisherige Sonderfarben. Zusätzliche Standardfarben im gleichnamigen Pack ohne Zusatz.",
                  items=groups[key]) for key, label in CATEGORIES.items()]
    standard, standard_records = standard_packs(packs, records, list(CATEGORIES.values()))
    rename = {}
    for key, pack in zip(CATEGORIES, standard):
        new_id = f"local.v2.{key}"
        rename[pack["id"]] = new_id
        pack.update(id=new_id, name=CATEGORIES[key], release=1,
                    description="NeonPlan-Standardfarben über vorhandene Material-Farbrollen. Produktfarben im gleichnamigen Pack mit Zusatz Produktfarben.")
    for record in standard_records:
        record["pack"] = rename[record["pack"]]
    return standard + packs, standard_records + records


def generate(out, key):
    SOURCES["billy"]["expanded"] = {
        "range": "https://www.ikea.com/de/de/cat/billy-buecherregale-58288/",
        "doors": "https://www.ikea.com/de/de/cat/billy-tueren-58290/",
        "extensions": "https://www.ikea.com/de/de/cat/billy-armaturen-und-innenorganisatoren-58291/",
        "historic": "https://www.ikea.com/at/de/files/pdf/e9/5a/e95a3150/billy_kh_nur_online.pdf",
        "notes": "Ten single-unit formats:40/80cm wide,28cm deep,106/202/237cm tall;40/80cm wide,39cm actual depth (nominal40),202/237cm tall.35cm extensions separate and preassembled.28cm versions in white,oak effect,black oak effect,walnut plus requested historical white-stained oak/beech; deep versions white/black oak. Limited blue only40×28×202. OXBERG short paneled doors97cm; full paneled/glass/mixed192.4×39.5cm, lower-door80×28×202 variant; OTTEBOL/HÖGADAL white alternatives. Tall237 combinations add glass extension doors. Historical/custom finish combinations are authored, not a claim of current retail availability. No arbitrary multi-unit walls/corners, lighting or organiser accessories. Glass is an opaque tinted approximation; bamboo weave simplified. Fixed shelf positions and closed doors, no animations/configurator. Handles/front detailing and opened/composed dimensions approximate.",
    }
    reference_file = out / "references/sources.json"
    if reference_file.exists():
        SOURCES["billy"]["expanded"]["photos"] = json.loads(reference_file.read_text(encoding="utf-8"))
    build(out, key, provider=catalogue)
    packs, records = catalogue()
    mappings = []
    old_packs, old_records = legacy_catalogue()
    old_lookup = {(r["pack"], r["item"]): r for r in old_records}
    standards = {p["id"]: p for p in packs if not p["id"].endswith("_farben")}
    for old_pack in old_packs:
        for item in old_pack["items"]:
            old_record = old_lookup[old_pack["id"], item["id"]]
            original_record = {**old_record, "pack": old_record["pack"].removesuffix("_neon")}
            cat = category(original_record)
            new_pack = f"local.v2.{cat}"
            target = next(i for i in standards[new_pack]["items"] if visual_geometry(i) == visual_geometry(item))
            destination = f"pack:{new_pack}:{target['id']}" if old_pack["id"].endswith("_neon") else f"pack:{new_pack}_farben:{item['id']}"
            mappings.append(dict(old=f"pack:{old_pack['id']}:{item['id']}", new=destination))
    (out / "REGROUPING.json").write_text(json.dumps(mappings, ensure_ascii=False, indent=2)+"\n", encoding="utf-8")
    notes = Path(__file__).with_name("RELEASE_V2.md").read_text(encoding="utf-8")
    rows = ["", "## Packs", "", "| Standardfarben | Produktfarben | Modelle Standard / Farbe |", "| --- | --- | ---: |"]
    for key, label in CATEGORIES.items():
        std = next(p for p in packs if p["id"] == f"local.v2.{key}")
        col = next(p for p in packs if p["id"] == f"local.v2.{key}_farben")
        rows.append(f"| [{label}](v2.{key}.fp3dpack) | [{label} · Produktfarben](v2.{key}_farben.fp3dpack) | {len(std['items'])} / {len(col['items'])} |")
    (out / "README.md").write_text(notes+"\n".join(rows)+"\n", encoding="utf-8")


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--out", type=Path, default=ROOT / "private/product-packs-v2")
    parser.add_argument("--key", type=Path)
    args = parser.parse_args()
    generate(args.out.resolve(), args.key)
