# SIDE · Design System

> **O outro lado da alta performance.**
> _Estudo · Mente · Método_

SIDE é uma marca de estudos premium para quem busca **alta performance sem abrir mão da saúde mental**. Mais do que um app de produtividade, é um sistema inteligente de apoio ao aluno: une método, disciplina, foco e equilíbrio emocional numa experiência sofisticada, estratégica e acolhedora na medida certa.

A identidade nasce da **dualidade entre estrutura e fluidez**. De um lado, rotina, precisão, metas, desempenho (a face **gold**, angular). Do outro, respiro, clareza, consciência, bem-estar (a face **green**, curva). O monograma em "S" funde os dois — `método (┐) + mente (∫) = SIDE`.

O público é exigente, ambicioso e consciente: entende que estudar bem não é acumular horas, e sim construir uma jornada sustentável, inteligente e emocionalmente equilibrada. A estética combina **luxo silencioso, tecnologia e performance de elite** — autoridade sem perder sensibilidade.

Pilares do espaço físico (Educação Inteligente): **Tecnologia · Acolhimento · Foco · Performance.**

---

## Sources provided

- `uploads/ChatGPT Image …18_29_17.png` — brand board (light/cream variant): concept, paleta, tipografia, aplicações.
- `uploads/ChatGPT Image …18_29_22.png` — brand board (dark/luxo variant): same system on black.
- `uploads/WhatsApp Image …11.05.49.jpeg` & `…11.05.50.jpeg` — architectural renders of the SIDE study center (fachada, auditório, salas, cabines, recepção, espaço de relaxamento). Reference for the product's dark, warm, premium interior mood and the dashboard UI seen on the screens.
- `uploads/Asset 1.svg` — master vector of the SIDE lockup (S monogram + wordmark). Split into `assets/logo/*`.

No codebase or Figma was provided — the product UI kits here are **interpretations** built from the brand boards + the dashboard screens visible in the renders. Flag for the user where real product specs differ.

---

## CONTENT FUNDAMENTALS — voice & copy

**Language:** Brazilian Portuguese (pt-BR). Always.

**Tone:** Confident, calm, premium. Speaks like a high-performance mentor who also protects your wellbeing — never a hype "hustle" app, never cutesy. *Luxo silencioso.* Warm but precise; aspirational but grounded.

**Person:** Addresses the student directly as **você** ("Foco na sua melhor versão", "Você bateu 4h de foco hoje"). The brand refers to itself as **SIDE** or "nós" sparingly.

**Casing:**
- **Wide-tracked UPPERCASE** for brand labels, eyebrows, section tags and the wordmark — e.g. `O OUTRO LADO DA ALTA PERFORMANCE`, `ESTUDO · MENTE · MÉTODO`, `PALETA`, `CONCEITO`. This is the signature device (letter-spacing `--ls-wider` / `--ls-widest`).
- Sentence case for body copy and UI.
- The product nouns are capitalized as proper features: Foco, Estudo, Mente, Progresso, Descanso, Equilíbrio.

**Separator:** the middle dot `·` (or `•`) between short label words — `ESTUDO · MENTE · MÉTODO`, `Elegante · Humana · Sofisticada`.

**Numbers & data:** confident and specific (78%, 2:45, 12 dias, 85%). Use tabular figures (`--font-data`). Percentages and streaks are motivational, never punitive — atraso is shown softly (muted terracotta, never alarm red).

**Vocabulary:** foco, disciplina, método, estratégia, performance, ranking, sequência, meta (estrutura side); equilíbrio, clareza, respiro, consciência, descanso, saúde mental, bem-estar (fluidez side). Pair the two: "alta performance com conforto", "foco e saúde mental caminham juntos".

**Emoji:** none. The system uses thin-line icons instead.

**Sample copy:**
- Tagline: *"O outro lado da alta performance."*
- App splash: *"Foco na sua melhor versão."*
- Concept: *"Dois lados que se complementam para gerar a verdadeira alta performance."*
- CTA: *"Começar agora"*, *"Continuar estudando"*, *"Ver meu plano"*.
- Encouragement: *"Você está em dia. Respire e siga."*

---

## VISUAL FOUNDATIONS

### Color
Two co-equal modes — both are "correct" SIDE. Light is **cream premium** (paper, packaging, marketing); dark is **luxo** (app, dashboards, the physical space). Theme via `data-theme="light|dark"` on a root element.

- **Ink** `#1A1A1A` — primary text on light; near-black.
- **Black** `#080B14` — blue-black canvas for dark mode.
- **Green / Fluidez** `#1F3D36` — deep forest. The grounded, calm, "mente" color. Primary buttons, the curved monogram half.
- **Gold / Estrutura** `#C8A96A` — warm, restrained gold. The "método/performance" accent — used sparingly for brand moments, top-3 ranks, premium CTAs. Never neon, never a gradient-for-gradient's-sake.
- **Cream** `#F7F4EF` / `#F5F0E8` — warm paper background.

- **Gold is metallic, never flat:** the gold accent renders as a gradient (`--grad-gold`, `--grad-gold-bright`) on the logo, primary CTAs, dock, badges and podium. `--grad-dualidade` sweeps gold→green for brand moments; `--grad-aura` is the flowing app background mesh.

Full ramps live in `tokens/colors.css` (`--ink-*`, `--green-*`, `--gold-*`, `--night-*`, `--paper-*`) with semantic aliases (`--bg`, `--surface`, `--text`, `--accent`, `--border`…). Status colors are muted and on-brand: positive = green family, attention = gold, critical = a quiet terracotta `#9B4A3F` (never bright red).

### Type
Deliberately distinctive and **sans-forward** (no serif — the brand reads sharper and more contemporary without one):
- **Display / headlines → `--font-display`** = *Syne*. Avant-garde, structural, unusual proportions — the bold "estrutura" voice. Hero lines, screen titles, podium. Weights 600–800, tight tracking (`-0.02em`).
- **UI / body → `--font-ui`** = *Schibsted Grotesk*. Clean, modern, uncommon grotesque (substitute for **Suisse Int'l**). All product UI, body, labels.
- **Data → `--font-data`** = *Martian Mono*. Geometric monospace, negative tracking — the signature metrics (timers, %, streaks, tabular figures).
- Signature move: UPPERCASE labels with `--ls-wider` (0.18–0.22em); the wordmark uses `--ls-widest`. Scale in `tokens/typography.css` (`--text-2xs` … `--text-7xl`).

> ⚠️ **Font substitution:** Suisse Int'l and Canela are commercial and **not** bundled. The system now uses distinctive free Google Fonts (Syne, Schibsted Grotesk, Martian Mono) rather than the original common pairing. Swap `tokens/fonts.css` for licensed `@font-face` when real files are available.

### Spacing & layout
4px base scale (`--space-*`), generous luxury rhythm (sections breathe at `--space-12`/104px). Containers `1200`/`1440`, prose `66ch`, sidebar `264px`. Prefer flex/grid with `gap`.

### Radii
Controlled curves echoing the brand's "retas + curvas": crisp `2–8px` on small UI (buttons/inputs `--radius-control` 8px), softer `18px` cards (`--radius-card`), `26px` modals, full pills for tags/segmented/rings. Sharp where structural, round where fluid.

### Backgrounds
Solid cream or solid blue-black — **no decorative gradients**. Imagery (the study-center renders) is dark, warm, low-key, cinematic: amber accent lighting, deep shadows, wood + greenery, a calm luxury hotel feel. Use real photography full-bleed for hero/marketing; tint dark overlays for text legibility. The one sanctioned gradient is the gold→green sweep inside `ProgressRing`.

### Elevation & shadows
Light mode: soft warm-grey shadows (`--shadow-xs…xl`) for premium paper depth. Dark mode: deeper shadows + a faint top inner-hairline (`inset 0 1px 0 rgba(cream,.05)`) for a luxe sheen. A rare gold glow (`--glow-gold`) for brand-moment CTAs only.

### Borders
Hairlines: `--border` (subtle), `--border-strong` (controls), `--hairline` (lowest-contrast). On dark, borders are translucent cream at 7–18%.

### Motion
Calm and confident — **no bounce, no flash**. Ease-out / emphatic settle curves (`--ease-out`, `--ease-emphatic`), unhurried durations (`--dur-base` 240ms, rings settle at `--dur-slower` 680ms). Entrances are fades + small rises (`side-fade-in`, `side-rise`). Respects `prefers-reduced-motion`.

### Interaction states
- **Hover:** subtle — fill darkens one step (green→`--green-600`, gold→`--gold-700`), ghost/secondary get a faint `--surface-2` wash, cards lift `-2px` with a larger shadow.
- **Press:** a slight scale-down (`scale(0.992)`) + 0.5px nudge. No color flash.
- **Focus:** soft ring `--ring` (focus color at 35% — green on light, gold on dark). Never a default browser outline.
- **Disabled:** 50–55% opacity, `not-allowed`.

### Transparency & blur
Used sparingly: translucent borders on dark, dark photo overlays, occasional `color-mix` tints (e.g. highlighted rank row = gold at 12%). Avoid heavy glassmorphism — the brand is matte and editorial, not glossy.

### Cards
Quiet surfaces: `--surface` bg, 1px `--border`, soft `--shadow-sm`, `--radius-card` (18px). Variants: `inset` (sunken, no shadow), `outline` (border only), `ink` (dark luxe panel — used for dashboards even in light contexts), `gold-edge` (premium accent border).

---

## ICONOGRAPHY

- **Style:** thin-line, single-weight stroke (default `1.75`, refined to `1.5` for large pillar marks), rounded caps/joins, 24px grid — the quiet-luxury line look seen on the brand board (foco/target, estudo/book-open, mente/brain, progresso/bar-chart, descanso/moon, equilíbrio/heart).
- **Implementation:** the `Icon` component (`components/brand/Icon.jsx`) ships a curated set with **Lucide-style geometry (MIT)** — the 6 brand pillars plus common UI glyphs (chevrons, check, x, search, bell, settings, user, play, clock, calendar, flame, trophy, trending-up, leaf, headphones…). No icon font; inline SVG so stroke + color inherit.
- **Substitution flag:** these approximate the brand board's bespoke line icons. If SIDE has an official icon set, drop the real SVGs into `assets/icons/` and extend `Icon`'s path map.
- **Emoji / unicode:** never used as icons. The middle-dot `·` is the only decorative glyph.
- **Logo:** vector marks in `assets/logo/` — `side-monogram*.svg` (two-color brand + ink/cream/gold variants), `side-wordmark*.svg`, `side-lockup*.svg`. Prefer the `Logo` component (self-contained, no asset path needed).

---

## INDEX — what's in this system

**Foundations**
- `styles.css` — global entry (import-only). Consumers link this one file.
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `radii.css`, `shadows.css`, `motion.css`, `fonts.css`, `base.css`.

**Assets** (`assets/`)
- `logo/` — monogram, wordmark, lockup (brand + ink/cream/gold tones).
- `brand/` — the two brand boards + study-center render sheets (reference imagery).

**Components** (`window.SideDesignSystem_d0448e.*`)
- `forms/` — Button, Input, Textarea, Select, Checkbox, Switch, RadioGroup, Field.
- `feedback/` — Badge, Tag, ProgressBar, ProgressRing, Toast.
- `layout/` — Card, Stat, Avatar, Divider.
- `navigation/` — Tabs, SegmentedControl.
- `data/` — RankRow.
- `brand/` — Logo, Pillar, Icon.

**UI kits** (`ui_kits/`)
- `app/` — the SIDE student app (dark luxo): splash, dashboard, plano, ranking, mente.
- `marketing/` — the premium landing page (cream).

**Templates** (`templates/`) — copyable starting points consuming projects can seed from (Design Component format):
- `side-app/` — `SideApp.dc.html` — the interactive student app.
- `side-landing/` — `SideLanding.dc.html` — the premium marketing landing.

**Slides** (`slides/`) — branded 16:9 deck templates.

**Other** — `SKILL.md` (Agent Skills wrapper), this `readme.md`.

The **Design System** tab renders every `@dsCard`-tagged HTML (foundations specimen cards + component cards + kit previews + slides).
