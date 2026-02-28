# Multa Zero — Design System Brief

**Role:** Senior UI/UX Art Director  
**Project type:** SaaS  
**Industry:** Transportation / Logistics  
**Target audience:** Gestores de frota, empresas com veículos, operações de logística  
**Desired feeling:** Corporativo, empresarial, moderno, clean  
**Mode:** Light mode only  

References: `docs/references` (add moodboards, screenshots, or links when available).

---

## A) Visual Identity Direction

### Color palette (Light mode)

All color decisions support **trust**, **clarity**, and **enterprise credibility** for fleet managers. Primary blue is reserved for actions and key UI; neutrals keep the interface calm and readable.

```css
/* ===== Semantic (use these in components) ===== */
--primary-bg: #105DFB;
--primary-fg: #F0F6FF;
--primary-border: #105DFB;

--surface-default: #FAFBFC;
--surface-elevated: #FFFFFF;

--text-primary: #0F1419;
--text-secondary: #6B7585;

--border-default: #D9DDE4;

--secondary-fg: #ECFDF5;
--bg-success: #10B981;
--text-success: #179D71;

--text-error: #C32727;
--error-bg: #C32727;
--border-error: #DC2626;

--brand-bg: #0336A1;

/* ===== Neutrals (grayscale hierarchy) ===== */
--neutral-1: #F9F9FA;
--neutral-2: #F0F2F4;
--neutral-3: #DCDFE5;
--neutral-4: #B8BDC7;
--neutral-5: #8F96A3;
--neutral-6: #67707E;
--neutral-7: #484F5B;
--neutral-8: #303641;
--neutral-9: #1F242D;
--neutral-10: #101318;

/* ===== Blue ribbon (primary scale) ===== */
--blue-ribbon-1: #F0F5FF;
--blue-ribbon-2: #D7E4FE;
--blue-ribbon-3: #A5C2FD;
--blue-ribbon-4: #73A0FD;
--blue-ribbon-5: #407EFC;
--blue-ribbon-6: #0E5CFB;
--blue-ribbon-7: #0447D3;
--blue-ribbon-8: #0336A1;
--blue-ribbon-9: #02256E;
--blue-ribbon-10: #01143C;
```

**Usage rules:**
- **Primary button:** Background `--blue-ribbon-9` solid, text `--primary-fg`. Reason: single clear action color for conversion.
- **Text in general:** `--neutral-8` (#303641) for headlines and body. Use --text-primary as alias. Reason: readable, authoritative.
- **Text secondary (--text-secondary):** Supporting copy, captions. Reason: hierarchy without noise.
- **Outline button:** Background `--neutral-3`, text `--neutral-7`.
- **Tags:** Background `--blue-ribbon-2`, text `--blue-ribbon-8`.
- **Surface default / elevated:** Page background vs cards, modals. Reason: clear separation, clean feel.
- **Neutrals:** Borders, disabled states, dividers. Reason: consistent gray scale for enterprise UI.
- **Success / Error:** Feedback only. Use sparingly to avoid alert fatigue.
- **No generic SaaS blue elsewhere:** Primary blue is the only blue for brand/actions; neutrals handle the rest.

---

### Typography

**Font stack (Google Fonts or system):**  
Use a single robust family for both headings and body to keep the look corporate and consistent. Recommended:

- **Primary:** **Inter** (Google Fonts) — neutral, highly readable, professional. Alternative: **Plus Jakarta Sans** for a slightly more modern touch.
- **Fallback:** `system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`

**Scale (mapped from your Flutter styles to web):**

| Token       | Size | Weight | Line height | Use |
|------------|------|--------|-------------|-----|
| heading-1  | 54px | 700    | 1.2         | Hero headline (desktop) |
| heading-2  | 42px | 700    | 1.25        | Section titles |
| heading-3  | 32px | 700    | 1.3         | Subsection titles |
| heading-4  | 24px | 700    | 1.35        | Card titles, small sections |
| heading-5  | 20px | 700    | 1.4         | List/block titles |
| heading-6  | 18px | 700    | 1.45        | Overlines, labels |
| body-L     | 18px | 400    | 1.55        | Lead paragraphs |
| body-M     | 16px | 400    | 1.5         | Default body |
| body-S     | 14px | 400/700 | 1.45      | Small body, captions bold |
| body-XS    | 12px | 400    | 1.4         | Captions, metadata |
| body-XXS   | 10px | 400    | 1.4         | Legal, labels |
| subtitle-M | 16px | 700    | 1.35        | Emphasized body |
| subtitle-S | 14px | 400    | 1.4         | Secondary subtitles |
| button-L   | 20px | 700    | 1.25        | Primary CTA |
| button-M   | 16px | 700    | 1.25        | Secondary buttons |
| button-S   | 14px | 700    | 1.3         | Small buttons, links as buttons |
| menu       | 16px | 700    | 1.25        | Nav items |
| caption    | 20px | 700    | 1.25        | Numeric/card highlights (use sparingly) |

**Rationale:** One family + clear scale reduces visual noise and supports scanning (headlines vs body). Heavier weights on CTAs and nav improve conversion and wayfinding.

---

### Spacing rhythm

**Base unit: 4px.** All spacing uses multiples of 4 for alignment and consistency.

| Token   | Value | Use |
|--------|-------|-----|
| space-4 | 4px   | Icon-text gap, tight padding |
| space-8 | 8px   | Inline gaps, small padding |
| space-12| 12px  | — |
| space-16| 16px  | Default component padding, gap between related elements |
| space-24| 24px  | Between sections blocks, card padding |
| space-32| 32px  | Section internal spacing |
| space-40| 40px  | Section vertical rhythm (e.g. 40px between sections) |
| space-48| 48px  | Large section gaps |
| space-64| 64px  | Hero / major section padding |
| space-80| 80px  | Extra-large section padding |

**Rule:** Prefer 16, 24, 32, 40 for component and section spacing. Reason: predictable rhythm that feels orderly and enterprise-appropriate.

---

### Border radius

- **8px:** Buttons, inputs, tags, small cards, chips. Reason: friendly but not playful.
- **16px:** Large cards, modals, feature blocks, images. Reason: clear separation for content blocks.

**Rule:** Do not mix more than two radius sizes in one view. Use 8px for UI controls, 16px for content containers.

---

### Shadow & depth

**Philosophy:** Flat interface with minimal depth. Shadows only where hierarchy or separation is needed (cards, modals, floating elements). Keeps the UI clean and modern.

| Token       | Spec | Use |
|------------|------|-----|
| shadow-sm  | 0 1px 2px rgba(15, 20, 25, 0.06) | Subtle card lift |
| shadow-md  | 0 4px 12px rgba(15, 20, 25, 0.08) | Cards, dropdowns |
| shadow-lg  | 0 8px 24px rgba(15, 20, 25, 0.08) | Modals, sticky nav (when scrolled) |
| shadow-xl  | 0 16px 48px rgba(15, 20, 25, 0.06) | Modals (optional) |

**Do not use:** Strong or colored shadows. Reason: audience expects a professional, low-noise interface.

---

## B) Component Style Guide

### Buttons

**Primary (main CTA)**  
- Background: `--blue-ribbon-9` (#02256E) solid  
- Text: `--primary-fg` (#F0F6FF)  
- Padding: 16px 24px (button-M), 20px 32px (button-L)  
- Radius: 8px  
- Font: button-M (16px/700) or button-L (20px/700)  
- Hover: opacity 0.92, transition ~200ms ease  
- Focus: 2px outline offset 2px using --primary-border  

**Secondary (outline)**  
- Background: `--neutral-3` (#DCDFE5)  
- Text: `--neutral-7` (#484F5B)  
- Padding: 4px 12px (small), or same as primary for medium  
- Radius: 8px  
- Hover: opacity 0.9  
- On hero (dark overlay): override to transparent bg, border + text in --hero-chart-light for contrast  

**Ghost**  
- Background: transparent  
- Border: none  
- Text: --neutral-8 or --text-secondary  
- Hover: background --neutral-1 or --neutral-2  

**Rationale:** One strong primary CTA per section; secondary/ghost for “Conhecer a plataforma” or “Falar com representante” without competing. Text in general uses --neutral-8.

---

### Tags

- Background: `--blue-ribbon-2` (#D7E4FE)  
- Text: `--blue-ribbon-8` (#0336A1)  
- Padding: 4px 10px (or 6px 12px for larger)  
- Radius: 8px  
- Font: 12px, weight 600  

---

### Text inputs (focus)

- **Focus state:** Background `--blue-ribbon-7` (#0447D3), text `--primary-fg`. Border-color blue-ribbon-7.  
- Default: background --surface-elevated, border --border-default, text --text-primary.  
- Placeholder: --text-secondary; when focused, placeholder in light opacity.  

**Rule:** Clear focus indicator for accessibility; blue-ribbon-7 gives strong focus ring without gradient.

---

### Cards

- **On white background:** Background `--neutral-1` (#F9F9FA).  
- Border: 1px solid `--border-default` (#D9DDE4)  
- Radius: 16px (content cards), 8px (small chips/tags)  
- Padding: 24px (default), 32px for feature cards  
- Shadow: shadow-sm or shadow-md (avoid on every card if layout already has clear separation)  

**Rule:** Use neutral-1 for card bg when the section background is white/surface-elevated, so the card has subtle separation. Do not use heavy shadows.

---

### Navigation bar

- **Position:** Fixed top.  
- **Hero:** Transparent background, text/logo in --text-primary or white if on dark hero image; switch to solid when scrolled (see below).  
- **Scrolled state:** Background --surface-elevated, border-bottom 1px --border-default, optional shadow-sm.  
- **Height:** 64px or 72px.  
- **Padding:** 16px 24px (or 24px 40px on desktop).  
- **Logo:** Left. Nav items: right, gap 32px (or 24px), font menu (16px/700).  
- **CTA in nav:** Primary button (e.g. “Falar com representante”) with button-S or button-M.  

**Rationale:** Transparent on hero keeps focus on headline; solid bar on scroll maintains readability and trust.

---

### Icons

- **Style:** Material-light (outline, consistent stroke).  
- **Size:** 20px default, 24px for emphasis, 16px in tight UI.  
- **Color:** Inherit text color or --text-secondary for decorative.  
- **Do not mix** with filled or rounded style in same section.  

---

## C) Motion & Interaction Rules

- **Entrance:** Smooth and relatively slow (e.g. 400–600ms ease-out). Avoid bouncy or fast fades. Reason: calm, enterprise feel.  
- **Hover:** Smooth transitions (150–250ms) on buttons, links, cards. No abrupt changes.  
- **Page load:** Optional subtle blur-to-focus or fade-in on hero (e.g. 600ms). Do not block content.  
- **Scroll:** Staggered reveal for sections (e.g. fade + slight Y motion, 50–100ms stagger between elements). Keep motion subtle so it doesn’t distract from copy.  
- **Avoid:** Auto-playing carousels, aggressive parallax, or decorative motion that doesn’t support content or conversion.

---

## D) Layout System

### Grid

- **Columns:** 12.  
- **Gutter:** 24px (16px on narrow breakpoints if needed).  
- **Margin:** 24px (mobile), 40px or 48px (tablet), 64px or 80px (desktop).  
- **Max-width (content):** 1200px or 1280px for readable line length in text-heavy sections.  

### Hero

- **Layout:** Full-bleed (edge-to-edge).  
- **Content:** Centered or split (e.g. 50/50 text + product visual). Use max-width container for text so line length stays comfortable.  
- **Vertical padding:** 80px or 96px (desktop).  

### Section alternation

- Alternate **full-width** (background color or subtle pattern) with **contained** (content in max-width container, padding as above).  
- **Rule:** Do not repeat the same layout type more than twice in a row (e.g. contained → full-width → contained → full-width). Reason: rhythm and variety for scroll flow and conversion pacing.

**Examples:**  
- Hero: full-bleed.  
- Logos/trust: full-width strip, contained content.  
- Problema: contained.  
- Solução: full-width background, contained content.  
- Como funciona: contained.  
- Resultados: full-width, contained.  
- Pricing/CTA: contained.  

---

## Constraints (recap)

- **Light mode only.**  
- **No generic SaaS blue** beyond the defined primary/blue-ribbon palette.  
- **Every decision** tied to audience (gestores de frota, empresas) or conversion (clear CTAs, hierarchy, trust).  
- **Fonts:** Google Fonts or system fonts only (e.g. Inter, Plus Jakarta Sans, system-ui).  
- **References:** Use `docs/references` for moodboards or screenshots when available; this brief is the single source of truth for tokens and rules.

**Visual & content constraints:**

- **No gradients** unless explicitly specified in the brief (e.g. use solid overlays, solid backgrounds).
- **No stock photo look:** Prefer real product/operational media (e.g. own video, UI, fleet); avoid generic posed people or obvious stock imagery.
- **No cartoons or cheesy icons:** Use simple, professional iconography (e.g. material-light outline); no illustrated characters or playful mascots.
- **Maximum whitespace, clean hierarchy:** Generous spacing between sections and between elements; one dominant level (e.g. headline) then clear secondary levels (subhead, body); avoid clutter.
- **One clear focal point per section:** Each section should have a single primary focus (e.g. hero = headline + primary CTA; features = one main message or one lead card); avoid competing elements of equal weight.

---

## Quick reference: CSS custom properties (copy-paste)

```css
:root {
  /* Semantic */
  --primary-bg: #105DFB;
  --primary-fg: #F0F6FF;
  --primary-border: #105DFB;
  --surface-default: #FAFBFC;
  --surface-elevated: #FFFFFF;
  --text-primary: #303641; /* neutral-8, text in general */
  --text-secondary: #6B7585;
  --border-default: #D9DDE4;
  --bg-success: #10B981;
  --text-success: #179D71;
  --text-error: #C32727;
  --border-error: #DC2626;
  --brand-bg: #0336A1;

  /* Neutrals */
  --neutral-1: #F9F9FA;
  --neutral-2: #F0F2F4;
  --neutral-3: #DCDFE5;
  --neutral-4: #B8BDC7;
  --neutral-5: #8F96A3;
  --neutral-6: #67707E;
  --neutral-7: #484F5B;
  --neutral-8: #303641;
  --neutral-9: #1F242D;
  --neutral-10: #101318;

  /* Blue ribbon */
  --blue-ribbon-1: #F0F5FF;
  --blue-ribbon-2: #D7E4FE;
  --blue-ribbon-3: #A5C2FD;
  --blue-ribbon-4: #73A0FD;
  --blue-ribbon-5: #407EFC;
  --blue-ribbon-6: #0E5CFB;
  --blue-ribbon-7: #0447D3;
  --blue-ribbon-8: #0336A1;
  --blue-ribbon-9: #02256E;
  --blue-ribbon-10: #01143C;

  /* Shadows */
  --shadow-sm: 0 1px 2px rgba(15, 20, 25, 0.06);
  --shadow-md: 0 4px 12px rgba(15, 20, 25, 0.08);
  --shadow-lg: 0 8px 24px rgba(15, 20, 25, 0.08);

  /* Spacing (examples) */
  --space-16: 16px;
  --space-24: 24px;
  --space-32: 32px;
  --space-40: 40px;
  --space-64: 64px;
  --space-80: 80px;

  /* Radius */
  --radius-sm: 8px;
  --radius-md: 16px;

  /* Hero / chart palette (transport theme) */
  --hero-chart-light: #DCE8E7;
  --hero-chart-dark: #122E40;
  --hero-chart-blue: #30588C;
}
```

---

## Hero section (spec)

- **Layout:** Full-bleed. Background: video `videos/Truck_moving_in_road_32aee69975.mp4`. Overlay: **solid** `--hero-chart-dark` (#122E40) with opacity (no gradient).
- **Focal point:** Headline + primary CTA only; subheadline and body support but do not compete.
- **Left column:** ~48% width (or flex: 1 with max-width). Contains: headline, subheadline, body, CTAs. Content left-aligned, anchored in a max-width block. Maximum whitespace between elements; clean hierarchy.
- **Small button (example):**
  - `display: flex; height: 39px; padding: 4px 12px; justify-content: center; align-items: center; gap: 6px;`
  - Use for secondary CTA (e.g. "Conhecer a plataforma"). Primary CTA can use larger button-M.
- **Chart / hero colors:** `#DCE8E7` (light — body/subhead on dark overlay), `#122E40` (dark — overlay, headline contrast), `#30588C` (blue — primary CTA in hero).

---

*Document version: 1.0. Use this brief for all Multa Zero website UI: design and implementation.*
