# Budget Manager PWA

Offline-first személyes költségvetés-kezelő Progressive Web App.

## Funkciók

- Offline működés
- IndexedDB (Dexie)
- Telepíthető PWA
- Kiadás / Bevétel kezelés
- Kategóriák
- Havi limitek
- Megtakarítási cél
- OCR (Tesseract.js)
- Chart.js diagram
- HUF / EUR / USD támogatás
- Mobilra optimalizálva

---

# Lokális futtatás

A Service Worker miatt **nem működik file:// protokollról**.

Használj egyszerű HTTP szervert.

Python:

```bash
python -m http.server 8080
```

Ezután:

```
http://localhost:8080
```

---

# Chrome Android

1. Nyisd meg az alkalmazást.
2. Várd meg míg teljesen betölt.
3. Chrome menü.
4. **Add to Home Screen**.
5. Telepítés.

Az alkalmazás ezután natív alkalmazásként indul.

---

# Safari iPhone

1. Nyisd meg Safari böngészőben.
2. Share gomb.
3. Add to Home Screen.
4. Add.

Ezután standalone módban indul.

---

# Offline teszt

1. Nyisd meg egyszer online.
2. Telepítsd.
3. Kapcsold ki az internetet.
4. Indítsd újra.

Az alkalmazásnak teljes értékűen működnie kell.

---

# OCR

Ajánlott formátum:

- PNG
- JPG
- JPEG

Ajánlott felbontás:

Minimum:

```
1080 px
```

Optimális:

```
1440–2160 px
```

Lehetőleg éles banki vagy wallet screenshot.

---

# Támogatott pénznemek

- HUF
- EUR
- USD

---

# Adatok

Minden adat kizárólag a böngésző IndexedDB adatbázisában tárolódik.

Nincs backend.

Nincs felhő.

Nincs regisztráció.

Nincs külső adatküldés.
