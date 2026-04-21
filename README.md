# Focus Mode One — Legal Pages

Imprint, Terms of Service, and Privacy Policy — in both **German** and **English** — for [Focus Mode One](https://apps.apple.com/), the iOS app for focused planning in quarters, weeks, and days.

These pages are hosted on **GitHub Pages** and linked from the app (Settings) and the App Store listing.

## Structure

```
.
├── index.html              # Bilingual landing page (EN / DE columns)
│
├── impressum.html          # DE: § 5 DDG / § 18 MStV
├── agb.html                # DE: Allgemeine Geschäftsbedingungen
├── datenschutz.html        # DE: DSGVO-konforme Datenschutzerklärung
│
├── imprint.html            # EN: Imprint (translation of Impressum)
├── terms.html              # EN: Terms of Service (translation of AGB)
├── privacy.html            # EN: Privacy Policy (translation of Datenschutzerklärung)
│
└── assets/
    ├── icon_transparent.png  # Site / favicon icon (transparent)
    ├── icon.png              # Legacy solid icon (kept as backup)
    ├── styles.css            # Shared stylesheet (app design system)
    └── scroll-spy.js         # TOC-highlighting behaviour
```

## Governing language

The **German versions are legally binding**. The English versions are provided for convenience and international users. Each English page contains a "Governing language" clause stating that the German version prevails in case of discrepancy — the App Store Connect EULA and App Privacy fields should link to the German URLs for legal correctness (or to the English URLs for broader accessibility, with the German versions reachable via the switcher).

## Page-level DE / EN switcher

Every legal page has a small "DE / EN" toggle in the top navigation next to the three legal links. Clicking flips to the equivalent document in the other language while staying on the same topic. The currently active language is highlighted in violet.

## Design

The pages follow the app's design system:

| Role | Colour | Hex |
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

**Typography:** Fraunces (headlines) + Geist (body), loaded via Google Fonts.

**Accents:** Violet for primary nav, blue for links, orange for highlights and the "last updated" badge.

## Deployment to GitHub Pages

1. Create a repo on GitHub (e.g. `focusmode-legal`)
2. Push these files
3. In the repo settings → **Pages** → Branch `main`, folder `/ (root)`
4. Configure a custom domain (e.g. `legal.focusmode.one`):
   - `CNAME` file in repo root containing the domain
   - DNS: `CNAME` record pointing `legal` → `<username>.github.io`
5. Enable HTTPS (automatic via GitHub Pages)

## Wiring into the app

After the URLs are live, update the following in `focus_mobile/lib/screens/auth_screen.dart` and `focus_mobile/lib/screens/settings_screen.dart`:

```dart
// Landing that lets the user pick their language
const _kPrivacyPolicyUrl = 'https://legal.focusmode.one/datenschutz.html';
const _kTermsUrl         = 'https://legal.focusmode.one/agb.html';
```

(Pointing at the DE versions is legally safest — the DE/EN switcher in the page header lets the user flip to English if they prefer.)

And in **App Store Connect**:
- App Privacy → Privacy Policy URL → `https://legal.focusmode.one/privacy.html` (English is typical for international App Store reviewers)
- App Information → License Agreement → Custom EULA (English terms content or link)

## Maintenance

- **Stack changes** (new analytics provider, migration away from Loops.so): update **both** the German and English privacy policies, add an entry to each page's version history, update the "Stand" / "Last updated" date.
- **Address / director changes at Riverland:** update Impressum + Imprint + both privacy docs + both terms docs (controller block + withdrawal address in Terms of Service § 7).
- **Price changes / new tiers:** update AGB § 5 + Terms § 5 (tier table) + version history; notify affected users with 30-day notice as required by both docs (§ 5 / § 17).
- **Major changes:** notify users proactively via Loops email — GDPR Art. 13/14 and AGB § 17 / Terms § 17.

## Change log (documentation)

- **2026-04-21** — English versions added (imprint, terms, privacy). Bilingual landing page with EN / DE split. DE/EN switcher in all legal-page headers. Icon switched to transparent variant. AGB added. Datenschutz expanded with Sign in with Apple, Google Sign-In, local notifications, profile picture, minors, retention table, GitHub Pages host. HTML typo fixed.
- **2026-04-19** — Initial publication (Impressum + Datenschutz, German only).

## Licence

Content © 2026 Riverland International GmbH. The design system and code are part of the Focus Mode One product and not intended for reuse by third parties.
