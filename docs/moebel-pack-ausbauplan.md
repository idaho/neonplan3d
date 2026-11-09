# Plan: Fähigkeiten von Möbel-Packs ausbauen

Status: geparkt – Umsetzung erst nach ausdrücklicher Wiederaufnahme

Erstellt: 2026-10-05

Aktualisierung vom 12.10.2026: Die gemeinsame Feature-Definition in `docs/custom-features.md` enthält die neu bestätigten Anforderungen. Trapez-/Polygonplatten und weitere Modellformen sind dort inzwischen zur späteren Umsetzung vorgesehen; die frühere Zurückstellung unten beschreibt den damaligen Stand. Farben und globaler Neon-/Produktfarbenwechsel werden als eigenes Feature später definiert. Dieser alte Phasenplan ist keine Freigabe, seine Implementierung jetzt zu starten.

## Merker vom 07.10.2026: Trapezförmige Trittflächen

Für gewendelte L- und U-Treppen fehlen ebene trapezförmige beziehungsweise
polygonale Trittflächen mit konstanter Dicke: innen schmal, außen breit.
`loft` verjüngt einen Körper zwischen unten und oben; seine Oberseite bleibt
rechteckig. Zylinder und zusammengesetzte verjüngte Körper ermöglichen zwar
runde Modelle wie Fußbälle, lösen aber diesen horizontalen Grundriss nicht.

Später eine abwärtskompatible Trapez-/Polygonform für Pack-Bauteile prüfen,
einschließlich Validierung, 2D-Darstellung, 3D-Darstellung, Spiegelung und
Vorschauen. Keine Umsetzung jetzt: Der Nutzer hat die Erweiterung vorerst
abgelehnt und stattdessen eine Annäherung der Stufen aus flachen Box-Teilen
gewünscht. Die Treppen bleiben offen, ohne Zwischenpodest, mit Antritt rechts
unten und Austritt links oben. Das Geländer orientiert sich an den Nutzerfotos.

## Ziel

Möbel-Packs sollen Varianten, eine klar definierte Anbindung an bestehende
Home-Assistant-Geräte beziehungsweise -Entitäten und einfache dynamische
Anzeigen unterstützen. Die Erweiterungen bleiben abwärtskompatibel, belasten
den 3D-Viewer im Leerlauf nicht dauerhaft und funktionieren weiterhin mit
bestehenden Packs.

## Aktueller Stand

| Thema | Heute möglich | Einschränkung |
| --- | --- | --- |
| Farben | Feste Hex-Farben oder globale Rollen wie `body` und `wood` pro Bauteil | Keine vom Benutzer auswählbare Farbe je platziertem Möbelstück; derzeit braucht jede Farbvariante einen eigenen Pack-Eintrag |
| Varianten | Das gespeicherte Möbelmodell besitzt bereits ein Feld `variant` | Pack-Einträge definieren und verwenden noch keine Varianten |
| HA-Verknüpfung | `electric: true` schaltet die Entitätsauswahl frei; Haupt-, Leistungs- und Zustandsentität können verknüpft werden | Nur bestehende Entitäten, kein komplettes HA-Gerät und keine durch das Pack neu erzeugte HA-Entität; `water_heater` und Pack-spezifische Erkennungshinweise fehlen |
| Interaktion | `light`, `switch` und `fan` können direkt geschaltet werden; andere Entitäten öffnen Mehr-Info | Erlaubte Domänen und Verhalten sind nicht im Pack deklarierbar |
| Anzeigen | `screen: true` kann Medienbilder und – mit Screens-Funktion – Bilder, URLs oder Kamerabilder darstellen | Kein Text, keine native Uhrzeit und kein formatierter Entitätswert auf dem Modell |
| Modellierung | `box`, `cyl` und `loft`, Montagearten, Wandhöhe, tragende Oberflächen, Fahrzeug-/Treppen-/Licht-/Bildschirm-Eigenschaften | Keine eigenen GLTF-Modelle, Animationen, Zustandslogik, frei definierbaren Aktionen oder Texturen pro Bauteil |

Zusätzlich stehen bei platzierten Möbeln bereits Name, Größe, Drehung,
Spiegelung, Montagehöhe, Sperren, Duplizieren und Löschen zur Verfügung.

## Festgelegter Umfang

- Packs referenzieren vorhandene Home-Assistant-Entitäten. Das Erzeugen oder
  Registrieren neuer HA-Geräte und -Entitäten bleibt Aufgabe einer separaten
  Home-Assistant-Integration.
- Die erste Ausbaustufe umfasst Farbvarianten, deklarative HA-Bindungen und
  Textanzeigen für Uhrzeit beziehungsweise Entitätszustände.
- Bestehende Pack-Dateien bleiben ohne Migration gültig.
- Erweiterte Bildschirmbilder und Kameras bleiben von der bisherigen
  Screens-Funktion getrennt. Einfache Uhr- und Sensoranzeigen sollen als
  grundlegende Gerätefunktion funktionieren.
- Beliebige Templates oder Jinja-Ausdrücke werden zunächst nicht zugelassen;
  stattdessen gibt es wenige geprüfte Formatoptionen.
- GLTF-Import, komplexe Animationen und frei programmierbare Aktionen sind
  nicht Teil dieses Plans.

## Phase 1: Auswählbare Farbvarianten

Pack-Einträge erhalten optional `variants`. Jede Variante enthält eine stabile
ID, einen übersetzbaren Namen und eine Farbersetzung. Die Farbersetzung ersetzt
gezielt im Basismodell verwendete Hex-Farben oder Farbrollen, ohne die gesamte
Geometrie zu duplizieren.

Beispiel:

```json
{
  "id": "clock-round",
  "name": { "de": "Wanduhr" },
  "parts": [
    {
      "shape": "cyl",
      "x": 0,
      "z": 0,
      "w": 1,
      "d": 1,
      "y": 0,
      "h": 1,
      "color": "metal",
      "top": "white"
    }
  ],
  "variants": [
    {
      "id": "black",
      "name": { "de": "Schwarz" },
      "colors": { "metal": "#202225", "white": "#f4f1e8" }
    },
    {
      "id": "white",
      "name": { "de": "Weiß" },
      "colors": { "metal": "#eeeeea", "white": "#ffffff" }
    }
  ]
}
```

Arbeitspakete:

1. Schema, Größenlimits und Übersetzungsvalidierung in
   `custom_components/neonplan3d/packs.py` ergänzen.
2. Pack-Typen und Variant-Auflösung in `frontend/src/packs.ts` ergänzen.
3. Im Möbel-Editor eine Variantenauswahl anzeigen und die gewählte ID im
   vorhandenen Feld `Furniture.variant` speichern.
4. Im 2D- und 3D-Renderer die effektiven Farben aus Basis und Variante
   auflösen; unbekannte oder entfernte Varianten fallen auf die Basis zurück.
5. Pack-Dokumentation mit Schema und Beispielen erweitern.

Abnahmekriterien:

- Ein Pack kann mehrere benannte Farbvarianten ohne duplizierte Geometrie
  anbieten.
- Die Auswahl wird gespeichert, geladen, dupliziert und exportiert.
- Alte Packs und Platzierungen sehen unverändert aus.
- Ungültige IDs, Farben und zu große Varianten werden serverseitig abgelehnt.

## Phase 2: Deklarative Home-Assistant-Bindungen

Ein Pack-Eintrag kann beschreiben, welche vorhandenen Entitäten zu seinem
Gerät passen. Dafür wird ein optionaler Block `bindings` eingeführt, zunächst
für `primary`, `power` und `state`.

Beispiel:

```json
{
  "electric": true,
  "bindings": {
    "primary": {
      "domains": ["water_heater", "climate", "switch"],
      "name_hints": ["warmwasser", "boiler", "speicher"]
    },
    "power": {
      "device_classes": ["power"]
    }
  }
}
```

Arbeitspakete:

1. Bindungs-Schema in Python und TypeScript definieren und validieren.
2. `water_heater` als Geräteart ergänzen und sein Öffnen/Schalten eindeutig
   behandeln; Entitäten ohne sichere Standardaktion öffnen Mehr-Info.
3. Die Entitätsauswahl anhand der im Pack erlaubten Domänen filtern.
4. `name_hints` für die automatische Vorauswahl nutzen. Nach Auswahl der
   Hauptentität weitere passende Entitäten desselben HA-Geräts bevorzugen.
5. Optional einen Geräte-Selektor vor die Entitätsauswahl setzen: Das Gerät
   grenzt die Liste ein, gespeichert werden weiterhin konkrete Entity-IDs.
6. Fehlende oder nicht mehr verfügbare Entitäten sichtbar, aber nicht
   destruktiv behandeln.

Abnahmekriterien:

- Ein Pack-Gerät kann passende HA-Domänen deklarieren, darunter
  `water_heater`.
- Benutzer können ein HA-Gerät als Filter wählen und anschließend konkrete
  Entitäten zuordnen.
- Packs erzeugen keine HA-Registry-Einträge und funktionieren auch ohne
  Zuordnung rein visuell.
- Bestehende Lampen-, Schalter-, Lüfter-, Leistungs- und Statusbindungen
  bleiben kompatibel.

## Phase 3: Dynamische Textanzeigen

Bildschirmfähige Bauteile erhalten optional eine deklarative `display`-
Beschreibung. Zuerst werden eine Uhr und formatierte Zustände vorhandener
Entitäten unterstützt.

Beispiele:

```json
{
  "screen": true,
  "display": {
    "source": "clock",
    "format": "HH:mm"
  }
}
```

```json
{
  "screen": true,
  "display": {
    "source": "entity",
    "binding": "state",
    "format": "{state} {unit}"
  }
}
```

Arbeitspakete:

1. Ein kleines, validiertes Display-Schema mit Quelle, Format, Vordergrund,
   Hintergrund und optionaler Ausrichtung definieren.
2. Uhrzeit lokal mit `Intl.DateTimeFormat` formatieren; unterstützte Formate
   und Zeitzonenverhalten dokumentieren.
3. Entitätswert, Einheit und begrenzte Attribute über Platzhalter rendern.
4. Text in eine wiederverwendete Canvas-Textur zeichnen und Texturen beim
   Entfernen eines Objekts zuverlässig freigeben.
5. Nur bei Minutenwechsel oder geändertem HA-Zustand neu zeichnen. Es darf
   keine permanente Render-Schleife für statische Szenen entstehen.
6. Einen verständlichen Platzhalter für fehlende oder unbekannte Werte zeigen.

Abnahmekriterien:

- Eine Uhr kann `HH:mm` nativ auf ihrem Zifferblatt beziehungsweise Display
  anzeigen.
- Ein Gerät kann Zustand und Einheit einer zugeordneten Entität darstellen.
- Änderungen erscheinen ohne kompletten Szenen-Neuaufbau.
- Mehrere Displays teilen keine versehentlich veränderbare Textur und geben
  GPU-Ressourcen beim Löschen frei.
- Die Leerlaufoptimierung des Viewers bleibt erhalten.

## Spätere Erweiterungen

Nach den drei Phasen kann separat bewertet werden:

- Sichtbarkeit oder Farbe einzelner Bauteile abhängig von einem Entitätswert
- wenige vordefinierte Bewegungen, etwa Tür offen/geschlossen oder Lüfterrad
- frei wählbare Akzentfarbe statt nur vom Pack-Autor angelegter Varianten
- weitere Datenquellen für Displays, etwa Datum, Wetter oder Energiefluss
- Pack-spezifische Schnellaktionen aus einer streng begrenzten Aktionsliste

Diese Punkte brauchen vor der Umsetzung ein eigenes Sicherheits-, Performance-
und Bedienkonzept.

## Betroffene Bereiche

Voraussichtlich relevant sind:

- `custom_components/neonplan3d/packs.py`
- `custom_components/neonplan3d/schema.py`
- `frontend/src/packs.ts`
- `frontend/src/devices.ts`
- `frontend/src/model.ts`
- `frontend/src/components/editor.ts`
- `frontend/src/components/furniture2d.ts`
- `frontend/src/viewer/furniture.ts`
- `frontend/src/components/view3d.ts`
- `frontend/src/viewer/viewer3d.ts`
- `tests/test_packs.py`
- `frontend/src/packs.test.ts`
- `frontend/src/devices.test.ts`
- `frontend/src/viewer/furniture.test.ts`
- `docs/packs.md`, `docs/manual.md` und `docs/anleitung.md`

Die genaue Dateiliste wird zu Beginn jeder Phase anhand des dann aktuellen
Codes erneut geprüft.

## Validierung

Nach jeder Phase mindestens:

```bash
python -m pytest tests/test_packs.py
npm run test --prefix frontend
npm run typecheck --prefix frontend
npm run build --prefix frontend
```

Zusätzlich:

- Schema-Tests für gültige, ungültige und alte Pack-Dateien
- Roundtrip-Test für Speichern und Laden einer Platzierung
- Renderer-Tests für Fallbacks und Ressourcenfreigabe
- visueller Vergleich mit mindestens einem realen Pack-Beispiel
- manueller Test mit vorhandener, fehlender und nicht verfügbarer HA-Entität
- Performance-Prüfung auf einem schwächeren Tablet oder entsprechend
  gedrosseltem Browser

## Risiken und offene Entscheidungen

- Die Bedeutung vorhandener Farbnamen wie `body` darf nicht mit den neuen
  Pack-Farbrollen kollidieren. Vor Phase 1 wird die Namensauflösung exakt
  festgelegt.
- Ein HA-Gerät kann mehrere gleichartige Entitäten besitzen. Automatische
  Vorschläge müssen immer übersteuerbar bleiben.
- `water_heater` besitzt keine universell sichere Toggle-Aktion. Standard ist
  deshalb Mehr-Info, bis eine explizite Aktion definiert ist.
- Schriftmetriken variieren zwischen Browsern. Tests sollen Layoutgrenzen statt
  pixelidentischer Glyphen prüfen.
- Häufig aktualisierte Sensoren können unnötig viele Textur-Uploads auslösen;
  Aktualisierungen werden zusammengefasst und nur bei sichtbarer Änderung
  ausgeführt.
- Vor Phase 3 ist abschließend zu entscheiden, ob Uhr-/Sensoranzeigen komplett
  frei oder teilweise lizenzgebunden sind. Technisch sollen sie unabhängig von
  Kamera- und Bildschirmlizenzen bleiben.

## Nächster konkreter Schritt bei Wiederaufnahme

Mit Phase 1 beginnen: das bestehende Pack-Schema und alle Stellen untersuchen,
an denen `Furniture.variant` bereits für eingebaute Möbel verwendet wird. Dann
ein kleines Varianten-Schema samt Tests implementieren und an einem einzelnen
Pack-Gegenstand – vorzugsweise der Viessmann-Therme – durchgängig erproben.

Wiederaufnahme-Hinweis: „Lies `docs/moebel-pack-ausbauplan.md` und starte mit
Phase 1.“
