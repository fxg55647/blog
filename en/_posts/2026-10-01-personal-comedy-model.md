---
title: "The personal comedy model"
description: "What happens when everyone has a personal AI comedian that learns exactly what makes them laugh? Novelty, a value estimate and effects on shared humour."
date: 2026-10-01 04:45:00 +0300
categories: ai huumori
ref: henkilokohtainen-komiikkamalli
version: 2
last_modified_at: 2026-10-03 04:01:14 +0300
changes:
  - version: 2
    date: 2026-10-03
    note: "Added a plain-language summary at the start and clearer subheadings"
---

AI can already write jokes that people find genuinely funny. So far the
question has mostly been whether a machine can be funny. I ask a different
one: what happens when everyone has their own joke machine that learns from
every chuckle and every skip what makes them laugh, and immediately invents
the next joke just for them? Video apps already search existing content for
what you are likely to enjoy. This would make the content from scratch for
you, a bit like a comedian whose entire audience is you. That is why the
question is not only about entertainment but also about what happens to
shared humour and to how people behave.

AI-generated humour has been discussed surprisingly much. Yet one question
has received far less attention than the production of jokes itself:

> What happens to human behaviour and humour culture when a single person has
> a practically unlimited amount of humour optimised for their own taste?

## What we already know: AI can be funny

There is already fairly strong research evidence that language models can
produce content people find genuinely funny.

- In Gorenz and Schwarz's 2024 study in *PLOS One*, jokes produced by
  ChatGPT 3.5 were rated on average at least as funny as those written by
  humans, and in some tasks funnier. The study also included a comparison
  with headlines by The Onion's professional writers: the model's headlines
  were rated on average as funny as the originals
  ([USC Today](https://today.usc.edu/ai-jokes-chatgpt-humor-study/),
  [PsyPost](https://www.psypost.org/ai-outshines-humans-in-humor-study-finds-chatgpt-is-as-funny-as-the-onion)).
- In a 2025 study in *Computers in Human Behavior*, GPT-4o outperformed
  humans at text-based humour, but not at image-based humour
  ([Axios](https://www.axios.com/2025/11/12/ai-humor-chatgpt-claude)).
- In 2026, researchers have systematically studied both joke generation and
  whether a model can itself judge which joke works
  ([Sakabe et al., AAAI 2026](https://arxiv.org/abs/2511.09133)).

The practical direction is clear too. A study published in 2026 in
*Engineering Applications of Artificial Intelligence* built a multimodal
system that generates six humour types (including puns, exaggeration,
absurdity and dark humour), automatically turns the jokes into short videos
with images and audio, and measures their success on real short-video
platforms
([ScienceDirect](https://www.sciencedirect.com/science/article/abs/pii/S0952197626014909)).
An automated humour factory + distribution + feedback loop is already a
research topic.

## The gap: who is the humour made for?

Most of the literature asks either *"Can AI be funny?"* or *"Can AI help a
comedian write?"*. Google DeepMind, for example, studied AI specifically as a
creativity tool for comedians: in workshops with twenty professional
comedians, the models of the time often produced clichéd material, although
the comedians saw potential in them as a tool
([Mirowski et al., FAccT 2024](https://deepmind.google/research/publications/a-robot-walks-into-a-bar-can-language-models-serve-as-creativity-support-tools-for-comedy-an-evaluation-of-llms-humour-alignment-with-comedians/)).

My question is different: not whether a machine can be funny, but what
happens when everyone has their own endless stream of humour tuned exactly to
their taste.

## The technical difference from TikTok

TikTok tries to find, among millions of existing videos, the next one you
will like. A generative system could work differently:

```
generate → show → reaction → update taste model → generate again
```

If the user reacts with, say, 😅 / 😂 / 💀 / skip / share, the model gets a
huge amount of very clean preference data. Within a few hundred rounds it
could perhaps learn a really fine-grained "humour profile": you like context
switches but not puns; dark humour when it is absurd but not mere shock; a
certain rhythm; setup–punchline pairs of a certain length, and so on.

A recent finding makes the idea more interesting. In an AAAI 2026 study,
humans and language models did not judge humour the same way: the models
weighted novelty more, humans weighted empathy-related factors more
([Sakabe et al.](https://arxiv.org/abs/2511.09133)). In practice, then, "the
AI rates its own jokes" may not be enough — the user's own laughter or
reaction is the more valuable signal.

## Three generations: joke machine, endless feed and personal comedy model

I would distinguish three generations:

1. **AI joke generator** — "make me a joke".
2. **Infinite AI comedy feed** — an endless generated stream.
3. **Personal comedy model** — the system learns specifically what makes
   *you* laugh and starts generating it in real time.

The third is, to me, the genuinely new idea. At that point it is no longer
really a meme generator but a hybrid of a humour recommendation engine and a
generative model.

It could be quite a powerful "TikTok moment": today's recommenders search
for content. This one invents the next piece of content just for you.

## Novelty

I searched for counterparts in research (arXiv, ACL Anthology, AAAI,
ScienceDirect) and in products, with search terms such as *personalized
humor generation*, *humor preference modeling*, *AI meme app learns your
sense of humor* and *AI generated video feed*. The closest counterparts:

- **[iFunny](https://play.google.com/store/apps/details?id=mobi.ifunny)**
  advertises an algorithm that "learns your sense of humor". However, it
  selects existing, user-made memes — it is a recommender that predates
  generation 3, not a generator.
- **[The Sora app](https://www.nbcnews.com/tech/tech-news/openai-announces-sora-2-ai-video-audio-app-rcna234753)**
  (OpenAI, 2025) is a feed of AI-generated video with personalised ranking.
  The content, however, is generated by users and the feed ranks it; it does
  not generate the next video based on a single viewer's reactions. Closest
  to generation 2.
- **[Who Laughs with Whom?](https://arxiv.org/abs/2601.03103)** (Murakami et
  al., 2026) shows that humour preferences split into user clusters and that
  a model's preferences can be steered toward a given cluster with persona
  prompting. This is cluster-level, not real-time learning for an individual.
- **[lmfaoooo, SemEval-2026](https://arxiv.org/abs/2606.00022)** ("Humor Is
  an Audience") models a target audience's preferences as interpretable
  humour features and uses them to select among generated candidates. It is
  technically the closest, but the audience is a given target group in a
  shared task, not an individual user in a continuous feedback loop.

So the individual pieces exist: generation, cluster-level preference models,
generated feeds, and personalisation of existing content. I did not find a
product or study that combines them into a loop in which one person's
reactions update their taste model and directly steer the generation of the
next joke. Nor did I find an established line of research on the post's main
question — what unlimited personalised humour means for behaviour and humour
culture. The novelty lies precisely in this combination and in the framing
of the question, not in AI humour as such.

## Theoretical value

### Without the idea, a recommender already does much of the work

In the coming years, AI-generated humour will
fill feeds anyway: generated feeds like Sora become common, automated humour
factories (like the short-video study above) produce a huge content pool,
and current recommenders pick the best fit for each person from it. When the
pool is practically unlimited, a good recommender already approximates
personal generation to a large extent. The idea's added value is only the
difference that content generated in real time for an individual brings on
top of this.

### Fermi estimate: roughly $0.3–6 billion per year

I measure it as ad-funded social media revenue, since that is
where higher engagement is realised:

| Factor | Value | Source |
|---|---|---|
| Global social media advertising, 2026 | approx. $317 bn | Statista forecast, via [Cropink](https://cropink.com/advertising-statistics) |
| Share that depends on time spent on humour content | 20–40 % | own assumption |
| Extra engagement compared with a recommender choosing from an unlimited generated pool | 0.5–5 % | own assumption |

- Lower bound: $317 bn × 20 % × 0.5 % ≈ **$0.3 bn / year**
- Upper bound: $317 bn × 40 % × 5 % ≈ **$6 bn / year**

The range is therefore roughly **$0.3–6 billion per year**. An
order-of-magnitude estimate, not a forecast.

### What moves it most is whether a general pool covers individual taste

The last factor decides it. If the generated pool is so large
that the recommender almost always finds a "close enough" joke, the
improvement stays near zero and the idea's value narrows to the lower bound
or below. If, on the other hand, fine-grained individual taste (rhythm,
topic combinations, personal references) is something no general pool
covers, the difference could be clearly larger.

The estimate measures market value, i.e. engagement, not well-being. The
post's main question — what happens to humour culture when everyone has
their own endless stream — falls outside this figure, and its sign could go
either way.
