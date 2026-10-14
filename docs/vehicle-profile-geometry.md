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
- Lackierter Kabinenkörper mit separaten, dünnen Front-/Heckscheiben und drei getrennten Seitenscheiben je Seite. Kein durchgehend verglaster Kabinenblock. Fenster enden vor den A-/B-/C-Säulen; jede Querschnittsfläche bleibt positiv und geschlossen, auch an spitz zulaufenden Fensterecken. Die historischen IDs `vehicle_a_pillar_left/right` bleiben erhalten und tragen jetzt die hinteren Dreiecksfenster; die lackierten Säulen entstehen aus dem Kabinenkörper zwischen den Fenstern.
- Kürzere Kia-Haube, weiter nach vorne gezogenes schwarzes Dach, aufrechteres Heck und eine hohe Heckscheibe statt Sichtschlitz. Beim Citroën stärker gekrönte Schultern, eigenständige Fensterkontur und dachfolgende Reling. Spiegel, Türteilung und Seitenschweller ergänzen die Silhouette.
- Runde Reifen/Felgen mit höherer Auflösung, sichtbare Naben/Ringe und vereinfachte Speichen. Radstand bzw. Überhänge nicht pauschal symmetrisch ansetzen.
- Radlaufleisten als kurze dünne Profilkörper, nicht lange mehrfach unterteilte Hohlrohre. Dadurch begrenzter Geometrieaufwand bei gleicher Silhouette. Auch niedrige Qualität behält die Profilkontur, Reifen verwenden reduzierte Rundsegmentierung.
- Spiegel mit mittlerer, kleine gerundete Zier-/Leuchtenteile mit niedriger Detailstufe; nicht überall maximale Unterteilung. Release 12 verwendet je 60 Teile und 13.284/10.796 native Dreiecke (Kia/Citroën); bei niedriger Qualität 10.116/8.140. Budget: unter 14.000 bzw. 10.500, maximal 60 Teile. Die zusätzliche Kia-Geometrie folgt den gekrümmten Glasflächen, nicht pauschal höherer Detailstufe aller Teile. Silhouette und Radöffnungen bleiben auch bei niedriger Qualität gleich. Kleines Kia-Emblem als 16-Punkt-Ellipsenplatte statt dicht segmentiertem Ellipsoid.
- Leuchten, Grill und Kennzeichen vor der neuen Außenhaut positionieren; nicht unter die Karosserie versenken. Späteres Nachjustieren darf keine frei schwebenden Rückleuchten erzeugen.
- Die Modelle bleiben Foto-Näherungen, keine vermessenen CAD-Nachbauten. Original gespeicherte Größe des C5 (1,84 × 4,50 × 1,689 m) absichtlich nicht stillschweigend ändern, obwohl die unten verwendete Herstellerübersicht 1,670 m Höhe mit Reling nennt.

### Referenzen

- [Kia-Presseunterlagen zum Soul 2014 / zweite Generation](https://press.kia.com/content/kiapress/eu/en/home/models/soul/soul-2014.html): Länge 4,140 m, Breite 1,800 m ohne Spiegel, Radstand 2,570 m; Überhänge 0,840/0,730 m. Foto-Seitenansicht: [Auto123 Soul 2014](https://www.auto123.com/en/new-cars/technical-specs/kia/soul/2014/base/lx/). Weiß/Schwarzdach wie vom Nutzer gewählt, nicht die Farbe des Referenzfotos übernehmen.
- [Citroën/Stellantis zum Facelift C5 Aircross 2022](https://www.media.stellantis.com/em-en/citroen/press/new-citroen-c5-aircross-suv-absolute-comfort-in-a-more-assertive-and-prestigious-design): die für Modelljahr 2024 relevante Generation, Länge 4,500 m, Breite 1,840 m, Radstand 2,730 m. Nicht mit der neueren 2025er Generation verwechseln. Foto: [2024er BlueHDi-Seitenansicht bei Parot](https://www.by-parot.com/achat-voiture/citroen/c5-aircross/bluehdi-130-eat8-max-46476).
- [Three.js `toCreasedNormals`](https://threejs.org/docs/pages/module-BufferGeometryUtils.html): Normalenglättung mit Winkelgrenze. Bei einem späteren Wechsel der Rendering-Bibliothek das Verhalten, nicht den Funktionsnamen erhalten.

## Migration, Signaturen und Abnahme

Migration in `scripts/pack-vehicle-profiles.mjs`, aufgerufen vom gepflegten `scripts/upgrade-custom-packs.mjs`. Contract 15 in `private/product-packs-v2/CUSTOM-FEATURES.json` erzwingt die erneute Migration des vorherigen Profilstands. `--force` kann nach einer Änderung am Migrationsmodul einen Neulauf trotz unveränderter Quell-Hashes auslösen; weiterhin vorherige Daten sichern, Backend-validieren, kanonisch signieren und danach gegen Neon/Product-Zuordnungen prüfen.

## Kia: eigene Fensterkonturen und geformte Seitenhaut · Release 12

Release 11 wurde erneut als „Schuhkarton“ abgelehnt. Kantige Fahrzeugproportionen dürfen nicht zu einem gleichförmigen Quader vereinfacht werden. Diese Korrektur betrifft ausschließlich den Soul; der Citroën bleibt einschließlich Teilmetadaten unverändert.

- Frontscheibe an der Seite, hintere Türscheibe und hinteres festes Fenster verwenden **eigene** obere/untere Y/Z-Konturen (`soulFront`, `soulRear`, `soulQuarter`). Keine drei Fenster aus derselben rechteckigen Standardfunktion ableiten. Hinteres Festfenster keilförmig; untere Linie der hinteren Türscheibe steigt zum Heck an.
- Die Scheibenhaut folgt über neun Höhenstützpunkte je Querschnitt der tatsächlichen lackierten Kabinenoberfläche. Alle Kabinen-Z-Knickpunkte im Fensterbereich übernehmen. Eine einzelne flache Scheibenplatte kann die gewölbte Kabine schneiden und weiße Einschnitte erzeugen. Geschlossene 18-Punkt-Querschnitte mit positiver Fläche; Außenabstand und dünne Haut erhalten, kein Z-Fighting.
- Dunkles zusammenhängendes Rahmenband/B-/C-Stege statt heller Karosserie zwischen den Fensterflächen. Dafür die vorhandenen historischen `vehicle_door_seam_-1/1`-IDs verwenden; jetzt Fensterrahmenband, nicht die frühere untere Türnaht. Keine neuen Möbel oder instabilen Teil-IDs.
- Karosserie zwischen den Radhäusern einziehen, Radhäuser/Schultern breiter halten. Untere Seitenflächen und Übergänge staffeln, Kabine über die Höhe wölben und Dach nach vorne/hinten sanft verjüngen. Kontrollierte Glättung 42° am geformten Körper statt einfach weitere scharfe Kanten. Der breite Soul-Dachmittelteil bleibt erhalten.
- Griffe, Radlaufleisten, Schweller und Heckleuchten aus der tatsächlichen neuen Außenhaut ableiten; keine frei schwebenden Teile nach schmalerer Seitenkontur. Bestehende IDs, Größen, Bindungen und Farben erhalten; beide Looks geometriegleich.
- Regressionen in `scripts/pack-vehicle-profiles.test.mjs`: Festfenster wird zur Vorderkante deutlich höher, hintere Fensterunterkante steigt zum Heck, 18-Punkt-Haut, dunkles Rahmenband, eingezogene Türzone, geschlossene nicht degenerierte Profile und idempotente Migration. Vor Export Seiten-/Schräg-/Heckansichten gegen das vorhandene Kia-Seitenfoto prüfen, normale Galerie nachziehen. Technische Tests ersetzen weiterhin keine optische Zustimmung des Nutzers.

## Front- und Silhouettenkorrektur nach erneuter Nutzerkritik · Release 11

Release 9 wirkte vorn zu niedrig (C5 als Kombi) bzw. zu rund/MPV-artig (Soul). Beim Wiederaufbau diese konkrete Korrektur erhalten:

- C5-Nase: Oberkante des vordersten Karosserierings 0,642 × Modellhöhe statt 0,53; Frontbreite mindestens 0,86 × Modellbreite. Höhere Haube, höher sitzende Scheibenbasis, hohe Stoßstange (0,285 × Höhe), Lampen ab 0,59/0,525, Doppelwinkel ab 0,572/0,538, eigene vertikale Eck-Lufteinlässe und breite untere Silberblende. `p006` trägt den linken Front-Lufteinlass statt des alten unsichtbaren Unterbodenblocks; die rechte Seite ist ein neuer stabiler Teil.
- Soul-Nase: Oberkante 0,607 statt 0,52; mindestens 0,88 × Frontbreite. Breiter, fast konstanter Dachquerschnitt (obere halbe Breite mindestens 0,41), steilere Frontscheibe ab Z=0,172, ausgeprägtere Kanten mit Glättungswinkel 22° für Karosserie und 18° fürs Dach. Große polygonale Scheinwerfer mit runden Projektorflächen, kleineres getrenntes Tiger-Nose-Grillfeld, Rund-Nebelleuchten und Emblem statt schmaler generischer Leuchtbalken.
- Geometrisch höhere Haube und Kabinenbasis gemeinsam ändern: nicht nur die Scheinwerfer verschieben. Möbelmaße, Radstand, ID, Bindungen und Fahrzeugmarkierung bleiben unverändert.
- Kennzeichen müssen vor dem unteren Grill liegen; auch bei zulässigem Z-Maximum 0,5 die Teil-Dicken/Flächenlagen berücksichtigen. Heckleuchten auf der neuen Außenhaut halten, nicht unter breiterer Kabine bzw. hinter der Heckfläche versenken. Dachreling darf an der Höhenbegrenzung keine Nullflächen bekommen.
- Direkte Frontansicht (`PREVIEW_VIEW=headon`) zusätzlich zu Seite, Front-Schrägansicht und Heck vergleichen. Referenzfotos: [Soul EX Front](https://www.liveauctionworld.com/2015-KIA-SOUL-EX-GDI_i37774731), [C5 Aircross Front](https://www.ihr-wunschfahrzeug.de/fahrzeugbestand/RL009828-c5). Tests sichern relative Nasenhöhe/-breite, unterschiedliche Kantenglättung, breites Soul-Dach, hoch sitzende C5-Lampen und die Kennzeichen-Flächenlage. Nicht allein technische Gültigkeit als optische Abnahme bezeichnen.

Die erste Profilversion wurde vom Nutzer optisch abgelehnt. Deshalb nicht nur technische Gültigkeit prüfen: aktuelle Einzelbilder und Seiten-/Heckansichten mit den Referenzen vergleichen. [Kia-Seitenfoto](https://veh-markets.com/cars/kia-c/544956-2015-kia-soul-white-13500miles.html) und [C5 Aircross 2024, mehrere Ansichten](https://www.ronskinnerandsons.co.uk/used-citroen-c5-aircross-tredegar-gwent-7220480) dienen für die sichtbaren Konturen. Das sind weiterhin vereinfachte native Planmodelle, keine photorealistischen CAD-Repliken.

Die Skripte unter `tools/product-packs/` nicht verwenden. Exportstruktur bleibt `neon/*.fp3dpack`, `color/*_farben.fp3dpack`. Nach Änderung müssen die aktualisierte Anwendung und beide Fahrzeuge-Packs installiert sein; nur App-Update ersetzt keine bereits importierten Modelle. Private Schlüssel bleiben außerhalb Repository und Installationspaket.

Abnahme:

- `frontend/src/viewer/profile-shapes.test.ts`: geschlossene Geometrie, korrekte Flächenrichtung, Grenzen, winkelabhängige Normalen ohne Geometrieversatz und 2D-Kontur.
- `tests/test_custom_packs.py`: Grenzen, Endlichkeit, Reihenfolge, Umlaufrichtung, gleiche Punktanzahl und ungültige Glättungswinkel.
- `scripts/pack-vehicle-profiles.test.mjs` (vom Pack-Migrationstest importiert): Erhalt der IDs/Maße/Bindungen, unterschiedliche Konturen, echte Radöffnungen, Neon-/Produktgleichheit und Idempotenz. Maximal 60 Teile pro Modell weiter einhalten.
- `scripts/check-custom-pack-exports.py`: neue `sections`/`crease_angle` explizit im Geometrievergleich; tatsächliche signierte Exporte prüfen.
- Browser-Szenen `vehicle-<id>-<color|neon>-<front|side>` mit `ROUND_PACK_DIR`: Seiten- und Schrägansichten in beiden Stilen gegen Fotos prüfen. Auch Spiegelung/XYZ und Fahrzeugdarstellung auf Stellplätzen müssen dieselbe Geometrie verwenden.

Eine höhere Dreieckzahl allein gilt nicht als Verbesserung. Profile, sichtbare Konturen und maßhaltige Migration sind der Wiederaufbauvertrag; Feindetails/Felgen sind bewusst vereinfacht.
