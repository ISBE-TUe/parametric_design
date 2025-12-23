# Parametric Design 2026

SvelteKit site for course content, assignments, and Slidev decks.

## Quick Start

```sh
npm install
npm run dev
```

## Routes

- `/` landing page
- `/assignments` assignment hub (auto-generated from markdown)
- `/slides` slides hub (week/session routes)
- `/decks/*` static Slidev builds (served from `static/decks`)

## Assignments (Markdown)

Drop assignment files here:

```
src/content/assignments/assignment-1.md
src/content/assignments/assignment-2.md
```

Each file becomes a page at:

```
/assignments/assignment-1
/assignments/assignment-2
```

## Slides (Markdown + Slidev)

Slide session metadata lives in:

```
src/content/slides/w01/intro-logic.md
src/content/slides/w01/history-parametricism.md
```

Each file maps to a route:

```
/slides/w01/intro-logic
/slides/w01/history-parametricism
```

Frontmatter example:

```md
---
title: Introduction to Computational Logic
description: Short summary.
objectives:
  - Objective 1
  - Objective 2
slidesUrl: /decks/w01/intro-logic/
order: 1
weekTitle: Week 1
---
```

### Slidev deck output

Store Slidev sources under `slidev/decks/<week>/`:

```
slidev/decks/w01/intro-logic.md
```

Build a deck into the static folder:

```sh
cd slidev
npx slidev build decks/w01/intro-logic.md --base /decks/w01/intro-logic/ --out ../static/decks/w01/intro-logic
```

Then visit:

```
/decks/w01/intro-logic/
```

## MyST Docs (optional)

If you use MyST docs, build into `static/myst`:

```sh
npm run docs:build
```

## Useful Commands

```sh
npm run dev
npm run build
npm run preview
```

## GitHub Pages Deployment

Repo: `https://github.com/ISBE-TUe/parametric_design`

Build with a base path that matches the repo name:

```sh
BASE_PATH=/parametric_design npm run build
```

Deploy the `build/` folder to GitHub Pages (branch or GitHub Actions).  
All internal links are already base-aware.
