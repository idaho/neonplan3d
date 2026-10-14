# Aktuelle reguläre Möbelpack-Vorschauen

Die reguläre Galerie liegt in `private/product-packs-v2/previews/`, nicht nur in einzelnen Screenshot-Ordnern eines Feature-Worktrees. Nach Änderungen an Modellen, Formen, Anzeigen oder ihren Varianten die Einzelbilder **und** alle Pack-Übersichten nachziehen.

## Neu erzeugen

Vom Repository-Hauptordner aus:

```sh
node private/feature-work/room-height-offsets/scripts/render-custom-pack-previews.mjs private/product-packs-v2
```

Alternativ das Skript aus dem jeweils aktuellen konsolidierten Feature-Worktree mit absolutem Pack-Pfad aufrufen. Die Node-Abhängigkeiten unter dessen `frontend/` müssen installiert sein; lokaler Chrome/Brave über `CHROME_PATH`, auf dem eingerichteten Mac wird Brave automatisch erkannt. Kein alter Generator aus `tools/product-packs/`.

- Alle tatsächlichen `v2.*.json`-Quellpacks einlesen, `.canonical.json` und Begleitdateien ausschließen; keine festgeschriebene alte Anzahl von Packs.
- `frontend/pack-images.mjs` bündelt den aktuellen Quell-Renderer über `frontend/catalogue-preview.ts`. Dadurch sind Profilkörper, Polygon-Wendelstufen, runde Formen und zukünftige native Pack-Formen nicht vom alten Repository-main-Bundle abhängig.
- Bewegliche Teile geschlossen/neutral darstellen und ursprüngliche Farben/Sichtbarkeit erhalten. Für die Offline-Darstellung Zustands-/Bewegungsmetadaten nur in einer Kopie entfernen; Quelldaten und HA werden nicht verändert. Displays über den normalen Display-Layer mit `--:--` bzw. analog 10:10, keine erfundenen Live-Werte.
- In Portionen von zwölf Bildern rendern, damit große Packs keine riesigen Browser-Antworten benötigen. Ein 960×960-PNG je Modell/Variante (480 CSS-Pixel bei Pixelratio 2, wie die bisherige Galerie); 3200×2400-Übersichten mit maximal zwölf Modellen pro Seite. Titel, Modellnamen und Seitennummern gehören zu den aktuellen Daten.
- Pro Pack einen frischen Browser verwenden, damit GPU-/Prozessressourcen über sehr viele Modelle nicht anwachsen. Montagebasis für Körper und Display-Layer gemeinsam auf 0 setzen: Wandobjekte dürfen nicht im Vorschaubild in Körper und darüber schwebende Anzeige zerfallen.
- Gegen leere Geometrie, nicht endliche Grenzen und unsichtbare/blanke Renderausgaben prüfen. Native Ressourcen pro Modell freigeben; Browser auch bei Fehlern schließen.
- Zunächst vollständig in einem neuen `.previews-build-*`-Ordner erstellen. PNG-Abmessungen, exakte IDs und Anzahl der Seiten prüfen; keine veralteten zusätzlichen Modellbilder/Übersichten übernehmen. Quell-Hashes vor/nach dem Rendern vergleichen.
- Erst nach erfolgreicher Prüfung alte Galerie nach `backups/previews-<Zeitstempel>` verschieben und neue Galerie übernehmen; bei fehlgeschlagenem Austausch zurückrollen. Bei Renderfehlern alte Galerie unberührt lassen, unfertigen Build zur Diagnose behalten.
- `previews/index.html` erschließt alle Pack-Übersichten und Einzelbilder. `previews/manifest.json` enthält Erstellungszeitpunkt, Quell-Hashes und geprüfte Mengen. Diese Galerie ist ein lokales Vorschau-Artefakt, keine HA-Installation oder Veröffentlichung.

Der Nachholauftrag vom 14.10.2026 umfasst 58 Packs, 1.911 Einzelbilder und 188 Übersichtseiten; künftige Mengen ergeben sich aus den aktuellen Daten. Sonder-Screenshots unter `previews-native/` bleiben Szenario-/Animationsbelege, sind nicht die reguläre Galerie und ersetzen deren Aktualisierung nicht.

Prüfungen: `node --test scripts/render-custom-pack-previews.test.mjs`, `npx tsc --project tsconfig.catalogue.json` im Frontend und Sichtprüfung repräsentativer Autos, Gerätefronten, Uhren sowie runder/gewendelter Formen.
