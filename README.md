# Web Portfolio — Mid-Century Modern Edition

A full-stack developer portfolio reimagined in an authentic **Mid-Century Modern** design aesthetic (1940s–1960s)—blending bold geometric minimalism, warm retro textures, Eames-era catalog sensibilities, Bauhaus-meets-Atomic-Age poster typography, and modernist optimism.

## 1. Quick Start

Ensure [Node.js](https://nodejs.org) (v18.18+ or v20+) is installed.

```bash
# 1. Install dependencies
npm install

# 2. Start the local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Other Commands
- `npm run lint` — Runs TypeScript compiler (`tsc --noEmit`) to verify zero type errors.
- `npm run build` — Compiles optimized production bundle and prerenders static routes.
- `npm run start` — Serves the production build.

---

## 2. Design System & Tokens

### Palette
The color system is built on warm retro paper tones with flat colors (no neon, no glassmorphism, no gradient overlays):
- **Background (Paper Cream):** `#F6EFE0`
- **Ink / Text (Walnut Charcoal):** `#2B2118` (high contrast, WCAG AAA compliant)
- **Mustard Yellow:** `#E3A62B`
- **Burnt Orange:** `#D9622B`
- **Teal:** `#1F7A74`
- **Deep Cobalt Navy:** `#1E3A8A`
- **Olive Green:** `#7A8450`
- **Dusty Pink (Accent):** `#E8A598`

### Dark Mode
- **Background (Warm Walnut Brown):** `#1F1812` (never cold black or gray)
- **Ink:** `#F6EFE0`
- **Brightened Retro Accents:** Mustard (`#F0B238`), Burnt Orange (`#E5733E`), Teal (`#2CA8A0`), Cobalt (`#3B66D6`), Olive (`#8C975E`), Pink (`#F1B4AA`).

### Typography
- **Headings:** Outfit (`--font-heading`) — bold geometric grotesque sans, tight tracking, poster title scale.
- **Body:** DM Sans (`--font-body`) — clean humanist sans for effortless reading.
- **Captions & Metadata:** Space Mono (`--font-mono`) — retro typewriter and catalog numbering.

### Texture & Hard Shadows
- **Paper Grain:** Low-opacity SVG halftone / grain texture overlay (`opacity: 0.045`, pointer-events none).
- **Hard Offset Shadows:** Flat ink drop shadows (`4px 4px 0 var(--ink)`, `6px 6px 0 var(--ink)`, `8px 8px 0 var(--ink)`).

---

## 3. Architecture & Features

- **Top Masthead:** Editorial masthead with thin ink rule, "Zia." bold logo with retro period, minimal links (`About`, `Projects`, `Blog`), retro pill CTA ("Let's talk ↗") with hard offset shadow, and theme toggle.
- **Side Index Rail:** Desktop vertical rail fixed on the left, styled like a 1950s index tab with 7 numbered sections (`01 Home` to `07 Contact`) and an active geometric marker synchronized with scroll position. Collapses cleanly on mobile.
- **Section Color Blocks & Hero Motifs:**
  - `01 Home:` Vintage poster typography with collage of circle, arch, atomic starburst, and boomerang shapes.
  - `02 About:` Warm Mustard paper block with cut-paper arch portrait and vintage spec badges.
  - `03 Projects:` Record sleeve & poster print cards with thick ink outlines and hard-shadow hover lift.
  - `04 Skills:` ONE unified grid of official tech logos in alternating geometric tiles (circle, rounded square, arch) and rotating palette colors.
  - `05 Experience:` Vertical timeline with geometric nodes and prominent year typography.
  - `06 Blog:` Magazine-style editorial list with oversized numbers and clean rules.
  - `07 Contact:` High-impact Burnt Orange block with rotating atomic starburst and clean input form.
- **Animated Calligraphy Monogram:** Opening loading screen with animated "Z" monogram in ink and mustard on cream paper, with escape key and repeat-visit skip support.
- **Motion:** Calm, relaxed 0.7–1.1s springs and curves (`[0.22, 1, 0.36, 1]`), slow starburst rotation, and full support for `prefers-reduced-motion`.

---

## 4. Content & Customization

All portfolio data is centralized in **`content/site.ts`**:
- `site` — Name, initials, tagline, title, location, intro bio, social links.
- `about` — Background paragraphs, education, focus areas, years of experience.
- `projects` — Case studies, architecture, objectives, challenges, and links.
- `skills` — Technologies and tools inventory.
- `experience` — Chronological positions, organizations, and responsibilities.
- `posts` — Journal articles and excerpts.

To update the resume, replace `public/resume.pdf`.
To connect the contact form, copy `.env.example` to `.env.local` and define `CONTACT_WEBHOOK_URL`.
