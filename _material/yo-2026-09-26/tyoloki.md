# Yötyön loki 26.9.2026

Kohde: `C:\projects\blog`. Alkuperäistä postausta tai aiempia muistiinpanoja ei muokata. Tuotokset valmistellaan tässä työtilassa ja kopioidaan lopuksi blogin `_drafts`- ja `_material`-kansioihin erillisiksi tiedostoiksi. Blogikansio on nykyisen kirjoitussandboxin ulkopuolella; kopiointi tarvitsee työkalun hyväksyntäkäsittelyn.

## Luettu lähtöaineisto

- README ja Jekyll-asetukset; blogirepossa ei löytynyt AGENTS.md-tiedostoa eikä C:\projects-tasolla ohjetta.
- Nykyinen postaus, 987 riviä.
- Kaikki viisi `_material`-tiedostoa: työmuistiinpanot, uudelleenkirjoitettu muistio, Coase–Ostrom-tutkimus, aiempi prior-art-haku ja 26.9. keskustelumuistiinpanot.
- Git-työpuu oli alussa puhdas.

## Ensimmäiset havainnot

1. II.1:n rajaukset, vaihtokyky ja II.5:n kytkentä ovat jo osittain nykyisessä postauksessa. Niitä ei tarvitse vain lisätä uudelleen; tiivistelmä ja johtopäätökset on saatettava niiden kanssa johdonmukaisiksi.
2. Tokenisointi sekoittuu taustaresurssin hallintaan. Tokenisoitu laskentaoikeuskin riippuu palveluntarjoajasta. Sulkutili voi automatisoida vakuuden käytön, mutta tokenisointi ei ole välttämätön eikä riittävä ehto kaikelle toimeenpanolle.
3. Maavertailun yksiulotteinen kitka-asteikko olettaa tuloksen. Oikeusvarmuus, hallinnon kyvykkyys ja suojat eivät ole vain kustannuksia.
4. Commonsin ongelma ei palaudu pelkkään todentamiseen: yhteisten sääntöjen sisältö, osallistuminen ja ylläpidon rahoitus jäävät.
5. Osa väitteistä on vanhemmassa laajassa muistiossa jo täsmällisempiä kuin varsinaisessa postauksessa.

## Ensimmäiset lähdekorjaukset

- Palagashvilin alkuperäistutkimus kutsuu aineistoaan kuvailevaksi, alustavaksi ja ei-kausaaliseksi. Hakemusten mittari ei ole suora toteutuneiden yhden hengen yritysten laskenta.
- Aligican kirjalla on yksi tekijä, Paul Dragos Aligica; Tarko ei ole tämän kirjan toinen tekijä.
- NBER-luvun tekijät ovat Shahidi, Rusak, Manning, Fradkin ja Horton. Vanhan muistiinpanon Chen-attribuutio on väärä. Tekijän sivu merkitsee luvun vuoden 2026 teokseen; vuoden 2025 työpajaversio on erotettava siitä.
- Kami of the Commons käsittelee jo poistumisoikeutta ja hallintaa suorittavan agentin omaa hallintaa. Näitä ei voi pitää tämän tekstin osoitettuna uutuutena.

## Valmiit tuotokset

- Uusi yhtenäinen blogiluonnos, noin 2 700 sanaa ja 26 lähdelinkkiä.
- Lähdetarkastus: 34 lähdekokonaisuutta, alkuperäislähteet ja kunkin tarkistuksen syvyys.
- Argumenttikartta, toimitukselliset ratkaisut ja kuusi ehdotettua koetta.
- Lyhyt aamuraportti lukujärjestyksineen.

## Tarkistuskierros

- Luonnos luettiin uudelleen kokonaisuutena. Tiivistelmää vastaan sotivat ehdottomat johtopäätökset on korvattu yhdenmukaisella ehdollisella argumentilla.
- Tutkimustulos, teoreettinen hypoteesi ja kirjoittajan konsepti erotetaan. Vaihtokykyä ei esitetä omistuksen tai päätösvallan korvaavana yleismittarina.
- Lähdemuistion lukusyvyysmerkinnät tarkistettiin; kokonaisten kirjojen tai pitkien työpaperien lukemista ei väitetä pelkkien tiivistelmien perusteella.
- UTF-8-teksteissä ei havaittu korvausmerkkejä, keskeneräisyysmerkintöjä tai työkalujen sisäisiä lähdetunnisteita. Markdown-otsikot, lainauslohkot, taulukot ja linkkien rakenne tarkistettiin.
- Jekyllin asetukset luettiin. Uusi teksti sijoitetaan `_drafts`-kansioon ja sisältää lisäksi `published: false`; materiaali `_material`-kansioon. Sivuston buildia ei ajettu eikä riippuvuuksia asennettu. Visuaalinen sivustorenderöinti jää mahdolliseen julkaisukierrokseen.
- Git-diff vahvisti ennen kopiointia alkuperäisen postauksen muuttumattomuuden. Kohdetiedostoja ei ollut ennestään.

Tallennuksen ja kopioiden tarkistuksen tulos lisätään alle.

## Tallennus valmis

Neljä tuotostiedostoa kopioitiin blogin uusiin kohdetiedostoihin. SHA-256-tarkistussummat vastaavat työtilan versioita. Alkuperäisen postauksen git-diff on tyhjä myös kopioinnin jälkeen. Työloki tallennettiin tämän jälkeen samaan materiaalikansioon. Commitia, pushia tai julkaisua ei tehty.
