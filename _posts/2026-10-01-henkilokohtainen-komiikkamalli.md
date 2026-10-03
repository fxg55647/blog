---
title: "Henkilökohtainen komiikkamalli"
date: 2026-10-01 04:45:00 +0300
categories: ai huumori
ref: henkilokohtainen-komiikkamalli
version: 2
last_modified_at: 2026-10-03 04:01:14 +0300
changes:
  - version: 2
    date: 2026-10-03
    note: "Lisätty kansantajuinen tiivistelmä alkuun ja selventävämmät väliotsikot"
---

Tekoäly osaa jo kirjoittaa vitsejä, joita ihmiset pitävät aidosti hauskoina.
Tähän asti on lähinnä kysytty, onko kone hauska. Kysyn tässä toista: mitä
tapahtuu, kun jokaisella on oma vitsikone, joka oppii jokaisesta
naurahduksesta ja ohituksesta, mikä juuri häntä naurattaa, ja keksii heti
seuraavan vitsin hänelle? Videosovellukset etsivät jo valmiista sisällöstä
sen, mistä todennäköisesti pidät. Tämä tekisi sisällön alusta asti sinulle,
vähän kuin koomikko, jonka koko yleisö olet sinä. Siksi kysymys ei koske vain
viihdettä vaan myös sitä, mitä yhteiselle huumorille ja ihmisten
käyttäytymiselle tapahtuu.

Tekoälyn tuottamasta huumorista on puhuttu yllättävän paljon. Yksi kysymys on
silti jäänyt paljon vähemmälle huomiolle kuin itse vitsien tuottaminen:

> Mitä ihmisten käyttäytymiselle ja huumorikulttuurille tapahtuu, kun yhdellä
> ihmisellä on käytännössä rajaton määrä hänen omaan makuunsa optimoitua
> huumoria?

## Mitä tiedetään jo: AI osaa olla hauska

Tutkimuksessa on jo aika vahvaa näyttöä siitä, että kielimallit pystyvät
tekemään sisältöä, jota ihmiset pitävät aidosti hauskana.

- Gorenzin ja Schwarzin vuonna 2024 *PLOS One* -lehdessä julkaistussa
  tutkimuksessa ChatGPT 3.5:n tuottamat vitsit arvioitiin keskimäärin
  vähintään yhtä hauskoiksi kuin ihmisten, ja joissakin tehtävissä
  hauskemmiksi. Mukana oli myös vertailu The Onionin ammattilaisten
  otsikoihin: mallin otsikot arvioitiin keskimäärin yhtä hauskoiksi kuin
  alkuperäiset
  ([USC Today](https://today.usc.edu/ai-jokes-chatgpt-humor-study/),
  [PsyPost](https://www.psypost.org/ai-outshines-humans-in-humor-study-finds-chatgpt-is-as-funny-as-the-onion)).
- Vuoden 2025 *Computers in Human Behavior* -tutkimuksessa GPT-4o pärjäsi
  ihmisiä paremmin tekstipohjaisessa huumorissa, mutta ei kuvapohjaisessa
  ([Axios](https://www.axios.com/2025/11/12/ai-humor-chatgpt-claude)).
- Vuonna 2026 on tutkittu järjestelmällisesti sekä vitsien generointia että
  sitä, pystyykö malli itse arvioimaan, mikä vitsi toimii
  ([Sakabe ym., AAAI 2026](https://arxiv.org/abs/2511.09133)).

Myös käytännön suunta on selvä. Vuonna 2026 *Engineering Applications of
Artificial Intelligence* -lehdessä julkaistu tutkimus rakensi multimodaalisen
järjestelmän, joka generoi kuutta eri huumorityyppiä (mm. sanaleikit,
liioittelu, absurdi ja musta huumori), muuttaa vitsit automaattisesti
lyhytvideoiksi kuvineen ja äänineen ja mittaa niiden menestystä oikeilla
lyhytvideoalustoilla
([ScienceDirect](https://www.sciencedirect.com/science/article/abs/pii/S0952197626014909)).
Automaattinen huumoritehdas + jakelu + palautesilmukka on siis jo
tutkimusaihe.

## Aukko: kenelle huumori tehdään?

Suuri osa kirjallisuudesta kysyy joko *"Voiko AI olla hauska?"* tai *"Voiko
AI auttaa koomikkoa kirjoittamaan?"*. Google DeepMind esimerkiksi tutki
tekoälyä nimenomaan koomikoiden luovuustyökaluna: kahdenkymmenen
ammattikoomikon työpajoissa silloiset mallit tuottivat usein kliseistä
materiaalia, vaikka koomikot näkivät niissä potentiaalia työkaluna
([Mirowski ym., FAccT 2024](https://deepmind.google/research/publications/a-robot-walks-into-a-bar-can-language-models-serve-as-creativity-support-tools-for-comedy-an-evaluation-of-llms-humour-alignment-with-comedians/)).

Oma kysymykseni on eri: ei se, osaako kone olla hauska, vaan mitä tapahtuu,
kun jokaisella on oma, loputon ja juuri hänen makuunsa viritetty
huumorivirtansa.

## Tekninen ero TikTokiin

TikTok yrittää löytää miljoonien olemassa olevien videoiden joukosta
seuraavan, josta pidät. Generatiivinen järjestelmä voisi tehdä toisin:

```
generoi → näytä → reaktio → päivitä makumalli → generoi uudelleen
```

Jos käyttäjä reagoi vaikkapa 😅 / 😂 / 💀 / ohita / jaa, malli saa valtavan
määrän erittäin puhdasta preferenssidataa. Muutamassa sadassa kierroksessa se
voisi ehkä oppia todella hienojakoisen "huumoriprofiilin": tykkäät
kontekstinvaihdoista mutta et sanaleikeistä; synkästä huumorista silloin kun
se on absurdia mutta et pelkästä shokista; tietystä rytmistä; tietyn
mittaisista setup–punchline-pareista ja niin edelleen.

Tähän liittyy tuore löydös, joka tekee ideasta kiinnostavamman. AAAI 2026
-tutkimuksessa ihmiset ja kielimallit eivät arvioineet huumoria samalla
tavalla: mallit painottivat enemmän uutuutta, ihmiset enemmän empatiaan
liittyviä tekijöitä ([Sakabe ym.](https://arxiv.org/abs/2511.09133)).
Käytännössä pelkkä "AI arvioi omat vitsinsä" ei siis ehkä riitä — käyttäjän
oma nauru tai reaktio on arvokkaampi signaali.

## Kolme sukupolvea: vitsikone, loputon syöte ja oma komiikkamalli

Erottaisin kolme sukupolvea:

1. **AI joke generator** — "tee minulle vitsi".
2. **Infinite AI comedy feed** — loputon generoitu virta.
3. **Personal comedy model** — järjestelmä oppii nimenomaan sen, mikä saa
   *sinut* nauramaan, ja alkaa generoida sitä reaaliajassa.

Kolmas on minusta varsinainen uusi idea. Silloin kyse ei enää oikeastaan ole
meemigeneraattorista vaan huumorin suosittelujärjestelmän ja generatiivisen
mallin hybridistä.

Siinä voi olla aika voimakas "TikTok-hetki": nykyiset suosittelujärjestelmät
etsivät sisältöä. Tämä keksii seuraavan sisällön juuri sinua varten.

## Uutuusarvo

Hain vastineita tutkimuksista (arXiv, ACL Anthology, AAAI, ScienceDirect) ja
tuotteista hakusanoilla kuten *personalized humor generation*, *humor
preference modeling*, *AI meme app learns your sense of humor* ja *AI
generated video feed*. Lähimmät vastineet:

- **[iFunny](https://play.google.com/store/apps/details?id=mobi.ifunny)**
  mainostaa algoritmia, joka "oppii huumorintajusi". Se kuitenkin valitsee
  olemassa olevia, käyttäjien tekemiä meemejä — se on sukupolvea 3 edeltävä
  suosittelija, ei generaattori.
- **[Sora-sovellus](https://www.nbcnews.com/tech/tech-news/openai-announces-sora-2-ai-video-audio-app-rcna234753)**
  (OpenAI, 2025) on AI-generoidun videon syöte personoidulla järjestyksellä.
  Sisältö on kuitenkin käyttäjien generoimaa ja syöte lajittelee sitä; se ei
  generoi seuraavaa videota yhden katsojan reaktioiden perusteella. Lähinnä
  sukupolvea 2.
- **[Who Laughs with Whom?](https://arxiv.org/abs/2601.03103)** (Murakami
  ym., 2026) osoittaa, että huumorimieltymykset jakautuvat käyttäjäryhmiin ja
  että mallin mieltymyksiä voi persoonakehotteella ohjata tietyn ryhmän
  suuntaan. Tämä on ryhmätasoista eikä yksilön reaaliaikaista oppimista.
- **[lmfaoooo, SemEval-2026](https://arxiv.org/abs/2606.00022)** ("Humor Is
  an Audience") mallintaa kohdeyleisön mieltymyksiä tulkittavina
  huumoripiirteinä ja valitsee niiden avulla generoiduista ehdokkaista. Se on
  teknisesti lähimpänä, mutta yleisö on kilpailutehtävän annettu kohderyhmä,
  ei yksittäinen käyttäjä jatkuvassa palautesilmukassa.

Yksittäiset palaset siis ovat olemassa: generointi, ryhmätason
preferenssimallit, generoidut syötteet ja olemassa olevan sisällön
personointi. En löytänyt tuotetta tai tutkimusta, joka yhdistäisi ne
silmukaksi, jossa yhden ihmisen reaktiot päivittävät hänen makumalliaan ja
ohjaavat suoraan seuraavan vitsin generointia. En myöskään löytänyt
vakiintunutta tutkimushaaraa kirjoituksen pääkysymykselle — mitä
rajattomasta personoidusta huumorista seuraa käyttäytymiselle ja
huumorikulttuurille. Uutuusarvo on juuri tässä yhdistelmässä ja
kysymyksenasettelussa, ei AI-huumorissa sinänsä.

## Teoreettinen arvo

### Ilman ideaa suosittelija hoitaa jo suuren osan

Lähivuosina AI-generoitu huumori täyttää
syötteet joka tapauksessa: Soran kaltaiset generoidut syötteet yleistyvät,
automaattiset huumoritehtaat (kuten yllä mainittu lyhytvideotutkimus)
tuottavat valtavan sisältövarannon ja nykyiset suosittelijat poimivat siitä
kullekin sopivimman. Kun varanto on käytännössä rajaton, hyvä suosittelija
jäljittelee jo pitkälle henkilökohtaista generointia. Idean lisäarvo on vain
se ero, jonka yksilölle reaaliajassa generoitu sisältö tuo tämän päälle.

### Fermi-arvio: noin 0,3–6 miljardia dollaria vuodessa

Mittarina käytän mainosrahoitteisen sosiaalisen median tulot,
koska siihen sitoutumisen kasvu realisoituu:

| Tekijä | Arvo | Lähde |
|---|---|---|
| Sosiaalisen median mainonta maailmassa 2026 | n. 317 mrd. $ | Statista-ennuste, [Cropink](https://cropink.com/advertising-statistics) |
| Osuus, joka on huumorisisällön ajan varassa | 20–40 % | oma oletus |
| Lisäsitoutuminen verrattuna suosittelijaan, joka valitsee rajattomasta generoidusta varannosta | 0,5–5 % | oma oletus |

- Alaraja: 317 mrd. $ × 20 % × 0,5 % ≈ **0,3 mrd. $ / vuosi**
- Yläraja: 317 mrd. $ × 40 % × 5 % ≈ **6 mrd. $ / vuosi**

Haarukka on siis noin **0,3–6 miljardia dollaria vuodessa**. Suuruusluokka-arvio,
ei ennuste.

### Eniten heiluttaa se, kattaako yleinen varanto yksilön maun

Viimeinen kerroin ratkaisee. Jos generoitu varanto on niin
suuri, että suosittelija löytää lähes aina "riittävän osuvan" vitsin,
lisäparannus jää lähelle nollaa ja idean arvo kaventuu alarajalle tai sen
alle. Jos taas hienojakoinen yksilöllinen maku (rytmi, aiheyhdistelmät,
henkilökohtaiset viittaukset) on jotain, mitä mikään yleinen varanto ei
kata, ero voi olla selvästi suurempi.

Arvio mittaa markkina-arvoa eli sitoutumista, ei hyvinvointia. Kirjoituksen
pääkysymys — mitä huumorikulttuurille tapahtuu, kun jokaisella on oma
loputon virtansa — jää tämän luvun ulkopuolelle, ja sen etumerkki voi olla
kumpi tahansa.
