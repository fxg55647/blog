# Blogi

Jekyll-pohjainen blogi, joka julkaistaan GitHub Pagesilla `.github/workflows/pages.yml`-workflowlla.

## Rakenne

- `_posts/` — julkaistut postaukset (tyhjä toistaiseksi)
- `_drafts/` — kesken olevat postaukset, joita Jekyll ei koskaan sisällytä normaaliin buildiin
- `_material/` — taustamateriaali ja tutkimusmuistiinpanot postauksia varten, ei koskaan julkaistavaa sisältöä (alaviivalla alkava kansio, Jekyll ohittaa sen automaattisesti)

## Uusi postaus

Kun luonnos on valmis julkaistavaksi, siirrä se `_drafts/`-kansiosta `_posts/`-kansioon
ja anna sille päivätty tiedostonimi muodossa `VVVV-KK-PP-otsikko.md`:

```markdown
---
layout: post
title: "Otsikko"
date: 2026-01-01 12:00:00 +0300
categories: yleista
---

Postauksen sisältö tähän.
```

## Paikallinen kehitys

```bash
bundle install
bundle exec jekyll serve --drafts   # --drafts näyttää myös _drafts/-kansion luonnokset
```

Sivusto aukeaa osoitteessa `http://localhost:4000/blog/`.

## Julkaisu

Workflow käynnistyy automaattisesti kun `main`-haaraan pushataan muutoksia.
Jotta julkaisu toimii, GitHub-repon asetuksista **Settings → Pages → Build and deployment →
Source** täytyy olla kertaluontoisesti asetettu arvoon **GitHub Actions**.
