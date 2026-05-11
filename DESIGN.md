# Design System & Project Documentation
# Vivek Shetye — Technical Solopreneur Portfolio

---

## Project Overview

**Project Name:** Vivek Shetye — Technical Solopreneur Portfolio
**Design System:** Cinematic Technical Solopreneur
**Design System Asset ID:** assets/11122681647980695450

---

## 1. Brand Strategy

### Personal Brand Identity
Vivek Shetye is positioned as:
- Senior Software Engineer with 7+ years of AI/ML systems experience
- Technical Solopreneur building AI-native products
- YouTube Educator with 100K+ subscribers teaching AI Agents, Automation, and GenAI
- Bridge between complex AI research and production-ready systems

### Target Audience
- Technical professionals seeking AI/ML upskilling
- Aspiring AI engineers looking for production-ready tutorials
- Startup founders needing AI infrastructure guidance
- Enterprise engineers modernizing ML systems

### Brand Personality: "The Sophisticated Architect"
- Precision meets innovation
- Engineering credibility with creator energy
- Cinematic depth with technical rigor
- Futuristic yet accessible

---

## 2. Visual Design System

### Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| background-primary | #0A0A0F | Deep charcoal, main background |
| background-secondary | #0D0D12 | Slightly lighter, card backgrounds |
| surface-card | #1A1A1F | Glassmorphic card surfaces |
| primary | #0066FF | Electric Blue, primary CTAs |
| secondary | #8B5CF6 | Neon Purple, creative accents |
| accent-tertiary | #06B6D4 | AI Teal, data/skill indicators |
| text-heading | #E5E5E5 | Cyber Silver, headlines |
| text-body | #A0A0A0 | Muted Silver, body text |
| border-subtle | rgba(255,255,255,0.1) | Glassmorphic borders |

### Typography System

| Style | Font | Size | Weight | Usage |
|-------|------|------|--------|-------|
| display-xl | Space Grotesk | 72px | 700 | Hero headlines |
| display-lg | Space Grotesk | 64px | 700 | Section titles |
| display-md | Space Grotesk | 40px | 600 | Card headlines |
| heading-lg | Space Grotesk | 32px | 600 | Sub-headings |
| heading-md | Space Grotesk | 24px | 500 | Section headers |
| body-lg | Inter | 18px | 400 | Primary body |
| body-md | Inter | 16px | 400 | Secondary body |
| technical-label | JetBrains Mono | 14px | 500 | Code, metadata |

### Spacing Scale

| Token | Value | Usage |
|-------|-------|-------|
| xs | 0.5rem | Tight spacing |
| sm | 1rem | Component spacing |
| md | 1.5rem | Section internal padding |
| lg | 2.5rem | Section gaps |
| xl | 4rem | Hero sections |
| container-max | 1280px | Content width |
| gutter | 1.5rem | Grid gutters |

### Shape Language
- **Roundness:** 8px (ROUND_EIGHT) for all cards, buttons, inputs
- **Border:** 1px solid rgba(255,255,255,0.1) for glassmorphic edges
- **Glow Effects:** Box shadows using accent colors at 15-20% opacity

---

## 3. Layout & Architecture

### Page Structure

1. **Hero/Landing Page** (Primary conversion)
2. **Engineering Timeline** (Career narrative)
3. **Content Creator Hub** (YouTube showcase)
4. **Tech Stack & Systems** (Technical depth)

### Visual Pacing
- Hero sections use xl spacing (4rem) for dramatic entrance
- Dense content sections use lg spacing (2.5rem)
- Cards maintain generous padding (md: 1.5rem)
- Dark space treated as premium asset

### Responsive Strategy
- Desktop-first (1440px+ optimal)
- 12-column fluid grid
- Graceful collapse to tablet (768px) and mobile

---

## 4. Component Library

### Glass Cards
- Background: #1A1A1F with 80% opacity
- Backdrop blur: 12px minimum
- Border: 1px rgba(255,255,255,0.1)
- Radius: 8px
- Hover: Border transitions to gradient

### Primary Buttons
- Background: gradient-ai (linear-gradient from #0066FF to #8B5CF6)
- Text: white, Space Grotesk
- Hover: Brightness increase + expanded glow
- Active: Scale 1.02x

### Secondary Buttons
- Background: transparent
- Border: 1px border-subtle
- Hover: Background fills with 10% gradient

### Data Chips/Tags
- Font: JetBrains Mono, all-caps
- Background: subtle accent tint
- Border: 1px matching category color
- Usage: Tech stacks, AI models, categories

### Timeline Nodes
- Vertical/horizontal line with gradient
- Nodes expand to glassmorphic cards on hover
- Year badges in monospace

### Video Cards
- Thumbnail placeholder with gradient overlay
- Play button with teal glow
- Title, views, duration, category tag
- Hover: scale-up and glow

---

## 5. Page-by-Page Strategy

### Page 1: Hero/Landing (Screen ID: db4e10e1b9ef40eeba96002cbcb897c0)

**Purpose:** Establish Vivek as elite AI Engineer + Creator-Educator

**Sections:**
1. Full-viewport hero with gradient orbs
2. Headline: "Engineering Intelligence at Scale"
3. Mission statement
4. Dual CTAs: "Explore Projects" + "Watch YouTube"
5. Credibility strip (10+ years, AI/ML, YouTube)
6. Featured YouTube builds (3-card grid)
7. Social proof (100K+ subscribers)
8. Footer navigation

**Variants Generated:**
- Variant A (769730cfc82d46d4907b685c83d7d533): Minimalist Founder
- Variant B (936d2723f18e445ab61d05f4851d1d29): Data-Rich Dashboard
- Variant C (05f012e2601e4ca496bbdc1ea71c2456): Cinematic Hybrid

### Page 2: Engineering Timeline (Screen ID: f9e886f37a3c4b31a7983cae855f68ad)

**Purpose:** Visualize career progression and technical growth

**CORRECTED MILESTONES (from Resume - Verified Accurate):**

1. **Jul 2013 – Jul 2014** — Associate Software Engineer @ KloudIQ
   - Developed Python script for stock market data analysis → 20% research improvement
   - Tech: AWS (EC2, S3), Python, Django, JavaScript, jQuery

2. **Jul 2016 – Nov 2017** — Deep Learning Research Engineer @ Anthology
   - Designed novel deep learning algorithms for computer vision and NLP
   - Tech: PyTorch, TensorFlow, OpenCV, Scikit-learn, NLP, RL, Research Publications

3. **Nov 2017 – Jun 2021** — Senior Software Engineer / Tech Lead @ Nanonaut
   - Led ML platform for recommendation systems and search relevance
   - Tech: Kubernetes, TensorFlow, Kubeflow, AWS, PostgreSQL, Redis, Kafka, Apache Beam, Dataflow

4. **2021 – Present** — AI Product Builder / Content Creator
   - Built AI tools (AI Agent Dev, AutoPR, AskAI)
   - YouTube: 100K+ subscribers teaching AI Agents, Automation, GenAI

### Page 3: Content Creator Hub (Screen ID: 10408684259242dc840d0b3135ea2d52)

**Purpose:** Showcase YouTube authority in AI education

**Sections:**
1. Header: "Teaching the Builders of Tomorrow"
2. Featured video hero section
3. Content categories (AI Agents, Automation, GenAI, System Design)
4. Video thumbnail masonry grid
5. Social proof (100K+ subscribers, testimonials)
6. Newsletter CTA

### Page 4: Tech Stack & Systems (Screen ID: 84d9ca4bcdb342ac9083f0a406ae158a)

**Purpose:** Demonstrate technical depth

**Sections:**
1. Header: "Technical Craftsmanship"
2. Architecture visualization (Compute, Data, AI, Serving)
3. Capability matrix (4 glassmorphic cards):
   - Backend & Languages
   - AI/ML Frameworks
   - LLM & Search
   - Data & Infrastructure
4. Tech logo grid
5. Systems badges (40+ models, 99.9% uptime, 2M+ LOC)
6. CTAs (Consulting, YouTube, Resume)

---

## 6. Screen Inventory

| Screen ID | Title | Purpose |
|-----------|-------|---------|
| db4e10e1b9ef40eeba96002cbcb897c0 | Hero Landing | Primary conversion |
| 769730cfc82d46d4907b685c83d7d533 | Variant A: Minimalist | Alternative hero |
| 936d2723f18e445ab61d05f4851d1d29 | Variant B: Dashboard | Alternative hero |
| 05f012e2601e4ca496bbdc1ea71c2456 | Variant C: Cinematic | Alternative hero |
| f9e886f37a3c4b31a7983cae855f68ad | Engineering Timeline | Career narrative |
| 10408684259242dc840d0b3135ea2d52 | Content Creator Hub | YouTube showcase |
| 84d9ca4bcdb342ac9083f0a406ae158a | Tech Stack & Systems | Technical depth |

---

## 7. Motion & Interaction Guidelines

### Hover States
- Cards: Border transitions to gradient, subtle glow
- Buttons: Scale 1.02x, increased glow
- Links: Accent color transition

### Timeline Interaction
- Nodes: Expand into detail cards on hover
- Connector line: Subtle pulse animation
- Year badges: Glow on hover

### Scroll Behavior
- Parallax on gradient orbs in hero
- Fade-in animations for sections
- Sticky navigation at top

---

## 8. Technical Implementation Notes

### Design System Asset
- ID: assets/11122681647980695450
- Version: 1
- Theme: Dark mode with vibrant accents

### Key Design Decisions
1. **Glassmorphism:** All elevated surfaces use backdrop-blur and subtle borders
2. **Gradient Accents:** Electric Blue (#0066FF) to Neon Purple (#8B5CF6) for CTAs and highlights
3. **AI Teal:** Reserved for data indicators, proficiency bars, and success states
4. **Monospace Labels:** JetBrains Mono for technical credibility
5. **Dark Space:** Black backgrounds to make accent colors pop

---

## 9. Scaling Recommendations

### Future Pages to Consider
1. **Startup Vision:** Personal entrepreneurial goals
2. **Featured Projects:** Deep dives into specific builds
3. **Speaking/Community:** Conferences, podcasts, workshops
4. **Contact Funnel:** Consulting inquiry form

### Extension Points
- Add light mode variant for accessibility
- Implement animated transitions between pages
- Create mobile-specific layouts for each page
- Add video modal for YouTube content preview

---

## 10. Files & Resources

### Design System Files
- Cinematic Technical Solopreneur: assets/11122681647980695450
- Cinematic Technical Journey: assets/122aedfde88442cd9ad9901144780aac
- Technical Command Center: assets/67e94c5922d2435ca8784299529f1a89
- Cinematic Creator-Engineer Hybrid: assets/320ca155b01a4f0a8c2250d746a7cd2f

### Background Images Generated
- AI Neural Networks: 0589bedd9d04452c827c8a33723a8b02
- GenAI Infrastructure: 8c21e1b51bf741d6ab47f2f3edcee4ee
- Futuristic Abstract: b1a400bf119d466d8b1d737b9a86bf7c
- LLM Infrastructure: 327e90e5e87b48e1bc7fe2fda1af07a2

---

*Documentation generated: 2026-05-08*
*Design System: Cinematic Technical Solopreneur v1*