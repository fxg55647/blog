---
title: "The early adopter investment paradox: the service may disappear, the record should not"
date: 2026-10-03 04:11:12 +0300
categories: talous commons
ref: varhaisen-kayttajan-investointiparadoksi
version: 1
---

A new app often becomes useful only once it has gathered lots of data and
lots of users. The first users do that work: they enter their information,
learn how the thing works and trust that the effort will pay off one day. Yet
they are exactly the ones who lose the most if the app is shut down, because
their work stays locked inside a service that no longer exists. I propose
turning this around: the earlier someone joins, the less they should have to
invest, and the data they enter should be theirs, in an open format that
survives even if the service dies. My example is the records of a pet or
another animal: the service may disappear, the animal's history should not.

## The early user builds the service and carries the risk

A service needs its first users' time, data and trust to build its future
value. At the same time, those very first users carry the greatest risk that
their investment never pays off.

### User value is benefits minus every kind of input

In a simple model, the value a user gets is:

```
V_user = B₀ + Σ (t = 1…T) pₜ · Bₜ − (P + S + M + L + R)
```

where

- `B₀` is the immediate benefit,
- `Bₜ` is the future benefit at time *t*,
- `pₜ` is the probability that the service is still usable at time *t*,
- `P` is the price of the service,
- `S` is the work spent on onboarding and entering data,
- `M` is ongoing maintenance work,
- `L` is the lock-in and switching cost and
- `R` is the provider continuity risk.

### Early on, almost every term works against the user

In the early stage the immediate benefit `B₀` is often small, the onboarding
work `S` large and the continuity probability `pₜ` uncertain. In practice the
user pays and works to build the service's database before the service has
any meaningful network value.

## Three known phenomena in one user

The early-user penalty is the sum of three known phenomena:

```
Early-user penalty = cold-start penalty
                   + relationship-specific investment
                   + provider continuity risk
```

- **Cold-start penalty**: the network is least valuable precisely to its
  first users. Tech investor Andrew Chen has written a whole book on the
  phenomenon, *The Cold Start Problem* (2021)
  ([a16z](https://a16z.com/books/the-cold-start-problem/)).
- **Relationship-specific investment**: the data and work a user puts into a
  service raise the value of that particular relationship and can increase
  switching costs. The concept comes from transaction cost economics, where
  such specificity exposes the investor to hold-up by the other party
  ([IDEAS/RePEc](https://ideas.repec.org/h/elg/eechap/4136_12.html)).
- **Provider continuity risk**: the user carries the risk that the startup or
  service will no longer exist when the data should be delivering its
  greatest benefit.

## The earlier the user, the smaller the investment

For early users we should do the opposite of what happens now: the earlier
the user, the smaller their investment should be.

### Seven ways to push the inputs down

- free basic use
- automatic data import
- an open, documented format
- complete export
- clear provenance for every piece of data
- user ownership and control of the data
- the death of the service does not make the record unusable

Then the price `P` approaches zero, the work `S` shrinks, lock-in `L`
approaches zero and the continuity risk `R` shrinks. The service-specific
continuity probability `pₜ` loses its importance, because the data keeps its
value elsewhere.

### The investment moves from provider asset to user asset

In a closed model, the user's investment becomes the provider's asset. In an
open model, it becomes a user-owned, portable asset. As a by-product, something
bigger emerges:

```
many portable records → open data commons → network value
```

The network effect then rests not on lock-in but on compatibility.

### The value of the open model to an early adopter

```
V_early adopter = immediate utility
                + portable future value
                + network upside
                − minimal onboarding cost
```

### The question shifts from the startup to your own record

The user no longer has to ask: "Should I invest in this startup?" Instead
they ask: "Should I build a portable digital record of this thing for
myself?" If the answer to the second question is yes, whether the provider
still exists ten years from now becomes much less important.

## Applying it to animal data: the service as an interface to the owner's record

In an animal service, a user could

- bring their own animal into the system,
- automatically fetch existing public data,
- add their own documents and information,
- see the origin of every piece of data,
- publish whatever they choose as open data,
- keep private documents hidden and
- export the animal's entire history in an open format.

The service then does not primarily "own the animal's profile"; it acts as an
interface to a portable record that the user owns. The core line:
*The service may disappear. The record should not.*

## Novelty

I searched with terms such as *local-first software*, *user-owned portable
data*, *data portability*, *pet health record app export*, *animal health
data interoperability* and, in Finnish, *KoiraNet public health data*.

### The principle is known and well articulated

- **Local-first software.** The 2019 essay by Martin Kleppmann, Adam Wiggins,
  Peter van Hardenberg and Mark McGranaghan sets out seven ideals, two of
  which are the core of this idea: data survives even if the service is shut
  down ("The Long Now"), and the user retains ultimate ownership and control
  ([Ink & Switch](https://www.inkandswitch.com/essay/local-first/)).
- **Solid.** In Tim Berners-Lee's Solid protocol, users' data lives in their
  own "pod", and applications are merely interfaces to it
  ([Akamai/Linode](https://www.linode.com/docs/guides/introduction-to-the-solid-data-protocol)).
- **Portability rights and tools.** Article 20 of the EU's GDPR gives the
  right to receive the personal data you provided in a machine-readable format
  ([gdpr-info.eu](https://gdpr-info.eu/art-20-gdpr/)), and the Data Transfer
  Initiative, backed by Apple, Google and Meta, builds transfer tools between
  services ([DTI](https://dtinit.org/blog/2023/03/28/launch)).

### In animal data the pieces exist but separately

App stores are full of pet health diaries, and some offer export. Pasu, for
example, produces a PDF of the health history and a backup as a zip file, but
mentions no open structured format
([App Store](https://apps.apple.com/app/id6762033650)). Public animal data
exists too: the Finnish Kennel Club's KoiraNet publishes individual dogs'
pedigrees, health screening results and trial and show results for anyone to
see
([DogWellNet](https://dogwellnet.com/content/hot-topics/brachycephalics/finnish-kennel-club-to-add-walk-test-results-to-koiranet-db-r524/)).
Continuity risk has also materialised: Tractive bought the Whistle pet
trackers from Mars, and Whistle devices stopped working at the end of August
2025
([Invoxia](https://www.invoxia.com/blog/petcare/tractive-acquires-whistle-dog-health-collar/)).
I found no information on whether users' accumulated history survived the
transition.

### The difference is the combination and the early-adopter angle

I found no animal service that combines automatic fetching of public data,
the owner's own documents, per-item provenance, a choice between public and
private, and full export in an open format. I searched the App Store, the
general web and sources on animal health data interoperability. The novelty
is therefore twofold: bringing local-first and Solid principles to the animal
record, and a framing in which portability is not just consumer protection
but specifically a way to remove the early-user penalty and to build network
effects on compatibility.

## Theoretical value

I estimate the value for animal data only. The general principle applies to
almost every service, but it cannot be reduced to one sensible number.

### Without the idea, AI handles data entry but not disappearance

In the next few years AI will make reading vet PDFs, vaccination certificates
and invoices almost automatic, so the onboarding work `S` shrinks anyway. In
the EU the right to export is already law. What remains without the idea is a
problem AI does not solve: when a service shuts down or the user switches,
the accumulated history disappears or is left as a pile of PDFs that no other
service understands. The idea's value comes from this difference.

### Fermi estimate: roughly $15–420 million a year

| Factor | Value | Source |
|---|---|---|
| Pet-owning households in the US (2025) | 94 million | [Pet Food Industry / APPA](https://www.petfoodindustry.com/pet-ownership-statistics/article/15747936) |
| Pet-owning households in Europe (2024) | 140 million | [FEDIAF](https://europeanpetfood.org/about/statistics/) |
| Share keeping the animal's records in a service | 5–20% | own assumption |
| Share whose service ends or who switch per year | 10–20% | own assumption |
| Time wasted re-collecting records | 1–3 h | own assumption |
| Value of time | $20/h | own assumption |
| Effect of AI on wasted time without the idea | −50% | own assumption |
| Losses leading to an unnecessary repeat test or vaccination | 5–10% | own assumption |
| Cost of a repeat | $50–150 | own assumption |

- **Users:** 234 million × 5–20% ≈ 12–47 million households.
- **Losses per year:** 12–47 million × 10–20% ≈ 1.2–9.4 million cases.
- **Time:** 1.2–9.4 million × 1–3 h × $20 × 50% ≈ $12–280 million.
- **Unnecessary repeats:** 1.2–9.4 million × 5–10% × $50–150 ≈ $3–140 million.
- **Total:** roughly **$15–420 million a year**.

This excludes the network value of an open data commons, such as research
use, which I could not estimate credibly. This is an order-of-magnitude
estimate, not a forecast.

### What moves it most is how many people keep records in a service

The range spans more than a factor of ten mainly because I found no figure
for how many pet owners use a separate health record service. The other big
factor is the baseline: if vet chains' own portals and the EU export right
cover most of the history anyway, the idea's added value falls to the low end
of the range.
