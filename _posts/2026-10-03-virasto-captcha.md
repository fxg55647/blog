---
title: "Virasto-CAPTCHA: valittaa saa ilmaiseksi, mutta sata kertaa ei helposti"
date: 2026-10-03 04:19:21 +0300
categories: hallinto ai
ref: virasto-captcha
version: 1
---

Verkkosivuilla on usein pieni tehtävä, jossa pitää esimerkiksi tunnistaa
kuvista liikennevalot. Ihmiselle se on sekunnin vaiva, mutta koneelle, joka
yrittää kirjautua tuhansia kertoja, se on hidaste. Ehdotan samaa ajatusta
viranomaisten päätöksistä valittamiseen. Kun joku tekee poikkeuksellisen
paljon valituksia, jokainen valitus pitäisi vahvistaa henkilökohtaisesti
virkailijalle, paikan päällä tai etäyhteydellä, ja kertoa omin sanoin, mistä
päätöksestä valittaa ja miksi. Yhdestä aidosta valituksesta se on pieni
vaiva, sadasta kopioidusta valtava. Toisin kuin valitusmaksu, se ei
kohtele vähävaraista huonommin, koska hinta maksetaan ajalla eikä rahalla.

## Massavalittamisesta tehdään huonosti skaalautuvaa

Ajatus on lisätä valituksen tekemiseen pieni henkilökohtainen suoritus, joka
on helppo tehdä kerran aidossa asiassa mutta raskas toistaa kymmeniä tai
satoja kertoja. Tavoite ei ole estää valittamista. Tavoite on tehdä
massavalittamisesta huonosti skaalautuvaa: oikeus valittaa säilyy, mutta
valitusten automatisointi ja teollinen monistaminen tehdään työlääksi.

Ytimekkäästi: *ei maksua valittamisesta, vaan ihmiseltä vaadittava
yksilöllinen suoritus.*

## Miten vahvistus toimisi

### Valittaja yksilöi asian omin sanoin virkailijalle

Valitus vahvistetaan henkilökohtaisesti virkailijalle joko paikan päällä tai
etäyhteydellä. Valittaja kertoo omin sanoin

- mistä päätöksestä hän valittaa,
- mitä muutosta hän vaatii ja
- miksi juuri kyseinen päätös on hänen mielestään väärä.

Jokainen valitus vaatii oman vahvistuksensa. Yhtä yleistä tekstiä ei voi
monistaa satoihin asioihin, ja vahva sähköinen tunnistautuminen estää
kiertämästä järjestelmää eri tunnuksilla.

### Tavallinen valittaja ei kohtaa lisävaivaa

Vahvistus aktivoituisi vasta, kun samalta henkilöltä tulee poikkeuksellisen
paljon valituksia. Tavallinen valittaja, joka valittaa kerran tai pari omasta
asiastaan, ei huomaisi järjestelmää lainkaan.

### Kustannus on aikaa, ei rahaa

"Hinta" on ensisijaisesti aikaa ja henkilökohtaista osallistumista. Etu
ennakkomaksuun verrattuna on, ettei vähävarainen ole lähtökohtaisesti
huonommassa asemassa: kaikilla on vuorokaudessa yhtä monta tuntia, mutta ei
yhtä paljon rahaa.

### Etävaihtoehto on välttämätön

Pelkkä fyysinen asiointi olisi ongelmallinen esimerkiksi
liikuntarajoitteisille, syrjäseudulla asuville ja ulkomailla oleville.
Siksi mukana pitää olla saavutettava etävaihtoehto.

## Miksi aihe on ajankohtainen juuri nyt

Hallitus valmistelee parhaillaan keinoja aiheettomia valituksia vastaan.
Oikeusministeri Leena Meri kertoi syyskuussa 2026, että valmisteilla on
ennakkomaksu rajattuihin hallinto-oikeusasioihin, jotka eivät koske
valittajan omaa asiaa, sekä seuraamusmaksu tuomioistuimen väärinkäytöstä
([Verkkouutiset](https://www.verkkouutiset.fi/a/aiheettomat-valitukset-halutaan-kuriin/)).
Jo tammikuussa ministerit käynnistivät selvityksen, jossa tarkastellaan muun
muassa hallinto-oikeuksien ja korkeimman hallinto-oikeuden maksujen
korottamista
([Valtioneuvosto](https://valtioneuvosto.fi/-/1410853/ministerit-meri-ikonen-ja-multala-kaynnistavat-selvityksen-aiheettomien-valituksien-ehkaisemisesta)).
Virasto-CAPTCHA on vaihtoehto juuri näille rahaan perustuville keinoille.

Ongelma ei ole uusi. Jo vuonna 2014 uutisoitiin, kuinka yksi ihminen oli
työllistänyt Rovaniemen kaupunkia ja tuomioistuimia yli 50 valituksella,
kantelulla ja kanteella
([Verkkouutiset](https://www.verkkouutiset.fi/a/kaupunki-yhden-ihmisen-valitusten-kourissa-yli-50-oikeusprosessia-28244/)).

## Uutuusarvo

Hain vastineita hakusanoilla kuten *massavalitukset*, *aiheettomat
valitukset*, *sarjavalittaja*, *vexatious litigant*, *proof of work spam*,
*mass comments fake identities* ja *in-person verification appeal*.

### Laskennallinen työ roskapostia vastaan on vanha idea

Cynthia Dwork ja Moni Naor ehdottivat vuonna 1993, että sähköpostin
lähettäjän pitäisi tehdä pieni laskentatehtävä, joka on halpa yhdelle
viestille mutta kallis miljoonalle. Adam Backin Hashcash toteutti saman
vuonna 1997 ([Wikipedia](https://en.wikipedia.org/wiki/Proof_of_work)).
Virasto-CAPTCHA on sama periaate, mutta konelaskennan tilalla on ihmisen
aika, jota ei voi ostaa lisää näytönohjaimella.

### Häiriköivän valittajan rajoittaminen tehdään nykyään jälkikäteen

Englannissa ja Walesissa tuomioistuin voi julistaa henkilön häiriköiväksi
asianosaiseksi (*vexatious litigant*), jolloin hän tarvitsee tuomarin luvan
jokaiseen uuteen oikeudenkäyntiin
([GOV.UK](https://www.gov.uk/government/publications/declaring-a-litigant-vexatious-and-the-treasury-solititor/guidance-note-vexatious-litigants-and-the-treasury-solicitor)).
Se on raskas, yksilöön kohdistuva ja julkinen leima, joka annetaan vasta
pitkän prosessin jälkeen. Virasto-CAPTCHA taas kytkeytyisi päälle
automaattisesti määrän perusteella eikä vaatisi ketään julistamaan
valittajaa häiriköksi.

### Massakommentointi on jo toteutunut uhka

Yhdysvalloissa viestintävirasto FCC sai vuonna 2017 verkkoneutraliteetista
yli 22 miljoonaa kommenttia, joista New Yorkin osavaltion oikeusministerin
mukaan lähes 18 miljoonaa oli väärennettyjä. Yksi 19-vuotias lähetti
ohjelmalla 9,3 miljoonaa kommenttia keksityillä nimillä
([New Yorkin oikeusministeri](https://ag.ny.gov/press-release/2021/attorney-general-james-issues-report-detailing-millions-fake-comments-revealing)).

### Ero: määrästä laukeava, ajalla maksettava henkilövahvistus

En löytänyt mallia, jossa valitus pitäisi vahvistaa virkailijalle omin
sanoin vasta, kun saman henkilön valitusmäärä ylittää rajan. Lähimmät
vastineet joko maksetaan rahalla (oikeudenkäyntimaksu, suunniteltu
ennakkomaksu), konelaskennalla (Hashcash) tai ne kohdistetaan yksilöön
raskaalla tuomioistuinpäätöksellä (*vexatious litigant*). Uutuus on näiden
välissä: automaattisesti laukeava, kaikille saman hintainen ja
tekoälyllä vaikeasti ohitettava kustannus.

## Teoreettinen arvo

### Ilman ideaa tekoäly tekee valituksista halpoja ja maksut yleistyvät

Lähivuosina tekoäly tekee yksilöllisen näköisen valituksen kirjoittamisesta
lähes ilmaista. Kirjallinen vaatimus "kerro omin sanoin" ei siksi enää
yksinään erota aitoa valittajaa massavalittajasta, mutta virkailijan kanssa
käyty keskustelu erottaa paremmin. Samaan aikaan Suomeen ollaan tuomassa
ennakkomaksuja ja seuraamusmaksuja. Vertailukohta on siis tilanne, jossa
massavalituksia torjutaan rahalla. Idean arvo on se, kuinka paljon enemmän
se torjuu ja kuinka paljon vähemmän se haittaa vähävaraisia.

### Fermi-arvio: noin 20 miljoonaa – 1,3 miljardia dollaria vuodessa

| Tekijä | Arvo | Lähde |
|---|---|---|
| Hallinto-oikeuksiin saapuneet asiat (2024) | 19 215 | [STT Info / tuomioistuinlaitos](https://www.sttinfo.fi/tiedote/70955986/tuomioistuinlaitoksen-tilinpaatos-2024-henkilostoresursseja-lisattiin-mutta-samaan-aikaan-asiamaarat-kasvoivat?lang=fi) |
| Kustannus ratkaistua asiaa kohden, Helsingin HaO (2025) | 1 395 € | [Helsingin hallinto-oikeus](https://www.tuomioistuimet.fi/material/sites/oikeus_hallintooikeudet_helsinginhallinto-oikeus/dokumentit/ripk25utc/Helsingin_HAO_toimintakertomus_2025_FINAL.pdf) |
| Massa- ja sarjavalitusten osuus | 2–5 % | oma oletus |
| Idean lisävaikutus maksujen päälle | 20–50 % | oma oletus |
| Viivästyneiden hankkeiden kustannus Suomessa | 1–10 milj. € / vuosi | oma oletus |
| Kerroin muille vauraille demokratioille | 50–200 | oma oletus |
| Euron ja dollarin suhde | 1 € ≈ 1,15 $ | oma oletus |

- **Tuomioistuinten työ:** 19 215 × 2–5 % ≈ 380–960 asiaa × 1 395 € ≈
  0,5–1,3 milj. €. Siitä 20–50 % on 0,1–0,7 milj. €.
- **Hankkeiden viivästys:** 1–10 milj. € × 20–50 % ≈ 0,2–5 milj. €.
- **Vahvistusten kustannus** on pieni, koska ne koskevat vain rajan
  ylittäviä: muutama sata puolen tunnin tapaamista on alle 0,1 milj. €.
- **Suomi yhteensä:** noin 0,3–5,7 milj. € eli noin 0,35–6,5 milj. $.
- **Maailmalla** kertoimella 50–200: noin **20 miljoonaa – 1,3 miljardia
  dollaria vuodessa**.

Tähän ei sisälly sitä, mitä idea säästää vähävaraisille verrattuna
maksuihin, eikä sitä, että se suojaa viranomaisia tekoälyn tuottamilta
valitustulvilta, jotka voisivat olla paljon nykyistä suurempia.

### Eniten heiluttaa se, kuinka suureksi tekoälyn valitustulva kasvaa

Arvio on suuruusluokka, ei ennuste. Suurin epävarmuus on viivästyskustannus
ja se, kasvaako massavalittaminen tekoälyn myötä moninkertaiseksi. Jos
massavalitukset pysyvät nykyisellä tasolla ja maksut tehoavat hyvin, idean
lisäarvo jää haarukan alapäähän. Jos ne kasvavat FCC:n kommenttitulvan
tapaan, raha ei enää riitä jarruksi, ja ihmisen aikaan perustuvan
vahvistuksen arvo kasvaa haarukan yläpäätä suuremmaksi.
