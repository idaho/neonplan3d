"""Small, metre-based authoring helpers; output is the normal signed-pack schema."""

from __future__ import annotations

import math

LINK_HINTS = {}


class Model:
    def __init__(self, size):
        self.size = list(size)
        self.parts = []

    def part(self, shape, x, y, z, w, h, d, color, **extra):
        W, D, H = self.size
        p = dict(shape=shape, x=x / W, z=z / D, y=y / H,
                 w=w / W, d=d / D, h=h / H, color=color, **extra)
        self.parts.append({k: round(v, 7) if isinstance(v, float) else v for k, v in p.items()})
        return p

    def box(self, x, y, z, w, h, d, color, **extra):
        return self.part("box", x, y, z, w, h, d, color, **extra)

    def cyl(self, x, y, z, diameter, height, color, **extra):
        return self.part("cyl", x, y, z, diameter, height, diameter, color, **extra)

    def wheel(self, x, y, z, diameter, thickness, color, **extra):
        # Current viewer winds both x caps towards +x. Flip left wheels locally.
        extra.setdefault("rot", 180 if x < 0 else 0)
        return self.part("cyl", x, y, z, thickness, diameter, diameter, color, axis="x", **extra)

    def disc(self, x, y, z, diameter, thickness, color, **extra):
        # The shipped z-cylinder caps face -z; turn the symmetric part locally.
        extra.setdefault("rot", 180)
        return self.part("cyl", x, y, z, diameter, diameter, thickness, color, axis="z", **extra)

    def loft(self, x, y, z, w, h, d, color, tx=None, tz=None, tw=None, td=None, **extra):
        W, D, _ = self.size
        return self.part("loft", x, y, z, w, h, d, color,
                         tx=(x if tx is None else tx) / W,
                         tz=(z if tz is None else tz) / D,
                         tw=(w if tw is None else tw) / W,
                         td=(d if td is None else td) / D, **extra)

    def rod(self, a, b, width, color):
        """Sloping rectangular rod in an x/y or z/y plane, using a loft."""
        x0, y0, z0 = a
        x1, y1, z1 = b
        if abs(y1 - y0) < 0.00001:
            length = math.hypot(x1 - x0, z1 - z0)
            angle = math.degrees(math.atan2(z1 - z0, x1 - x0))
            self.box((x0 + x1) / 2, y0, (z0 + z1) / 2,
                     length + width, width, width, color, rot=angle)
        else:
            if y1 < y0:
                x0, y0, z0, x1, y1, z1 = x1, y1, z1, x0, y0, z0
            self.loft(x0, y0, z0, width, y1 - y0, width, color, tx=x1, tz=z1)

    def profile(self, points, color, x=0, z=0):
        """Round stepped profile: [(bottom, top, diameter), ...]."""
        for bottom, top, diameter in points:
            self.cyl(x, bottom, z, diameter, top - bottom, color)

    def item(self, id, de, en=None, **extra):
        assert 0 < len(self.parts) <= 60, (id, len(self.parts))
        # Hints live in the research sidecar; the current pack schema stays unchanged.
        domains = extra.pop("entity_domains", None)
        if domains:
            LINK_HINTS[id] = domains
        return dict(id=id, name={"de": de, "en": en or de}, size=self.size,
                    parts=self.parts, **extra)

    def digit(self, value, x, y, z, width, height, color):
        """Compact front-facing numerals using only existing box parts."""
        t = width * .18
        depth = max(.0002, self.size[1] * .001)
        if value == "1":
            self.box(x + width * .22, y, z, t, height, depth, color)
            return
        if value == "0":
            for dx in (-width / 2 + t / 2, width / 2 - t / 2):
                self.box(x + dx, y, z, t, height, depth, color)
            for yy in (y, y + height - t):
                self.box(x, yy, z, width - 2 * t, t, depth, color)
            return
        segments = {"2": "abged", "3": "abgcd", "4": "fgbc", "5": "afgcd",
                    "6": "afgecd", "7": "abc", "8": "abcdefg", "9": "abfgcd"}[value]
        for seg in segments:
            if seg in "agd":
                yy = {"a": y + height - t, "g": y + height / 2 - t / 2, "d": y}[seg]
                self.box(x, yy, z, width, t, depth, color)
            else:
                dx = (-1 if seg in "ef" else 1) * (width - t) / 2
                yy = y + (height / 2 if seg in "bf" else 0)
                self.box(x + dx, yy, z, t, height / 2, depth, color)

    def digits(self, text, x, y, z, width, height, color):
        step = width * 1.25
        for i, value in enumerate(text):
            self.digit(value, x + (i - (len(text) - 1) / 2) * step, y, z, width, height, color)
