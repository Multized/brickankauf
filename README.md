# BrickAnkauf.de

Website für den Ankauf von originalem LEGO®. Statische HTML/CSS/JS-Seite, gehostet auf Cloudflare Pages.

## Einrichtung

### 1. Kontaktformular (Formspree)

1. Gehe auf [formspree.io](https://formspree.io) und erstelle ein kostenloses Konto
2. Erstelle ein neues Formular (Free-Tier: 50 Einsendungen/Monat)
3. Kopiere die Form-ID (z. B. `xkgnopqa`)
4. Ersetze in `index.html` bei `action="https://formspree.io/f/DEINE-FORMSPREE-ID"` die Platzhalter-ID

### 2. Impressum & rechtliche Angaben ausfüllen

Folgende Platzhalter in allen HTML-Dateien ersetzen:

| Platzhalter | Inhalt |
|---|---|
| `[DEIN VOLLSTÄNDIGER NAME / FIRMENNAME]` | Dein Name oder Firmenname |
| `[Straße und Hausnummer]` | Deine Adresse |
| `[PLZ] [Stadt]` | Postleitzahl und Ort |
| `[+49 XXX XXXXXXX]` | Deine Telefonnummer |
| `[DEIN GERICHTSSTAND / DEINE STADT]` | Dein Gerichtsstand |

### 3. Domain & Cloudflare Pages

1. Domain `brickankauf.de` bei einem Registrar registrieren
2. DNS auf Cloudflare übertragen (oder direkt bei Cloudflare registrieren)
3. GitHub Repository erstellen und dieses Verzeichnis pushen
4. In Cloudflare Pages: **Create a project** → **Connect to Git** → Repo auswählen
5. Einstellungen:
   - **Build command:** *(leer lassen)*
   - **Build output directory:** `/` (Root)
   - **Root directory:** *(leer lassen)*
6. Eigene Domain in Cloudflare Pages unter "Custom domains" hinzufügen

### 4. Sitemap & Search Console

1. Google Search Console: Domain verifizieren
2. Sitemap einreichen: `https://www.brickankauf.de/sitemap.xml`

### 5. Preise aktualisieren

In `index.html` die Preiskarten (Sektion `#preise`) mit echten Kilopreisen befüllen.

## Struktur

```
/
├── index.html          # Hauptseite
├── agb.html            # Allgemeine Geschäftsbedingungen
├── datenschutz.html    # Datenschutzerklärung (DSGVO)
├── impressum.html      # Impressum (§ 5 TMG)
├── robots.txt          # Suchmaschinen-Anweisungen
├── sitemap.xml         # Sitemap für Google etc.
├── _headers            # Cloudflare Security Headers
├── _redirects          # Cloudflare Weiterleitungen
└── assets/
    ├── css/style.css   # Alle Styles
    └── js/main.js      # FAQ, Formular, Animationen
```

## Rechtliche Hinweise

- Die AGB, Datenschutzerklärung und das Impressum enthalten Platzhalter, die vor dem Live-Gang ausgefüllt werden müssen
- Bei gewerblichem Betrieb: USt-ID und Handelsregistereintrag ergänzen
- Für rechtliche Beratung bitte einen Anwalt konsultieren

## Technologie

- Reines HTML/CSS/JavaScript – kein Build-Schritt erforderlich
- Cloudflare Pages (kostenloser Tier ausreichend)
- Formspree für Kontaktformular (Free: 50 Einsendungen/Monat)
- Google Fonts (Inter)
