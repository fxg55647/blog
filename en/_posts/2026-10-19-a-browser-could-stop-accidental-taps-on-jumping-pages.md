---
title: "A browser could stop accidental taps on jumping pages"
date: 2026-10-19 04:28:00 +0300
categories: suunnittelu
description: "A browser safeguard could stop accidental taps when page content jumps under your finger. How would it work, and what already exists?"
ref: selain-voisi-estaa-hyppaavan-sivun-vahinkopainallukset
version: 1
---

You are about to tap a link when an ad appears and the page jumps. Your finger lands where the link was a moment ago, but the browser opens something else. I propose a browser safeguard that recognizes this situation and discards the suspicious tap. The user lifts their finger and tries again once the content has settled.

*Concept draft: this is an implementation proposal whose effectiveness and thresholds still need testing.*

## The browser could notice a target changing under your finger

The idea is simple: a tap should not be treated as a definite expression of intent if its target changed just before contact. The user decided to tap one thing, but the page replaced it with another.

The safeguard would operate in the browser, so using it would not require every website to be fixed separately. An initial experiment could use a Chromium-based browser for Android. Chromium is an open-source browser project on which such a change could be built.

## Remember what was visible a moment ago

The browser would keep a short history of movements in visible content. When a finger touches the screen, it would check whether content at that point had just moved significantly and whether the actionable target there had changed.

The notes suggest an initial window of 50–100 milliseconds. If the same point contained link A 20 milliseconds ago but now contains button B, the tap could be discarded. These numbers are starting points for an experiment, not research-established limits of human perception.

Movement alone would not be sufficient. If the same link moves a few pixels but the finger still hits it, blocking the tap would only be inconvenient. The deciding factor would be a changed target combined with a sufficiently recent and substantial movement.

## A discarded tap would not run later

In a suspicious situation, the browser would neither open either target nor queue the tap for later. The user would lift their finger and tap again. The new tap would be accepted normally if the content had settled.

This is also the weakness: a false alarm looks like an unresponsive button. An experiment would need to measure both prevented accidental taps and legitimate taps blocked unnecessarily. The safeguard would be useful only if it removed more inconvenience than it created.

## Novelty

I searched for related work using terms including *layout shift accidental clicks*, *recently moved iframe*, and *browser click stability*. The problem and part of the solution are already well known. Three close counterparts help define what this proposal actually adds.

### Chromium already has a limited safeguard

A [2023 announcement from Chromium developers](https://groups.google.com/a/chromium.org/g/blink-dev/c/58JoaBbCao0) describes discarding input events for recently moved cross-origin iframes. The announcement expanded an earlier, more limited safeguard. Blocking a tap because of movement is therefore not itself a new invention.

### Page movement can already be measured

Google’s [CLS guide](https://web.dev/articles/cls) discusses unexpected content shifts and the incorrect clicks they cause. CLS measures page stability. It helps identify the problem, but measurement does not itself define the proposed general tap safeguard.

The [Layout Instability specification](https://wicg.github.io/layout-instability/) includes previous and current rectangles for shifted elements. This provides an implementation starting point. A complete history of which actionable target occupied each screen point would nevertheless require additional implementation work. A log of shifts alone is not a finished solution.

### Test automation already waits for stable targets

The browser testing tool [Playwright](https://playwright.dev/docs/actionability) checks target stability, among other conditions, before a normal automated click. It defines stability as an unchanged bounding box for at least two consecutive animation frames. A testing tool waits on behalf of an automated action; this proposal protects a tap that a human has already initiated.

The proposed addition is therefore a broader safeguard for ordinary links and buttons that accounts for target changes. These searches did not uncover a general implementation matching the notes exactly. That does not establish that none exists.

## Scale of the problem and potential of the solution

The benefit would come from avoiding wrong pages, navigating back, and trying again. A global monetary figure would nevertheless require evidence about the frequency of accidental taps, their cost, and the share this safeguard could actually prevent. There is insufficient basis for those estimates here.

The comparison is a near future in which website developers improve stability and browsers already have limited safeguards. The idea’s additional value would be preventing remaining errors even on sites whose implementation users cannot influence. It would not fix the jumping page itself.

Such a safeguard could also make difficult sites more usable for people who find repeated precise targeting challenging. This is a possible further application, not a demonstrated accessibility benefit. Evaluating it would require testing with different users and sites: when is trying again a small relief, and when does it become another barrier?
