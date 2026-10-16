import type { RoofWindow } from "./model.ts";
import type { HomeAssistant } from "./types.ts";
import { isUnavailable, openingState } from "./devices.ts";

const fraction = (value: unknown): number | null => {
  const n = typeof value === "number" ? value : typeof value === "string" && value.trim() ? Number(value) : NaN;
  return Number.isFinite(n) ? Math.min(1, Math.max(0, n / 100)) : null;
};
/** Independent sash and shade. HA shutters open by retracting; awnings open by extending. */
export function roofWindowState(hass: HomeAssistant, w: RoofWindow): {open:number;tilt:number;cover:number} {
  const ref = (id: string | null | undefined) => id && id !== "none" ? id : null;
  const s = openingState(hass, {cover:null,contact:ref(w.contact),tilt:ref(w.tilt)}, "window");
  const motor = ref(w.window) ? hass.states[w.window!] : undefined;
  let open = s.open;
  if (motor && !isUnavailable(motor)) open = fraction(motor.attributes.current_position) ?? (["open","opening"].includes(motor.state) ? 1 : 0);
  const shade = ref(w.cover) ? hass.states[w.cover!] : undefined;
  let cover = 0;
  if (shade && !isUnavailable(shade)) {
    const position = fraction(shade.attributes.current_position) ?? (shade.state === "open" ? 1 : shade.state === "closed" ? 0 : ["opening","closing"].includes(shade.state) ? 0.5 : null);
    const awning = shade.attributes.device_class === "awning" || (!shade.attributes.device_class && w.cover_style === "awning");
    if (position !== null) cover = awning ? position : 1-position;
  }
  return {open,tilt:s.tilt,cover};
}
