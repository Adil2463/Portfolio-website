# Developer Portfolio - Design Document

## Visual Direction

Modern editorial technology aesthetic. The design prioritizes clarity, hierarchy, and professional sophistication over visual noise. Think: a premium tech publication meets a refined developer's workspace.

**Key principles:**
- Strong typographic hierarchy as the primary design driver
- Generous whitespace creating breathing room
- Thin 1px borders for subtle separation
- Layered surfaces with minimal shadow depth
- Code-inspired micro-details (monospace labels, status dots, line numbers)
- Restrained use of color — primarily neutral with a single accent
- Dark mode as the premium default experience

**Avoid:**
- Excessive glassmorphism or heavy blur
- Neon glows or heavy gradients
- Autoplay video backgrounds
- Fake terminal interfaces
- Generic stock imagery
- Animating every element

## Typography System

**Primary font:** Instrument Sans (already loaded via Vite)
- Weights: 400 (body), 500 (medium), 600 (semibold)
- Used for: headings, body text, navigation, buttons

**Monospace accent:** System monospace stack
- Used for: code-inspired labels, tech badges, status indicators
- Stack: `'JetBrains Mono', ui-monospace, SFMono-Regular, monospace`

**Scale (Tailwind utilities):**
- Hero heading: `text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight`
- Section heading: `text-3xl md:text-4xl font-semibold tracking-tight`
- Subsection: `text-xl md:text-2xl font-medium`
- Body: `text-base` (16px)
- Small/caption: `text-sm` (14px)
- Micro/labels: `text-xs` (12px) with `font-mono uppercase tracking-wider`

## Color System

Extends the existing shadcn-vue neutral theme with portfolio-specific accents.

**Light mode additions:**
```css
--portfolio-accent: 262 83% 58%;       /* Violet-500 equivalent */
--portfolio-accent-light: 263 70% 50%;
--portfolio-surface: 0 0% 100%;
--portfolio-surface-elevated: 0 0% 98%;
--portfolio-grid-line: 0 0% 95%;
--portfolio-glow: 262 83% 58%;
```

**Dark mode additions:**
```css
--portfolio-accent: 263 70% 60%;
--portfolio-accent-light: 263 70% 70%;
--portfolio-surface: 0 0% 7%;
--portfolio-surface-elevated: 0 0% 10%;
--portfolio-grid-line: 0 0% 14%;
--portfolio-glow: 263 70% 60%;
```

**Usage:**
- Accent color: interactive elements, active states, skill highlights
- Surfaces: card backgrounds at different depths
- Grid lines: subtle background texture
- Glow: hover effects on cards, focused inputs

## Spacing System

Follows Tailwind's default scale consistently:
- Section vertical padding: `py-20 md:py-28 lg:py-32`
- Container horizontal padding: `px-6 md:px-8 lg:px-12`
- Max container width: `max-w-6xl` (1152px) for content, `max-w-7xl` for full bleed
- Card internal padding: `p-6 md:p-8`
- Gap between grid items: `gap-6 md:gap-8`
- Space between sections: handled by section padding
- Space between heading and content: `mt-4` or `mt-6`
- Inline element spacing: `gap-2` to `gap-4`

## Border Radius System

```css
--radius-card: 0.75rem;    /* 12px - cards, dialogs */
--radius-badge: 0.5rem;    /* 8px - badges, tech labels */
--radius-button: 0.5rem;   /* 8px - buttons */
--radius-full: 9999px;     /* pills, avatars */
```

## Shadow System

Minimal and layered rather than heavy:
- Cards: `shadow-sm` (subtle lift)
- Cards hover: `shadow-md` with accent border glow
- Elevated surfaces: `shadow-lg`
- No heavy drop shadows on text or decorative elements

## Light and Dark Themes

**Dark mode (primary):**
- Background: near-black (`hsl(0 0% 3.9%)`)
- Surface: slightly lighter (`hsl(0 0% 7%)`)
- Elevated surface: (`hsl(0 0% 10%)`)
- Text: near-white (`hsl(0 0% 98%)`)
- Muted text: (`hsl(0 0% 63.9%)`)
- Borders: (`hsl(0 0% 14.9%)`)
- Accent: violet tint

**Light mode:**
- Background: pure white (`hsl(0 0% 100%)`)
- Surface: (`hsl(0 0% 98%)`)
- Elevated surface: white
- Text: near-black (`hsl(0 0% 3.9%)`)
- Muted text: (`hsl(0 0% 45.1%)`)
- Borders: (`hsl(0 0% 92.8%)`)
- Accent: deeper violet

Both themes maintain WCAG AA contrast ratios for all text.

## Page Structure

```
┌─────────────────────────────────────────┐
│ PortfolioHeader (sticky, transparent→solid) │
├─────────────────────────────────────────┤
│ HeroSection                              │
│   ├── Name + Title + Value Prop          │
│   ├── CTA Buttons                        │
│   ├── Tech Badges                        │
│   └── DeveloperVisual (CSS/SVG)          │
├─────────────────────────────────────────┤
│ HighlightsSection (stats/capabilities)   │
├─────────────────────────────────────────┤
│ AboutSection (bento layout)             │
├─────────────────────────────────────────┤
│ SkillsSection (categorized cards)        │
├─────────────────────────────────────────┤
│ ExperienceSection (timeline)             │
├─────────────────────────────────────────┤
│ ProjectsSection (varied grid)            │
├─────────────────────────────────────────┤
│ ServicesSection (capability cards)       │
├─────────────────────────────────────────┤
│ EducationSection (cards/timeline)        │
├─────────────────────────────────────────┤
│ CertificationsSection (cards)            │
├─────────────────────────────────────────┤
│ ContactSection (form + info)             │
├─────────────────────────────────────────┤
│ PortfolioFooter                          │
└─────────────────────────────────────────┘
```

## Vue Component Architecture

```
resources/js/
├── components/
│   ├── layout/
│   │   ├── PortfolioHeader.vue      (sticky nav, scroll detection, active section)
│   │   ├── MobileNavigation.vue     (Sheet-based slide-out menu)
│   │   ├── ThemeToggle.vue          (sun/moon icon toggle)
│   │   ├── SectionContainer.vue     (consistent section wrapper with ID)
│   │   └── PortfolioFooter.vue      (minimal footer)
│   ├── portfolio/
│   │   ├── HeroSection.vue          (hero content + visual)
│   │   ├── DeveloperVisual.vue      (CSS/SVG abstract visual)
│   │   ├── HighlightsSection.vue    (key statistics/capabilities)
│   │   ├── AboutSection.vue         (bento-style about)
│   │   ├── SkillsSection.vue        (skill categories with tabs/badges)
│   │   ├── SkillGroup.vue           (single skill category)
│   │   ├── ExperienceSection.vue    (timeline wrapper)
│   │   ├── ExperienceItem.vue       (single timeline entry)
│   │   ├── ProjectsSection.vue      (project grid)
│   │   ├── ProjectCard.vue          (individual project card)
│   │   ├── ProjectDialog.vue        (expanded project details)
│   │   ├── ServicesSection.vue      (capabilities grid)
│   │   ├── EducationSection.vue     (education cards)
│   │   ├── CertificationsSection.vue (certification cards)
│   │   ├── ContactSection.vue       (form + contact info)
│   │   └── SocialLinks.vue          (reusable social icon set)
│   └── ui/
│       └── (existing shadcn-vue components)
├── composables/
│   ├── useActiveSection.ts          (IntersectionObserver for nav)
│   ├── usePortfolioTheme.ts         (extends useAppearance for portfolio)
│   └── useReducedMotion.ts          (prefers-reduced-motion detection)
├── data/
│   └── portfolio.ts                 (all CV content, typed)
├── types/
│   └── portfolio.ts                 (TypeScript interfaces)
├── layouts/
│   └── PortfolioLayout.vue          (portfolio-specific layout)
└── pages/
    └── Portfolio.vue                (main portfolio page)
```

**Component principles:**
- All components use `<script setup lang="ts">`
- Data-driven rendering from `portfolio.ts`
- Reusable sub-components for repeated patterns
- Props typed with TypeScript interfaces
- No business logic in templates
- CSS-only animations where possible, motion-v for complex sequences

## Laravel Integration

- Route: `GET /` renders the Portfolio page via Inertia
- Route: `POST /contact` handles form submission
- Controller: `ContactController` with `store` method
- Form Request: `StoreContactRequest` for validation
- Rate limiter: `contact` using `Limit::perMinute(6)`
- Mail: `ContactFormMail` sent to configurable email
- Config: `config/portfolio.php` for contact email setting
- Environment: `PORTFOLIO_CONTACT_EMAIL` variable

**Inertia page rendering:**
```php
Route::inertia('/', 'Portfolio')->name('home');
```

**Layout assignment in app.ts:**
```typescript
case name === 'Portfolio':
    return PortfolioLayout;
```

## Contact Form Architecture

```
Frontend (Vue)              Backend (Laravel)
─────────────────          ─────────────────
ContactSection.vue    →    POST /contact
  ├── Name input            ContactController@store
  ├── Email input             └── StoreContactRequest (validation)
  ├── Subject input            └── RateLimiter::attempt()
  ├── Message textarea         └── Mail::to()->send()
  ├── Submit button              └── ContactFormMail
  └── Loading/error states     └── Response (Inertia validation)
```

**Validation rules:**
- name: required, string, max:255
- email: required, email, max:255
- subject: required, string, max:255
- message: required, string, max:5000

**Error handling:**
- Client-side: immediate field validation on blur
- Server-side: Inertia validation errors auto-populated
- Network error: toast notification via vue-sonner
- Rate limit: specific error message

## Animation Strategy

**motion-v usage:**
- Section entrance: `v-motion` with `initial` and `visible` presets
- Staggered lists: `useStaggerChildren` from motion-v
- Project card hover: scale + shadow transition
- Dialog transitions: enter/leave with scale + opacity

**CSS/Tailwind transitions:**
- Button hover: `transition-all duration-200`
- Link underlines: pseudo-element width transition
- Theme toggle: rotation transition
- Card border: color transition
- Badge hover: background color change
- Icon movement on hover: `translate-x-0.5`

**Reduced motion:**
- `useReducedMotion` composable checks `prefers-reduced-motion`
- Wraps motion-v config to disable animations when preferred
- CSS `motion-reduce:` variant for Tailwind transitions
- Content remains fully visible and functional without animation

## Responsive Behavior

| Breakpoint | Layout Changes |
|---|---|
| < 640px | Single column, full-width cards, stacked grid, hamburger menu |
| 640-768px | Two-column grids where appropriate, slightly more spacing |
| 768-1024px | Three-column grids, bento layouts begin, side-by-side sections |
| 1024-1440px | Full layout with max-width containers, all desktop features |
| > 1440px | Centered content with generous margins |

**Key responsive decisions:**
- Hero: stacked on mobile, side-by-side on desktop
- Skills: tabbed navigation on mobile, grid on desktop
- Experience: simplified timeline on mobile, full timeline on desktop
- Projects: single column on mobile, varied grid on desktop
- Contact: full-width form on mobile, side-by-side on desktop

## Accessibility Strategy

1. **Semantic structure:** Use `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>` landmarks
2. **Heading hierarchy:** Single h1, sequential h2 for sections, h3 for subsections
3. **Skip link:** First focusable element, visually hidden until focused
4. **Focus management:** Visible focus rings, focus trap in mobile menu
5. **Form accessibility:** Labels, aria-describedby for errors, aria-invalid
6. **Dialog accessibility:** aria-modal, aria-labelledby, focus return on close
7. **Image alternatives:** Meaningful alt text or decorative hiding
8. **Color independence:** No information conveyed by color alone
9. **Reduced motion:** All animations disabled when prefers-reduced-motion is set
10. **Testing:** Keyboard-only navigation audit, screen reader walkthrough

## SEO Strategy

- `<Head>` component from Inertia for per-page metadata
- Person structured data via JSON-LD script
- Open Graph tags: title, description, type, url, image
- Twitter Card tags: card, title, description
- Semantic heading hierarchy for content structure
- Descriptive anchor text throughout
- robots meta tag for production
- Canonical URL from config

## Testing Approach

**Backend:**
- PHPUnit feature tests for contact form endpoint
- Validation rule tests
- Rate limiter tests
- Mail dispatch tests

**Frontend:**
- Production build verification
- ESLint compliance
- TypeScript type checking
- Manual keyboard navigation audit
- Theme switching verification
- Responsive breakpoint testing
- Animation reduced-motion verification

## Existing Stack Constraints

- **DO NOT** upgrade Laravel, Vue, Tailwind, Inertia, or Vite
- **USE** existing shadcn-vue components (Button, Card, Badge, Sheet, Dialog, Input, Textarea, Label, Separator, Tooltip, Sonner, Skeleton)
- **USE** existing `cn()` utility from `@/lib/utils`
- **USE** existing `useAppearance` composable
- **USE** existing Instrument Sans font
- **USE** npm as package manager (package-lock.json)
- **PRESERVE** all existing starter kit code and functionality
- **ADD** the portfolio as a new page, not a replacement
