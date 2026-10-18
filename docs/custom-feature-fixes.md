# Custom-Features: verbindliche Fixes und Wiederaufbau

Stand: 15.10.2026. Ergänzt [custom-features.md](custom-features.md) und den Testvertrag [custom-features.json](custom-features.json). Diese Regeln gehören zum freigegebenen Funktionsumfang. Bei einer vollständigen Neuimplementierung oder einem Original-Update dürfen sie nicht als entbehrliche Detailkorrekturen verloren gehen. Alte „noch offen“-Abschnitte der Feature-Spezifikation beschreiben historische Zwischenstände, nicht den heutigen Umfang.

Vorheriger vollständig geprüfter Laufzeitstand: `62bc3a2` auf `feature/custom-features-complete` und lokalem `custom`, integriert mit Original-main `3a88760` (Version 1.17.2). Prüfung: 448 Frontend-Tests, 92 Backend-Tests mit 34 Subtests, zehn Pack-Migrationstests, Typprüfungen, Lint, Formatierung, Build-Budgets und 58 signierte Packs mit 1102 geometriegleichen Produktvarianten. Diese Zahlen dokumentieren den damaligen Stand, sind keine dauerhaft festgeschriebenen Modell- oder Testlimits. Installation auf HA nicht aus dem lokalen Prüfstatus ableiten.

## 1. Produktfarben wechseln sofort, ohne Neuladen

- Der globale Produktfarben-Schalter aktualisiert die normale 3D-Ansicht, den Editor mit 3D daneben und die Wandansicht unmittelbar, auch beim wiederholten Ein-/Ausschalten. Kein Hard Reload als Funktionsvoraussetzung.
- Ohne gespeicherte Präferenz sind Produktfarben ausgeschaltet; Präferenz nach Benutzer/Browser erhalten. Individuell gewählte Produktvarianten bleiben gespeichert, auch wenn gerade Neon dargestellt wird.
- Lit-Properties dürfen nicht durch native Klassenfeld-Initialisierungen ihre reaktiven Accessoren verdecken. Aktuell: `declare` plus Initialisierung im Konstruktor; Preference vom Panel an Editor und Viewer weitergeben. Bei einer anderen Architektur gleichwertige reaktive Aktualisierung sicherstellen.
- Darstellungs-Caches und bestehende Pack-Layer aktualisieren; Platzierungs-ID, Typ, Maße, Bindungen, Drehungen und Türstellungen nicht umschreiben. Dynamische Pack-Geometrie darf nach Farbe-/Maßänderungen nicht veraltet bleiben.
- Prüfung: `frontend/src/viewer/custom-features.test.ts`, Browser-Farbszenen in `frontend/screenshot.mjs`; wiederholt ohne Seitenneuladen wechseln, einschließlich Editor.

## 2. Neon und Produktfarben haben dieselbe Geometrie

- Bei unterschiedlichen Gegenstücken die Neon-Geometrie an das Produktfarben-Modell anpassen, nicht umgekehrt. Farben des Produktmodells und Neon-Look erhalten. Die ursprünglich 45 Abweichungen waren Badmöbel-, PAX- und Küchenmodelle.
- Mehrere Produktvarianten einer Neon-ID müssen geometrisch übereinstimmen. Widersprüche ausdrücklich ablehnen, nicht eine zufällige Variante auswählen.
- Stabile Teil-IDs, Achsen, Positionen, Drehungen, Maße, Sichtbarkeits-/Detailangaben und Bindungsreferenzen erhalten. Farbumschaltung darf nicht zu Formwechseln oder verlorenen Animationen führen.
- Prüfung: `scripts/upgrade-custom-packs.test.mjs`, `scripts/check-custom-pack-exports.py`; Neon/Product-Zuordnung und tatsächlich signierte Exportdateien prüfen.

## 3. Status nur am vorgesehenen Geräteteil

- Keine schwebenden Status-Badges über Pack-Geräten, auch kein schwebendes „Status unklar“. Vorgesehene Displays und LEDs nutzen; ohne geeignete Modellfläche kein Status in der Szene.
- Anklicken für Gerätedetails und Energieinformationen bleibt möglich. Die Entfernung der Badges darf weder Energieauswertung noch Sensorbindung oder Türzustände entfernen.
- Statusfarbe und zustandsabhängige Sichtbarkeit betreffen ausschließlich ausdrücklich deklarierte Teile, niemals das ganze Gerät. Unbekannter Zustand verwendet Grundfarbe/Grundsichtbarkeit; intern bleibt er unbekannt.
- Status-/Kompressor- und Türsensoren bleiben unabhängig und vom Benutzer auswählbar. Allgemeine Packs enthalten keine privaten HA-Entitätsnamen.
- Prüfung: `frontend/src/pack-runtime.test.ts`, `frontend/src/viewer/furniture-rotation.test.ts`, Browser-Geräteszenen.

## 4. Bewegliche und leuchtende Teile nicht doppelt zeichnen

- Teile mit Bewegung, Status oder dynamischer Sichtbarkeit ausschließlich im zuständigen dynamischen Pack-Layer zeichnen. Auch der alte Glow-Pass darf sie nicht erneut in der geschlossenen Ausgangsposition erzeugen.
- Türfront, Griff, Anzeige und zugeordnete Leuchtflächen bewegen sich zusammen; Gehäuse und Arbeitsplatte bleiben fest. Lokale Teilebewegung zuerst, anschließend die gemeinsame Möbeltransformation.
- Bei Pack-/Maßänderungen dynamische Geometrie und Referenzen aktualisieren, alte Ressourcen freigeben. Keine Geisterflächen, veralteten Displays oder doppelten Flügel.
- Prüfung: `frontend/src/viewer/furniture-rotation.test.ts` (bewegliche Leuchtfläche), `frontend/src/pack-runtime.test.ts`, Browser `pack-dishwasher-open` und `pack-fridges-forward`.

## 5. Kühlschranktüren öffnen nach vorne

- Pack-Türen schwenken aus dem Gehäuse heraus, nicht durch den Innenraum nach hinten. Linke und rechte Tür haben ihre tatsächliche lokale Scharnierposition und gegensinnige Bewegung.
- Aktuelle Konvention des Runtimes: Winkel `-angle * direction`; bei den vorhandenen Kühlschrankmodellen linkes Scharnier `direction = +1`, rechtes `-1`. Bei einem neuen Koordinatensystem das beobachtbare Verhalten erhalten, nicht blind die Zahlen kopieren.
- Betroffene Modelle: Samsung RS80F65KDFEF, Siemens KG36EALCA, kleiner Kühlschrank und Liebherr FNa 6635-20. Beide Farbstile korrigieren; unabhängige Türbindungen, Spiegelung und XYZ-Drehung erhalten.
- Prüfung: `scripts/upgrade-custom-packs.test.mjs`, Browser `pack-fridges-forward`.
- Nach einer Metadatenkorrektur müssen auch die verwendeten Neon- **und** Farb-Packs aktualisiert/importiert sein. Ein altes Gegenstück kann sonst die alte Öffnungsrichtung zeigen; das war bereits eine Ursache eines scheinbar erfolglosen Fixes.

## 6. Spülmaschine: unteres Scharnier, Öffnung nach vorne unten

- Vorhandenes Modell `kitchen_dishwasher_panel_60` ergänzen, nicht ein zweites Gerät anlegen. Eigene Bindung „Spülmaschinentür“, unabhängig von Betriebs-/Statusanzeige.
- Öffnung bis 90° nach vorne unten. Im vorhandenen Koordinatensystem lokale X-Achse, unterer Drehpunkt, `direction = -1`.
- Front einschließlich Griff, Bedienfeld, metallischer Innenseite und Spender bewegt sich gemeinsam; Arbeitsplatte und Gehäuse bleiben stehen. Innenraum/Seitenwände dürfen die Öffnung nicht durch einen geschlossenen massiven Korpus verdecken.
- Nur visualisieren; keine HA-Aktion zum physikalischen Öffnen auslösen.
- Prüfung: `scripts/upgrade-custom-packs.test.mjs`, Browser `pack-dishwasher-open`.

## 7. Nach oben gerichtete Spots enden an Decke/Dach

- Kegelstrahlen an den realen Raumdecken bzw. Dachunterseiten begrenzen, einschließlich geneigter Dächer. Kein sichtbarer Lichtkegel durch die Dachhaut nach außen.
- Die getroffene Unterseite erhält eine gerichtete diffuse Beleuchtungsnäherung. Das ist keine physikalisch vollständige Spiegelung oder Mehrfachreflexion; keine solche Genauigkeit versprechen.
- Raumhöhe, fertiger Boden und Dachprofil konsistent verwenden; bei gefaltetem/ausgeblendetem Dach keine andere physische Zielhöhe erfinden. Lampen ohne Dach/Raum behalten den definierten begrenzten freien Kegel.
- Vorhandene Original-Leuchtenoptionen erhalten: nur eine Farbe/ohne Raumlicht, Glow-Faktor und Steuerung müssen auch für Pack-Spots wirken. Eigene Entität und Winkel pro Kopf; lokale Kopfrotation plus Eltern-XYZ-Drehung.
- Prüfung: `frontend/src/viewer/custom-features.test.ts`, `frontend/src/viewer/lighting.test.ts`, Browser `view-upward-spot-roof`.

## 8. Pluspunkte bei Dach- und Außenkonturen funktionieren auch beim Ziehen

- Klick auf ein „+“ fügt den Kantenmittelpunkt genau einmal ein. Schon minimale Pointer-Bewegung darf den Punkt nicht sofort wieder verlieren.
- Für das folgende Ziehen die **Kontur nach der Einfügung** verwenden; für Undo weiterhin den unveränderten Stand vor der Einfügung. Diese beiden Zustände nicht verwechseln.
- Konkave gültige Flächen erlauben; ungültige Konturen vor der Übernahme ablehnen. Bei ungültiger Bewegung letzten gültigen Stand behalten, statt die bereits eingefügte Ecke zu löschen.
- Undo entfernt die ganze Einfüge-/Ziehaktion; Redo stellt sie wieder her. Einheitlich für freie Dach- und Außenkonturen, Nachbarpunkte erhalten. Rechtecke und Original-Rundpools nicht ungefragt in freie Konturen umwandeln.
- Prüfung: `frontend/src/geometry/polygon.test.ts`, `frontend/src/freeform.test.ts`, `tests/test_freeform_schema.py`, Browser `editor-contour-press-drag` mit 1-px-Pointerbewegung, anschließend Undo/Redo.
- Browserprüfungen müssen nach Änderungen/Undo/Redo die Parent-/Lit-Aktualisierung abwarten; ein einzelnes `updateComplete` des Editors kann vor der Datenrückgabe vom Panel fertig sein.

## 9. Negative Höhen für alle manuell höhenpositionierbaren Objekte

- Möbel und Pack-Objekte einschließlich gerader Standardtreppen/U-Treppen: `mount_y` relativ zum fertigen Raumboden, −10 bis +10 m. X/Z und Modellhöhe unverändert lassen.
- Hauptformular, kompakte 3D-Leiste, Einzel-/Gruppenverschieben und Wandansicht verwenden denselben signierten Bereich. Unterkante gedrehter Möbel in der Wandansicht ist nicht automatisch deren Montagebasis; Transformationsgrenzen berücksichtigen, nicht erneut auf 0 klemmen.
- Standard-Türen/Garagentore besitzen ein Feld „Höhe über Boden“; Fensterbrüstungen ebenfalls negativ möglich. `sill` ist signiert, Backend −10 bis +100 m (bisherige positive Grenze erhalten), nur endliche Zahlen akzeptieren.
- Türblatt, Rahmen, Glasschlitz, Griffe, Seitenteile und Schienen vollständig mitbewegen. Aktuell Tür-/Garagengeometrie relativ zur Schwelle zeichnen und Schwelle einmal addieren; globale Schnitthöhe entsprechend lokal umrechnen. Nicht nur das Eingabefeld freigeben oder die Türhöhe kürzen. Negative Öffnungskanten auch in Umrissen berücksichtigen.
- Fenster behalten ihre bestehenden Brüstungs-/Fensterbankregeln; alte Pläne und die Raumseiten-/Schwellenregeln bleiben gültig. Keine automatische Bodenöffnung aus dem negativen Versatz ableiten.
- Außenflächen, Zäune, Hecken und Pergolen: vorhandenes `offset` −10 bis +10 m. **Versatz**, nicht negative Körperhöhe; Zaunhöhe bleibt positiv. Automatisch montierte Deckenobjekte bleiben nach ihren bisherigen Montagevorgaben positioniert.
- Prüfung: `frontend/src/viewer/furniture-rotation.test.ts`, `frontend/src/viewer/openings.test.ts`, `frontend/src/viewer/outdoor.test.ts`, `tests/test_schema.py`; Browser `editor-standard-stair-height` und `editor-negative-object-heights`, einschließlich Geometrie und Undo/Redo.

## 10. Raumhöhen und gedrehte dünne Möbel erhalten

- E/B/H: Wandunterkante über Etage, zusätzlicher Bodenaufbau, lichte Höhe. Fertiger Boden = E+B; Wandoberkante = E+B+H. Alte `elevation`-Daten und `height`-Fallback lesbar halten; Originalfeld `ceiling_height` nicht durch ein konkurrierendes Feld ersetzen.
- Tür-/Fensterhöhen neuer Raumprofile vom fertigen Eigentümer-Raumboden messen. Historische Übergänge nicht ohne Migration verschieben. Dachspots, Fensterlicht, Wandansicht, Gruppen und Walk-Kamera dürfen den Bodenversatz nicht doppelt addieren.
- Geneigte Möbel über projizierte XYZ-Grenzen auswählen. Proportionales Ziehen darf dünne Bauteile nicht durch einen pauschalen Mindestwert aufblähen; explizite Maße bleiben separat editierbar. Keine automatische Boden-/Wandhaftung beim Kippen.
- Stufenanzahl und signierter Längsversatz eines Durchbruch-Stufenlaufs erhalten; Anschluss- und Ausschnittgeometrie dem tatsächlichen Laufverlauf anpassen, auch wenn der Lauf vor dem Durchbruch beginnt.
- Prüfung: `frontend/src/furniture-transform.test.ts`, `frontend/src/room-levels.test.ts`, `frontend/src/geometry/wall-frame.test.ts`, `tests/test_room_levels.py`, `tests/test_furniture_rotation.py`.

## 11. Runde Modelle und gewendelte Pack-Treppen

- Fußbälle Größe 3/4/5 als ausreichend fein segmentierte Kugeln; schwarze Felder als passende Polygonflächen, keine eckige Grundkörper-Näherung. Rundungen auch in niedriger Qualitätsstufe erhalten.
- Echo Dot 3 mit hochaufgelöstem rundem Körper, Echo Dot 4 als Kugel/Ellipsoid; Uhr, Tasten und Steckdosenhalterung erhalten. Nicht als wenige grobe Quader approximieren.
- Aktuelle Rundsegmentierung für diese Formen: mindestens 32 bei niedriger Qualität, 40 normal, 64 bei hoher Detailstufe. Andere Formen können andere Detailstufen haben; nicht alle Geometrie pauschal vervielfachen.
- Offene L-/U-Pack-Treppen und die U-Variante mit kürzerem rechtem Startlauf: echte Polygon-Wendelstufen ohne Zwischenpodest, innen schmaler und außen breiter. Benachbarte Stufen teilen exakt die Grenze, keine überlappenden gedrehten Rechteckplatten. Geländer und bestätigte Laufrichtung aus den Pack-Daten erhalten.
- Polygonplatten unterstützen horizontale und vertikale Achsen. Deck-/Unterseiten zeigen nach außen, unabhängig von der Umlaufrichtung der Kontur; sonst verschwinden Stufen/Fußballfelder durch Backface-Culling.
- Bestehende IDs, Teil-IDs, Maße, Anzeigen und Produktzuordnungen bei der Migration behalten; erneutes Ausführen ändert nichts mehr.
- Prüfung: `scripts/upgrade-custom-packs.test.mjs`, `frontend/src/viewer/custom-features.test.ts`; Browser-Szenen für `open_*_stair`, `round-devices` in `frontend/screenshot.mjs` mit `ROUND_PACK_DIR`.

## 12. Anzeigen, Uhr-Fallbacks und Zeitreise

- Digitale Uhr/Sensor-/Restzeitfelder nur auf definierten Modellflächen. HA-Zeitzone einschließlich Sommerzeit verwenden, analoge Uhr mit Stunden-/Minutenzeiger ohne Sekundenzeiger.
- Fehlende/ungültige Werte: Text `--:--`, analoge Uhr 10:10. Restzeit nicht ohne bekannte Einheit interpretieren; keine plausibel aussehenden Fantasiewerte.
- Unbekannter Türsensor darf zuletzt gültige Stellung behalten, aber Live-Merker und historische Merker trennen. Beim Rückwärtssprung keine spätere/historische Zukunft oder Live-Stellung als damalige letzte Stellung übernehmen.
- „Animation aus“ bedeutet sofortige korrekte Zielstellung, nicht ignorierter Zustand. Globale und objektspezifische Einstellung, Zeitreise und Pause konsistent behandeln.
- Prüfung: `frontend/src/pack-runtime.test.ts`, `tests/test_custom_packs.py`; Browser-Zustandswechsel und historische Rückwärtssprünge ergänzend prüfen.

## 13. Neue Türvarianten bleiben normale Öffnungen

- `sliding_glass`: zusätzliche Glas-Schiebevariante im bestehenden Türsystem, kein neues Möbelstück. Parallel zur Wand auf der Schiene verschieben, nicht ausschwenken; einzelne/doppelte Flügel und Kontaktbindung erhalten.
- `front_slot`: zentraler Sichtschlitz ca. 40 cm breit mit je 30 cm Abstand oben/unten; bei zu kleinen Türen an verfügbare Maße anpassen. Keine Außenleuchte darüber.
- `sliding_wood`: Schiene und Griff, im Produktmodus Holzton der bestehenden Küchenfront, sonst Neon. Kein separates Inventarstück. Normale Türstile bleiben unverändert.
- Prüfung: `frontend/src/viewer/openings.test.ts`, `tests/test_schema.py`, Browser `editor-glass-sliding-door`, `editor-front_slot`, `editor-sliding_wood`. Sensorwechsel bis zum tatsächlichen Animationsziel abwarten, nicht mit einer zu kurzen festen Wartezeit beurteilen.

## 14. Außenflächen und Dachfenster: Originalfunktionen nicht verlieren

- Integration mit Original 1.18.0 (`e7b2027`): konfigurierbare Geländehöhe und Keller-/Lichtschachtdarstellung übernehmen. Kiesbeete, Außenlicht und negative Zaun-/Flächenversätze verwenden dieselbe Gelände-Basis wie die Originalflächen. Höhenversatz relativ zum Gelände nicht mit Raum-Bodenaufbau verwechseln. Im neuen Außen-Werkzeugmenü Rechteck/Freiform mit der Custom-Kontursteuerung synchron halten, damit die sichtbare Auswahl auch die tatsächliche Zeichenart ändert.

- Mehrere Außenflächen dürfen denselben HA-Bereich erhalten. Freie Punktkonturen, Neigung und signierter Höhenversatz bleiben erhalten; `gravel_bed` ist eine Außenart „Kiesbeet“, keine Möbelattrappe.
- Kiesdarstellung deterministisch mit endlichen Werten und zur Neigung passender Oberfläche. Typwechsel darf HA-Bereich, Punkte oder Höhenprofil nicht löschen.
- Beim Verschieben von Dach-/Pergolaflächen gebundene Spots mitnehmen; gelöste bleiben stehen. Kein beliebiger Neuaufbau des Spotrasters.
- Bestehende Original-Dachfenstersteuerung, Kontakte, Motoren, Rollläden, Raumkarten und Sonnenlicht behalten. Originaloption für schwebende Darstellung ohne sichtbares Dach respektieren; nicht global wieder aktivieren. Sonnenlicht folgt dem zugeordneten Raumboden.
- Prüfung: `frontend/src/viewer/outdoor.test.ts`, `frontend/src/surface-binding.test.ts`, `frontend/src/ceiling-spots.test.ts`, `frontend/src/viewer/roof-window.test.ts`, `frontend/src/viewer/roof-sun.test.ts`, Browser `editor-gravel-bed`.

## 15. Pack-Daten, Signaturen und bereits korrigierte Inventarmodelle

- Anwendungscode allein reicht nicht zum Wiederaufbau der Möbel. Maßgeblich sind auch die privaten kanonischen `v2.*.json`, `VARIANTS.json`, `CUSTOM-FEATURES.json` und die vorhandenen Sicherungen in `private/product-packs-v2`. Diese Daten erhalten; ältere Generatoren nicht über die korrigierten Modelle laufen lassen.
- Aktuelle vorbereitete Pack-Verträge: Format 2, stabile Teil-/Binding-/Display-/Motion-/Spot-IDs, Produktzuordnungen, deklarierte Statusflächen und neue Formen. Backend und Frontend müssen dieselben optionalen Felder verstehen. Keine privaten HA-IDs in allgemein nutzbaren Pack-Daten.
- Signierte Exporte ausschließlich unter `neon/*.fp3dpack` und `color/*_farben.fp3dpack`; restliche Quelldaten im bestehenden Ordner lassen. Private Schlüssel separat halten, niemals in Git, Dokumentation oder Installations-ZIP aufnehmen. Vertrauenswürdiger öffentlicher Custom-Key muss in der Anwendung enthalten bleiben.
- Signieren mit der kanonischen Backend-Repräsentation, nicht nur einer ähnlich aussehenden JavaScript-JSON-Sortierung: Zahlendarstellung kann sich unterscheiden. Nach jeder Migration tatsächliche Signaturen und Geometrie-Zuordnungen prüfen.
- Nur gepflegte `scripts/upgrade-custom-packs.mjs` und zugehörige Module nutzen. `tools/product-packs/` weder verändern noch ausführen. Quelle, Canonical-/Varianten-Daten und beide Exportstile zusammen aktualisieren; Sicherung vorher, idempotente Migration.
- Auch die späteren Inventarergänzungen erhalten: Hausnummern 0–9/a–c im bestehenden Türen-/Fenster-Pack, IKEA SNUDDA Ø39 cm im Küchenzubehör und Foto-Wandthermostat in Haustechnik. Thermostatmodell ist nicht sicher identifiziert, Maße sind Foto-Näherungen; Temperatur-/optionale Climate-Bindung vorbereitet, keine feste HA-Entität. SNUDDA-Produkt-/Verpackungsmaße nicht verwechseln.
- Frühere individuelle Modellkorrekturen (Farbtöne, Griffe, Spülen, Möbelvarianten, liegende Kopfhörer usw.) sind in den kanonischen Pack-Daten zu bewahren. Dieser Runtime-Katalog ist kein Ersatz für deren Geometrie und Fotos. Bei fehlenden Daten nicht behaupten, ein Neuaufbau aus dieser Beschreibung sei bereits originalgetreu.
- Prüfung: `scripts/upgrade-custom-packs.test.mjs`, `scripts/check-custom-pack-exports.py`, `tests/test_custom_packs.py`; importierte Neon- und Farb-Packs mit dem exportierten Stand abgleichen.

## 16. Update- und Deployment-Fixes erhalten

- Vom Original-main integrieren und anschließend den **vollständigen** konsolidierten Feature-Branch, nicht nur alte Teilbranches. Lokales Original-`main` getrennt von `custom` halten. Bei Konflikten alle Regeln dieses Katalogs erneut prüfen; veraltete Bundle-Konflikte aus Quellcode neu bauen.
- Feature-Verträge, Verhaltenstests, Backend/Frontend-Typprüfung, Lint, Formatierung, Budgets und signierte Packs müssen bestehen. Fehlende/falsche Tests verhindern `ready`; Status nicht manuell schönschreiben.
- Nach nachträglichen Änderungen an einem geprüften Kandidaten erneut prüfen. Ein altes ZIP ist kein Nachweis für neue Quellen. Adoption nur für vollständig geprüften, sauberen Kandidaten; das Deployment verwendet diesen geprüften Stand.
- HA-Deployment über den bereits eingerichteten SSH-Zugang mit `scripts/neon-deploy.mjs`, nicht ungefragt Samba voraussetzen. Prüfsummen, sichere Pfade, Backup und Rollback erhalten; Restart nur ausdrücklich angefordert. Private Schlüssel nicht übertragen.
- Push, Veröffentlichung, HA-Installation, Pack-Import oder HA-Konfigurationsänderungen erfordern einen separaten Auftrag. `ready`/lokales `adopted` bedeutet nicht installiert. Nicht direkt HA-`.storage` ändern.
- Prüfung: `scripts/neon-update.test.mjs`, `scripts/neon-deploy.test.mjs`; nur angeforderte externe Änderungen vornehmen.

## 17. Fahrzeugprofile und gezielte Glättung

- Verbindlicher Daten-/Migration-/Abnahmevertrag: [vehicle-profile-geometry.md](vehicle-profile-geometry.md). Profilkörper verbinden mehrere passende geschlossene Querschnitte, mit begrenzter Punkt-/Ringzahl, korrekten Endkappen und kontrollierten Normalen. Neon-Outlines zeigen Knicke, keine Dreiecksgitter.
- Bestehenden Soul II und C5 Aircross 2024 in beiden Farbstilen erhalten; Profile für Karosserie, Fenster und Dach, echte Radöffnungen, schmale A-Säulen, runde Räder und dachfolgende Reling. IDs, Größen und Zuordnungen nicht ersetzen. Radlaufleisten effizient als Profile statt dicht segmentierter Hohlrohre.
- Optische Nachbesserung 14.10.: lackierte Kabine, einzeln begrenzte Fenster statt Glasblock, realistischere Hauben-/Dachübergänge, ausreichende Heckscheibenhöhe, fünf schmale Speichen statt gefülltem Stern, eigene Frontdetails und Seitenschweller. Contract 13 und Regressionstests sichern positive Fensterquerschnitte, gleiche Neon-/Produktgeometrie und die bestehenden IDs. Auch die normalen Vorschauen sowie Front-/Seiten-/Heckprüfbilder erneuern.
- Erneute Frontkritik, Contract 14/Release 11: C5 mit hoher SUV-Haube und hoher Stoßstange, hoch sitzendem Doppelleuchtband und vertikalen Lufteinlässen; Soul mit breiter, aufrechter Nase, breiterem geradem Dach, steilerer Scheibe und stärker erhaltenen Kanten. Eigenständige polygonale Soul-Scheinwerfer/Projektoren/Tiger-Nose-Grill. Verbindliche relative Höhen/Breiten und direkte Front-Abnahme in `vehicle-profile-geometry.md`; Kennzeichen nicht versenken, Heckleuchten an neue Außenhaut anpassen und Nullflächen der Reling verhindern. ID/Größe erhalten, Galerie erneuern; technische Tests allein sind keine Zustimmung zur Optik.
- Kia-Seitenkritik, Contract 15/Release 12: drei eigenständige Fensterkonturen mit keilförmigem Festfenster, nach hinten steigender Fensterunterkante und dunklen B-/C-Stegen. Glas über die Höhe an die gewölbte Kabinenhaut anpassen, sonst entstehen weiße Durchdringungen. Geformte Schultern, eingezogene Türzone, sanfte Dachübergänge statt gleichförmigem Quader. Anbauteile auf neue Außenhaut projizieren. Citroën ausdrücklich unverändert erhalten; Neon/Produkt gemeinsam signieren und Vorschauen nachziehen. Kontur-/Haut-/Glättungsdetails und Regressionen im Wiederaufbauvertrag erhalten.
- Erneute Kritik an beiden flachen Fronten, Contract 16/Release 13: Vorderkörper räumlich um die Ecken wölben, nicht nur Kanten glätten. `scripts/pack-vehicle-fronts.mjs` verbindet viele passende Querschnitte bis zu einem kleinen Nasenabschluss; Stoßfänger, Grill und Leuchten folgen der gemeinsamen Bogenfläche. Breite/hohe Front an der gesamten Hülle abnehmen, nicht am schmalen vordersten Querschnitt. Gezackte Kia-Kotflügel und gefüllte Citroën-Logo-Dreiecke vermeiden. Teil-IDs und Metadaten erhalten, beide Looks signieren, Front-/Schrägvorschauen erneuern; kein UI-Umbau und keine optische Zustimmung aus Tests ableiten.
- Neue Form in Backend, Renderer, 2D-Symbolen, Geometrievergleich und signiertem Export gemeinsam implementieren. Fotos und Herstellerdaten vergleichen; nicht als exakte CAD-Replik behaupten. App und beide Fahrzeuge-Packs müssen nach der Änderung aktualisiert werden.
- Tests: `frontend/src/viewer/profile-shapes.test.ts`, `tests/test_custom_packs.py`, `scripts/pack-vehicle-profiles.test.mjs`, zugehörige Browser-Szenen. Der volle Update-Prüflauf umfasst diese Tests.

## 18. Reguläre Pack-Galerie nach jeder Modelländerung nachziehen

- Einzelne neue Prüfbilder im Feature-Worktree reichen nicht. Die normale Galerie `private/product-packs-v2/previews/` muss ebenfalls aktuelle Einzelbilder und alle Übersichtseiten für Neon und Produktfarben enthalten.
- Workflow und Prüfungen: [pack-preview-maintenance.md](pack-preview-maintenance.md). Aktuellen nativen Quell-Renderer verwenden; bewegliche Teile in neutraler Stellung nicht weglassen, Displays mit vereinbarten Fallbacks zeigen. Quelldaten/HA bleiben unverändert.
- Alle Packs aus den Daten ermitteln, keine alte feste Pack-Anzahl. Leere Bilder/fehlende Dateien/stale Übersichtseiten verhindern den Austausch. Quell-Hashes und Mengen in einem Manifest halten; alte Galerie wiederherstellbar sichern und erst nach erfolgreichem vollständigem Lauf ersetzen.

## 19. Freiform-Dachfenster und Dachmarkisen

- Fehlerbild: nur rechteckige Dachfenster; Beschattung immer von oben am Flügel, keine freie Glasdach-Kontur oder Dachmarkise. Ab 15.10.2026 optionale `RoofWindow.points` als einfache, auch konkave Kontur mit 3–32 normierten Punkten innerhalb `[0,1]²`. Breite/Höhe skalieren die Kontur auf 0,3–50 m; mindestens 5 % der Hülle müssen belegt sein. Keine kreuzenden Kanten, Nullflächen, NaN, unendlichen Koordinaten oder überstehenden Konturen speichern. Fenster bleibt vollständig auf genau einer Dachfläche.
- Dachfenster anlegen/auswählen → „In Freiform umwandeln“ oder „Kontur neu zeichnen“. Auf der gewählten Dachfläche Eckpunkte setzen, am Startpunkt/mit Abschließen/Enter schließen; Escape/Abbrechen verwirft nur den Entwurf. Punkte ziehen, Kanten-„+“ zum Einfügen (bis 32), Zahlenfelder und Löschen ab drei Punkten. Minimaler Pointer-Drag nach „+“ erhält den eingefügten Punkt; Undo/Redo umfasst die ganze Geste. Plan-Lock und Fenster-Lock sperren Konturbearbeitung, nicht nur das Verschieben.
- `cover_style`: `roller` (Standard, am beweglichen Flügel) oder `awning` (über der festen Glasfläche, unabhängig von Flügelöffnung). `cover_direction`: `top` (Standard), `bottom`, `left`, `right`; `cover_color`: optionale Hexfarbe. Vorhandene frei auswählbare HA-Cover-Entität und Positions-/Bedienlogik wiederverwenden; keine festen privaten Entitäten oder automatisch erzeugten HA-Geräte. Flächige Dach-/Glasdachmarkise, keine auskragende Gelenkarm-Markise vor einer Fassade.
- Polygonale Rahmen, Flügel und Beschattung triangulieren, konkave Aussparungen nicht auffüllen. Keine inneren Triangulationslinien auf dem Stoff. Den wirklichen Umriss aus beiden Dachhäuten/Glasdach schneiden, nicht dessen umschließendes Rechteck; benachbarte oder höher/tiefer liegende Dachflächen nicht mit ausschneiden. Standard-Sattel-/Flachdächer ebenso wie eigene Abschnitte unterstützen.
- Sonnenlicht auf unbeschattete Polygonstücke und Zielraum begrenzen, einschließlich fertigem Raumboden und Bodenöffnungen. Für konkave Fenster einen inneren Anker zur Raumzuordnung verwenden. Alte Rechtecke, Kontakte, Kippkontakte, Motorpositionen, Drehpunkte, Namen, Fixierung, schwebende Darstellung, Raumkarten und HA-Bindungen behalten. Konturänderung/Flächenwechsel ersetzt keine Fenster-ID und keine anderen Einstellungen.
- Migration: additive optionale Felder, keine automatische Umwandlung alter Fenster, kein Möbelpack-Import erforderlich. Bestehende Rechtecke ohne Punkte behalten Rollo von oben; JSON-Speichern/Export/Import erhält alle neuen Werte. Anwendung/Frontend und Backend gemeinsam aktualisieren; ein alter installierter Stand zeigt das neue Formular nicht.
- Abnahme: `frontend/src/roof-window-shape.test.ts`, bestehende Dachfenster-/Sonnenlicht-/Solar-Tests und `tests/test_roof_windows.py`; Browser `editor-roof-freeform` (reale Klicks, 1-px-Drag, Undo/Redo, neuer Umriss, Parent-Plan, Bindungen, Sidebar ohne Overflow), `view-roof-freeform-awning` für teilweise ausgezogene Beschattung. Update-Vertrag `roof_windows_freeform` muss bei Original-Updates mitgeprüft werden. Lokale Prüfung ist keine HA-Installation.
- Lokale Prüfung 15.10.2026: 467 Frontend-Tests, 96 Backend-Tests mit 46 Subtests, TypeScript, Python-Typprüfung, Lint, Formatierung und Build innerhalb unveränderter Budgets. Update-/Deployment-/Pack-Tests: 39 bestanden, ein optionaler Test eines per Umgebung angegebenen Installationsarchivs übersprungen. 58 signierte Packs und 1102 Produktzuordnungen unverändert gültig; Desktop-/Tablet-Gesten sowie 3D-Vorschau geprüft. Kein neuer adoptierter Update-Kandidat, keine HA-Installation.

- Rollo-Fix 16.10.2026: Die Glasscheibe darf nicht im undurchsichtigen Rahmen-/Rollo-Buffer liegen. Eigener Glas-Buffer und beidseitig transparentes Material (aktuell 22 % Opazität, `depthWrite=false`), Rahmen/Rollo bleiben undurchsichtig. Sonst verdeckt die blaue Scheibe von innen das außen liegende geschlossene Rollo. Separate Materialressource beim Neuaufbau freigeben; schwebende wie dachgebundene Fenster gleich behandeln.
- HA-Abbildung explizit testen: Rollladen 100 % = eingezogen/keine Beschattung, 0 % = voll beschattet. HA-Geräteklasse `awning` umgekehrt: 0 %/`closed` = eingefahren/keine Beschattung, 100 %/`open` = ausgefahren. Fehlende Geräteklasse darf bei gewählter Markisendarstellung auf Markisensemantik zurückfallen; eine ausdrücklich gemeldete Shutter-Klasse nicht aufgrund der Optik invertieren. Ungültige/unverfügbare Positionen erzeugen kein NaN. Unabhängige Fenstermotor-Entität ebenfalls beobachten, damit deren Positionsänderung allein den Viewer aktualisiert.
- Regressionen: `frontend/src/roof-window-state.test.ts`, Glas-/Rollo-Buffer- und Materialtests, Browser `view-roof-rollo-{100,50,0}-{inside,outside}`. Im selben Browser ohne Reload HA-Positionen 100 → 0 → 50 → 100 durchlaufen und Änderungen der tatsächlichen Beschattungsgeometrie prüfen. Optionale private Testkopie mit `ROOF_PLAN` nur lokal zum Nachstellen, niemals reale Rollos für die Prüfung fahren. Kein Plan-/Pack-Umbau erforderlich, aber aktualisierte Anwendung notwendig; alte installierte Bundles sind nicht durch einen Pack-Import korrigiert.

## 20. Pack-Klimageräte wie Standard-Klimageräte

- Bosch Climate 3200i W26E/W35E in Neon und Produktfarben unterstützen dieselbe frei gewählte HA-`climate`-Entität wie `ac_unit`. Pack-Bindung `climate` hat Vorrang; bestehendes Hauptfeld `entity` bleibt kompatibel. Explizites `none` nicht durch automatische Bereichszuordnung ersetzen. Ohne Auswahl dieselbe Bereichssuche und Leistungszuordnung wie beim Standardgerät.
- Identische `climateModeGlow`-Logik: Heizbetrieb warm, Kühlbetrieb blau, Entfeuchten gelb, Ventilator hell, Automatik grün; voller Glow bei Aktivität, 45 % im gemeldeten Bereitschaftszustand, kein Glow bei aus/unbekannt/nicht verfügbar. Generische Bildschirm-/Medienlogik darf diese Farbe und Intensität nicht überschreiben.
- Nur der vorhandene Luftauslass `p018` ist die Glow-Fläche; Körper nicht umfärben. Separate Status-LED `p029`, Sensorbindungen und Produktfarben erhalten. Bei schmalen Glow-Flächen den Innenabstand auch auf die Flächenhöhe begrenzen, sonst wird deren Höhe negativ. Montagehöhe, Spiegelung und XYZ-Transformation weiterverwenden.
- Pack-Migration Contract 17: bestehende IDs, Maße und Geometrie behalten; zusätzliche Climate-Bindung und Outlet-Screen-Metadaten idempotent ergänzen. Beide Haustechnik-Packs neu signieren/importieren, Anwendung ebenfalls aktualisieren. Keine Änderung an UI, HA-Konfiguration oder echten Geräten.
- Abnahme: `frontend/src/climate-packs.test.ts`, `devices.test.ts`, `scripts/upgrade-custom-packs.test.mjs`; Browser `pack-climate-neon`/`pack-climate-color` mit `CLIMATE_PACK_DIR`: beide Bosch-Modelle gegen Standardgerät bei allen Modi, Aktivität, Idle, Aus und Nichtverfügbarkeit ohne Reload vergleichen; reguläre Galerie nachziehen.

## Original-Abgleich 16.10.2026 (1.19.0)

- Original-main `bd56e85061a456bd93bdf75264143aa4a0220c0c` mit allen 16 Custom-Verträgen zusammenführen. Neue Haushaltsfunktionen, fünf Markisenarten, Importwerkzeug, Sprachen und Original-Korrekturen nicht durch ältere Custom-Dateien ersetzen. Berechtigungen der neuen Original-Funktionen beibehalten.
- Dachfenster dürfen nun über tieferen Etagen schweben. Dabei müssen auch deren separate transparente Glas-Buffer erhalten bleiben; nicht nur Rahmen und Rollo in die untere Etage übernehmen. Beschattung bleibt ohne Reload aktualisierbar.
- Neues diffuses Tageslicht unter Dachfenstern unabhängig von der direkten Sonnenrichtung erhalten. Auf den fertigen Raumboden projizieren; echte Fensterkontur, teilweise Beschattung, Zielraum und Bodenlöcher ausschneiden. Direkte warme Sonnenprojektion bleibt zusätzlich bestehen. Abnahme: `roof-sun.test.ts`, `roof.test.ts` und Rollo-Browserfälle.
- Neue dynamische Markisen müssen dieselbe zusätzliche X-/Z-Rotation wie übrige Möbel behalten, auch während des Ausfahrens. Abnahme: alle fünf Varianten bei 0/50/100 % in `furniture-rotation.test.ts`.
- Keine Plan-/Pack-Migration für diesen Abgleich. Generierte Frontend-Bundles vollständig neu bauen. Gemessener gemeinsamer Build statt alter Einzelzweig-Budgets: Hauptbundle ca. 604 KB, 3D 841 KB, Editor 856 KB, Karteneditor 241 KB; kleine explizite Budgetreserven beibehalten.
- Lokal abgenommen: 511 Frontend-Tests, 97 Backend-Tests mit 46 Subtests, TypeScript/Mypy, Ruff/Formatierung und Build. 39 Update-/Deployment-/Pack-Tests bestanden; ein optionaler Archivtest mangels eigenem Update-Zustand im Kandidaten-Worktree übersprungen. Alle 58 signierten Packs und 1102 Produktzuordnungen gültig. Acht Browserfälle für Freiform-Markise, Rollo innen/außen bei 0/50/100 %, sofortige Produktfarben-Umschaltung, eigene Anzeigen/Animationen, Kontur-Plus, negative Höhen und Aufwärtslicht bestanden. Neue Original-Haushaltsdarstellung zusätzlich geprüft; lokale Vorschau ohne private Original-Packs isolieren, damit fehlende Pack-Dateien keine falschen 404-Fehler erzeugen. Keine HA-Installation oder Veröffentlichung.

## Wiederaufbau- und Pflegecheckliste

1. Spezifikation, diesen Katalog, `docs/custom-features.json` und vorhandene private Pack-Daten lesen. Originalstand sowie lokale Features/Fixes getrennt inventarisieren; erhaltene Daten und tatsächlich fehlende Ressourcen nennen.
2. Bestehende Pläne/Pack-IDs/Bindungen/Varianten und alte Höhenprofile als Regressionseingaben sichern. Laufzeitvertrag zwischen Backend, Editor, Viewer und Packs gemeinsam wiederherstellen.
3. Alle 20 Abschnitte oben gegen das neue Verhalten abnehmen, nicht nur nach vorhandenen Feldern suchen. Neu angelegte Ersatzimplementierungen müssen auch dieselben Fallbacks und ausgeschlossenen Automatismen einhalten.
4. Den vollständigen Update-Prüflauf ausführen; zusätzlich Browser-Farbumschaltung, Kontur-Plus mit Pointerbewegung/Undo/Redo, negative Höhen, nach oben gerichtetes Licht und Geräteöffnungen prüfen. Technische Prüfliste in `docs/custom-features.json` bei neuen Tests ergänzen.
5. Wenn Pack-Daten geändert wurden: Sicherung, Migration, Canonical-/Variantenabgleich, Signaturen und beide Exportstile prüfen. Nur bei Bedarf erneuten Pack-Import als Installationsschritt nennen.
6. Jeden künftigen Fix hier mit **Fehlerbild, verbindlichem Verhalten, Migration und Abnahmetests** ergänzen. Code/Commit ist Beleg, aber kein Ersatz für die dauerhaft lesbare Regel. Dokumentationsstände nicht ungeprüft als installierte Version ausgeben.

## Herkunft wichtiger Korrekturen

Commitangaben erleichtern das Nachlesen; die obigen Regeln bleiben auch ohne Git-Historie verbindlich.

| Korrektur | Historischer Commit |
| --- | --- |
| Dünne geneigte Möbel beim Skalieren erhalten | `55580ed` |
| Original-Leuchtenoptionen und dynamische Pack-Geometrie | `65743ac` |
| Produktfarben ohne Reload | `afe284e` |
| Status am Gerät statt schwebender Badges | `a97dbc6` |
| Runde Modelle und Polygon-Wendelstufen | `9de85a7`, `9b20a65` |
| Aufwärtslicht an Decke/Dach stoppen | `c9b56ac` |
| Kühlschranktüren nach vorne | `e3bc143` |
| Standardtreppen vertikal positionieren | `f7e851f`, `5159bcc` |
| Glas-Schiebetür / Kiesbeet | `48fa078`, `a2c35a3` |
| Holz-Schiebetür, Sichtschlitz, Spülmaschinenklappe | `5159bcc` |
| Kontur-Pluspunkte beim Ziehen erhalten | `d3a554b`, Browser-Wartefix `e5367ac` |
| Negative Höhen für Türen/Fenster/Möbel/Außenobjekte | `62bc3a2` |
