"""Additional researched products, authored solely with existing pack primitives."""
import math
from geometry import Model
from furniture import WHITE, METAL, OAK

BLACK = "#25272a"
SILVER = "#bdc1c5"
FRAME_FORMATS = [(10, 15, 8, 12), (13, 18, 10, 15), (21, 30, 13, 18),
                 (30, 40, 21, 30), (40, 50, 30, 40), (50, 70, 40, 50),
                 (61, 91, 50, 70), (70, 100, 50, 70)]


def rounded_plate(m, x, y, z, w, h, d, r, color):
    """Rounded rectangle without unsupported bevels or textures (six parts)."""
    m.box(x, y, z, w - 2*r, h, d, color)
    m.box(x, y, z, w, h, d - 2*r, color)
    for sx in (-1, 1):
        for sz in (-1, 1):
            m.cyl(x + sx*(w/2-r), y, z + sz*(d/2-r), 2*r, h, color)


def askvoll():
    m = Model((.97, 2.08, .77))
    # ASKVOLL's head/foot panels are also the legs; retain the low foot cut-out.
    m.box(0, .06, -1.022, .97, .71, .036, WHITE)
    m.box(0, .06, 1.022, .97, .28, .036, WHITE)
    for x in (-.411, .411):
        m.box(x, 0, 1.022, .148, .06, .036, WHITE)
    for x in (-.467, .467):
        m.box(x, .13, 0, .036, .20, 2.008, WHITE)
    m.box(0, .26, 0, .898, .06, 2., "#b6a78d")
    rounded_plate(m, 0, .32, 0, .90, .16, 2., .035, "#ece9e1")
    m.box(0, .48, .12, .90, .028, 1.70, "#c7bfb0")
    rounded_plate(m, 0, .48, -.78, .65, .085, .40, .045, "#f1eee7")
    return m.item("askvoll_90x200_weiss", "IKEA ASKVOLL Bett 90×200 · Weiß")


def billy(finish="weiss"):
    color, back, label = {
        "weiss": (WHITE, "#c9c8c2", "Weiß"),
        "eiche_weiss": (OAK, "#aa9e83", "Eiche weiß lasiert"),
        "buche": ("#c69c6e", "#a7835d", "Buche"),
    }[finish]
    m = Model((.4, .28, 2.02))
    for x in (-.191, .191):
        m.box(x, 0, 0, .018, 2.02, .28, color)
    m.box(0, .079, -.138, .364, 1.923, .004, back)
    for y in (.079, .4, .721, 1.042, 1.363, 1.684, 2.002):
        m.box(0, y, 0, .364, .018, .28, color)
    m.box(0, 0, .114, .364, .079, .018, color)
    return m.item(f"billy_40x28x202_{finish}", f"IKEA BILLY 40×28×202 · {label}", surface=True)


def rodalm(w, h, pw, ph, landscape=False):
    if landscape:
        w, h, pw, ph = h, w, ph, pw
    W, H = (w+2)/100, (h+2)/100
    m = Model((W, .05, H))  # Viewer has a 5 cm minimum; visible body is 3 cm.
    for x in (-(W-.01)/2, (W-.01)/2):
        m.box(x, 0, 0, .01, H, .03, "#202020")
    for y in (0, H-.01):
        m.box(0, y, 0, W-.02, .01, .03, "#202020")
    m.box(0, .01, -.012, W-.02, H-.02, .003, "#f0eee9")
    # Neutral placeholder, with the actual passepartout opening (1 cm overlap).
    m.box(0, (H-(ph-1)/100)/2, -.0098, (pw-1)/100, (ph-1)/100, .0004, "#bfc3c5")
    return m.item(f"rodalm_{min(w,h)}x{max(w,h)}_{'quer' if landscape else 'hoch'}",
                  f"IKEA RÖDALM {w}×{h} · Schwarz · {'Querformat' if landscape else 'Hochformat'}",
                  mount="wall", wall_y=1.3)


def kvistbro():
    m = Model((.44, .44, .42))
    def point(angle, radius, y):
        return radius*math.cos(angle), y, radius*math.sin(angle)
    n = 8
    for radius, y in ((.174, .004), (.194, .205), (.214, .397)):
        for i in range(n):
            m.rod(point(i*2*math.pi/n, radius, y), point((i+1)*2*math.pi/n, radius, y), .004, WHITE)
    for i in range(n):
        a = i*2*math.pi/n
        for sign in (-1, 1):
            mid = point(a+sign*math.pi/n, .194, .205)
            m.rod(point(a, .174, .006), mid, .004, WHITE)
            m.rod(mid, point(a+sign*2*math.pi/n, .214, .397), .004, WHITE)
    m.cyl(0, .402, 0, .44, .018, WHITE)
    m.box(0, .4194, 0, .13, .0006, .012, "#95958d")
    return m.item("kvistbro_44_weiss", "IKEA KVISTBRO Ø44 · Weiß", surface=True)


def markus():
    m = Model((.62, .60, 1.29))
    for i in range(5):
        a = 2*math.pi*i/5
        x, z = .264*math.sin(a), .264*math.cos(a)
        m.rod((0, .115, 0), (x, .07, z), .025, BLACK)
        m.wheel(x, 0, z, .060, .042, BLACK)
        m.box(x, .045, z, .022, .035, .022, BLACK)
    m.cyl(0, .08, 0, .065, .20, BLACK)
    m.cyl(0, .25, 0, .031, .16, METAL)
    m.box(0, .38, .02, .28, .032, .30, BLACK)
    rounded_plate(m, 0, .412, .015, .53, .048, .47, .055, "#414143")
    m.box(0, .46, -.205, .43, .075, .044, "#38383a")
    # Open grid approximates the mesh without an opaque upholstered back slab.
    for x in (-.219, .219):
        m.rod((x, .50, -.20), (x*.86, 1.285, -.272), .024, BLACK)
    m.box(0, 1.135, -.259, .39, .155, .057, "#3a3a3c")
    m.box(0, .65, -.216, .413, .04, .024, BLACK)
    for i in range(9):
        x = (i-4)*.043
        m.rod((x, .535, -.205), (x*.90, 1.14, -.258), .003, "#454549")
    for y in (.61, .71, .81, .91, 1.01, 1.11):
        m.box(0, y, -.205-(y-.535)*.088, .39, .003, .003, "#454549")
    for x in (-.287, .287):
        m.rod((x, .46, -.14), (x, .67, -.09), .025, BLACK)
        m.rod((x, .46, .15), (x, .67, .10), .025, BLACK)
        m.box(x, .67, .005, .046, .025, .25, BLACK)
    return m.item("markus_vissle_dunkelgrau", "IKEA MARKUS · Vissle Dunkelgrau")


def bekant():
    m = Model((1.60, .80, .73))
    for x in (-.62, .62):
        rounded_plate(m, x, .008, 0, .09, .03, .66, .03, BLACK)
        m.cyl(x, .038, 0, .06, .115, BLACK)
        m.cyl(x, .153, 0, .075, .557, BLACK)
    m.box(0, .675, 0, 1.29, .035, .055, BLACK)
    rounded_plate(m, 0, .71, 0, 1.60, .02, .80, .06, WHITE)
    return m.item("bekant_160x80_weiss_schwarz", "IKEA BEKANT 160×80 · Weiße Platte / Schwarz", surface=True)


def virrmo():
    m = Model((.36, .36, .076))
    m.cyl(0, .060, 0, .28, .016, "#9c9c96")
    m.cyl(0, .007, 0, .36, .053, "#b7b7ad")
    m.cyl(0, 0, 0, .35, .009, "#e2e5df", glow=True)
    return m.item("virrmo_36_vernickelt", "IKEA VIRRMO Ø36 · Vernickelt", mount="ceiling",
                  light="downlight", entity_domains=["light"])


def farmarkvast():
    m = Model((.20, .20, .35))
    color = "#717b6d"
    m.profile([(0, .025, .142), (.025, .05, .155), (.05, .085, .173),
               (.085, .20, .185), (.20, .205, .19)], color)
    m.cyl(0, .205, 0, .195, .008, color)
    m.cyl(0, .213, 0, .014, .010, "#505e4d")
    m.cyl(0, .223, 0, .048, .007, color)
    for sign in (-1, 1):
        m.wheel(sign*.094, .200, 0, .029, .010, color)
    # Raised carrying handle: manufacturer height 35 cm versus 23 cm lowered.
    for i in range(12):
        a, b = i*math.pi/12, (i+1)*math.pi/12
        m.rod((.094*math.cos(a), .202+.143*math.sin(a), 0),
              (.094*math.cos(b), .202+.143*math.sin(b), 0), .009, color)
    return m.item("farmarkvast_graugruen", "IKEA FARMARKVAST 4 l · Graugrün", mount="surface")


def greenhouse():
    m = Model((2., 3., 2.))
    green, seam = "#9eb79a", "#527452"
    m.box(0, 0, 0, 1.98, 1., 2.98, green)
    levels = [(1., 2.), (1.35, 1.88), (1.64, 1.54), (1.84, 1.08), (1.96, .52), (2., .08)]
    for (y, w), (yy, ww) in zip(levels, levels[1:]):
        m.loft(0, y, 0, w, yy-y, 2.98, green, tw=ww)
    for sign in (-1, 1):
        for z in (-.95, 0, .95):
            m.box(sign*.997, .61, z, .006, .34, .61, "#bfd0b9")
            m.box(sign*.997, .93, z, .006, .028, .65, seam)
        m.box(sign*.988, 0, 0, .022, .032, 3., seam)
    m.box(0, .02, 1.495, .94, 1.57, .010, "#8aa47f")
    for x in (-.482, .482):
        m.box(x, .02, 1.493, .012, 1.57, .014, seam)
    m.box(0, 1.57, 1.477, 1., .065, .046, seam)
    # Arch seam follows the sloped roof at each end. No unsupported transparency.
    for z in (-1.484, 1.484):
        for sign in (-1, 1):
            m.box(sign*.986, .025, z, .026, .966, .026, seam)
            for (y, w), (yy, ww) in zip(levels, levels[1:]):
                m.rod((sign*(w/2-.02), y-.013, z), (sign*max(.01, ww/2-.02), yy-.013, z), .025, seam)
    return m.item("plonos_tunnel_300x200x200", "Plonos Foliengewächshaus 300×200×200 · Grün")


def macbook(pro=True, closed=False):
    W, D, Hclosed = (.3126, .2212, .0155) if pro else (.3041, .215, .0113)
    base = .012 if pro else .0085
    H = Hclosed if closed else .22 if pro else .211
    m = Model((W, D, H))
    rounded_plate(m, 0, 0, 0, W, base, D, .009, SILVER)
    if closed:
        rounded_plate(m, 0, base, 0, W, Hclosed-base, D, .009, "#c8cbce")
        m.cyl(0, Hclosed-.0003, 0, .018, .0003, "#45484b")
    else:
        zback = -D/2+.002
        m.box(0, base, zback, W-.004, H-base, .004, SILVER)
        m.box(0, base+.004, zback+.0022, W-.008, H-base-.008, .0004, "#141519")
        m.box(0, base+.012, zback+.0026, W-.018, H-base-.020, .0004, "#263744", screen=True)
        m.box(0, H-.012, zback+.0029, .023, .008, .0006, "#141519")
        m.box(0, base, -.045, .242, .0008, .087, "#252629")
        for row in range(4):
            for col in range(9):
                m.box((col-4)*.0259, base+.0008, -.077+row*.019, .023, .0008, .016, "#45474a")
        m.box(0, base+.0016, -.004, .10, .0004, .011, "#36383b")
        m.box(0, base, .059, .126, .0007, .075, "#a1a6aa")
        m.box(0, base+.0007, .059, .123, .0003, .072, "#bcc0c3")
        if pro:
            for x in (-.137, .137):
                m.box(x, base, -.045, .014, .0007, .090, "#666c70")
    family = "MacBook Pro 14 Zoll" if pro else "MacBook Air 13 Zoll"
    return m.item(f"macbook_{'pro14' if pro else 'air13'}_{'zu' if closed else 'offen'}",
                  f"Apple {family} · Silber · {'Geschlossen' if closed else 'Offen'}",
                  mount="surface", electric=True, entity_domains=["sensor", "switch"])


def magic_mouse():
    m = Model((.0571, .1135, .0216))
    rounded_plate(m, 0, 0, 0, .0571, .004, .1135, .028, SILVER)
    # Continuous sloping stadium dome, not stepped layers on the touch surface.
    n, alpha, offset = 12, math.pi/12, .0282
    for y0, y1, r0, r1 in [(.004, .0196, .02855, .018), (.0196, .0216, .018, .004)]:
        m.loft(0, y0, 0, 2*r0, y1-y0, 2*offset, "#f1f1ef", tw=2*r1)
        a0, a1 = r0*math.cos(alpha), r1*math.cos(alpha)
        for end in (-1, 1):
            for i in range(n):
                theta = i*2*math.pi/n
                x, dz = -math.sin(theta)*a0/2, math.cos(theta)*a0/2
                z = end*offset+dz
                m.loft(x, y0, z, 2*r0*math.sin(alpha), y1-y0, a0, "#f1f1ef",
                       tx=x, tz=z+(a1-a0)/2, tw=2*r1*math.sin(alpha), td=a1,
                       rot=math.degrees(theta), top="#f1f1ef")
    return m.item("magic_mouse_weiss", "Apple Magic Mouse · Weiß/Silber", mount="surface")


def magic_keyboard():
    m = Model((.4187, .1149, .0109))
    rounded_plate(m, 0, 0, 0, .4187, .007, .1149, .006, SILVER)
    # Separate main, navigation and numeric groups. Key grouping respects 60-part cap.
    for row in range(4):
        for col in range(8):
            m.box(-.184+col*.026, .007, -.035+row*.022, .023, .0039, .019, "#eeeeec")
    m.box(-.093, .007, .050, .099, .0039, .009, "#eeeeec")
    for row in range(4):
        for col in range(3):
            m.box(.144+col*.023, .007, -.035+row*.022, .020, .0039, .019, "#eeeeec")
    for row in range(2):
        m.box(.095, .007, -.035+row*.022, .04, .0039, .018, "#eeeeec")
    for x, z in ((.079, .040), (.097, .040), (.115, .040), (.097, .022)):
        m.box(x, .007, z, .015, .0039, .013, "#eeeeec")
    return m.item("magic_keyboard_numpad_weiss", "Apple Magic Keyboard · Ziffernblock · Weiß/Silber", mount="surface")


def sony():
    m = Model((.19, .08, .24))
    # Elliptical earcups through sloped shoulders, rather than circular wheels.
    for sign in (-1, 1):
        x = sign*.078
        for y in (0, .032):
            m.wheel(x, y, 0, .080, .034, "#292c2d")
        m.box(x, .040, 0, .034, .032, .080, "#292c2d")
        for y in (.014, .038):
            m.wheel(sign*.055, y, 0, .060, .012, "#17191a")
        m.box(sign*.055, .044, 0, .012, .024, .060, "#17191a")
        m.rod((sign*.078, .10, 0), (sign*.074, .166, 0), .012, BLACK)
    for i in range(12):
        a, b = i*math.pi/12, (i+1)*math.pi/12
        m.rod((.074*math.cos(a), .163+.066*math.sin(a), 0),
              (.074*math.cos(b), .163+.066*math.sin(b), 0), .017, BLACK)
    return m.item("sony_wh1000xm5_schwarz", "Sony WH-1000XM5 · Schwarz", mount="surface")
