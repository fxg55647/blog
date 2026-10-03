---
title: "Varhaisen käyttäjän investointiparadoksi: palvelu voi kadota, tietueen ei pitäisi"
description: "Varhaiset käyttäjät rakentavat palvelun arvon mutta menettävät eniten sen kuollessa. Ehdotan: vähemmän panostusta alussa ja oma data avoimessa muodossa."
date: 2026-10-03 04:11:12 +0300
categories: talous commons
ref: varhaisen-kayttajan-investointiparadoksi
version: 1
---

Uusi sovellus on usein hyödyllinen vasta, kun sinne on kertynyt paljon tietoa
ja käyttäjiä. Ensimmäiset käyttäjät tekevät sen työn: he syöttävät tietonsa,
opettelevat käytön ja luottavat siihen, että vaiva kannattaa joskus. Juuri he
kuitenkin häviävät eniten, jos sovellus lopetetaan, koska heidän työnsä jää
lukituksi palveluun, jota ei enää ole. Ehdotan, että asetelma käännetään:
mitä aikaisemmin joku tulee mukaan, sitä vähemmän hänen pitäisi joutua
panostamaan, ja hänen syöttämänsä tiedon pitäisi olla hänen omaansa, avoimessa
muodossa, joka säilyy palvelun kuollessakin. Esimerkkinä käytän lemmikin tai
muun eläimen tietoja: palvelu voi kadota, eläimen historian ei pitäisi.

## Varhainen käyttäjä rakentaa palvelun ja kantaa riskin

Palvelu tarvitsee ensimmäisten käyttäjiensä aikaa, dataa ja luottamusta
rakentaakseen tulevan arvonsa. Samalla juuri ensimmäiset käyttäjät kantavat
suurimman riskin siitä, ettei heidän investointinsa koskaan tuota hyötyä.

### Käyttäjän arvo on hyödyt miinus kaikki panokset

Yksinkertaisessa mallissa käyttäjän saama arvo on:

```
V_käyttäjä = B₀ + Σ (t = 1…T) pₜ · Bₜ − (P + S + M + L + R)
```

missä

- `B₀` on välitön hyöty,
- `Bₜ` on hetkellä *t* saatava tuleva hyöty,
- `pₜ` on todennäköisyys, että palvelu on vielä käyttökelpoinen hetkellä *t*,
- `P` on palvelun hinta,
- `S` on käyttöönottoon ja datan syöttämiseen käytetty työ,
- `M` on jatkuva ylläpitotyö,
- `L` on lock-in- ja vaihtokustannus ja
- `R` on palveluntarjoajan jatkuvuusriski.

### Varhaisessa vaiheessa lähes kaikki termit ovat käyttäjää vastaan

Varhaisessa vaiheessa välitön hyöty `B₀` on usein pieni, käyttöönoton työ `S`
suuri ja jatkuvuuden todennäköisyys `pₜ` epävarma. Käyttäjä siis käytännössä
maksaa ja tekee työtä rakentaakseen palvelun tietokantaa ennen kuin palvelulla
on merkittävää verkostoarvoa.

## Kolme tunnettua ilmiötä samassa käyttäjässä

Varhaisen käyttäjän haitta on kolmen tunnetun ilmiön summa:

```
Varhaisen käyttäjän haitta = kylmän alun haitta
                           + suhdesidonnainen investointi
                           + palveluntarjoajan jatkuvuusriski
```

- **Kylmän alun haitta** (*cold-start penalty*): verkosto on vähiten
  arvokas juuri ensimmäisille käyttäjille. Teknologiasijoittaja Andrew Chen on
  kirjoittanut ilmiöstä kokonaisen kirjan, *The Cold Start Problem* (2021)
  ([a16z](https://a16z.com/books/the-cold-start-problem/)).
- **Suhdesidonnainen investointi** (*relationship-specific investment*):
  käyttäjän palveluun syöttämä data ja työ kasvattavat juuri tämän
  palvelusuhteen arvoa ja voivat lisätä vaihtokustannuksia. Käsite on
  taloustieteen transaktiokustannusteoriasta, jossa tällainen sidonnaisuus
  altistaa investoijan vastapuolen otteelle
  ([IDEAS/RePEc](https://ideas.repec.org/h/elg/eechap/4136_12.html)).
- **Jatkuvuusriski** (*provider continuity risk*): käyttäjä kantaa riskin
  siitä, ettei startup tai palvelu ole enää olemassa silloin, kun datan pitäisi
  tuottaa suurin hyöty.

## Mitä aikaisempi käyttäjä, sitä pienempi investointi

Varhaiselle käyttäjälle pitäisi tehdä päinvastoin kuin nyt: mitä aikaisempi
käyttäjä, sitä pienempi hänen investointinsa pitäisi olla.

### Seitsemän keinoa painaa panokset alas

- ilmainen peruskäyttö
- automaattinen datan tuonti
- avoin, dokumentoitu formaatti
- täydellinen vienti (export)
- selkeä alkuperätieto (provenance) jokaiselle tiedolle
- käyttäjän omistus ja hallinta datasta
- palvelun kuolema ei tee tietueesta käyttökelvotonta

Silloin hinta `P` lähestyy nollaa, työ `S` pienenee, lock-in `L` lähestyy
nollaa ja jatkuvuusriski `R` pienenee. Palvelukohtainen jatkuvuuden
todennäköisyys `pₜ` menettää merkitystään, koska datan arvo säilyy muuallakin.

### Investointi siirtyy palvelun omaisuudesta käyttäjän omaisuudeksi

Suljetussa mallissa käyttäjän investointi muuttuu palveluntarjoajan
omaisuudeksi. Avoimessa mallissa se muuttuu käyttäjän omistamaksi, siirrettäväksi
omaisuudeksi. Tämän sivutuotteena syntyy jotain suurempaa:

```
monta siirrettävää tietuetta → avoin datayhteismaa → verkostoarvo
```

Verkostovaikutus ei silloin perustu lock-iniin vaan yhteensopivuuteen.

### Avoimen mallin arvo varhaiselle käyttäjälle

```
V_varhainen käyttäjä = välitön hyöty
                     + siirrettävä tuleva arvo
                     + verkoston tuoma lisäarvo
                     − minimaalinen käyttöönottokustannus
```

### Kysymys vaihtuu startupista omaan tietueeseen

Käyttäjän ei tarvitse enää kysyä: "Kannattaako minun investoida tähän
startupiin?" Hän kysyy: "Kannattaako minun rakentaa tästä asiasta itselleni
siirrettävä digitaalinen tietue?" Jos vastaus jälkimmäiseen on kyllä,
palveluntarjoajan olemassaolo kymmenen vuoden päästä muuttuu paljon
vähemmän tärkeäksi.

## Sovellus eläindataan: palvelu käyttöliittymänä omistajan tietueelle

Eläinpalvelussa käyttäjä voisi

- tuoda oman eläimensä järjestelmään,
- hakea automaattisesti olemassa olevaa julkista dataa,
- lisätä omia dokumenttejaan ja tietojaan,
- nähdä jokaisen tiedon alkuperän,
- julkaista avoimeksi itse haluamansa tiedot,
- pitää yksityiset dokumentit piilossa ja
- viedä koko eläimen historian avoimessa formaatissa.

Tällöin palvelu ei ensisijaisesti "omista eläimen profiilia", vaan toimii
käyttöliittymänä käyttäjän omistamalle siirrettävälle tietueelle. Ydinlause:
*The service may disappear. The record should not.*

## Uutuusarvo

Hain vastineita hakusanoilla kuten *local-first software*, *user-owned
portable data*, *data portability*, *pet health record app export*,
*animal health data interoperability* ja *KoiraNet julkiset terveystiedot*.

### Periaate on tunnettu, ja siitä on hyviä esityksiä

- **Local-first software.** Martin Kleppmannin, Adam Wigginsin, Peter van
  Hardenbergin ja Mark McGranaghanin essee (2019) esittää seitsemän ihannetta,
  joista kaksi on tämän idean ydin: data säilyy, vaikka palvelu lopetetaan
  ("The Long Now"), ja käyttäjä säilyttää lopullisen omistuksen ja hallinnan
  ([Ink & Switch](https://www.inkandswitch.com/essay/local-first/)).
- **Solid.** Tim Berners-Leen Solid-protokollassa käyttäjän data on hänen
  omassa "podissaan", ja sovellukset ovat vain sen käyttöliittymiä
  ([Akamai/Linode](https://www.linode.com/docs/guides/introduction-to-the-solid-data-protocol)).
- **Siirrettävyysoikeus ja -työkalut.** EU:n tietosuoja-asetuksen 20 artikla
  antaa oikeuden saada itse toimittamansa henkilötiedot koneluettavassa
  muodossa ([gdpr-info.eu](https://gdpr-info.eu/art-20-gdpr/)), ja Applen,
  Googlen ja Metan tukema Data Transfer Initiative rakentaa siirtotyökaluja
  palvelujen välille ([DTI](https://dtinit.org/blog/2023/03/28/launch)).

### Eläindatassa palat ovat olemassa mutta erillään

Lemmikkien terveyspäiväkirjoja on sovelluskaupoissa runsaasti, ja osa tarjoaa
viennin. Esimerkiksi Pasu tekee terveyshistoriasta PDF:n ja varmuuskopion
zip-tiedostona, mutta ei mainitse avointa rakenteista formaattia
([App Store](https://apps.apple.com/app/id6762033650)). Julkista eläindataa
taas on: Kennelliiton KoiraNet julkaisee yksittäisten koirien sukutaulut,
terveystutkimusten tulokset ja koe- ja näyttelytulokset kaikkien nähtäville
([DogWellNet](https://dogwellnet.com/content/hot-topics/brachycephalics/finnish-kennel-club-to-add-walk-test-results-to-koiranet-db-r524/)).
Jatkuvuusriski on myös toteutunut: Tractive osti Whistle-lemmikkipaikantimet
Marsilta, ja Whistle-laitteet lakkasivat toimimasta elokuun 2025 lopussa
([Invoxia](https://www.invoxia.com/blog/petcare/tractive-acquires-whistle-dog-health-collar/)).
En löytänyt tietoa siitä, säilyikö käyttäjien kertynyt historia siirrossa.

### Ero on yhdistelmässä ja varhaisen käyttäjän näkökulmassa

En löytänyt eläinpalvelua, joka yhdistäisi julkisen datan automaattisen
haun, omistajan omat dokumentit, tietokohtaisen alkuperätiedon, valinnan
julkisen ja yksityisen välillä sekä täyden viennin avoimessa formaatissa.
Hain App Storesta, yleisellä verkkohaulla ja eläinten terveysdatan
yhteentoimivuutta koskevista lähteistä. Uutuusarvo on siis kaksiosainen:
local-first- ja Solid-periaatteiden vieminen eläintietueeseen, ja
näkökulma, jossa siirrettävyys ei ole vain kuluttajansuojaa vaan
nimenomaan keino poistaa varhaisen käyttäjän rangaistus ja rakentaa
verkostovaikutus yhteensopivuuden varaan.

## Teoreettinen arvo

Arvioin arvon vain eläindatalle. Yleinen periaate koskee lähes kaikkia
palveluja, mutta siihen ei saa järkevää yhtä lukua.

### Ilman ideaa tekoäly hoitaa tiedon syötön mutta ei katoamista

Lähivuosina tekoäly tekee eläinlääkärin PDF:ien, rokotustodistusten ja
laskujen lukemisesta lähes automaattista, joten käyttöönoton työ `S` pienenee
joka tapauksessa. EU:ssa vientioikeus on jo laissa. Ilman ideaa jää kuitenkin
ongelma, jota tekoäly ei ratkaise: kun palvelu lopetetaan tai käyttäjä vaihtaa
palvelua, kertynyt historia katoaa tai jää PDF-kasaksi, jota mikään muu
palvelu ei ymmärrä. Idean arvo syntyy tästä erosta.

### Fermi-arvio: noin 15–420 miljoonaa dollaria vuodessa

| Tekijä | Arvo | Lähde |
|---|---|---|
| Lemmikkitalouksia Yhdysvalloissa (2025) | 94 milj. | [Pet Food Industry / APPA](https://www.petfoodindustry.com/pet-ownership-statistics/article/15747936) |
| Lemmikkitalouksia Euroopassa (2024) | 140 milj. | [FEDIAF](https://europeanpetfood.org/about/statistics/) |
| Osuus, joka pitää eläimen tietoja palvelussa | 5–20 % | oma oletus |
| Osuus, jonka palvelu loppuu tai joka vaihtaa vuodessa | 10–20 % | oma oletus |
| Hukattu aika tietojen keräämiseen uudelleen | 1–3 h | oma oletus |
| Ajan arvo | 20 $/h | oma oletus |
| Tekoälyn vaikutus hukattuun aikaan ilman ideaa | −50 % | oma oletus |
| Katoamisista, joista seuraa turha uusintatutkimus tai -rokotus | 5–10 % | oma oletus |
| Uusinnan hinta | 50–150 $ | oma oletus |

- **Käyttäjät:** 234 milj. × 5–20 % ≈ 12–47 milj. taloutta.
- **Katoamiset vuodessa:** 12–47 milj. × 10–20 % ≈ 1,2–9,4 milj. tapausta.
- **Aika:** 1,2–9,4 milj. × 1–3 h × 20 $ × 50 % ≈ 12–280 milj. $.
- **Turhat uusinnat:** 1,2–9,4 milj. × 5–10 % × 50–150 $ ≈ 3–140 milj. $.
- **Yhteensä:** noin **15–420 miljoonaa dollaria vuodessa**.

Tähän ei sisälly avoimen datayhteismaan verkostoarvoa, esimerkiksi
tutkimuskäyttöä, jota en pystynyt arvioimaan uskottavasti. Tämä on
suuruusluokka-arvio, ei ennuste.

### Eniten heiluttaa se, kuinka moni pitää tietojaan palvelussa

Haarukka on yli kymmenkertainen lähinnä siksi, etten löytänyt lukua sille,
kuinka moni lemmikinomistaja käyttää erillistä terveystietopalvelua. Toinen
iso tekijä on vertailukohta: jos eläinlääkäriketjujen omat portaalit ja
EU:n vientioikeus kattavat suurimman osan historiasta joka tapauksessa,
idean lisäarvo jää haarukan alapäähän.
