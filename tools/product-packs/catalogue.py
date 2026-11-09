"""Reproducible themed product packs. No UI, integration or schema changes.

Run with the existing pack-tool dependencies:
  python tools/product-packs/catalogue.py --out private/product-packs --key KEY.pem
"""

from __future__ import annotations

import argparse
import base64
import importlib.util
import json
import math
from pathlib import Path

from cryptography.hazmat.primitives import serialization
from cryptography.hazmat.primitives.asymmetric.ed25519 import Ed25519PrivateKey

import devices as d
import furniture as f
import extras as e
from neon import standard_packs
from geometry import LINK_HINTS

ROOT = Path(__file__).resolve().parents[2]
spec = importlib.util.spec_from_file_location("pack_schema", ROOT / "custom_components/neonplan3d/packs.py")
schema = importlib.util.module_from_spec(spec)
spec.loader.exec_module(schema)

# Source URLs and fidelity notes are separate from the importable payload. Dimensions B × T × H.
SOURCES = {
    "viessmann": {"url": "https://ireland.apollo.olxcdn.com/v1/files/1a5tv0xr31433-PL/image;s=3060x4080", "original_model": "private/heating-test/heating.json:gas_condensing_boiler (Release 4)", "notes": "Exact copy of the user-approved Viessmann VertiCell-HG 160, type3001494, from the heating test pack:600×691×1258mm, Vitorange shell, grey front fascia and round grey lid with the same diameter as the body. Technically an indirectly heated160L hot-water cylinder, not a gas boiler. Geometry, decorative thermometer/nameplate, floor mounting, electrical linking and 2D symbol preserved. Standard-palette version additional. Importing the new pack does not migrate existing placements from local.heating_test."},
    "askvoll": {"url": "https://www.ikea.com/cl/es/p/askvoll-estructura-de-cama-blanco-luroey-s49262439/", "notes": "90×200 cm mattress, outer 970×2080×770 mm. White, low side rails and cut-out foot panel. Bedding is an added neutral presentation element."},
    "billy": {"url": "https://www.ikea.com/de/de/p/billy-buecherregal-weiss-50263838/", "notes": "400×280×2020 mm; white, five internal shelves and six compartments, raised base plinth. Pin holes omitted."},
    "rodalm": {"url": "https://www.ikea.com/de/de/p/roedalm-rahmen-schwarz-20548918/", "range": "https://www.ikea.com/de/de/p/roedalm-rahmen-schwarz-90548910/", "notes": "All eight currently listed black image sizes: 10×15,13×18,21×30,30×40,40×50,50×70,61×91,70×100 cm; portrait and landscape. Outer width/height are image size plus 2 cm, visible depth 3 cm. Placement box depth 5 cm is required by existing viewer. Neutral grey placeholder with white passepartout, not an image/screen function; no table stand."},
    "kvistbro": {"url": "https://www.ikea.com/cz/en/p/kvistbro-storage-table-white-30349452/", "notes": "Diameter 440 mm, height 420 mm. Unspecified colour chosen white. Removable round lid with grip recess; tapered open wire basket. Wire pattern is simplified under the 60-part limit; recess is a grey inset, not a boolean cut-out."},
    "markus": {"url": "https://www.ikea.com/de/de/p/markus-drehstuhl-vissle-dunkelgrau-70261150/", "notes": "620×600 mm, minimum height 1290 mm (max1400); seat530×470 mm at460 mm. Vissle dark grey, tall mesh back/headrest, loop arms, five-spoke black roller base. Open grid approximates fine mesh. Fixed lowest height, not animated."},
    "bekant": {"url": "https://www.ikea.com.tr/urun/bekant-beyaz-siyah-160x80-cm-calisma-masasi-79022810", "notes": "1600×800 mm white rounded tabletop and black manually adjustable T-leg base, 650–850 mm. Authored at730 mm. This is not the powered sit/stand version; no electric flag."},
    "virrmo": {"url": "https://www.ikea.com/de/de/p/virrmo-deckenleuchte-led-vernickelt-70430780/", "notes": "Diameter360 mm, height76 mm, 800lm, brushed nickel circular housing and frosted underside. Existing ceiling mounting and light/glow functionality. No texture for brushing."},
    "farmarkvast": {"url": "https://www.ikea.com/de/de/p/farmarkvast-komposteimer-mit-deckel-graugruen-90567003/", "notes": "Diameter200 mm, height230 mm body,350 mm with raised carrying handle;4L. Grey-green tapering bucket, round lid and central knob. Handle raised in model. Colour estimated from original photograph."},
    "plonos": {"url": "https://pandalooshop.com/products/plonos-folientunnel-gewaechshaus-2x3m-gruen", "manufacturer": "https://plonos.pl/katalog.html", "notes": "User-requested 3000mm length×2000mm width×2000mm height (6m²); pack axes width2m/depth3m. Green reinforced PE foil, arched tunnel roof, front zipped door and three side windows each side. Foil/windows are opaque low-poly approximations, no plants, transparency or fabric grid. Retail reference documents this exact variant; brand catalogue does not expose its discontinued detail page."},
    "macbook_pro": {"url": "https://www.apple.com/macbook-pro/specs/", "notes": "Modern14-inch housing, silver; closed312.6×221.2×15.5mm. Open and closed variants, fixed90-degree lid, opened height220mm estimated. Rounded aluminium, black keyboard surround, large trackpad, speaker grilles and notched display. Key groups simplified; existing screen rules only, no live Mac screen capture."},
    "macbook_air": {"url": "https://www.apple.com/uk/macbook-air/specs/", "notes": "Unspecified Air chosen modern13-inch silver; closed304.1×215×11.3mm, not old wedge body. Open/closed variants, opened height211mm estimated, fixed90-degree lid, notched display. Existing screen rules only; no live Mac screen capture."},
    "magic_mouse": {"url": "https://support.apple.com/en-au/111885", "image": "https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111885_SP730_magic_mouse_2.png", "notes": "57.1×113.5×21.6mm, white touch surface/silver rim. Continuous faceted stadium dome over a rounded base, not stepped cylinders. Static desk accessory, no new Bluetooth/control integration."},
    "magic_keyboard": {"url": "https://support.apple.com/en-ie/112037", "image": "https://cdsassets.apple.com/live/SZLF0YNV/images/sp/112037_MQ052_US.jpg", "notes": "Numeric Keypad model without Touch ID:418.7×114.9×10.9mm maximum height (front4.1mm). White keys/silver base, main/navigation/numeric groups. User 'Ziffernblatt' interpreted numeric keypad. Keys grouped and incline simplified under60 parts; static accessory."},
    "sony": {"url": "https://www.sony.de/electronics/kopfbandkopfhoerer/wh-1000xm5", "notes": "Unspecified colour chosen black. Thin adjustable stems, smooth oval earcups/cushions and slim rounded padded headband. Upright190×80×240mm model bounds estimated from photos, NOT manufacturer dimensions (no outer dimensions published). No separate stand and no Bluetooth/control functionality."},
    "weishaupt": {
        "url": "https://www.loebbeshop.de/weishaupt/gas-brennwertgeraet-wtc-gb-15-b-s20-w-48301202/",
        "technical": "https://www.weishaupt.si/uploads/tx_weishaupt_documents/documents/83217613.pdf",
        "image": "https://www.loebbeshop.de/media/58346/catalog/48301103.jpg",
        "notes": "600 × 600 × 1006 mm including 200 mm plinth; the 520 × 335 mm dimensions belong to the wall-mounted WTC-GW, not this WTC-GB S20. Closed white left front and vertical brushed-metal service cover at right, thin black seam and red brand mark. WEM controls concealed behind cover. Front details approximated from product photo.",
    },
    "echo": {
        "url": "https://www.amazon.de/dp/B07PJV3JPR",
        "technical": "https://digprjsurvey.amazon.com/csad/help/node/GNJH5PA484XPH9E7",
        "notes": "99 × 99 × 43 mm; generation 3 puck, not generation 4 sphere. Clock product originally Sandstone: black clock model is the requested custom finish. Static 10:10. Existing media_player linking works manually.",
    },
    "echo4": {
        "url": "https://www.aboutamazon.de/news/amazon-devices-und-services/heute-vorgestellt-das-sind-die-neuigkeiten-bei-echo-alexa-und-fire-tv",
        "technical": "https://digprjsurvey.amazon.com/csad/help/node/T9vK1qIZkTSG7LX8JT",
        "clock_image": "https://media2.nbb-cdn.de/images/products/Amazon_Echo_Dot_Gen4_Uhr_blaugrau_02_0d87.jpg?size=900",
        "black_image": "https://www.audiovolt.co.uk/cdn/shop/products/AmazonEchoDot4thGenSmartSpeaker-Charcoal_1200x1200.png?v=1609245963",
        "notes": "100 × 100 × 89 mm; fourth generation spherical body, four raised top controls, cyan ring at the base. Anthracite without clock and Twilight Blue/Blaugrau with clock interpreted from requested grey. Colours estimated from photos; continuous sloped panels approximate fabric-covered sphere without cylinder steps, no fabric texture. LED digits follow the curved front and show static 10:10, not a rectangular screen. Existing manual media_player binding only; light ring is decorative.",
    },
    "philips_65": {
        "url": "https://acc.philips.lt/c-p/65PUS8848_12/8800-series-4k-ambilight-televizorius",
        "technical": "https://www.documents.philips.com/assets/20230727/d97ebd413891476fb2c3b04c00fa8773.pdf",
        "notes": "1451 × 84 × 834 mm without stand, 1451 × 281 × 905 mm with stand; anthracite centre stand 550 mm wide. Screen part supports existing media-player artwork and Pro Screens camera/image rules, not automatic capture of the TV picture.",
    },
    "samsung": {
        "url": "https://www.samsung.com/de/refrigerators/side-by-side/refrigerator-sbs-rs90f-aod-635l-black-doi-rs80f65kdfef/",
        "image": "https://images.samsung.com/is/image/samsung/p6pim/de/rs80f65kdfef/gallery/de-rs90f-aod-544156-rs80f65kdfef-545834974?$624_468_PNG$",
        "notes": "912 × 726 × 1784 mm; Premium Black Steel; unequal-width doors, recessed centre grip and left water dispenser. No front tablet on this model. Hex colours are photo estimates.",
    },
    "nymane": {
        "url": "https://www.ikea.com/de/de/p/nymane-deckenspot-4-spots-weiss-70337701/",
        "image": "https://www.ikea.com/de/de/images/products/nymane-deckenspot-4-spots-weiss__0607350_pe682899_s5.jpg?f=m",
        "notes": "730 × 70 × 120 mm; four cylindrical GU10 heads. Black and white are separate entries. Heads point down: arbitrary 3D tilt is not supported by the current pack schema.",
    },
    "hue_wall": {
        "url": "https://www.tink.de/p/philips-hue-led-wandleuchte-impress-schmal?opt_92=5",
        "technical": "https://media.flixcar.com/f360cdn/Philips-3853518909-1742930p7_rtl_deuat.pdf",
        "notes": "Narrow Impress 1742930P7; 141 × 120 × 240 mm. Black frame around a tall central frosted diffuser; clear glass panels omitted in low-poly geometry. Existing light entity linking and RGB/brightness supported.",
    },
    "hue_path": {
        "url": "https://www.philips-hue.com/de-de/p/hue-white-and-color-ambiance-impress-wegeleuchte/1743230P7",
        "secondary": "https://www.lampenwelt.de/p/philips-hue-impress-led-wegeleuchte-rgbw-smart-7534113.html",
        "notes": "Tall Impress 1743230P7; 100 × 100 × 770 mm, not the 400 mm low pedestal. Black post and open light cage.",
    },
    "malm_bed": {
        "url": "https://www.ikea.com/de/de/p/malm-bettgestell-hoch-weiss-40249471/",
        "technical": "https://www.ikea.com/at/de/files/pdf/5b/71/5b71cff9/malm.pdf",
        "notes": "White high frame, 100 cm headboard and 209 cm length. Mattress 90/140/160/180 cm, outside width 105/156/176/196 cm. Mattress, neutral bedding and pillows are added presentation elements.",
    },
    "malm_drawers": {
        "url": "https://www.ikea.com/de/de/p/malm-kommode-mit-6-schubladen-weiss-60403584/",
        "technical": "https://www.ikea.com/at/de/files/pdf/5b/71/5b71cff9/malm.pdf",
        "notes": "White, 48 cm depth; 80 × 78 cm (3), 80 × 100 cm (4), 80 × 123 cm (6 tall), 160 × 78 cm (6 wide). Bedside is the 40 × 48 × 55 cm two-drawer chest. Recessed lip instead of external handles.",
    },
    "kallax": {
        "url": "https://www.ikea.com/de/de/p/kallax-regal-schwarzbraun-10275862/",
        "technical": "https://www.ikea.com/at/de/files/pdf/4e/07/4e0769ae/kallax_-kh_nur_online.pdf",
        "three_cell": "https://www.ikea.com/de/de/p/kallax-regal-weiss-30372188/",
        "notes": "Depth 39 cm; one/two/three/four cells span 42/77/112/147 cm. All seven requested orientations, white-stained oak effect and chocolate-like black-brown. Colour values estimated; white oak is not pure white. 3×1 is the rotated 1×3 unit, not a different product.",
    },
    "kallax_base": {
        "url": "https://www.ikea.com/de/de/p/kallax-untergestell-weiss-40501892/",
        "secondary": "https://www.ikea.com/de/de/p/kallax-untergestell-weiss-40501887/",
        "notes": "White steel frame, 18 cm high, 146 or 76 cm wide, 39 cm deep. Separate surfaces plus preassembled 4×1 and 2×2 models, avoiding current automatic stacking limitations.",
    },
    "kura": {
        "url": "https://www.ikea.com/de/de/p/kura-bett-umbaufaehig-weiss-kiefer-80253809/",
        "image": "https://www.ikea.com/de/de/images/products/kura-bett-umbaufaehig-weiss-kiefer__0636268_pe697768_s5.jpg?f=m",
        "notes": "990 × 2090 × 1160 mm, 830 mm clearance under loft. Both reversible arrangements; white panels framed in pine. Mattress presentation element is 12 cm thick.",
    },
    "pax": {
        "url": "https://www.ikea.com/de/de/cat/pax-system-19086/",
        "technical": "https://www.ikea.com/at/de/files/pdf/81/71/8171ea29/ikea-pax-and-komplement-kleiderschranksystem-kaufhilfe.pdf",
        "notes": "Nominal modules: widths 50/75/100 cm, depths 35/58 cm, heights 201/236 cm, white. Each combination open or with illustrative plain white doors. Interior shelves/rail and handles are representative, not an exact chosen KOMPLEMENT/door configuration; no interactive configurator.",
    },
    "kitchenaid": {
        "url": "https://www.kitchenaid.de/kuechenmaschine/mittel/859701301010/kuechenmaschine-mit-kippbarem-motorkopf-47-l-artisan-5ksm125-empire-rot",
        "technical": "https://etisch.at/pdf/Datenblatt/AA32717.pdf",
        "notes": "240 × 370 × 360 mm; Empire Red tilt-head, steel bowl and chrome motor band. Bowl capacity is marketed as 4.7/4.8 L depending on publication. Dimensions follow the 5KSM125 datasheet.",
    },
    "ninja": {
        "url": "https://support.sharkninja.de/de/article/AF400EU-Serien-Ninja-Foodi-Dual-Zone-HeiC39Fluftfritteuse-FAQ-de",
        "notes": "415 × 270 × 325 mm from official specifications; black body, two drawers, two vertical handles and central control dial. Some retailers include handles in a greater depth; model uses the official outer size.",
    },
    "lattego": {
        "url": "https://www.home-appliances.philips/de/de/p/EP5547_90/series-5500-fully-automatic-espresso-machine",
        "technical": "https://www.documents.philips.com/assets/20240125/44c968e5411d4a389d7ab102011182b6.pdf",
        "notes": "246 × 433 × 371 mm; EP5547/90 chosen for unspecified LatteGo 5500 finish. Dark casing, chromed fascia, upper display, twin coffee spouts and right milk carafe. Colour values estimated.",
    },
    "navimow": {
        "url": "https://navimow.com/products/navimow-i206-awd-with-garage-bundle",
        "technical": "https://segwaynavimow.zendesk.com/hc/en-us/article_attachments/55039632761753",
        "image": "https://navimow.com/cdn/shop/files/i206AWD_Front45_07.png?v=1788340432",
        "notes": "385 × 545 × 285 mm; i206 AWD interpreted from requested 206 AWD. Blue-grey shell, two large orange wheels, third powered rear wheel, top height dial and red STOP button. Lawn_mower picker and autonomous motion are unsupported by the current UI; generic switch/status sensor binding only.",
    },
    "burnhard": {
        "url": "https://de.burnhard.com/products/big-fred-deluxe-gasgrill-4-brenner-series-4",
        "technical": "https://stage.burnhard.com/gasgrills/gasgrills-fred/big-fred-deluxe-gasgrill-4-brenner-series-4",
        "notes": "Series 4 chosen: 1414 × 584 × 1190 mm lid closed. Black four-burner grill, two side tables, two lower doors, silver knobs and lid handle. Older generations have different dimensions.",
    },
    "weber": {
        "url": "https://www.weber.com/DE/de/holzkohlegrills/master-touch/master-touch-gbs-e-5750-charcoal-barbecue-57-cm/14701004.html",
        "notes": "650 × 720 × 1070 mm closed, 57 cm grate; black kettle, three aluminium legs, two wheels, ash catcher. Round lid/bowl approximated with 20 low-profile cylinders, not square lofts.",
    },
    "poang": {
        "url": "https://www.ikea.com/de/de/p/poaeng-schaukelstuhl-birkenfurnier-gunnared-beige-s29502039/",
        "image": "https://www.ikea.com/de/de/images/products/poaeng-schaukelstuhl-birkenfurnier-gunnared-beige__1192277_pe900984_s5.jpg?f=m",
        "notes": "680 × 940 × 950 mm, seat 450 mm high; birch veneer frame and Gunnared beige cushions. Curved rocking runners approximated by short loft segments; static model.",
    },
    "kia": {
        "url": "https://prod2-press.kia.com/eu/en/home/models/soul/soul-2014.html",
        "technical": "https://www.kiamedia.com/us/en/models/soul/2014/specifications",
        "notes": "Second generation: 1800 × 4140 × 1600 mm, wheelbase 2570 mm. White body/black roof, boxy cabin and vertical rear lights; mirrors omitted, width is body width. Vehicle can be selected in existing parking spaces.",
    },
    "citroen": {
        "url": "https://www.media.stellantis.com/em-en/citroen/press/new-citroen-c5-aircross-suv-absolute-comfort-in-a-more-assertive-and-prestigious-design",
        "technical": "https://www.citroen.fr/content/dam/citroen/france/showroom/b2c/CT_C5Aircross_1224_publi.pdf",
        "notes": "2024 facelift, NOT 2025 generation: 1840 × 4500 × 1689 mm including roof rails, wheelbase 2730 mm; height varies 1654–1689 with equipment. Black paint and split front light strips; mirrors omitted. Parking vehicle supported; device_tracker binding absent from current UI.",
    },
    "generic": {
        "url": None,
        "notes": "User-specified generic objects, not a claimed brand replica. Microwave 49×39×29 cm; knife block 13×20×34 cm; L kitchen units 90×90 cm with 90 cm worktop (sink including tap 104 cm). Water/gas pipes 26 mm, 1 m sections (5 cm bounding box to respect renderer minimum); water meter 190 mm DN20; G4 gas meter 24×17×32 cm; fuse box 35×11×65 cm. Dimensions are representative authored estimates and freely scalable. Orange clock Ø30 cm, 5 cm bounding depth, white digits/hands, static 10:10.",
    },
}


def catalogue():
    for source in ("malm_bed", "malm_drawers", "pax"):
        note = " Requested additional finishes use the same estimated OAK/BROWN colours as KALLAX; no wood-grain textures or claim of exact current retail finish availability."
        if note not in SOURCES[source]["notes"]:
            SOURCES[source]["notes"] += note
    records = []
    viessmann = json.loads(Path(__file__).with_name("viessmann.json").read_text(encoding="utf-8"))
    LINK_HINTS[viessmann["id"]] = ["switch", "sensor"]

    def pack(id, name, description, groups):
        items = []
        for source, models in groups:
            for item in models:
                items.append(item)
                records.append(dict(pack=f"local.{id}", item=item["id"], name=item["name"]["de"],
                                    size_m=item["size"], source=source,
                                    suggested_entity_domains=LINK_HINTS.get(item["id"], [])))
        return dict(format="fp3dpack", version=1, id=f"local.{id}", name=name,
                    publisher="Lokale Produkt-Packs", release=1, description=description,
                    items=items)

    packs = [
        pack("haustechnik", "Haustechnik · Heizung & Installation",
             "Weishaupt-Wärmeerzeuger, Viessmann VertiCell-HG 160, Wasser-/Gasinstallation, Zähler und Sicherungskasten.", [
                 ("weishaupt", [d.weishaupt()]), ("viessmann", [viessmann]),
                 ("generic", [d.pipe(g, e, h) for g in (False, True) for e, h in [(False, False), (False, True), (True, False)]]
                  + [d.water_meter(), d.gas_meter(), d.fuse_box()])]),
        pack("multimedia", "Multimedia · Echo & Philips TV",
             "Echo Dot 3 und 4, mit/ohne statische Uhr, und Philips 65PUS8848/12 mit vorhandener Bildschirmfunktion.", [
                 ("echo", [d.echo(False), d.echo(True)]),
                 ("echo4", [d.echo4(False), d.echo4(True)]),
                 ("philips_65", [d.television(False), d.television(True)])]),
        pack("beleuchtung", "Beleuchtung · IKEA & Philips Hue",
             "NYMÅNE mit vier Spots in Weiß/Schwarz und Hue Impress für Wand und Wege.", [
                 ("nymane", [d.nymane("#eeeae4", "weiss"), d.nymane("#25272b", "schwarz")]),
                 ("hue_wall", [d.impress(True)]), ("hue_path", [d.impress(False)]), ("virrmo", [e.virrmo()])]),
        pack("kueche", "Küche · Geräte & Eckelemente",
             "Samsung Side-by-Side, KitchenAid, Ninja, LatteGo, Mikrowelle, Messerblock und zur Küche passende Eckelemente.", [
                 ("samsung", [d.samsung()]), ("kitchenaid", [d.mixer()]), ("ninja", [d.ninja()]),
                 ("lattego", [d.lattego()]), ("farmarkvast", [e.farmarkvast()]),
                 ("generic", [d.microwave(), d.knife_block(), f.corner_kitchen(False), f.corner_kitchen(True)])]),
        pack("ikea_malm_kura", "IKEA · MALM & KURA",
             "MALM in Weiß, Eiche weiß lasiert und Schwarzbraun; KURA niedrig und als Hochbett in Weiß/Kiefer.", [
                 ("malm_bed", [f.malm_bed(w, outer, color, finish)
                               for color, finish in [(f.WHITE, "weiss"), (f.OAK, "eiche_weiss"), (f.BROWN, "schokobraun")]
                               for w, outer in [(.9, 1.05), (1.4, 1.56), (1.6, 1.76), (1.8, 1.96)]]),
                 ("malm_drawers", [f.malm_drawers(rows, width, height, columns, color, finish)
                                   for color, finish in [(f.WHITE, "weiss"), (f.OAK, "eiche_weiss"), (f.BROWN, "schokobraun")]
                                   for rows, width, height, columns in [(2, .4, None, 1), (3, .8, None, 1),
                                       (4, .8, None, 1), (6, .8, None, 1), (3, 1.6, .78, 2)]]),
                 ("kura", [f.kura(False), f.kura(True)])]),
        pack("ikea_kallax", "IKEA · KALLAX & Untergestelle",
             "Sieben KALLAX-Formate in Eicheneffekt weiß lasiert und Schwarzbraun; weiße Untergestelle und montierte Kombinationen.", [
                 ("kallax", [f.kallax(c, r, color, name) for c, r in [(4, 4), (3, 1), (1, 3), (2, 2), (4, 2), (4, 1), (1, 4)]
                             for color, name in [(f.OAK, "eiche_weiss"), (f.BROWN, "schokobraun")]]),
                 ("kallax_base", [f.underframe(.76), f.underframe(1.46)] +
                  [f.kallax(c, r, color, name, .18) for c, r in [(2, 2), (4, 1)]
                   for color, name in [(f.OAK, "eiche_weiss"), (f.BROWN, "schokobraun")]])]),
        pack("ikea_pax", "IKEA · PAX Module",
             "PAX in Weiß und Eiche weiß lasiert: 50/75/100 cm breit, 35/58 cm tief, 201/236 cm hoch, offen oder mit Türen.", [
                 ("pax", [f.pax(w, depth, height, closed, color, finish)
                          for color, finish in [(f.WHITE, "weiss"), (f.OAK, "eiche_weiss")]
                          for w in (.5, .75, 1.) for depth in (.35, .58)
                          for height in (2.01, 2.36) for closed in (False, True)])]),
        pack("wohnen", "Wohnen · POÄNG & Wanduhr",
             "POÄNG Schaukelstuhl Birke/Gunnared beige und analoge orange Wanduhr mit weißem Rahmen, Zahlen und Zeigern (10:10).", [
                 ("poang", [f.poang()]), ("generic", [d.clock()])]),
        pack("garten_grill", "Garten · Mähroboter & Grillen",
             "Navimow i206 AWD, BURNHARD Big FRED Deluxe Series 4 und Weber Master-Touch GBS E-5750.", [
                 ("navimow", [d.navimow()]), ("burnhard", [d.gas_grill()]), ("weber", [d.weber()]), ("plonos", [e.greenhouse()])]),
        pack("fahrzeuge", "Fahrzeuge · Kia & Citroën",
             "Kia Soul der zweiten Generation in Weiß/Schwarz und Citroën C5 Aircross Modelljahr 2024 in Schwarz; für Parkplätze.", [
                 ("kia", [d.car(True)]), ("citroen", [d.car(False)])]),
        pack("ikea_wohnen", "IKEA · ASKVOLL, BILLY, KVISTBRO & RÖDALM",
             "ASKVOLL, KVISTBRO, BILLY in Weiß/Eiche weiß lasiert/Buche und acht schwarze RÖDALM-Bildformate hoch/quer.", [
                 ("askvoll", [e.askvoll()]), ("billy", [e.billy(finish) for finish in ("weiss", "eiche_weiss", "buche")]), ("kvistbro", [e.kvistbro()]),
                 ("rodalm", [e.rodalm(*fmt, landscape) for fmt in e.FRAME_FORMATS for landscape in (False, True)])]),
        pack("ikea_buero", "IKEA Büro · MARKUS & BEKANT",
             "MARKUS Vissle dunkelgrau und BEKANT 160×80 mit weißer Platte und schwarzem Untergestell.", [
                 ("markus", [e.markus()]), ("bekant", [e.bekant()])]),
        pack("apple_audio", "Apple & Audio · MacBooks, Zubehör & Sony",
             "Silberne MacBooks offen/geschlossen, weiße Magic Mouse, Magic Keyboard mit Ziffernblock und schwarze WH-1000XM5.", [
                 ("macbook_pro", [e.macbook(True, closed) for closed in (False, True)]),
                 ("macbook_air", [e.macbook(False, closed) for closed in (False, True)]),
                 ("magic_mouse", [e.magic_mouse()]), ("magic_keyboard", [e.magic_keyboard()]), ("sony", [e.sony()])]),
    ]
    for entry in packs:
        if entry["id"] in ("local.ikea_kallax", "local.ikea_pax", "local.multimedia", "local.beleuchtung", "local.kueche", "local.garten_grill", "local.ikea_wohnen", "local.haustechnik"):
            entry["release"] = 2
        elif entry["id"] == "local.ikea_malm_kura":
            entry["release"] = 3
    defaults, default_records = standard_packs(packs, records)
    return packs + defaults, records + default_records


def validate_geometry(pack):
    payload = schema.validate_payload(pack)
    ids = [it["id"] for it in payload["items"]]
    assert len(ids) == len(set(ids)), pack["id"]
    for it in payload["items"]:
        for p in it["parts"]:
            W, D, _ = it["size"]
            angle = math.radians(p.get("rot", 0))
            co, si = abs(math.cos(angle)), abs(math.sin(angle))
            ew = (co * p["w"] * W + si * p["d"] * D) / W
            ed = (si * p["w"] * W + co * p["d"] * D) / D
            assert abs(p["x"]) + ew / 2 <= .500001, (it["id"], p)
            assert abs(p["z"]) + ed / 2 <= .500001, (it["id"], p)
            assert p["y"] + p["h"] <= 1.000001, (it["id"], p)
            if p["shape"] == "loft":
                # A rotated loft turns its upper rectangle around the lower centre too.
                ca, sa = math.cos(angle), math.sin(angle)
                dx, dz = (p["tx"] - p["x"]) * W, (p["tz"] - p["z"]) * D
                tx = p["x"] + (dx * ca - dz * sa) / W
                tz = p["z"] + (dx * sa + dz * ca) / D
                tw = (co * p["tw"] * W + si * p["td"] * D) / W
                td = (si * p["tw"] * W + co * p["td"] * D) / D
                assert abs(tx) + tw / 2 <= .500001, (it["id"], p)
                assert abs(tz) + td / 2 <= .500001, (it["id"], p)
    assert len(json.dumps(pack)) < schema.MAX_PACK_SIZE
    return payload


def build(out, key=None, provider=None):
    SOURCES["billy"]["finishes"] = {
        "white_oak_reference": "https://www.ikea.com.tr/en/product/billy-white-stained-oak-veneer-40x28x202-cm-bookcase-30404207",
        "beech_photo": "https://img.ricardostatic.ch/images/c13c8318-daba-478a-b345-845b0e9835b9/t_1000x750/billy-regal-ikea-buche",
        "notes": "Additional requested finishes; white-stained oak uses the shared KALLAX/MALM OAK estimate #cbbd9c. Beech #c69c6e is an estimated warm natural finish from a used BILLY reference, not birch or dark brown. Backing is shaded for legibility. Same dimensions/geometry; no wood-grain textures or claim of current retail availability.",
    }
    SOURCES["kallax"]["finish_colour"] = {
        "name": "Schwarzbraun", "hex_estimate": f.BROWN,
        "reference_image": "https://www.ikea.com/de/de/images/products/kallax-regal-schwarzbraun__1234712_pe050957_s.jpg",
        "notes": "Near-black with a slight brown cast, corrected to match the original product photo. Shared by KALLAX and requested MALM variants. Estimated render colour, not an official IKEA RGB/RAL specification.",
    }
    packs, records = (provider or catalogue)()
    photo_sources = out / "references/extras/sources.json"
    if photo_sources.exists():
        for source, references in json.loads(photo_sources.read_text()).items():
            if source in SOURCES:
                SOURCES[source]["image"] = references["photo"]
    out.mkdir(parents=True, exist_ok=True)
    private = serialization.load_pem_private_key(key.read_bytes(), password=None) if key else None
    if private is not None and not isinstance(private, Ed25519PrivateKey):
        raise ValueError("Expected an Ed25519 signing key")
    keys = None
    if private:
        raw = private.public_key().public_bytes(serialization.Encoding.Raw, serialization.PublicFormat.Raw)
        keys = {schema.key_id(raw): base64.b64encode(raw).decode()}
        (out / "custom-pack-keys.json").write_text(json.dumps(keys, indent=2) + "\n")
    for pack in packs:
        pack.update(licensee=None, instance=None)
        validate_geometry(pack)
        name = pack["id"].split(".", 1)[1]
        (out / f"{name}.json").write_text(json.dumps(pack, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
        (out / f"{name}.canonical.json").write_bytes(schema.canonical(pack))
        if private:
            sig = base64.b64encode(private.sign(schema.canonical(pack))).decode()
            signed = json.dumps(dict(payload=pack, signature=dict(key=next(iter(keys)), sig=sig)), ensure_ascii=False, indent=1)
            schema.verify_pack(signed, keys=keys)
            (out / f"{name}.fp3dpack").write_text(signed + "\n", encoding="utf-8")
        print(f"{name}: {len(pack['items'])} items; max {max(len(it['parts']) for it in pack['items'])} parts")
    (out / "research.json").write_text(json.dumps(dict(date="2026-10-06", sources=SOURCES, models=records), ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    lines = ["# Produkt-Packs · Modellkatalog", "", "Maße in Metern: Breite × Tiefe × Höhe. Quellen und Einschränkungen: `research.json`.", ""]
    for pack in packs:
        lines += [f"## {pack['name']}", "", "| Modell | B × T × H | Teile |", "| --- | --- | --- |"]
        for item in pack["items"]:
            lines.append(f"| {item['name']['de']} | {' × '.join(f'{v:g}' for v in item['size'])} | {len(item['parts'])} |")
        lines += [""]
    (out / "CATALOGUE.md").write_text("\n".join(lines), encoding="utf-8")
    print(f"Total: {len(packs)} packs, {len(records)} models -> {out}")


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--out", type=Path, default=ROOT / "private/product-packs")
    parser.add_argument("--key", type=Path)
    args = parser.parse_args()
    build(args.out.resolve(), args.key)
