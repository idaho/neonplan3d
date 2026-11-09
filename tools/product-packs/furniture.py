"""IKEA furniture and kitchen units, built from measured panels rather than solid cubes."""

from geometry import Model

WHITE = "#eeeae2"
OAK = "#cbbd9c"
# Photo-estimated IKEA Schwarzbraun: near-neutral black with a slight warm cast.
BROWN = "#201f1d"
PINE = "#d9bd8c"
METAL = "#aeb5b9"
FINISH_LABELS = {"weiss": "Weiß", "eiche_weiss": "Eiche weiß lasiert", "schokobraun": "Schwarzbraun"}


def kallax(cols, rows, color, label, foot=0):
    # IKEA outside dimensions, 33.5 cm openings, 3.5 cm outside frame.
    spans = {1: .42, 2: .77, 3: 1.12, 4: 1.47}
    W, H, D = spans[cols], spans[rows], .39
    m = Model((W, D, H + foot))
    t, inner = .035, .016
    for x in (-W / 2 + t / 2, W / 2 - t / 2):
        m.box(x, foot, 0, t, H, D, color)
    for y in (foot, foot + H - t):
        m.box(0, y, 0, W - 2 * t, t, D, color)
    cell_h = (H - 2 * t - (rows - 1) * inner) / rows
    cell_w = (W - 2 * t - (cols - 1) * inner) / cols
    for row in range(1, rows):
        m.box(0, foot + t + row * cell_h + (row - 1) * inner, 0,
              W - 2 * t, inner, D, color)
    for col in range(1, cols):
        m.box(-W / 2 + t + col * cell_w + (col - .5) * inner,
              foot + t, 0, inner, H - 2 * t, D, color)
    if foot:
        add_underframe(m, W - .01, D, foot)
    suffix = " mit weißem Untergestell" if foot else ""
    display = FINISH_LABELS[label]
    return m.item(f"kallax_{cols}x{rows}_{label}" + ("_base" if foot else ""),
                  f"IKEA KALLAX {cols}×{rows} · {display}{suffix}", surface=True)


def add_underframe(m, W, D, H):
    t = .022
    for x in (-W / 2 + t / 2, W / 2 - t / 2):
        for z in (-D / 2 + t / 2, D / 2 - t / 2):
            m.box(x, 0, z, t, H, t, WHITE)
        m.box(x, H - t, 0, t, t, D - 2 * t, WHITE)
    for z in (-D / 2 + t / 2, D / 2 - t / 2):
        m.box(0, H - t, z, W - 2 * t, t, t, WHITE)


def underframe(W):
    m = Model((W, .39, .18))
    add_underframe(m, W, .39, .18)
    return m.item(f"kallax_base_{round(W * 100)}", f"IKEA KALLAX Untergestell {round(W * 100)} cm · Weiß", surface=True)


def malm_bed(width, outer, color=WHITE, finish="weiss"):
    W, D, H = outer, 2.09, 1.0
    m = Model((W, D, H))
    m.box(0, 0, -D / 2 + .035, W, H, .07, color)
    m.box(0, 0, D / 2 - .025, W, .38, .05, color)
    for x in (-W / 2 + .025, W / 2 - .025):
        m.box(x, .12, 0, .05, .26, D - .12, color)
    m.box(0, .28, 0, width, .18, 1.99, "#f6f2e9")
    m.box(0, .46, .17, width - .04, .035, 1.53, "#c2c9c6")
    count = 1 if width < 1.2 else 2
    for i in range(count):
        m.loft((i - (count - 1) / 2) * width / count, .46, -.77,
               min(.65, width / count - .1), .065, .38, "#f8f5ed", tw=min(.61, width / count - .14), td=.34)
    suffix = "" if finish == "weiss" else f"_{finish}"
    return m.item(f"malm_bed_{round(width * 100)}{suffix}",
                  f"IKEA MALM Bett {round(width * 100)}×200 · {FINISH_LABELS[finish]}")


def malm_drawers(rows, width=.8, height=None, columns=1, color=WHITE, finish="weiss"):
    H = height if height is not None else {2: .55, 3: .78, 4: 1.0, 6: 1.23}[rows]
    D = .48
    m = Model((width, D, H))
    m.box(0, .055, -.014, width, H - .075, D - .028, color)
    m.box(0, H - .02, 0, width, .02, D, color)
    m.box(0, 0, -.03, width - .04, .055, D - .06, "#d0cec7" if finish == "weiss" else color)
    gap, start = .004, .058
    rh = (H - .02 - start) / rows
    for col in range(columns):
        cw = width / columns
        for row in range(rows):
            x = (col - (columns - 1) / 2) * cw
            y = start + row * rh
            # Recessed upper lip: MALM has no protruding handles.
            m.box(x, y, D / 2 - .013, cw - gap, rh - gap, .024, color)
            m.box(x, y + rh - .014, D / 2 - .0005, cw - .025, .008, .001,
                  "#11100f" if finish == "schokobraun" else "#9d9991")
    bedside = width == .4 and rows == 2
    name = "Nachttisch / 2 Schubladen" if bedside else f"Kommode / {rows * columns} Schubladen"
    suffix = "" if finish == "weiss" else f"_{finish}"
    return m.item(f"malm_drawers_{rows * columns}_{round(width * 100)}{suffix}",
                  f"IKEA MALM {name} · {FINISH_LABELS[finish]}", surface=True)


def kura(high):
    W, D, H = .99, 2.09, 1.16
    m = Model((W, D, H))
    t = .044
    for x in (-W / 2 + t / 2, W / 2 - t / 2):
        for z in (-D / 2 + t / 2, D / 2 - t / 2):
            m.box(x, 0, z, t, H, t, PINE)
    deck = .83 if high else .285
    m.box(0, deck, 0, .90, .045, 2, PINE)
    m.box(0, deck + .045, 0, .90, .12, 2, "#f6f2e9")
    # White inset panels framed in natural pine; guardrail has a ladder opening.
    panel_y = .94 if high else .16
    for z in (-D / 2 + .025, D / 2 - .025):
        m.box(0, panel_y, z, W - 2 * t, .16, .02, WHITE)
        for y in (panel_y - .024, panel_y + .16):
            m.box(0, y, z, W - 2 * t, .025, .044, PINE)
    m.box(-W / 2 + .022, panel_y, 0, .02, .16, D - 2 * t, WHITE)
    for y in (panel_y - .024, panel_y + .16):
        m.box(-W / 2 + .022, y, 0, .044, .025, D - 2 * t, PINE)
    m.box(W / 2 - .022, panel_y, -.20, .02, .16, D - .49, WHITE)
    for y in (panel_y - .024, panel_y + .16):
        m.box(W / 2 - .022, y, -.20, .044, .025, D - .49, PINE)
    if high:
        for z in (.61, .96):
            m.box(W / 2 - .022, 0, z, .044, H, .044, PINE)
        for y in (.17, .38, .59, .80):
            m.box(W / 2 - .022, y, .785, .044, .04, .35, PINE)
    else:
        # The inverted frame remains above the mattress.
        for x in (-W / 2 + .022, W / 2 - .022):
            m.box(x, H - .044, 0, .044, .044, D - .088, PINE)
        for y in (.60, .82):
            m.box(0, y, -D / 2 + .025, W - .088, .18, .02, WHITE)
        for y in (.575, .80, 1.0):
            m.box(0, y, -D / 2 + .025, W - .088, .025, .044, PINE)
    return m.item("kura_high" if high else "kura_low",
                  "IKEA KURA Hochbett · Weiß/Kiefer" if high else "IKEA KURA niedrig · Weiß/Kiefer")


def pax(W, D, H, closed, color=WHITE, finish="weiss"):
    m = Model((W, D, H))
    t = .018
    for x in (-W / 2 + t / 2, W / 2 - t / 2):
        m.box(x, 0, 0, t, H, D, color)
    m.box(0, 0, 0, W - 2 * t, .075, D, color)
    m.box(0, H - t, 0, W - 2 * t, t, D, color)
    m.box(0, .075, -D / 2 + .002, W - 2 * t, H - .093, .004,
          "#d4d0c8" if finish == "weiss" else color)
    if closed:
        count = 2 if W == 1 else 1
        for i in range(count):
            x = (i - (count - 1) / 2) * W / count
            m.box(x, .075, D / 2 - .01, W / count - .003, H - .078, .02, color)
            hx = x + W / count / 2 - .065
            m.box(hx, .97, D / 2 - .003, .009, .18, .006, METAL)
    else:
        m.box(0, H - .32, 0, W - 2 * t, t, D - .004, color)
        m.part("cyl", 0, H - .48, .06, W - .045, .014, .014, METAL, axis="x")
        for y in (.38, .70):
            m.box(0, y, 0, W - 2 * t, t, D - .004, color)
    label = "Türen" if closed else "offen"
    suffix = "" if finish == "weiss" else f"_{finish}"
    display = "" if finish == "weiss" else f" · {FINISH_LABELS[finish]}"
    return m.item(f"pax_{round(W * 100)}_{round(D * 100)}_{round(H * 100)}_{'doors' if closed else 'open'}{suffix}",
                  f"IKEA PAX {round(W * 100)}×{round(D * 100)}×{round(H * 100)} · {label}{display}")


def poang():
    m = Model((.68, .94, .95))
    wood, fabric = "#d6c3a0", "#b9ac95"
    # Bent plywood rocking runners and cantilever frame, approximated by short lofts.
    for x in (-.30, .30):
        runner = [(-.43, .065), (-.30, .025), (-.12, .008), (.10, .008), (.30, .025), (.43, .075)]
        for (z0, y0), (z1, y1) in zip(runner, runner[1:]):
            m.rod((x, y0, z0), (x, y1, z1), .035, wood)
        m.rod((x, .025, .25), (x, .45, .31), .035, wood)
        m.rod((x, .45, .31), (x, .58, -.12), .035, wood)
        m.rod((x, .58, -.12), (x, .55, -.25), .035, wood)
        m.rod((x, .025, -.30), (x, .22, -.32), .035, wood)
        m.rod((x, .22, -.32), (x, .43, -.18), .035, wood)
        m.rod((x, .43, -.18), (x, .91, -.35), .035, wood)
    m.loft(0, .35, .02, .56, .065, .50, wood, tz=-.01, td=.50)
    m.loft(0, .415, .02, .56, .055, .50, fabric, tz=-.01, td=.48)
    m.loft(0, .43, -.22, .56, .45, .055, fabric, tz=-.34, tw=.53, td=.055)
    m.box(0, .85, -.345, .48, .08, .065, fabric)
    m.box(0, .06, -.22, .56, .03, .035, wood)
    return m.item("poang_rocker", "IKEA POÄNG Schaukelstuhl · Birke/Gunnared beige")


def corner_kitchen(sink=False):
    # L shape, open notch faces +x/+z. Palette roles match the built-in kitchen.
    W = D = .9
    H = .9
    m = Model((W, D, H))
    m.box(0, .08, -.155, W, H - .12, .59, "body", edges="faint")
    m.box(-.155, .08, .295, .59, H - .12, .31, "body", edges="faint")
    m.box(0, 0, -.17, W - .04, .08, .54, "dark")
    m.box(-.17, 0, .285, .54, .08, .29, "dark")
    m.box(0, H - .04, -.15, W, .04, .6, "white", edges=True)
    m.box(-.15, H - .04, .30, .6, .04, .30, "white", edges=True)
    m.box(.145, .08, .295, .01, H - .12, .30, "body", edges="faint")
    m.box(.295, .08, .145, .30, H - .12, .01, "body", edges="faint")
    m.box(.156, .69, .31, .008, .014, .18, "metal")
    m.box(.31, .69, .156, .18, .014, .008, "metal")
    if sink:
        # Diagonal stainless basin in the rear corner of the L-shaped worktop.
        m.box(-.12, .901, -.13, .42, .006, .40, "metal", rot=45)
        m.box(-.12, .907, -.13, .33, .002, .31, "dark", rot=45)
        m.cyl(-.12, .900, -.34, .025, .13, "metal")
        m.box(-.12, 1.025, -.265, .025, .015, .15, "metal")
        m.cyl(-.12, .98, -.19, .02, .06, "metal")
        # Tap increases the total height; keep the countertop itself at 90 cm.
        old_h = m.size[2]
        m.size[2] = 1.04
        for p in m.parts:
            p["y"] *= old_h / 1.04
            p["h"] *= old_h / 1.04
    return m.item("corner_sink" if sink else "corner_cabinet",
                  "Küchen-Eckspüle · passend zur Küche" if sink else "Küchen-Eckschrank · passend zur Küche",
                  surface=True)
