## 0. Lukutapa ja väitteiden status

Tämän muistion tärkein metodinen periaate on pitää kolme tasoa erillään. Vakiintunut talousteoria antaa analyysille lähtökohdan; tässä muistiossa kehitetty synteesi yhdistää taloustieteen, AI-agentit ja protokolla-arkkitehtuurin; Neutral Witness puolestaan on käyttäjän oma tuote- ja arkkitehtuurikonsepti. Näiden kolmen tason sekoittaminen tekisi tekstistä retorisesti vahvemman mutta tutkimuksellisesti heikomman.

## 1. Tiivistelmä: resurssipaketista protokollaksi

Perinteinen yritys kokoaa työn, pääoman, koneet, tuotantokapasiteetin, datan, IP-oikeudet, asiakassuhteet, jakelun ja päätösvallan saman organisaation sisään. Taloustieteellisesti tämä ei ole pelkkä omistusjärjestely vaan koordinaatioteknologia: yrityksen sisällä suuri osa resurssien allokoinnista tapahtuu käskyillä, budjeteilla ja pitkäkestoisilla sopimuksilla sen sijaan, että jokainen käyttöoikeus kilpailutettaisiin jatkuvasti avoimilla markkinoilla.
Muistion radikaalimpi hypoteesi ei ole vain se, että AI pienentää yrityksiä tai lisää ulkoistamista. Hypoteesi on, että osa historiallisesti yrityksen sisään niputetuista resursseista voi muuttua itsenäisesti löydettäviksi, todennettaviksi, hinnoiteltaviksi, sopimuksellistettaviksi ja siirrettäviksi. Jos näin tapahtuu, yrityksen raja ei vain siirry: osa yrityksen taloudellisesta sisällöstä voi muuttua yhteentoimivien protokollien orkestroimaksi resurssimarkkinaksi.
Tämä ei tarkoita yrityksen katoamista. Todennäköisempi kehityskulku on institutionaalinen hybridisaatio. Joissakin tehtävissä pysyvä osakeyhtiö säilyy tehokkaimpana vastuunkantajana; toisissa tuotanto voidaan organisoida tilapäisenä, tehtäväkohtaisena koalitiona, joka kokoaa resurssit tarpeeseen, jakaa tuotetun arvon sääntöjen mukaan ja purkautuu tehtävän valmistuttua. Juridinen kuori ja taloudellinen orkestrointi voivat siten eriytyä toisistaan.

## 2. Vakiintunut teoriapohja

### 2.1 Coase: miksi yritys on olemassa?

Ronald Coasen klassinen lähtökohta on, että markkinamekanismin käyttäminen ei ole ilmaista. Sopivan vastapuolen etsiminen, hintojen selvittäminen, sopimusten neuvotteleminen ja niiden täytäntöönpanon järjestäminen synnyttävät kustannuksia. Yritys voi korvata osan näistä toistuvista markkinatransaktioista organisaation sisäisellä ohjauksella. Yrityksen raja määräytyy marginaalissa: uusi transaktio kannattaa organisoida yrityksen sisällä niin kauan kuin sisäisen organisoinnin lisäkustannus on pienempi kuin vastaavan markkinatransaktion kustannus (Coase 1937).
AI:n kannalta Coasen analyysissä on myös tärkeä vastapaino yksinkertaiselle "markkinat halpenevat" -tarinalle. Teknologia voi samanaikaisesti laskea yrityksen sisäisen organisoinnin kustannuksia. Coase itse huomautti, että esimerkiksi viestintäteknologia voi kasvattaa yrityksen optimaalista kokoa, jos se tekee hajallaan olevien toimintojen johtamisesta halvempaa. Siksi olennaista ei ole kustannusten absoluuttinen lasku vaan se, kumpi laskee suhteellisesti enemmän: ulkoinen markkinakoordinaatio vai sisäinen hierarkiakoordinaatio.
Markkinakoordinoinnin kustannuksia voidaan tässä muistiossa jäsentää laajennetulla hajotelmalla:
C_market = C_search + C_disclosure + C_verification + C_negotiation + C_coordination + C_enforcement + C_settlement + C_oversight + C_orchestration
Kaikki termit eivät ole Coasen alkuperäistä notaatiota. Hajotelma on tämän muistion analyyttinen työkalu, jonka tarkoitus on paikantaa, mihin AI-agentit, attestoinnit, luottamuksellinen laskenta ja ohjelmoitavat sopimukset mahdollisesti vaikuttavat.

### 2.2 Hayek: hajautettu tieto ja hinnat

Friedrich Hayekin analyysissa taloudellinen ongelma ei ole vain laskenta vaan hajautetun, paikallisen ja usein hiljaisen tiedon hyödyntäminen. Hintajärjestelmä mahdollistaa sen, että toimija voi reagoida niukkuuden muutokseen tietämättä kaikkea sen taustalla olevasta maailmasta (Hayek 1945). Tässä muistiossa tästä johdetaan varovainen analogia: avoimempi resurssiprotokolla voi lisätä rinnakkaisten päätöksentekijöiden määrää ja tehdä paikallisia kapasiteetteja näkyviksi ilman, että kaikki keskitetään yhden suunnittelijan tietoon.
Tämä ei tarkoita, että hajautettu järjestelmä olisi automaattisesti "oikeassa". Sen mahdollinen episteminen etu syntyy ennen kaikkea variaatiosta ja virheiden matalammasta korrelaatiosta: moni itsenäinen toimija voi kokeilla eri ratkaisuja samanaikaisesti. Keskitetty järjestelmä voi puolestaan olla erittäin tehokas silloin, kun oikea toimintamalli tunnetaan ja yhteiset standardit sekä komplementaarisuudet ovat vahvoja.

### 2.3 Williamson: opportunismi, epävarmuus ja asset specificity

Oliver Williamson syvensi transaktiokustannusajattelua tarkastelemalla erityisesti opportunismia, epävarmuutta, toistuvuutta ja omaisuuserien spesifisyyttä. Jos osapuoli tekee investoinnin, jonka arvo on korkea vain tietyssä suhteessa, syntyy hold-up-riski ja vahvempi peruste pitkäkestoiselle hallintarakenteelle. Tämä on keskeinen reunaehto protokollatalouden hypoteesille: kaikkea ei kannata pilkkoa spot-markkinaksi vain siksi, että sopiminen on teknisesti mahdollista.
Protokollat voivat pienentää osaa opportunismin kustannuksista esimerkiksi paremmalla evidenssillä, escrow-rakenteilla, maineella ja automaattisella täytäntöönpanolla. Ne eivät kuitenkaan poista epätäydellisiä sopimuksia, tacit knowledgea, yhteisiä investointeja tai tuotevastuuta. Siksi realistinen analyysi ennustaa useita rinnakkaisia hallintamuotoja, ei yrityksen yksisuuntaista korvautumista.

### 2.4 Sähköiset markkinat ja informaatioteknologia

Malone, Yates ja Benjamin argumentoivat jo 1980-luvulla, että informaatioteknologia voi alentaa koordinointikustannuksia ja siten siirtää taloudellista toimintaa hierarkioista kohti markkinamuotoista koordinointia. AI-agentit muuttavat tämän väitteen mittakaavaa: ne eivät ainoastaan välitä tietoa, vaan voivat etsiä vastapuolia, analysoida ehtoja, neuvotella, tehdä vertailuja, valvoa suoritusta ja käynnistää selvityksen koneellisesti. Tämän muistion synteesi rakentuu juuri tämän jatkumon päälle.

## 3. Yritys resurssi- ja luottamuspakettina

Yrityksen sisään niputetaan fyysisten ja aineettomien resurssien lisäksi myös luottamus. Organisaatio kantaa vastuuta siitä, kuka saa käyttää konetta, kenen väite pätevyydestä hyväksytään, mikä data on oikea versio, kuka voi allekirjoittaa sopimuksen, kuka vastaa vahingosta ja miten poikkeamat käsitellään. Kun resurssi siirretään avoimelle markkinalle, nämä sisäisesti ratkaistut kysymykset palaavat erillisinä todentamis-, sopimus- ja vastuurakenteina.

### 3.1 Minimum efficient scale ja yhden ihmisen AI-organisaatio

Jos yksi ihminen pystyy AI-agenttien avulla hoitamaan tehtäviä, joihin aiemmin tarvittiin kokonainen hallinnollinen organisaatio - tutkimusta, myyntiä, analyysia, tarjouskilpailuja, hankintaa, asiakaspalvelua, ohjelmointia ja sopimusten valmistelua - joidenkin toimintojen minimum efficient scale voi laskea merkittävästi. Samalla ulkoisen hankinnan kustannus voi pienentyä, jos agentit pystyvät ostamaan työn, laskennan, datan, kapasiteetin tai lisenssin tarpeeseen.
Tämä voi synnyttää konsentraatioparadoksin. Organisaatiot voivat pienentyä henkilömäärältään mutta kasvaa funktionaaliselta kapasiteetiltaan. Kilpailuetu siirtyy tällöin osittain pysyvän resurssipaketin omistamisesta kykyyn löytää, arvioida, yhdistää ja koordinoida resursseja nopeasti. Yhden principalin raja ei enää ole vain palkattavissa oleva työvoima vaan kyky asettaa tavoitteita, määritellä sääntöjä, valvoa agentteja ja ratkaista poikkeuksia.

### 3.2 Informaatio- ja resurssipariteetti

Koko protokollatalouden hypoteesi riippuu voimakkaasta rajaehdosta: protokollakerroksen on saatava käyttöönsä riittävän hyvä kuva resurssien laadusta, oikeuksista, saatavuudesta ja historiasta. Jos yritys tietää oman työntekijänsä, koneensa tai datansa laadun paremmin kuin avoin markkina pystyy sitä todentamaan, sisäinen integraatio voi säilyä rationaalisena vaikka kaupankäynti olisi teknisesti lähes ilmaista.
Tästä seuraa, että luottamuksellisen todentamisen infrastruktuuri ei ole sivujuonne. Se on mahdollinen mekanismi, jolla protokollapuoli voi saavuttaa informaatiopariteettia paljastamatta kaikkea raakadataa vastapuolille. Neutral Witness sijoittuu tässä muistiossa juuri tähän kohtaan.

## 4. Protokollatalouden tekninen pino

Protokollatalous ei tarkoita yhtä lohkoketjua tai yhtä markkinapaikkaa. Tässä muistiossa sillä tarkoitetaan yhteentoimivaa teknistä ja institutionaalista pinoa, joka tekee resurssioikeuksista koneellisesti löydettäviä ja käyttökelpoisia. Pino voidaan kuvata seuraavasti:
Identity: kuka tai mikä resurssi on; valtuudet, omistuksen tai hallinnan ketju, jatkuvuus ja avainten palautus.
Claims: mitä resurssista väitetään - esimerkiksi osaaminen, kapasiteetti, omistus, kunto, saatavuus, käyttörajoitukset tai lisenssiehdot.
Evidence & provenance: mihin väite perustuu - allekirjoitettu dokumentti, sensoridata, commit, loki, sähköposti, sertifikaatti tai muu todiste.
Verification / attestation: voidaanko väite hyväksyä sovituilla kriteereillä ilman täydellistä keskinäistä luottamusta.
Discovery: kuka tarvitsee resurssia ja kuka voi tarjota sen; myös semanttinen matchaus, ei vain avainsanahaku.
Price formation: tarjouskilpailu, huutokauppa, option hinnoittelu, neuvottelu tai sääntöpohjainen tariffi.
Contract: koneellisesti tulkittavat ehdot sekä niiden suhde juridiseen sopimukseen.
Coordination: työn, resurssien, riippuvuuksien, aikataulujen ja muutosten orkestrointi.
Performance verification: todennetaan, että sovittu suoritus, milestone tai palvelutaso toteutui.
Settlement: maksu, escrow, vakuus, royalty, slashing, palautus tai muu selvitys.
Reputation and recourse: todennetusta historiasta syntyvä signaali sekä reitti riidanratkaisuun ja vastuun kohdentamiseen.
Permanence: projektin aineiston, tilan ja todisteketjun säilyminen riippumatta yksittäisestä käyttöliittymästä tai taustayhtiöstä.

## 5. Neutral Witness - käyttäjän oma konsepti

Neutral Witness on tässä muistiossa käyttäjän oma konsepti. Sitä ei esitetä maailmanlaajuisesti uutena teknisenä keksintönä ilman erillistä prior-art-tutkimusta. Konseptin taloudellinen rooli on kuitenkin määriteltävissä selkeästi: se pyrkii alentamaan luottamuksen ja yksityisen informaation aiheuttamaa koordinaatiokustannusta.
Neutral Witness ei ole vain fact checking -palvelu. Se on luottamuksellinen koneellinen välikerros, joka voi vastaanottaa yhden tai useiden osapuolten aineistoa, myös sellaista jota vastapuolet eivät saa nähdä, soveltaa ennalta sovittuja sääntöjä ja palauttaa vain kullekin osapuolelle sallitun tuloksen. Toimintalogiikka voidaan tiivistää muotoon Observe -> Verify -> Attest.

Kuva 1. Neutral Witness -konseptikuva alkuperäisestä muistioaineistosta. Kuvassa syötteet, selective disclosure, verdict/claim, vapaaehtoinen human review sekä hash-ankkurointi pysyvään tallennukseen.

### 5.1 Monen osapuolen salaisten tietojen yli tapahtuva laskenta

Konseptin vahvin taloudellinen käyttötapaus syntyy tilanteissa, joissa tehokas päätös edellyttää tietoja, joita osapuolet eivät voi tai halua paljastaa toisilleen. Myyjä voi antaa järjestelmälle teknologia-, asiakas- tai taloustietoja; ostaja voi antaa omat salaiset hyväksymisrajansa ja strategiset kriteerinsä. Neutral Witness voi tällöin arvioida yhteensopivuutta ja palauttaa esimerkiksi "ehto täyttyy", riskiluokan tai rajatun vertailutuloksen paljastamatta kaikkia lähtötietoja.
Sama periaate soveltuu suljettuihin huutokauppoihin, due diligenceen, complianceen, agenttien välisiin hankintoihin ja tilanteisiin, joissa yksi osapuoli haluaa todistaa ominaisuuden paljastamatta koko todistusaineistoa. Tekninen toteutus voi eri riskitasoilla nojata esimerkiksi luottamukselliseen suoritusympäristöön, MPC:hen, zero-knowledge-todisteisiin, verifioitavaan laskentaan tai näiden yhdistelmiin. LLM itsessään ei ratkaise luottamuksellisuuden tai todennettavuuden ongelmaa.

### 5.2 Neutral Witness sisäisenä valvontakerroksena

AI-agenttien yleistyminen synnyttää uuden sisäisen kustannuksen: valvonnan. Jos yksi ihminen delegoi sadoille agenteille analyysi-, hankinta-, koodaus- ja neuvottelutehtäviä, principal ei voi tarkistaa jokaista välitulosta manuaalisesti. Neutral Witness -tyyppinen kerros voi toimia portinvartijana: ennen kuin agentin tulos käynnistää maksun, sopimuksen tai uuden agenttiketjun, järjestelmä tarkistaa ennalta määritellyt evidenssi- ja turvallisuusehdot.
Tämä tekee Neutral Witnessista symmetrisen mekanismin. Sama arkkitehtuuri voi alentaa sekä yritysten välisiä luottamuskustannuksia että yhden organisaation sisäisiä principal-agent-kustannuksia. Samalla se kasvattaa oman valvontakerroksensa kriittisyyttä: jos todentaja on väärässä, kompromettoitu tai vinoutunut, se voi monistaa virheen laajaan agenttiverkostoon.

### 5.3 Rehellisen datan mekanismisuunnittelu: "kepit ja porkkanat"

Neutral Witnessin hyöty riippuu siitä, että sille toimitettu evidenssi on riittävän kattavaa ja aidosti kytketty todelliseen maailmaan. Jos osapuoli voi jättää haitallisen datan ilmoittamatta, syöttää väärennettyä evidenssiä tai optimoida raportoinnin vain attestaation läpäisemiseksi, järjestelmä voi muuttua institutionaaliseksi Goodhart-koneeksi. Siksi datankeruu ja kannustimet ovat osa arkkitehtuuria, eivät erillinen compliance-lisäosa.
Yksinkertaistettu kannustinraja voidaan kuvata seuraavasti:
E[hyöty vilpistä] < p(havaitseminen) x seuraamus + menetetty vakuus + mainehaitta + tulevan pääsyn arvo + juridinen vastuu
Käytännössä tämä tarkoittaa useiden mekanismien yhdistelmää: kryptografista provenancea, satunnaisia auditointeja, taloudellisia vakuuksia, toistuvien suhteiden mainetta, väärän attestaation oikaisuprosessia, whistleblower- tai dispute-kanavaa ja tarvittaessa oikeudellisesti täytäntöönpantavia seuraamuksia. Olennaista on myös se, ettei järjestelmä palkitse tarpeettoman datan keräämisestä. Tavoitteena on totuudellinen minimidata: kerätään se, mikä on päätöksen kannalta tarpeellista ja voidaan todentaa, ei kaikkea mikä teknisesti olisi mahdollista kerätä.

## 6. Kohti "Coasean heaven" -raja-arvoa

Tässä muistiossa "Coasean heaven" ei ole vakiintuneen Coase-kirjallisuuden termi vaan heuristinen nimi raja-arvolle, jossa markkinoiden käyttökustannukset ovat niin pieniä, että suuri osa nykyisestä organisaatiorakenteesta menettää koordinaatioetunsa. Ratkaiseva lisäehto on yksityisyys: tehokas yhteensovitus ei saa edellyttää sitä, että yritysten salaiset tiedot muuttuvat julkisiksi.

### 6.1 Laskennallinen näkyvyys ei tarkoita julkista näkyvyyttä

Väite "AI näkee kaikkien yritysten tuotekehityksen" on syytä muotoilla tarkasti. Tavoiteltu ominaisuus ei ole yleinen läpinäkyvyys vaan laskennallinen näkyvyys: järjestelmä voi suorittaa sallittuja vertailuja salaiseen aineistoon nähden, mutta ihmiskäyttäjät, kilpailijat ja mahdollisesti itse yleiskäyttöinen malli eivät saa raakaa aineistoa käyttöönsä. Tietovuon politiikka määrittelee, mitä kysymyksiä saa esittää ja mitä vastauksia saa palauttaa.
Esimerkiksi järjestelmä voisi palauttaa tiedon "yritys B:n salaisessa tarpeessa on 0,92 yhteensopivuus yritys A:n uuden ratkaisun kanssa" ilman, että se kertoo A:lle B:n tuotteen arkkitehtuuria tai B:lle A:n lähdekoodia. Seuraavassa vaiheessa osapuolet voivat avata tarkempaa tietoa vain, jos hintaraja, NDA-ehto tai muu kynnys ylittyy.

### 6.2 Innovaatioiden reaaliaikainen markkina

Jos tällainen yhteensovituskerros toimisi luotettavasti, tutkimus- ja tuotekehitystoiminnasta voisi syntyä nykyistä jatkuvampi markkina. Uuden keksinnön ei tarvitsisi odottaa patenttijulkaisua, messuja, myyntiprosessia tai henkilökohtaista verkostoa tullakseen löydetyksi. Sen käyttökelpoisuus voitaisiin testata koneellisesti muiden toimijoiden salaisia tarpeita vasten heti, kun evidenssi on riittävä.
Tällöin innovaation arvonmuodostus voisi siirtyä "kehitä ensin, etsi ostaja myöhemmin" -mallista kohti iteratiivista löydä-neuvottele-lisensoi-yhteiskehitä -mallia. Erikoistuminen voisi lisääntyä, koska toimijan ei tarvitsisi omistaa koko kaupallistamisketjua saadakseen keksinnöstä tuoton. Samalla riippuvuus yhteisestä protokollasta, oikeuksien määrittelystä ja luotettavasta attestaatiosta kasvaisi.

### 6.3 Mikä voisi mennä väärin?

Täysi R&D-yhteensovitus on myös korkean riskin mekanismi. Se voi vuotaa liikesalaisuuksia sivukanavien kautta, mahdollistaa strategisen tiedustelun, luoda uuden keskittyneen tietopisteen tai helpottaa kilpailunvastaista koordinaatiota. Siksi sallittu laskenta ei voi olla "kysy mitä tahansa koko markkinasta". Tarvitaan käyttöoikeuspolitiikkoja, query-budjetteja, differentiaalista yksityisyyttä tai muita vuotosuojia, riippumattomia auditointeja, selkeitä kilpailuoikeudellisia rajoja sekä mekanismeja, jotka estävät järjestelmää muuttumasta kartellien hintakoordinaattoriksi.
Coasean heaven on siis analyyttinen raja-arvo, ei tuotespesifikaatio. Mitä lähempänä järjestelmä pääsee nollakitkaa, sitä tärkeämmäksi nousee se, mitä kitkaa on tarkoituksella jätettävä jäljelle turvallisuuden, kilpailun, yksityisyyden ja vastuun vuoksi.

## 7. Osakeyhtiö vs. tehtäväkohtainen tuotantokoalitio

Pysyvä osakeyhtiö ja protokollamuotoinen yhteisprojekti eivät ole vain kaksi teknistä toteutustapaa samalle asialle. Ne allokoivat vastuuta, päätösvaltaa, omistusta ja jatkuvuutta eri tavoin. Tehtäväkohtainen tuotantokoalitio (task-based production coalition) tarkoittaa tässä tilapäistä taloudellista kokoonpanoa, joka syntyy tiettyä tehtävää varten, kokoaa tarvitut oikeudet ja resurssit, suorittaa tehtävän, jakaa tuotetun arvon ja voi sen jälkeen purkautua ilman koko pysyvän organisaation purkamista.

### 7.1 Tehtäväkohtaisen tuotantokoalition elinkaari

Tehtävän määrittely: principal tai agentti kuvaa tavoitteen, hyväksymiskriteerit, aikarajan, riskirajat ja budjetin.
Hajotus: agentti pilkkoo tehtävän resursseiksi ja riippuvuuksiksi - ihmiset, compute, koneaika, IP, data, rahoitus, logistiikka.
Löytäminen ja todentaminen: ehdokkaat haetaan avoimista rekistereistä ja niiden olennaiset väitteet attestataan.
Hinnanmuodostus ja neuvottelu: tarjoukset, optiot, huutokaupat tai bilateraalinen neuvottelu; salaiset rajat voidaan antaa luottamukselliselle laskentakerrokselle.
Koalition muodostaminen: projektille syntyy machine-readable constitution, joka määrittelee oikeudet, vastuut, governance-rajat, maksut, exitin ja riidanratkaisun.
Suoritus: agentit orkestroivat resurssit ja keräävät milestone-evidenssin.
Arvon ja oikeuksien jakaminen: maksu, royalty, residual claim, IP-lisenssi tai muu oikeus jaetaan sääntöjen mukaan.
Purkautuminen: aktiiviset sitoumukset päätetään, residual vastuut jäävät nimetyille vastuunkantajille, ja projektin tila, todisteketju sekä oikeushistoria jäävät pysyvään rekisteriin.

### 7.2 Dynaaminen omistus ei tarkoita jatkuvaa osakekauppaa

Dynaamisesti omistetun projektin ei tarvitse jäljitellä osakeyhtiötä mikro-osakkeilla. Taloudellisesti selkeämpi malli voi olla joukko rajattuja oikeuksia: oikeus tiettyyn kassavirtaan, oikeus käyttää IP:tä tietyllä kentällä, oikeus kapasiteettiin tietyllä aikavälillä, oikeus päätöksentekoon tietyssä vaiheessa tai oikeus lunastaa tulos sovitulla hinnalla. Näiden oikeuksien yhdistelmä muodostaa projektin taloudellisen "cap tablen" ilman, että kaikki käännetään yhden universaalin osakkeen muotoon.
Tämä lähestymistapa myös vähentää väärää analogiaa arvopaperitokenisaatioon. Protokollatalouden kiinnostavin yksikkö ei välttämättä ole tokenisoitu osake, vaan suoraan tuotannolliseen resurssiin tai suoritukseen kytketty oikeus.

## 8. Tokenisaation kaksi tasoa

Tokenisaatio-sana peittää alleen kaksi taloudellisesti hyvin erilaista rakennetta. Ensimmäisessä token digitalisoi tai paketoi olemassa olevan juridisen saatavan. Toisessa token tai muu koneellisesti siirrettävä capability toimii natiivina resurssi- tai käyttöoikeutena osana tuotantoprotokollaa. Ero on tärkeä, koska vain jälkimmäinen muuttaa yrityksen resurssirajaa suoraan.

### 8.1 Taso 1: legacy security / claim tokenization

Tällä tasolla token ei luo taloudellista oikeutta tyhjästä, vaan representoi olemassa olevaa claimia. Taustalla voi olla osakeyhtiö, velkasopimus, rahasto, SPV tai muu juridinen rakenne. Blockchain voi tehostaa omistuksen siirtoa, settlementiä, compliance-rajoja ja ohjelmoitavuutta, mutta tokenin taloudellinen sisältö riippuu edelleen siitä, kuka on oikeudellisesti velvollinen ja mitä oikeuksia haltijalla on off-chain-maailmassa.
Terminologinen tarkennus on tärkeä. Chia Asset Token (CAT) on yleinen fungible-token-standardi, jonka issuance- ja spend-sääntöjä voidaan ohjelmoida; se ei ole itsessään arvopaperi. Se voi toimia rakennuspalikkana monenlaisten omaisuus- tai claim-rakenteiden toteutuksessa. Pareton Credit Vault -mallissa taas lender saa LP/cvTokenin, joka edustaa principalia ja kertynyttä korkoa, samalla kun järjestelmään liittyy KYC/whitelisting, curator-rooli ja erillinen Credit Agreement. Tämä on hyvä esimerkki hybridistä, jossa on-chain-tila ja juridinen sopimusrakenne toimivat yhdessä.

### 8.2 Taso 2: natiivi resurssi- ja protokollatokenisaatio

Natiivissa resurssitokenisaatiossa tokenisoinnin kohteena ei ensisijaisesti ole yhtiön omistus vaan tuotannollinen oikeus. Oikeus voi olla hyvin konkreettinen ja rajattu: tietty määrä laskentaa, koneen kapasiteettislot, kuljetusikkuna, käyttöoikeus patenttiin tietyllä toimialalla ja ajalla, pääsy dataan tietyillä kyselyrajoilla, oikeus käyttää sertifioitua komponenttia tai oikeus lunastaa tietty suoritus, jos attestaatiokriteeri täyttyy.
Tällainen token ei myöskään välttämättä ole vapaasti siirrettävä tai spekulatiivinen omaisuuserä. Se voi olla non-transferable capability, credential-restricted asset, escrowssa oleva oikeus tai vain protokollan sisäinen käyttövaltuus. Taloudellinen innovaatio on resurssin oikeuksien modularisointi ja koneellinen yhteentoimivuus, ei tokenin pörssilistautuminen.

### 8.3 Miksi kahden tason erottelu on ratkaiseva?

Jos tokenisaatio jää ensimmäiselle tasolle, olemassa oleva yritys- ja arvopaperirakenne digitalisoituu mutta yrityksen sisäinen resurssipaketti ei välttämättä purkaudu. Jos siirrytään toiselle tasolle, markkinoille tulee oikeuksia, jotka aiemmin olivat implisiittisesti yrityksen sisäisiä. Juuri tämä toinen taso on protokollakapitalismin kannalta transformatiivinen: se tekee tuotantokapasiteetista ja aineettomista oikeuksista suoraan yhdisteltäviä rakennuspalikoita.

## 9. Jatkuvuus, datan pysyvyys ja "Bankruptcy Resistance"

Hajautetun arkkitehtuurin yksi mahdollinen luottamusetu ei ole se, että yksittäinen komponentti olisi erehtymätön, vaan se, ettei projektin jatkuvuus ole sidottu yhden organisaation elinkaareen. Yritys voi mennä konkurssiin, kehittäjätiimi voi hajota, käyttöliittymä voi sulkeutua ja agentit voivat vaihtua. Jos projektin olennainen data, säännöt ja tila ovat ulkoistettu avoimeen ja todennettavaan protokollakerrokseen, uuden toteuttajan on mahdollista jatkaa siitä, mihin edellinen jäi.

### 9.1 Data, tila ja suoritus pitää erottaa toisistaan

Kestävän protokollan arkkitehtuurissa on hyödyllistä erottaa vähintään neljä kerrosta: (1) evidenssi ja historiadata, (2) protokollan kanoninen tila, (3) suorittava ohjelmisto ja agentit sekä (4) juridiset oikeudet ja vastuut. Jos kaikki neljä ovat yhden SaaS-yhtiön tietokannassa, järjestelmä on käytännössä keskitetty vaikka käyttöliittymä kutsuisi itseään protokollaksi.

### 9.2 Pysyvä tallennus ja Arweave esimerkkinä

Arweave on esimerkki protokollasta, jonka eksplisiittinen tavoite on pitkäaikainen, hajautettu ja muuttumaton datan säilytys. Tämän muistion kannalta olennainen idea ei ole sitoutua tiettyyn verkkoon vaan erottaa projektin todistusaineisto ja historiatila yksittäisen palveluntarjoajan elinkaaresta. Hash-ankkurointi voi todistaa, että tietty evidenssiversio oli olemassa tiettynä aikana, ja pysyvä tallennus voi tehdä myöhemmästä auditoinnista riippumattomampaa alkuperäisestä operaattorista.
Pysyvyys tuo samalla oman normatiivisen ongelmansa. Kaikkea dataa ei pidä eikä välttämättä saa tallentaa muuttumattomasti, etenkään henkilötietoa tai liikesalaisuuksia selväkielisenä. Siksi käytännöllinen arkkitehtuuri tallentaa usein pysyvästi vain hashit, kryptografiset sitoumukset, julkiset attestoinnit ja muut minimijäljet; salainen raakadata voi sijaita erillisessä kontrolloidussa kerroksessa. "Permanence" ja "privacy" on suunniteltava yhdessä.

### 9.3 Bankruptcy Resistance: tekninen jatkuvuus vs. juridinen konkurssisuoja

Termi Bankruptcy Resistance kannattaa määritellä tässä muistiossa tarkasti. Tekninen konkurssinkestävyys tarkoittaa sitä, ettei projektin kanoninen data tai protokollatila katoa eikä ole yhden yhtiön pesänhoitajan suljettavissa vain siksi, että alkuperäinen operaattori menee konkurssiin. Jos tila on avoimesti replikoitu ja käyttöoikeudet eivät riipu yhden palvelimen tunnuksista, uusi operaattori voi periaatteessa jatkaa toimintaa.
Tämä ei kuitenkaan tarkoita juridista immuniteettia konkurssilta. Jos protokollan käyttämä patentti, tavaramerkki, asiakassopimus, fyysinen kone tai kassavarat kuuluvat konkurssiin menevälle yhtiölle, niiden kohtalo määräytyy sovellettavan insolvenssioikeuden mukaan. Siksi vahva arkkitehtuuri erottaa teknisen jatkuvuuden, omistusoikeuden, lisenssin pysyvyyden ja maksukyvyttömyysriskin toisistaan. Joissain tapauksissa tarvitaan bankruptcy-remote SPV, escrow, vakuus, irrevocable license tai muu juridinen instrumentti; lohkoketju yksin ei tee tätä työtä.

### 9.4 Anti-fragility on vahvempi väite kuin hajautus

Hajautus voi lisätä resiliencyä, jos se vähentää single point of failure -riskiä ja mahdollistaa useita riippumattomia implementaatioita. Anti-fragility on vahvempi väite: järjestelmän pitäisi parantua häiriöistä. Tämä edellyttää mekanismeja, jotka tunnistavat epäonnistumiset, muuttavat sääntöjä hallitusti ja hajauttavat riskiä ilman että kaikki replikoivat saman ohjelmistovirheen. Moni node samalla bugilla on hajautettu topologisesti mutta ei epistemisesti.

## 10. Dynaaminen koalitio käytännössä: oikeudet, arvo ja governance

### 10.1 Projektikohtainen constitution

Tehtäväkohtainen tuotantokoalitio tarvitsee vähintään saman määrän institutionaalista selkeyttä kuin pieni yhtiö, vaikka se syntyisi minuuteissa. Projektin constitution määrittelee tehtävän, osallistujien roolit, hyväksymiskriteerit, tiedonkäyttörajat, päätösvallan, panokset, vakuudet, IP:n, tulonjaon, riidanratkaisun, force majeure -ehdot, exitin ja sen, kuka kantaa residual-vastuun projektin päätyttyä.
Koneellisesti tulkittava sopimus ei siis tarkoita pelkkää smart contractia. Osa ehdoista voi olla teknisesti deterministisiä, osa vaatii evidenssiä ja attestaatiota, osa taas jää luonnollisen kielen sopimukseksi ja oikeudelliseksi tulkinnaksi. Hyvä arkkitehtuuri merkitsee selkeästi, mikä kerros ratkaisee minkäkin riidan.

### 10.2 Arvonnousun jakaminen

Koalition kiinnostava ominaisuus on mahdollisuus sitoa palkkio projektikohtaiseen kontribuutioon. Pääoma, IP, riski, data, työ ja toimitusvarmuus voidaan hinnoitella erikseen. Tämä voi tehdä yhteistyöstä tarkempaa kuin perinteinen malli, jossa kaikki residual-arvo jää saman yhtiön osakkeenomistajille. Samalla kontribuution mittaamisesta tulee oma mekanismisuunnitteluongelmansa: mitä mitataan, kuka todentaa, miten estetään panosten pilkkominen tai metriikan manipulointi ja miten käsitellään emergentti arvo, jota ei osattu määritellä etukäteen?
Realistinen ratkaisu voi olla kaksiosainen: osa palkkiosta on ennalta sovittu ja deterministinen, osa jää residual pooliin, jonka jako ratkaistaan auditoinnin, attestaation tai sovitun governance-menettelyn avulla. Täydellinen real-time meritocracy on todennäköisesti kalliimpi kuin se kuulostaa.

### 10.3 Hybridit ovat todennäköinen päätepiste

Taloudellinen koordinaatio voi olla protokollanatiivisti dynaamista samalla kun juridinen vastuu on keskitetty ohueen entiteettiin. Esimerkiksi yksi Oy tai projektikohtainen SPV voi toimia vakuutuksen, veroilmoitusten, työnantajavelvoitteiden ja tuotevastuun ankkurina, vaikka itse tuotanto, resurssit ja arvonjakosäännöt muodostuvat protokollassa. Tässä mielessä yritys voi "ontelontua": operatiivinen sisältö siirtyy agenteille ja protokollille, mutta vastuukuori säilyy.

## 11. Sovellusesimerkkejä

### 11.1 Luottamuksellinen R&D-matching ja lisensointi

Edellä kuvattu Coasean heaven -raja-arvo voidaan konkretisoida R&D-matchmakeriksi. Yritys A antaa järjestelmälle salaisen teknisen ratkaisun ja sen käyttörajat; yritys B antaa salaisen ongelmakuvauksen ja budjetin. Neutral Witness laskee yhteensopivuuden, palauttaa rajatun match-attestaation ja avaa agenttien välisen neuvottelun vain, jos molempien etukäteen asettamat rajat täyttyvät. Tuloksena voi olla lisenssi, option kaltainen tutkimusoikeus, yhteiskehitys tai kertaluonteinen kauppa.

### 11.2 Due diligence ja yrityskaupat

Myyjän ei tarvitse luovuttaa kaikkea datahuonetta ostajalle, jos osa hyväksymiskriteereistä voidaan todentaa luottamuksellisesti. Ostaja voi esimerkiksi määritellä kynnykset asiakaspoistumalle, tietoturvapoikkeamille, source-code provenance -riskeille tai sopimusten change-of-control -ehdoille. Neutral Witness palauttaa rajatun raportin ja evidenssiviitteet, minkä jälkeen ihmiset tarkistavat vain poikkeamat ja korkean riskin kohdat.

### 11.3 Suljetut huutokaupat ja moniulotteinen hinnanmuodostus

Huutokaupassa voittaja ei välttämättä määräydy hinnan perusteella. Osapuolten salaisiin tarjouksiin voidaan sisällyttää toimitusaika, kapasiteetti, laatu, riskiraja, maantieteellinen rajoite ja sertifikaatit. Luottamuksellinen laskentakerros voi valita säännön mukaisen voittajan ilman, että kilpailijoiden tarjousfunktiot paljastuvat toisilleen. Tällainen mekanismi on erityisen kiinnostava tuotantokapasiteetin, logistiikan ja B2B-hankinnan tapauksissa.

### 11.4 Ilmailun resurssimarkkina

Ilmailussa varaosat, MRO-slotit, tooling, crew, rahtikapasiteetti ja dronekapasiteetti voivat olla olemassa mutta informaation ja luottamuksen siiloissa. Protokolla voisi tehdä saatavuudesta, sertifioinnista, huoltohistoriasta, käyttörajoista ja hinnasta koneellisesti löydettäviä. Neutral Witness -kerros voisi todentaa salaisia tai luvanvaraisia dokumentteja paljastamatta niitä jokaiselle mahdolliselle ostajalle. Pitkän aikavälin visio on reaaliaikainen kapasiteettimarkkina, ei pelkkä uusi listausportaali.

### 11.5 Digitaalinen omistus ja lisenssien alustariippumattomuus

Digitaalisessa omistuksessa keskeinen suunnitteluperiaate on erottaa tiedosto oikeudesta. Tiedosto voi kopioitua, mutta käyttö-, jälleenmyynti-, kaupallinen tai muut lisenssioikeudet voidaan rekisteröidä ja todentaa erikseen. Protokollatalouden näkökulmasta kiinnostavaa ei ole NFT sinänsä, vaan se, voiko oikeus liikkua alustasta toiseen ja tulla agenttien ymmärtämäksi ilman yhden vendorin API:a.

### 11.6 UX ulkoisvaikutuksena

Huono UX voi siirtää yrityksen säästämän suunnittelu- ja kehityskustannuksen käyttäjän ajaksi. Alkuperäisen muistion idea voidaan kehystää Pigou-tyyppiseksi mekanismiksi: jos mitattava käyttöliittymäkitka aiheuttaa systemaattisen ulkoisvaikutuksen, protokolla voi tehdä korjauksista bountyja tai hinnanmuodostuksen muuttujia. Tämä on spekulatiivinen sovellus, mutta se havainnollistaa laajempaa periaatetta: protokollat voivat tehdä aiemmin näkymättömistä kustannuksista mitattavia ja kaupattavia.

## 12. Protokollakapitalismi: täsmennetty määritelmä

Vanha yritysmalli voidaan abstrahoida muodossa "omista tai kontrolloi resurssipakettia -> koordinoi hierarkialla". Protokollamalli on "resurssit voivat pysyä eri omistajilla -> standardoi käyttöoikeudet ja koordinoi niiden käyttöä markkina- ja sopimusmekanismeilla". Käytännössä järjestelmät asettuvat tälle janalle eri kohtiin resurssiluokasta riippuen.
Historiallisena heuristiikkana voidaan hahmottaa kolme vaihetta: yksi suuri suunnitteluverkko, monien kilpailevien yritysten kapitalismi ja mahdollinen protokollatalous, jossa osa markkinakoordinaatiosta tunkeutuu yritysten sisälle. Tämä ei ole deterministinen historialaki vaan tutkimushypoteesi siitä, miten koordinaatioteknologian hinnan lasku voi muuttaa institutionaalisia rajoja.

## 13. Protokollatalouden reunaehdot ja kriittiset haasteet

Protokollatalouden kiinnostavuus ei poista klassisia institutionaalisia ongelmia. Päinvastoin: mitä enemmän koordinointia siirretään pysyvältä organisaatiolta dynaamisille agenteille ja projekteille, sitä eksplisiittisemmin vastuu, vero, governance ja virhetilanteet on määriteltävä. Seuraavat kohdat ovat rationaalinen vastapaino hajautumishypoteesille.

### 13.1 Verotus ja tuotevastuu

Dynaaminen koalitio ei voi olla juridisesti vastuuvapaa tyhjiö. Jos koalitio suunnittelee tuotteen, myy palvelun tai aiheuttaa vahingon, jonkun on oltava tunnistettavissa vastuunkantajaksi sovellettavan lain mukaan. Vastuu voi kohdistua valmistajaan, maahantuojaan, palveluntarjoajaan, projektin operaattoriin, osallistujaan tai vakuuttajaan. Taloudellinen protokolla voi jakaa maksut millisekunneissa, mutta se ei voi yksipuolisesti määritellä, kenellä on lakisääteinen tuotevastuu.
Sama koskee verotusta. Projektikohtaiset rojaltit, tokenit, palvelumaksut, IP-lisenssit ja rajat ylittävät agenttitransaktiot voivat synnyttää vaikeita kysymyksiä tulon lähteestä, arvonlisäverosta, lähdeverosta, kiinteästä toimipaikasta ja raportointivelvollisuuksista. Protokollan kilpailuetu voi pitkällä aikavälillä tulla siitä, että verotus ja withholding automatisoidaan sääntökerrokseen - ei siitä, että velvoitteet yritetään häivyttää.

### 13.2 Sääntelyriskit ja "koodi on laki" -mallin rajat

Smart contract voi täytäntöönpanna sen, minkä se osaa havaita ja mikä voidaan formalisoida. Se ei ratkaise epätäydellisiä sopimuksia, petosta, pakkoa, kohtuutonta ehtoa, kuluttajansuojaa, kilpailuoikeutta tai sitä, että todellisen maailman oracle on väärässä. Lisäksi bugi, avainkompromissi tai governance-kaappaus voi tehdä automaattisesta täytäntöönpanosta vahingollisen juuri siksi, että se on nopea.
Siksi vakavasti otettava protokollatalous tarvitsee myös oikeudellisen tulkintakerroksen, emergency pause -mekanismit, muutoksenhaku- ja dispute-prosessit sekä versionhallinnan. "Code is law" on hyödyllinen kuvaus teknisen suorituskerroksen determinismistä, mutta heikko yleinen yhteiskuntateoria. Parempi tavoite on "code makes some commitments cheaply verifiable, law resolves the residual".

### 13.3 Agenttien mikro-neuvottelun orkestrointikustannukset ja Coasen integraatiopaine

AI-agentit voivat teoriassa neuvotella tuhansia pieniä sopimuksia, mutta jokainen neuvottelu kuluttaa laskentaa, aikaa, huomiota, likviditeettiä ja riskiarviota. Jos rajapinnat ovat heterogeenisia, hinnat muuttuvat nopeasti tai tehtävä vaatii tiukkaa sekvensointia, mikro-markkina voi olla kalliimpi kuin pitkäaikainen suhde. Tällöin Coasen integraatiopaine palaa uudessa muodossa: on halvempaa muodostaa pysyvämpi tuotantoverkko kuin kilpailuttaa kaikki jatkuvasti.
Todennäköinen markkinarakenne ei siksi ole atomeiksi pilkottu spot-taloudellinen maailma. Se voi koostua mesorakenteista: preferred supplier -verkostoista, option kaltaisista kapasiteettisopimuksista, jatkuvista service-level-suhteista, tilaajamalleista, delegoiduista agenttijoukoista ja projektikohtaisista koalitioista. Protokollan tehtävä on tehdä rajojen uudelleenjärjestämisestä halvempaa, ei pakottaa jokaista transaktiota spot-markkinaan.

### 13.4 Tacit knowledge, kulttuuri ja yhteiset komplementaarisuudet

Kaikki arvokas tieto ei ole helposti siirrettävissä dataksi tai attestaatioiksi. Tiimin yhteinen kieli, tuotetuntuma, hiljainen tieto, moraali, keskinäinen luottamus ja pitkän aikavälin oppiminen voivat tehdä pysyvästä organisaatiosta tehokkaamman kuin vaihteleva koalitio. Erityisesti silloin, kun tuotteen osat ovat voimakkaasti yhteisriippuvaisia, modulaarisuus ei ole ilmainen suunnitteluoletus vaan itse tuotannon tulos.

### 13.5 Yksityisyys, tietoturva ja uusi keskitetty luottamuspiste

Neutral Witness voi poistaa tarpeen luottaa vastapuoleen mutta samalla synnyttää tarpeen luottaa todentamisjärjestelmään. Jos se kerää useiden yritysten salaisia tietoja, sen hyökkäyspinta ja taloudellinen arvo hyökkääjälle kasvavat poikkeuksellisen suuriksi. Siksi arkkitehtuurin pitää minimoida se, mitä yksittäinen komponentti koskaan näkee, jakaa avaimet ja kontrollit, käyttää eriytettyjä suoritusympäristöjä ja tehdä kaikki korkean riskin tietovirrat jälkikäteen auditoitaviksi.

### 13.6 Kilpailuoikeus ja kartelliriskit

Järjestelmä, joka voi laskea useiden kilpailijoiden salaisen datan yli, voi sekä lisätä kilpailua että heikentää sitä. Se voi avata uusia toimittajia ja vähentää tiedon epäsymmetriaa, mutta se voisi myös optimoida hintoja, kapasiteetin pidättämistä tai markkinajakoa tavalla, jota yksittäiset yritykset eivät saisi sopia keskenään. Sallittu laskenta ja tavoitteet on siksi rajattava kilpailuoikeudellisesti; "neutraali" laskenta ei tee kielletyn koordinaation lopputuloksesta sallittua.

### 13.7 Pysyvyys vs. poistettavuus

Pysyvä data lisää auditointiluottamusta mutta voi olla ristiriidassa tietosuojan, liikesalaisuuksien ja virheen korjaamisen kanssa. Kestävän järjestelmän tulisi erottaa muuttumaton todiste siitä, että jokin tapahtuma tai data-versio oli olemassa, itse salaisesta sisällöstä. Kryptografinen commitment, avainten hävittäminen, access-control ja redaction-kerrokset ovat usein turvallisempia kuin kaiken raakasisällön ikuinen julkaiseminen.

### 13.8 Malliriski ja common-mode failure

Jos sama LLM, sama ranking-logiikka tai sama attestaatiopolitiikka välittää suuren osan markkinan päätöksistä, hajautettu omistus ei välttämättä tarkoita hajautettua ajattelua. Yhteinen malli voi korreloida virheet uudelleen. Siksi episteminen hajautus vaatii mallien, evidenssilähteiden, implementaatioiden ja arviointimenetelmien diversiteettiä sekä kykyä vertailla ristiriitaisia attestaatioita.

## 14. Formalisoitava päätössääntö: milloin protokolla voittaa hierarkian?

Teorian tutkimuskelpoisuutta voi parantaa tekemällä yrityksen rajan päätössäännöstä eksplisiittisen. Yksinkertaistettuna tehtävä T kannattaa ulkoistaa protokollakoalitiolle, jos sen odotettu kokonaiskustannus on pienempi kuin vastaavan transaktion organisointi pysyvän hierarkian sisällä:
C_protocol(T) + R_contract(T) + R_liability(T) + R_security(T) < C_hierarchy(T) + C_lock-in(T) + C_idle-capacity(T)
Vasen puoli sisältää markkinakoordinoinnin lisäksi sopimus-, vastuu- ja tietoturvariskit. Oikea puoli sisältää sisäisen organisaation kustannuksen lisäksi lukkiutumisen ja vajaakäytön kustannuksia. Teknologinen kehitys voi liikuttaa molempia puolia. Empiirisesti kiinnostava kysymys on, missä resurssiluokissa käyrät leikkaavat toisensa ensin.

## 15. Tutkimushypoteesit

H1: AI-agentit alentavat tietyissä resurssiluokissa ulkoisen markkinakoordinaation kustannuksia suhteellisesti enemmän kuin yrityksen sisäisen hierarkiakoordinaation kustannuksia.
H2: Kun verification- ja disclosure-kustannukset alenevat, optimaalinen vertikaalinen integraatio pienenee erityisesti modulaarisissa ja standardoitavissa tehtävissä.
H3: Koneellisesti todennettava maine, provenance ja attestaatiot voivat korvata osan yritysbrändin ja organisaatiojäsenyyden tuottamasta luottamuksesta.
H4: Monen osapuolen yksityisen informaation yli tapahtuva luottamuksellinen laskenta kasvattaa sellaisten markkinoiden määrää, jotka eivät nykyisin synny paljastamiskustannusten vuoksi.
H5: Päätöksenteon hajautuminen voi alentaa systeemisten virheiden korrelaatiota, jos myös mallit, evidenssi ja kannustimet ovat riittävän riippumattomia.
H6: Protokollamarkkinat synnyttävät pysyvien yritysten rinnalle tehtäväkohtaisia tuotantokoalitioita, joiden elinkaari on olennaisesti lyhyempi kuin oikeushenkilön.
H7: Agenttiautomaation myötä pienen organisaation kapasiteettirajaa määrää yhä enemmän principalin poikkeuskäsittely- ja vastuunkantokyky, ei työntekijämäärä.
H8: Tehtäväkohtainen koalitio voittaa Oy-muotoisen integraation todennäköisimmin silloin, kun asset specificity on matala, suorituskriteerit ovat mitattavia ja oikeudet ovat modulaarisia.
H9: Pysyvä, operaattorista riippumaton data- ja tilakerros alentaa jatkuvuusriskistä maksettavaa riskipreemiota, mutta vaikutus pienenee, jos avainresurssit ovat silti yhden yhtiön konkurssipesässä.
H10: Luottamuksellinen R&D-matching kasvattaa teknologialisenssien ja yhteiskehitysten määrää vain, jos osallistujien truthful disclosure -kannustimet ja IP-vuotoriski on ratkaistu.
H11: Dynaaminen mikro-neuvottelu tuottaa endogeenisesti uusia integraatiomuotoja, kun agenttien orkestrointikustannus ylittää pitkäkestoisen suhteen ylläpitokustannuksen.

## 16. Neutral Witnessin tutkimus- ja tuotekysymykset

Miten todistetaan jälkikäteen, mitä mallia, promptia, sääntöversiota ja aineistoversiota verdictissä käytettiin?
Miten selective disclosure toteutetaan niin, ettei palvelin, malli tai vastapuoli saa tarpeetonta tietoa?
Miten estetään prompt injection, adversarial evidence, data poisoning ja tarkoituksellinen aineiston manipulointi?
Miten erotetaan havainto, evidenssin luotettavuus, tulkinta, sääntöjen soveltaminen ja lopullinen verdict toisistaan?
Milloin human review on pakollinen, milloin valinnainen ja milloin se vain lisää viivettä ilman merkittävää riskihyötyä?
Miten väärä verdict korjataan niin, että pysyvä audit trail säilyy mutta virheellinen attestaation käyttö voidaan pysäyttää?
Miten usean osapuolen salaiset ehdot käsitellään ilman, että Neutral Witnessista tulee yksityisyyden single point of failure?
Milloin tarvitaan TEE:tä, MPC:tä, ZK-todisteita tai verifioitavaa laskentaa pelkän luottamuksellisen palvelimen lisäksi?
Miten query-policy estää salaisen datan uuttamisen toistuvilla kyselyillä?
Miten taloudelliset vakuudet, maine ja auditointi kalibroidaan niin, että vilppi ei ole kannattavaa mutta markkinoille tulon kynnys ei nouse liian korkeaksi?
Miten kilpailuoikeudellisesti rajataan R&D-matchaus, tarjousvertailu ja markkinadata niin, ettei järjestelmä fasilitoi kartellikoordinaatiota?
Miten attestaatiot sidotaan oikeudelliseen vastuuseen, vakuutukseen ja muutoksenhakuun korkean riskin käyttötapauksissa?

## 17. MVP- ja tutkimuspolku

Kokonaisvision todistaminen yhdellä kertaa olisi huono tutkimusstrategia. Neutral Witness kannattaa testata ensin käyttötapauksessa, jossa salaisen informaation paljastamiskustannus on selvästi korkea, suoritus voidaan rajata ja taloudellinen hyöty mitata. Tällaisia ovat esimerkiksi due diligence, suljettu B2B-huutokauppa tai rajattu compliance-attestaatio.

## 18. Mitä teoria ei väitä

Yritykset eivät välttämättä katoa. Pitkäkestoiset suhteet, tacit knowledge, yhteinen kulttuuri, tuotevastuu, pääomaintensiivisyys ja vahvat komplementaarisuudet voivat suosia hierarkiaa myös erittäin kehittyneessä protokollataloudessa.
Kaikkia resursseja ei kannata pilkkoa atomistisille spot-markkinoille. Jatkuva kilpailutus voi lisätä volatiliteettia, opportunismia, viivettä ja orkestrointikustannusta.
AI ei automaattisesti tee markkinoista parempia. Sama teknologia voi tehdä suurista hierarkioista tehokkaampia ja lisätä keskittämistä.
Neutral Witnessin verdict ei takaa totuutta. Todisteiden provenance, malliriski, turvallisuus, adversarial behavior ja oikeudellinen vastuu ovat erillisiä ongelmia.
Avoin protokolla ei tarkoita avointa raakadataa. Nimenomaan salaisen informaation yli tapahtuva laskenta on yksi konseptin keskeisistä tavoitteista.
Pysyvä tallennus ei tee taloudellisesta oikeudesta konkurssinkestävää, jos itse oikeus tai resurssi kuuluu konkurssipesään.
Tokenisaatio ei itsessään hajauta valtaa. Token voi yhtä hyvin vahvistaa keskitettyä issueria, jos oikeuksien lähde ja governance pysyvät keskitettyinä.
Hajautus ei automaattisesti pienennä virheiden korrelaatiota. Jos kaikki agentit käyttävät samaa mallia ja samoja datalähteitä, common-mode failure voi kasvaa.
Coasean heaven on raja-arvo ja tutkimusheuristiikka, ei ennuste siitä, että transaktiokustannukset tai strateginen käyttäytyminen todella katoaisivat.

## 19. Paperin mahdollinen ydinargumentti

The firm can be understood as a technology for bundling resources, trust and decision rights when external coordination, verification, disclosure and contracting are expensive. AI agents and interoperable protocols may reduce these costs, while confidential attestation systems such as the proposed Neutral Witness may allow parties to compute over information they cannot reveal to one another. If protocol-mediated coordination becomes sufficiently cheap relative to hierarchical coordination, the effect may extend beyond outsourcing and smaller firms: rights to resources historically bundled inside firms may become independently discoverable, verifiable, negotiable and composable.
The institutional consequence would not necessarily be the disappearance of the corporation. A more plausible outcome is a layered economy in which permanent legal entities coexist with task-based production coalitions, protocol-native resource rights and persistent public state. The corporation may remain the liability and tax wrapper while an increasing share of production is assembled dynamically across organizational boundaries.
The potential advantage is not merely lower transaction cost. Under the right conditions, fragmentation may also reduce correlated decision error by allowing more independent actors to test competing hypotheses. But this benefit is conditional: shared models, shared oracles and shared governance can recreate correlated failure at the protocol layer. The relevant research question is therefore not decentralization versus centralization in the abstract, but which institutional layer should carry which function.

## 20. Lyhyet kiteytykset jatkokäyttöön

Yritys on markkinatalouden sisälle rakennettu koordinaatiohierarkia - ei markkinoiden vastakohta vaan yksi tapa säästää markkinoiden käyttökustannuksia.
Seuraava askel ei välttämättä ole yritysten katoaminen vaan markkinoiden tunkeutuminen yhä syvemmälle yritysten sisäisiin resurssioikeuksiin.
Yritys ratkaisee koordinointiongelman usein omistamalla tai kontrolloimalla resurssipaketin. Protokolla yrittää ratkaista saman ongelman standardoimalla resurssien käyttöoikeudet.
Yritys ei ole vain resurssien säiliö vaan myös luottamuksen, vastuun ja todistusaineiston säiliö.
Neutral Witnessin tehtävä ei ole vain tarkistaa faktoja, vaan mahdollistaa rajattu koordinointi yksityisen informaation yli.
Laskennallinen näkyvyys voi olla taloudellisesti arvokasta ilman, että raakadata muuttuu julkiseksi.
Tehtäväkohtainen tuotantokoalitio on projekti, joka muodostuu, suorittaa, jakaa arvon ja purkautuu - mutta sen vastuu ei saa purkautua tyhjiöön.
Security-tokenisaatio digitalisoi usein olemassa olevan claimin; protokollaresurssin tokenisaatio modularisoi itse tuotannollisen oikeuden.
Bankruptcy Resistance on ensisijaisesti arkkitehtoninen jatkuvuusominaisuus. Juridinen konkurssisuoja vaatii erillisen oikeudellisen rakenteen.
Hajautetun järjestelmän etu ei ole erehtymättömyys vaan mahdollisuus matalampaan virheiden korrelaatioon - jos myös mallit, evidenssi ja kannustimet ovat hajautettuja.
Älä optimoi vain toimijoita. Optimoi peliä, jossa toimijat ja agentit tekevät päätöksiä.
Mitä tapahtuu yrityksen rajalle, kun markkinoiden käyttäminen muuttuu erittäin halvaksi mutta vastuun kantaminen ei?

## 21. Seuraavat tutkimusaskeleet

Systemaattinen kirjallisuuskatsaus: theory of the firm, transaction cost economics, property rights, electronic markets, modularity, market-based organizations, e-lance ja algorithmic management.
Neutral Witness -prior-art: confidential computing, MPC, TEE, zero-knowledge, verifiable computation, AI judges, attestations, data clean rooms, sealed-bid auctions, automated due diligence ja policy enforcement.
Patenttikartoitus ennen vahvoja uutuus- tai suojausväitteitä.
Formaalimalli, jossa AI/protokollat muuttavat sekä C_market- että C_hierarchy-funktioita ja yrityksen raja määräytyy endogeenisesti.
Williamson-laajennus: asset specificity, uncertainty ja frequency parametrisoidaan resurssiluokittain.
Episteminen malli: milloin päätöksenteon fragmentaatio aidosti pienentää error correlationia ja milloin yhteiset AI-mallit kasvattavat sitä?
Empiirinen testi toimialalla, jossa resurssien käyttöaste, hakukustannus ja ulkoisen markkinan kitka voidaan mitata ennen/jälkeen.
R&D-matchingin mekanismisuunnittelu: truthful reporting, query leakage, antitrust constraints, pricing of invention rights ja opt-in/opt-out.
Juridinen design study: mikä on ohuin mahdollinen liability/tax wrapper tehtäväkohtaiselle tuotantokoalitiolle eri oikeusjärjestyksissä?
Permanence study: mitä pitää säilyttää muuttumattomana, mitä salattuna ja mitä pitää voida poistaa tai mitätöidä?

## 22. Lähteet ja taustalukeminen

Coase, R. H. (1937). The Nature of the Firm. Economica, 4(16), 386-405. DOI: 10.1111/j.1468-0335.1937.tb00002.x.
Hayek, F. A. (1945). The Use of Knowledge in Society. American Economic Review, 35(4), 519-530.
Williamson, O. E. (1975). Markets and Hierarchies: Analysis and Antitrust Implications. Free Press.
Malone, T. W., Yates, J. & Benjamin, R. I. (1987). Electronic Markets and Electronic Hierarchies. Communications of the ACM, 30(6), 484-497. DOI: 10.1145/214762.214766.
Chia Network. CATs / Chia Asset Tokens - official documentation. Used here only to clarify that CAT is a generic fungible-token primitive with programmable issuance rules, not inherently a security.
Pareto. Credit Vaults / Lenders - official documentation. Used as an example of a hybrid on-chain credit position in which LP/cvTokens operate alongside verification, curator roles and a Credit Agreement.
Williams, S. et al. (2023 draft). Arweave: The Permanent Information Storage Protocol; and Arweave protocol documentation. Used as an example of permanent, decentralized data-storage architecture.
Alkuperäinen tutkimus- ja tuotekehitysmuistio: Yrityksestä protokollatalouteen - Laajat työmuistiinpanot: Coase, hajautettu kokeilu, resurssipakettien purkaminen, AI-agentit ja Neutral Witness.

## 23. Työstatus

Tämä versio on uudelleenkirjoitettu tutkimus- ja tuotekehitysmuistio. Se on tarkoituksella argumentatiivisesti vahvempi kuin alkuperäinen luonnos, mutta samalla varovaisempi siinä, mikä lasketaan teoriaksi, mikä synteesiksi ja mikä käyttäjän omaksi konseptiksi. Seuraava laadullinen askel on lähteistetty kirjallisuuskatsaus ja prior-art-kartoitus, jonka jälkeen materiaalista voidaan rakentaa joko akateeminen working paper, tekninen white paper tai sijoittaja-/tuotestrategiadokumentti.

