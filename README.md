# Blogi

Jekyll-pohjainen blogi, joka julkaistaan GitHub Pagesilla `.github/workflows/pages.yml`-workflowlla.

## Rakenne

- `_posts/` — julkaistut postaukset suomeksi
- `en/_posts/` — samat postaukset englanniksi (osoitteet alkavat `/en/`). Kieliversiot
  linkittyvät toisiinsa, kun niillä on sama `ref`-arvo front matterissa
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

## Ulkoasu

Teema on Beautiful Jekyll 6.0.1 (https://beautifuljekyll.com/), joka ladataan
jekyll-remote-theme-lisäosalla. Navigaatio määritellään `_config.yml`-tiedostossa.
`_layouts/home.html` suodattaa artikkelit kielen mukaan. `_layouts/post-lang.html`
säilyttää kielilinkit ja muutoshistorian. `_includes/head-language.html` lisää
kieliversioiden hakukonelinkit, RSS-syötteet ja Search Console -vahvistuksen
teeman head-osaan. Pienet tyylilisäykset ovat `assets/css/blog.css`-tiedostossa.

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
