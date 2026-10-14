# Profilkörper für Möbel und Fahrzeuge

Implementiert am 14.10.2026 als Erweiterung der Custom-Pack-Formen, ohne UI-Umbau. Verbindlicher Teil von [Custom-Features](custom-features.md) und [Fix-Katalog](custom-feature-fixes.md).

## Datenvertrag

`shape: "profile"` verbindet mehrere geschlossene Polygon-Querschnitte entlang der lokalen Z-Achse. Front des Objekts bleibt +Z. `x/y/z/w/h/d` behalten die bisherigen Teil-Koordinaten und Maße relativ zum Möbel; das neue Format ersetzt sie nicht.

- `sections`: 2–64 Querschnitte mit strikt aufsteigendem `at` zwischen −0,5 und +0,5.
- Jeder Querschnitt besitzt `points: [[x,y], ...]`, 3–32 Punkte. Lokales X zwischen −0,5/+0,5, Y zwischen 0/1; endliche Zahlen, einfacher geschlossener Umlauf gegen den Uhrzeigersinn. Den Anfangspunkt nicht am Ende wiederholen.
- Gleiche Punktanzahl und inhaltlich passende Punktreihenfolge in allen Querschnitten. Korrespondierende Ecken werden verbunden; den Startpunkt nicht zwischen Querschnitten verschieben. Selbstüberschneidungen zwischen unterschiedlich aufgebauten Ringen muss auch der Autor vermeiden.
- `axis` ist hier ausschließlich `z` (auch Standard bei fehlender Angabe); andere Richtungen zunächst durch Teil-/Objektdrehung. Nicht mit den Achsen der vorhandenen Polygonplatten verwechseln.
- Deckflächen an beiden Enden schließen den Körper mit nach außen gerichteten Flächen. Seiten werden deterministisch trianguliert. Kein implizites CSG und keine unbegrenzte Fremd-Mesh-Datei.
- `crease_angle`: optional 0–90°; 0 = flache Flächennormalen, größer 0 = Glättung nur zwischen ausreichend ähnlich gerichteten Nachbarflächen. Schärfere Kanten bleiben erhalten. Ohne Feld bleibt die bisherige Normalenberechnung erhalten. Der Winkel ändert keine Positionen oder Maße.
- Neon-Outlines neuer nativer Formen folgen geometrischen Knicken via `EdgesGeometry`, nicht jedem Dreieck. Bestehendes `edges` steuert ihre Darstellung. Rundungs-/Glättungsfelder verändern keine alten Box-/Loft-Modelle automatisch.
- 2D-Symbole erhalten die projizierte Profilkontur aus minimalem/maximalem X pro Querschnitt. Vorhandene eigene Pack-Symbole haben weiterhin Vorrang; XYZ-Auswahl/Platzierung bleibt unabhängig davon.

Beispiel eines verjüngten Körpers (weitere normale Pack-Felder wie `id`, `color` erforderlich):

```json
{
  "shape": "profile", "axis": "z",
  "x": 0, "y": 0, "z": 0, "w": 1, "h": 1, "d": 1,
  "crease_angle": 35,
  "sections": [
    {"at": -0.5, "points": [[-0.4,0],[0.4,0],[0.4,1],[-0.4,1]]},
    {"at": 0, "points": [[-0.5,0],[0.5,0],[0.45,1],[-0.45,1]]},
    {"at": 0.5, "points": [[-0.35,0],[0.35,0],[0.3,0.9],[-0.3,0.9]]}
  ]
}
```

Packformat bleibt Version 2. Ältere Anwendungen ohne `profile` müssen das Pack mit Update-Hinweis ablehnen, nicht die neue Form als Kasten ersetzen. Für den Import ist deshalb die aktualisierte Custom-Anwendung erforderlich, auch wenn deren Original-Versionsnummer weiterhin 1.18.0 lautet.

## Überarbeitete Autos

Vorhandene Modelle `kia_soul2_white_black_roof` und `citroen_c5_aircross_2024_black` wurden in Neon und Produktfarben überarbeitet. IDs, vorhandene Teil-IDs, Möbelmaße, Fahrzeug-Markierung und Zuordnungen bleiben erhalten. Neue Teile erhalten eigene stabile `vehicle_*`-IDs; keine neuen Möbelstücke oder Pack-Kategorien.

- Unterschiedliche Karosserie- und Fenster-/Dachprofile: hoher, kantiger zweiter Soul versus längerem C5 Aircross mit stärker geneigtem Fensterband.
- Karosserie-Unterkontur hebt sich bei den Radachsen an: echte Radöffnungen an den Seiten, kein vollständiger Kasten hinter den Reifen. Zentraler Unterboden bleibt im Inneren.
- Schmale geneigte A-Säulen, passende weitere Säulen, separate Dachprofile und beim Citroën Dachreling, die dem Dachverlauf folgt. Keine massiven dreieckigen A-Säulen und keine waagerecht schwebende Reling.
- Runde Reifen/Felgen mit höherer Auflösung, sichtbare Naben/Ringe und vereinfachte Speichen. Radstand bzw. Überhänge nicht pauschal symmetrisch ansetzen.
- Radlaufleisten als kurze dünne Profilkörper, nicht lange mehrfach unterteilte Hohlrohre. Dadurch begrenzter Geometrieaufwand bei gleicher Silhouette. Auch niedrige Qualität behält die Profilkontur, Reifen verwenden reduzierte Rundsegmentierung.
- Leuchten, Grill und Kennzeichen vor der neuen Außenhaut positionieren; nicht unter die Karosserie versenken. Späteres Nachjustieren darf keine frei schwebenden Rückleuchten erzeugen.
- Die Modelle bleiben Foto-Näherungen, keine vermessenen CAD-Nachbauten. Original gespeicherte Größe des C5 (1,84 × 4,50 × 1,689 m) absichtlich nicht stillschweigend ändern, obwohl die unten verwendete Herstellerübersicht 1,670 m Höhe mit Reling nennt.

### Referenzen

- [Kia-Presseunterlagen zum Soul 2014 / zweite Generation](https://press.kia.com/content/kiapress/eu/en/home/models/soul/soul-2014.html): Länge 4,140 m, Breite 1,800 m ohne Spiegel, Radstand 2,570 m; Überhänge 0,840/0,730 m. Foto-Seitenansicht: [Auto123 Soul 2014](https://www.auto123.com/en/new-cars/technical-specs/kia/soul/2014/base/lx/). Weiß/Schwarzdach wie vom Nutzer gewählt, nicht die Farbe des Referenzfotos übernehmen.
- [Citroën/Stellantis zum Facelift C5 Aircross 2022](https://www.media.stellantis.com/em-en/citroen/press/new-citroen-c5-aircross-suv-absolute-comfort-in-a-more-assertive-and-prestigious-design): die für Modelljahr 2024 relevante Generation, Länge 4,500 m, Breite 1,840 m, Radstand 2,730 m. Nicht mit der neueren 2025er Generation verwechseln. Foto: [2024er BlueHDi-Seitenansicht bei Parot](https://www.by-parot.com/achat-voiture/citroen/c5-aircross/bluehdi-130-eat8-max-46476).
- [Three.js `toCreasedNormals`](https://threejs.org/docs/pages/module-BufferGeometryUtils.html): Normalenglättung mit Winkelgrenze. Bei einem späteren Wechsel der Rendering-Bibliothek das Verhalten, nicht den Funktionsnamen erhalten.

## Migration, Signaturen und Abnahme

Migration in `scripts/pack-vehicle-profiles.mjs`, aufgerufen vom gepflegten `scripts/upgrade-custom-packs.mjs`. Contract 12 in `private/product-packs-v2/CUSTOM-FEATURES.json`. `--force` kann nach einer Änderung am Migrationsmodul einen Neulauf trotz unveränderter Quell-Hashes auslösen; weiterhin vorherige Daten sichern, Backend-validieren, kanonisch signieren und danach gegen Neon/Product-Zuordnungen prüfen.

Die Skripte unter `tools/product-packs/` nicht verwenden. Exportstruktur bleibt `neon/*.fp3dpack`, `color/*_farben.fp3dpack`. Nach Änderung müssen die aktualisierte Anwendung und beide Fahrzeuge-Packs installiert sein; nur App-Update ersetzt keine bereits importierten Modelle. Private Schlüssel bleiben außerhalb Repository und Installationspaket.

Abnahme:

- `frontend/src/viewer/profile-shapes.test.ts`: geschlossene Geometrie, korrekte Flächenrichtung, Grenzen, winkelabhängige Normalen ohne Geometrieversatz und 2D-Kontur.
- `tests/test_custom_packs.py`: Grenzen, Endlichkeit, Reihenfolge, Umlaufrichtung, gleiche Punktanzahl und ungültige Glättungswinkel.
- `scripts/pack-vehicle-profiles.test.mjs` (vom Pack-Migrationstest importiert): Erhalt der IDs/Maße/Bindungen, unterschiedliche Konturen, echte Radöffnungen, Neon-/Produktgleichheit und Idempotenz. Maximal 60 Teile pro Modell weiter einhalten.
- `scripts/check-custom-pack-exports.py`: neue `sections`/`crease_angle` explizit im Geometrievergleich; tatsächliche signierte Exporte prüfen.
- Browser-Szenen `vehicle-<id>-<color|neon>-<front|side>` mit `ROUND_PACK_DIR`: Seiten- und Schrägansichten in beiden Stilen gegen Fotos prüfen. Auch Spiegelung/XYZ und Fahrzeugdarstellung auf Stellplätzen müssen dieselbe Geometrie verwenden.

Eine höhere Dreieckzahl allein gilt nicht als Verbesserung. Profile, sichtbare Konturen und maßhaltige Migration sind der Wiederaufbauvertrag; Feindetails/Felgen sind bewusst vereinfacht.
