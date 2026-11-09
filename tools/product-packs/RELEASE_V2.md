# Neu gruppierte Möbel-Packs

Stand: 06.10.2026. Keine Änderungen am UI, Renderer oder Pack-Schema.

Die Packs ohne Namenszusatz verwenden NeonPlans Standardpalette. Die gleichnamigen Packs mit
„· Produktfarben“ enthalten die bisherigen Produkt-/Sonderfarben. Beide sind getrennt importierbar.
Küchenmöbel, Küchengeräte und Küchenzubehör sind getrennt; Kopfhörer sind unter Multimedia,
Computer/Maus/Tastatur unter Computer & Zubehör. IKEA BILLY, KALLAX und PAX sind eigene Gruppen.
ASKVOLL/MALM/KURA gehören zu IKEA Schlafzimmer; POÄNG und KVISTBRO zu IKEA Wohnen;
RÖDALM und die Wanduhr zu Dekoration. Grills sind von Garten getrennt.

## Import und vorhandene Grundrisse

ZIP entpacken und gewünschte `.fp3dpack`-Dateien im bestehenden Editor importieren.
Alle neuen Packs haben eigene IDs (`local.v2.…`), damit alte gemischte Packs nicht überschrieben werden.
Bereits platzierte Möbel werden **nicht automatisch umgestellt**. Die alten Packs daher nicht entfernen,
solange ein Grundriss sie verwendet. Die bisherige Sammlung unter `private/product-packs/` bleibt unverändert.
Neue Platzierungen aus den neuen Kategorien wählen. `REGROUPING.json` dokumentiert die bisherigen
Typen und ihre neuen Ziele; es ist eine Zuordnungsliste, kein automatisches Migrationsskript.

Signiert mit dem bisherigen lokalen Schlüssel. `custom-pack-keys.json` enthält ausschließlich den
öffentlichen Schlüssel. Kein neuer Schlüssel wird installiert; keine Änderungen an Home Assistant.

## BILLY: Umfang und Modelltreue

- Zehn Grundformate: 40/80 cm breit, 28 cm tief, 106/202/237 cm hoch;
  tiefe Varianten 40/80 cm breit, tatsächlich 39 cm tief, 202/237 cm hoch.
- Weiß, Eichenachbildung, schwarze Eichenachbildung, Nussbaum und das blaue 40×28×202-Modell.
  Die gewünschten historischen Farben Eiche weiß lasiert und Buche bleiben zusätzlich bei den
  flachen Modulen verfügbar. Tiefe Module in Weiß/schwarzer Eichenachbildung.
- OXBERG: Paneeltüren, Vitrinentüren und Paneel-/Vitrinentüren; zusätzlich unten geschlossene
  80×28×202-Regale. OTTEBOL und HÖGADAL als weiße Alternativen der hohen Module.
- Aufsätze 35 cm hoch, separat und als vormontierte 237-cm-Kombinationen.
  Geschlossene 237-cm-Modelle haben zusätzliche Glasfronten am Aufsatz.
- Keine beliebig breiten Bücherwände, Eckkombinationen, Beleuchtung oder Aufbewahrungsboxen.
  Die einzelne Modulform kann mehrfach platziert werden; kein neuer Konfigurator.
- Farben sind Foto-Näherungen; historische und kombinierte Sonderfarben bedeuten nicht,
  dass jede Kombination derzeit im Handel erhältlich ist. Glasflächen sind opak getönt,
  Bambusgeflecht vereinfacht. Türen und Regalböden sind nicht animiert/verstellbar.
- Außenmaße der Türmodelle berücksichtigen zusätzliche Fronttiefe (28→30,39→41 cm).
  Einzelne Tür-/Griffdetails sind Low-Poly-Näherungen, keine CAD-Repliken.

Alle bisherigen Funktionsgrenzen bleiben: Echo/Uhren mit statischer Uhrzeit, MacBooks/TV mit den
vorhandenen Bildschirmregeln, keine neue Liveübertragung oder Bluetooth-/Alexa-Integration;
Leuchten nutzen vorhandene Lichtentitäten. Fahrzeug-/Mährobotermodelle bleiben statisch.
Quellen, Näherungen und Maße stehen in `research.json` und `CATALOGUE.md`.
Die Vorschauen wurden mit dem vorhandenen Viewer erzeugt. Private Schlüssel/Referenzfotos sind nicht im ZIP.
