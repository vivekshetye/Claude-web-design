# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Vivek Shetye's personal portfolio website — a cinematic technical solopreneur portfolio built with Next.js 15, React 19, and Tailwind CSS. AI-powered design workflow via Stitch MCP integration.

## Common Commands

```bash
npm run dev     # Start development server
npm run build   # Production build
npm run start   # Start production server
npm run lint    # Run ESLint
```

## Tech Stack

- **Framework:** Next.js 15 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS with custom design tokens
- **Fonts:** Space Grotesk (headlines), Inter (body), JetBrains Mono (code/labels)
- **Animation:** Designed for glassmorphic effects, gradients, and glow states
- **Testing:** None configured

## Architecture

```
app/                    # Next.js App Router pages
  page.tsx              # Home/landing page
  engineering/          # Engineering timeline page
  tech-stack/          # Tech stack showcase page
  content/              # Content creator hub (YouTube)
  globals.css          # Global styles with Tailwind

components/
  navigation/           # Navigation components
  sections/             # Page sections (hero, timeline, video grid)
  ui/                   # Reusable UI components (cards, buttons, chips)

lib/
  constants.ts          # Milestones data, tech stack categories, featured videos
  utils.ts              # Utility functions (cn for className merging)
```

## Design System

The design system is documented in `DESIGN.md`. Key tokens:

| Token | Value | Usage |
|-------|-------|-------|
| background-primary | #0A0A0F | Main dark background |
| primary | #0066FF | Electric blue, CTAs |
| secondary | #8B5CF6 | Neon purple, accents |
| accent-tertiary | #06B6D4 | AI teal, data indicators |
| text-heading | #E5E5E5 | Headlines |
| text-body | #A0A0A0 | Body text |
| border-subtle | rgba(255,255,255,0.1) | Glassmorphic borders |

**Glow Effects:** Primary (#0066FF), Secondary (#8B5CF6), Teal (#06B6D4)

## Stitch Integration

This project uses Stitch for AI-powered design-to-code workflow. Stitch MCP is configured in `.mcp.json`. The `STITCH_API_KEY` is stored in `.claude/settings.local.json` (git-ignored). Design system asset ID: `assets/11122681647980695450`.

## Environment Variables

- `.env` — local environment (git-tracked, empty by default)
- `.claude/settings.local.json` — local settings with API keys (not git-tracked)

## Key Files

- [tailwind.config.js](tailwind.config.js) — Design token extensions (colors, fonts, spacing, shadows)
- [app/globals.css](app/globals.css) — Global styles and CSS variables
- [lib/constants.ts](lib/constants.ts) — Career milestones, tech stack categories, featured video data