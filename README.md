# Focus Mode One — Legal Pages

Impressum, AGB und Datenschutzerklärung für [Focus Mode One](https://apps.apple.com/) — die iOS-App für fokussiertes Planen in Quartalen, Wochen und Tagen.

Diese Seiten werden über **GitHub Pages** gehostet und in die App (Links aus Settings) sowie in das App-Store-Listing eingebunden.

## Struktur

```
.
├── index.html              # Landing page mit Links zu allen drei Dokumenten
├── impressum.html          # § 5 DDG / § 18 MStV
├── agb.html                # Allgemeine Geschäftsbedingungen (Subscription-Terms,
│                             Widerrufsbelehrung, Kündigung, Haftung, §§)
├── datenschutz.html        # DSGVO-konforme Datenschutzerklärung
└── assets/
    ├── styles.css          # Geteilte Styles (App-Design)
    └── scroll-spy.js       # TOC-Highlighting
```

## Design

Die Seiten folgen dem Design-System der App:

| Rolle | Farbe | Hex |
|-------|-------|-----|
| Today (Eos) | Orange | `#FF8C42` |
| Week (Hermes) | Blue | `#2575F0` |
| Quarter (Athena) | Violet | `#8840FF` |
| Page background | Dark | `#0E0E10` |
| Section contrast | | `#18181C` |
| Card background | | `#222228` |
| Heading text | Warm off-white | `#F0EFE8` |
| Body text | Muted grey | `#8E8E9E` |
| Meta text | Dim grey | `#5A5A6E` |

**Typografie:** Fraunces (Headlines) + Geist (Body), geladen via Google Fonts.

**Akzente:** Violet für primäre Navigation, Blue für Links, Orange für Highlights und den „Stand"-Badge.

## Deployment auf GitHub Pages

1. Repo auf GitHub anlegen (z.B. `focusmode-legal`)
2. Diese Dateien pushen
3. In den Repo-Settings unter **Pages** → Branch `main`, Folder `/ (root)` auswählen
4. Custom Domain einrichten (z.B. `legal.focusmode.one`):
   - `CNAME`-Datei im Repo-Root mit der Domain
   - DNS: `CNAME`-Record auf `<username>.github.io`
5. HTTPS aktivieren (automatisch via GitHub Pages)

## Einbindung in die App

Nach Go-Live müssen die folgenden URLs in `focus_mobile/lib/screens/auth_screen.dart` und `focus_mobile/lib/screens/settings_screen.dart` aktualisiert werden:

```dart
const _kPrivacyPolicyUrl = 'https://legal.focusmode.one/datenschutz.html';
const _kTermsUrl         = 'https://legal.focusmode.one/agb.html';
```

Und in **App Store Connect**:
- App Privacy → Privacy Policy URL → `https://legal.focusmode.one/datenschutz.html`
- App Information → License Agreement → Custom EULA (AGB-Inhalt als Plain Text oder Link)

## Pflege

- **Änderungen an Tools/Stack** (z.B. neuer Analytics-Anbieter, Migration weg von Loops.so): Datenschutzerklärung entsprechend erweitern, Eintrag in die Versionshistorie, `Stand`-Datum aktualisieren.
- **Adress-/Geschäftsführerwechsel bei Riverland:** Impressum + Datenschutz anpassen.
- **Preisänderungen / neue Tarife:** AGB §5 (Tariftabelle) + Versionshistorie anpassen, betroffene Nutzer mit 30-Tage-Vorankündigung informieren.
- **Bei größeren Änderungen** Nutzer proaktiv per E-Mail via Loops informieren — DSGVO Art. 13/14 und AGB §17.

## Versionshistorie (Dokumentation)

- **2026-04-21** — AGB hinzugefügt. Datenschutz um Sign in with Apple, Google Sign-In, lokale Benachrichtigungen, Profilbild, Minderjährigenschutz, Speicherfristen-Tabelle und GitHub Pages als Hoster erweitert. HTML-Typo korrigiert.
- **2026-04-19** — Erstveröffentlichung Impressum + Datenschutz.

## Lizenz

Inhalte © 2026 Riverland International GmbH. Das Design-System und der Code sind Teil des Focus-Mode-One-Produkts und nicht zur Wiederverwendung durch Dritte bestimmt.
