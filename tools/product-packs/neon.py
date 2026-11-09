"""Additional standard-palette packs; original coloured product data is untouched."""
from copy import deepcopy
import colorsys
import json

ROLES = {"body", "fabric", "cushion", "wood", "white", "metal", "dark", "glass", "plant", "pot", "accent"}
FINISH_FAMILIES = {"malm_bed", "malm_drawers", "kallax", "kallax_base", "pax", "billy", "nymane"}
WOOD = {"#eeeae2", "#cbbd9c", "#201f1d", "#d9bd8c", "#c69c6e", "#aa9e83", "#a7835d", "#c9c8c2"}
PACK_LABELS = ["Haustechnik", "Multimedia", "Beleuchtung", "Küche", "IKEA MALM & KURA",
               "IKEA KALLAX", "IKEA PAX", "Wohnen", "Garten & Grill", "Fahrzeuge",
               "IKEA Wohnen", "IKEA Büro", "Apple & Audio"]


def standard_name(name):
    pieces = name.split(" · ")
    details = [p for p in pieces[1:] if p in {"Standfuß", "Wand", "offen", "Türen", "Offen", "Geschlossen", "Ziffernblock", "Hochformat", "Querformat", "Mit Aufsatz", "Paneeltüren", "Vitrinentüren", "Paneel-/Vitrinentüren", "Untere Türen", "OTTEBOL Türen", "HÖGADAL Bambustüren"}]
    if "mit weißem Untergestell" in name:
        details.append("mit Untergestell")
    return " · ".join([pieces[0], *details, "NeonPlan"])


def palette_role(value, source, part):
    if value in ROLES:
        return value
    if part.get("screen"):
        return "glass"
    if part.get("glow"):
        return "white"
    if source == "viessmann" and value == "#ba481c":
        return "body"
    if source in {"echo", "echo4"} and value == "#ffffff":
        return "accent"  # Visible LED numerals in the standard cyan, no product-white.
    if source == "billy":
        if value == "#496170":
            return "glass"
        if value == "#aeb5b9":
            return "metal"
        return "wood"
    if source in {"malm_bed", "malm_drawers", "kallax", "pax", "kura", "askvoll"} and value in WOOD:
        return "wood"
    if source in {"echo", "echo4"} and value in {"#303236", "#92a2b7", "#414349", "#4b4e54"}:
        return "fabric"
    if source == "markus" and value in {"#414143", "#38383a", "#3a3a3c", "#454549"}:
        return "fabric"
    r, g, b = (int(value[i:i+2], 16)/255 for i in (1, 3, 5))
    hue, saturation, brightness = colorsys.rgb_to_hsv(r, g, b)
    if source == "plonos":
        return "fabric" if brightness > .55 else "metal"
    if source == "farmarkvast":
        return "body"
    if brightness < .16:
        return "dark"
    if saturation > .40:
        return "wood" if .07 <= hue <= .16 and source in {"generic", "poang"} else "accent"
    if saturation > .10 and .05 <= hue <= .18:
        return "fabric" if source in {"malm_bed", "askvoll"} else "cushion" if source == "poang" else "wood"
    if brightness > .84:
        return "white"
    if source in {"kia", "citroen", "philips_65"} and b > r*1.3:
        return "glass"
    return "metal" if brightness > .40 else "body"


def geometry_key(item):
    data = {k: v for k, v in item.items() if k not in {"id", "name", "parts"}}
    data["parts"] = [{k: v for k, v in part.items() if k not in {"color", "top"}} for part in item["parts"]]
    return json.dumps(data, sort_keys=True)


def standard_packs(packs, records, labels=None):
    lookup = {(r["pack"], r["item"]): r for r in records}
    result, additions = [], []
    for index, original in enumerate(packs):
        pack = deepcopy(original)
        pack["id"] += "_neon"
        pack["name"] = (labels or PACK_LABELS)[index] + " · NeonPlan"
        pack["release"] = 2 if original["id"] == "local.haustechnik" else 1
        pack["description"] = "Zusätzliche Standardfarben über NeonPlans vorhandene Material-Farbrollen; Produktfarben im separaten Original-Pack."
        pack["items"] = []
        seen = set()
        for item in original["items"]:
            record = lookup[original["id"], item["id"]]
            source = record["source"]
            # Only collapse known finish variants, never gas/water or different functional objects.
            key = (source, geometry_key(item))
            if source in FINISH_FAMILIES and key in seen:
                continue
            seen.add(key)
            variant = deepcopy(item)
            variant["name"] = {language: standard_name(name) for language, name in item["name"].items()}
            for part in variant["parts"]:
                part["color"] = palette_role(part["color"], source, part)
                part.pop("top", None)  # Use the material role's built-in top shade.
                if not part.get("glow") and not part.get("screen") and "edges" not in part:
                    W, D, H = variant["size"]
                    if min(part["w"]*W, part["d"]*D, part["h"]*H) >= .01:
                        part["edges"] = True
            pack["items"].append(variant)
            additions.append({**record, "pack": pack["id"], "name": variant["name"]["de"],
                              "style": "neonplan_standard", "original_pack": original["id"], "original_item": item["id"]})
        result.append(pack)
    return result, additions
