# Produkt-Packs für NeonPlan 3D

26 eigenständige Packs mit 278 Modellen/Varianten, aktualisiert am 06.10.2026.
13 Produktfarben-Packs mit 166 Varianten plus 13 zusätzliche NeonPlan-Standard-Packs
mit 112 Modellen. Reine Farbduplikate sind in den Standard-Packs zusammengefasst.
Nur Möbeldateien: keine Änderungen an UI oder Anwendung. Nicht automatisch in Home Assistant installiert.

## Import und Vorschauen

ZIP entpacken und die gewünschten `.fp3dpack`-Dateien im bestehenden Editor unter
**Möbel → Möbel-Pack importieren …** einzeln importieren. Das ZIP selbst ist kein Möbel-Pack.
Die Packs sind mit demselben lokalen Herausgeber-Schlüssel wie das Heizungs-Testpack signiert.
Aktuell: MALM/KURA Release 3, KALLAX Release 2, PAX Release 2, Multimedia Release 2. Bestehende Pack- und Modell-IDs bleiben unverändert.
Die KALLAX-/MALM-Farbe Schwarzbraun wurde nach dem Originalfoto dunkler und nahezu schwarz abgestimmt.
Zum Aktualisieren MALM/KURA und KALLAX erneut importieren; Weiß und Eiche bleiben unverändert verfügbar.
Multimedia Release 2 ergänzt Echo Dot Gen 4 Anthrazit ohne Uhr und Blaugrau mit Uhr.
Für diese beiden Modelle das Multimedia-Pack erneut importieren.
Neu: IKEA Wohnen, IKEA Büro und Apple & Audio. Beleuchtung, Küche und Garten/Grill
sind jetzt Release 2 und enthalten zusätzlich VIRRMO, FARMARKVAST bzw. das Plonos-Gewächshaus.
Zum Aktualisieren diese drei Packs erneut importieren; bestehende Modell-IDs bleiben erhalten.
IKEA Wohnen Release 2 ergänzt BILLY in Eiche weiß lasiert und Buche. Zum Aktualisieren
`ikea_wohnen.fp3dpack` erneut importieren; das weiße BILLY-Modell bleibt unverändert.
Die neuen Dateien `*_neon.fp3dpack` (Release 1, Haustechnik Release 2) können zusätzlich importiert werden.
Sie verwenden ausschließlich NeonPlans vorhandene Material-Farbrollen und dezente Modellkanten,
keine festen Produktfarbwerte. Die Original-Packs müssen dafür nicht aktualisiert werden.
Größen, Formen, Montage, Bildschirmflächen, Leuchtteile und vorhandene Gerätefunktionen bleiben gleich.
Haustechnik und Haustechnik NeonPlan Release 2 ergänzen das freigegebene Viessmann-Modell
aus dem Heizraum-Test-Pack. Der runde Deckel bleibt erhalten. Das Test-Pack selbst wurde
nicht geändert; bereits dort platzierte Möbel werden nicht automatisch ins neue Pack umgestellt.
Home Assistant muss diesem öffentlichen Schlüssel bereits vertrauen. Ist er nach einem Update
entfernt worden, siehe den vorhandenen `pack-key-updater/README.md` im Repository.
`custom-pack-keys.json` enthält ausschließlich den öffentlichen Schlüssel; allein durch die Datei
wird kein Schlüssel installiert. Hier wurden keine Vertrauensschlüssel oder Remote-Systeme geändert.

| Pack-Datei | Modelle | Inhalt / Vorschau |
| --- | ---: | --- |
| [haustechnik.fp3dpack](haustechnik.fp3dpack) | 11 | [Weishaupt, Viessmann, Rohre, Zähler, Sicherungskasten](previews/local.haustechnik/overview.png) |
| [multimedia.fp3dpack](multimedia.fp3dpack) | 6 | [Echo Dot 3 und 4, Philips TV mit Standfuß / Wand](previews/local.multimedia/overview.png) |
| [beleuchtung.fp3dpack](beleuchtung.fp3dpack) | 5 | [NYMÅNE Schwarz/Weiß, Hue Impress Wand/Weg, VIRRMO](previews/local.beleuchtung/overview.png) |
| [kueche.fp3dpack](kueche.fp3dpack) | 9 | [Geräte, FARMARKVAST, Messerblock und Eckelemente](previews/local.kueche/overview.png) |
| [ikea_malm_kura.fp3dpack](ikea_malm_kura.fp3dpack) | 29 | MALM Weiß/Eiche weiß lasiert/Schwarzbraun, KURA Weiß/Kiefer; [Seite 1](previews/local.ikea_malm_kura/overview.png), [2](previews/local.ikea_malm_kura/overview-2.png), [3](previews/local.ikea_malm_kura/overview-3.png) |
| [ikea_kallax.fp3dpack](ikea_kallax.fp3dpack) | 20 | Sieben Formate × zwei Farben, Untergestelle und fertige Kombinationen; Vorschauen im Unterordner |
| [ikea_pax.fp3dpack](ikea_pax.fp3dpack) | 48 | Drei Breiten × zwei Tiefen × zwei Höhen × offen/Türen × Weiß/Eiche weiß lasiert; [Weiß 1](previews/local.ikea_pax/overview.png), [Weiß 2](previews/local.ikea_pax/overview-2.png), [Eiche 1](previews/local.ikea_pax/overview-3.png), [Eiche 2](previews/local.ikea_pax/overview-4.png) |
| [wohnen.fp3dpack](wohnen.fp3dpack) | 2 | [POÄNG und orange/weiße Wanduhr](previews/local.wohnen/overview.png) |
| [garten_grill.fp3dpack](garten_grill.fp3dpack) | 4 | [Navimow, BURNHARD, Weber, Plonos-Folientunnel](previews/local.garten_grill/overview.png) |
| [fahrzeuge.fp3dpack](fahrzeuge.fp3dpack) | 2 | [Kia Soul II und C5 Aircross 2024](previews/local.fahrzeuge/overview.png) |
| [ikea_wohnen.fp3dpack](ikea_wohnen.fp3dpack) | 21 | ASKVOLL, BILLY Weiß/Eiche weiß lasiert/Buche, KVISTBRO und RÖDALM Schwarz in acht Bildformaten hoch/quer; [Seite 1](previews/local.ikea_wohnen/overview.png), [2](previews/local.ikea_wohnen/overview-2.png) |
| [ikea_buero.fp3dpack](ikea_buero.fp3dpack) | 2 | [MARKUS Dunkelgrau, BEKANT weiße Platte / schwarzes Gestell](previews/local.ikea_buero/overview.png) |
| [apple_audio.fp3dpack](apple_audio.fp3dpack) | 7 | [MacBook Pro/Air offen/geschlossen, Magic Mouse, Magic Keyboard mit Ziffernblock, Sony WH-1000XM5](previews/local.apple_audio/overview.png) |

[CATALOGUE.md](CATALOGUE.md) enthält alle Varianten und Außenmaße B × T × H in Metern.
[research.json](research.json) dokumentiert Produktquellen, Foto-Referenzen, Näherungen und mögliche
Entitätsdomänen. Letztere sind Recherchehinweise, keine neuen Schemafelder oder Funktionszusagen.
Die PNGs wurden mit dem bestehenden 3D-Viewer gerendert, nicht mit einem separaten Modellrenderer.

## Zusätzliche NeonPlan-Standardfarben

Die Standard-Packs erscheinen im Katalog mit „NeonPlan“ im Namen. Materialunterschiede bleiben
über die eingebauten Rollen `body`, `wood`, `metal`, `fabric`, `white`, `dark`, `glass` und `accent`
erkennbar; auch Bettzeug, Displays und dekorative Farbakzente verwenden diese Standardpalette.
Keine neue UI-Farbauswahl. Lampen behalten die vorhandene, entitätsabhängige Lichtfarbe.
Gas-/Wasserleitungen und andere funktional unterschiedliche Geräte bleiben separat verfügbar.

| Standard-Pack | Modelle | Vorschau |
| --- | ---: | --- |
| [haustechnik_neon.fp3dpack](haustechnik_neon.fp3dpack) | 11 | [Haustechnik inklusive Viessmann](previews/local.haustechnik_neon/overview.png) |
| [multimedia_neon.fp3dpack](multimedia_neon.fp3dpack) | 6 | [Echo & TV](previews/local.multimedia_neon/overview.png) |
| [beleuchtung_neon.fp3dpack](beleuchtung_neon.fp3dpack) | 4 | [Beleuchtung](previews/local.beleuchtung_neon/overview.png) |
| [kueche_neon.fp3dpack](kueche_neon.fp3dpack) | 9 | [Küche](previews/local.kueche_neon/overview.png) |
| [ikea_malm_kura_neon.fp3dpack](ikea_malm_kura_neon.fp3dpack) | 11 | [MALM & KURA](previews/local.ikea_malm_kura_neon/overview.png) |
| [ikea_kallax_neon.fp3dpack](ikea_kallax_neon.fp3dpack) | 11 | [KALLAX](previews/local.ikea_kallax_neon/overview.png) |
| [ikea_pax_neon.fp3dpack](ikea_pax_neon.fp3dpack) | 24 | [PAX 1](previews/local.ikea_pax_neon/overview.png), [2](previews/local.ikea_pax_neon/overview-2.png) |
| [wohnen_neon.fp3dpack](wohnen_neon.fp3dpack) | 2 | [POÄNG & Uhr](previews/local.wohnen_neon/overview.png) |
| [garten_grill_neon.fp3dpack](garten_grill_neon.fp3dpack) | 4 | [Garten](previews/local.garten_grill_neon/overview.png) |
| [fahrzeuge_neon.fp3dpack](fahrzeuge_neon.fp3dpack) | 2 | [Fahrzeuge](previews/local.fahrzeuge_neon/overview.png) |
| [ikea_wohnen_neon.fp3dpack](ikea_wohnen_neon.fp3dpack) | 19 | [Wohnmöbel 1](previews/local.ikea_wohnen_neon/overview.png), [2](previews/local.ikea_wohnen_neon/overview-2.png) |
| [ikea_buero_neon.fp3dpack](ikea_buero_neon.fp3dpack) | 2 | [Büro](previews/local.ikea_buero_neon/overview.png) |
| [apple_audio_neon.fp3dpack](apple_audio_neon.fp3dpack) | 7 | [Apple & Sony](previews/local.apple_audio_neon/overview.png) |

## Funktionen im aktuellen Stand

- **Farben:** separate Möbel-Einträge für NYMÅNE und KALLAX, keine neue Farbauswahl.
- **Verknüpfung:** Geräte manuell über die vorhandenen Möbel-Einstellungen einer angebotenen
  HA-Entität zuordnen. Keine automatische Geräteerkennung, keine neue HA-Integration und keine
  neuen HA-Entitäten. `electric` nutzt die vorhandenen Schalter-/Status-/Leistungssensor-Funktionen.
  Echo kann so manuell einem vorhandenen `media_player` zugeordnet werden; keine neue Alexa-Funktion.
- **Lampen:** vorhandene Lichtverknüpfung, Lichtfarbe/Helligkeit und leuchtende Modellteile.
  Die vier NYMÅNE-Spots teilen eine Entität pro Möbelstück. Lichtkegel folgen dem vorhandenen Renderer.
- **Fernseher:** vorhandene Bildschirmfläche für Media-Player-Cover/App-Farbe.
  Kamera-/Bildregeln verwenden die vorhandene Pro-Screens-Funktion und benötigen deren Freischaltung
  sowie eine passende Bild-/Kameraquelle. Kein automatisches Abgreifen des echten TV-Bildes.
- **Uhren:** analoge Wanduhr und Echo-Uhren zeigen statisch 10:10, keine laufende Uhrzeit.
- **Navimow:** statisches Modell; keine autonome Bewegung oder neue `lawn_mower`-Steuerung.
- **Autos:** über vorhandene Parkplätze auswählbar; keine automatische Bewegung oder neue
  `device_tracker`-Verknüpfung. Karosseriebreite ohne Außenspiegel.
- **PAX / KURA / KALLAX:** feste, separat auswählbare Module bzw. Anordnungen, kein Konfigurator,
  keine animierten Türen. KALLAX mit weißen Untergestellen auch als fertige Kombinationen enthalten.
- **Küche:** Eckelemente verwenden dieselben Palettenrollen wie die vorhandene Küche.
  Eckspüle ist 90 cm hoch plus Armatur (Gesamthöhe 104 cm); die automatische Oberfläche liegt im
  bestehenden Schema auf der Gesamthöhe, daher ggf. Montagehöhe von darauf platzierten Objekten anpassen.
- **MacBooks:** offene Modelle nutzen vorhandene Bildschirmflächen und Regeln; keine neue
  Desktopübertragung. Deckel nicht animiert, offene/geschlossene Varianten separat auswählen.
- **Zubehör:** Maus, Tastatur und Kopfhörer sind statische Modelle, keine neue Bluetooth-Anbindung.
- **Büro:** BEKANT als Ablagefläche; MARKUS und BEKANT mit fester Höhe, keine Verstellanimation.
- **RÖDALM:** Wandmontage mit neutralem Bildplatzhalter, keine eigene Fotowechsel-Funktion.

## Interpretationen und Modelltreue

Produktmaße wurden recherchiert; Farben und Details anhand von Fotos angenähert. Generische Objekte
(Mikrowelle, Messerblock, Uhr, Installation und Küchenecken) haben selbst gewählte repräsentative Maße.
Die vorhandene Geometrie besteht aus einfachen Teilen, maximal 60 pro Modell: Rundungen sind facettiert,
Glas, Textilien und Holzmaserung nicht als realistische Texturen umgesetzt. Kein Anspruch auf CAD-Genauigkeit.

- Echo Dot 3 mit Uhr in Schwarz ist die gewünschte Sonderfarbe, keine behauptete schwarze Serienvariante.
- Viessmann VertiCell-HG 160 Typ 3001 494: unverändertes freigegebenes Test-Modell,
  Außenmaße 60×69,1×125,8 cm, Vitorange mit grauer Front und rundem grauem Deckel.
  Technisch ein indirekt beheizter Warmwasserspeicher, keine Gastherme. Anzeigen dekorativ.
- Echo Dot 4: Anthrazit ohne Uhr, Blaugrau (Twilight Blue) mit Uhr, 100 × 100 × 89 mm.
  Kugel mit abgeflachter Unterseite und vier Knöpfen oben; Lichtring unten nur dekorativ.
- „Echeweiß“ wurde als Eicheneffekt weiß lasiert, „Schokobraun“ als dunkles Schwarzbraun interpretiert.
- MALM in Weiß, Eiche weiß lasiert und Schwarzbraun: Bettbreiten 90/140/160/180 cm, Kommoden mit 3/4/6 sowie 6 breiten Schubladen,
  Nachttisch als 2-Schubladen-Kommode. Bettzeug ist ergänzte Darstellung.
- PAX in Weiß und Eiche weiß lasiert: nominal 50/75/100 cm breit, 35/58 cm tief, 201/236 cm hoch.
  Innenleben und schlichte Türen sind repräsentative Ausstattungen, keine konkret konfigurierte Bestellung.
- LatteGo 5500: EP5547/90; „Navimow 206 AWD“: i206 AWD; Big FRED Deluxe: Series 4.
- C5 Aircross ist das Facelift des Modelljahrs 2024, nicht die neue Generation 2025.
- ASKVOLL 90×200: Außenmaße 97×208×77 cm, Weiß mit ergänztem neutralem Bettzeug.
- BILLY 40×28×202 cm: Weiß, Eiche weiß lasiert (Farbwert wie KALLAX/MALM), Buche.
  Holzfarben sind Foto-Näherungen ohne Maserung. KVISTBRO Ø44×42 cm: Weiß.
- BEKANT: 160×80 cm, weiße Platte / schwarzes manuell verstellbares Gestell, modelliert auf 73 cm.
- RÖDALM: 10×15, 13×18, 21×30, 30×40, 40×50, 50×70, 61×91 und 70×100 cm Bildformat,
  jeweils hoch/quer. Außenmaße jeweils 2 cm größer; sichtbare Tiefe 3 cm, Platzierungsbox 5 cm
  wegen der vorhandenen Viewer-Mindestgröße. Passepartout und neutrales graues Bild.
- FARMARKVAST: Graugrün, Ø20×23 cm, mit hochgestelltem Henkel Gesamthöhe 35 cm.
- Plonos: 300 cm lang, 200 cm breit und hoch. Gerundetes Dach und sechs Seitenfenster;
  Folie vereinfacht als opake grüne Flächen. Keine Pflanzen oder transparente Folientextur.
- MacBook Pro 14 Zoll und Air 13 Zoll: modernes flaches Gehäuse in Silber, je offen/geschlossen.
  Geschlossene Außenmaße von Apple; offene Höhe und 90°-Deckelstellung angenähert.
- Magic Keyboard: weißes Modell mit Ziffernblock ohne Touch ID. Tasten gruppiert,
  Gehäuseneigung vereinfacht; keine vollständige maßgetreue Tastenbeschriftung.
- Sony WH-1000XM5: Schwarz; Modellabmessungen 19×8×24 cm aus Fotos geschätzt,
  keine veröffentlichten Hersteller-Außenmaße. Ohne zusätzlichen Kopfhörerständer.

Die zusätzlichen Holzfarben verwenden exakt dieselben Farbwerte wie KALLAX. Bei MALM ändern sich
nur Rahmen/Korpus/Fronten, nicht Matratze, Bettzeug oder Kissen; bei PAX bleiben Metallteile erhalten.
Keine Holzmaserungstextur und keine Zusage zur aktuellen Verfügbarkeit einer identischen Handelsvariante.

Schwarzbraun verwendet `#201f1d`: annähernd Schwarz mit geringem warmem Braunanteil, anhand des
[originalen IKEA-KALLAX-Fotos](https://www.ikea.com/de/de/p/kallax-regal-schwarzbraun-10275862/) angenähert.
Kein offiziell veröffentlichter IKEA-Hex-/RAL-Farbwert. Die internen IDs behalten `schokobraun`, damit
bestehende Möbel im Plan weiterhin gefunden werden.

Schema, Geometriegrenzen und Signaturen wurden geprüft. 139 zusätzliche Node-Tests prüfen alle 132
Modelle im unveränderten Renderpfad einschließlich TV-/Lichtflags und Uhrzahlen. Ein tatsächlicher
Import in deine laufende HA-Installation wurde nicht vorgenommen.
