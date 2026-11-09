# Lokale Produkt-Packs erstellen

Eigenständige Möbel-Packs für den unveränderten NeonPlan-3D-Stand. Keine Änderungen an UI,
Integration, Bundle oder Pack-Schema. Die Implementierung verwendet das bestehende Packformat
mit höchstens 60 Teilen pro Modell. Vorgehen gemäß `implement-project-work`: bestehende
Schema-/Renderpfade wiederverwenden, minimale Änderungen, Import und echte Rendergeometrie prüfen.

## Neu gruppierte Sammlung (06.10.2026)

`catalogue_v2.py` erzeugt die neue Sammlung separat unter `private/product-packs-v2/`:
17 Kategorien, jeweils Standardfarben ohne Zusatz und Produktfarben mit entsprechendem Zusatz.
34 Packs / 520 Modelle. `billy.py` ergänzt BILLY-Größen, Aufsätze und Türkombinationen.
Die bisherige Sammlung bleibt unverändert, einschließlich ihrer IDs und platzierter Referenzen.
Neue IDs beginnen mit `local.v2.`; `REGROUPING.json` dokumentiert alle 278 alten Typen.
Keine automatische Migration und keine Remote-Installation.

```sh
private/heating-test/.venv/bin/python tools/product-packs/catalogue_v2.py \
  --key private/heating-test/signing-key.pem
node --test tools/product-packs/catalogue-v2.test.mjs
CHROME_PATH='/Applications/Brave Browser.app/Contents/MacOS/Brave Browser' \
  node tools/product-packs/render-v2.mjs
private/heating-test/.venv/bin/python tools/product-packs/bundle.py \
  private/product-packs-v2 --regrouped
```

`fetch-billy-references.mjs` speichert neue private Fotoreferenzen, ohne sie zu verteilen.
`RELEASE_V2.md` plus generierte Pack-Tabelle ist die Anleitung zur neuen Sammlung.
Der folgende Abschnitt beschreibt weiterhin die kompatible ältere Sammlung.

## Dateien

- `geometry.py`: Maße in Metern → normalisierte Pack-Geometrie.
- `devices.py`, `furniture.py`, `extras.py`: Produktmodelle und Varianten.
- `catalogue.py`: 26 Packs / 278 Modelle, Quellen/Maßangaben, Schema- und Begrenzungsprüfung, Ed25519-Signierung.
- `viessmann.json`: freigegebenes Viessmann-Modell unverändert aus dem Test-Pack; unabhängige Authoring-Quelle, keine Schlüssel oder anderen Test-Modelle.
- `neon.py`: zusätzliche Standard-Packs mit vorhandenen Material-Farbrollen; nur bekannte Farbduplikate zusammenfassen, Originale unverändert lassen.
- `fetch-extra-references.mjs`: private Produktfotos für visuellen Abgleich, nicht im ZIP verteilt.
- `catalogue.test.mjs`: Tests mit dem vorhandenen Renderer, Quellenabdeckung und Signaturen.
- `RELEASE.md`: Anleitung und Einschränkungen für die fertigen Packs.
- `bundle.py`: signierte Packs, Anleitung und Vorschauen als ZIP bündeln; keine privaten Schlüssel.

## Erzeugen und prüfen

Vom Repository-Stamm, mit Python-Abhängigkeiten `cryptography` und `voluptuous`:

```sh
private/heating-test/.venv/bin/python tools/product-packs/catalogue.py \
  --out private/product-packs --key private/heating-test/signing-key.pem
node --test tools/product-packs/catalogue.test.mjs
npm run build --prefix frontend
```

Der Schlüsselpfad ist nur das lokale Beispiel. Private Schlüssel nie committen oder verteilen.
Ohne `--key` werden nur Quellen ausgegeben. `PRODUCT_PACK_DIR` überschreibt das Verzeichnis
für die Node-Tests. Diese verwenden Node 24 und die vorhandenen Frontend-Abhängigkeiten.

Vorschauen über das vorhandene `frontend/pack-images.mjs` erstellen, anschließend bündeln:

```sh
CHROME_PATH='/Applications/Brave Browser.app/Contents/MacOS/Brave Browser' \
  node frontend/pack-images.mjs private/product-packs/wohnen.json \
  private/product-packs/multimedia.json private/product-packs/beleuchtung.json \
  private/product-packs/kueche.json private/product-packs/haustechnik.json \
  private/product-packs/ikea_malm_kura.json private/product-packs/ikea_kallax.json \
  private/product-packs/ikea_pax.json private/product-packs/garten_grill.json \
  private/product-packs/fahrzeuge.json private/product-packs/ikea_wohnen.json \
  private/product-packs/ikea_buero.json private/product-packs/apple_audio.json \
  --out private/product-packs/previews
private/heating-test/.venv/bin/python tools/product-packs/bundle.py private/product-packs
```

Für die zusätzlichen Standardfarben vor dem Bündeln ebenfalls alle Quellen `*_neon.json`
(nicht `*.canonical.json`) mit `frontend/pack-images.mjs` rendern. Es sind dieselben 13 Kategorien,
jeweils mit `_neon` als Suffix. Bestehende Produktfarben und Release-Versionen bleiben unverändert.

Die Ausgabe bleibt im bereits ignorierten `private/`-Verzeichnis; nur Authoring-Code wird versioniert.
Produktmaße und dokumentierte Interpretationen stehen in `research.json`. Fotoreferenzen werden
nicht mitverteilt. Die Modelle sind geometrische Low-Poly-Näherungen, keine CAD- oder Textur-Repliken.
Farben sind anhand von Fotos angenähert und erscheinen durch vorhandene Beleuchtung anders.

Bekannte Renderer-Grenzen werden ausschließlich in den Packdaten berücksichtigt: mindestens
0,1 mm dicke Quaderflächen, mindestens 5 cm Möbel-Breite/Tiefe und lokal gedrehte Zylinderscheiben
wegen der bestehenden Kappenorientierung. Keine Änderungen am Renderer erforderlich.
