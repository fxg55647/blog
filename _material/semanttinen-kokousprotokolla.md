# Semanttinen reaaliaikainen esitys- ja kokousprotokolla

*Kirjoittajan muistiinpano (tallennettu 2026-09-30). Tiivistetty versio on
postauksessa kohdassa II.7 "Protokollat alustojen tilalle". Tästä voisi
tehdä oman jatkopostauksen.*

*Tarkistettavaa ennen julkaisua: kaistalaskelmat ovat karkeita arvioita.
Kilpailutilanteen tiedot (Zoom Slides, Recall.ai, RDP/SPICE, W3C Media Timed
Events, MPEG-I) on tarkistamatta; PowerPoint Livestä ks. postauksen I.7.
Ilmeiden ja tunteiden välittäminen työpaikalla: EU:n tekoälyasetus kieltää
tunteiden päättelemisen biometrisesta datasta työpaikoilla ja oppilaitoksissa
(art. 5(1)(f), voimassa 2.2.2025 alkaen), paitsi lääketieteellisistä tai
turvallisuussyistä.*

---

**Tiivistelmä:** Nykyinen ruudunjako hukkaa valtavasti rakennetta.
PowerPoint, selain, taulukko tai muu sisältö muutetaan pikseleiksi ja
videoksi, vaikka alkuperäinen sisältö olisi jo valmiiksi koneellisesti
ymmärrettävää. Parempi malli olisi välittää ihmisille tarvittaessa video ja
audio, mutta niiden rinnalla myös semanttinen tapahtumavirta: kuka puhuu,
mitä dokumenttia näytetään, mikä slide tai objekti on aktiivinen, mihin
osoitetaan, mitä valitaan ja mitä tapahtuu. Perusperiaate: "Send meaning
first, pixels only when necessary."

Nykyisessä mallissa kokous latistuu käytännössä kolmeen asiaan: audioon,
videoon ja chattiin. Samalla katoaa paljon tietoa, jonka järjestelmä
oikeasti jo tietää: osallistujien identiteetit, aktiivinen puhuja, jaettu
dokumentti, slide-numero, taulukon solu, kaavion objekti, osoitin, valinnat,
reaktiot ja tapahtumien keskinäiset suhteet.

Mahdollinen uusi kerros voisi näyttää tältä:

```
Media:
- audio
- webcam video
- fallback screen video

Semantic stream:
- participant_joined
- speaker_changed
- utterance
- document_opened
- slide_changed
- object_selected
- pointer_move
- highlight
- chat_message
- reaction
- decision
- action_assigned
```

Esimerkiksi puhe voisi liittyä suoraan siihen visuaaliseen objektiin, josta
puhutaan:

```
13:42:18 Laura speaking
13:42:20 slide = 17
13:42:21 object = revenue_chart
13:42:23 highlight = Germany
13:42:24 "Germany explains most of the decline"
```

Tällöin AI:n ei tarvitse päätellä videokuvasta kuka puhuu, tehdä OCR:ää
kalvosta ja arvata mihin pylvääseen puhuja viittaa.

## Rakenteinen ruudunjako

Ruudun videon sijaan sovellus voisi lähettää alkuperäisen sisällön aina kun
mahdollista:

```
HTML
SVG
PDF-rakenne
PowerPoint-objektit
spreadsheet cells
code
3D scene
```

ja niiden lisäksi vain tapahtumat:

```
show slide 12
highlight chart_3
pointer x=0.71 y=0.42
select cell D18
```

Video olisi fallback tilanteisiin, joissa semanttista rakennetta ei ole
saatavilla.

Tästä olisi kolme välitöntä hyötyä:

- vähemmän kaistaa
- parempi kuvanlaatu
- AI ymmärtää sisällön suoraan

Staattista kalvoa ei tarvitse lähettää esimerkiksi 30 kertaa sekunnissa. Se
voidaan lähettää kerran ja sen jälkeen vain "slide 7 näkyviin".
Vastaanottaja renderöi sisällön paikallisesti.

## Mahdollinen kaistasäästö

Tavallisessa "kalvot + puhuva pää" -palaverissa säästö voisi olla erittäin
suuri.

Esimerkkisuuruusluokka:

```
Nykyinen:
screen share ~450 MB/h
webcam       ~300 MB/h
audio         ~30 MB/h
yhteensä     ~780 MB/h

Rakenteinen:
slides/HTML   ~10 MB
events        <1 MB
webcam        ~80 MB
audio         ~30 MB
yhteensä     ~120 MB
```

Tällaisessa tapauksessa säästö voisi olla noin 80–85 %. Hyvin staattisessa
esityksessä jopa noin 90 % voi olla mahdollinen; jatkuvasti liikkuvassa
demossa hyöty olisi pienempi.

## Kaistan älykäs priorisointi

Kaikki pikselit eivät ole yhtä arvokkaita.

Kun kalvo näkyy rakenteisena täydellä laadulla, puhujan kasvokuvan laatua
voidaan pudottaa rajusti silloin kun hän vain puhuu. Jos hän näyttää
fyysistä esinettä tai ele muuttuu tärkeäksi, video nostetaan taas
hyvälaatuiseksi.

Prioriteetti voisi olla:

1. audio
2. semantic events
3. structured presentation
4. active speaker video
5. other webcams

Huonolla yhteydellä ensimmäisenä heikkenisi siis turhin informaatio eikä
tärkein.

## Jokainen osallistuja omana streaminaan

Jokaisella osallistujalla voisi olla oma:

- audio
- video
- semantic events

Jos yhden ihmisen yhteys heikkenee, vain hänen videonsa resoluutio/FPS
pudotetaan. Muiden osallistujien ääni, video ja esitys eivät kärsi.

Esittäjän huono yhteys ei myöskään enää sumentaisi PowerPointia tai Exceliä,
koska vastaanottajat olisivat jo saaneet itse dokumentin. Verkossa kulkisi
vain:

```
slide = 14
pointer = chart_3
highlight = Germany
```

## Kokous muuttuu videosta tapahtumaksi

Tämä on ehkä idean suurempi seuraus: kokous ei olisi enää ensisijaisesti
tallenne vaan rakenteinen tapahtuma.

Siitä voisi jälkikäteen generoida:

- meeting notes
- 5 min recap
- executive summary
- training material
- CRM update
- Confluence page
- action list
- decision history
- illustrated article

Myöhemmin mukaan tulevan työntekijän ei tarvitse katsoa 67 minuutin videota.
AI voisi näyttää suoraan:

> Tässä Laura esitti luvut, Mikko vastusti tästä syystä ja tämän jälkeen
> päätettiin X.

## Eri vastaanottajille eri esitys

Koska sisältö ja ulkoasu erotetaan toisistaan, sama kokous voidaan renderöidä
eri tavoin:

```
desktop       → kalvot
phone         → pystysuora artikkeli
AR            → kelluvat objektit
screen reader → rakenteinen teksti
AI            → JSON/event stream
```

Myös eri kieliset osallistujat voisivat nähdä saman sisällön eri kielillä.

## AI-agentit

AI-agentin ei tarvitsisi "katsoa Teamsia" videona. Se voisi liittyä suoraan
tapahtumavirtaan:

```
Laura speaking
slide 12 visible
revenue_chart selected
Germany highlighted
question addressed to finance
```

Tämä olisi nopeampaa, halvempaa ja luotettavampaa kuin video + vision + OCR.

MCP voisi olla agenttien rajapinta tähän kerrokseen, mutta itse tapahtumien
kuvaus kannattaisi ehkä määritellä erillisenä avoimena protokollana.

## Mahdollinen protokolla / kuvauskieli

Työnimi voisi olla esimerkiksi:

- Multimodal Semantic Stream
- Meeting Semantic Stream
- Semantic Presentation Protocol
- Experience Markup Language

MCP hoitaisi esimerkiksi työkalut:

```
get_current_state()
get_transcript()
capture_frame()
get_document_object()
append_note()
```

Semanttinen protokolla puolestaan määrittelisi mitä tapahtumat tarkoittavat
ja miten ne liittyvät toisiinsa.

Esimerkiksi:

```
speech EXPLAINS visual
visual SUPPORTS claim
claim CAUSED decision
decision CREATED action
action ASSIGNED_TO person
```

## Deterministinen replay ja provenance

Jos dokumenttiversiot ja tapahtumat säilytetään, voidaan myöhemmin
rekonstruoida mitä osallistujat näkivät tietyllä hetkellä:

```
14:03:21 slide 7
14:03:24 pointer → revenue column
14:03:26 Laura: "this is the number I'm worried about"
```

Tähän voisi myöhemmin liittää myös source hashit, allekirjoitukset, device
attestations ja muun provenance-datan. Näin kokouksen historia voisi olla
muutakin kuin muistiinpano: voidaan näyttää mihin alkuperäiseen tietoon
päätös perustui.

## Kilpailutilanne

Palasia on jo paljon, mutta koko yhdistelmää ei näyttäisi olevan yleisenä
avoimena kerroksena.

- **PowerPoint Live / Teams** on lähin todiste rakenteisen esityksen ideasta.
  PPT lähetetään vastaanottajille dokumenttina eikä pelkkänä screen share
  -videona. Microsoft on myös korostanut merkittävää kaistasäästöä.
- **Zoom Slides** liikkuu samaan suuntaan Zoom-ekosysteemissä.
- **Recall.ai** yhtenäistää eri meeting-palveluiden tapahtumia ja tarjoaa
  tietoa esimerkiksi osallistujista, puhujista, transkriptiosta, chatista ja
  screen sharen alkamisesta/loppumisesta. Se on lähellä "meeting semantic
  streamia", mutta itse jaetun sisällön semanttinen rakenne jää edelleen
  pitkälti puuttumaan.
- **RDP/SPICE** ovat pitkään vähentäneet kaistaa lähettämällä
  piirtokomentoja ja cachettamalla sisältöä bitmap-videon sijaan. Ne
  ymmärtävät kuitenkin renderöintiä, eivät merkitystä.
- **W3C Media Timed Events / WebVTT** mahdollistavat aikaleimatun metadatan
  synkronoinnin videon kanssa.
- **MPEG-I Scene Description** kuvaa audiovisuaalista sisältöä objekteina,
  mutta eri käyttötarkoitukseen.

Markkinarako voisi siis olla juuri niiden väliin jäävä yleinen kerros:

```
MEDIA LAYER
audio / video / pixels

SEMANTIC LAYER
participants
speaker
documents
slides
objects
pointer
selection
actions
relationships

AGENT LAYER
MCP
AI agents
automation
```

## Ydinajatus

Ei rakenneta vain parempaa Teamsia tai meeting-notes-appia.

Rakennetaan avoin semanttinen rinnakkaiskanava digitaaliseen reaaliaikaiseen
viestintään.

Sen perusperiaate:

> Send meaning first, pixels only when meaning is unavailable.

Sama malli voisi toimia kokouksissa, webinaareissa, YouTube-tyyppisessä
sisällössä, koulutuksissa, etätuessa, selaimessa, CAD:ssa, dashboardeissa,
peleissä ja myöhemmin myös AI-agenttien välisessä viestinnässä.

## Jatkoajatus: syntetisoitu yhteinen huone

Tuo voisi olla jopa käyttöliittymän kannalta yksi kiinnostavimmista
seurauksista.

Jos jokaisesta osallistujasta kulkee erillinen presence/pose/expression-streami,
vastaanottajan ei tarvitse näyttää 12 erillistä videoruutua. Se voisi
renderöidä kaikki samaan virtuaaliseen näkymään: ikään kuin ihmiset
istuisivat saman pöydän ääressä tai samassa katsomossa. Tällöin voisi
hahmottaa yhdellä silmäyksellä, kuka nyökkää, kuka näyttää hämmentyneeltä,
kuka aikoo puhua ja mihin ihmiset katsovat.

Esimerkiksi:

```
Laura:  gaze -> slide
Mikko:  nodding
Anna:   wants_to_speak = high
Jari:   looks_at = Laura
Sofia:  confused_expression
```

*(Huom. `confused_expression` on tunteen päättelyä. Työpaikkakäytössä tämä
osuu EU:n tekoälyasetuksen artiklan 5(1)(f) kieltoon; pelkkä eleiden ja
katseen suunnan välittäminen ilman tunteiden päättelyä on eri asia.)*

Näistä client voisi renderöidä yhden yhteisen 2D- tai 3D-kuvan. Käyttäjän
näkökulmasta se voisi tuntua paljon luonnollisemmalta kuin videoruudukko,
koska ryhmän sosiaalinen tila näkyisi yhtenä kokonaisuutena.

Ja tässä tulee taas kaistaetu: yhteiseen näkymään ei välttämättä tarvita
jokaisen jatkuvaa HD-videota. Voisi riittää esimerkiksi kasvojen/kehon
keypointit, ilme-embeddingit, katseen suunta ja satunnaiset
tekstuuripäivitykset. Vastaanottajan laite renderöi loput paikallisesti.

Tämä voisi myös ratkaista yhden videopalaverien oudoimmista ongelmista:
nykyisessä ruudukossa on vaikea nähdä kuka reagoi keneen. Semanttisessa
mallissa voitaisiin välittää myös suhteita:

```
Jari gaze_target = Laura
Mikko reaction_to = Laura:utterance_184
Anna interruption_intent = Mikko
```

Silloin käyttöliittymä voisi sijoittaa ihmiset tai korostaa reaktiot niin,
että ryhmädynamiikka hahmottuu paremmin.

Eli tästä voisi tulla käytännössä syntetisoitu yhteinen huone, joka ei ole
videokuva oikeasta huoneesta vaan reaaliaikainen renderöinti osallistujien
mitatusta tilasta.

Se on jo aika paljon enemmän kuin videokonferenssi: lähetetään ihmisten tila,
vastaanottaja renderöi läsnäolon.
