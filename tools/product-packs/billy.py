"""BILLY single modules, extensions and fixed door combinations, not a live configurator."""
from copy import deepcopy
from geometry import Model
import extras
from furniture import WHITE, OAK

# Photo-estimated render colours, not IKEA RGB specifications.
FINISHES = {
    "weiss": (WHITE, "#c9c8c2", "Weiß"),
    "eiche_weiss": (OAK, "#aa9e83", "Eiche weiß lasiert"),
    "buche": ("#c69c6e", "#a7835d", "Buche"),
    "eiche": ("#bda17c", "#9e8867", "Eichenachbildung"),
    "schwarz_eiche": ("#252321", "#1b1a19", "Schwarze Eichenachbildung"),
    "nussbaum": ("#76533d", "#5f4332", "Nussbaumnachbildung"),
    "blau": ("#146795", "#105177", "Blau"),
}
NORMAL = list(FINISHES)[:-1]
DEEP = ["weiss", "schwarz_eiche"]
DOOR_NAMES = {"paneel": "Paneeltüren", "glas": "Vitrinentüren", "mix": "Paneel-/Vitrinentüren",
              "halb": "Untere Türen", "ottebol": "OTTEBOL Türen", "hogadal": "HÖGADAL Bambustüren"}
FORMATS = [(w, 28, h) for w in (40, 80) for h in (106, 202, 237)] + [(w, 39, h) for w in (40, 80) for h in (202, 237)]


def colour(fin):
    return FINISHES[fin]


def frame(m, width, depth, height, offset, fin, extension=False):
    color, back, _ = colour(fin)
    for x in (-(width-.018)/2, (width-.018)/2):
        m.box(x, offset, 0, .018, height, depth, color)
    bottom = .0 if extension else .079
    m.box(0, offset+bottom, -depth/2+.002, width-.036, height-bottom-.018, .004, back)
    levels = [height-.018] if extension else [.079, *([.400, .721] if height < 1.5 else [.4, .721, 1.042, 1.363, 1.684]), height-.018]
    for y in levels:
        m.box(0, offset+y, 0, width-.036, .018, depth, color)
    if not extension:
        m.box(0, offset, depth/2-.026, width-.036, .079, .018, color)


def door(m, x, y, width, height, z, kind, fin, handle_sign=1):
    color = colour(fin)[0]
    glass = "#496170"
    if kind == "ottebol":
        m.box(x, y, z, width, height, .018, color)
    else:
        rim = .045
        for dx in (-(width-rim)/2, (width-rim)/2):
            m.box(x+dx, y, z, rim, height, .018, color)
        for yy in (y, y+height-rim):
            m.box(x, yy, z, width-2*rim, rim, .018, color)
        inner = height-2*rim
        if kind == "mix":
            m.box(x, y+rim, z-.003, width-2*rim, inner/2, .012, color)
            m.box(x, y+rim+inner/2, z-.003, width-2*rim, inner/2, .004, glass)
            m.box(x, y+height/2-.012, z, width-2*rim, .024, .018, color)
        elif kind == "hogadal":
            # Original HÖGADAL has FOUR cane panels separated by three white rails.
            panel_height = (inner-3*.036)/4
            for i in range(4):
                bottom = y+rim+i*(panel_height+.036)
                m.box(x, bottom, z-.003, width-2*rim, panel_height, .012, "#ba9b67")
                if i < 3:
                    m.box(x, bottom+panel_height, z, width-2*rim, .036, .018, color)
            for dx in (-.07, 0, .07):
                m.box(x+dx, y+rim, z+.0035, .003, inner, .001, "#91744c")
        else:
            fill = glass if kind == "glas" else "#ba9b67" if kind == "hogadal" else color
            m.box(x, y+rim, z-.003, width-2*rim, inner, .004 if kind == "glas" else .012, fill)
    m.disc(x+handle_sign*(width/2-.045), y+height*.48, z+.013, .014, .008, "#aeb5b9")


def bookcase(w, depth, height, fin="weiss", doors=None):
    # Retain the exact previously approved 40×28×202 geometry/IDs in its three finishes.
    if (w, depth, height) == (40, 28, 202) and doors is None and fin in ("weiss", "eiche_weiss", "buche"):
        return deepcopy(extras.billy(fin))
    W, D, H = w/100, depth/100, height/100
    total_depth = D+.020 if doors else D
    m = Model((W, total_depth, H))
    frame(m, W, D, min(H, 2.02), 0, fin)
    if H > 2.02:
        frame(m, W, D, .35, 2.02, fin, True)
    if doors:
        # Centre the full footprint, including front/handle, in its 30/41 cm bounds.
        for part in m.parts:
            part["z"] -= .01/total_depth
        cols = 1 if w == 40 else 2
        cw = (W-.004)/cols
        for col in range(cols):
            x = -W/2+(col+.5)*W/cols
            dh = .97 if H < 1.5 or doors == "halb" else 1.924
            door(m, x, .09, .395, dh, D/2-.007, "paneel" if doors == "halb" else doors, fin,
                 1 if col == 0 else -1)
            if H > 2.02 and doors != "halb":
                door(m, x, 2.02, .395, .35, D/2-.007, "glas", fin, 1 if col == 0 else -1)
    suffix = f"_{doors}" if doors else ""
    name = f"IKEA BILLY {w}×{round(total_depth*100)}×{height}"
    if doors:
        name += f" · {DOOR_NAMES[doors]}"
    elif H > 2.02:
        name += " · Mit Aufsatz"
    return m.item(f"billy_{w}x{depth}x{height}_{fin}{suffix}", name+" · "+colour(fin)[2], surface=True)


def extension(w, depth, fin):
    W, D = w/100, depth/100
    m = Model((W, D, .35))
    frame(m, W, D, .35, 0, fin, True)
    return m.item(f"billy_aufsatz_{w}x{depth}_{fin}", f"IKEA BILLY Aufsatz {w}×{depth}×35 · {colour(fin)[2]}",
                  mount="surface", surface=True)


def models():
    result = []
    for w, depth, height in FORMATS:
        finishes = NORMAL if depth == 28 else DEEP
        for fin in finishes:
            result.append(bookcase(w, depth, height, fin))
            for mode in (["paneel"] if height == 106 else ["paneel", "glas", "mix"]):
                result.append(bookcase(w, depth, height, fin, mode))
        if height >= 202:
            for mode in ("ottebol", "hogadal"):
                result.append(bookcase(w, depth, height, "weiss", mode))
    result.append(bookcase(40, 28, 202, "blau"))
    # An existing retail combination with lower 97 cm doors and open upper shelves.
    for fin in ("weiss", "eiche", "schwarz_eiche", "nussbaum"):
        result.append(bookcase(80, 28, 202, fin, "halb"))
    for w in (40, 80):
        for depth in (28, 39):
            for fin in (NORMAL if depth == 28 else DEEP):
                result.append(extension(w, depth, fin))
    return result
