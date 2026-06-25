# Budget Manager PWA

Offline-first személyes költségvetés-kezelő Progressive Web App.

## Funkciók

- Dashboard havi egyenleggel
- Kategóriánkénti kiadási diagram
- Tranzakció CRUD
- Kategória kezelés
- Havi limitek
- Limit túllépés jelzés
- Megtakarítási célok
- OCR alapú tranzakció rögzítés
- IndexedDB alapú adattárolás
- Teljes offline működés
- Telepíthető PWA

---

# Lokális tesztelés

A service worker miatt az alkalmazás nem fut megfelelően `file://` protokollról.

Indíts helyi webszervert:

```bash
python -m http.server 8080
```

Ezután nyisd meg:

```text
http://localhost:8080
```

---

# PWA telepítés Android Chrome alatt

1. Nyisd meg az alkalmazást Chrome böngészőben.
2. Várd meg amíg az oldal teljesen betöltődik.
3. Koppints a Chrome menüre (⋮).
4. Válaszd:

```text
Add to Home Screen
```

vagy

```text
Install App
```

5. Erősítsd meg a telepítést.
6. Az alkalmazás önálló appként fog indulni.

---

# PWA telepítés iPhone / iPad Safari alatt

1. Nyisd meg az alkalmazást Safari böngészőben.
2. Koppints a Megosztás ikonra.
3. Válaszd:

```text
Add to Home Screen
```

4. Adj nevet az alkalmazásnak.
5. Nyomd meg az Add gombot.
6. Az app megjelenik a kezdőképernyőn.

---

# Offline működés

Az első sikeres betöltés után a Service Worker cache-eli:

- index.html
- manifest.json
- ikonok
- Dexie.js
- Chart.js
- Tesseract.js

Ezután az alkalmazás internetkapcsolat nélkül is használható.

---

# OCR tesztelés

Ajánlott képformátumok:

- PNG
- JPG
- JPEG

Ajánlott minimális felbontás:

```text
1080 × 1920
```

vagy magasabb.

Legjobb eredmény:

- éles screenshot
- sötét szöveg világos háttéren
- levágás nélkül

Felismerett minták:

## HUF

```regex
\d[\d\s]*\s?(Ft|HUF)
```

Példák:

```text
12 500 Ft
150000 HUF
```

## EUR

```regex
€?\s?\d+[.,]\d{2}
```

Példák:

```text
€12.50
12,50
```

## USD

```regex
\$?\s?\d+[.,]\d{2}
```

Példák:

```text
$12.50
12.50
```

## Dátum

```regex
\d{4}[-./]\d{2}[-./]\d{2}
```

Példa:

```text
2026-06-25
```

vagy

```regex
\d{2}[-./]\d{2}[-./]\d{4}
```

Példa:

```text
25-06-2026
```

---

# Adattárolás

Minden adat helyben kerül tárolásra:

- IndexedDB
- Dexie.js

Az alkalmazás:

- nem használ backend szervert
- nem küld adatot külső API-nak
- nem igényel regisztrációt
- nem igényel bejelentkezést

---

# Projekt fájlok

```text
index.html
manifest.json
service-worker.js
icon-192.svg
icon-512.svg
README.md
```

---

# Megjegyzés

Ha új verzió érhető el, az alkalmazás értesítést jelenít meg:

```text
Frissítés elérhető — Újratöltés
```

Az új Service Worker aktiválható az alkalmazás újratöltésével.