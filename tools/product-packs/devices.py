"""Product silhouettes: measured overall sizes, photo-derived panel details."""

import math
from geometry import Model

BLACK = "#232529"
DARK = "#101215"
STEEL = "#949b9f"
WHITE = "#eeeae4"


def weishaupt():
    m = Model((.520, .335, 1.006))
    m.box(0, 0, -.004, .50, .20, .30, "#d5d4cd")
    m.box(0, .20, -.002, .52, .796, .325, "#f0efea")
    m.box(0, .995, -.002, .52, .011, .325, "#dedfd9")
    # Closed front: broad white left panel, vertical brushed-metal service cover.
    m.box(-.058, .202, .162, .397, .795, .005, "#f0efea")
    m.box(.201, .202, .162, .113, .795, .005, "#b6bbbd")
    m.box(.141, .203, .165, .003, .790, .003, "#34383b")
    m.box(.143, .815, .166, .003, .022, .001, "#8eae3f")
    m.box(.20, .955, .166, .080, .004, .001, "#b3231c")
    for x in (-.205, .205):
        m.box(x, .01, 0, .025, .17, .265, "#bdbeb8")
    # S20 is the floorstanding cabinet (600 × 600), not the 520 × 335 wall unit.
    m.size = [.600, .600, 1.006]
    return m.item("weishaupt_wtc_gb_15b_s20w", "Weishaupt WTC-GB 15-B S20-W",
                  electric=True, entity_domains=["climate", "water_heater", "sensor", "switch"])


def echo(clock=False):
    m = Model((.099, .099, .043))
    m.profile([(0, .003, .082), (.003, .007, .092), (.007, .011, .097),
               (.011, .031, .098 if clock else .099), (.031, .035, .097), (.035, .039, .093)], "#35373c")
    m.cyl(0, .039, 0, .091, .002, "#37b7db")
    m.cyl(0, .041, 0, .087, .001, "#22252a")
    for x, z in [(-.015, 0), (.015, 0), (0, -.015), (0, .015)]:
        m.cyl(x, .042, z, .010, .001, "#4b4e54")
    # Tiny plus/minus, microphone/action buttons.
    m.box(.015, .0427, 0, .006, .0003, .001, "#d5d5d4")
    m.box(.015, .0427, 0, .001, .0003, .006, "#d5d5d4")
    m.box(-.015, .0427, 0, .006, .0003, .001, "#d5d5d4")
    if clock:
        m.box(0, .013, .0488, .060, .014, .0006, "#35373c")
        m.digits("10", -.018, .015, .0492, .008, .010, "#ffffff")
        m.digits("10", .018, .015, .0492, .008, .010, "#ffffff")
        for y in (.017, .022):
            m.box(0, y, .0492, .0015, .0015, .0002, "#ffffff")
    return m.item("echo_dot3_clock_black" if clock else "echo_dot3_black",
                  "Echo Dot 3 mit Uhr · Schwarz (Sonderfarbe)" if clock else "Echo Dot 3 · Anthrazit",
                  electric=True, mount="surface", entity_domains=["media_player"])


def echo4(clock=False):
    """Gen 4 sphere with truncated base, bottom light ring and optional static LED clock."""
    m = Model((.100, .100, .089))
    fabric = "#92a2b7" if clock else "#303236"
    plastic = "#788ba2" if clock else "#25272b"
    button = "#a7b4c6" if clock else "#484a50"
    m.cyl(0, 0, 0, .067, .002, "#37b7db", top="#37b7db")
    # Ten meridians × four sloped bands: a continuous faceted sphere, no stair-step cylinders.
    radius, centre, sectors = .04975, .039, 10
    levels = [.002, .019, .039, .068, .087]
    alpha = math.pi / sectors
    for y0, y1 in zip(levels, levels[1:]):
        r0 = math.sqrt(radius ** 2 - (y0 - centre) ** 2)
        r1 = math.sqrt(radius ** 2 - (y1 - centre) ** 2)
        a0, a1 = r0 * math.cos(alpha), r1 * math.cos(alpha)
        colour = plastic if y1 <= .019 else fabric
        for sector in range(sectors):
            theta = sector * 2 * math.pi / sectors
            x, z = -math.sin(theta) * a0 / 2, math.cos(theta) * a0 / 2
            m.loft(x, y0, z, 2 * r0 * math.sin(alpha), y1 - y0, a0, colour,
                   tx=x, tz=z + (a1 - a0) / 2, tw=2 * r1 * math.sin(alpha), td=a1,
                   rot=math.degrees(theta), top=colour)
    # Raised controls at the crown. Cyan ring is decorative, not a new HA lamp.
    for x, z in [(-.011, 0), (.011, 0), (0, -.011), (0, .011)]:
        m.cyl(x, .085, z, .007, .003, button, top=button)
    ink = "#d6dce4" if clock else "#9fa3aa"
    m.box(.011, .088, 0, .005, .001, .001, ink)
    m.box(.011, .088, 0, .001, .001, .005, ink)
    m.box(-.011, .088, 0, .005, .001, .001, ink)
    if clock:
        start = len(m.parts)
        m.digits("10", -.0135, .030, 0, .007, .012, "#ffffff")
        m.digits("10", .0135, .030, 0, .007, .012, "#ffffff")
        for y in (.033, .039):
            m.box(0, y, 0, .0015, .0015, .0002, "#ffffff")
        # Follow the curved front so there is no rectangular display plate on the sphere.
        for p in m.parts[start:]:
            x = max(0, abs(p["x"] * m.size[0]) - p["w"] * m.size[0] / 2)
            low, high = p["y"] * m.size[2], (p["y"] + p["h"]) * m.size[2]
            y = min(high, max(low, centre))
            z = math.sqrt(radius ** 2 - (y - centre) ** 2 - x ** 2) + .0001
            p["z"] = round(z / m.size[1], 7)
    return m.item("echo_dot4_clock_bluegrey" if clock else "echo_dot4_black",
                  "Echo Dot 4 mit Uhr · Blaugrau" if clock else "Echo Dot 4 · Anthrazit",
                  electric=True, mount="surface", entity_domains=["media_player"])


def television(wall):
    W, D, H = (1.451, .084, .834) if wall else (1.451, .281, .905)
    m = Model((W, D, H))
    bottom = 0 if wall else .071
    z = -.007 if wall else -.035
    m.box(0, bottom, z, W, .834, .070, "#292c30", edges="faint")
    m.box(0, bottom + .014, z + .036, W - .027, .803, .002, "#080c13", screen=True)
    m.box(0, bottom + .002, z + .036, .047, .006, .002, "#888b8a")
    if not wall:
        m.box(0, 0, 0, .550, .012, .281, "#3c3f42")
        m.box(0, .012, -.035, .12, .060, .070, "#292c30")
    return m.item("philips_65pus8848_wall" if wall else "philips_65pus8848_stand",
                  "Philips 65PUS8848/12 · Wand" if wall else "Philips 65PUS8848/12 · Standfuß",
                  electric=True, mount="wall" if wall else "surface", wall_y=1.0,
                  entity_domains=["media_player", "switch"])


def samsung():
    W, D, H = .912, .726, 1.784
    m = Model((W, D, H))
    m.box(0, .015, -.025, W, H - .03, D - .05, "#33363b")
    split = -.075
    for x, width in [((-W / 2 + split) / 2, W / 2 + split),
                     ((W / 2 + split) / 2, W / 2 - split)]:
        m.box(x, .03, D / 2 - .031, width - .008, H - .035, .056, "#3b3d43", edges="faint")
    m.box(split, .04, D / 2 - .009, .009, H - .06, .018, DARK)
    # Left door's ice/water dispenser (the RS80F has no tablet on its front).
    m.box(-.257, 1.005, D / 2 - .001, .198, .30, .002, "#171a1e")
    m.box(-.257, 1.05, D / 2 - .0006, .124, .19, .001, "#080a0d")
    m.box(-.257, 1.277, D / 2 - .0006, .09, .020, .001, STEEL)
    m.box(-.257, 1.278, D / 2 - .0005, .066, .007, .001, "#9faeb0")
    m.box(.374, 1.745, D / 2 - .0005, .054, .006, .001, STEEL)
    for x in (-.41, .41):
        m.box(x, 0, .29, .035, .025, .06, DARK)
    return m.item("samsung_rs80f65kdfef", "Samsung RS80F65KDFEF · Premium Black Steel",
                  electric=True, entity_domains=["sensor", "switch"])


def mixer():
    m = Model((.24, .37, .36))
    red = "#b71928"
    m.loft(0, 0, 0, .22, .025, .35, red, tw=.20, td=.33)
    m.box(0, .025, -.12, .115, .23, .105, red)
    m.loft(0, .24, -.10, .12, .060, .14, red, tz=-.09, tw=.13, td=.16)
    # Rounded motor head along the front/back axis.
    m.disc(0, .225, -.040, .135, .19, red)
    m.disc(0, .225, .065, .135, .12, red)
    m.disc(0, .221, .118, .139, .012, STEEL)
    m.disc(0, .229, .127, .125, .012, red)
    m.disc(0, .261, .139, .061, .016, STEEL)
    m.cyl(0, .24, .075, .018, .065, STEEL)
    m.profile([(.035, .055, .11), (.055, .075, .145), (.075, .095, .17),
               (.095, .18, .19), (.18, .19, .20)], STEEL, z=.063)
    m.cyl(0, .19, .063, .174, .002, "#444b50")
    for x in (-.113, .113):
        m.box(x, .115, .063, .014, .07, .06, STEEL)
    m.box(-.079, .27, -.09, .015, .018, .07, BLACK)
    return m.item("kitchenaid_5ksm125_red", "KitchenAid Artisan 5KSM125 · Empire Rot",
                  electric=True, mount="surface", entity_domains=["switch", "sensor"])


def ninja():
    W, D, H = .415, .270, .325
    m = Model((W, D, H))
    m.loft(0, .012, -.009, W, .275, D - .018, BLACK, tw=.395, td=.24)
    m.box(0, .275, -.009, .395, .04, .24, "#33363b")
    for x in (-.103, .103):
        m.box(x, .025, .123, .197, .205, .018, "#414349")
        m.box(x, .117, .131, .027, .097, .008, STEEL)
        m.box(x, .132, .132, .032, .078, .006, "#16191d")
        m.box(x, .247, .120, .065, .026, .002, "#070c12")
    m.disc(0, .253, .118, .035, .016, "#a3a8ac")
    m.box(0, .285, .120, .265, .020, .002, "#191d22")
    for x in (-.15, .15):
        for z in (-.08, .08):
            m.box(x, 0, z, .025, .012, .025, DARK)
    return m.item("ninja_af400eu", "Ninja Foodi MAX Dual Zone AF400EU · Schwarz",
                  electric=True, mount="surface", entity_domains=["switch", "sensor"])


def lattego():
    W, D, H = .246, .433, .371
    m = Model((W, D, H))
    m.box(0, .02, -.02, W, H - .035, D - .04, "#282b30")
    m.box(0, .025, .185, W, .24, .016, "#50555a")
    m.box(0, .27, .19, W, .081, .025, "#171c23")
    m.box(0, .285, .203, .106, .05, .002, "#305469")
    for x in (-.08, .08):
        for y in (.29, .325):
            m.box(x, y, .204, .018, .01, .001, "#ccd0d1")
    m.box(0, 0, .146, W, .025, .135, "#41474b")
    for x in [-.08, -.04, 0, .04, .08]:
        m.box(x, .024, .162, .018, .002, .10, "#9da2a5")
    m.box(0, .14, .186, .069, .085, .040, "#181c20")
    for x in (-.017, .017):
        m.cyl(x, .11, .194, .012, .031, STEEL)
    # LatteGo milk carafe on the right, slightly translucent-looking pale shell.
    m.loft(.078, .072, .188, .076, .145, .050, "#cbd4d5", tw=.066, td=.045)
    m.box(.078, .217, .188, .079, .026, .056, BLACK)
    m.box(0, .355, -.09, .21, .016, .23, "#555b5c")
    return m.item("philips_lattego_5500", "Philips LatteGo 5500 · EP5547/90",
                  electric=True, mount="surface", entity_domains=["switch", "sensor"])


def microwave():
    m = Model((.49, .39, .29))
    m.box(0, 0, -.006, .49, .29, .378, "#aab0b4")
    m.box(-.045, .022, .1865, .37, .247, .014, "#24282d")
    m.box(-.047, .056, .194, .28, .18, .001, "#101a21")
    m.box(.127, .055, .193, .014, .19, .004, STEEL)
    m.box(.190, .205, .188, .067, .038, .01, "#162b30")
    for y in (.041, .105):
        m.disc(.190, y, .185, .039, .018, "#4d5359")
    return m.item("microwave", "Mikrowelle · Edelstahl/Schwarz", electric=True,
                  mount="surface", entity_domains=["switch", "sensor"])


def knife_block():
    m = Model((.13, .20, .34))
    m.loft(0, 0, 0, .13, .20, .20, "#9b714b", tz=-.04, tw=.13, td=.12)
    for x, z, h in [(-.038, -.04, .13), (0, -.04, .14), (.038, -.04, .12),
                     (-.026, .01, .10), (.026, .01, .105)]:
        m.box(x, .18, z, .015, h, .019, "#252525")
        m.box(x, .188, z, .022, .007, .024, STEEL)
        m.disc(x, .22, z + .011, .004, .002, STEEL)
    return m.item("knife_block", "Messerblock · Holz mit 5 Messern", mount="surface")


def nymane(color, name):
    m = Model((.73, .07, .12))
    m.box(0, .094, 0, .73, .026, .065, color)
    for x in (-.318, -.106, .106, .318):
        m.cyl(x, .072, 0, .047, .022, color)
        m.cyl(x, .014, 0, .056, .063, color)
        # The bottom of each GU10 is illuminated, not the entire housing.
        m.cyl(x, .010, 0, .044, .004, "#eee4cd", glow=True)
    return m.item(f"nymane_4_{name}", "IKEA NYMÅNE 4 Spots · " + ("Weiß" if name == "weiss" else "Schwarz"), electric=True,
                  mount="ceiling", light="spot", entity_domains=["light", "switch"])


def impress(wall):
    W, D, H = (.141, .12, .24) if wall else (.10, .10, .77)
    m = Model((W, D, H))
    y = 0 if wall else .48
    cage_h = H if wall else .29
    if wall:
        m.box(0, .02, -D / 2 + .009, W, .20, .018, BLACK)
    else:
        m.box(0, 0, 0, W, .48, D, BLACK)
    for bottom in (y, H - .015):
        m.box(0, bottom, 0, W, .015, D, BLACK)
    for x in (-W / 2 + .006, W / 2 - .006):
        for z in (-D / 2 + .006, D / 2 - .006):
            m.box(x, y + .015, z, .012, cage_h - .03, .012, BLACK)
    # Central tall frosted diffuser, framed by clear glass in the real fixture.
    m.box(0, y + .024, 0, W * .48, cage_h - .048, D * .45, "#efe9d9", glow=True)
    return m.item("hue_impress_wall" if wall else "hue_impress_path",
                  "Philips Hue Impress · Wandleuchte schmal" if wall else "Philips Hue Impress · Wegeleuchte",
                  electric=True, light="wall" if wall else "garden",
                  mount="wall" if wall else "floor", wall_y=1.7,
                  entity_domains=["light"])


def clock():
    m = Model((.30, .05, .30))
    m.disc(0, 0, -.002, .30, .041, WHITE)
    m.disc(0, .015, .020, .27, .004, "#e96b21")
    for n in range(1, 13):
        angle = n * math.pi / 6
        x = math.sin(angle) * .107
        y = .15 + math.cos(angle) * .107 - .012
        m.digits(str(n), x, y, .0221, .013, .024, "#ffffff")
    # Static 10:10: a short hour hand and longer minute hand.
    m.loft(0, .15, .0221, .006, .036, .0001, "#ffffff", tx=-.048, tw=.006)
    m.loft(0, .15, .0221, .004, .060, .0001, "#ffffff", tx=.072, tw=.004)
    m.disc(0, .144, .02215, .012, .0001, "#ffffff")
    return m.item("clock_orange_white", "Wanduhr · Weiß/Orange", mount="wall", wall_y=1.6)


def navimow():
    W, D, H = .385, .545, .285
    m = Model((W, D, H))
    m.loft(0, .06, 0, .34, .10, .52, "#25292d", tw=.35, td=.48)
    m.loft(0, .16, .014, .35, .07, .45, "#a6b5c4", tw=.28, td=.36)
    m.box(0, .216, -.027, .23, .017, .31, "#33383d")
    # AWD: two large orange drive wheels and a smaller powered rear wheel.
    for x in (-.169, .169):
        m.wheel(x, .015, .10, .21, .036, "#e46622")
        m.wheel(x * 1.04, .041, .10, .158, .030, "#34393c")
    m.wheel(0, .003, -.19, .13, .065, "#e46622")
    m.cyl(-.037, .23, .063, .145, .024, STEEL)
    m.cyl(-.037, .254, .063, .094, .021, DARK)
    m.box(-.037, .275, .063, .085, .010, .023, BLACK)
    m.box(.064, .235, -.040, .068, .023, .05, "#e13e35")
    m.box(.064, .237, .004, .068, .010, .038, DARK)
    m.box(0, .174, .229, .06, .034, .014, "#7b8a98")
    m.box(0, .182, .237, .037, .018, .002, DARK)
    return m.item("navimow_i206_awd", "Segway Navimow i206 AWD", electric=True,
                  entity_domains=["lawn_mower", "vacuum", "sensor", "switch"])


def gas_grill():
    W, D, H = 1.414, .584, 1.19
    m = Model((W, D, H))
    for x in (-.29, .29):
        for z in (-.20, .20):
            m.wheel(x, 0, z, .065, .03, BLACK)
    m.box(0, .065, 0, .70, .64, .49, "#27282a")
    for x in (-.176, .176):
        m.box(x, .08, .250, .341, .58, .008, "#333437")
        m.box(x + (.09 if x < 0 else -.09), .50, .257, .010, .13, .014, STEEL)
    m.box(0, .705, 0, .74, .07, .50, BLACK)
    m.box(0, .745, .258, .73, .075, .035, STEEL)
    for x in (-.264, -.088, .088, .176, .264):
        m.disc(x, .755, .274, .037, .028, "#737a80")
    m.loft(0, .80, -.015, .74, .30, .54, BLACK, tw=.62, td=.37)
    m.loft(0, 1.10, -.015, .62, .075, .37, BLACK, tw=.50, td=.25)
    m.box(0, .985, .269, .48, .025, .028, STEEL)
    m.disc(0, 1.08, .174, .041, .008, STEEL)
    m.box(0, 1.14, -.015, .23, .05, .08, BLACK)
    for x in (-.537, .537):
        m.box(x, .775, 0, .34, .030, .46, BLACK)
        m.box(x, .72, .224, .30, .055, .012, BLACK)
    m.disc(.537, .733, .238, .034, .019, STEEL)
    return m.item("burnhard_big_fred_deluxe_black", "BURNHARD Big FRED Deluxe · Schwarz / Series 4")


def weber():
    m = Model((.65, .72, 1.07))
    # Round bowl/lid profile. Each tier is short, retaining the kettle silhouette.
    for i in range(20):
        y0 = .56 + i * .022
        y1 = y0 + .022
        cy = (y0 + y1) / 2
        radius = .285 * math.sqrt(max(.05, 1 - ((cy - .78) / .25) ** 2))
        m.cyl(0, y0, -.03, 2 * radius, .022, "#25272b")
    m.cyl(0, .765, -.03, .574, .014, "#777b7e")
    m.box(0, 1.00, -.03, .14, .07, .033, BLACK)
    for x, z in [(-.19, -.19), (.19, -.19), (0, .21)]:
        m.rod((x, .065, z), (x * .64, .61, z * .64), .025, STEEL)
    for x in (-.23, .23):
        m.wheel(x, 0, -.23, .20, .045, BLACK)
        m.wheel(x * 1.04, .045, -.23, .11, .025, "#b9bcb9")
    m.cyl(0, .36, -.03, .21, .13, "#b8bec2")
    m.box(0, .785, .292, .19, .03, .055, BLACK)
    m.disc(.10, .91, .17, .042, .012, STEEL)
    return m.item("weber_master_touch_e5750", "Weber Master-Touch GBS E-5750 · Schwarz / Ø 57")


def pipe(gas, elbow=False, horizontal=False):
    color = "#c9ae55" if gas else "#b9754a"
    if elbow:
        m = Model((.25, .04, .25))
        m.cyl(-.09, 0, 0, .026, .23, color)
        m.part("cyl", .0075, .221, 0, .235, .026, .026, color, axis="x")
        id = "gas_elbow" if gas else "water_elbow"
    elif horizontal:
        m = Model((1, .04, .04))
        m.part("cyl", 0, .007, 0, 1, .026, .026, color, axis="x")
        id = "gas_pipe_horizontal" if gas else "water_pipe_horizontal"
    else:
        m = Model((.05, .05, 1))
        m.cyl(0, 0, 0, .026, 1, color)
        for y in (.15, .82):
            m.cyl(0, y, 0, .035, .018, STEEL)
        id = "gas_pipe_vertical" if gas else "water_pipe_vertical"
    return m.item(id, ("Gasleitung" if gas else "Wasserrohr") + (" · 90° Bogen" if elbow else " · waagerecht" if horizontal else " · senkrecht"), mount="wall", wall_y=.2)


def water_meter():
    m = Model((.19, .11, .115))
    m.part("cyl", 0, .038, 0, .19, .03, .03, "#b59b59", axis="x")
    m.cyl(0, .022, 0, .073, .060, "#b59b59")
    m.disc(0, .032, .020, .083, .043, "#376da1")
    m.disc(0, .04, .043, .064, .003, "#f1eee2")
    m.box(0, .073, .046, .041, .010, .002, DARK)
    return m.item("water_meter", "Wasserzähler · DN20 / 190 mm", mount="wall", wall_y=.6,
                  electric=True, entity_domains=["sensor"])


def gas_meter():
    m = Model((.24, .17, .32))
    m.loft(0, 0, -.009, .24, .225, .15, "#c5c9c3", tw=.22, td=.14)
    m.box(0, .13, .069, .15, .075, .019, WHITE)
    m.box(0, .166, .080, .10, .022, .002, BLACK)
    for x in (-.06, .06):
        m.cyl(x, .225, -.012, .032, .095, "#a4a9a3")
        m.cyl(x, .285, -.012, .055, .021, "#b8aa81")
    return m.item("gas_meter_g4", "Gaszähler · G4 / 110 mm Anschlussabstand", mount="wall", wall_y=.6,
                  electric=True, entity_domains=["sensor"])


def fuse_box():
    m = Model((.35, .11, .65))
    m.box(0, 0, 0, .35, .65, .10, WHITE)
    m.box(0, .04, .051, .30, .57, .008, "#d3d9db")
    for y in (.13, .29, .45):
        m.box(0, y, .0543, .267, .090, .001, "#7e8b93")
        for x in [-.108, -.081, -.054, -.027, 0, .027, .054, .081, .108]:
            m.box(x, y + .012, .0544, .022, .065, .001, "#e0e0d9")
            m.box(x, y + .039, .0545, .016, .018, .001, BLACK)
    m.box(.13, .29, .051, .012, .070, .008, "#9ea6aa")
    return m.item("fuse_box", "Sicherungskasten · 3 Reihen", mount="wall", wall_y=1.1,
                  electric=True, entity_domains=["sensor", "switch"])


def car(kia):
    W, D, H = (1.8, 4.14, 1.6) if kia else (1.84, 4.50, 1.689)
    m = Model((W, D, H))
    paint = "#efeee7" if kia else "#27292c"
    m.loft(0, .20, 0, W * .91, .80, D * .96, paint, tw=W, td=D * .92)
    # Hood and roof are separate, so both silhouettes remain identifiable.
    m.loft(0, .94, D * .34, W, .09, D * .23, paint, tz=D * .32, tw=W * .93, td=D * .24)
    m.loft(0, 1., -D * .10, W * .96, H - 1.06, D * .69, "#283844",
           tz=-D * .15, tw=W * .85, td=D * (.54 if kia else .46))
    m.box(0, H - .06, -D * .15, W * .86, .06, D * (.54 if kia else .46), BLACK)
    # A/B/C pillars and lower door panels.
    for x in (-W * .47, W * .47):
        for z in (-D * .29, -D * .02):
            m.box(x, 1., z, .034, H - 1.09, .075, BLACK)
        m.box(x, .65, -D * .05, .05, .35, D * .60, paint)
        for z in (-D * .23, D * .02):
            m.box(x * 1.015, .93, z, .018, .025, .12, "#b8babc")
    diameter = .64 if kia else .70
    wheelbase = 2.57 if kia else 2.73
    for x in (-W * .435, W * .435):
        for z in (-wheelbase / 2, wheelbase / 2):
            m.wheel(x, 0, z, diameter, .16, "#16191c")
            m.wheel(math.copysign(W * .484, x), .095, z, diameter - .19, .038, "#a8afb4")
            m.wheel(math.copysign(W * .487, x), .195, z, diameter - .39, .030, "#535d65")
    front, rear = D * .481, -D * .481
    m.box(0, .35, front, W * .72, .22, .018, "#11161a")
    if kia:
        for x in (-W * .31, W * .31):
            m.box(x, .77, front, W * .235, .125, .022, "#343e45")
            m.box(x, .78, front + .002, W * .22, .105, .019, "#e7f0ee")
            m.box(x, .38, front, .11, .075, .021, "#d1dedc")
            m.box(x, .55, rear, .105, .52, .024, "#a82725")
    else:
        for x in (-W * .30, W * .30):
            for y in (.745, .81):
                m.box(x, y, front, .37, .034, .020, "#e6eced")
            m.box(x, .77, rear, .38, .13, .022, "#ad292a")
        # Double chevron across the grille and roof rails.
        for x in (-.13, .13):
            m.loft(x, .79, front, .025, .08, .014, STEEL, tx=0, tw=.025)
        for x in (-W * .34, W * .34):
            m.box(x, H - .025, -D * .15, .025, .025, D * .44, STEEL)
    m.box(0, .38, front + .005, .43, .09, .010, WHITE)
    m.box(0, .35, rear - .005, .43, .09, .010, WHITE)
    return m.item("kia_soul2_white_black_roof" if kia else "citroen_c5_aircross_2024_black",
                  "Kia Soul II · Weiß / schwarzes Dach" if kia else "Citroën C5 Aircross 2024 · Schwarz", vehicle=True,
                  electric=True, entity_domains=["device_tracker", "sensor", "lock"])
