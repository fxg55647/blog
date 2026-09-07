---
layout: post
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

Tästä seuraa neljä konkreettista johtopäätöstä, joita postauksessa
puolustetaan: yritykset pienenevät, kun sekä ulkoiset transaktiot että
itse työvoima muuttuvat agenttipohjaisiksi; open source ja yhteisomistus
kukoistavat uutena kilpailukykyisenä vaihtoehtona suljetulle omistukselle;
talouden tehokkuus kasvaa huomattavasti transaktiokustannusten
vapauttaessa resursseja tuottavampaan käyttöön; ja maat, joilla on vähiten
institutionaalista kitkaa muutokselle, saavat merkittävän kilpailuedun.

Postaus esittelee myös kirjoittajan oman konseptin, Neutral Witnessin —
koneellisen välikerroksen, joka mahdollistaa toimintakykyisen luottamuksen
syntymisen osapuolten välille ilman että kenenkään tarvitsee paljastaa
salaista tietoaan toisilleen — yhtenä konkreettisena ehdotuksena siitä,
miten näitä kustannuksia käytännössä alennetaan. Ydinhypoteesi ei ole enää
tutkimaton alue: se kytkeytyy suoraan tuoreeseen "Coasean singularity"
-kirjallisuuteen (NBER 2025), mutta laajentaa sen yritysten rajoista
commonsin hallintaan asti.

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

## Kirjoitustapa: kolme tasoa eroteltuna läpi koko postauksen

Sama periaate kuin alkuperäisessä muistiossa (luku 0), mutta nyt
läpileikkaavana tyylikeinona koko postauksessa, ei vain alkuun kirjoitettuna
varauksena:

1. **Vakiintunut teoria** — Coase, Ostrom, Williamson, Hayek: esitetään
   normaalina leipätekstinä.
2. **Tässä postauksessa johdettu synteesi** — esim. COW-mallin ja
   protokollatalouden yhdistäminen: merkitään selkeästi synteesiksi.
3. **Kirjoittajan oma johtopäätös / konsepti** — erityisesti Neutral Witness,
   mutta myös lopun kärjistetyt johtopäätökset (ks. alla) — nostetaan
   **omaksi, visuaalisesti erottuvaksi laatikoksi** tekstin sekaan, esim.:

   > **Kirjoittajan näkemys.** [teksti tähän]

   Ei siis vain yksi maininta dokumentin alussa, vaan toistuva merkintätapa
   aina kun siirrytään vakiintuneesta teoriasta tai yhteisestä synteesistä
   kirjoittajan omaan, vielä todentamattomaan väitteeseen. Neutral
   Witness -kappale (nykyisen jäsennyksen kohta 6) kirjoitetaan kokonaan
   tämän laatikkomuodon sisään, ei tavallisena leipätekstinä.

## Mahdollinen jäsennys

1. **Yritys transaktiokustannusten ratkaisuna** (Coase) — lyhyt, pohjustava.
2. **Commons hallinnan ongelmana** (Ostrom) — miksi yhteiset resurssit
   onnistuvat tai epäonnistuvat: boundaries, monitoring, sanktiot, halpa
   konfliktinratkaisu.
3. **COW-malli**: Coase, Ostrom ja Williamson samassa kehyksessä (Ararilin
   2013 synteesi) — commonsin toimivuus riippuu oikeuksien määrittelyn,
   valvonnan, kannustimien ja toimeenpanon kustannuksista.
4. **Olemassa oleva blockchain × commons -kirjallisuus** — mitä on jo tehty
   (Frontiers 2021/2025, Ostrom Project, "crypto commons", grass-roots-paperi)
   ja miksi se silti jää paloitelluksi (blockchain-governance vs.
   AI-commons-riskit vs. Ostrom-instituutiot erikseen).
5. **Puuttuva synteesi**: mitä tapahtuu, kun verifiointi, monitorointi ja
   toimeenpano lähestyvät nollakustannusta samanaikaisesti usean kypsyneen
   teknologian ansiosta? Ydinväite: "The firm and the commons may be two
   historical solutions to the same underlying problem: trust and
   coordination were expensive."
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
9. **[Kirjoittajan näkemys -laatikko] Johtopäätökset** (ks. oma kohta alla)
10. **Mitä teoria ei väitä / varaukset** — sama varovaisuus kuin
    alkuperäisessä muistiossa: uutuusväitteet ovat hypoteeseja ennen
    systemaattista prior-art-kartoitusta.

## 5. Puuttuva synteesi: sama infrastruktuuri, kaksi ratkaisua

*(Kirjoitettu kokonaan auki koekappaleeksi — loput jäsennyksen kohdista
ovat yhä luonnostasolla yllä.)*

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
tyhjästä — se on jo tehty. Paul Dragos Aligica on yhdessä Vlad Tarkon
kanssa rakentanut "institutionaalisen diversiteetin" teoriaa, joka
asettaa Coasen, Ostromin ja Williamsonin saman analyyttisen kehyksen
sisään (Aligica, *Institutional Diversity and Political Economy: The
Ostroms and Beyond*, Oxford University Press, 2014). Yhteinen havainto
on, että sekä yrityksen raja että toimivan commonsin raja määräytyvät
lopulta samasta asiasta: kuinka kalliita oikeuksien määrittely, valvonta,
kannustimet ja toimeenpano ovat kussakin tapauksessa.

Tuoreempi kirjallisuus on alkanut kysyä, mitä tapahtuu kun AI-agentit
alentavat näitä kustannuksia rajusti. MIT:n, Harvardin ja Boston
Universityn tutkijoiden NBER-paperi kysyy suoraan, romahduttaako
agenttien mahdollistama lähes-ilmainen markkinakoordinointi perinteisen
yrityksen tarpeen — käsite "Coasean singularity" ("The Coasean
Singularity? Demand, Supply, and Market Design with AI Agents", NBER,
2025). Rinnakkaisessa, toisessa kirjallisuushaarassa Ostromin
periaatteita on alettu soveltaa suoraan agenttipohjaiseen
commons-hallintaan: "Kami of the Commons: Towards Designing Agentic AI
to Steward the Commons" (arXiv 2602.14940) kuvaa spekulatiivisen
suunnittelun kautta AI-"stewardeja", jotka toteuttavat Ostromin
graduated sanctions- ja mutual monitoring -periaatteita, ja "Ostrom
Amongst the Machines: Blockchain as a Knowledge Commons" (Bodon,
Bustamante ym., Pitt Law) käsittelee blockchainia knowledge commonsina
nimenomaan Ostromin kehyksessä. Empiirisemmältä suunnalta Liya
Palagashvili (Mercatus Center, GMU) on osoittanut Coase-pohjaisella
analyysillä ja kahdella riippumattomalla yhdysvaltalaisella aineistolla,
että solo-tyyppiset yritysperustamiset kasvavat nopeimmin juuri
AI-altistuneilla toimialoilla — konkreettinen tuki sille, että
transaktiokustannusten aleneminen todella siirtää tuotantoa pois
perinteisen yrityksen sisältä ("AI, Transaction Costs, and a Quiet Shift
Toward Self-Employment").

Nämä kaksi kirjallisuushaaraa — "AI-agentit romahduttavat yrityksen
rajan" ja "AI/blockchain voi toteuttaa Ostromin periaatteita" — eivät
kuitenkaan vielä kohtaa toisiaan. Kumpikaan ei sano suoraan, että
molemmat ovat pohjimmiltaan sama ilmiö kahdesta eri suunnasta
katsottuna. Tässä on tämän muistion oma synteesi: **sama infrastruktuuri,
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

*(Lähteet tähän osioon: Coase, R. H. (1937). The Nature of the Firm.
Economica, 4(16), 386–405. — Aligica, P. D. & Tarko, V. Institutional
Diversity and Political Economy: The Ostroms and Beyond. Oxford
University Press, 2014. — "The Coasean Singularity? Demand, Supply, and
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

## 6. Neutral Witness: kirjoittajan oma konsepti

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
> **Rehellisen datan mekanismisuunnittelu.** Neutral Witnessin hyöty
> riippuu siitä, että sille toimitettu evidenssi on kattavaa ja aidosti
> kytköksissä todelliseen maailmaan — muuten järjestelmästä tulee
> institutionaalinen Goodhart-kone. Kannustinraja voidaan kirjoittaa
> muotoon `E[hyöty vilpistä] < p(havaitseminen) x seuraamus + menetetty
> vakuus + mainehaitta + tulevan pääsyn arvo + juridinen vastuu` — sama
> logiikka jota sovellettiin jo edellä turvallisuuden tarjoajien
> lojaalisuuteen neljännessä maavertailupisteessä (piraattikaupunki).
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

## Uusi osio: tapausvertailu — neliportainen institutionaalisen kitkan asteikko

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
   rehellisen datan mekanismisuunnittelussa (ks. kohta 5.3 yllä):
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
   Hayek-osiossa (kohta 4 yllä): hajautettu, rinnakkainen kokeilu ei ole
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

### Tarkennus: mistä "institutionaalinen kitka" oikeastaan koostuu

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

- **Aikaväli: ehdotus 10 vuotta (2026 → 2036).** Riittävän lyhyt
  tuntuakseen ajankohtaiselta ja konkreettiselta, mutta riittävän pitkä
  että koronkorko-tyyppinen kasvuero (esim. 8–10 %/v pisteessä 2 vs.
  1–2 %/v pisteessä 1 vs. vielä nopeampi pisteissä 3–4) ehtii näkyä
  silmin nähden BKT-kuilun repeämisenä — 20–25 vuotta alkaisi tuntua
  liian abstraktilta/kaukaiselta lukijalle.
- **Metodinen varaus**: merkitään selvästi ajatuskokeeksi/skenaarioksi,
  ei ennusteeksi tai empiiriseksi vertailututkimukseksi — samalla
  varovaisuudella kuin muualla muistiossa (uutuusväitteet = hypoteeseja).

## Uusi osio: johtopäätökset (kirjoittajan oma näkemys -laatikko)

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
>    johon kohdat 1–4 ovat sen ilmentymiä eri talouden osa-alueilla.
> 1. **Yritykset pienenevät** — sekä siksi, että ulkoisten transaktioiden
>    kustannus laskee (Coase), että siksi, että työvoima itsessään
>    muuttuu yhä enemmän agenttipohjaiseksi (ihminen + N AI-agenttia
>    korvaa osan sisäisestä henkilöstöstä).
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
>    saavat kilpailuedun** — ks. maavertailu-tapaus yllä.

Näiden viiden väitteen tulee näkyä postauksessa selvästi kirjoittajan
omana kantana — ei esitetä "todistettuna" tai vakiintuneena tuloksena,
vaan samalla tavalla merkittynä kuin Neutral Witness-kappale. Kohta 0 on
tärkein: se on se lause, joka sitoo koko postauksen (Coase-osio,
Ostrom/commons-osio, COW-malli, Neutral Witness ja maavertailu) yhdeksi
argumentiksi eikä listaksi erillisiä havaintoja.

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
