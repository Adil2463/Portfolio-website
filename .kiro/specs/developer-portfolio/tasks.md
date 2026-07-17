# Developer Portfolio - Implementation Tasks

## Phase 0: Foundation

### Task 0.1: Install dependencies
- Install `motion-v` for Vue 3 animation library
- Verify all existing dependencies are compatible
- Run `npm install`

### Task 0.2: Create TypeScript types
- Create `resources/js/types/portfolio.ts`
- Define interfaces: PersonalInfo, NavigationLink, SocialLink, SkillCategory, Experience, Project, Education, Certification, Service, ContactForm
- Export all types

### Task 0.3: Create portfolio data
- Create `resources/js/data/portfolio.ts`
- Populate with placeholder data using types from 0.2
- All content fields use `[Add ...]` placeholders where CV data is missing
- Export typed constants

### Task 0.4: Create composables
- Create `resources/js/composables/useActiveSection.ts` (IntersectionObserver)
- Create `resources/js/composables/useReducedMotion.ts` (prefers-reduced-motion)
- Create `resources/js/composables/usePortfolioTheme.ts` (extends useAppearance)

### Task 0.5: Extend CSS design tokens
- Add portfolio-specific CSS variables to `resources/css/app.css`
- Add accent color, surface colors, grid line color, glow color
- Ensure both light and dark themes are defined

## Phase 1: Global Layout & Navigation

### Task 1.1: Create SectionContainer component
- Reusable wrapper with section ID, padding, max-width
- Props: id, className
- Slot-based content

### Task 1.2: Create PortfolioHeader
- Sticky header with transparent → solid transition on scroll
- Desktop: horizontal nav links + theme toggle + CTA button
- Mobile: hamburger trigger using shadcn Sheet
- Active section indicator (animated underline)
- Smooth anchor link navigation
- Keyboard accessible
- Skip-to-content link

### Task 1.3: Create MobileNavigation
- shadcn Sheet component (side: left)
- Full navigation list
- Social links
- Theme toggle
- Closes after navigation
- Focus trap

### Task 1.4: Create ThemeToggle
- Sun/Moon icon toggle
- Uses existing useAppearance composable
- Smooth icon rotation transition
- Accessible button with aria-label

### Task 1.5: Create PortfolioLayout
- Minimal wrapper for portfolio pages
- Includes PortfolioHeader and PortfolioFooter
- Manages scroll behavior
- Passes through slots

### Task 1.6: Update app.ts layout routing
- Add PortfolioLayout case for 'Portfolio' page
- Ensure correct layout selection

### Task 1.7: Update routes/web.php
- Change home route to render Portfolio page
- Keep existing auth routes intact

## Phase 2: Hero Section

### Task 2.1: Create DeveloperVisual
- Abstract CSS/SVG visual (no person photo)
- Code-inspired grid or geometric pattern
- Subtle animated gradient or glow effect
- Responsive sizing
- Reduced motion support

### Task 2.2: Create HeroSection
- Full viewport height hero
- Name (h1) with staggered reveal animation
- Professional title from data
- Value proposition text
- Primary CTA: "View my work" (scroll to projects)
- Secondary CTA: "Let's talk" (scroll to contact)
- Social links (GitHub, LinkedIn) using SocialLinks component
- Key technology badges with subtle entrance animation
- Availability indicator (when data supports it)
- Responsive: stacked on mobile, split layout on desktop

### Task 2.3: Create SocialLinks
- Reusable icon link set
- Props: links array, size variant
- External link security attributes
- Tooltip on hover
- Accessible labels

## Phase 3: Content Sections

### Task 3.1: Create HighlightsSection
- Compact credibility bar
- Display supported statistics or qualitative highlights
- Bento-style or horizontal card layout
- Scroll-triggered entrance animation
- Icon for each highlight

### Task 3.2: Create AboutSection
- Bento/split layout
- Professional summary from data
- Key supporting details (location, availability, work type)
- Subtle background texture or grid
- Entrance animation

### Task 3.3: Create SkillGroup + SkillsSection
- SkillGroup: category name + badge list with hover descriptions
- SkillsSection: tabbed on mobile, grid on desktop
- Core technologies highlighted differently
- Hover reveals short description
- No percentage bars
- Scroll-triggered entrance

### Task 3.4: Create ExperienceItem + ExperienceSection
- ExperienceItem: role, company, dates, description, tech tags
- ExperienceSection: vertical timeline layout
- Timeline with accessible structure
- Scroll-triggered entrance per item
- Responsive: simplified on mobile

### Task 3.5: Create ProjectCard + ProjectDialog + ProjectsSection
- ProjectCard: image/placeholder, name, overview, tech badges, links
- ProjectDialog: expanded details (shadcn Dialog)
- ProjectsSection: varied grid (featured + standard)
- Card hover: lift, border glow, image scale
- Missing images: CSS/SVG branded placeholder
- Missing links: hidden button (no # href)
- Scroll-triggered staggered entrance

### Task 3.6: Create ServicesSection
- Capability cards based on CV data
- Icon + title + description
- Hover effect
- Only render when data exists

### Task 3.7: Create EducationSection
- Education cards or timeline
- Institution, qualification, dates, specialization
- Clean card layout
- Only render when data exists

### Task 3.8: Create CertificationsSection
- Certification cards
- Issuer, name, date, link (when available)
- Only render when data exists

## Phase 4: Contact & Footer

### Task 4.1: Create ContactSection
- Invitation text
- Contact form (name, email, subject, message)
- shadcn-vue form components (Input, Textarea, Label, Button)
- Client-side validation feedback
- Loading state
- Success/error toast via Sonner
- Email link
- Location/timezone display
- Social links

### Task 4.2: Create Laravel contact backend
- Create `config/portfolio.php` with contact email setting
- Create `app/Http/Requests/StoreContactRequest.php`
- Create `app/Http/Controllers/ContactController.php`
- Create `app/Mail/ContactFormMail.php`
- Add rate limiter in `AppServiceProvider`
- Add POST route in `routes/web.php`
- Add PORTFOLIO_CONTACT_EMAIL to .env.example

### Task 4.3: Create PortfolioFooter
- Name/brand
- Dynamic copyright year
- Navigation links
- Social links
- Back-to-top button
- Short professional statement

## Phase 5: SEO & Metadata

### Task 5.1: Add SEO metadata
- Update Portfolio.vue with Head component
- Add title, meta description
- Add Open Graph tags
- Add Twitter Card tags
- Add canonical URL
- Add Person structured data (JSON-LD)
- Add robots meta tag

### Task 5.2: Add robots.txt
- Create `public/robots.txt`
- Allow all crawlers
- Sitemap reference placeholder

## Phase 6: Verification

### Task 6.1: Run PHP tests
- Run `php artisan test`
- Verify contact form tests pass
- Verify no regressions

### Task 6.2: Run frontend validation
- Run `npx vue-tsc --noEmit`
- Run `npx eslint resources/js/`
- Run `npx prettier --check resources/js/`
- Run `npm run build`

### Task 6.3: Manual verification
- Test at 375px, 768px, 1024px, 1440px
- Test theme switching
- Test mobile navigation
- Test contact form submission
- Test keyboard navigation
- Test reduced motion
- Verify no horizontal overflow
- Verify no console errors
