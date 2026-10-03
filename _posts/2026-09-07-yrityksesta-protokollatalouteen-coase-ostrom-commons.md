---
title: "Yrityksestä protokollatalouteen — Coase, Ostrom ja commons"
date: 2026-09-07 18:00:00 +0300
categories: talous ai commons
---

*Tämä postaus on yhä keskeneräinen työversio — rakenneluonnos ja tiivistelmä,*
*ei viimeistelty teksti. Julkaistu tässä muodossa työn alla olevana muistiona.*

## Tiivistelmä

Yritys ja tragedy of the commons ovat historiallisesti näyttäytyneet
toisilleen vieraina ongelmina — toinen kysymys yrityksen rajoista (Coase),
toinen yhteisten resurssien hallinnasta (Ostrom). Tämä postaus väittää,
että ne ovat pohjimmiltaan sama ongelma: molemmat syntyvät siitä, että
luottamuksen rakentaminen, valvonta ja sopimisen toimeenpano ovat kalliita.
Yritys ratkaisee tämän niputtamalla resurssit hierarkian sisään; toimiva
commons ratkaisee sen Ostromin instituutioilla (rajat, monitorointi,
asteittaiset sanktiot, halpa konfliktinratkaisu); epäonnistuva commons ei
ratkaise sitä lainkaan.

AI-agentit, kryptografinen todistettavuus (attestaatio) ja ohjelmoitavat
sopimukset alentavat juuri niitä kustannuksia — haku, todentaminen,
neuvottelu, valvonta, toimeenpano — joiden takia molemmat instituutiot
ylipäätään syntyivät. Koska kyse on samasta pohjimmaisesta ongelmasta,
sama teknologinen isku ratkaisee molemmat yhtä aikaa, ei kahta erillistä
kehityskulkua.

Tästä seuraa seitsemän konkreettista johtopäätöstä, joita postauksessa
puolustetaan: toimijoiden kyky vaihtaa kumppania kasvaa ja yritykset
voivat pienentyä, kun sekä ulkoiset transaktiot että itse työvoima
muuttuvat agenttipohjaisiksi; open source ja yhteisomistus
kukoistavat uutena kilpailukykyisenä vaihtoehtona suljetulle omistukselle;
talouden tehokkuus kasvaa huomattavasti transaktiokustannusten
vapauttaessa resursseja tuottavampaan käyttöön; maat, joilla on vähiten
institutionaalista kitkaa muutokselle, saavat merkittävän kilpailuedun;
datasiilot purkautuvat, kun asiakas voi todistaa omat tietonsa ilman
datan haltijan suostumusta; toimeenpano halpenee siltä osin kuin
oikeudet tokenisoidaan; ja alustat väistyvät protokollien tieltä siellä,
missä protokollaan liittyminen on halvempaa kuin alustalla pysyminen.

Postaus esittelee myös kirjoittajan oman konseptin, Neutral Witnessin —
koneellisen välikerroksen, joka mahdollistaa toimintakykyisen luottamuksen
syntymisen osapuolten välille ilman että kenenkään tarvitsee paljastaa
salaista tietoaan toisilleen — yhtenä konkreettisena ehdotuksena siitä,
miten näitä kustannuksia käytännössä alennetaan. Ydinhypoteesi ei ole enää
tutkimaton alue: yrityksen ja commonsin yhteys Coasen kehyksessä on jo
Benklerin (2002) *Coase's Penguin* -artikkelin aihe, ja tekoälyagenttien
vaikutusta markkinoihin käsittelee tuore "Coasean singularity"
-kirjallisuus (NBER). Postauksen oma lisä on näiden yhdistäminen
nykyiseen, useamman teknologian yhtäaikaiseen kustannusten laskuun.

Postaus on jaettu kahteen osaan: **osa I** kokoaa aiemman tutkimuksen
(mitä muut ovat jo sanoneet), **osa II** esittää kirjoittajan omat
päätelmät.

*(Tarkistettava vielä kirjoittajan kanssa: onko sävy/pituus oikea, ja*
*puuttuuko jokin keskeinen väite. Neutral Witness -kappale tulee myöhemmin*
*muualla postauksessa merkitä "kirjoittajan näkemys" -laatikkoon; tässä*
*tiivistelmässä sitä ei erotella yhtä eksplisiittisesti, koska abstract on*
*aina jo lähtökohtaisesti tiivistys eikä varsinainen argumentin paikka.)*

Rakenneluonnos ensimmäiselle postaukselle. Lähdemateriaali kokonaisuudessaan
kansiossa `_material/`:

- `_material/uudelleenkirjoitettu-muistio.md` — laaja tutkimusmuistio (Coase,
  Hayek, Williamson, protokollatalouden tekninen pino, Neutral Witness,
  tokenisaatio, tutkimushypoteesit)
- `_material/tyomuistiinpanot.md` — aikaisemmat raakamuistiinpanot samasta
  aiheesta
- `_material/coase-ostrom-commons-tutkimus.md` — COW-malli (Coase–Ostrom–
  Williamson), Ostrom-blockchain-kirjallisuus, Ostromin periaatteet
  teknisinä vaatimuksina, ja puuttuva synteesi

## Kirjoitustapa: kaksi osaa, kolme tasoa

Postaus jaetaan kahteen peräkkäiseen osaan: **osa I (aiempi tutkimus)**
sisältää vain tason 1, **osa II (kirjoittajan omat päätelmät)** tasot 2
ja 3. Rajan pitää olla lukijalle selvä: kaikki osa I:ssä on jonkun muun
sanomaa ja lähteistettyä, kaikki osa II:ssa on kirjoittajan omaa —
vaikka osa II viittaakin osa I:n lähteisiin.

Sama periaate kuin alkuperäisessä muistiossa (luku 0), mutta nyt
läpileikkaavana tyylikeinona koko postauksessa, ei vain alkuun kirjoitettuna
varauksena:

1. **Vakiintunut teoria** — Coase, Ostrom, Williamson, Hayek: esitetään
   normaalina leipätekstinä. *(Osa I.)*
2. **Tässä postauksessa johdettu synteesi** — esim. COW-mallin ja
   protokollatalouden yhdistäminen: merkitään selkeästi synteesiksi.
   *(Osa II.)*
3. **Kirjoittajan oma johtopäätös / konsepti** — erityisesti Neutral Witness,
   mutta myös lopun kärjistetyt johtopäätökset (ks. alla) — nostetaan
   **omaksi, visuaalisesti erottuvaksi laatikoksi** tekstin sekaan, esim.:
   *(Osa II.)*

   > **Kirjoittajan näkemys.** [teksti tähän]

   Ei siis vain yksi maininta dokumentin alussa, vaan toistuva merkintätapa
   aina kun siirrytään vakiintuneesta teoriasta tai yhteisestä synteesistä
   kirjoittajan omaan, vielä todentamattomaan väitteeseen. Neutral
   Witness -kappale (nykyisen jäsennyksen kohta 6) kirjoitetaan kokonaan
   tämän laatikkomuodon sisään, ei tavallisena leipätekstinä.

## Mahdollinen jäsennys

**Osa I — Aiempi tutkimus**

1. **Yritys transaktiokustannusten ratkaisuna** (Coase) — lyhyt, pohjustava.
2. **Commons hallinnan ongelmana** (Ostrom) — miksi yhteiset resurssit
   onnistuvat tai epäonnistuvat: boundaries, monitoring, sanktiot, halpa
   konfliktinratkaisu.
3. **COW-malli**: Coase, Ostrom ja Williamson samassa kehyksessä (Araral 2013;
   Aligica 2014) — commonsin toimivuus riippuu oikeuksien määrittelyn,
   valvonnan, kannustimien ja toimeenpanon kustannuksista.
4. **Olemassa oleva blockchain × commons -kirjallisuus** — mitä on jo tehty
   (Frontiers 2021/2025, Ostrom Project, "crypto commons", grass-roots-paperi)
   ja miksi se silti jää paloitelluksi (blockchain-governance vs.
   AI-commons-riskit vs. Ostrom-instituutiot erikseen).

**Osa II — Kirjoittajan omat päätelmät**

5. **Puuttuva synteesi / kattoteesi**: mitä tapahtuu, kun verifiointi,
   monitorointi ja toimeenpano lähestyvät nollakustannusta samanaikaisesti
   usean kypsyneen teknologian ansiosta? Ydinväite: "The firm and the
   commons may be two historical solutions to the same underlying problem:
   trust and coordination were expensive."
6. **[Kirjoittajan näkemys -laatikko] Neutral Witnessin paikka tässä**:
   blockchain antaa yhteisen muistin, AI antaa tulkinnan, sensorit antavat
   havainnon — mutta tarvitaan uskottava ketju havainnosta väitteeseen. Tämä
   on aukko jota Neutral Witness täyttää. Koko kappale merkitään
   kirjoittajan omaksi konseptiksi/johtopäätökseksi, ei vakiintuneeksi
   teoriaksi eikä yhteiseksi synteesiksi.
7. **Kolmivaiheinen talousvertailu**:
   - suunnitelmatalous (yksi keskitetty allokoija)
   - kapitalismi joukkona pieniä kilpailevia suunnitelmatalouksia (yritykset),
     joista osa toimii toisia paremmin — markkina valitsee (linkitys
     uudelleenkirjoitetun muistion lukuun 4: variaatio → valinta →
     monistuminen)
   - optimoitu talous, jossa protokollat/commons-mekanismit ja open source
     ovat keskeisessä roolissa resurssien tuottamisessa ja jakamisessa ilman
     perinteistä yritysrajaa
8. **Tapausvertailu: jäykkä vs. ketterä talous** (uusi osio, ks. oma kohta
   alla)
9. **[Kirjoittajan näkemys -laatikko] Datasiilojen purkautuminen ilman
   haltijan suostumusta** — asiakas todistaa ehjällä laitteella mitä
   palvelu näytti (II.5)
10. **[Kirjoittajan näkemys -laatikko] Tokenisaatio: arvo järjestelmän
    sisälle** — kaksi tasoa, "kaikki voi olla tokenisoitavissa" ja sen
    raja, kytkentä toimeenpanoon (II.6)
11. **[Kirjoittajan näkemys -laatikko] Protokollat alustojen tilalle** —
    mikromaksut ja koodauksen halpeneminen, esimerkkinä kokousprotokolla
    (II.7)
12. **[Kirjoittajan näkemys -laatikko] Päätöksenteko: kuka saa äänen** —
    osapuoliryhmät, Hansmann, kontribuutio ja vertaisarvio (II.8)
13. **[Kirjoittajan näkemys -laatikko] Johtopäätökset** (ks. oma kohta alla)
14. **Mitä teoria ei väitä / varaukset** — sama varovaisuus kuin
    alkuperäisessä muistiossa: uutuusväitteet ovat hypoteeseja ennen
    systemaattista prior-art-kartoitusta.

---

## Osa I: Aiempi tutkimus

*Tässä osassa on vain se, mitä muut ovat jo sanoneet. Kirjoittajan omat
päätelmät alkavat osasta II.*

### I.1 Coase ja Ostrom: yritys ja commons

Ronald Coase kysyi vuonna 1937, miksi tuotantoa ylipäätään organisoidaan
yrityksissä, jos hintamekanismi voi koordinoida resursseja. Vastaus oli,
että markkinoiden käyttäminen itsessään maksaa: sopivan vastapuolen
etsiminen, väitteiden todentaminen, ehdoista neuvotteleminen ja
sopimusten toimeenpano synnyttävät kustannuksia, ja yritys voi korvata
osan näistä toistuvista markkinatransaktioista organisaation sisäisellä
ohjauksella (Coase, 1937). Elinor Ostrom osoitti puolestaan
vuosikymmeniä myöhemmin, että yhteisiä resursseja — kalavesiä,
metsälaitumia, kastelujärjestelmiä — voidaan hallita kestävästi ilman
yksityistämistä tai valtion pakkoa, kunhan tietyt institutionaaliset
ehdot täyttyvät: selkeät käyttöoikeuksien rajat, paikalliseen
kontekstiin sovitettu monitorointi, asteittaiset sanktiot ja halpa
konfliktinratkaisu.

Näitä kahta tutkimusperinnettä ei ole tarpeen keksiä yhdistettäväksi
tyhjästä — se on jo tehty. Paul Dragos Aligica on rakentanut
"institutionaalisen diversiteetin" teoriaa, joka
asettaa Coasen, Ostromin ja Williamsonin saman analyyttisen kehyksen
sisään (Aligica, *Institutional Diversity and Political Economy: The
Ostroms and Beyond*, Oxford University Press, 2014). Yhteinen havainto
on, että sekä yrityksen raja että toimivan commonsin raja määräytyvät
lopulta samasta asiasta: kuinka kalliita oikeuksien määrittely, valvonta,
kannustimet ja toimeenpano ovat kussakin tapauksessa.

Yochai Benkler (2002) rakensi saman sillan digitaaliseen talouteen jo
kaksi vuosikymmentä sitten. *Coase's Penguin* -artikkelissa hän esitti
yritysten ja markkinoiden rinnalle kolmannen tuotantotavan,
commons-pohjaisen vertaistuotannon (esimerkkinä Linux), ja selitti sen
Coasen kehyksellä: kun viestinnän kustannukset laskevat ja työ voidaan
pilkkoa moduuleiksi, osallistujien yhteistyö voi olla tehokkaampaa kuin
yrityksen hierarkia tai markkinasopimukset. Benklerin vertaistuotanto ei
perustu hintoihin, joten sitä ei pidä samaistaa agenttien väliseen
kaupankäyntiin.

Eduardo Araral sovelsi samaa Coase–Ostrom–Williamson-yhdistelmää
empiirisesti Filippiinien noin 400 vuotta vanhoihin
zangjera-kastelujärjestelmiin: polysentrinen paikallinen hallinto alensi
viljelijöiden sopeutumistoimien transaktiokustannuksia paremman
toimeenpanon, markkinoille pääsyn, osuuskuntien ja muodollisten
sopimusten kautta (Araral, 2013). Tuoreimpana Rayamajhee ja Paniagua
(2026) pyrkivät yhdistämään Coasen, Buchananin ja Ostromin
lähestymistavat ulkoisvaikutusten hallintaan yhdeksi kehykseksi:
milloin ulkoisvaikutus kannattaa hoitaa markkinoilla, organisaatiossa
tai kollektiivisesti.

### I.2 AI-agentit ja transaktiokustannukset: tuore kirjallisuus

Tuoreempi kirjallisuus on alkanut kysyä, mitä tapahtuu kun AI-agentit
alentavat näitä kustannuksia rajusti. Shahidi, Rusak, Manning, Fradkin
ja Horton käsittelevät NBER-luvussaan "The Coasean Singularity? Demand,
Supply, and Market Design with AI Agents" sitä, miten kuluttajien
agentit muuttavat markkinoita, yritysten valintoja ja markkinasuunnittelua.
Agentit voivat alentaa transaktiokustannuksia, mutta ne voivat myös
lisätä ruuhkaa ja hintojen hämärtämistä, ja hyvinvointivaikutus jää
empiiriseksi kysymykseksi. Luku on ilmestynyt NBER:n työpajaversiona
vuonna 2025 ja myöhemmin teosversiona. Rinnakkaisessa, toisessa kirjallisuushaarassa Ostromin
periaatteita on alettu soveltaa suoraan agenttipohjaiseen
commons-hallintaan: "Kami of the Commons: Towards Designing Agentic AI
to Steward the Commons" (arXiv 2602.14940) kuvaa spekulatiivisen
suunnittelun kautta AI-"stewardeja", jotka toteuttavat Ostromin
graduated sanctions- ja mutual monitoring -periaatteita, ja käsittelee
myös poistumisoikeutta sekä sitä, miten itse hallintaa suorittavaa
agenttia hallitaan. "Ostrom
Amongst the Machines: Blockchain as a Knowledge Commons" (Bodon,
Bustamante ym., Pitt Law) käsittelee blockchainia knowledge commonsina
nimenomaan Ostromin kehyksessä. Empiirisemmältä suunnalta Liya
Palagashvili (Mercatus Center, GMU) on kuvannut Coase-pohjaisessa
tutkimuksessaan, että yhden hengen yrityksiksi arvioitujen
perustamishakemusten määrä on kasvanut nopeimmin AI-altistuneilla
toimialoilla ("AI, Transaction Costs, and a Quiet Shift Toward
Self-Employment"). Tekijä itse kutsuu tulosta alustavaksi ja
kuvailevaksi: hakemukset eivät suoraan mittaa syntyneitä yrityksiä, eikä
aineisto osoita syy-yhteyttä. Tulos on siis signaali, ei näyttö siitä,
että transaktiokustannusten aleneminen siirtää tuotantoa pois
yrityksistä.

### I.3 Aukko: kaksi kirjallisuushaaraa, jotka eivät kohtaa

Aukko on kapeampi kuin ensi silmäyksellä näyttää. Benkler (2002) on jo
selittänyt commonsin ja yrityksen rinnakkaiselon samalla Coasen
kustannuskehyksellä, Rozas ym. (2021) ovat käsitelleet Ostromin
periaatteiden toteuttamista lohkoketjulla tokenisaatio ja sääntöjen
automatisointi mukaan lukien, ja *Kami of the Commons* käsittelee
poistumisoikeutta. Sen sijaan kaksi tuoretta kirjallisuushaaraa —
"AI-agentit muuttavat yrityksen rajaa" ja "AI/blockchain voi toteuttaa
Ostromin periaatteita" — eivät vielä juuri viittaa toisiinsa. Osa II
yrittää yhdistää ne: sama nykyinen kustannusten lasku (agentit,
attestaatio, tokenisaatio) tarkasteltuna sekä yrityksen rajan että
commonsin hallinnan kannalta. Tämä on rajattu synteesi, ei väite
tutkimattomasta alueesta.

*(Lähteet osa I:een: Coase, R. H. (1937). The Nature of the Firm.
Economica, 4(16), 386–405. — Araral, E. (2013). A transaction cost
approach to climate adaptation: Insights from Coase, Ostrom and
Williamson and evidence from the 400-year old zangjeras. Environmental
Science & Policy, 25, 147–156. — Rayamajhee, V. & Paniagua, P. (2026).
The anatomy of externalities. Cambridge Journal of Economics,
[doi:10.1093/cje/beag003](https://doi.org/10.1093/cje/beag003). — Aligica, P. D. (2014). Institutional
Diversity and Political Economy: The Ostroms and Beyond. Oxford
University Press. — Benkler, Y. (2002). Coase's Penguin, or, Linux and
The Nature of the Firm. Yale Law Journal, 112(3), 369–446,
[benkler.org](https://www.benkler.org/CoasesPenguin.html). — Rozas, D.,
Tenorio-Fornés, A., Díaz-Molina, S. & Hassan, S. (2021). When Ostrom
Meets Blockchain: Exploring the Potentials of Blockchain for Commons
Governance. SAGE Open, 11(1),
[doi:10.1177/21582440211002526](https://doi.org/10.1177/21582440211002526). — Shahidi, P., Rusak, G.,
Manning, B. S., Fradkin, A. & Horton, J. J. "The Coasean Singularity? Demand, Supply, and
Market Design with AI Agents", NBER, 2025,
[nber.org/system/files/chapters/c15309/c15309.pdf](https://www.nber.org/system/files/chapters/c15309/c15309.pdf).
— "Kami of the Commons: Towards Designing Agentic AI to Steward the
Commons", [arXiv:2602.14940](https://arxiv.org/html/2602.14940). —
Bodon, H., Bustamante, P. ym. "Ostrom Amongst the Machines: Blockchain
as a Knowledge Commons",
[scholarship.law.pitt.edu/fac_articles/402](https://scholarship.law.pitt.edu/fac_articles/402/).
— Palagashvili, L. "AI, Transaction Costs, and a Quiet Shift Toward
Self-Employment",
[labormarketmatters.com/p/ai-and-independent-work-in-7-charts](https://www.labormarketmatters.com/p/ai-and-independent-work-in-7-charts).
Täydellinen lista `_material/prior-art-haku.md`:ssä.)*

### I.4 Datan siirrettävyys ja lähteen todistaminen

Yksilön datan siirtämistä organisaatiosta toiseen on lähestytty kahdesta
suunnasta.

**Organisaation kautta.** EU:n tietosuoja-asetuksen artikla 20 antaa
henkilölle oikeuden saada tietonsa koneluettavassa muodossa ja siirtää ne
toiselle palveluntarjoajalle. Maksupalveludirektiivi PSD2 (2015/2366)
velvoittaa pankit avaamaan tilitiedot asiakkaan valtuuttamille
kolmansille osapuolille (open banking). Suomalaislähtöinen MyData-liike
on ajanut ihmiskeskeistä henkilötiedon hallintaa, ja Tim Berners-Leen
Solid-projekti henkilökohtaisia "data podeja". W3C:n Verifiable
Credentials -standardi ja EU:n digitaalinen identiteettilompakko (eIDAS
2.0, asetus 2024/1183) mahdollistavat, että organisaation
digitaalisesti allekirjoittama väite kulkee ihmisen mukana ja
vastaanottaja voi todentaa sen lähteen itse. Kaikille näille on yhteistä,
että **organisaation on osallistuttava**: se joko luovuttaa datan,
avaa rajapinnan tai allekirjoittaa väitteen — vapaaehtoisesti tai
sääntelyn pakottamana.

**Ilman organisaation osallistumista.** Toinen, tuoreempi linja kysyy,
voiko käyttäjä todistaa mitä verkkopalvelu hänelle näytti ilman että
palvelu tekee mitään. DECO (Zhang, Maram, Malvai, Goldfeder & Juels, ACM
CCS 2020) osoitti, että käyttäjä voi tuottaa kryptografisen todisteen
TLS-yhteyden yli palvelimelta saadusta datasta — ja paljastaa siitä vain
valitun osan (esim. "saldo ylittää X") — ilman palvelimen muutoksia tai
suostumusta. Samaa "zkTLS"-periaatetta toteuttavat mm. TLSNotary sekä
tuotteistetut Reclaim Protocol ja Opacity. Heikompana, mutta
käytännössä yleisempänä vaihtoehtona toimivat laiteattestaatioon
nojaavat kaappaukset: Androidin laitteistopohjainen avainattestaatio ja
Play Integrity API antavat palvelimelle todisteen siitä, että sovellus
ajetaan muokkaamattomana aidolla, lukitulla laitteella.

### I.5 Ilmailu: rahtidronet, ilmatilan sääntely ja osien jäljitettävyys

Autonominen rahtikuljetus droneilla on jo arkikäytössä muutamissa
maissa. Ruanda käynnisti lokakuussa 2016 maailman ensimmäisen
kansallisen drone-toimituspalvelun: Ziplinen dronet kuljettavat verta
tilauksesta sairaaloihin, aluksi 21 verensiirtoja tekevään
hoitolaitokseen maan länsiosassa. Ghana seurasi huhtikuussa 2019
"Fly-To-Save-A-Life"-palvelulla, joka kattaa arviolta 2 000
terveydenhuollon toimipistettä neljästä jakelukeskuksesta ja jota Ghanan
hallitus on kuvannut maailman suurimmaksi lääketoimitusten
drone-palveluksi. Lancet
Global Healthissa julkaistu tutkimus on arvioinut Ruandan
veritoimitusten vaikutuksia.

EU:ssa droneilla tapahtuva näköyhteyden ulkopuolinen lentäminen (BVLOS)
kuuluu EASA:n "specific"-luokkaan. Siinä operaattori tarvitsee joko
ilmoituksen valmiin standardiskenaarion (STS) mukaisesti, luvan
riskiarvion (SORA tai valmis PDRA-arvio) perusteella tai laajemman
operaattorisertifikaatin (LUC), joka antaa oikeuden hyväksyä omia
operaatioitaan. Miehittämättömän ilmaliikenteen hallinnan
U-space-kehys (täytäntöönpanoasetukset (EU) 2021/664, 2021/665 ja
2021/666) tuli voimaan 26.1.2023, mutta U-space-alueita on käytössä
vasta osassa jäsenmaita; EASA ja komissio ovat ehdottaneet kevennettyä
"U-space light" -mallia käyttöönoton nopeuttamiseksi.

Ilmailun turvallisuus nojaa myös paperiseen todistusketjuun: jokaisen
varaosan mukana kulkee lentokelpoisuustodistus (Authorised Release
Certificate). Brittiläinen varaosavälittäjä AOG Technics myi vuosina
2019–2023 yli 60 000 moottorinosaa, pääosin CFM56-moottoreihin,
väärennetyillä todistuksilla. Petos paljastui vuonna 2023, kun lentoyhtiö
tarkisti osan aitouden valmistajalta. Koneita asetettiin tilapäisesti
lentokieltoon eri puolilla maailmaa, tappiot arvioitiin noin 39 miljoonaksi
punnaksi, ja yhtiön johtaja tuomittiin neljän vuoden ja kahdeksan
kuukauden vankeuteen.

*(Lähteet kohtaan I.5: Gavi, "Rwanda launches world's first national
drone delivery service powered by Zipline",
[gavi.org](https://www.gavi.org/news/media-room/rwanda-launches-worlds-first-national-drone-delivery-service-powered-zipline).
— Ghana Drone Delivery Service,
[Ghanan terveysministeriö](https://moh.gov.gh/ghanas-medical-drone-delivery-system-takes-off/).
— "Using drones to deliver blood products in Rwanda", *The Lancet Global
Health*,
[thelancet.com](https://www.thelancet.com/journals/langlo/article/PIIS2214-109X(22)00095-X/fulltext).
— Hogan Lovells, "Rising to new challenges – the EU's legal framework for
widespread commercial drone operations",
[hoganlovells.com](https://www.hoganlovells.com/en/publications/rising-to-new-challenges-the-eus-legal-framework-for-widespread-commercial-drone-operations).
— Unmanned Airspace, "EASA, European Commission propose new 'U-space
light'",
[unmannedairspace.info](https://www.unmannedairspace.info/uncategorized/39180/).
— Aerospace Global News, "AOG Technics boss jailed for 4 years in £40m
fake aircraft parts fraud",
[aerospaceglobalnews.com](https://aerospaceglobalnews.com/news/aog-technics-director-jailed-fake-cfm56-parts/).
— FlightGlobal, "Fraudulent UK spares firm generated nearly £7m from
unapproved CFM56 parts",
[flightglobal.com](https://www.flightglobal.com/mro/2026/02/fraudulent-uk-spares-firm-generated-nearly-7m-from-unapproved-cfm56-parts/).
— FlyingMag, "Zipline Drone Delivery Secures Latest BVLOS Approval in
Wave of FAA Exemptions",
[flyingmag.com](https://www.flyingmag.com/zipline-drone-delivery-secures-latest-bvlos-approval-in-wave-of-faa-exemptions/).)*

### I.6 Tokenisaatio: olemassa olevia rakenteita

Tokenisaatiolla tarkoitetaan oikeuden esittämistä siirrettävänä,
ohjelmoitavana merkintänä hajautetussa kirjanpidossa. Kaksi esimerkkiä
havainnollistaa, mitä on jo käytössä.

**Chia Asset Token (CAT).** Chia-lohkoketjun CAT on yleinen
vaihdettavan tokenin standardi. Kunkin tokenin säännöt määrittelee sen
TAIL-ohjelma (Token Asset Issuance Limiter): miten tokenia lasketaan
liikkeeseen, miten sitä saa käyttää ja voiko sen sulattaa takaisin.
Standardin toinen versio (CAT2) korvasi ensimmäisen heinäkuussa 2022
tietoturva-auditoinnissa löytyneen haavoittuvuuden vuoksi. CAT ei ole
itsessään arvopaperi vaan rakennuspalikka, jolla voidaan toteuttaa
monenlaisia omaisuus- ja saatavarakenteita.

**Pareto Credit Vaults.** Pareto on yksityisen luoton markkinapaikka,
jossa lainanantajat tallettavat USDC:tä holviin ja saavat vastineeksi
tokenin, joka edustaa niiden lainapositiota ja kertyvää korkoa.
Luottoa arvioi ja valvoo kuraattori, lainaaminen on rajattu
KYC/KYB-tunnistetuille osapuolille, ja suhdetta sääntelee ketjussa
allekirjoitettu puitelainasopimus. Holvien tokeneita on käytetty
vakuutena muissa hajautetun rahoituksen protokollissa. Pareto on
esimerkki hybridistä, jossa ketjun tila ja juridinen sopimusrakenne
toimivat yhdessä.

*(Lähteet kohtaan I.6: Chia Documentation, "CATs",
[docs.chia.net/academy-cat](https://docs.chia.net/academy-cat/), ja "CAT2
Intro and FAQ",
[docs.chia.net/guides/cat2-intro](https://docs.chia.net/guides/cat2-intro/).
— Pareto Docs, [docs.pareto.credit](https://docs.pareto.credit/). —
Pareto, "FalconX Credit Vault As Collateral on Morpho and Gauntlet",
[paragraph.com/@pareto](https://paragraph.com/@pareto/falconx-credit-vault-collateral-morpho-gauntlet).
— BIS (2023). The tokenisation continuum. BIS Bulletin 72,
[bis.org](https://www.bis.org/publications/bulletin-72-tokenisation-continuum).)*

### I.7 Protokollat ja alustat

Internetin varhaiset peruspalvelut, sähköposti (SMTP) ja web (HTTP), ovat
avoimia protokollia, joita kuka tahansa voi toteuttaa. Myöhemmin
viestintä ja sosiaalinen media keskittyivät suljetuille alustoille. Mike
Masnick (2019) esitti, että kehitys pitäisi kääntää: protokollat alustojen
sijaan, jolloin palveluntarjoajat kilpailisivat saman protokollan päällä.
Twitterin silloinen toimitusjohtaja Jack Dorsey mainitsi esseen, kun hän
käynnisti hankkeen avoimesta sosiaalisen median standardista; hankkeesta
kehittyi Bluesky. Vastakkaisen kannan esitti Signalin perustaja Moxie
Marlinspike (2016): hajautetut, federoidut järjestelmät jäävät paikalleen,
koska muutoksista on sovittava kaikkien toteuttajien kesken, ja siksi
nopeasti kehittyvä ekosysteemi vaatii keskittämistä.

Sama jännite näkyy etäpalavereissa. Microsoftin PowerPoint Live lähettää
Teams-kokouksessa esityksen osallistujille dokumenttina eikä
ruudunjakovideona. Microsoftin mukaan tämä vie huomattavasti vähemmän
kaistaa kuin ruudunjako, ja osallistujat voivat esimerkiksi selata
kalvoja itse ja nähdä ne tekstitettyinä tai käännettyinä. Ratkaisu toimii
kuitenkin vain Microsoftin alustan sisällä.

*(Lähteet kohtaan I.7: Masnick, M. (2019). Protocols, Not Platforms: A
Technological Approach to Free Speech. Knight First Amendment Institute,
[knightcolumbia.org](https://knightcolumbia.org/content/protocols-not-platforms-a-technological-approach-to-free-speech).
— Marlinspike, M. (2016). Reflections: The ecosystem is moving. Signal
blog. — Microsoft, "Share slides in Microsoft Teams meetings with
PowerPoint Live",
[support.microsoft.com](https://support.microsoft.com/en-us/teams/meetings/share-slides-in-microsoft-teams-meetings-with-powerpoint-live).)*

### I.8 Päätöksenteko ja omistus

Henry Hansmann (1996) selitti Coasen kehyksessä, miksi yritysten
omistajina on sijoittajien lisäksi asiakkaita (osuuskunnat),
työntekijöitä tai tuottajia. Omistus päätyy sille osapuoliryhmälle, joka
minimoi markkinasopimisen kustannusten ja omistamisen kustannusten summan.
Omistamisen kustannuksista keskeinen on kollektiivinen päätöksenteko:
mitä erilaisemmat omistajien edut, sitä kalliimpaa. Siksi useamman
osapuoliryhmän yhteisomistus on historiallisesti ollut harvinaista.

Avoimissa ohjelmistoprojekteissa päätösvalta on usein sidottu
tekemiseen. Apache Software Foundationin "Apache Way" perustuu
ansaittuun auktoriteettiin: nykyiset committerit äänestävät uusista
committereista, ja projektin johtoryhmä (PMC) valitsee uudet jäsenensä
kontribuutioiden perusteella. Kontribuutioiden automaattista mittaamista
on myös kokeiltu. SourceCred laski yhteisön jäsenille PageRank-tyyppisellä
algoritmilla pisteet ja jakoi niiden perusteella tokeneita; sitä
ylläpitänyt organisaatio lopetti toimintansa, mutta ohjelmisto on yhä
avoimesti saatavilla. Optimism-kollektiivin Retroactive Public Goods
Funding palkitsee jälkikäteen: valitut arvioijat jakavat rahoitusta
hankkeille sen perusteella, mikä osoittautui hyödylliseksi. Perusteluna
on, että on helpompaa sopia siitä, mikä oli hyödyllistä, kuin siitä, mikä
tulee olemaan.

Mekanismisuunnittelussa on kehitetty menetelmiä, jotka palkitsevat
rehellisistä arvioista silloinkin, kun oikeaa vastausta ei tiedetä:
vertaisennustemenetelmä (peer prediction; Miller, Resnick & Zeckhauser,
2005) ja Prelecin (2004) "Bayesian Truth Serum". Neliöllisessä
äänestyksessä (Posner & Weyl, 2018) äänten hinta kasvaa neliöllisesti,
jolloin asiasta voimakkaasti välittävä voi painottaa kantaansa mutta ei
voi ostaa päätöstä.

*(Lähteet kohtaan I.8: Hansmann, H. (1996). The Ownership of Enterprise.
Belknap Press of Harvard University Press. — The Apache Software
Foundation, "Merit – The Apache Way",
[theapacheway.com/merit](https://theapacheway.com/merit/). — SourceCred,
"SourceCred (The Organization) Is Winding Down",
[discourse.sourcecred.io](https://discourse.sourcecred.io/t/sourcecred-the-organization-is-winding-down/1383).
— Optimism, "RetroPGF: Impact = Profit Framework",
[gov.optimism.io](https://gov.optimism.io/t/retropgf-impact-profit-framework/7034).
— Miller, N., Resnick, P. & Zeckhauser, R. (2005). Eliciting Informative
Feedback: The Peer-Prediction Method. Management Science, 51(9),
1359–1373. — Prelec, D. (2004). A Bayesian Truth Serum for Subjective
Data. Science, 306(5695), 462–466. — Posner, E. A. & Weyl, E. G. (2018).
Radical Markets. Princeton University Press.)*

### I.9 Muut lähteet, joihin osa II nojaa

*(Lähteet kohtaan I.4: EU:n yleinen tietosuoja-asetus (EU) 2016/679, art.
20. — Maksupalveludirektiivi (EU) 2015/2366 (PSD2). — Asetus (EU)
2024/1183 (eIDAS 2.0, voimaan 20.5.2024; jäsenmaiden on tarjottava EU
Digital Identity Wallet joulukuuhun 2026 mennessä). — W3C, Verifiable
Credentials Data Model v2.0, W3C Recommendation 15.5.2025,
[w3.org/TR/vc-data-model-2.0](https://www.w3.org/TR/vc-data-model-2.0/). — Zhang, F., Maram, D., Malvai, H., Goldfeder, S.
& Juels, A. (2020). DECO: Liberating Web Data Using Decentralized Oracles
for TLS. ACM CCS 2020,
[doi:10.1145/3372297.3417239](https://dl.acm.org/doi/10.1145/3372297.3417239).
— TLSNotary, Reclaim Protocol, Opacity. — Android Key Attestation ja Play
Integrity API (Android-dokumentaatio).)*

Osa II käyttää lisäksi seuraavia olemassa olevia tuloksia; ne esitellään
tarkemmin siinä kohdassa, jossa niitä käytetään:

- **Hirschman (1970), *Exit, Voice, and Loyalty***: tyytymätön toimija
  voi joko poistua (*exit*) tai yrittää vaikuttaa (*voice*) — pohja
  vaihtokyvyn ja vaikutusmahdollisuuden erottelulle (II.1).
- **Hayek (1945)**: hajautettu tieto ja sen hyödyntäminen
  hintajärjestelmän kautta — pohja kolmivaiheisen talousvertailun
  episteemiselle argumentille (II.3).
- **Leeson (2007), "Better Off Stateless: Somalia"**: dokumentoi
  valtiotonta, klaani- ja sopimuspohjaista kaupankäyntiä ja
  turvallisuuden järjestämistä (II.4, piste 4).
- **Machiavelli, *Ruhtinas* — condottieri-ongelma**: palkatut asejoukot,
  jotka saattoivat kaapata tai kiristää työnantajaansa renessanssin
  Italian kaupunkivaltioissa (II.4).
- **Historialliset vapaakaupungit ja -satamat**, jotka houkuttelivat
  kauppiaita ympäristöään paremman oikeusjärjestyksen ja turvallisuuden
  ansiosta (II.4).
- **RAND, "Confidential Computing, Secure Enclaves, and Attestation"**:
  TEE-attestaatio todistaa identiteetin, ei käyttäytymistä (II.2).
- **confidential.ai ja NVIDIA H100**: ZK-todisteiden ja TEE-attestaation
  yhdistelmä käytännössä sekä laitteistotason confidential computing
  kiihdyttimissä (II.2).

---

## Osa II: Kirjoittajan omat päätelmät

*Kaikki tästä eteenpäin on kirjoittajan omaa synteesiä ja näkemystä — ei
vakiintunutta teoriaa. Viittaukset osa I:n lähteisiin eivät tarkoita, että
lähteet sanoisivat samaa.*

### II.1 Kattoteesi: yritys ja commons ovat sama ongelma — ja niihin voi nyt vastata samalla tavalla

*(Kirjoitettu kokonaan auki koekappaleeksi — loput jäsennyksen kohdista
ovat yhä luonnostasolla yllä.)*

Tässä on tämän muistion oma synteesi: **sama infrastruktuuri,
joka tekee markkinatransaktiosta yrityksen sisäisen koordinoinnin
kaltaisen — halpa haku, todennettava väite, matala neuvottelukustannus,
automaattinen toimeenpano — voi tehdä commonsista yrityksen kaltaisesti
koordinoitavan ilman että commonsista tulee yritys.** Yritys ja tragedy
of the commons eivät ole kaksi erillistä ongelmaa, jotka sattuvat
molemmat liittyvät luottamukseen; ne ovat sama transaktiokustannus- ja
luottamusongelma kahdessa eri institutionaalisessa muodossa — toinen
ratkaisi sen omistamalla, toinen (onnistuessaan) ratkaisi sen Ostromin
instituutioilla, ja kumpikaan ratkaisu ei ollut ainoa mahdollinen, vaan
se paras saatavilla oleva kompromissi silloin kun verifiointi,
monitorointi ja toimeenpano olivat kalliita. Kun nämä kustannukset
romahtavat samanaikaisesti usean kypsyneen teknologian ansiosta, ei ole
syytä olettaa että vaikutus rajoittuisi vain toiseen näistä
institutionaalisista muodoista.

**Rajat: todentaminen ei ole toimeenpanoa, eikä pienuus ole
hajautumista.** Halpa todentaminen vähentää yhtä syytä keskittää
toimintaa suuriin organisaatioihin. Se ei kuitenkaan poista
mittakaavaetuja, infrastruktuuririippuvuuksia eikä toimeenpanon
tarvetta. Rikkomuksen todistaminen ei vielä tuo korvausta: tarvitaan
myös järjestelyt vastuun kantamiseen, riitojen ratkaisemiseen ja
päätösten toteuttamiseen. Halpa todentaminen ei itsessään takaa halpaa
toimeenpanoa. Toimeenpano voi halventua lähinnä silloin, kun arvo on
järjestelmän sisällä — esimerkiksi vakuutena sulkutilillä tai
ohjelmoitavassa sopimuksessa, jolloin rikkomus voi laukaista
seuraamuksen automaattisesti. Kun vastapuolen omaisuus on järjestelmän
ulkopuolella, tarvitaan edelleen tuomioistuin. Tokenisaatio on keino
siirtää arvoa järjestelmän sisälle (ks. II.6).

Siksi vallan hajautumista ei voi päätellä pelkästään yritysten koosta.
Olennaista on, voiko toimija vaihtaa kumppania ja jatkaa toimintaansa
ilman nykyisen portinvartijan lupaa. Tämä edellyttää muodollisen
lähtöoikeuden lisäksi käyttökelpoisia vaihtoehtoja ja kohtuullisia
vaihtokustannuksia. Todentamiskerroksen omistus ja hallinta vaikuttavat
siihen, toteutuvatko nämä ehdot: kerros voi olla julkinen, yksityinen
tai yhteisesti hallittu, eikä yhteinen riippuvuus siitä vielä tee siitä
yhteisesti hallittua. Vaihtokyky ei myöskään ole vallan ainoa mittari —
Hirschmanin (1970) termein *exit* rinnalla merkitsee *voice*, eli
mahdollisuus vaikuttaa yhteisiin sääntöihin.

Väite on tarkistettavissa: jos se pitää, toimijoiden
vaihtokustannusten pitäisi laskea mitattavasti niillä aloilla, joilla
todentaminen halpenee, riippumatta siitä, pienenevätkö yritykset.

### II.2 Neutral Witness: kirjoittajan oma konsepti

> **Kirjoittajan näkemys.** Neutral Witness ei ole vakiintunutta
> teoriaa eikä tässä muistiossa johdettua yhteistä synteesiä, vaan
> kirjoittajan oma tuote- ja arkkitehtuurikonsepti. Sitä ei esitetä
> maailmanlaajuisesti uutena teknisenä keksintönä ilman erillistä
> prior-art-tutkimusta — sen taloudellinen rooli on kuitenkin
> määriteltävissä selkeästi.
>
> Neutral Witness ei ole pelkkä fact-checking-palvelu. Se on
> luottamuksellinen koneellinen välikerros, joka voi vastaanottaa yhden
> tai useiden osapuolten aineistoa — myös sellaista, jota vastapuolet
> eivät saa nähdä — soveltaa ennalta sovittuja sääntöjä, ja palauttaa
> vain kullekin osapuolelle sallitun tuloksen. Toimintalogiikka
> tiivistyy muotoon **Observe → Verify → Attest**.
>
> **Käyttötapaus: monen osapuolen salaisten tietojen yli tapahtuva
> laskenta.** Myyjä voi antaa järjestelmälle salaisia teknologia-,
> asiakas- tai taloustietoja; ostaja voi antaa omat salaiset
> hyväksymisrajansa. Neutral Witness arvioi yhteensopivuuden ja
> palauttaa rajatun tuloksen ("ehto täyttyy", riskiluokka)
> paljastamatta kaikkia lähtötietoja. Sama periaate soveltuu suljettuihin
> huutokauppoihin, due diligenceen ja agenttien välisiin hankintoihin.
> LLM itsessään ei ratkaise luottamuksellisuuden tai todennettavuuden
> ongelmaa — tekninen toteutus voi eri riskitasoilla nojata
> luottamukselliseen suoritusympäristöön (TEE), MPC:hen,
> zero-knowledge-todisteisiin tai näiden yhdistelmiin.
>
> **Käyttötapaus: sisäinen valvontakerros.** Kun yksi ihminen delegoi
> sadoille agenteille tehtäviä, principal ei ehdi tarkistaa jokaista
> välitulosta manuaalisesti. Neutral Witness -tyyppinen kerros voi
> toimia portinvartijana ennen kuin agentin tulos käynnistää maksun,
> sopimuksen tai uuden agenttiketjun. Tämä tekee siitä symmetrisen
> mekanismin: sama arkkitehtuuri voi alentaa sekä yritysten välisiä
> luottamuskustannuksia että principal-agent-kustannuksia yhden
> organisaation sisällä — mutta kasvattaa samalla oman
> valvontakerroksensa kriittisyyttä, koska väärä tai kompromettoitu
> todentaja voisi monistaa virheen laajaan agenttiverkostoon.
>
> **Käyttötapaus: fyysisen toimituksen todentaminen.** Rahtidrone on
> samalla anturi: sen sijainti, aika ja toimituskuittaus ovat
> koneellisesti luettavaa evidenssiä. Neutral Witness voi todeta, että
> toimitus tapahtui sovitussa paikassa ja ajassa, ja vapauttaa maksun
> ilman että kummankaan osapuolen tarvitsee luottaa toisen ilmoitukseen
> — Observe → Verify → Attest fyysisessä maailmassa. Rajoitus on sama
> kuin muussakin anturidatassa: todiste on vain niin luotettava kuin
> laite, joka sen tuottaa (vrt. laiteattestaatio, II.5).
>
> **Rehellisen datan mekanismisuunnittelu.** Neutral Witnessin hyöty
> riippuu siitä, että sille toimitettu evidenssi on kattavaa ja aidosti
> kytköksissä todelliseen maailmaan — muuten järjestelmästä tulee
> institutionaalinen Goodhart-kone. Kannustinraja voidaan kirjoittaa
> muotoon `E[hyöty vilpistä] < p(havaitseminen) x seuraamus + menetetty
> vakuus + mainehaitta + tulevan pääsyn arvo + juridinen vastuu` — sama
> logiikka jota sovelletaan jäljempänä turvallisuuden tarjoajien
> lojaalisuuteen neljännessä maavertailupisteessä (piraattikaupunki,
> ks. II.4).
> Tavoite on totuudellinen minimidata: kerätään se, mikä on päätöksen
> kannalta tarpeellista ja voidaan todentaa — ei kaikkea mikä teknisesti
> olisi mahdollista kerätä.
>
> **Miksi tämä ei ole vain TEE-attestaatio.** Olemassa oleva
> confidential-computing-kirjallisuus tekee tärkeän eron:
> laitteistopohjainen TEE-attestaatio todistaa *identiteetin* ("mikä
> ohjelmisto ajettiin"), ei *käyttäytymistä* ("käyttäytyikö ohjelmisto
> oikein") (RAND, "Confidential Computing, Secure Enclaves, and
> Attestation"). Tämä on täsmälleen se ero, jonka Neutral Witnessin
> pitää ratkaista: sen verdict koskee sisällön arviointia, ei pelkkää
> suoritusympäristön identiteettiä. Käytännön esimerkkejä
> ZK-todisteiden yhdistämisestä TEE-attestaatioon on jo olemassa (esim.
> confidential.ai), ja laitteistotason confidential computing on
> tulossa myös kiihdyttimiin itseensä (NVIDIA Hopperin H100). Neutral
> Witness rakentuisi siis olemassa olevien rakennuspalikoiden päälle,
> ei tyhjästä — sen oma kontribuutio olisi nimenomaan verdict-kerroksessa
> (mitä väitettä arvioidaan, kenelle tulos palautetaan), ei alla
> olevassa kryptografisessa infrastruktuurissa.

*(Lähteet: RAND, "Confidential Computing, Secure Enclaves, and
Attestation",
[rand.org](https://www.rand.org/pubs/tools/TLA4174-1/ai-security/appendixes/appendix-a/confidential-computing-etc.html).
— confidential.ai, "Zero-Knowledge Proofs at Confidential",
[confidential.ai/docs/zk](https://confidential.ai/docs/zk). Täydellinen
lista `_material/prior-art-haku.md`:ssä, osio 6.)*

### II.3 Kolmivaiheinen talousvertailu: suunnitelmatalous, kapitalismi, optimoitu talous

Yrityksen ja markkinan välinen jännite näyttäytyy selkeimmin, kun sen
asettaa historialliseen kolmivaiheiseen kehykseen. Kehys on tarkoituksella
heuristinen — ei deterministinen historialaki, vaan tutkimushypoteesi
siitä, miten koordinaatioteknologian hinnan lasku voi siirtää
institutionaalisia rajoja.

**Vaihe I: suunnitelmatalous.** Yksi keskitetty allokoija päättää, kuka
saa käyttää mitäkin resurssia. Tämän mallin heikkous ei ole ensisijaisesti
moraalinen vaan episteeminen: jos suunnittelija on väärässä, koko
järjestelmä on väärässä samalla tavalla. Yhteisen virheen riski on korkea,
koska mitään rinnakkaista, riippumatonta koetta ei tehdä.

**Vaihe II: kapitalismi joukkona pieniä kilpailevia suunnitelmatalouksia.**
Kapitalismi ei poistanut suunnittelua — se hajautti sen suureen määrään
keskenään kilpailevia yrityksiä. Yrityksen sisällä on edelleen hierarkia
ja suunnittelu (ks. I.1 yllä); yritysten *välillä* toimivat hinnat,
kilpailu, markkinoille tulo, poistuminen ja konkurssi. Tämän episteeminen
etu ei ole se, että joku yritys tietäisi oikean vastauksen etukäteen,
vaan että useat toimijat voivat testata rinnakkain erilaisia hypoteeseja:
osa epäonnistuu, mutta jokin voi osua taidon tai sattuman kautta lähemmäs
toimivaa ratkaisua, ja markkina voi sen jälkeen monistaa onnistumista —
**variaatio → valinta → monistuminen** (vrt. Hayek, 1945, hajautetun
tiedon hyödyntämisestä hintajärjestelmän kautta). Hajautetun järjestelmän
etu ei siis ole erehtymättömyys vaan virheiden matala korrelaatio:
keskitetty järjestelmä voi monistaa yhden yhteisen virheen kaikkialle,
hajautettu järjestelmä voi olla väärässä monella eri tavalla
samanaikaisesti — ja juuri tämä variaatio on se, mistä markkina voi
myöhemmin valita.

**Vaihe III: optimoitu talous, jossa protokollat ja open source ovat
keskeisessä roolissa.** Kaksi samanaikaista vaikutusta murtaa vaiheen II
vakiintunutta muotoa. Ensinnäkin sisäinen automatisointi laskee yrityksen
sisäisen työvoiman kustannusta: yksi ihminen voi AI-agenttien avulla
johtaa paljon suurempaa määrää tehtäviä kuin ennen. Toiseksi ulkoisen
koordinoinnin halpeneminen (protokollat, attestaatiot, ohjelmoitavat
sopimukset) laskee ulkoisen koordinoinnin kustannusta: sama ihminen voi
agenttien avulla ostaa ulkoa työn, kapasiteetin, datan tai logistiikan
tarpeen mukaan sen sijaan, että palkkaisi kaiken pysyvästi — "yksi
ihminen + N AI-agenttia + avoimet protokollamarkkinat" korvaa joissakin
tehtävissä vanhan portaan "yksi ihminen → tiimi → osasto → yritys".
Ensimmäisiä signaaleja tästä on jo nähtävissä (Palagashvilin kuvaileva
havainto yhden hengen yritysten perustamishakemuksista, I.2), mutta
syy-yhteyttä ei ole vielä osoitettu.

Digitaalisen koordinoinnin halpeneminen ei yksin riitä fyysisessä
taloudessa: kun sopimukset, maksut ja todentaminen hoituvat agenttien
kesken, pullonkaulaksi jää tavaran liikkuminen. Autonomiset rahtidronet
(I.5) ovat tämän fyysinen vastinpari. Ne eivät alenna Coasen
tarkoittamaa transaktiokustannusta vaan kuljetuskustannusta — ero on
syytä pitää selvänä — mutta ne tekevät logistiikasta samalla tavalla
tilauksesta ostettavaa kuin laskennasta tai työstä: pienikin toimija voi
ostaa kuljetuksen tarpeen mukaan ilman omaa kalustoa tai pitkää
sopimusta suuren kuljetusyhtiön kanssa. Mitä pidemmälle molemmat
kehittyvät yhtä aikaa, sitä pienempi yksikkö pystyy toimimaan myös
fyysisessä taloudessa.

Open source ei ole tässä vaiheessa uusi keksintö vaan jo olemassa oleva
todiste siitä, että kolmas vaihe on osittain mahdollinen: se on commons,
joka toimii ilman perinteistä yritysrajaa nimenomaan siksi, että sen
koordinointikustannukset (koodin haku, väitteen — "tämä toimii" —
todentaminen, versionhallinta, ylläpitäjien maineeseen perustuva
laadunvalvonta) ovat poikkeuksellisen alhaiset verrattuna vastaavaan
suljettuun kehitykseen. Tämä on sama ilmiö kuin kohdan II.1 kattoteesi:
sama infrastruktuuri, joka tekee markkinatransaktiosta yrityksen sisäisen
koordinoinnin kaltaisen, voi tehdä commonsista yrityksen kaltaisesti
koordinoitavan ilman että commonsista tulee yritys. Jos protokollatalouden
hypoteesi pitää paikkansa laajemmin, open source ei jää poikkeukseksi
vaan yleistyy: yhä useampi resurssiluokka voi toimia samalla periaatteella
kuin avoin lähdekoodi nyt toimii.

*(Lähteet: Hayek, F. A. (1945). The Use of Knowledge in Society.
American Economic Review, 35(4), 519–530. Muu materiaali
`_material/tyomuistiinpanot.md`, osiot 4 ja 14, ja
`_material/uudelleenkirjoitettu-muistio.md`, osio 12.)*

### II.4 Tapausvertailu — neliportainen institutionaalisen kitkan asteikko

Tarkoitus havainnollistaa protokollatalous-hypoteesia konkreettisella,
ajatuskoemuotoisella vertailulla — **ei empiirinen ennuste**, vaan
heuristinen skenaario samaan tapaan kuin "Coasean heaven" muualla
muistiossa. Kaksi pistettä (jäykkä vs. ketterä) ei vielä testaa
hypoteesia sen ääripäässä, koska myös ketterimmillä vakiintuneilla
demokratioilla on puolueet ja hallinto, jotka voivat vastustaa muutosta.
Siksi neljä pistettä yhden asteikon eri kohdissa — kaksi viimeistä
eroavat toisistaan siinä, onko taustalla jo toimiva (vaikkakin pieni tai
epädemokraattinen) valtiorakenne, vai ei mitään:

1. **Jäykkä suuri talous: Saksa.** Tunnettu vahvasta, hyvin toimivasta
   mutta hitaasta byrokratiasta; institutionaalinen ja kansallinen
   muutosvastarinta digitalisaatiolle on laajalti dokumentoitu (esim.
   fax- ja paperiprosessien pitkä elinkaari julkishallinnossa, hidas
   digitaalisen identiteetin käyttöönotto). Transaktiokustannusten
   aleneminen (protokollat, AI-agentit, digitaalinen identiteetti,
   attestaatiot) etenee hitaasti institutionaalisen jäykkyyden takia,
   vaikka tekninen kyvykkyys olisi olemassa.
2. **Ketterä mutta silti vakiintunut pieni talous: Viro.** Pieni,
   digihallinnossa edelläkävijä (e-Residency, X-Road), omaksuu
   protokollatalouden teknologiapinon nopeasti — mutta silti
   demokraattinen valtio vakiintunein puoluein ja hallintorakentein,
   joilla on oma muutosvastarintansa. Ei siis testaa hypoteesia sen
   ääripäässä, vaan välipisteenä.
3. **Pieni tehokas hallinto tai auktoritaarinen johto vahvalla
   kansalaistuella: nimeämätön "paratiisisaari".** Ei kiinnitetä
   oikeaan maahan tai alueeseen. Baseline-oletus: toimiva valtiorakenne
   on jo olemassa — vain hyvin pieni, kevyt ja tehokas (tai
   vaihtoehtoisesti auktoritaarinen mutta legitiimiksi koettu), jolloin
   päätöksiä ei tarvitse neuvotella laajan puoluekentän tai jäykän
   hallintokoneiston läpi. Kansalaisten vahva tuki (tai auktoritaarisen
   johdon kyky sivuuttaa vastustus) tekee koko teknologiapinon
   käyttöönotosta lähes kitkatonta muihin pisteisiin verrattuna.
4. **Aidosti valtioton/anarkkinen tausta, josta yksi kaupunki nousee
   alhaalta ylös: esimerkkikonteksti Somalian kaltainen tilanne.**
   Tässä ei ole edes pientä toimivaa hallintoa taustalla — koko
   järjestys pitäisi rakentaa tyhjästä. Konkreettinen skenaario:
   yksittäinen kaupunki alkaa ostaa turvallisuutta yksityisiltä
   toimijoilta (palkatuilta turvallisuusyrityksiltä) ja rakentaa oman
   digitaalisen, kryptografisesti todennettavan päätöksentekonsa ilman
   minkäänlaista kansallisen tason valtiorakennetta. Tämä on akateemisesti
   tunnistettu malli, ei pelkkä ajatusleikki — Peter Leesonin "Better Off
   Stateless: Somalia" -tutkimus (2007) dokumentoi juuri tällaista
   valtiotonta, klaani- ja sopimuspohjaista kaupankäyntiä ja
   turvallisuuden järjestämistä (ks. `_material/prior-art-haku.md`).
   *(Metodinen huomautus: käytetään tässä yhtenä analyyttisenä
   esimerkkinä olemassa olevaan tutkimukseen nojaten, ei väitteenä
   koko maan nykytilanteesta — sama varovaisuus kuin muualla
   muistiossa.)*

   **Täsmennys: tämä piste ei ole "anarkia" siinä mielessä että kaikki
   olisi sallittua, vaan kannustinyhteensopivan yksityisen hallinnon
   testi.** Ero pisteeseen 3 on juuri se, että täällä ei ole valmista
   valtiorakennetta antamassa perälautaa — jos kannustimet pettävät,
   koko järjestys romahtaa, koska ei ole ylempää tahoa joka pelastaisi
   tilanteen. Ostettujen turvallisuuden tarjoajien kannustimet on siis
   suunniteltava tietoisesti tukemaan järjestelmää eivätkä kaappaamaan
   sitä — historiallinen varoitus tästä on condottieri-ongelma (palkatut
   asejoukot, jotka saattoivat kaapata tai kiristää työnantajaansa
   renessanssin Italian kaupunkivaltioissa; Machiavelli varoitti tästä
   nimenomaisesti Ruhtinaassa).

   Ratkaisu on sama kannustinlogiikka kuin Neutral Witnessin
   rehellisen datan mekanismisuunnittelussa (ks. II.2 yllä):
   `E[hyöty petoksesta] < p(havaitseminen) x seuraamus + menetetty
   tulevan pääsyn arvo + mainehaitta`. Jos sekä turvallisuuden
   tarjoajat että kaupungin asukkaat saavat osuuden tulevasta
   talouskasvusta (ei vain kertakorvausta), petoksen/kapinan odotusarvo
   jää pienemmäksi kuin lojaalisuuden pitkän aikavälin tuotto. Jos
   tähän vielä lisätään erillinen kannustin *paljastaa* kapinayrityksiä
   (Ostromin graduated sanctions- ja mutual monitoring -periaatteiden
   mukaisesti), kertaluonteinen petosriski muuttuu toistuvaksi peliksi,
   jossa lojaalisuus on dominoiva strategia — tuloksena yksi mahdollinen
   polysentrisen (Ostrom-tyyppisen) hallinnan muoto ilman perinteistä
   valtiota, ei kaaos.

   **"Piraattikaupunki": itsevahvistuva ero ja houkutusvoima.** Jos
   piste 4:n kaupunki käyttää osan kasvavasta taloudestaan huippuluokan
   turvallisuuteen (esim. parempi aseistus ja valvonta kuin ympäröivässä
   kaaoksessa), turvallisuusero ympäröivään alueeseen ei pysy vakiona
   vaan kasvaa itsestään: parempi turvallisuus houkuttelee yritteliästä
   väkeä, mikä kasvattaa veropohjaa/resursseja, mikä rahoittaa vielä
   parempaa turvallisuutta. Sama itsevahvistuva dynamiikka tunnetaan
   historiallisista vapaakaupungeista ja -satamista, jotka houkuttelivat
   kauppiaita nimenomaan ympäristöään paremman oikeusjärjestyksen ja
   turvallisuuden ansiosta. Karkea kärkiluku havainnollistamaan: jos
   piste 4:n kaupunki kasvaisi 10 vuoden aikavälillä esimerkiksi 10x
   nopeammin kuin piste 1 (Saksa), ero näkyisi jyrkkänä käyränä — puhtaan
   heuristinen luku, ei ennuste.

   **Rinnakkainen kokeilu ja selviytyminen.** Teoriassa tällaisia
   piraattikaupunkeja voisi syntyä monia samanaikaisesti eri puolilla
   valtiotonta aluetta. Useimmat epäonnistuisivat todennäköisesti —
   condottieri-kaappaus, ulkoinen valloitus, sisäinen kannustinjärjestelmän
   pettäminen — mutta yksi tai muutama saattaisi selvitä ja menestyä.
   Tämä on täsmälleen sama "variaatio → valinta → monistuminen"
   -logiikka, joka esiteltiin jo yleisenä episteemisenä argumenttina
   kolmivaiheisen talousvertailun vaiheessa II (II.3 yllä): hajautettu,
   rinnakkainen kokeilu ei ole
   arvokasta siksi että jokainen yritys onnistuisi, vaan siksi että
   harvempien onnistumisten malli voidaan sen jälkeen monistaa muualle.
   Piraattikaupunki-skenaario on siis konkreettinen ilmentymä samasta
   periaatteesta, jota muistio muutenkin soveltaa instituutioihin
   yleisemmällä tasolla.

Asteikon neljä pistettä yhdessä havainnollistavat pääväitettä: mitä
vähemmän institutionaalista kitkaa, sitä nopeammin ja täydellisemmin
transaktiokustannusten alenemisen hyödyt realisoituvat — kytkeytyy
suoraan johtopäätökseen 4 ("maat joissa vähemmän jäykkiä esteitä
saavat kilpailuedun"). Pisteet 3 ja 4 eroavat toisistaan siinä, että
piste 3 on nopea *ja* vakaa (valtiorakenne antaa perälaudan), kun taas
piste 4 olisi nopein mutta myös haurain (ei perälautaa, kaikki riippuu
kannustinsuunnittelun onnistumisesta).

#### Tarkennus: mistä "institutionaalinen kitka" oikeastaan koostuu

"Jäykkyys" ei tarkoita pelkkää hallinnon *hitautta* (paperiprosessit,
fax) — se on eri kysymys kuin se, onko autonomisten agenttien toiminta
ylipäätään *laillisesti sallittua*. Sama maa voi pärjätä eri tavalla
kussakin kolmesta erillisestä osatekijästä, ja kaikki kolme vaikuttavat
siihen missä kohtaa neliportaista asteikkoa maa todellisuudessa on:

1. **Hallinnon oma automaatioaste.** Jos julkishallinto ei automatisoi
   *omia* prosessejaan (rekisterit, lupa-asiat, notariaattitoiminnot)
   samaan tahtiin kuin yksityinen sektori, hallinnosta tulee itsestään
   pullonkaula riippumatta siitä kuinka pitkälle yritysten välinen
   protokollatalous muuten on edennyt — transaktio törmää lopulta
   viranomaisrajapintaan, joka on yhä käsityötä.
2. **Lainsäädännön sallivuus autonomisille agenteille.** Voiko AI-agentti
   allekirjoittaa sitovan sopimuksen, hallita maksuja tai toimia
   attestaation vastuutahona ilman ihmisen kättä pidemmällä? Nopeakin
   hallinto voi silti tukkia koko mekanismin lainsäädännöllä, joka vaatii
   ihmisen allekirjoitusta tai ihmisen vastuunkantoa jokaisessa
   vaiheessa.
3. **Lakien muutosnopeus.** Ei riitä että sääntely sallii uuden
   teknologian rinnalla — kilpailuedun ratkaisee se, kuinka nopeasti maa
   pystyy purkamaan legacy-portinvartijaroolit, jotka nyt ovat lain
   *vaatimia*, ei vain totunnaisia. Esimerkki: jos notaarin, virallisen
   kääntäjän tai muun ihmisvälittäjän rooli on kirjattu lakiin
   pakollisena riippumatta siitä onko kryptografinen attestaatio
   teknisesti yhtä luotettava, tekninen kyvykkyys ei siirry
   kilpailueduksi ennen kuin laki muuttuu. Pisteiden 3 ja 4 nopea kasvu
   selittyy juuri tällä: kummassakaan ei ole vastaavia lakiin kirjattuja
   ihmisvälikäsiä purettavana lainkaan — piste 4:ssä koska lakia
   kansallisella tasolla ei ole ylipäätään, piste 3:ssa koska
   pienuus/tehokkuus mahdollistaa uuden sääntelyn kirjoittamisen
   suoraan alusta ilman legacy-taakkaa.

Näiden kolmen osatekijän erottelu on tärkeä myös siksi, että ne voivat
liikkua eri tahtiin: maa voi olla nopea kohdassa 1 mutta hidas kohdassa
3, tai päinvastoin. Neliportainen asteikko yllä on siis yksinkertaistus
useammasta rinnakkaisesta akselista, ei yhdestä.

**Esimerkki: rahtidronet.** Rahtidronet ovat ehkä selvin tämänhetkinen
esimerkki siitä, että kilpailuedun ratkaisee lupa eikä tekniikka.
Ruanda (2016) ja Ghana (2019) ottivat droneilla tehtävät
lääketoimitukset kansalliseen käyttöön vuosia ennen rikkaita maita:
Yhdysvalloissa Zipline sai ilmailuviranomaisen (FAA) Part 135
-lentotoimintasertifikaatin kesäkuussa 2022 ja erillisen luvan
kaupallisiin toimituksiin näköyhteyden ulkopuolelle syyskuussa 2023;
Lontoossa NHS ilmoitti sairaaloiden välisten näytekuljetusten
drone-kokeilusta syyskuussa 2024 (I.5). Tekninen kyvykkyys oli
samaa — Zipline on kalifornialainen yritys — mutta ero syntyi siitä,
kuinka nopeasti ilmatila ja toimintaluvat saatiin järjestettyä. EU:ssa
sama tekniikka törmää osatekijään 2 (BVLOS-lento vaatii ilmoituksen,
luvan tai sertifikaatin) ja osatekijään 3 (U-space-kehys on voimassa,
mutta sen käyttöönotto etenee jäsenmaa kerrallaan). Ruanda ja Ghana
eivät kuitenkaan ole asteikon pisteitä 3 tai 4 sellaisenaan: ne ovat
toimivia valtioita, jotka tekivät kapean, tarkoin rajatun poikkeuksen.
Aloituspäivien ero ei myöskään eristä sääntelyn vaikutusta: myös
reitit, kuljetustarve, kalusto ja hyväksytty riskitaso eroavat maiden
välillä. Esimerkki havainnollistaa mekanismia, ei todista sitä.

- **Aikaväli: ehdotus 10 vuotta (2026 → 2036).** Riittävän lyhyt
  tuntuakseen ajankohtaiselta ja konkreettiselta, mutta riittävän pitkä
  että koronkorko-tyyppinen kasvuero (esim. 8–10 %/v pisteessä 2 vs.
  1–2 %/v pisteessä 1 vs. vielä nopeampi pisteissä 3–4) ehtii näkyä
  silmin nähden BKT-kuilun repeämisenä — 20–25 vuotta alkaisi tuntua
  liian abstraktilta/kaukaiselta lukijalle.
- **Metodinen varaus**: merkitään selvästi ajatuskokeeksi/skenaarioksi,
  ei ennusteeksi tai empiiriseksi vertailututkimukseksi — samalla
  varovaisuudella kuin muualla muistiossa (uutuusväitteet = hypoteeseja).

### II.5 Datasiilot purkautuvat: asiakas todistaa tietonsa itse

> **Kirjoittajan näkemys.** Osan I.4 organisaatiolähtöiset ratkaisut
> (GDPR:n siirto-oikeus, PSD2, allekirjoitetut todisteet) edellyttävät,
> että datan haltija toimii. Siksi datasiilot purkautuvat niillä vain
> sääntelyn tahdissa, ja juuri tässä jäykkä maa (II.4, piste 1) jää
> jälkeen. Kirjoittajan väite on, että siilon purkamiseen ei tarvita
> haltijan suostumusta lainkaan: asiakas näkee oman datansa jo nyt —
> nettipankissa, koirarekisterissä, vakuutusyhtiön portaalissa — ja riittää,
> että hän voi *todistaa* mitä näki.
>
> **Mekanismi.** Asiakas avaa palvelun Leiman omassa selainnäkymässä ja
> tallentaa näkymän. Sovellus kirjaa verkkotunnuksen ja HTTPS-yhteyden,
> rajaa ja peittää kaiken mitä asiakas ei halua näyttää, ja sitoo kuvan
> ja metatiedot tarkistussummalla, joka leimataan aikaleimalla.
> Hyväksytään vain ehjät laitteet: rootatut, avatun käynnistyslataimen
> tai muokatun sovelluksen laitteet hylätään kaikilla käytettävissä
> olevilla keinoilla (laitteistopohjainen avainattestaatio, Play
> Integrity). Vastaanottaja — toinen pankki, vuokranantaja, vakuuttaja —
> saa todisteen, jonka lähteen se voi arvioida kysymättä alkuperäiseltä
> palvelulta mitään.
>
> **Mitä tämä todistaa ja mitä ei.** Aikaleima todistaa, että kaappaus
> oli olemassa tiettynä hetkenä eikä sitä ole muutettu sen jälkeen.
> Laiteattestaatio ja sovelluksen oma kaappaus tekevät sivun
> väärentämisestä ennen kaappausta vaikeaa, mutta luottamus siirtyy
> osin laitevalmistajalle ja Googlelle — tämä on käytännöllinen, ei
> kryptografisesti ehdoton tae. zkTLS (I.4) olisi vahvempi, koska todiste
> syntyy itse TLS-yhteydestä; se on luonteva seuraava askel samalle
> mekanismille. Kummassakaan tapauksessa todiste ei kerro, onko
> palvelun näyttämä tieto *totta* — vain sen, että palvelu näytti sen.
>
> **Taloudellinen seuraus.** Datasiilo on Coasen mielessä
> transaktiokustannus: asiakkaan vaihtaessa palveluntarjoajaa luottamus
> on rakennettava alusta, koska vanha historia ei siirry uskottavasti.
> Kun asiakas voi viedä todennetun historiansa mukanaan ilman
> haltijan yhteistyötä, organisaatiot menettävät kyvyn lukita asiakasta
> datalla, ja kilpailu siirtyy palvelun laatuun. Tämä on
> institutionaalisen kitkan *ohittamista*, ei sen purkamista: jäykkä
> maa voi hidastaa virallisia rajapintoja, mutta ei estää asiakasta
> todistamasta mitä omalla näytöllään näkee.
>
> **Kytkentä vaihtokykyyn (II.1).** Datasiilojen purkaminen on
> vaihtokyvyn periaatteen konkreettinen sovellus. Datan siirrettävyys
> vahvistaa asiakkaan asemaa siinä määrin kuin se mahdollistaa
> palveluntarjoajan vaihtamisen ja toiminnan jatkamisen muualla. Pelkkä
> mahdollisuus ladata tiedot ulos ei vielä riitä, jos niiden käyttö
> edellyttää edelleen vanhaa palvelua. Attestoitu todiste täyttää tämän
> ehdon paremmin kuin raakadatan vienti, koska vastaanottaja voi
> arvioida sen ilman alkuperäistä palvelua.

### II.6 Tokenisaatio: arvo järjestelmän sisälle

> **Kirjoittajan näkemys.** Tokenisaatiolla on kaksi taloudellisesti
> hyvin erilaista tasoa.
>
> **Taso 1: olemassa olevan saatavan tokenisointi.** Token edustaa
> osaketta, velkaa tai rahasto-osuutta. Lohkoketju tehostaa siirtoa,
> selvitystä ja ohjelmoitavuutta, mutta tokenin sisältö riippuu
> edelleen siitä, kuka on juridisesti velvollinen ja mitä oikeuksia
> haltijalla on ketjun ulkopuolella. Pareton holvit (I.6) ovat tämän
> tason hybridi. Yrityksen resurssiraja ei tällä tasolla välttämättä
> muutu: olemassa oleva rakenne vain digitalisoituu.
>
> **Taso 2: tuotannollisen oikeuden natiivi tokenisointi.** Tokenina on
> itse tuotannollinen oikeus: laskenta-aika, koneen kapasiteettislotti,
> kuljetusikkuna, patentin käyttöoikeus tietyllä toimialalla, pääsy
> dataan tietyin kyselyrajoin tai oikeus lunastaa suoritus, jos
> attestaatiokriteeri täyttyy. Token ei välttämättä ole vapaasti
> siirrettävä tai spekulatiivinen; se voi olla myös siirtokelvoton
> käyttövaltuus tai sulkutilillä oleva oikeus. Tämä taso muuttaa
> yrityksen rajaa suoraan: markkinoille tulee oikeuksia, jotka aiemmin
> olivat implisiittisesti yrityksen sisällä. Chian CAT-standardin
> kaltaiset ohjelmoitavat tokenit (I.6) ovat tähän tarvittava
> rakennuspalikka.
>
> **Esimerkki: ilmailun resurssimarkkina.** Varaosat, huoltopaikat,
> työkalut, miehistöt sekä rahti- ja dronekapasiteetti ovat ilmailussa
> usein olemassa mutta informaation ja luottamuksen siiloissa.
> Huoltoslotti tai rahtikapasiteetti on juuri tason 2 tuotannollinen
> oikeus, jonka voisi tarjota koneellisesti löydettävänä ja kaupattavana.
> Kaupan ehto on kuitenkin luottamus osan alkuperään, ja AOG Technics
> -tapaus (I.5) osoittaa, että paperinen todistusketju on väärennettävissä.
> Kun todistus ja huoltohistoria attestoidaan lähteellä, aitouden voi
> tarkistaa kysymättä jokaiselta ketjun välikädeltä erikseen, ja Neutral
> Witness voi todentaa luvanvaraiset dokumentit paljastamatta niitä
> jokaiselle mahdolliselle ostajalle. Pitkän aikavälin visio on
> reaaliaikainen kapasiteettimarkkina, ei pelkkä uusi listausportaali.
> Raja on sama kuin muussakin attestaatiossa: se todistaa, kuka väitteen
> esitti, ei sitä, että fyysinen osa vastaa väitettä.
>
> **Periaatteessa kaikki voi olla tokenisoitavissa.** Mikä tahansa
> oikeus, joka voidaan määritellä, voidaan esittää tokenina. Token on
> kuitenkin vain niin hyvä kuin sen kytkös todelliseen oikeuteen: talon
> token ei häädä asukasta, jos tuomioistuin ei tunnusta sitä. Tämä on
> sama raja kuin "todentaminen ei ole totuus" (II.1). Raja ei
> kuitenkaan kulje digitaalisen ja fyysisen välillä vaan tosiasiallisessa
> hallinnassa: token toimii itsestään vain, jos protokolla itse hallitsee
> resurssia, johon oikeus kohdistuu. Tokenisoitu laskentaoikeuskin
> riippuu palveluntarjoajasta, joka voi jättää sen toteuttamatta, ja
> fyysinen oikeus toimii vain siinä määrin kuin laki tunnustaa tokenin.
> Tokenisaatio ei myöskään poista luotto-, säilytys- tai hallintoriskiä
> (BIS 2023), ja maksujen automatisointi onnistuu usein myös
> tavallisella tietokannalla tai sulkutilillä. Lohkoketjun tarve on
> osoitettava kussakin käyttötapauksessa erikseen.
>
> **Kytkentä toimeenpanon rajaan.** II.1:n mukaan toimeenpano halpenee
> lähinnä silloin, kun arvo on järjestelmän sisällä. Tokenisaatio on
> nimenomaan keino tuoda arvo järjestelmän sisälle: kun oikeus on
> tokenina sulkutilillä tai vakuutena, rikkomus voi laukaista
> seuraamuksen ilman tuomioistuinta. Postauksen argumentti etenee siis
> kolmessa vaiheessa:
>
> 1. todentaminen halpenee (attestaatio, Neutral Witness, II.2);
> 2. toimeenpano halpenee siltä osin kuin oikeudet on tokenisoitu;
> 3. vaihtokyky kasvaa, koska siirrettävä oikeus kulkee toimijan mukana
>    — Pareton holvitokenin käyttö vakuutena toisessa protokollassa on
>    tästä pieni esimerkki.
>
> Ilman tokenisaatiota argumentti pysähtyy toimeenpanon rajaan.
> Tokenisaation kanssa se jatkuu — mutta vain niin pitkälle kuin
> tokenisointi ulottuu.
>
> **Raja.** Tokenisaatio ei itsessään hajauta valtaa. Token voi yhtä
> hyvin vahvistaa keskitettyä liikkeeseenlaskijaa, jos oikeuksien lähde
> ja hallinta pysyvät keskitettyinä. Multi-issuance-tyyppinen token,
> jonka liikkeeseenlaskija voi lyödä tai jäädyttää, on rakenteeltaan
> lähempänä yrityksen sisäistä kirjanpitoa kuin commonsia.

### II.7 Protokollat alustojen tilalle

> **Kirjoittajan näkemys.** Alusta on yritys, protokolla on commons.
> Alustalla koordinointi tapahtuu yhden omistajan sisällä, protokollassa
> yhteisten sääntöjen varassa, joita kuka tahansa voi toteuttaa.
> Protokollat hävisivät alustoille kahdesta syystä (I.7): niistä on
> vaikea ansaita, ja ne kehittyvät hitaasti, koska muutoksista on
> sovittava. Kirjoittajan väite on, että molemmat esteet ovat
> madaltumassa:
>
> - **Mikromaksut** tekevät protokollan käytöstä ansaittavaa ilman, että
>   sen ympärille tarvitaan yritystä tai tilausmallia.
> - **Koodauksen halpeneminen** tekee toteutuksista ja päivityksistä
>   halpoja. Kun sovittimet yhteensopimattomien formaattien välille ovat
>   lähes ilmaisia, yhteensopivuus ei enää välttämättä vaadi komiteassa
>   sovittua yhteistä standardia.
> - **Päällekkäinen työ vähenee**, kun jokaisen organisaation ei tarvitse
>   rakentaa samaa uudelleen, ja **byrokratia** voi siirtyä lomakkeista
>   koneellisesti käsiteltäviin protokolliin.
>
> Tästä seuraa, että periaatteessa mikä tahansa toistuva koordinaatio
> voidaan muuttaa protokollaksi.
>
> **Esimerkki: kokousprotokolla.** Nykyinen ruudunjako muuttaa kalvot,
> taulukot ja dokumentit videoksi, vaikka ne ovat valmiiksi koneellisesti
> ymmärrettäviä. Protokollamalli lähettäisi ensin merkityksen ja pikselit
> vain tarvittaessa: itse dokumentin sekä tapahtumavirran siitä, kuka
> puhuu, mikä kalvo tai kaavion kohta on esillä ja mitä päätetään. Idea on
> jo olemassa suljetun alustan sisällä (PowerPoint Live, I.7), mutta ei
> avoimena, yhteisenä kerroksena — juuri tämä on alustan ja protokollan
> ero. Avoimena kerroksena kokouksesta tulisi rakenteinen tapahtuma:
> tekoälyagentit voisivat osallistua suoraan tapahtumavirtaan, ja
> päätöksen voisi jäljittää siihen tietoon, jonka osallistujat sillä
> hetkellä näkivät. Samalla periaatteella voisi välittää myös eleet
> rakenteisena tietona videon sijaan; tunteiden päätteleminen niistä on
> kuitenkin työpaikoilla EU:n tekoälyasetuksella kiellettyä (art.
> 5(1)(f)), joten raja on vedettävä tarkasti.
>
> **Esimerkki: jaettu prompt injection -tarkistus.** Nyt jokainen
> tekoälyagentteja käyttävä organisaatio tarkistaa itse, sisältääkö
> agentin lukema teksti sille suunnattuja haitallisia ohjeita — usein
> täsmälleen samat verkkosivut ja dokumentit. Protokollamallissa tarkistus
> tehtäisiin kerran koko maailmalle. Teksti pilkotaan pieniksi paloiksi,
> kunkin palan hash lasketaan, ja avoimesta, yhdessä ylläpidetystä
> kannasta katsotaan, onko pala jo tarkistettu. Tunnettu hash palauttaa
> valmiin tuloksen; tuntematon pala tarkistetaan kokonaan ja tulos
> lisätään kantaan. Kyse on siis välimuistista, ei estolistasta: tekstin
> muuntelu ei ohita suojausta, se vain maksaa yhden täyden tarkistuksen.
> Toteutuksen on silti ratkaistava muutama asia. Vaarallisin virhe on
> haitalliselle palalle tallennettu tuomio "turvallinen", joten tuomiot
> on voitava tarkistaa uudelleen, niistä on oltava useampi riippumaton
> arvio ja ne on allekirjoitettava mallin versiolla — Neutral Witnessin
> tehtävä (II.2). Tuomiot vanhenevat, kun uusia hyökkäystekniikoita
> ymmärretään, joten niillä on oltava versio ja mitätöintimahdollisuus.
> Palojen on limityttävä, jottei ohjetta voi piilottaa palojen rajalle.
> Kanta tallentaa luokituksen, ei päätöstä: sama teksti on harmiton
> lukuoikeudella toimivalle agentille ja vaarallinen maksuja tekevälle,
> ja päätöksen tekee käyttäjä omassa kontekstissaan. Kyselyt eivät saa
> paljastaa, mitä agentti lukee, mikä onnistuu esimerkiksi kysymällä vain
> hashin alkuosalla tai käyttämällä paikallista kopiota. Kannan
> hallinta on II.8:n kysymys. *(Sidonnaisuus: kirjoittaja kehittää itse
> prompt injection -tunnistusta.)*
>
> **Raja.** Verkostovaikutus suosii edelleen suuria: protokolla voittaa
> vain, jos siihen liittyminen on halvempaa kuin alustalla pysyminen.
> Blueskyn kaltaiset avoimet sosiaalisen median verkot ovat tästä
> ajankohtaisia koetapauksia.

### II.8 Päätöksenteko: kuka saa äänen

> **Kirjoittajan näkemys.** Vaihtokyvyn rinnalla toinen vallan mittari on
> vaikutusmahdollisuus yhteisiin sääntöihin (*voice*, II.1). Avoimen
> projektin päätöksentekomallit säätävät lopulta äänivaltaa
> osapuoliryhmien välillä: kehittäjät, pääoma ja käyttäjät — sekä ryhmät,
> jotka helposti unohtuvat: ulkopuoliset, joihin päätökset vaikuttavat,
> tulevat käyttäjät, infrastruktuurin tarjoajat, muut kuin koodia
> tuottavat työntekijät sekä ihmisten puolesta toimivat tekoälyagentit.
>
> **Hansmannin kustannus halpenee.** Useamman osapuoliryhmän
> yhteisomistus on ollut harvinaista, koska erilaisten etujen
> yhteensovittaminen on kallista (I.8). Juuri tätä kustannusta uudet
> välineet alentavat: äänestys, laskenta ja tuloksen toimeenpano voivat
> tapahtua automaattisesti, ja tekoäly voi tiivistää pitkän keskustelun
> näyttämään, missä ollaan samaa ja missä eri mieltä. Jos kustannus
> laskee, monen osapuolen omistus tulee mahdolliseksi — Hansmannin teoria
> uudella kustannustasolla.
>
> **Äänivalta päätöstyypeittäin.** Säätö ei ole yksi liukusäädin vaan
> taulukko: kehittäjät painavat teknisissä päätöksissä, käyttäjät
> arvovalinnoissa, pääoma taloudessa ja ulkopuoliset
> ulkoisvaikutuksissa. Kun ryhmät eivät kilpaile samoista päätöksistä,
> moni ristiriita katoaa.
>
> **Kontribuution mittaaminen.** Päätösvallan sitominen tekemiseen on
> järkevää ja yleistä (Apache, I.8), mutta pelkkä määrä on huono mittari:
> sitä pelataan pilkkomalla työtä, tekoäly inflatoi sen, eikä kaikki
> arvokas työ näy laskurissa. Teknisesti voidaan todistaa, kuka teki
> muutoksen, mutta ei sitä, kuinka arvokas se oli — sama raja kuin
> "todentaminen ei ole totuus". Kolmea signaalia yhdessä on vaikeampi
> pelata kuin yhtäkään erikseen:
>
> | Signaali | Vahvuus | Heikkous |
> |---|---|---|
> | Kontribuutioiden määrä | halpa ja objektiivinen | helppo pelata, tekoäly inflatoi |
> | Vertaisarvio | tavoittaa laadun | klikit, suljettu kerho |
> | Jälkikäteinen vaikutus | vaikea pelata etukäteen | hidas |
>
> Painoarvon kannattaa myös vanhentua ajan myötä, jotta varhaiset
> osallistujat eivät linnoittaudu. Vertaisarvioiden rehellisyyttä voidaan
> tukea peer prediction -tyyppisillä mekanismeilla (I.8) — sama ajatus kuin
> Neutral Witnessin rehellisen datan mekanismisuunnittelussa (II.2).
>
> **Identiteetti on edellytys.** Henkilö ja ääni -periaate ja neliöllinen
> äänestys toimivat vain, jos yksi ihminen ei voi äänestää sadalla
> tunnuksella. Todennettu identiteetti (I.4) on siksi uusien
> päätöksentekotapojen edellytys, ei sivuseikka.
>
> **Raja.** Päätöksenteon voi nykyään järjestää hyvin monella tavalla,
> mutta sitä, että uudet tavat toimivat hyvin, ei ole vielä osoitettu.
> Tokeneilla äänestettäessä eniten omistava päättää, ja osallistuminen jää
> usein vähäiseksi.

### II.9 Johtopäätökset (kirjoittajan oma näkemys -laatikko)

Merkitään kokonaan kirjoittajan omaksi, kärjistetyksi johtopäätökseksi
(ei vakiintuneeksi teoriaksi eikä varovaiseksi hypoteesiksi H1...Hn-
listan tapaan) — tämä on postauksen kärki, ei liite:

> **Kirjoittajan johtopäätökset.**
> 0. **Yrityksen olemassaolo ja tragedy of the commons ovat pohjimmiltaan
>    sama ongelma** — molemmat ovat seurausta siitä, että luottamuksen,
>    valvonnan ja sopimisen transaktiokustannukset ovat kalliita: yritys
>    ratkaisee tämän niputtamalla resurssit hierarkian sisään, commons
>    ratkaisee (tai epäonnistuu ratkaisemaan) tämän Ostromin
>    instituutioiden kautta. Koska kyseessä on sama pohjimmiltainen
>    ongelma, sama teknologinen isku — transaktio-, verifiointi- ja
>    valvontakustannusten romahdus — ratkaisee molemmat yhdellä kertaa,
>    ei kahta erillistä kehityskulkua. Tämä on koko postauksen kattoteesi,
>    johon kohdat 1–7 ovat sen ilmentymiä eri talouden osa-alueilla.
> 1. **Vaihtokyky kasvaa, ja yritykset voivat pienentyä** — halpa
>    todentaminen voi helpottaa kumppanin vaihtamista ja vähentää
>    tarvetta koota toimintaa saman yrityksen sisään; lisäksi työvoima
>    itsessään muuttuu yhä enemmän agenttipohjaiseksi (ihminen + N
>    AI-agenttia korvaa osan sisäisestä henkilöstöstä). Yritykset voivat
>    tämän seurauksena pienentyä. Vallan hajautumisen mittari on
>    kuitenkin toimijoiden tosiasiallinen vaihtokyky: pienetkin
>    yritykset voivat olla riippuvaisia samoista harvoista alustoista
>    (II.1).
> 2. **Open source ja yhteisomistus kukoistavat** — protokollapohjainen
>    koordinointi ja alenevat verifiointi-/luottamuskustannukset tekevät
>    avoimesti omistetuista/ylläpidetyistä resursseista kilpailukykyisen
>    vaihtoehdon suljetulle, yrityksen sisään niputetulle omistukselle.
>    (Sama ilmiö kuin kohdassa 0: open source on jo nyt yksi commons-
>    muoto, joka toimii osittain siksi että koordinointikustannukset
>    ovat sille poikkeuksellisen alhaiset.)
> 3. **Talouden tehokkuus kasvaa huomattavasti** — transaktiokustannusten
>    lasku (search, verification, disclosure, negotiation, enforcement)
>    vapauttaa resursseja tuottavampaan käyttöön laajasti koko
>    taloudessa.
> 4. **Maat, joissa on vähemmän jäykkiä institutionaalisia esteitä,
>    saavat kilpailuedun** — ks. maavertailu-tapaus yllä (II.4).
> 5. **Datasiilot purkautuvat ilman haltijan suostumusta** — kun asiakas
>    voi todistaa ehjällä laitteella, mitä palvelu hänelle näytti,
>    organisaatio ei enää pysty lukitsemaan asiakasta datalla (II.5).
> 6. **Toimeenpano halpenee siltä osin kuin oikeudet tokenisoidaan** —
>    kun arvo on järjestelmän sisällä tokenina, rikkomus voi laukaista
>    seuraamuksen ilman tuomioistuinta. Tämä ulottuu vain niin pitkälle
>    kuin protokolla tosiasiallisesti hallitsee resurssia; muualla
>    tarvitaan edelleen palveluntarjoajan tai lain tuki (II.6).
> 7. **Alustat väistyvät protokollien tieltä siellä, missä liittyminen on
>    halvempaa kuin pysyminen** — mikromaksut ja koodauksen halpeneminen
>    poistavat protokollien kaksi historiallista heikkoutta, ja uudet
>    päätöksentekomekanismit tekevät monen osapuolen hallinnasta
>    mahdollista (II.7–II.8).

Näiden kahdeksan väitteen tulee näkyä postauksessa selvästi kirjoittajan
omana kantana — ei esitetä "todistettuna" tai vakiintuneena tuloksena,
vaan samalla tavalla merkittynä kuin Neutral Witness-kappale. Kohta 0 on
tärkein: se on se lause, joka sitoo koko postauksen (Coase-osio,
Ostrom/commons-osio, COW-malli, Neutral Witness ja maavertailu) yhdeksi
argumentiksi eikä listaksi erillisiä havaintoja.

---

## Avoimet kysymykset ennen kirjoittamista

- Miten Neutral Witness kytketään COW-malliin täsmällisesti (mitä termiä se
  alentaa: search/verification/disclosure/monitoring/enforcement)?
- Miten open source -esimerkki konkretisoidaan (mikä on sen "commons" ja mikä
  sen governance-mekanismi tässä kehyksessä)?
- Yhdistetäänkö tämä samaksi postaukseksi uudelleenkirjoitetun muistion kanssa
  vai omaksi, siihen linkittyväksi jatko-osaksi?
- ~~Vertailun kohta 2 (ketterä mutta vakiintunut): nimetäänkö Viroksi vai
  pysytäänkö nimeämättömänä "Talous B" -tasolla?~~ Ratkaistu: Viro.
  Kohta 3 (lähes instituutioton ääripää) pysyy nimeämättömänä
  abstraktiona.
- Miten muistio positioidaan suhteessa NBER:n "Coasean Singularity"
  -paperiin ja muuhun tuoreeseen "headless firm" -kirjallisuuteen
  (ks. `_material/prior-art-haku.md`) — mikä on tässä muistiossa uutta
  niihin nähden?
- ~~Osa I / osa II -raja: jäsennyksen kohta 3 viittaa "Ararilin 2013"
  -synteesiin, mutta osa I nojaa Aligican (2014) teokseen.~~
  Ratkaistu: "Araril" = Eduardo Araral (2013), molemmat nyt osassa I.
- Rayamajhee & Paniagua (2026) luettava kokonaan: tiivistelmän perusteella
  se yhdistää Coasen ja Ostromin ulkoisvaikutusten hallintaan, mutta ei
  väitä yritystä ja commonsia samaksi ongelmaksi eikä käsittele
  teknologiaa. Varmistettava ennen kuin kattoteesin uutuutta (II.1)
  korostetaan.
