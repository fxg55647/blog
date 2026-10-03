---
title: "An appeals CAPTCHA: appealing stays free, but not a hundred times over"
date: 2026-10-03 04:19:21 +0300
categories: hallinto ai
ref: virasto-captcha
version: 1
---

Websites often give you a small task, such as spotting the traffic lights in
a set of pictures. For a person it takes a second, but for a machine trying
to log in thousands of times it is a brake. I propose the same idea for
appealing against decisions made by public authorities. When someone files an
unusually large number of appeals, each one would have to be confirmed in
person with an official, on site or over a video call, explaining in their
own words which decision they are appealing and why. For one genuine appeal
that is a small effort; for a hundred copies it is enormous. Unlike an appeal
fee, it does not put people with little money at a disadvantage, because the
price is paid in time rather than money.

## Making mass appeals scale badly

The idea is to add a small personal task to filing an appeal: easy to do once
in a genuine matter but heavy to repeat dozens or hundreds of times. The goal
is not to prevent appeals. The goal is to make mass appeals scale badly: the
right to appeal remains, but automating appeals and copying them on an
industrial scale becomes laborious.

In short: *no fee for appealing, but an individual effort required from a
human.*

## How the confirmation would work

### The appellant specifies the matter to an official in their own words

The appeal is confirmed in person with an official, either on site or
remotely. In their own words, the appellant states

- which decision they are appealing,
- what change they are demanding and
- why they believe that particular decision is wrong.

Every appeal needs its own confirmation. A single generic text cannot be
copied into hundreds of cases, and strong electronic identification prevents
anyone from gaming the system with different accounts.

### An ordinary appellant faces no extra effort

The confirmation would only switch on when an unusually large number of
appeals comes from the same person. An ordinary appellant who appeals once or
twice in their own matter would never notice the system.

### The cost is time, not money

The "price" is primarily time and personal participation. The advantage over
an advance fee is that a person with little money is not inherently worse
off: everyone has the same number of hours in a day, but not the same amount
of money.

### A remote option is essential

In-person visits alone would be a problem for, say, people with mobility
impairments, people living in remote areas and people abroad. That is why
an accessible remote option must be part of it.

## Why this matters right now

The Finnish government is currently preparing measures against unfounded
appeals. In September 2026 Minister of Justice Leena Meri said that an advance
fee is being prepared for limited administrative court cases that do not
concern the appellant's own matter, along with a penalty fee for abuse of
court proceedings
([Verkkouutiset](https://www.verkkouutiset.fi/a/aiheettomat-valitukset-halutaan-kuriin/)).
Back in January, ministers launched a study that looks at, among other
things, raising the fees of the administrative courts and the Supreme
Administrative Court
([Finnish Government](https://valtioneuvosto.fi/-/1410853/ministerit-meri-ikonen-ja-multala-kaynnistavat-selvityksen-aiheettomien-valituksien-ehkaisemisesta)).
An appeals CAPTCHA is an alternative to precisely these money-based measures.

The problem is not new. As early as 2014, the news reported how one person
had kept the city of Rovaniemi and the courts busy with more than 50 appeals,
complaints and lawsuits
([Verkkouutiset](https://www.verkkouutiset.fi/a/kaupunki-yhden-ihmisen-valitusten-kourissa-yli-50-oikeusprosessia-28244/)).

## Novelty

I searched with terms such as (in Finnish) *mass appeals*, *unfounded
appeals*, *serial appellant*, and *vexatious litigant*, *proof of work spam*,
*mass comments fake identities* and *in-person verification appeal*.

### Computational work against spam is an old idea

In 1993 Cynthia Dwork and Moni Naor proposed that an email sender should
perform a small computational task that is cheap for one message but
expensive for a million. Adam Back's Hashcash implemented the same thing in
1997 ([Wikipedia](https://en.wikipedia.org/wiki/Proof_of_work)). An appeals
CAPTCHA is the same principle, but instead of machine computation the cost is
human time, which cannot be bought in bulk with a graphics card.

### Restricting vexatious litigants today happens after the fact

In England and Wales a court can declare a person a vexatious litigant, after
which they need a judge's permission for every new proceeding
([GOV.UK](https://www.gov.uk/government/publications/declaring-a-litigant-vexatious-and-the-treasury-solititor/guidance-note-vexatious-litigants-and-the-treasury-solicitor)).
That is a heavy, individually targeted and public label, given only after a
long process. An appeals CAPTCHA would instead switch on automatically based
on volume and would not require anyone to declare the appellant a nuisance.

### Mass commenting is a threat that has already materialised

In 2017 the US Federal Communications Commission received more than 22
million comments on net neutrality, of which nearly 18 million were fake
according to the New York Attorney General. One 19-year-old used software to
submit 9.3 million comments under made-up names
([New York Attorney General](https://ag.ny.gov/press-release/2021/attorney-general-james-issues-report-detailing-millions-fake-comments-revealing)).

### The difference: in-person confirmation triggered by volume, paid in time

I found no model in which an appeal must be confirmed with an official in
one's own words only once the same person's number of appeals exceeds a
threshold. The closest equivalents are paid for with money (court fees, the
planned advance fee), with machine computation (Hashcash), or targeted at an
individual through a heavy court decision (vexatious litigant orders). The
novelty lies between these: a cost that triggers automatically, is the same
for everyone and is hard to bypass with AI.

## Theoretical value

### Without the idea, AI makes appeals cheap and fees become common

In the next few years AI will make writing an individual-looking appeal
almost free. A written requirement to "explain in your own words" will
therefore no longer, on its own, separate a genuine appellant from a mass
appellant, but a conversation with an official does so better. At the same
time Finland is introducing advance fees and penalty fees. The baseline is
thus a situation where mass appeals are fought with money. The idea's value
is how much more it stops and how much less it harms people with little
money.

### Fermi estimate: roughly $20 million – $1.3 billion a year

| Factor | Value | Source |
|---|---|---|
| Cases received by Finnish administrative courts (2024) | 19,215 | [STT Info / Finnish courts](https://www.sttinfo.fi/tiedote/70955986/tuomioistuinlaitoksen-tilinpaatos-2024-henkilostoresursseja-lisattiin-mutta-samaan-aikaan-asiamaarat-kasvoivat?lang=fi) |
| Cost per resolved case, Helsinki Administrative Court (2025) | €1,395 | [Helsinki Administrative Court](https://www.tuomioistuimet.fi/material/sites/oikeus_hallintooikeudet_helsinginhallinto-oikeus/dokumentit/ripk25utc/Helsingin_HAO_toimintakertomus_2025_FINAL.pdf) |
| Share of mass and serial appeals | 2–5% | own assumption |
| Idea's additional effect on top of fees | 20–50% | own assumption |
| Cost of delayed projects in Finland | €1–10 million / year | own assumption |
| Multiplier for other wealthy democracies | 50–200 | own assumption |
| Euro to dollar | €1 ≈ $1.15 | own assumption |

- **Court work:** 19,215 × 2–5% ≈ 380–960 cases × €1,395 ≈ €0.5–1.3
  million. 20–50% of that is €0.1–0.7 million.
- **Project delays:** €1–10 million × 20–50% ≈ €0.2–5 million.
- **The cost of confirmations** is small, because they only apply to those
  above the threshold: a few hundred half-hour meetings cost under €0.1
  million.
- **Finland in total:** roughly €0.3–5.7 million, or about $0.35–6.5 million.
- **Worldwide**, with a multiplier of 50–200: roughly **$20 million – $1.3
  billion a year**.

This excludes what the idea saves people with little money compared with
fees, and the protection it gives authorities against AI-generated floods of
appeals, which could be much larger than today's.

### What moves it most is how large the AI appeal flood becomes

This is an order-of-magnitude estimate, not a forecast. The biggest
uncertainties are the cost of delays and whether mass appeals multiply with
AI. If mass appeals stay at today's level and fees work well, the idea's added
value stays at the low end of the range. If they grow like the FCC comment
flood, money is no longer enough of a brake, and the value of a confirmation
based on human time rises above the top of the range.
