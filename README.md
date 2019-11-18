# Quibi-website

> Public facing, front-end based, web experience geared towards the audience of Quibi video streaming service.

## Architecture

- Next.js
- React
- Redux
- PostCSS
- CSS Modules

## Environments

| branch    | url  | build status                                                                                                                                               |
| --------- | ---- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `dev`     | []() | [![pipeline status](https://gitlab.b-reel.com/quibi/website-3.0/badges/dev/pipeline.svg)](https://gitlab.b-reel.com/quibi/website-3.0/commits/dev)         |
| `staging` | []() | [![pipeline status](https://gitlab.b-reel.com/quibi/website-3.0/badges/staging/pipeline.svg)](https://gitlab.b-reel.com/quibi/website-3.0/commits/staging) |
| `qa`      | []() | [![pipeline status](https://gitlab.b-reel.com/quibi/website-3.0/badges/qa/pipeline.svg)](https://gitlab.b-reel.com/quibi/website-3.0/commits/qa)           |
| `prod`    | []() | [![pipeline status](https://gitlab.b-reel.com/quibi/website-3.0/badges/master/pipeline.svg)](https://gitlab.b-reel.com/quibi/website-3.0/commits/master)   |

### Credentials

For all environments:

- User: `TBD`
- Pass: `TBD`

## Requirements

- `node^11.12.0`
- `npm^6.7.0`

## Quickstart

```shell
npm i
npm run dev
```

## Commands

The following `npm` commands are available:

- `npm run build`: builds a static site to `/out`
- `npm run lint[:js|css][:auto]`
- `npm run dev`: spins up a dev server at [`localhost:3000`](localhost:3000)

## Workflow

We use [Gitflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow):

1. We work on feature branches named `feature/<short-title-of-feature>` (or bugfix branches named `bugfix/<bug-name>`).
2. When the feature is done, we merge it into `development` with a PR.
3. When `development` is stable, we merge it into `staging`.
4. `qa` is reserved for QA and `prod` is for the public.

## DevOps

## Static Build Process

In development, we're using `next`'s dev server to host the site.
However, for production, we're using `next export` to build out a fully static site that's deployed to Firebase using Gitlab CI/CD pipeline.
