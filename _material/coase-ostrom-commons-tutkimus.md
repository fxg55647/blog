# Lisämateriaali: Coase, Ostrom, commons ja blockchain-kirjallisuus

Käyttäjän ja tutkimusavustajan keskustelusta kerättyä taustamateriaalia ensimmäistä
blogipostausta varten. Ei julkaista sellaisenaan — tarkoitus on synteesi, jossa
yrityksen ja commonsin teoriat yhdistetään ja verrataan Leiman/Neutral Witnessin
rooliin.

## Olemassa oleva tutkimus, joka osuu lähelle

- Frontiers 2021: kysyy, voisiko blockchain skaalata Ostromin commons-governancea
  globaalille tasolle.
- "Crypto commons" -tutkimus (2024): yhdistää blockchain-governancen, common-pool
  resource -teorian sekä ihmisten ja koneiden yhteistoiminnan.
- Ostrom Project: rakentaa digitaalista governance-infrastruktuuria eksplisiittisesti
  Ostromin periaatteiden päälle, yhdistää siihen blockchainin. Vuoden 2024
  summit-raportti käsitteli blockchainin ja AI:n yhdistämistä digital commons
  -hallintaan.
- "Blockchain for Organizing Effective Grass-Roots Actions on a Global Commons:
  Saving the Planet" (2020): mittaa maailman tilaa → data analysoidaan (asiantuntijat/AI)
  → valitaan tehokkaat fyysiset toimet → toteutetaan → monitoroidaan → kierros alkaa
  uudelleen. Mallissa on jo measurement → AI → action → monitoring → governance
  -logiikka.
- Frontiers 2025: käy läpi Ostromin periaatteita blockchain-governancen näkökulmasta.

## Havaittu aukko olemassa olevassa kirjallisuudessa

Kukaan ei näytä sanovan suoraan koko ketjua:

> sensorit + AI + kryptografinen provenance/todistettavuus + persistent ledger +
> digitaalinen identiteetti + mikromaksut + automatisoidut kannustimet →
> commonsin valvonnan ja sopimisen transaktiokustannukset romahtavat →
> ulkoisvaikutuksia voidaan mitata ja hinnoitella lähes reaaliajassa →
> suuri joukko aikaisemmin vaikeita commons-ongelmia muuttuu teknisesti
> ratkaistaviksi.

Kirjallisuus on paloiteltu kolmeen erilliseen keskusteluun:

1. **Blockchain-ihmiset**: ledger + smart contracts voivat parantaa governancea.
2. **AI/commons-ihmiset**: tutkivat yleensä päinvastaista ongelmaa — miten AI
   itsessään aiheuttaa uusia commons-ongelmia (AI-kilpailu, tietoyhteisön
   rapautuminen).
3. **Ostrom-tutkimus**: puhuu monitoroinnista, säännöistä, sanktioista ja
   institutionaalisesta suunnittelusta, mutta ei yleensä tee hyppyä siihen, että
   2020-luvun teknologiapino on tehnyt nämä kaikki radikaalisti halvemmiksi
   yhtä aikaa.

Tämä jälkimmäinen — teknologiapinon samanaikainen kypsyminen ja sen vaikutus
transaktiokustannuksiin laajasti — on käyttäjän oma keskeinen havainto.

## Ostromin periaatteet teknisinä vaatimuksina

| Ostrom-periaate | Nykyteknologian toteutus |
|---|---|
| boundaries | digital identity / geofencing |
| monitoring | sensors / smartphones / satellites |
| verification | Neutral Witness / cryptographic provenance |
| interpretation | AI |
| collective record | ledger |
| sanctions/rewards | programmable payments |
| dispute resolution | AI + human escalation |

## Coase–Ostrom–Williamson (COW-malli)

- Eduardo Ararilin 2013-paperi yhdistää eksplisiittisesti Coasen
  transaktiokustannukset, Ostromin commons-governancen ja Williamsonin
  hallintorakenteet ("COW-malli"). Commonsin toimivuus riippuu pitkälti siitä,
  kuinka kalliita oikeuksien määrittely, valvonta, kannustimet ja toimeenpano
  ovat.
- Cambridge Journal of Economics (2026): sovittaa Coasen transaktiokustannusajattelun
  yhteen Ostromin paikallisten julkistalouksien kanssa — milloin ulkoisvaikutukset
  kannattaa hoitaa markkinoilla, organisaatioissa vai kollektiivisesti.
- Merialueiden hallintaa käsittelevä tutkimus vertaa Coasean bargainingia ja
  Ostromian governancea täydentävinä: Coase vähentää vaihdannan ja neuvottelun
  kitkaa, Ostrom rakentaa instituutiot yhteisen resurssin hallintaan.
  Kalastusosuuskunnat: Ostrom-tyyppinen organisaatio voi itsessään alentaa
  Coase-tyyppisiä transaktiokustannuksia.
- Holmström & Roberts: epätäydellisen informaation maailmassa muodollinen
  organisaatio voi olla markkinaa halvempi koordinointimekanismi.
- Kalifornian pohjavesitutkimus: oikeuksien määrittelyn ja toimeenpanon
  kustannukset selittivät, miksi commons-ongelmaa ei saatu ratkaistua ajoissa.

## Puuttuva synteesi — käyttäjän oma kontribuutio

Ei löytynyt valmista teoriaa tästä ketjusta:

> firma toimii paremmin osittain siksi, että sen sisällä trust-, verification- ja
> commons-ongelmien ratkaiseminen on halvempaa
> → Coase selittää yrityksen rajan transaktiokustannuksilla
> → Ostrom selittää, millä instituutioilla yhteiset resurssit saadaan toimimaan
> → uusi teknologia voi toteuttaa näitä instituutioita myös yritysten ulkopuolella
>   lähes automaattisesti
> → yrityksen sisäisen ja ulkoisen maailman välinen kustannusero pienenee.

Tiivis vastakkainasettelu:

- **Coase**: "Why put it inside a firm? Because market coordination is expensive."
- **Ostrom**: "Why does a commons succeed or fail? Because monitoring, rules,
  boundaries and enforcement are expensive to organize."
- **Leima / Neutral Witness**: "What happens when verification, monitoring and
  enforcement become nearly free?"

Mahdollisia kiteytyksiä:

> As verification costs approach zero, both the boundaries of firms and the
> boundaries of workable commons may expand or dissolve.

> The firm and the commons may be two historical solutions to the same
> underlying problem: trust and coordination were expensive.

Neutral Witnessin/Leiman rooli suhteessa blockchain-visioihin: blockchain antaa
yhteisen muistin, AI antaa tulkinnan, sensorit antavat havainnon — mutta
tarvitaan vielä uskottava ketju havainnosta väitteeseen. Tämä on aukko, jota
moni blockchain-commons-visio ei ratkaise, ja johon Neutral Witness vastaa.

## Lisäulottuvuus postaukseen: suunnitelmatalous → kapitalismi → optimoitu talous

Postauksessa halutaan lisäksi vertailla jossain kohtaa kolmea vaihetta:

1. **Suunnitelmatalous**: yksi keskitetty päätöksentekijä allokoi resurssit.
2. **Kapitalismi joukkona pieniä suunnitelmatalouksia**: yritykset ovat itsessään
   pieniä sisäisiä hierarkioita/suunnitelmatalouksia, mutta niistä osa toimii
   toisia paremmin — markkina valitsee näiden välillä (ks. myös
   uudelleenkirjoitetun muistion luku 4 variaatio/valinta/monistuminen
   -argumentista).
3. **Optimoitu talous**, jossa myös open source on tärkeässä roolissa — avoimen
   lähdekoodin rooli mallina siitä, miten resursseja (koodi, tieto) voidaan
   tuottaa ja jakaa ilman perinteistä yritysrajaa, ja miten tämä kytkeytyy
   protokollatalous-hypoteesiin ja commons-governanceen.
