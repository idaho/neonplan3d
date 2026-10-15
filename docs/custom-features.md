Warning: truncated output (original token count: 26290)
Total output lines: 694

# NeonPlan Custom Features Entwurf

## Ergänzung 15.10.2026: Freiform-Dachfenster und Dachmarkisen

Zusätzlich zum bisherigen Funktionsumfang: frei gezeichnete Fenster-/Glasflächen auf einer Dachfläche (3–32 Eckpunkte), mit verschiebbaren Ecken und Kanten-„+“, Undo/Redo und editierbaren Maßen. Rollo am Flügel oder flächige Markise über dem Glas, Auszug von oben/unten/links/rechts und eigene Stofffarbe; vorhandene HA-Cover-Bindung steuert die Stellung. Konkave Ausschnitte bleiben frei, Dachöffnung und Sonnenlicht folgen der tatsächlichen Kontur. Bestehende rechteckige Fenster einschließlich Motor, Kontakten, Drehpunkt und schwebender Darstellung bleiben kompatibel. Kein neues Inventarstück, kein Pack-Import nötig. Details und verbindliche Wiederaufbauprüfung: [Fix-Katalog, Abschnitt 19](custom-feature-fixes.md#19-freiform-dachfenster-und-dachmarkisen). Lokaler Quellstand ist nicht automatisch auf HA installiert.

## Bisheriger Stand

Die eigene NeonPlan-Version soll ausgewählte zusätzliche Funktionen erhalten, ohne aktuelle Originalfunktionen zurückzusetzen. Die Anforderungen werden schrittweise gemeinsam festgelegt. Bestehende Implementierungen sind Ausgangspunkte, noch keine vollständig freigegebene Spezifikation.

Aktueller Dokumentationsstand vom 14.10.2026: Alle 15 bestätigten Funktionsgruppen sind im Branch `feature/custom-features-complete` implementiert und mit Original-main 1.18.0 (`e7b2027`) integriert. Vorheriger geprüfter Laufzeitstand: `62bc3a2`, einschließlich negativer Höhen für Möbel, Türen/Fenster und Außenobjekte. Dazu gehören auch Pack-Bindungen, Anzeigen, Statusbauteile, Öffnungsanimationen, gerichtete Strahler, zusätzliche Formen, Kontaktschatten und der globale Produktfarbenwechsel. Der folgende Anforderungstext und die älteren Bestandsaufnahmen dokumentieren die Entwicklung; Aussagen zu damals offenen Punkten sind historisch. Maßgeblich sind diese Spezifikation, der verbindliche [Fix- und Wiederaufbau-Katalog](custom-feature-fixes.md) und die Prüfschritte in `docs/custom-features.json`. Eine Neuimplementierung muss auch den Fix-Katalog erfüllen, nicht nur die 15 groben Feature-Gruppen. Durch diese Dokumentationsänderung wurde Home Assistant nicht aktualisiert und nichts veröffentlicht.

## Vorgehen pro Feature

### Fahrzeug-Geometrien vom 14.10.2026

Die zusätzlichen Pack-Formen umfassen jetzt auch mehrstufige Profilkörper (`profile`) und winkelabhängige Glättung. Kia Soul II und C5 Aircross 2024 übernehmen passende Karosserie-/Fenster-/Dachkonturen, Radöffnungen und runde Räder bei unveränderten Modell-IDs, Größen und Farbzuordnungen. Verbindliche Wiederaufbau-Regeln, Datenfelder und Abnahme: [vehicle-profile-geometry.md](vehicle-profile-geometry.md). Beide Fahrzeuge-Packs müssen zusätzlich zur Anwendung aktualisiert werden; reine Codeänderungen ersetzen ihre Daten nicht.

### Integration mit Original 1.18.0 am 14.10.2026

Original-main `e7b2027` ergänzt Gelände-/Kellerdarstellung, Kellerfenster mit Lichtschacht, gruppierte Werkzeug-/Etagenmenüs, einklappbare Seitenleiste, das 3D-Anzeigenmenü sowie Kamera-, Seitenteil- und Mediensteuerungsfixes. Diese Änderungen werden gemeinsam mit sämtlichen 15 Custom-Funktionsgruppen und dem Fix-Katalog integriert. Beim Werkzeugmenü bleiben freie Dach-/Außenkonturen verfügbar; die Rechteck-/Freiform-Auswahl steuert dieselbe Zeichenart. Außenobjekte und deren negative Höhenversätze folgen der neuen Gelände-Basis. Generierte Bundles werden aus den gemeinsamen Quellen neu gebaut, nicht aus einer Merge-Seite übernommen. Lokale Prüfungen und Installation bleiben getrennte Schritte.

### Ergänzungen vom 13.10.2026

- Standardtreppen gerade/U: senkrechte Position als mount_y relativ zum fertigen Raumboden auch negativ, von −10 bis +10 m. Hauptformular, kompakte 3D-Leiste und Verschieben in der Wandansicht berücksichtigen denselben unteren Grenzwert. X/Z, Treppenhöhe und alte automatische Positionen bleiben erhalten.
- Alle manuell höhenpositionierbaren Möbel und Pack-Objekte erlauben nun −10 bis +10 m relativ zum fertigen Boden. Standard-Türen und Garagentore erhalten ebenfalls eine signierte Höhe über Boden; Fensterbrüstungen erlauben negative Werte. Türrahmen, Flügel, Glas, Griffe und Schienen folgen gemeinsam dem Versatz. Zäune, Hecken, Pergolen und übrige Außenflächen verwenden den vorhandenen signierten Höhenversatz (−10 bis +10 m); ihre Körperhöhe bleibt positiv. Automatische Deckenmontage und bestehende Platzierungen bleiben erhalten.
- Normale Türvariante front_slot: mittiger 40-cm-Sichtschlitz mit 30-cm-Abständen oben/unten, ohne die übliche Außenleuchte über der Haustür. Bei sehr kleinen Türen passt sich der Ausschnitt an die verfügbaren Maße an.
- Normale Türvariante sliding_wood: seitliches Schieben mit Schiene und Griff; bei eingeschalteten Produktfarben Holzton der Küchenfront, sonst Neon-Look. Kein zusätzliches Inventarstück.
- Packs Türen/Fenster: einzelne wandmontierte Hausnummern 0–9 und Kleinbuchstaben a–c, Neon und Schwarz. Standardmaß 9 × 1 × 15 cm, über Möbelmaße anpassbar; Farb-IDs aus der Neon-ID abgeleitet.
- Vorhandene integrierte Spülmaschine: eigene Bindung „Spülmaschinentür“, unteres Scharnier, Öffnung um 90° nach vorne unten. Front, Griff, Bedienfeld, metallische Innenseite und Spender bewegen sich gemeinsam; Arbeitsplatte und Gehäuse bleiben fest. Statusanzeige bleibt unabhängig von der Türbindung. Keine Bewegung schaltet ein physisches Gerät. Dynamische Leuchtflächen werden nicht zusätzlich an der geschlossenen Ausgangsposition dargestellt.

Neue Verhaltenstests liegen in frontend/src/viewer/openings.test.ts, frontend/src/viewer/furniture-rotation.test.ts, tests/test_schema.py und scripts/upgrade-custom-packs.test.mjs; die vollständige Update-Prüfung führt sie mit aus.

Aktualisierte Darstellungsentscheidung vom 13.10.2026: Keine schwebenden Status-Badges über Pack-Geräten, auch kein „Status unklar“-Schild. Status erscheint nur auf vorgesehenen Displays oder LEDs; ohne passende Modellfläche entfällt er in der Szene. Verknüpfte Geräte bleiben für Details anklickbar, Energieauswertung und Türstellungen bleiben erhalten. Dies ersetzt die unten historisch beschriebene sichtbare Unklar-Markierung; intern bleibt der Zustand ausdrücklich unbekannt.

Für jede Funktion werden Originalzustand, eigene Implementierung, Integrationslücken und neue Wünsche getrennt beschrieben. Neue Anforderungen bleiben Vorschläge, bis der Nutzer sie bestätigt. Tests sollen Verhalten prüfen, nicht bloß das Vorhandensein von Feldern oder Dateien.

Verbindliche Arbeitsweise: Bei einem Umsetzungsauftrag bestätigte Funktionen tatsächlich implementieren, prüfen und den erreichten Stand dokumentieren. Das Zusammenführen vorhandener Branches gilt nicht als Umsetzung neuer Anforderungen. Implementiert, geprüft, noch offen und auf Home Assistant installiert stets getrennt ausweisen. Neue Feature-Branches und Verhaltenstests in die lokale Update-Konfiguration aufnehmen; Veröffentlichung und HA-Installation bleiben gesondert freizugeben.

Die gemeinsame Definition erfolgte zuerst für allgemeine Funktionen, anschließend für Möbelpack-Erweiterungen und den separaten globalen Farbwechsel. Einzelne Pack-Strahler sind inzwischen festgelegt. Die empfohlene technische Umsetzungsreihenfolge steht am Ende; sie berücksichtigt Abhängigkeiten. Phase 1 wurde inzwischen beauftragt und abgeschlossen.

## XYZ Rotation für Möbel und Inventar

Status: grundlegender Umfang festgelegt. Drehpunkt Modellmitte, manuelle Positionierung, eine durch XYZ angepasste 2D-Darstellung einschließlich Auswahl, Bedienung über Zahlenfelder und Zurücksetzen, Kontaktschatten auf Boden/Wänden/Möbeloberflächen sowie ein einstellbarer Lichtkegel-Öffnungswinkel pro platzierter Leuchte sind am 12.10.2026 bestätigt. Zusätzliche X-/Z-Drehbuttons und 3D-Drehgriffe gehören nicht zum gewünschten Umfang. Gerichtetes Licht bei geneigten Leuchten ist eine gewünschte Ergänzung; einzelne Pack-Strahler sind im eigenen Abschnitt festgelegt. Eigene Implementierung vorhanden in `feature/inventory-xyz-rotation`; Funktionscommit `1168a329efa5b9ba7a4e0be5350d6e0419ea89c4`, Branchstand `786aec65fd7f52ad20392769eada4b0a765e0c2a`. Die vorhandene Branch-Implementierung ist lokal integriert, aber noch nicht auf HA installiert. Zusätzliche geplante Funktionen stehen noch aus.

### Originalzustand

Das Original `v1.16.0` dreht Möbel allgemein um die senkrechte Y-Achse. Es bietet einen numerischen Winkel, 45°-Schritte in der kompakten Bedienung beziehungsweise Wandansicht und 90°-Schritte über weitere Aktionen. Spiegeln und Höhenpositionierung sind separate Funktionen. LED-Streifen können zusätzlich über ihre eigenen Einstellungen gekippt und aufrecht gestellt werden. Eine allgemeine X-/Z-Rotation für sämtliche Möbel und Pack-Objekte fehlt.

Quellstellen: `frontend/src/model.ts` (`Furniture`, `furnitureFootprint`), `frontend/src/components/editor.ts` (`rotateFurniture`, Möbel- und Wandansichtsform), `custom_components/neonplan3d/schema.py` (`FURNITURE_SCHEMA`) im Original-Release.

### Eigene Implementierung

| Bereich | Verhalten im vorhandenen Feature-Branch |
| --- | --- |
| Zusätzliche Achsen | `rotation_x` und `rotation_z` ergänzen die bestehende Y-Rotation `rotation`. |
| Bedienung | Zahlenfelder für X/Y/Z in der Möbelbearbeitung und der kompakten 3D-Bedienung; Zurücksetzen aller Winkel. |
| Drehpunkt | Fest vorgegebene Modellmitte; bei Leuchten ein zur Montage passender Mittelpunkt. Kein frei wählbarer Drehpunkt. |
| Modelle | Rotiert eingebaute Möbel, Pack-Modelle, deren Umrisse und gespiegelte Ausführungen. |
| Zusatzflächen | Leuchtende Pack-Flächen, Lampengeometrie, Status-/Bildschirmflächen, Bilder und animierte Standard-Kühlschranktüren werden mitgedreht. |
| Licht | Lichtquellen und Leuchthalos werden räumlich mitgenommen. Beliebig geneigte Lampen verwenden vereinfachtes ungerichtetes Licht; der normale Spot-Kegel wird dabei nicht erzeugt. |
| Parkplätze | Angezeigte Pack-Fahrzeuge übernehmen die zusätzlichen Winkel und Montagehöhe des Stellplatzes. |
| Speichern | Backend validiert endliche X-/Z-Winkel zwischen −360° und +360°. Alte Pläne erhalten für fehlende Achsen 0°. |
| Schatten | Die bisherige flache Kontaktschattenfläche wird bei geneigten Möbeln weggelassen, nicht realistisch neu berechnet. |

Die Bildschirm-/Bildintegration und Lichtintegration sind im Quellcode vorhanden. Die vorhandenen Geometrietests decken nicht jede dieser sichtbaren Ebenen beziehungsweise jede Benutzungsinteraktion vollständig ab; daraus folgt keine vollständige Abnahme der aktuellen Mischversion.

### Fehlende Anpassungen an das aktuelle Original

- Der Branch basiert auf einem älteren Originalstand. Die aktuelle Wandansicht und ihre Bedienung müssen bei der Integration erhalten bleiben und um die gewünschten zusätzlichen Achsen ergänzt werden.
- Neuere Raumdecken, Dachschrägen und tiefergesetzte Spots müssen beim Drehpunkt und der Leuchtenposition berücksichtigt werden. Die alten Lampenfunktionen dürfen die aktuellen Höhenregeln nicht ersetzen.
- Neue beziehungsweise seitdem geänderte Originalmodelle, Bildschirmdarstellungen und animierte Teile brauchen eine erneute Prüfung. Frühere Tests beziehen sich auf den damaligen Modellbestand.
- Das vollständige Zusammenführen mit `v1.16.0`, die Frontend-/Backend-Prüfungen und die Sichtprüfung auf Home Assistant stehen für dieses Feature aus.

### Bekannte Grenzen und mögliche Ergänzungen

- Der 2D-Grundriss verwendet weiterhin Breite/Tiefe und nur die Y-Rotation. Die tatsächliche Projektion eines um X/Z gekippten Objekts wird dort nicht automatisch berechnet.
- Es gibt keine automatische Korrektur der Höhe, um nach dem Kippen wieder Boden- oder Wandkontakt herzustellen. Ein breites, dünnes Objekt kann deshalb in den Boden reichen oder schweben.
- Kein frei wählbarer Drehpunkt wie Mittelpunkt, Unterkante oder Wandbefestigung.
- Keine Maus-Drehgriffe für alle drei Achsen und keine speziellen X-/Z-Schrittbuttons; die zusätzlichen Winkel werden numerisch eingegeben.
- Keine physikalische Kollisionsauflösung und keine neu berechneten Kontaktschatten.
- Exakt mitgedrehte gerichtete Lichtkegel wären eine Erweiterung gegenüber dem derzeitigen vereinfachten Licht.

Die Grenzen beschreiben die vorhandene Implementierung. Modellmitte und manuelle Positionierung sind bestätigt; die angepasste 2D-Darstellung einschließlich Auswahl, gerichtetes Licht und Kontaktschatten sind als gewünschte Ergänzungen aufgenommen. Zusätzliche Drehpunkte sind für diesen Umfang zurückgestellt. Zahlenfelder und Zurücksetzen reichen als Bedienung; zusätzliche X-/Z-Drehbuttons oder 3D-Drehgriffe werden nicht ergänzt.

### Vorschlag für die erste Ausbaustufe

Die vorhandene X/Y/Z-Rotation für eingebaute Möbel und Pack-Objekte wird auf den aktuellen Originalstand übertragen. Winkel bleiben bei Speichern/Laden, Duplizieren und Export/Import erhalten. Alle sichtbaren Modell- und Anzeigeebenen müssen denselben Drehpunkt verwenden. Alte Pläne ohne X-/Z-Angaben dürfen sich nicht verändern. Die bestehende Y-Bedienung, Spiegelung, Montagehöhe und LED-Sonderausrichtung bleiben kompatibel.

Bestätigt ist die manuelle Positionierung: Beim Ändern eines Winkels werden gespeicherte Position und Montagehöhe nicht automatisch korrigiert. Objekte dürfen beim Kippen schweben oder eine Fläche durchdringen; der Nutzer korrigiert ihre Lage selbst. Keine automatische Boden-/Wandhaftung, kein automatisches Verschieben auf eine andere Fläche.

Bestätigt ist die Modellmitte als Drehpunkt für die XYZ-Rotation. Alle sichtbaren Ebenen verwenden dieselbe Mitte, einschließlich der bereits zur jeweiligen Montagehöhe gehörenden Leuchtengeometrie. Es gibt in diesem Umfang weder einen wählbaren Drehpunkt an Unterkante/Wandbefestigung noch freie Drehpunktkoordinaten.

### Bestätigte Bedienung

Für X, Y und Z gibt es Zahlenfelder in Grad und eine Aktion zum Zurücksetzen der Winkel auf 0°. Die vorhandene Y-Drehbedienung des Originals bleibt erhalten. Zusätzliche 45°-/90°-Buttons für X und Z sowie interaktive 3D-Drehgriffe werden nicht eingebaut. Die Felder müssen die aktuelle Orientierung anzeigen und Änderungen unmittelbar auf alle Darstellungen anwenden.

### Bestätigte Darstellung im Grundriss

Der 2D-Grundriss berücksichtigt auch X-/Z-Neigungen, nicht nur die bisherige Y-Drehung. Der sichtbare Umriss und die Auswahlfläche werden aus der gedrehten räumlichen Objektform beziehungsweise einer passend projizierten Modellhülle abgeleitet. Ein auf die Seite gelegter Gegenstand behält nicht mehr sein unverändertes altes Breite-/Tiefe-Rechteck.

Die Auswahl und die Markierung beim Verschieben müssen mit diesem projizierten Umriss übereinstimmen. Die gespeicherten Modellmaße werden dabei nicht umgeschrieben; Breite, Tiefe, Höhe, Winkel, Position und Montagehöhe behalten ihre eigene Bedeutung. Alte Objekte mit X/Z gleich 0 behalten ihr bisheriges Verhalten. Das Verhalten der Größenänderungsgriffe bei geneigten Objekten muss passend zur neuen Projektion geprüft werden. Diese Ergänzung ist noch nicht implementiert.

### Gewünschtes gerichtetes Licht

Geneigte Spots sollen in die zum Modell passende Richtung leuchten. Der sichtbare Lichtkegel und die tatsächlich beleuchteten Boden-/Wandflächen müssen dieselbe Richtung verwenden; nur den sichtbaren Kegel zu drehen reicht nicht. X/Y/Z-Rotation, Spiegelung und die bestehende LED-Sonderausrichtung dürfen Lichtposition und Ausrichtung nicht voneinander lösen.

Die bestehende Beleuchtung berechnet Licht auf Boden-/Wandflächen ohne allgemeine 3D-Abstrahlrichtung je Lichtquelle. Die Erweiterung benötigt eine Richtung sowie einen Öffnungswinkel mit weichem Rand und muss die bisherige Helligkeit, Farbe, Reichweite und Abschattung durch Wände/Öffnungen erhalten. Ungekipptes Licht soll sich ohne neue Angaben wie zuvor verhalten. Ziel ist eine zur Orientierung passende, performante Beleuchtungsnäherung; vollständiges physikalisches Echtzeit-Raytracing ist nicht festgelegt.

Bestätigt ist ein einstellbarer Öffnungswinkel pro platzierter Leuchte. Der Winkel wird in Grad angegeben und mit der jeweiligen Platzierung gespeichert; er ist weder eine globale Einstellung noch ausschließlich an eine HA-Entität oder einen Leuchtentyp gebunden. Zwei Platzierungen mit derselben HA-Lichtentität können unterschiedliche Winkel haben. Sichtbarer Lichtkegel und berechnete Beleuchtung verwenden denselben gespeicherten Wert; Änderungen wirken unmittelbar, ohne die XYZ-Ausrichtung oder Montagehöhe zu verändern.

Die Einstellung gilt für gerichtete Leuchten mit einem Lichtkegel, nicht als erzwungener Kegel für ungerichtete Lichtquellen. Alte Platzierungen ohne Winkel behalten das bisherige Standardverhalten. Zulässiger Wertebereich und Standardwert werden bei der Implementierung passend zur bestehenden Beleuchtung festgelegt und validiert; es werden keine nicht endlichen oder degenerierten Kegel erzeugt. Speichern/Laden, Duplizieren und Export/Import müssen den individuell gesetzten Winkel erhalten. Diese Erweiterung ist noch nicht implementiert.

Der Umfang enthält eingebaute Spots/Downlights und Pack-Leuchten mit beschriebener Abstrahlrichtung. Bei Packs mit mehreren Strahlern werden Lichtquellen und bewegliche Teile ausdrücklich beschrieben; der Abschnitt „Einzelne Strahler in Pack Leuchten“ legt Ausrichtung, HA-Einzelbindung und Winkelvererbung fest. Richtungen werden nicht aus beliebigen Box-/Zylinder-Modellteilen erraten.

### Gewünschte Kontaktschatten

Bestätigter Umfang: Kontaktschatten bei geneigten Objekten auf Boden, Wänden und Möbeloberflächen. Beispiele sind ein gekippter Gegenstand auf dem Boden, ein Bilderrahmen nahe einer Wand und ein Dekokissen oder anderes Inventar auf einem Tisch. Die Schattenberechnung verändert weder Position noch Montagehöhe des Objekts.

Die bisherige Schattenfläche darf nicht einfach gemeinsam mit dem Möbel gekippt werden, weil sie sonst schräg durch den Boden laufen kann. Eine neue Schattenfläche muss aus der gedrehten Geometrie beziehungsweise deren räumlicher Hülle auf den passenden nahen Aufstell- oder Montageflächen berechnet werden. Bei Wandmontage liegt der Schatten auf der Wand; bei einem Gegenstand auf einem Tisch auf dessen Platte, nicht ausschließlich auf dem Boden darunter.

Vorschlag: ein weicher, angenäherter Kontaktschatten aus der projizierten Objektform. Mit wachsendem Abstand zur Aufstellfläche nimmt die Stärke ab; Breite und Form folgen der XYZ-Ausrichtung. Die Projektion darf keine Bodenöffnung verdecken und muss zur richtigen Etage beziehungsweise Raumhöhe gehören. Das Verfahren verschiebt das Möbel nicht und bleibt unabhängig von einer automatischen Kontaktkorrektur.

Die Empfangsfläche muss anhand ihrer tatsächlichen Lage, Ausrichtung und Begrenzung erkannt beziehungsweise eindeutig beschrieben werden. Ein auf einer Tischplatte liegender Schatten darf nicht über deren Rand in der Luft weiterlaufen; Wandöffnungen, Bodenöffnungen, andere Etagen und Flächen hinter einer trennenden Wand bleiben ausgespart. Bei schrägen oder gedrehten Auflageflächen muss die Schattenebene deren Ausrichtung übernehmen.

Kontaktschatten sind eine Nahbereichs-/Auflage-Andeutung, nicht bereits eine Zusage vollständiger dynamischer Möbelschatten für jede einzelne Lichtquelle. Für schwächere Geräte bleibt eine einfachere Projektion beziehungsweise die globale Qualitätsstufe möglich. Flächenerkennung, Projektion und Aktualisierung nach Änderungen benötigen zusätzliche Implementierung und Tests; diese Ergänzung ist noch nicht umgesetzt.

### Abnahmetests für die neue Umsetzung

1. Alte Pläne ohne neue Achsen rendern unverändert; Speichern/Laden ergänzt keine sichtbare Neigung.
2. X und Z funktionieren positiv/negativ sowie bei 90° und 180°, auch zusammen mit Y, Spiegelung und geänderter Objektgröße.
3. Ein Pack-Objekt, ein eingebautes Möbel, eine Leuchte und ein Fahrzeug behalten ihre Winkel beim Duplizieren und Export/Import.
4. Geometrie, Umrisse, 3D-Auswahl, Vorschau während des Verschiebens, Statusflächen, Bildschirmbilder und bewegliche Modellteile bleiben deckungsgleich.
5. Geänderte Winkel invalidieren die nötigen Darstellungs-Caches; Geometrie und Anzeigen reagieren sofort.
6. Boden-, Wand- und Deckenmontage funktionieren auf der richtigen Etage; Raumdecken, Dachschrägen und abgesenkte Spots bleiben korrekt.
7. Die Wandansicht verliert keine Originalfunktionen. Im 2D-Grundriss passen Umriss, Auswahl und Verschiebemarkierung zur XYZ-Projektion. Ein schmales hohes Objekt, um X/Z auf die Seite gelegt, zeigt die veränderte Ausdehnung; kombinierte Winkel und Spiegelung bleiben korrekt. Modellmaße werden nicht umgeschrieben, Größenänderungsgriffe bleiben bedienbar und alte Objekte ohne Neigung unverändert.
8. Ungültige Winkel einschließlich NaN/Unendlich werden abgewiesen. Frühere LED-Neigung und aufrechte Stellung funktionieren weiterhin.
9. Ein Spot bei 0°, 45°, 90° und 180° beleuchtet die erwartete Seite; kombinierte Y-/X-/Z-Winkel, Spiegelung, Montagehöhe, Lichtfarbe und Helligkeit bleiben konsistent. Zwei Platzierungen derselben HA-Lichtentität mit unterschiedlich eingestellten Öffnungswinkeln erzeugen unterschiedliche Kegel und Lichtflecken. Sichtbarer Kegel und berechnete Beleuchtung stimmen jeweils überein; hinter der jeweiligen Kegelöffnung entsteht kein direkter Spot-Lichtfleck. Winkeländerungen wirken sofort und bleiben beim Speichern/Laden, Duplizieren und Export/Import erhalten.
10. Ein um X/Z gedrehtes Möbel behält einen Schatten auf den passenden nahen Aufstell-/Montageflächen: Boden, Wand und Möbeloberfläche. Seine Projektion folgt der Objektform, seine Stärke reagiert auf den Abstand. Ein Gegenstand auf einem Tisch wirft den Kontaktschatten auf die Platte; ein wandnaher Rahmen auf die Wand. Schatten enden an Flächenrändern und Öffnungen, durchdringen keine trennenden Wände und bleiben auf der richtigen Etage beziehungsweise Raumhöhe.
11. Winkeländerungen lassen die vom Nutzer gesetzte Position und Montagehöhe unverändert; es gibt keine automatische Kontaktkorrektur.
12. Geneigte Leuchten und Schatten werden auch bei niedrigeren Qualitätsstufen sowie auf einem schwächeren Tablet geprüft. Der Öffnungswinkel wird pro Platzierung auf gültige endliche Werte geprüft; alte Leuchten ohne neue Angaben bleiben kompatibel. Die Behandlung einzelner Pack-Lichtquellen wird nach dem späteren Möbelpack-Themenblock getestet. Verschieben, Drehen und Größenänderungen von Objekt oder Empfangsfläche aktualisieren vorhandene Schatten ohne stehenbleibende alte Projektionen.

Vorhandene Testgrundlage: `frontend/src/furniture-transform.test.ts`, `frontend/src/viewer/furniture-rotation.test.ts`, ergänzte Parkplatztests und `tests/test_furniture_rotation.py` im Feature-Branch. Diese Tests müssen auf dem neu integrierten Stand erneut laufen und um die oben genannten Bedienungs-/Anzeigeprüfungen ergänzt werden.

### Technische Ansatzpunkte für einen Neuaufbau

1. Optionales Datenmodell und Backend-Validierung für X/Z ergänzen, Standardwerte 0 und bestehende Y-Semantik beibehalten.
2. Eine gemeinsame Transformation in einem kleinen, rendererunabhängigen Modul verwenden. Die vorhandene Lösung transformiert bereits Y-gedrehte Punkte zurück in lokale Koordinaten, wendet X und Z an und führt sie wieder in die vorhandene Y-Ausrichtung zurück. Der festgelegte Drehpunkt muss für alle Ebenen identisch sein.
3. Möbelgeometrie, Linien, Leuchten und weitere sichtbare Ebenen an diese Transformation anbinden; daraus abgeleitete Signaturen/Caches ebenfalls aktualisieren.
4. Bedienung in die aktuellen Möbel- und Wandansichtsformen integrieren, ohne alte Editor-Dateien als Ganzes zu übernehmen.
5. Projektion, gerichtetes Licht und Kontaktschatten entsprechend den bestätigten Entscheidungen umsetzen. Position und Montagehöhe bleiben manuell; keine automatische Bodenkontaktkorrektur ergänzen.
6. Regressionstests, vollständigen Build und Sichtprüfung ausführen, bevor ein Kandidat freigegeben wird.

Die Anforderungen und Tests bilden die Grundlage eines Neuaufbaus; die alten Commits sind lediglich Referenzmaterial.

## Split Level und getrennte Raumhöhen

Status: Höhenmodell, Stufenversatz und automatische ebene Anschlussfläche zwischen Durchbruch und versetztem Stufenbeginn sind am 12.10.2026 bestätigt. Wandbeginn über der Etage, zusätzlicher Raumbodenversatz über dem Wandbeginn und lichte Raumhöhe sind unabhängig. Stufenanzahl und Lauftiefe bleiben einstellbar; der Lauf kann vor oder nach dem Durchbruch beginnen. Eigene Grundlage: `feature/split-level-rooms`, Commit `efb7c7cb98a90f645c9120a940136d1a1fd33956`. Der Branch ist lokal integriert, aber noch nicht auf HA installiert. Separater Bodenversatz und Stufenversatz stehen noch aus.

### Originalzustand und eigene Grundlage

| Bereich | Original v1.16.0 | Vorhandener Split-Level-Branch |
| --- | --- | --- |
| Etagenhöhe | Gemeinsame Höhenlage je Etage | Bleibt als Bezug erhalten. |
| Raumhöhe | Individuelle `ceiling_height`, keine allgemeine eigene Raum-Bodenhöhe | Eigene absolute Raum-Bodenhöhe `elevation` und eigene lichte Höhe `height`. Die Integration muss das neuere Originalfeld `ceiling_height` berücksichtigen. |
| Wandbeginn und Raumboden | Im normalen Raum am gemeinsamen Etagenboden | Bisher ebenfalls gekoppelt: Raumboden und zugehöriger Wandbeginn auf derselben Raumhöhe. |
| Stufen am inneren Durchbruch | Kein entsprechender Split-Level-Stufenlauf | Wahl der Raumseite, Stufenanzahl 1–30 und gesamte Lauftiefe 0,1–10 m. Anfang unmittelbar an der gewählten Wandseite, kein freier Längsversatz. |
| Stufenhöhe und Breite | Nicht als dieser Übergang vorhanden | Höhe aus dem Unterschied der beiden Raumböden, gleichmäßig verteilt; Breite folgt dem Durchbruch. |
| Höhere Raumseite | Kein entsprechender Stufenausschnitt | Ausschnitt für einen in den höheren Boden zurückgesetzten Stufenlauf. |

Weitere eigene Anbindungen bestehen für Boden-/Wandgeometrie, Inventar, Geräte-/Leuchtenhöhen, Beleuchtungsflächen, Dachvorschläge und Darstellung der Durchgangsstufen im 2D-Grundriss. Sie müssen beim Übertragen auf das aktuelle Original sowie beim zusätzlichen Bodenversatz erneut geprüft werden.

### Gewünschter Versatz der Durchgangsstufen

Zusätzlich zu Raumseite, Stufenanzahl und Lauftiefe erhält jeder Stufenlauf einen vorzeichenbehafteten Längsversatz. Der Versatz bewegt nur den Lauf entlang seiner Richtung, nicht den Durchbruch seitlich. Positive und negative Angaben sollen beispielsweise einen Anfang 30 cm nach beziehungsweise vor dem Durchbruch erlauben. Stufenanzahl bleibt manuell einstellbar; sie ist bereits vorhanden und wird nicht durch eine ausschließlich automatische Berechnung ersetzt.

Bestätigter Bezug: 0 m entspricht dem heutigen Anfang an der Wandfläche auf der gewählten Raumseite. +0,30 m verlegt den Anfang 30 cm weiter in diese Raumseite; −0,30 m verlegt ihn in Richtung Durchbruch und gegebenenfalls auf dessen andere Seite. Der Betrag bleibt unabhängig von der Lauftiefe. Die Richtung wird aus der tatsächlichen Durchbruchgeometrie und gewählten Raumseite berechnet, nicht aus einer festen Weltachse oder der Türanschlagseite.

Bestätigt ist eine automatische ebene Anschlussfläche auf Schwellenhöhe zwischen dem Durchbruch und dem versetzten Stufenbeginn. Bei einem positiven Versatz von +0,30 m entsteht dort eine 30 cm lange Anschlussfläche; ihre Breite folgt dem Durchbruch beziehungsweise Stufenlauf. Sie zählt nicht als zusätzliche Stufe, verändert weder die gewählte Stufenanzahl noch die gesamte Lauftiefe des Stufenlaufs und wird mit diesem aktualisiert.

Ein negativer Versatz darf Stufen nicht von der bisherigen Prüfung auf ausschließlich eine Raumseite ausschließen. Bei einem Lauf, der vor dem Durchbruch beginnt oder durch ihn hindurch reicht, müssen Schwelle, Stufen und die anschließenden Böden geometrisch zusammenpassen. Die Anschlussfläche darf dabei keine Stufen überdecken oder eine doppelte Fläche durch den Lauf erzeugen. Die konkrete Geometrie richtet sich nach dem tatsächlichen Laufverlauf; ein unmöglicher Anschluss wird angezeigt. Boden-/Wandausschnitte folgen der tatsächlichen Lage. Bei Versatz 0 entsteht keine zusätzliche Versatz-Anschlussfläche; die bisherige Schwellengeometrie bleibt erhalten.

Die vorhandene Bedeutung der Stufenanzahl, die Verteilung der Höhen über den Lauf und die gesamte Tiefe müssen in 2D und 3D konsistent bleiben. Fehlende Versatzangaben bedeuten 0 m, sodass bestehende Übergänge ihre bisherige Lage behalten. Ungültige Werte oder ein geometrisch nicht möglicher Anschluss erzeugen einen nachvollziehbaren Hinweis; der Versatz wird nicht stillschweigend geändert.

### Bestätigtes Modell der getrennten Höhen

Es gibt drei getrennte Raumwerte:

- **Raumversatz beziehungsweise Wandbeginn über dem Etagenboden E:** vertikale Lage des unteren Wandbeginns, beispielsweise +0,10 m. Der Höhenbezug ist der Boden der Etage, nicht der Nullpunkt des gesamten Hauses.
- **Raumbodenversatz über dem Wandbeginn B:** zusätzliche Anhebung des fertigen Raumbodens, beispielsweise +0,30 m. Dieser Wert ist kein Ersatz für eine geometrische Bodenplattenstärke.
- **Lichte Raumhöhe H:** Abstand vom fertigen Raumboden zur Decke, beispielsweise 2,50 m.

Mit der absoluten Etagenhöhe F ergibt sich:

```text
Wandunterkante = F + E
Raumboden      = F + E + B
Decke          = F + E + B + H
Wandhöhe       = B + H
```

Beispiel bei Etagenbezug F = 0 m:

| Größe | Wert |
| --- | --- |
| Raumversatz E | +0,10 m |
| Raumbodenversatz B | +0,30 m |
| Lichte Raumhöhe H | 2,50 m |
| Wandunterkante | +0,10 m |
| Fertiger Raumboden | +0,40 m |
| Decke beziehungsweise Wandoberkante | +2,90 m |
| Wandhöhe ab ihrer Unterkante | 2,80 m |

Der Boden beginnt somit 30 cm über dem unteren Wandbeginn; oberhalb des Bodens bleiben die eingestellten 2,50 m Raumhöhe erhalten. Die Höhe von 10 cm über der Etage verschiebt das ganze Raumprofil, zählt aber nicht nochmals zur Wandlänge.

Die Zuordnung von bestehenden und neuen Speicherfeldern wird bei der Implementierung passend zum bestätigten Höhenmodell festgelegt. Alte Raumdaten dürfen nicht durch eine unbemerkte Umdeutung ihrer Höhen verändert werden. Für alte Räume bedeutet der zusätzliche Raumbodenversatz B = 0; Etagenvererbung und die vorhandene lichte Raumhöhe bleiben erhalten. Das Originalfeld `ceiling_height` darf neben dem älteren Branchfeld `height` keine widersprüchliche zweite Raumhöhe erzeugen.

### Folgen für angrenzende Geometrie

- Inventar, Fußbodenflächen, Geräte und Kontaktschatten orientieren sich am fertigen Raumboden F + E + B, nicht automatisch an der Wandunterkante.
- Türen, Fensterbrüstungen und relative Montagehöhen beziehen sich auf den fertigen Boden der zugeordneten Raumseite F + E + B, außer sie sind ausdrücklich als absolute Höhen definiert. Am 12.10.2026 bestätigt. Bei gemeinsamen Wänden wird die andere Raumseite geometrisch mitgeprüft; alte Pläne behalten ihre bisherige Lage.
- Die Stufenhöhe zwischen Räumen folgt dem Unterschied ihrer fertigen Raumböden, nicht nur dem Unterschied der Wandunterkanten. Gleiche fertige Bodenhöhe benötigt trotz verschiedener E-/B-Werte keinen Höhenübergang.
- Gemeinsame Wände müssen beide Raumprofile berücksichtigen. Ihre Unterkante und Oberkante dürfen nicht aus einer einzigen Raum-Bodenhöhe abgeleitet werden; bei verschiedenen Wandbeginnen ist die sichtbare Geometrie auf beiden Seiten zu prüfen.
- Decken, Dächer, Raumlicht, Schatten, Wandansicht und Etagenanordnung verwenden die berechneten Höhen. Ein höherer Raumboden darf die eingestellte lichte Raumhöhe nicht versehentlich verringern.

### Abnahmetests für die neue Umsetzung

1. Das Beispiel E = 0,10 m, B = 0,30 m, H = 2,50 m ergibt Wandunterkante 0,10 m, Boden 0,40 m, Decke 2,90 m und Wandhöhe 2,80 m.
2. Ein anderer Etagenbezug verschiebt alle absoluten Höhen um denselben Betrag, nicht die Wandhöhe oder lichte Raumhöhe.
3. B = 0 und fehlende neue Angaben erhalten die bisherige Geometrie und Vererbungsregeln alter Pläne.
4. Änderungen von E, B und H wirken unabhängig; Inventar, Beleuchtung, Fenster-/Türbezüge, Schatten und Decken folgen dem jeweils definierten Bezug.
5. Gleiche fertige Bodenhöhen bei unterschiedlichen Wandbeginnen erzeugen keine unbeabsichtigten Stufen; unterschiedliche fertige Böden ergeben die korrekte gleichmäßige Steighöhe bei manuell gewählter Anzahl.
6. Versatz 0, +0,30 m und −0,30 m funktioniert auf beiden auswählbaren Raumseiten sowie bei gedrehten und gespiegelten Grundrissrichtungen. Breite und Lauftiefe bleiben unabhängig vom Versatz.
7. 2D-Umriss, 3D-Stufen, Boden-/Wandausschnitte und Anschlussflächen liegen deckungsgleich. Bei +0,30 m verbindet automatisch eine 30 cm lange ebene Fläche auf Schwellenhöhe den Durchbruch mit dem Lauf; Anzahl und Tiefe der eigentlichen Stufen bleiben unverändert. Versatz 0 erzeugt keine zusätzliche Fläche. Negative Versätze erzeugen weder schwebende Anschlusslücken noch überdeckte Stufen oder doppelte Flächen.
8. Stufenversatz, Anzahl und getrennte Höhen überstehen Speichern/Laden, Duplizieren und Export/Import. Ungültige Werte werden abgewiesen, ohne stilles Versetzen oder Umdeuten.
9. Gemeinsame Wände zwischen unterschiedlichen Raumprofilen, negative Raumversätze, erhöhte Böden und Dachschrägen werden gemeinsam geprüft. Eine nicht passende Durchbruchhöhe oder ein nicht passender Lauf wird verständlich angezeigt.

Implementiert auf `feature/room-height-offsets` (Commit `2e2fca6`). `wall_offset` speichert E relativ zur Etage, `floor_offset` speichert B; `ceiling_height` bleibt die maßgebliche lichte Höhe. Alte absolute `elevation`-Werte und der ältere `height`-Rückfall bleiben lesbar. `steps.offset` fehlt in alten Daten und entspricht dann 0. Die Tests in `frontend/src/room-levels.test.ts` und `tests/test_room_levels.py` prüfen neue Höhen, beide Stufenseiten, positive/negative Versätze, gedrehte/gespiegelte Räume, unveränderte Altgeometrie und Datenvalidierung.

## Freie Dachkonturen und Spot Raster

Status: eigener Code vorhanden und als erster Feature-Branch im lokalen Integrationskandidaten zusammengeführt (Merge-Commit `813c19c783be65defc554bf12ef1cf00f5dd25e4`). Der Kandidat basiert noch auf dem lokalen Originalstand 1.13.2; die vollständige Integration von Original v1.16.0 und der anderen Feature-Branches steht aus. Keine Installation auf Home Assistant. Grundumfang ist bestätigt; die Prüfung am Ende benennt verbleibende Randfälle.

### Originalzustand und eigene Ergänzungen

| Bereich | Original v1.16.0 | Eigener Branch beziehungsweise Kandidat |
| --- | --- | --- |
| Freie Außenflächen | Bereits per Eckpunkten zeichnbar, einschließlich freier Poolformen im aktuellen Original. | Zusätzliche gemeinsame Kontur-Bearbeitung. Die Originalfunktion darf nicht durch eine zweite konkurrierende Bedienung ersetzt oder zurückgesetzt werden. |
| Freie Dachkontur | Freie Kontur für Flachdach-/Attika-Flächen; geneigte Formen verwenden weiterhin die rechteckige Grundgeometrie. | Polygonkonturen auch für geneigte Dachformen, einschließlich konkaver Konturen wie einer L-Form. |
| Kontur bearbeiten | Bestehende Dach- und Außenflächenwerkzeuge. | Dachpunkte zeichnen, verschieben, einfügen, numerisch bearbeiten und entfernen; ungültige Selbstüberschneidungen beziehungsweise degenerierte Konturen abweisen. |
| Kantenmitten mit Plusbuttons | Bei Räumen vorhanden; Dach-/Außenflächen bieten Eckgriffe, aber keine entsprechenden Kanten-Plusbuttons. | Gemeinsame Plusmarker und Einfügefunktion für Dach und Außenfläche im Kandidaten vorhanden. Noch nicht auf HA installiert oder dort sichtbar abgenommen. |
| Dachdarstellung und Solar | Bestehende Dachformen, Dachabschnitte und Solarplatzierung. | Dachflächen, Ränder und Firstlinien auf freie Kontur begrenzen; Solarmodule und Flächenauswahl respektieren die ausgesparte Fläche. |
| Spot-Raster im Raum | Bereits vorhanden: Reihen/Spalten sowie Einbau- oder Aufbauspots; Punkte außerhalb des Raumpolygons werden ausgelassen. | Bleibt erhalten. |
| Raster unter Dächern/Pergolen | Kein vergleichbares Rasterformular an diesen Flächen. Einzelne Spots können manuell platziert beziehungsweise in der Höhe angepasst werden. | Raumraster auf Dachabschnitte und Pergolen übertragen, Höhe je Position aus der Fläche berechnen. |

Eigene Ausgangsbasis: `feature/freeform-outdoor-roofs`, Funktionscommit `b40f230fc5e832c3ce9ed106ce710a0672290eb4`. Referenzen: `frontend/src/geometry/polygon.ts`, `frontend/src/roof-sections.ts`, `frontend/src/solar.ts`, `frontend/src/ceiling-spots.ts` und die entsprechenden Editorformen. Quellvergleich mit `frontend/src/components/editor.ts` und `frontend/src/viewer/roof.ts` im Original v1.16.0.

### Bestätigte Plusbuttons für Dach und Außenfläche

Auf ausgewählten bearbeitbaren Dach- und Außenkonturen sollen Kanten-„+“-Buttons erscheinen, wie bei Räumen. Ein Klick beziehungsweise Tippen fügt einen neuen Punkt zwischen den beiden Endpunkten der jeweiligen Kante ein. Der neue Punkt lässt sich anschließend verschieben und numerisch bearbeiten. Die Fläche muss dafür weder neu gezeichnet noch in einen Innenraum umgewandelt werden.

Der erste Kandidat implementiert dies bereits mit `renderPolygonHandles`, `data-contour-mid` und dem zugehörigen Einfügehandler. Die sichtbaren Marker hängen dort vom Auswahl-/Werkzeugmodus, Bearbeitungsrecht, Plan-/Dachsperre, Zoom beziehungsweise sichtbarer Kantenlänge und dem 200-Punkte-Limit ab. Vor Freigabe ist die reale Bedienung zu prüfen: Plusmarker müssen im vorgesehenen Bearbeitungsmodus erreichbar und auf Tablet/Maus zuverlässig bedienbar sein; gesperrte oder nicht bearbeitbare Flächen dürfen nicht verändert werden. Ein fehlender Marker bei sehr kleinen Kanten darf nicht ohne erkennbare Möglichkeit zur Punktbearbeitung bleiben.

Abnahme: Auf einem Rechteckdach sowie einer rechteckigen und einer konkaven Außenfläche jeweils per „+“ einen Punkt einfügen, bewegen, numerisch ändern, rückgängig machen und speichern/laden. 2D-/3D-Geometrie, Dachkontur, Solarbegrenzung und angezeigte Kantenlängen müssen aktualisiert werden. Die neuen Marker dürfen bestehende Raum-Plusbuttons und die besonderen Größen-/Formgriffe runder/ovaler Original-Pools nicht zurücksetzen.

Die HA-Bereichszuordnung und Zusammengehörigkeit mehrerer Außenflächen werden im eigenen Feature „Außenbereiche mit Home Assistant Bereichszuordnung“ definiert. Die gemeinsame Konturbearbeitung bleibt eine technische Grundlage für Dach- und Außenflächen.

### Bestätigter Umfang der freien Dachform

Die Außenkontur eines Dachabschnitts wird frei gezeichnet. Die gewählte Dachform, Firstachse, Dachneigungen und Höhen definieren weiterhin die zugrunde liegenden Dachflächen; die Kontur begrenzt diese Flächen. Die bestehende Lösung schneidet die Grundgeometrie der ausgewählten Dachform auf das Polygon zu. Sie ist kein frei modellierbares 3D-Dach mit unabhängig verschiebbaren Höhen für jeden Eckpunkt oder automatisch konstruierten beliebigen Firstnetzen.

Am 12.10.2026 bestätigt: Freie Polygonkonturen sollen für sämtliche vorhandenen Dachformen verfügbar sein. Bestehende Neigungs-, Höhen- und Firsteinstellungen bleiben erhalten; individuelle Höhen je Eckpunkt und neue beliebige Firstkonstruktionen gehören nicht zum Umfang.

Mehrere Dachabschnitte, Gauben, Überhänge, offene Überdachungen und Solarflächen müssen mit den Konturen kompatibel bleiben. Die vorhandenen Tests umfassen eine konkave L-Kontur über alle vorgesehenen Dachformen, Achsen und gespiegelte Seiten, Flächenabdeckung, Überhang, Solarbegrenzung und eine offene Überdachung. Das beweist noch nicht jede komplexe Kombination aus Abschnitten, Gauben und überlappenden Dächern.

### Vorhandenes Spot Raster

Für die ausgewählte Raum-, Dach- oder Pergolafläche werden Reihen/Spalten und der Spottyp gewählt. Das Raster verteilt Plätze über den Begrenzungsrahmen und lässt Positionen außerhalb des tatsächlichen Polygons aus. Beim Platzieren erhält jede Leuchte eine eigene Möbel-ID; danach sind die Leuchten einzeln bearbeitbar. Die bestehende HA-Verknüpfung wird beim Anlegen übernommen und kann anschließend pro Platzierung geändert werden.

Unter Dachabschnitten verwendet die Höhenberechnung die Höhe an der jeweiligen Position, die Etagenhöhe sowie die entsprechende Dach-Unterseite. Bei Pergolen berücksichtigt sie Höhe, vertikalen Versatz und Neigung der Fläche. Die Orientierung der Leuchten wird noch nicht automatisch an eine Dachnormalenrichtung angeglichen; die bisherige Platzierung setzt die Y-Drehung auf 0 und erzeugt keine zusätzlichen X-/Z-Winkel.

Die aktuelle Lösung speichert die berechnete Höhe als `mount_y`. Sie speichert keine dauerhafte Referenz des Möbelobjekts auf die Ziel-Dachfläche oder Pergola. Wird die Fläche später angehoben, abgesenkt, geneigt, verschoben oder in ihrer Kontur geändert, folgen die schon platzierten Spots deshalb nicht automatisch anhand dieser Beziehung. Der Zielschlüssel des geöffneten Rasterformulars schützt nur die Platzierungsaktion vor einem Wechsel der Auswahl.

### Bestätigte Bindung der Dach und Pergola Spots

Neue Dach- und Pergola-Raster-Spots werden dauerhaft ihrer jeweiligen Zielfläche zugeordnet. Änderungen der Dach- beziehungsweise Pergolahöhe oder Neigung passen ihre Montagehöhe und Ausrichtung automatisch an. Die Montageausrichtung folgt der lokalen Zielfläche; bei gerichteten Leuchten folgen auch Lichtkegel und Beleuchtung dieser Ausrichtung. Der individuell eingestellte Öffnungswinkel bleibt erhalten.

Auch beim seitlichen Verschieben der Zielfläche in X/Z werden gebundene Spots mitgenommen; ihre relative Position zur Fläche bleibt erhalten. Am 12.10.2026 bestätigt. Dabei wird das Raster nicht neu verteilt. Freie Positionierung und Ausrichtung erfolgen nach dem Lösen der Bindung.

Die Bindung lässt sich pro Leuchte lösen. Dabei bleibt die aktuell sichtbare Position und Ausrichtung erhalten; anschließend ist die Leuchte frei positionierbar und folgt späteren Änderungen der Zielfläche nicht mehr. Die Flächenreferenz und der Bindungszustand müssen Speichern/Laden sowie Export/Import überstehen. Bestehende freie Leuchten erhalten nicht rückwirkend eine automatisch erratene Bindung.

Wird die Zielfläche gelöscht oder liegt ein Spot nach einer Konturänderung außerhalb der Fläche, wird seine Bindung automatisch gelöst. Der Spot bleibt an seiner letzten gültigen Position einschließlich Ausrichtung erhalten und erhält einen verständlichen Hinweis. Weder die Leuchte noch ihre HA-Verknüpfung werden gelöscht; sie wird auch nicht automatisch an eine andere Fläche gebunden. Nicht betroffene Spots behalten ihre Bindung.

Status: am 12.10.2026 für Dach- und Pergola-Raster einschließlich des Verhaltens bei gelöschten beziehungsweise verkleinerten Zielflächen bestätigt, noch nicht implementiert.

### Erforderliche Integrationsarbeit

- Die aktuellen Originalwerkzeuge für Außenflächen, Pools, Wandansicht und Dächer erhalten. Nur tatsächlich zusätzliche Dach- und Rasterfunktionen ergänzen.
- Raumdecken, Dach-Unterseiten und das bestätigte Split-Level-Höhenmodell berücksichtigen. Montagehöhen dürfen nicht teilweise etagenrelativ und teilweise raumbodenrelativ interpretiert werden; sonst wird ein Raumversatz doppelt angewendet.
- Die XYZ-Rotation und individuell einstellbaren Spot-Öffnungswinkel mit neu angelegten Spots kompatibel machen.
- Konturprüfungen zwischen Editor und Backend abstimmen; alte Rechteckdächer ohne freie Punkte bleiben unverändert.
- Komplexe Überhänge, mehrere Dachabschnitte, Gauben, Solarflächen und offene Überdachungen erneut prüfen. Bestehende allgemeine Tests reichen nicht als Abnahme aller Kombinationen.
- Endgültige Dokumentation, Größenbudgets, vollständige Tests und Sichtprüfung auf dem fertig integrierten Originalstand abschließen.

### Bestätigte Entscheidungen

Freie Konturen gelten für alle vorhandenen Dachformen innerhalb ihrer bestehenden Neigungs- und Firstmodelle. Der Funktionsumfang dieses Features ist damit festgelegt; die vollständige Integration und Abnahme stehen weiterhin aus.

Dach- und Pergola-Spots folgen bestätigt der Höhe und Neigung ihrer jeweiligen Zielfläche einschließlich ihrer Ausrichtung; die Bindung ist pro Leuchte lösbar. Gelöschte Zielflächen und Konturänderungen lösen nur die betroffenen Bindungen unter Erhalt der Leuchten und mit einem Hinweis.

### Abnahmetests für die endgültige Integration

1. Alte Rechteckdächer, freie Flachdächer und vorhandene Außenflächen behalten Geometrie und Bearbeitbarkeit; aktuelle Poolfunktionen werden nicht zurückgesetzt.
2. Eine L-förmige Kontur wird in 2D/3D durch die ausgewählte Dachform begrenzt. Ausgesparte Bereiche erhalten keine Dachfüllung und keine außerhalb liegenden Solarmodule.
3. Eckpunkte, Firstlinien, Überhänge, Gauben und mehrere benachbarte Dachabschnitte bleiben konsistent. Selbstüberschneidungen werden verständlich abgewiesen, ohne eine gültige Kontur stillschweigend umzuschreiben.
4. Spot-Raster erzeugen nur Positionen innerhalb der Zielfläche und eindeutige Möbel-IDs. Raum-/Dach-/Pergola-Auswahl und HA-Zuordnung bleiben korrekt.
5. Montagehöhen auf normalen Etagen, in Split-Level-Räumen und unter geneigten Dächern/Pergolen entsprechen dem fertigen Boden- und Deckenbezug. Dachstärke wird passend zur jeweiligen Dachart berücksichtigt.
6. Jeder angelegte Spot bleibt gemäß der bestätigten Bindungsentscheidung einzeln bearbeitbar; XYZ-Winkel und Öffnungswinkel bleiben beim Speichern/Laden und Export/Import erhalten.
7. Änderungen der Höhe und Neigung werden jeweils für Dach und Pergola geprüft: Gebundene Spots folgen samt Ausrichtung und gerichtetem Licht. Das Lösen der Bindung erhält die aktuelle Position und Ausrichtung; weitere Änderungen der Zielfläche beeinflussen gelöste Spots nicht. Bindungszustand und Flächenreferenz überstehen Speichern/Laden und Export/Import. Kein Spot wird stillschweigend in die falsche Etage versetzt oder an eine andere Fläche gebunden.
8. Die Dach-/Außenflächen-Plusbuttons fügen Punkte an der richtigen Kante ein. Auswahlmodus, Sperren, Touch-Bedienung, kleine Kanten, numerische Bearbeitung, Rückgängig und Speichern/Laden sind geprüft. Original-Raumgriffe und spezielle runde/ovale Poolgriffe bleiben funktionsfähig.
9. Die Außenflächenzuordnung wird im eigenen Außenbereichsfeature geprüft; die gemeinsame Konturbearbeitung darf ihre Zuordnungen nicht verlieren.
10. Dach beziehungsweise Pergola löschen oder die Kontur so verkleinern, dass einzelne Spots außerhalb liegen: Betroffene Spots bleiben an ihrer letzten gültigen Position samt Ausrichtung und HA-Verknüpfung erhalten, sind frei und erhalten einen Hinweis. Weiterhin innerhalb liegende Spots bleiben gebunden. Speichern/Laden erhält den gelösten Zustand; Rückgängig stellt Fläche und vorherige Bindungen wieder her.

Im ersten lokalen Merge bestanden 304 Frontend-Tests, vier Freeform-Schema-Tests und die Typprüfung; der Build wurde unter den veröffentlichten v1.16.0-Größenbudgets geprüft. Das ist eine Zwischenprüfung dieses Merge-Schritts, keine Abnahme einer vollständigen Mischversion. Testgrundlage: `frontend/src/freeform.test.ts`, `frontend/src/geometry/polygon.test.ts`, `frontend/src/ceiling-spots.test.ts` und `tests/test_freeform_schema.py`.

## Außenbereiche mit Home Assistant Bereichszuordnung

Status: eigenständiges Feature, am 12.10.2026 als Anforderung bestätigt. Die Bereichszuordnung ist noch nicht implementiert. Vorhandene Außenflächen und die Konturwerkzeuge werden weiterverwendet.

### Originalzustand und vorhandene Grundlage

Im geprüften Original v1.16.0 sind Außenflächen als `OutdoorArea` vorhanden, einschließlich unterschiedlicher Flächentypen und Poolformen. Das Datenmodell hat keine allgemeine `area_id`- oder `room_id`-Zuordnung. Innenräume besitzen dagegen eine HA-Bereichszuordnung; deren Bedienung ist das Vorbild für Außenflächen.

Die Kanten-Plusbuttons für Außenflächen sind im lokalen Integrationskandidaten bereits vorhanden, aber noch nicht auf Home Assistant installiert. Die gemeinsame Konturtechnik für Dächer und Außenflächen wird nicht doppelt implementiert.

### Bestätigter Funktionsumfang

Außenflächen sollen wie Innenräume einem Home-Assistant-Bereich zugeordnet werden können. Mehrere getrennte Außenflächen dürfen zum selben logischen Bereich gehören: Beispielsweise können Terrasse, Gartenweg und eine weitere Gartenfläche gemeinsam dem HA-Bereich „Garten“ zugeordnet werden.

„Zusammenführen“ bedeutet dabei eine gemeinsame Bereichszuordnung, nicht das Verschmelzen ihrer Polygone. Jede Fläche behält ihre eigene Kontur, ihren Flächentyp, ihre Höhe und ihre Bearbeitbarkeit. Es entsteht kein zusätzlicher Innenraum mit Wänden oder Decke. Eine einzelne Fläche lässt sich unabhängig neu zuordnen oder aus der Zuordnung lösen.

- Die Bereichsauswahl folgt dem bestehenden Muster für Innenräume. Mehrere Außenflächen mit derselben Zuordnung sind ausdrücklich zulässig.
- Die Zuordnung bleibt beim Bearbeiten von Punkten, Höhe und Flächentyp erhalten und übersteht Speichern/Laden sowie Export/Import.
- Außenflächen ohne Zuordnung und alte Pläne bleiben unverändert nutzbar. Die Ergänzung erzwingt keine automatische Zuordnung.
- Kanten-„+“-Buttons erlauben das Einfügen weiterer Punkte wie bei Räumen. Die oben beschriebenen Regeln zu Bearbeitungsmodus, Sperren, Touch-Bedienung und speziellen Poolgriffen gelten auch hier.
- Bestehende Innenraumzuordnungen werden nicht überschrieben. Geräte werden durch eine Flächenzuordnung nicht automatisch physisch verschoben oder mehrfach angelegt.
- Geräte- und Lichtauswahlen bieten die Geräte beziehungsweise Entitäten des zugeordneten HA-Bereichs an, entsprechend dem bestehenden Innenraum-Muster. Das gilt auch für die Lichtauswahl eines Pergola-Rasters auf einer zugeordneten Fläche. Mehrere Teilflächen desselben Bereichs erzeugen keine automatischen Gerätekopien; die Bereichszuordnung allein legt keine Geräte oder Möbel an. Bewusste einzelne Platzierungen und deren HA-Verknüpfungen bleiben unabhängig bearbeitbar.

### Umsetzung und Abnahme

1. Eine optionale HA-Bereichsreferenz für Außenflächen ergänzen und nach dem bestehenden Raum-Muster validieren und auswählen lassen. Gleiche Referenzen auf mehreren Flächen dürfen keine Eindeutigkeitsverletzung auslösen.
2. Zugeordnete und nicht zugeordnete Außenflächen zusammen laden; zwei getrennte Flächen dem Bereich „Garten“ zuordnen, eine davon ändern beziehungsweise lösen und die andere unverändert lassen.
3. Konturänderungen mit Plusbuttons, numerischer Punktbearbeitung und Rückgängig prüfen. Speichern/Laden und Export/Import erhalten sowohl die Einzelgeometrien als auch deren gemeinsame Zuordnung.
4. Fehlende beziehungsweise gelöschte HA-Bereiche entsprechend dem bestehenden Raumverhalten behandeln, ohne Flächen oder Geometrie zu löschen. Alte Pläne und runde/ovale Pools bleiben kompatibel.
5. Zwei Außenflächen demselben HA-Bereich zuordnen: Beide bieten dessen Geräte und Leuchten zur Auswahl an, ohne dadurch zusätzliche Platzierungen oder doppelte Einträge innerhalb einer Auswahlliste anzulegen. Ein Bereichswechsel aktualisiert die Auswahlangebote, ohne vorhandene Geräteplatzierungen oder deren HA-Verknüpfungen stillschweigend zu verändern. Die Pergola-Raster-Lichtauswahl berücksichtigt die Zuordnung ebenfalls.

### Noch zu definierende Folgewirkungen

Geräte- und Lichtauswahl anhand des HA-Bereichs sind am 12.10.2026 bestätigt. Weitere raumbezogene Anzeigen und Funktionen für Außenflächen bleiben separat zu definieren. Eine automatische Geräteplatzierung oder eine neue gemeinsame Steuerung ist damit nicht bestätigt.

## Dachtransparenz und Dachfenster

Status: eigener Code im Branch `feature/transparent-roofs`, Funktionscommit `db8adf3767d94f822e25360c9e2b5e46563a0d6f`. Lokal integriert und geprüft, noch nicht auf HA installiert. Dachtransparenz, Sonnenlicht durch Dachfenster, deren Drehpunktauswahl und kameraseitige Solar-Sichtbarkeit sind am 12.10.2026 bestätigt.

### Originalzustand und eigene Ergänzungen

| Funktion | Original v1.16.0 | Eigener Feature Branch |
| --- | --- | --- |
| Dach beim Heranzoomen | Das gesamte Dach blendet aus und hebt sich an; „Dach beibehalten“ unterbindet die zoomabhängige Ausblendung. | Zusätzlich kamerazugewandte Dachflächen mit einem durchsichtigen Material darstellen. |
| Licht durch Dachfenster | Sonnenlichtflecken für Wandfenster; keine entsprechende Dachfensterprojektion. | Bodenlichtflecken aus Dachfenstern ab…2290 tokens truncated…uf Pack Modellen

Status: am 12.10.2026 als Anforderung bestätigt, noch nicht implementiert. Vorhandene Bild-/Medien-/Kameraanzeigen und kleine Status-Leuchtflächen bleiben erhalten; sie sind keine allgemeine Text- oder Uhranzeige.

### Bestätigter Umfang

Uhren sollen die echte Uhrzeit anzeigen können. Geeignete Geräte-Displays sollen vom Nutzer ausgewählte HA-Sensorwerte direkt auf dem Modell darstellen können, beispielsweise Temperatur oder Restlaufzeit. Die konkrete Entität wird an der Platzierung ausgewählt, nicht persönlich im Pack hinterlegt. Modellgröße, Displayposition und die allgemeine XYZ-Rotation sind bei der Darstellung zu berücksichtigen.

Analoge Uhren zeigen die aktuelle Zeit mit Stunden- und Minutenzeiger, ohne Sekundenzeiger. Eine Aktualisierung pro Minute genügt; der Stundenzeiger berücksichtigt dabei auch die verstrichenen Minuten. Eine dauerhafte Zeigeranimation beziehungsweise sekundengenaue Render-Schleife ist nicht erforderlich. Diese Ergänzung ist am 12.10.2026 bestätigt.

Digitale Uhren verwenden das 24-Stunden-Format `HH:mm`; digitale und analoge Uhren richten sich nach der in Home Assistant konfigurierten Zeitzone, einschließlich Sommer-/Winterzeit. Sensorwerte erscheinen mit ihrer vorhandenen Einheit. Restlaufzeiten werden als Stunden:Minuten dargestellt, beispielsweise `1:25` für eine Stunde und 25 Minuten. Die Umrechnung berücksichtigt die deklarierte Quelle beziehungsweise Einheit und interpretiert unbekannte Zahlenformate nicht stillschweigend als Minuten. Diese Anzeigeformate sind am 12.10.2026 bestätigt.

Das Pack gibt zum Modell passende Anzeigefelder und deren Anordnung vor. Der Nutzer wählt je Sensorfeld die konkrete Entität. Kleine Displays zeigen einen Wert; größere Displays können mehrere Werte gleichzeitig anzeigen, beispielsweise Temperatur und Restlaufzeit. Ein automatisches Durchwechseln der Werte ist nicht vorgesehen. Anzahl und Layout folgen der ausdrücklich beschriebenen Displaygestaltung, nicht einer beliebigen zusätzlichen Liste von Messwerten. Diese Bedienregel ist am 12.10.2026 bestätigt.

Für fehlende beziehungsweise nicht verfügbare Werte ist am 12.10.2026 bestätigt: Digitale/Textanzeigen verwenden den Platzhalter `--:--`; eine analoge Uhr ohne gültige Zeit zeigt stets 10:10. Diese analoge Zeigerstellung ist ein Anzeige-Fallback, kein gültiger Zeitwert. Sobald wieder gültige Daten vorliegen, wird die entsprechende tatsächliche Anzeige hergestellt.

Die bisherigen Statusanzeigen und HA-Helfersensoren für Miele, Spülmaschine, Kühlschrank und Weishaupt bleiben nutzbar. Neue Textanzeigen ersetzen sie nicht automatisch. Bestehende Bildschirmfunktionen dürfen durch die neue Anzeigeart nicht zurückgesetzt werden.

Uhrzeit und einfache Sensorwertanzeigen sind unabhängig von der Freischaltung „Live Screens“ verfügbar. Kamera-, Bild- und Medienanzeigen behalten ihre bisherigen Freischaltungsregeln; die neue grundlegende Text-/Uhrfunktion schaltet sie nicht zusätzlich frei. Diese Abgrenzung ist am 12.10.2026 bestätigt.

### Bestätigtes Verhalten bei Zeitreise

Bei aktiver Zeitreise zeigen Uhren die ausgewählte historische Uhrzeit und Sensoranzeigen die zum ausgewählten Zeitpunkt gültigen historischen Werte. Live-Daten werden nicht beigemischt oder als Ersatz für fehlende historische Werte verwendet. Fehlende historische Werte ergeben `--:--`; liegt für eine analoge Uhr keine gültige Zeit vor, gilt die Fallback-Stellung 10:10. Die ausgewählte Zeit selbst genügt als Zeitquelle für eine Uhr, auch wenn keine Sensorhistorie vorhanden ist.

Nach dem Beenden der Zeitreise wechseln Uhren und Sensoranzeigen wieder auf aktuelle Zeit beziehungsweise aktuelle Werte. Diese Regeln sind am 12.10.2026 bestätigt. Die Erweiterung verwendet den bestehenden Zeitreise-Modus, ohne eine zweite unabhängige Zeitauswahl einzuführen.

### Umsetzung und Abnahme

1. Eine optionale deklarative Beschreibung für Uhr- beziehungsweise Sensoranzeigen ergänzen. Alte Modelle ohne Zusatzangaben bleiben unverändert. Anzeigeart und ausgewählte Entität müssen Speichern/Laden, Duplizieren und Export/Import überstehen.
2. Eine digitale Uhr und ein Geräte-Display mit Temperatur beziehungsweise Restlaufzeit prüfen. Werte und Einheiten müssen lesbar in der vorgesehenen Fläche bleiben und bei Änderungen aktualisiert werden. Fehlende oder nicht verfügbare Werte ergeben `--:--`, nicht Null oder einen erfundenen Messwert.
3. Aktualisierungen nur bei sichtbaren Wertänderungen beziehungsweise dem erforderlichen Uhrintervall ausführen. Statische Displays dürfen keine dauerhafte Render-Schleife erzwingen; Ressourcen beim Entfernen freigeben.
4. Unabhängige Platzierungen mit unterschiedlichen Sensoren, Spiegelung und XYZ-Rotation sowie bestehende Bild-/Kamerafunktionen gemeinsam prüfen.
5. Analoge Uhr etwa um 03:00, 03:30 und 12:00 prüfen: Minutenzeiger und Stundenzeiger stehen korrekt, bei 03:30 liegt der Stundenzeiger zwischen 3 und 4. Minutenwechsel, Wiederaufnahme nach einem inaktiven Browser-Tab und gedrehte beziehungsweise gespiegelte Uhren prüfen. Kein Sekundenzeiger und keine dauerhafte Render-Schleife.
6. Fehlende, unbekannte und nicht verfügbare Anzeigen prüfen: digital `--:--`, analoge Zeit 10:10. Beim Wechsel zurück zu gültigen Daten wird der Platzhalter beziehungsweise die feste Fallback-Zeigerstellung ersetzt.
7. Zeitreise auf einen vergangenen Zeitpunkt aktivieren: Uhren folgen der ausgewählten Zeit, Displays den dort gültigen historischen Sensorwerten. Fehlende Historie ergibt den Platzhalter statt eines aktuellen Wertes. Änderungen der Live-Sensoren beeinflussen die historische Anzeige nicht. Beim Beenden der Zeitreise erscheinen wieder aktuelle Daten; ohne gültige Zeit erscheint bei analogen Uhren 10:10.
8. HA-Zeitzone unabhängig von der Browser-Zeitzone sowie Sommer-/Winterzeit prüfen. Digitale Uhr etwa `03:05` und `23:59` darstellen, Sensorwert mit Einheit sowie 85 Minuten Restlaufzeit als `1:25`. Fehlende oder nicht interpretierbare Werte ergeben weiterhin `--:--`.
9. Kleines Display mit einem Sensorfeld und großes Display mit mehreren Feldern prüfen. Entitäten pro Feld unabhängig wählen und gleichzeitig darstellen; keine automatische Rotation der Werte. Fehlender Wert betrifft nur sein Feld. Layout und Bindungen überstehen Speichern/Laden, Duplizieren und Export/Import; die Zeitreise gilt für jedes Feld.
10. Mit und ohne „Live Screens“ prüfen: Uhrzeit und einfache Sensorwerte funktionieren unabhängig davon. Kamera-, Bild- und Medienanzeigen folgen unverändert ihren bisherigen Freischaltungsregeln; Textanzeigen umgehen diese Regeln nicht.

### Noch zu definierende Details

Konkrete Displaygestaltung, Feldgrenzen und unterstützte Restlaufzeit-Quellformate werden bei der Umsetzung festgelegt. Beliebige Skripte oder Templates im Pack sind damit nicht freigegeben.

## Öffnungs und Schließanimationen für Pack Türen und Fenster

Status: am 12.10.2026 als Möbelpack-Anforderung bestätigt, noch nicht implementiert. Die vorhandenen Pack-Türen und -Fenster sind statisch; das geprüfte Original-Packformat v1.16.0 besitzt keine deklarativen Bewegungsgruppen oder Öffnungsmechanismen für solche Bauteile.

Türen und Fenster in Möbelpacks sollen ihren über HA verknüpften Öffnungszustand darstellen und beim Wechsel zwischen offen und geschlossen eine sichtbare Bewegung ausführen, statt nur zwischen zwei starren Darstellungen umzuschalten. Die Bewegung muss zum Modell passen: Ein angeschlagener Flügel dreht sich um seinen Anschlag, eine Schiebetür verschiebt ihren beweglichen Flügel. Rahmen und feste Teile bleiben stehen.

Die bestehenden Standard-Tür-/Fensterfunktionen dienen als Grundlage und bleiben erhalten. Pack-Anbindung und Animation werden kompatibel ergänzt, ohne die Standardmodelle oder vorhandene HA-Zustandsauswertung zurückzusetzen. Die Animation ist eine Visualisierung des Zustands, keine automatische physische Betätigung eines Geräts.

Pack-Türen und -Fenster bleiben zunächst Inventarmodelle ohne automatischen Wanddurchbruch. Diese Begrenzung ist am 12.10.2026 bestätigt; eine spätere Wandöffnung beziehungsweise vollständige Einbindung in die Standard-Tür-/Fensterkonfiguration ist eine gesonderte Erweiterung.

Am 12.10.2026 bestätigt: Öffnungs-/Kippwinkel, Schiebeweg und Animationsgeschwindigkeit folgen dem jeweils entsprechenden Standard-Tür-/Fenstermechanismus. Bestehende Einstellmöglichkeiten werden übernommen, statt zusätzliche abweichende Pack-Standardwerte oder eine zweite Bedienlogik einzuführen. Die zuvor vorgeschlagenen pauschalen Werte 90°, 12° und 0,5 Sekunden sind nicht als eigene Pack-Vorgaben freigegeben. Der Pack-Mechanismus ordnet die beweglichen Bauteile dem passenden Standardverhalten zu.

Zusätzlich bestätigt: Pack-Fenster unterstützen eine animierte Kippstellung, wenn die verknüpften HA-Sensoren diese erkennen lassen und das Modell einen entsprechenden Kippmechanismus besitzt. Übergänge zwischen geschlossen, gekippt und geöffnet werden passend zum Mechanismus dargestellt. Ein einfacher Offen-/Geschlossen-Kontakt allein darf nicht als Nachweis einer Kippstellung gelten; ohne passende Zustandsinformation bleibt die bisherige Offen-/Geschlossen-Darstellung verfügbar.

Bei fehlenden, nicht verfügbaren oder widersprüchlichen Sensorwerten bleibt die letzte gültige Stellung erhalten; die Darstellung erhält den Hinweis „Status unklar“. Ohne vorherigen gültigen Zustand bleibt das Modell in seiner Ausgangsstellung, ebenfalls als unklar markiert und nicht als bestätigt geschlossen. Sobald ein eindeutiger gültiger Zustand vorliegt, folgt die Darstellung wieder diesem Zustand. Diese Regel ist am 12.10.2026 bestätigt und gilt für die neue Pack-Anbindung; bestehende Standardfunktionen werden nicht ungefragt verändert.

### Umsetzung und Abnahme

1. Bewegliche Bauteilgruppen, Anschlag beziehungsweise Schieberichtung und passende Zustandsbindung deklarativ beschreiben; alte Packs ohne Zusatzangaben bleiben statisch und unverändert gültig.
2. Für eine Pack-Drehtür, eine Glasschiebetür und ein Fenster sowohl Öffnen als auch Schließen prüfen. Nur die beweglichen Teile bewegen sich; Griff und andere zum Flügel gehörende Teile folgen gemeinsam. Spiegelung und die allgemeine XYZ-Rotation bleiben kompatibel.
3. Zustandswechsel während einer laufenden Animation ohne Sprung verarbeiten. Nur während einer tatsächlichen Bewegung zusätzliche Frames erzeugen; im Stillstand keine dauerhafte Animationsschleife.
4. Modellkonfiguration und HA-Verknüpfung beim Speichern/Laden, Duplizieren und Export/Import erhalten. Fehlende beziehungsweise nicht verfügbare Sensorwerte dürfen nicht als bestätigtes „geschlossen“ interpretiert werden.
5. Bei einem kippfähigen Pack-Fenster die Übergänge geschlossen ↔ gekippt und gekippt ↔ geöffnet mit passenden HA-Zuständen prüfen. Flügel, Glas und Griff bewegen sich gemeinsam; der Rahmen bleibt fest. Ohne Kippinformation wird keine Kippstellung erfunden. Die vorhandene Standard-Zustandsauswertung dient als Grundlage.
6. Pack- und Standardmodell desselben Mechanismustyps mit identischen Einstellungen und Zuständen vergleichen: Öffnungs-/Kippwinkel, Schiebeweg und zeitlicher Animationsverlauf entsprechen einander. Vorhandene Standard-Einstellungen bleiben nutzbar; keine unabhängigen Pack-Defaults einführen.
7. Nach einem gültigen offenen, gekippten beziehungsweise geschlossenen Zustand fehlende und widersprüchliche Sensorwerte liefern: Letzte gültige Stellung und Hinweis „Status unklar“ prüfen. Ohne zuvor gültigen Zustand wird die Ausgangsstellung als unklar dargestellt. Ein anschließend gültiger Zustand aktualisiert die Stellung und entfernt den Unklar-Hinweis.

### Noch zu definierende Details

Vorhandene Standard-Unterstützung für Motorpositionen und Zwischenstellungen ist bei der Integration zu übernehmen; darüber hinausgehende Funktionen sind nicht automatisch freigegeben. Die neue Pack-Funktion macht Inventar nicht automatisch zu einem Wanddurchbruch; die spätere Einbindung in die Standard-Tür-/Fensterkonfiguration ist separat zu klären. Platzierung des Unklar-Hinweises und technische Erkennung widersprüchlicher Sensorzustände werden bei der Umsetzung festgelegt.

## Einzelne Strahler in Pack Leuchten

Status: am 12.10.2026 bestätigt, noch nicht implementiert. Das bisherige Packformat definiert die Lichtart auf Modellebene, nicht mehrere unabhängig ausrichtbare und verknüpfbare Strahler.

Jeder Strahler einer Pack-Leuchte soll einzeln ausrichtbar sein. Sein sichtbarer Kopf und sein Lichtkegel folgen gemeinsam der eingestellten Richtung; feste Träger und andere Strahler bleiben unverändert. Die Position der Lichtquelle wird passend zum Modell beschrieben. Die allgemeine XYZ-Rotation der gesamten Leuchte wird zusätzlich berücksichtigt, ohne lokale Strahlerwinkel zu überschreiben.

Standardmäßig steuert die gemeinsame HA-Lichtentität alle Strahler. Optional lässt sich pro Strahler eine eigene HA-Lichtentität wählen, sofern das reale Gerät beziehungsweise HA die getrennte Steuerung unterstützt. Diese Einzelzuordnung steuert Zustand, Farbe und Helligkeit des betreffenden Strahlers; Strahler ohne Einzelzuordnung verwenden weiterhin die gemeinsame Entität. Die Zuordnung erzeugt keine neuen HA-Entitäten oder künstliche physische Einzelsteuerung.

Jeder gerichtete Strahler übernimmt zunächst den Öffnungswinkel der gesamten platzierten Leuchte. Optional kann der Nutzer diesen pro Strahler überschreiben. Änderungen des gemeinsamen Winkels wirken nur auf Strahler ohne eigenen Wert; das Entfernen eines Einzelwerts stellt die Vererbung wieder her. Ausrichtung und HA-Einzelbindung bleiben davon unabhängig. Diese Regel ist am 12.10.2026 bestätigt.

### Umsetzung und Abnahme

1. Strahler mit stabilen lokalen IDs, zugehörigen beweglichen Bauteilen, Lichtquellenposition und Richtung deklarativ beschreiben. Lokale Ausrichtungen und optionale Einzelbindungen an der Platzierung speichern. Alte Packs ohne Strahlerdefinitionen bleiben unverändert.
2. Bei einer mehrflammigen Leuchte einen Kopf ausrichten: Nur dieser Kopf und seine Lichtwirkung ändern sich. Das anschließende Drehen oder Spiegeln der gesamten Leuchte transformiert alle Köpfe und Lichtquellen konsistent. Die bereits bestätigten Regeln zu gerichteter Beleuchtung, Öffnungswinkel und Wandbegrenzung bleiben erhalten.
3. Gemeinsame Entität für alle Strahler und anschließend eine Einzelentität für einen Strahler prüfen. Dessen Zustand, Farbe und Helligkeit folgen nur der Einzelbindung; die übrigen folgen weiterhin der gemeinsamen Entität. Das Entfernen der Einzelbindung stellt die gemeinsame Zuordnung wieder her.
4. Lokale Ausrichtungen, Strahler-IDs und Einzelbindungen bei Speichern/Laden, Duplizieren, Export/Import und Pack-Updates erhalten. Keine automatischen Gerätebefehle durch Ausrichtung oder Entitätsauswahl auslösen.
5. Gemeinsamen Öffnungswinkel und einen Einzelwert setzen: Strahler ohne Einzelwert folgen späteren Änderungen des gemeinsamen Winkels, der überschreibende Strahler behält seinen Winkel. Einzelwert entfernen und erneute Vererbung prüfen. Lichtkegel und tatsächliche Beleuchtung verwenden denselben effektiven Winkel; Einzelwerte und Vererbungszustand überstehen Speichern/Laden, Duplizieren und Export/Import.

Die genaue Bedienung der Strahlerauswahl und Wertebereiche werden bei der Umsetzung festgelegt. Der bereits bestätigte Öffnungswinkel pro platzierter Leuchte bleibt als gemeinsame Vorgabe erhalten.

## Geräteanimationen und Kühlschrank Türsensoren

Status: am 12.10.2026 bestätigt, noch nicht implementiert. Vorbereitete Statusflächen und bestehende HA-Helfersensoren bleiben erhalten; sie sind keine beweglichen Pack-Bauteile.

### Bestätigter Umfang

- Pack-Waschmaschinen und -Trockner erhalten einen Laufeffekt entsprechend den jeweiligen Standardmodellen. Welche Zustände den Effekt aktivieren, wird an der bestehenden Zustandsauswertung ausgerichtet; eine neue realistische Trommelsimulation ist damit nicht zugesagt.
- Pack-Geräte mit sichtbarem Lüfter können dessen Drehbewegung anhand eines passenden Betriebsstatus darstellen. Ohne verlässlichen Betriebszustand wird kein laufender Lüfter erfunden.
- Bei Kühlschränken, Gefrierschränken und Kühl-/Gefrierkombinationen lässt sich pro beweglicher Tür ein eigener HA-Öffnungssensor auswählen. Kühl- und Gefrierteil beziehungsweise beide Side-by-Side-Türen können unabhängig verknüpft und animiert werden.
- Der Türsensor steuert ausschließlich den Zustand der zugehörigen Tür. Kompressor-/Betriebsstatus bleibt getrennt für Betriebsanzeige und vorhandene Statusflächen zuständig; ein laufender Kompressor öffnet keine Tür.
- Animationen lassen sich global und zusätzlich pro Möbelstück abschalten. Globales Abschalten unterdrückt alle betroffenen Pack-Animationen; eine einzelne Platzierung kann sie nicht wieder erzwingen. Bei global aktivierten Animationen entscheidet zusätzlich die Einstellung des jeweiligen Möbelstücks. Das Abschalten der Bewegung hebt die HA-Verknüpfungen nicht auf.

Zustände bleiben auch ohne Animation sichtbar: Türen und Fenster nehmen ihre gemeldete Stellung ohne animierten Übergang ein; Statusanzeigen und Displaywerte aktualisieren sich weiterhin. Dauerbewegungen wie Lüfterdrehung beziehungsweise Wasch-/Trockner-Laufeffekte entfallen. Diese Bedienregel gilt für die neu geplanten Pack-Animationen einschließlich Öffnen, Schließen und Kippen und ist am 12.10.2026 bestätigt.

Die Zuordnungen bleiben an der Platzierung und enthalten keine fest im Pack hinterlegten persönlichen Entity-IDs. Kühlschranktüren verwenden die gemeinsame Grundlage für bewegliche Pack-Bauteile. Bei fehlenden oder widersprüchlichen Türsensorwerten gelten die bestätigten Regeln: letzte gültige Stellung beibehalten und „Status unklar“ anzeigen; ohne vorherigen gültigen Zustand Ausgangsstellung als unklar darstellen. Keine Animation sendet physische Gerätebefehle.

### Umsetzung und Abnahme

1. Vorhandenen Standard-Laufeffekt für Waschmaschine beziehungsweise Trockner mit Pack-Modellen und ihren Statusbindungen nutzbar machen. Laufend, pausiert, beendet und nicht verfügbar prüfen; bestehende Status-/Textanzeigen bleiben unabhängig nutzbar.
2. Lüfterbauteile mit geeigneter Drehachse deklarieren und Betriebsstatus anbinden. Bewegung endet bei entsprechendem inaktivem Status; Spiegelung und XYZ-Rotation transformieren Achse und Modell konsistent.
3. Ein Side-by-Side-Modell sowie eine Kühl-/Gefrierkombination mit zwei getrennten Türsensoren prüfen. Nur die gemeldete Tür bewegt sich; Kompressorstatus beeinflusst die Türstellungen nicht. Türgriffe und zum Flügel gehörende Teile bewegen sich mit, der Korpus bleibt fest.
4. Globales und individuelles Abschalten sowie erneutes Aktivieren prüfen: Global aus unterdrückt auch individuell eingeschaltete Animationen; global an respektiert individuell ausgeschaltete Möbel. Türen/Fenster zeigen weiterhin die gemeldete Stellung ohne Übergangsbewegung; Displays und Statusanzeigen aktualisieren sich. Einstellungen und Sensorbindungen überstehen Speichern/Laden, Duplizieren und Export/Import. Im Ruhezustand beziehungsweise bei abgeschalteten Effekten läuft keine unnötige Animationsschleife.

### Bestätigtes Zeitreiseverhalten für Zustände und Animationen

Türen, Fenster, Kühlschranktüren, Statusfarben und Geräteanimationen folgen während der Zeitreise den historischen Zuständen des ausgewählten Zeitpunkts, nicht den Live-Daten. Beim manuellen Verschieben des Zeitpunkts nehmen Türen und Fenster die passende Stellung direkt ohne Übergangsanimation ein. Daueranimationen wie Lüfterdrehung und Wasch-/Trockner-Laufeffekte laufen nur während der Zeitreise-Wiedergabe und nur bei passendem historischen Betriebsstatus; bei pausierter Zeitreise bleiben sie still. Globales beziehungsweise individuelles Abschalten der Animationen hat weiterhin Vorrang.

Fehlende historische Werte werden nicht durch Live-Daten ersetzt. Türstellungen verwenden die bestätigte Unklar-Regel; eine beibehaltene gültige Stellung muss aus der historischen Zeitauswertung stammen, nicht aus einer zuvor angezeigten Live-Stellung oder einem späteren Zeitpunkt. Ohne gültigen historischen Zustand bleibt die Ausgangsstellung mit „Status unklar“. Statusfarben verwenden bei unbekanntem Status die normale Grundfarbe, Geräte erhalten ohne bekannten Betriebszustand keinen erfundenen Laufeffekt. Nach dem Beenden der Zeitreise gilt wieder der aktuelle Zustand. Diese Regeln sind am 12.10.2026 bestätigt.

Abnahme: Historische offene/geschlossene beziehungsweise laufende/inaktive Zustände anwählen, den Zeitpunkt vorwärts und rückwärts verschieben, Wiedergabe starten und pausieren sowie Live-Sensorwerte parallel ändern. Geometrie und Farben bleiben historisch korrekt; beim Verschieben gibt es keine Tür-Übergangsanimation, bei Pause keine Daueranimation. Fehlende Historie mischt keine Live-Werte bei. Abschaltoptionen bleiben wirksam, und das Beenden der Zeitreise stellt aktuelle Daten wieder her.

Die genaue Platzierung der globalen und individuellen Bedienung sowie Tablet-Leistungsoptimierungen werden bei der Umsetzung festgelegt. Bestehende Standard-Animationsregeln werden nicht ungefragt verändert.

## Statusabhängige Farben und Bauteilsichtbarkeit

Status: am 12.10.2026 bestätigt, noch nicht implementiert. Die neue Funktion ergänzt bestehende Status-Leuchtflächen und HA-abhängige Leuchtenfarben, ohne deren Verhalten automatisch zu ersetzen.

Möbelstücke erhalten je nach verknüpftem Status eigene Farben auf gezielt vorgesehenen Bauteilen beziehungsweise Statusflächen, etwa einer Betriebs-/Fehler-LED. Das gesamte Gerät wird nicht durch die Statusfarbe eingefärbt; Gehäuse und übrige Teile behalten ihre normalen beziehungsweise gewählten Produktfarben. Diese Präzisierung vom 12.10.2026 ersetzt die frühere Möglichkeit zur Ganzmodell-Einfärbung. Die Zuordnung von Status und Farben bleibt eine Darstellungsregel; sie sendet keine physischen Gerätebefehle und enthält keine fest eingebauten persönlichen Entity-IDs.

Einzelne Bauteile können abhängig vom Status ein- oder ausgeblendet werden, wenn das Modell diese Funktion ausdrücklich beschreibt. Das gesamte Möbelstück wird nicht automatisch ausgeblendet. Alte Modelle ohne solche Regeln behalten ihre bestehende Darstellung.

Bei fehlendem, unbekanntem, nicht verfügbarem oder widersprüchlichem Status kehren betroffene Bauteile zu ihrer normalen, im Modell definierten Sichtbarkeit zurück. Es bleiben keine Teile nur aufgrund einer früheren Statusregel verborgen. Das bedeutet nicht, grundsätzlich sämtliche Teile einzublenden: Im Grundmodell verborgene Teile bleiben entsprechend ihrer Basisdefinition verborgen. Sobald wieder ein gültiger Status vorliegt, greift die passende Sichtbarkeitsregel. Dieser Fallback ist am 12.10.2026 bestätigt und gilt auch bei fehlenden historischen Statuswerten in der Zeitreise.

Das Pack liefert passende Vorgaben für Statusfarben. Der Nutzer kann diese pro platziertem Möbelstück ändern; die Anpassung verändert weder das Pack noch andere Platzierungen desselben Modells. Bei unbekanntem, fehlendem oder nicht verfügbarem Status erscheint die normale Grundfarbe statt einer erfundenen Statusfarbe. Diese Auswahl- und Fallback-Regeln sind am 12.10.2026 bestätigt.

### Umsetzung und Abnahme

1. Statusquelle, Farbzuordnung und betroffene Modellteile deklarativ beschreiben. Normalfarben bleiben als Basis erhalten; Statusfarben werden als zusätzliche Darstellung angewendet, ohne die Pack-Geometrie oder Originalfarben dauerhaft umzuschreiben.
2. Modell mit mehreren Statusfarben prüfen: Nur die vorgesehenen Status-Bauteile ändern die Farbe; Gehäuse und übrige Teile sowie andere Platzierungen desselben Modells bleiben unverändert. Bestehende Statusanzeigen, Displayflächen und Leuchtenbindungen bleiben nutzbar.
3. Vorbereitete Bauteilsichtbarkeit prüfen: Nur beschriebene Einzelteile werden ausgeblendet, das Möbelobjekt und seine HA-Verknüpfungen bleiben erhalten.
4. Darstellungsregeln und Statusbindungen beim Speichern/Laden, Duplizieren und Export/Import erhalten. Statische Zustände benötigen keine dauerhafte Render-Schleife.
5. Pack-Vorgaben an einer Platzierung überschreiben und eine zweite unverändert lassen. Unbekannten, fehlenden und nicht verfügbaren Status prüfen: Die normale Grundfarbe erscheint; mit erneut gültigem Status greift wieder die passende Statusfarbe. Nutzeranpassungen bleiben erhalten.
6. Ein Bauteil per Statusregel ausblenden und anschließend fehlenden beziehungsweise unklaren Status liefern: Die Basis-Sichtbarkeit wird wiederhergestellt, ohne die ganze Platzierung auszublenden oder normalerweise verborgene Teile zusätzlich einzublenden. Gültigen Status wiederherstellen und dasselbe Verhalten mit fehlender Historie prüfen.

Statusfarben haben ausschließlich auf ihren vorgesehenen Bauteilen Vorrang vor dem normalen Look beziehungsweise Produktfarben. Ohne passende gültige Statusregel erscheinen dort die jeweiligen Grundfarben. Statusfarben sind ein eigenes Thema neben der normalen Produktfarbvariante.

## Zusätzliche Modellformen für Möbelpacks

Status: am 12.10.2026 bestätigt, noch nicht implementiert. Das bestehende Format mit `box`, `cyl` und `loft` bleibt kompatibel; vorhandene Modelle werden nicht automatisch umgebaut. Die frühere Zurückstellung von Trapez-/Polygonteilen wird durch diese neue Planungsentscheidung abgelöst, nicht durch eine sofortige Umsetzung.

### Bestätigter Umfang und Reihenfolge

Erste Ausbaustufe:

- Polygonplatten mit konstanter Dicke, einschließlich Dreiecken und Trapezen. Damit werden gewendelte Treppenstufen innen schmal und außen breit; ebenso sind echte schräge Eckplatten und Fronten möglich.
- Abgerundete Quader für Gehäuse, Polster, Tischkanten und andere Körper mit gerundeten Kanten.
- Kugeln und Ellipsoide für runde Fußbälle, Echo Dots, Lampenschirme und ovale Dekoration.

Danach:

- Rohre mit geraden und gebogenen Verläufen für Leitungen, Schläuche und Armaturen.
- Ringe beziehungsweise Torusformen für runde Rahmen, Griffe und ringförmige Leuchten.
- Hohlkörper mit definierter Wandstärke für Becken, Badewannen, Tassen und Pflanzkübel. Vertiefungen sollen echte Innenflächen besitzen statt nur eine aufgesetzte dunkle Fläche.

Rundungen erhalten einstellbare Detailstufen: sparsame Darstellung auf Tablets und sichtbar rundere Darstellung bei höherer Qualität. Detailstufen verändern weder die vorgesehenen Maße noch gespeicherte Platzierungen.

### Umsetzung und Abnahme

1. Formen schrittweise als deklarative Pack-Geometrie ergänzen; Backendvalidierung, 2D-/3D-Darstellung, Auswahl, Spiegelung, XYZ-Rotation und Vorschauen jeweils gemeinsam erweitern. Keine beliebigen ausführbaren Geometrieskripte im Pack.
2. Trapezförmige Stufe mit horizontaler Trittfläche und konstanter Dicke prüfen. Eine konkave Polygonplatte korrekt triangulieren; Selbstüberschneidungen und degenerierte Konturen verständlich abweisen.
3. Abgerundeten Quader, Kugel und gestrecktes Ellipsoid mit unterschiedlichen Detailstufen prüfen: Maße, Umrisse, Flächennormalen und Rundungen bleiben konsistent, ohne die alten Box-Annäherungen oder sichtbare Nahtstellen nachzubilden.
4. In der zweiten Ausbaustufe Rohrbogen, Ring und ein offenes Becken mit Boden und Wandstärke prüfen. Innenflächen, offene Enden und Bauteilgrenzen müssen korrekt dargestellt werden; eine allgemeine automatische Boolesche Ausschnittfunktion ist damit nicht zugesagt.
5. Alte Pack-Dateien unverändert laden. Neue Formen beim Speichern/Laden und Export/Import erhalten und gegen Größen-/Komplexitätsgrenzen validieren. Detailstufen auf schwächeren Geräten und Vorschauen prüfen; keine dauerhafte Geometrie-Neuberechnung im Stillstand.

Exakte Parameter, zulässige Punkt-/Segmentzahlen und Formgrenzen werden vor der jeweiligen Implementierung festgelegt. Anpassungen bestehender Möbelmodelle an die neuen Formen erfolgen separat und gezielt.

## Globaler Wechsel zwischen Neon Look und Produktfarben

Status: als eigenständiges Feature definiert; Grundbedienung, Variantenwahl, Statusfarb-Vorrang und Speicherung am 12.10.2026 bestätigt. Keine Umsetzung und keine Änderung der bestehenden Packs.

Der Wechsel zwischen normalem Möbel-Look und Produktfarben erfolgt global über einen separaten Schalter „Produktfarben“ oben neben den bestehenden drei Darstellungsbuttons „Neon“, „Blueprint“ und „Tag“. Diese Darstellungsmodi bleiben erhalten; Darstellungsmodus und Produktfarben-Schalter sind unabhängig voneinander.

- Schalter aus: Möbel verwenden den normalen Look des gewählten Darstellungsmodus.
- Schalter an: Möbel verwenden ihre Produktfarben, soweit diese verfügbar sind.
- Positionen, Modelle, Maße und HA-Verknüpfungen bleiben unverändert. Der Wechsel ist eine Darstellungsauswahl, kein destruktiver Austausch gespeicherter Möbel.
- Gewählte Produktfarbvarianten bleiben beim Umschalten gespeichert.
- Möbel ohne verfügbare Produktfarben behalten den normalen Look des gewählten Darstellungsmodus.

### Bestätigte Produktfarbauswahl je Möbel

Die Produktfarbvariante wird am einzelnen platzierten Möbelstück gewählt. Bereits platzierte Farbmodelle behalten ihre vorhandene Produktfarbe; neue Möbel verwenden zunächst die ausdrücklich im Pack festgelegte Standardfarbe. Der globale Schalter zeigt die gewählte Produktfarbe nur an beziehungsweise unterdrückt sie zugunsten des normalen Darstellungsmodus. Er ändert oder löscht die individuelle Auswahl nicht. Diese Regeln sind am 12.10.2026 bestätigt.

### Bestätigter Vorrang von Statusfarben

Eine gültige Statusfarbe hat auf den ausdrücklich dafür vorgesehenen Bauteilen Vorrang, unabhängig vom Produktfarben-Schalter oder Darstellungsmodus. Sie färbt nicht das ganze Gerät ein. Ohne passende gültige Statusregel erscheint der normale Look beziehungsweise die gewählte Produktfarbe. So bleibt beispielsweise eine rote Fehler-LED in allen Modi erkennbar, während das Gehäuse seine Farbe behält. Am 12.10.2026 bestätigt.

### Bestätigte Speicherung der Farbauswahl

Der globale Produktfarben-Schalter wird als persönliche Darstellungspräferenz pro HA-Benutzer und Browser gespeichert. Ein Wechsel verändert nicht die Ansicht anderer Benutzer oder anderer Browser; eine browserübergreifende Synchronisation ist nicht vorgesehen. Die gewählte Produktfarbvariante je Möbel wird dagegen im gemeinsamen Plan gespeichert und ist für alle Benutzer gleich. Diese Trennung ist am 12.10.2026 bestätigt.

Beim ersten Start ohne gespeicherte persönliche Präferenz sind Produktfarben ausgeschaltet. Bereits gewählte Produktfarbvarianten bleiben gespeichert und erscheinen beim Einschalten wieder. Am 12.10.2026 bestätigt.

Die vorhandenen getrennten Neon-/Produktfarben-Packs und deren Varianten-Zuordnungen sind die Ausgangsbasis. Technisch müssen Farbzuordnungen an vorhandenen Modellen funktionieren, ohne durch das Umschalten abweichende Geometrie oder doppelte Platzierungen einzuführen. Die Übernahme bestehender Farbmodelle muss ihre Variante eindeutig erhalten und darf keine andere Variante anhand einer zufälligen Listenreihenfolge wählen.

Das globale Feature bleibt vom übrigen Möbelpack-Ausbau getrennt. Der ältere Farbvarianten-Vorschlag in `docs/moebel-pack-ausbauplan.md` ist keine Freigabe für eine sofortige Umsetzung.

Abnahme der Grundbedienung: Alle drei Darstellungsmodi mit ein- und ausgeschalteten Produktfarben prüfen. Gewählte Farbvarianten, Platzierungen und HA-Verknüpfungen bleiben beim wiederholten Wechsel erhalten. Möbel ohne Farbgegenstück bleiben sichtbar im normalen Look; es entstehen keine Gerätekopien oder Geometrieänderungen.

Abnahme der Variantenwahl: Zwei Platzierungen desselben Modells mit unterschiedlichen Produktfarben konfigurieren und den globalen Schalter wiederholt wechseln. Beide behalten ihre eigene Auswahl. Ein vorhandenes Farbmodell behält seine bisherige Variante; eine neue Platzierung erhält die deklarierte Pack-Standardfarbe. Individuelle Varianten überstehen Speichern/Laden, Duplizieren und Export/Import, ohne Geometrie- oder HA-Verknüpfungsänderungen.

Abnahme der Statusfarben: Eine Fehler-LED mit Statusfarbe in allen drei Modi sowie bei ein-/ausgeschalteten Produktfarben prüfen. Nur die Statusfläche erhält die Fehlerfarbe, nicht das Gehäuse. Ohne gültige Statusregel gelten wieder die Grundfarben der aktuellen Darstellung.

Abnahme der Speicherung: Schalter umstellen und im selben Browser unter demselben Benutzer neu laden; die persönliche Auswahl bleibt erhalten. Mit einem anderen Benutzer im selben Browser sowie in einem anderen Browser prüfen, dass die Präferenzen getrennt bleiben. Beide Ansichten verwenden dennoch dieselben im Plan gespeicherten Produktfarbvarianten. Die persönliche Schalterstellung wird nicht als gemeinsame Planeinstellung exportiert.

## Prüfung der Feature Definition vom 12 Oktober 2026

Der Grundumfang aller beschriebenen Features ist bestätigt. Einige Randfälle und die technische Übertragung alter Packs sind noch nicht abschließend festgelegt. Bestätigte Anforderungen sind von vorhandenen Branch-Implementierungen und deren Abnahmestand zu unterscheiden: Der erste Dachkonturen-Merge war eine Zwischenstufe; alle vier bestehenden Branches sind inzwischen integriert. Der zusätzliche geplante Umfang bleibt getrennt.

### Bereinigte Widersprüche

- Frühere „noch offen“-Hinweise zu einzelnen Strahlern und zur Reihenfolge der gemeinsamen Definition sind durch den inzwischen bestätigten Umfang ersetzt.
- XYZ-Drehung bleibt um die Modellmitte mit manueller Positionierung. Der technische Neuaufbau darf keine automatische Boden-/Wandhaftung einführen. Lokale Anschlagachsen für Türflügel und Strahler sind davon getrennt: bewegliches Bauteil lokal transformieren, anschließend das ganze Möbel um seine Modellmitte.
- Statusfarben betreffen nur vorgesehene Bauteile, nicht das Gesamtgerät. Sie haben dort Vorrang; unbekannter Status verwendet die Grundfarbe. Die frühere Ganzmodell-Einfärbung gilt nicht mehr.
- Fehlende Daten haben bewusst unterschiedliche Fallbacks: Text `--:--`, analoge Zeit 10:10, Türstellung zuletzt gültig mit Hinweis, Statusfarbe und Bauteilsichtbarkeit wie im Grundmodell. Eine pauschale gemeinsame Ersatzregel würde diese Entscheidungen verletzen.
- „Animation aus“ unterdrückt Bewegung, nicht die Zustandsdarstellung. Türen wechseln dann direkt zur Zielstellung, Anzeigen bleiben aktuell. Historische Wiedergabe unterliegt denselben Abschaltoptionen.

### Abschließend bestätigte Nutzerentscheidungen

Alle folgenden Festlegungen wurden am 12.10.2026 bestätigt. Ihre Umsetzung steht noch aus.

| Punkt | Festlegung | Abnahme |
| --- | --- | --- |
| Höhenbezug von Öffnungen | Tür-/Fensterhöhen relativ zum fertigen Boden ihrer zugeordneten Raumseite. | Andere Raumseite geometrisch prüfen; alte Pläne unverändert übernehmen. |
| Gebundene Spots bei Flächenverschiebung | Gebundene Spots beim seitlichen Verschieben der Zielfläche mitnehmen. | Relative Position, Bindung und HA-Zuordnung erhalten; keine automatische Neuverteilung. Gelöste Spots bleiben stehen. |
| Pack-Türen in Wänden | Zunächst Inventarmodelle mit Bewegung ohne automatischen Wanddurchbruch. | Animation verändert keine Wandgeometrie; bestehende Standard-Türen behalten ihre Durchbrüche. |
| Neue Farbansicht ohne gespeicherte Präferenz | Produktfarben beim ersten Start ausgeschaltet. | Bestehende Varianten bleiben gespeichert und werden beim Einschalten wiederverwendet; gespeicherte persönliche Präferenzen haben Vorrang. |
| 45 geometrisch abweichende Farbzuordnungen | Neon-Gegenstücke an die Geometrie der Produktfarbvarianten anpassen; Produktfarbvarianten unverändert lassen. | Geometriegleichheit, unveränderte Produktfarben-Modelle, IDs, Modellmaße und Zuordnungen prüfen; Neon-Darstellung erhalten. |

Weitere Außenbereichs-Anzeigen wie Raumkarten, Klimawerte oder gemeinsame Schaltaktionen gehören nicht zum bestätigten Grundumfang. Sie blockieren HA-Bereichszuordnung und Geräteauswahl nicht und werden nur bei einem zusätzlichen Wunsch definiert.

### Technische Lücken vor der Umsetzung

1. **Farbzuordnung ohne Geometriewechsel:** Im lokalen Bestand besitzen alle 1.087 Produktfarbvarianten ein vorhandenes Neon-Gegenstück und dieselben Modellmaße. Bei 45 Zuordnungen unterscheiden sich jedoch die geometrischen Bauteildaten: drei Badmöbel-, 24 PAX- und 18 Küchenmöbel-Varianten. Der Vergleich berücksichtigt Form, Achse, Drehung, Maße und Teilpositionen, nicht Farben. Bestätigte Korrekturrichtung: Die Neon-Gegenstücke übernehmen die Geometrie der Produktfarbvarianten und behalten ihren Neon-Look; die Produktfarbvarianten werden nicht angepasst. Bei mehreren Farbvarianten desselben Neon-Modells ihre Geometrien vor der Übernahme miteinander vergleichen; widersprüchliche Geometrien nicht durch beliebige Auswahl auflösen. IDs, Modellmaße, Varianten-Zuordnungen und Platzierungen bleiben erhalten. Danach muss der globale Farbwechsel ohne Geometriewechsel funktionieren. Stabile Farb-/Bauteilreferenzen und der Laufzeitvertrag sind noch technisch festzulegen: `VARIANTS.json` ist derzeit eine Begleitdatei, noch kein vom Packformat verarbeiteter Farbvertrag. Die Pack-Korrektur ist für die Umsetzung vorgemerkt; bei dieser Planaktualisierung werden keine Packs geändert.
2. **Neue Pack-Eigenschaften und Kompatibilität:** Bindungen, Displays, bewegliche Gruppen, Strahler, Statusregeln und neue Formen benötigen validierte optionale Felder und stabile Teil-IDs. Export, Import, Pack-Updates und Signaturen müssen zusammenpassen. Alte IDs und Platzierungen bleiben erhalten; neue Packs dürfen auf alten App-Versionen nicht stillschweigend unvollständig dargestellt werden. Versions-/Fähigkeitshinweise und verständliche Ablehnung werden als technische Lösung geprüft.
3. **Einheitliche Höhen und Transformationen:** Split-Level-Raumboden, Etage, Dach-Unterseite, Montagehöhe und lokale Bewegungsachsen müssen eine gemeinsame Berechnung verwenden. Keine doppelte Höhenaddition; feste Körper, bewegliche Teile, Displays, Licht und Umrisse folgen derselben Transformationskette. Empfangsflächen für Kontaktschatten werden erst nach dieser Grundlage ergänzt.
4. **Zeitreise und Zustandsauswertung:** Historische Zustände einschließlich erforderlicher Attribute separat von Live-Daten auflösen. Beim Rückwärtsspringen keine späteren oder Live-Türstellungen als „zuletzt gültig“ behalten. Bestätigte Öffnungs-/Kippregeln aus dem Original wiederverwenden und unklare Kombinationen deterministisch behandeln. Die globale Zeitauswahl bleibt unverändert.
5. **Darstellung und Performance:** Cache-Aktualisierung, Text-/Geometrie-Ressourcenfreigabe, Transparenzsortierung und Animationspausen auf Tablet und Desktop prüfen. Zeiger aktualisieren minütlich, Anzeigen bei sichtbarer Wertänderung; Dauerbewegungen nur bei Bedarf. Konkrete Qualitätsbudgets, Formgrenzen, Restlaufzeit-Formate und Layouts sind technische Umsetzungsdetails, keine zusätzliche Funktionsfreigabe.
6. **Update-Automation:** `scripts/neon-update.config.json` enthält bislang nur die vier alten Feature-Branches und grobe Verträge; `scripts/neon-update.mjs` prüft dabei zunächst das Vorhandensein nicht leerer Testdateien und führt anschließend die allgemeinen Prüfungen aus. Das deckt neue Anforderungen nicht automatisch ab. Nach Implementierung müssen neue Branches/Commits und echte Verhaltenstests in die Automation übernommen werden. Python 3.13 ist inzwischen eingerichtet; die vollständigen Backendprüfungen und der Automationslauf bestehen.

### Empfohlene Umsetzungsreihenfolge

Phase 1 ist abgeschlossen. Die Höhen- und Projektionsgrundlage aus Phase 2 ist inzwischen lokal implementiert und geprüft; spätere Phasen stehen noch aus. Jeder Schritt liefert einen separat prüfbaren Commit beziehungsweise Feature-Branch; die bestehenden alten Merge-Schritte müssen nicht in genau dieser Entwicklungsreihenfolge neu erstellt werden.

1. **Originalbasis und Integrationskandidat stabilisieren.** Die vier vorhandenen Branches mit dem geprüften Originalstand zusammenführen, ohne neue Features nebenbei einzubauen. Originalfunktionen, bestehende Packs und gespeicherte Pläne als Regressionstest sichern; vollständige Frontend-/Backendprüfung ermöglichen. Ergebnis bleibt lokal, ohne Push oder HA-Installation.
2. **Raumhöhen und XYZ-Grundlage abschließen.** Bestätigtes E/B/H-Modell, Stufenversatz und Anschlussflächen ergänzen, Migration alter Höhen festlegen. XYZ-Projektion und Auswahl ohne Positionskorrektur vervollständigen. Abnahme: Höhenbeispiel, alte Pläne, beide Stufenrichtungen, gedrehte Möbel und Wandansicht.
3. **Dach und Außenbereiche vervollständigen.** Konturen/Plusbuttons, eigenständige HA-Außenbereichszuordnung, Spot-Flächenbindung und Neigung, Dachtransparenz, Dachfensterlicht, Drehpunkte und Solar-Sichtbarkeit integrieren. Abnahme: konkave Flächen, runde Pools, Split-Level, Löschen/Verkleinern der Zielfläche und erhaltene Original-Dachfensterfunktionen.
4. **Pack-Datenverträge und HA-Auswahl ergänzen.** Gemeinsame optionale Bauteil-/Bindungsreferenzen als Grundlage für Displays, Strahler und Bewegungen definieren. Gerätefilter mit manuellen Entitätsbindungen und externen Helfersensoren umsetzen. Abnahme: alte Packs unverändert, keine automatisch erzeugten HA-Geräte, keine persönlichen IDs im allgemeinen Pack.
5. **Farben und Anzeigen umsetzen.** Nach dem Geometrie-/Farbabgleich individuelle Varianten, globalen Produktfarben-Schalter und gezielte Statusfarben ergänzen. Uhr-/Sensoranzeigen einschließlich Feldern, Formaten, Fallbacks, HA-Zeitzone und Zeitreise hinzufügen. Abnahme: drei Darstellungsmodi, zwei Benutzer/Browser, unabhängige Platzierungen und fehlende Historie.
6. **Gerichtetes Licht und einzelne Strahler umsetzen.** Leuchtenrichtung und reale Beleuchtungsnäherung konsistent machen; lokale Kopfrotation, gemeinsame/individuelle Bindungen und Winkelvererbung ergänzen. Abnahme: geneigte Leuchten, Spiegelung, Wandabschattung, unterschiedliche Einzelwinkel und HA-Einzelzustände.
7. **Bewegliche Pack-Teile und Geräteanimationen ergänzen.** Standard-Tür-/Fenstermechanismen wiederverwenden, Kühlschranktürsensoren getrennt vom Kompressor anbinden, Wasch-/Trockner-Laufeffekt und Lüfter ergänzen. Globale/individuelle Abschaltung sowie historische Wiedergabe berücksichtigen. Abnahme: unklare Sensorwerte, Richtungswechsel während Bewegung, Pausieren und Rückwärtssprünge.
8. **Formen und Kontaktschatten ausbauen.** Zuerst Polygonplatten, abgerundete Quader, Kugeln/Ellipsoide mit Detailstufen, danach Rohre, Ringe und Hohlkörper. Kontaktschatten auf begrenzten Boden-, Wand- und Möbeloberflächen ergänzen und gegen die erweiterten Geometrien prüfen. Bestehende Modelle nur anschließend gezielt und separat überarbeiten.
9. **Gesamtabnahme und Update-Verträge abschließen.** Alle Feature-Verhaltenstests in die Update-Automation aufnehmen, vollständige Builds und Backendprüfungen ausführen, reale Desktop-/Tablet-Sichtprüfung und Export-/Import-/Pack-Update-Tests durchführen. Erst dann kann eine freigegebene lokale Mischversion entstehen; Veröffentlichung, Adoption und HA-Deployment bleiben gesonderte Schritte mit entsprechender Freigabe.

Die vier zuvor offenen Nutzerentscheidungen und die Richtung des Geometrieabgleichs sind bestätigt. Nach der lokalen Höhen- und Projektionsgrundlage folgt Phase 3; der Pack-Geometrieabgleich bleibt für den späteren Pack-Ausbau vorgemerkt.

## Abgeschlossene Integration vom 12 Oktober 2026

Die vier vorhandenen Erweiterungen sind mit Original-main `1cca55b` zusammengeführt. Möbelgruppen, Wandansicht, Walk-Modus und die übrigen Original-Neuerungen bleiben enthalten. Die lokalen Merge-Commits sind `482fe07`, `d09d32c`, `1e858ed` und `3f1838c`.

- Raumhöhen verwenden im Editor das Originalfeld `ceiling_height`; ältere Branch-Daten mit `height` bleiben als Rückfall lesbar. Keine zweite konkurrierende Eingabe.
- Dachspots berücksichtigen den Raum-Bodenversatz genau einmal. Dachfensterlicht liegt auf dem jeweiligen Raumboden. Wandansicht und Möbelgruppen bearbeiten Montagehöhen relativ zum Raum; die Walk-Kamerahöhe folgt der Bodenhöhe des Raums.
- XYZ-Auswahlrahmen werden pro Teil einer Möbelgruppe transformiert. Fixierte Gruppen bleiben entsprechend dem aktuellen Original gesperrt.
- Bestanden: 386 Frontend-Tests, 80 Backend-Tests mit 22 Subtests, TypeScript, Python-Typprüfung, Lint, Formatierung und Build. Sechs Browser-Szenen prüfen freie Konturen auf schmaler Ansicht, Spot-Raster, XYZ-Eingaben, Raumstufen, Dachtransparenz und Möbelgruppen im erhöhten Raum. Python 3.13 ist dafür inzwischen lokal eingerichtet.
- Die Build-Grenzen berücksichtigen die zusätzlichen Funktionen: 3D 775 KB, Editor 760 KB, Karteneditor 212 KB. Gemessen sind rund 762,2 / 745,2 / 206,2 KB; Haupt- und Zeitreise-Budget bleiben unverändert.

Der lokale Lauf steht auf `ready`. Installationspaket: `private/update-automation/runs/20261012061131098-aa4ea9d4/neonplan3d.zip`. SHA-256: `66f10206a14fc7aab1a9e6fd332a81be38c4dc03bcb1c8aa63cc8b246a76cee7`. Quellstand: `b4157a5ed5ff6a3a1aa43f3f634d517fcefabc87`. Das Manifest meldet weiterhin die Originalversion 1.17.0; Commit und Prüfsumme identifizieren die lokale Mischversion.

Dieser Integrationslauf enthält nur den damaligen Stand der vier bestehenden Erweiterungen. Seine ZIP-Datei enthält nicht die nachfolgend implementierten Funktionen.

## Neue Höhen und XYZ Projektion vom 12 Oktober 2026

- `feature/room-height-offsets`: getrennte Wandunterkante, zusätzlicher Bodenaufbau und lichte Höhe; signed Stufenversatz mit Anschlussfläche und angepassten Boden-/Wandausschnitten. Tür-/Fensterhöhen neuer Raumprofile werden vom fertigen Eigentümer-Raumboden gemessen; ältere Übergänge behalten ihre bisherige Lage.
- `feature/inventory-xyz-projection` (Stand `55580ed`, enthält auch `2e2fca6`): Grundriss und Auswahl verwenden die projizierte XYZ-Begrenzungshülle; die Wandansicht berücksichtigt die gedrehte Breite und Höhe. Keine automatische Lagekorrektur beim Kippen. Größen-Griffe skalieren geneigte Objekte proportional; Einzelmaße bleiben über die Möbel-Zahlenfelder einstellbar. Die Kontur ist eine projizierte Modellbox, keine detailgetreue Silhouette jedes Mesh-Bauteils.
- Geprüft: 398 Frontend-Tests, 82 Backend-Tests mit 34 Subtests, TypeScript, Python-Typprüfung, Lint, Python-Formatierung und Build innerhalb der bestehenden Größenbudgets. Elf Tests der Update-Automation bestehen. Browserprüfungen decken Raumhöhen, beide Stufenseiten, negative/positive Versätze, mobile Ansicht, Speichern/Undo/Redo, XYZ-Konturen und Möbelgruppen ab. Der Quelltext besteht die Whitespace-Prüfung; generierte JavaScript-Bundles enthalten weiterhin vom Bundler erzeugte Whitespace-Sequenzen.
- Beide neuen Branches sind in `scripts/neon-update.config.json` für künftige Zusammenführungen eingetragen. Der komplette Update-Automationslauf mit diesen zusätzlichen Branches wurde noch nicht erneut ausgeführt; der alte `ready`-Kandidat bleibt unverändert.

Entwicklungspfad: `private/feature-work/room-height-offsets`. Keine Veröffentlichung, keine Übernahme in den dauerhaften `custom`-Branch und keine HA-Installation. Gerichtete Lichtkegel, erweiterte Kontaktschatten und die übrigen späteren Feature-Phasen sind weiterhin offen. Möbelpacks und `tools/product-packs/` wurden nicht verändert.
