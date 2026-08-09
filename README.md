# TidTil – Website

Die öffentliche Website für die iPhone-App **TidTil** – ein ruhiger
Familienkalender. Gebaut mit [Hugo](https://gohugo.io), dreisprachig
(Deutsch / English / Dansk), gehostet über GitHub Pages.

Sie erfüllt zugleich zwei Pflichtangaben für den App Store:
die **Support-URL** und die **Datenschutz-URL**.

## Lokal ansehen

```bash
hugo server
```

Dann im Browser `http://localhost:1313/` öffnen.

## Aufbau

- `content/` – Inhalte je Sprache (`*.de.md`, `*.en.md`, `*.da.md`)
- `layouts/` – eigenes, schlankes Theme (kein externes Theme)
- `assets/css/main.css` – Design im TidTil-Look (hell & dunkel)
- `i18n/` – Oberflächen-Texte je Sprache
- `hugo.toml` – Konfiguration

## Kontakt-Adresse ändern

Die Support-/Datenschutz-Adresse steht an **einer** Stelle in `hugo.toml`:

```toml
[params]
  email = "support@example.com"
```

Diese Adresse wird überall automatisch eingesetzt (Fußzeile, Support-,
Datenschutz-Seite). **Vor der App-Store-Einreichung durch eine echte Adresse
ersetzen.**

## Deployment

Jeder Push auf `main` löst automatisch den GitHub-Actions-Workflow
(`.github/workflows/hugo.yml`) aus, der die Seite baut und auf GitHub Pages
veröffentlicht.
