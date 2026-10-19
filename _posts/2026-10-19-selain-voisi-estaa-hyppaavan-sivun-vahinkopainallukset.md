---
title: "Selain voisi estää hyppäävän sivun vahinkopainallukset"
date: 2026-10-19 04:28:00 +0300
categories: suunnittelu
description: "Selaimen suoja voisi estää vahinkopainalluksen, kun sisältö hypähtää sormen alta. Miten se toimisi ja mitä vastaavaa on jo olemassa?"
ref: selain-voisi-estaa-hyppaavan-sivun-vahinkopainallukset
version: 2
last_modified_at: 2026-10-19 04:35:31 +0300
changes:
  - version: 2
    date: 2026-10-19
    note: "Lisätty palaute estetystä painalluksesta, Androidin käyttöliittymätason jatkosovellus ja digitaalisen turhautumisen vähentäminen."
---

Olet painamassa linkkiä, kun sivulle ilmestyy mainos ja sisältö hypähtää. Sormi osuu siihen, missä linkki juuri oli, mutta selain avaa jotakin muuta. Ehdotan selaimeen suojaa, joka tunnistaa tällaisen tilanteen ja jättää epäilyttävän painalluksen tekemättä. Käyttäjä nostaa sormen ja yrittää uudelleen, kun sisältö on paikallaan.

*Idealuonnos: suoja on toteutusehdotus, jonka toimivuutta ja sopivia raja-arvoja pitäisi vielä kokeilla.*

## Selain voisi huomata, että kohde vaihtui sormen alta

Ajatus on yksinkertainen: painallusta ei pitäisi tulkita varmaksi tahdonilmaukseksi, jos sen kohde vaihtui juuri ennen osumaa. Käyttäjä ehti päättää painavansa yhtä asiaa, mutta sivu vaihtoi tilalle toisen.

Suoja toimisi selaimessa, joten sen käyttäminen ei edellyttäisi jokaisen verkkosivun korjaamista erikseen. Ensimmäisen kokeilun voisi tehdä Androidille tarkoitetussa Chromium-pohjaisessa selaimessa. Chromium on avoimen lähdekoodin selainprojekti, jonka päälle tällaisen muutoksen voisi rakentaa.

## Muistetaan hetki sitten näkyneet kohdat

Selain pitäisi lyhyttä muistia näkyvän sisällön liikkeistä. Kun sormi koskettaa näyttöä, se tarkistaisi, liikkuiko kosketuskohdan sisältö juuri merkittävästi ja vaihtuiko kohdassa oleva painettava kohde.

Muistiinpanojen alustava tarkasteluikkuna on 50–100 millisekuntia. Jos samassa pisteessä oli esimerkiksi 20 millisekuntia aiemmin linkki A ja nyt painike B, painallus voitaisiin hylätä. Luvut ovat kokeilun lähtökohtia, eivät tutkimuksella vahvistettuja ihmisen havaintokyvyn rajoja.

Pelkkä liike ei riittäisi perusteeksi. Jos sama linkki siirtyy muutaman pikselin mutta sormi osuu edelleen siihen, painalluksen estämisestä olisi vain haittaa. Ratkaisevaa olisi kohteen vaihtuminen yhdessä riittävän tuoreen ja suuren siirtymän kanssa.

## Hylättyä painallusta ei suoriteta myöhemmin

Epäilyttävässä tilanteessa selain ei avaisi kumpaakaan kohdetta eikä jonottaisi painallusta myöhemmäksi. Käyttäjä nostaisi sormen ja painaisi uudestaan. Uusi painallus hyväksyttäisiin normaalisti, jos sisältö olisi ehtinyt vakautua.

Selain voisi samalla antaa hillityn palautteen: kosketus rekisteröitiin, mutta kohde liikkui ja toiminto jätettiin siksi tekemättä. Esimerkiksi lyhyt visuaalinen merkki, värähdys tai tarvittaessa selite voisi erottaa tilanteen siitä, ettei laite huomannut kosketusta lainkaan. Sopiva palautetapa pitäisi kokeilla niin, ettei suoja itse ala häiritä käyttöä.

Väärä hälytys pakottaisi silti käyttäjän yrittämään uudelleen. Kokeilussa pitäisi mitata sekä estettyjä vahinkopainalluksia että aiheettomasti estettyjä oikeita painalluksia ja sitä, ymmärtääkö käyttäjä saamansa palautteen. Suoja olisi hyödyllinen vain, jos se poistaisi enemmän vaivaa kuin aiheuttaisi.

## Sama ajatus voisi ulottua Androidin käyttöliittymään

Selain olisi ensimmäinen kokeilukohde, mutta lopulta suojaa voisi yrittää toteuttaa myös Androidin käyttöliittymätasolla. Esimerkiksi puhelinvalmistaja voisi kokeilla sitä omassa käyttöliittymäversiossaan, jolloin ajatus voisi ulottua verkkosivuilta myös järjestelmän näkymiin ja mahdollisesti sovelluksiin.

Tämä on jatkokehityksen mahdollisuus, ei väite siitä, että selainratkaisun voisi sellaisenaan siirtää koko puhelimeen. Laajempi toteutus vaatisi oman selvityksensä siitä, miten kohteiden liikkeet tunnistetaan ja painallukset käsitellään eri näkymissä. Periaate ja käyttäjälle annettava palaute voisivat silti olla samat.

## Uutuusarvo

Hain vastineita hakusanoilla kuten *layout shift accidental clicks*, *recently moved iframe* ja *browser click stability*. Ongelma ja osa ratkaisusta tunnetaan jo hyvin. Kolme läheistä vastinetta auttavat rajaamaan, mitä tässä oikeastaan ehdotetaan.

### Chromiumissa on jo rajattu suoja

Chromiumin kehittäjien [vuoden 2023 ilmoitus](https://groups.google.com/a/chromium.org/g/blink-dev/c/58JoaBbCao0) kuvaa syötetapahtumien hylkäämistä äskettäin liikkuneista, toiselta alkuperältä upotetuista kehyksistä. Ilmoitus laajensi aiempaa, rajatumpaa suojaa. Painalluksen estäminen liikkeen vuoksi ei siis itsessään ole uusi keksintö.

### Sivun liikkumista osataan mitata

Googlen [CLS-ohje](https://web.dev/articles/cls) käsittelee odottamattomia sisällön siirtymiä ja niiden aiheuttamia virhepainalluksia. Kyse on sivun vakautta kuvaavasta mittarista. Se auttaa tunnistamaan ongelman, mutta mittaaminen ei itsessään määrittele ehdotettua yleistä painallussuojaa.

[Layout Instability -määrittely](https://wicg.github.io/layout-instability/) sisältää tietoja liikkuneiden elementtien aiemmista ja uusista suorakulmioista. Se antaa toteutukselle lähtökohdan. Täydellinen historia siitä, mikä painettava kohde oli jokaisessa näyttöpisteessä, vaatisi kuitenkin omaa toteutustyötä. Pelkkä siirtymien loki ei ole valmis ratkaisu.

### Testiautomaatio odottaa jo vakaata kohdetta

Selainohjelmien testaamiseen käytetty [Playwright](https://playwright.dev/docs/actionability) tarkistaa ennen tavallista automaattista klikkausta muun muassa kohteen vakauden. Vakaus tarkoittaa siinä samaa rajaavaa suorakulmiota vähintään kahdessa peräkkäisessä animaatiokehyksessä. Testityökalun odotus palvelee kuitenkin automaattista toimintoa; tässä ehdotetaan suojaa ihmisen jo aloittamalle painallukselle.

Uutuusehdotus on siis nykyistä laajempi, kohteen vaihtumisen huomioiva suoja tavallisille linkeille ja painikkeille. Näillä hauilla en löytänyt täsmälleen muistiinpanojen mukaista yleistä toteutusta. Tämä ei osoita, ettei sellaista voisi olla olemassa.

## Ongelman mittakaava ja ratkaisun potentiaali

Hyöty syntyisi väärien sivujen avaamisen, paluun ja uuden yrityksen välttämisestä. Maailmanlaajuinen rahaluku vaatisi kuitenkin tietoa vahinkopainallusten yleisyydestä, niiden kustannuksesta ja siitä, kuinka suuren osan suoja todella estäisi. Näille ei tässä ole riittävää pohjaa.

Vertailukohtana on lähitulevaisuus, jossa sivujen tekijät parantavat vakautta ja selaimissa on jo rajattuja suojia. Idean lisäarvo olisi jäljelle jäävien virheiden torjuminen myös sivuilla, joiden toteutukseen käyttäjä ei voi vaikuttaa. Se ei korjaisi itse hypähtävää sivua.

### Pieni helpotus voisi kertautua suureksi vaikutukseksi

Merkitys ei rajoittuisi säästyneisiin sekunteihin. Jos puhelin tekisi harvemmin jotakin muuta kuin käyttäjä tarkoitti, se voisi vähentää digitaalista turhautumista ja tehdä älypuhelimen käytöstä sujuvampaa ja helpommin lähestyttävää. Selkeä palaute auttaisi samalla ymmärtämään, mitä laite teki ja miksi.

Yksittäinen korjattu painallus on pieni asia. Jos parannus toistuisi suuren käyttäjäjoukon arjessa päivästä toiseen, pienelläkin muutoksella voisi olla suuri kokonaisvaikutus. Kyse olisi sekä nykyisen vaivan vähentämisestä että siitä, että puhelimella hoitaminen voisi tuntua useammasta ihmisestä mielekkäältä. Vaikutuksen suuruus pitäisi selvittää käytössä, ei päätellä pelkästä käyttäjämäärästä.

Lisäksi tällainen suoja voisi tehdä hankalista sivuista käyttökelpoisempia ihmisille, joille toistuva tarkka kohdistaminen on vaikeaa. Tämä on mahdollinen jatkokäyttö, ei osoitettu saavutettavuushyöty. Sen arvioimiseksi pitäisi kokeilla suojaa erilaisten käyttäjien ja sivujen kanssa: milloin uusi yritys on pieni helpotus ja milloin se muodostuu uudeksi esteeksi?
