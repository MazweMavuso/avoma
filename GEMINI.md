# AVOMA Pharma — Website Rebuild Project Brief

> **For:** Gemini AI Developer Assistant  
> **Project:** Full rebuild of [avomagroup.com/pharma](https://avomagroup.com/pharma/)  
> **Goal:** A significantly improved, modern, animated, brand-consistent pharmaceutical division website  

---

## 1. Project Overview

**AVOMA Pharma** is the pharmaceutical wholesale & distribution division of **AVOMA Group**, a healthcare solutions provider operating across **Eswatini** and **Mozambique**. Established in September 2019, AVOMA Pharma focuses on:

- Wholesale & distribution of pharmaceutical products
- Surgical equipment supply
- Medical consumables distribution

The rebuild must feel **premium, trustworthy, and clinical** — the visual language of a reliable African healthcare company with global partnerships. Think clean lines, authoritative typography, deliberate motion, and a palette rooted in the existing brand.

---

## 2. Tech Stack

| Tool | Version / Notes |
|------|----------------|
| **React** | via Vite scaffold (`npm create vite@latest`) |
| **Vite** | Latest stable |
| **Tailwind CSS** | v4.x — utility-first styling |
| **Framer Motion** | Animations, page transitions, scroll reveals |
| **Lucide React** | Icon set (primary) |
| **React Icons** | Supplementary icons (FaFlask, FaPills, FaShippingFast, etc.) |
| **Snowfall** | `react-snowfall` — subtle ambient particle effect on hero |
| **React Router DOM** |  — routing between pages/sections |

### Install Commands
```bash
npm create vite@latest avoma-pharma -- --template react
cd avoma-pharma
npm install
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm install framer-motion lucide-react react-icons react-snowfall react-router-dom
```

---

## 3. Brand Color Palette

Extracted from the existing avomagroup.com visual identity. Use these as Tailwind custom colors and CSS variables.

```js
// tailwind.config.js — extend colors
colors: {
  brand: {
    navy:       '#0a1628',   // Deep navy — primary dark background
    blue:       '#1a3a6b',   // Corporate blue — section backgrounds, headers
    teal:       '#0d6e8a',   // Teal accent — CTAs, highlights, borders
    tealLight:  '#1a9ab8',   // Lighter teal — hover states, gradients
    white:      '#ffffff',   // Pure white — cards, text on dark
    offWhite:   '#f4f8fb',   // Off-white — light section backgrounds
    gray:       '#6b7280',   // Body text, muted labels
    grayLight:  '#e5edf5',   // Dividers, card borders
    red:        '#c0392b',   // Accent for alerts, emphasis (sparingly)
    gold:       '#c9a84c',   // Premium accent — certifications, badges
  }
}
```

### CSS Variables (index.css)
```css
:root {
  --color-navy:       #0a1628;
  --color-blue:       #1a3a6b;
  --color-teal:       #0d6e8a;
  --color-teal-light: #1a9ab8;
  --color-white:      #ffffff;
  --color-off-white:  #f4f8fb;
  --color-gold:       #c9a84c;
  --color-gray:       #6b7280;
}
```

### Usage Rules
- **Dark sections**: `bg-brand-navy` or `bg-brand-blue` with `text-white`
- **Light sections**: `bg-brand-offWhite` with `text-brand-navy`
- **CTA buttons**: `bg-brand-teal hover:bg-brand-tealLight text-white`
- **Section accents / underlines**: `border-brand-teal` or `bg-brand-gold`
- **Snowfall particles**: white (`#ffffff`) at low opacity (`0.6`) for subtlety

---

## 4. Typography

```css
/* Google Fonts — add to index.html */
/* Display / Headings: Playfair Display — authoritative, premium */
/* Body: DM Sans — clean, modern, highly legible */

@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap');
```

```js
// tailwind.config.js
fontFamily: {
  display: ['"Playfair Display"', 'serif'],
  body:    ['"DM Sans"', 'sans-serif'],
}
```

### Type Scale
| Role | Class |
|------|-------|
| Hero headline | `font-display text-5xl md:text-7xl font-bold` |
| Section heading | `font-display text-3xl md:text-4xl font-semibold` |
| Card heading | `font-display text-xl font-semibold` |
| Body text | `font-body text-base font-normal leading-relaxed` |
| Label / caption | `font-body text-sm font-medium tracking-widest uppercase` |

---

## 5. Project File Structure

```
avoma-pharma/
├── public/
│   └── avoma-logo.png          # Place the AVOMA logo here
├── src/
│   ├── assets/
│   │   └── partners/           # Partner brand logo PNGs
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── Layout.jsx
│   │   ├── ui/
│   │   │   ├── Button.jsx
│   │   │   ├── SectionHeader.jsx
│   │   │   ├── Card.jsx
│   │   │   └── Badge.jsx
│   │   └── sections/
│   │       ├── Hero.jsx
│   │       ├── AboutPharma.jsx
│   │       ├── ConsumablesSection.jsx
│   │       ├── MedicinesSection.jsx
│   │       ├── CertifiedSection.jsx
│   │       ├── PartnersCarousel.jsx
│   │       ├── StatsBar.jsx
│   │       └── ContactSection.jsx
│   ├── pages/
│   │   └── PharmaPage.jsx
│   ├── data/
│   │   ├── consumables.js
│   │   ├── medicines.js
│   │   └── partners.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── tailwind.config.js
├── vite.config.js
└── index.html
```

---

## 6. Page Sections — Detailed Specs

### 6.1 Navbar
- **Sticky**, glass-morphism style on scroll: `backdrop-blur-md bg-brand-navy/80`
- Left: AVOMA Group logo + "pharma" sub-label in teal
- Right: Nav links — `Products`, `Medicines`, `Certifications`, `Contact`
- Mobile: Hamburger menu with Framer Motion slide-down drawer
- Top bar (desktop): small strip with phone numbers for Eswatini & Mozambique
- Use `lucide-react`: `Phone`, `Menu`, `X`, `ChevronDown`

```jsx
// Scroll behavior
const [scrolled, setScrolled] = useState(false);
useEffect(() => {
  window.addEventListener('scroll', () => setScrolled(window.scrollY > 50));
}, []);
// Apply: scrolled ? 'bg-brand-navy/95 shadow-lg' : 'bg-transparent'
```

---

### 6.2 Hero Section
- **Full viewport height** (`min-h-screen`)
- Background: deep navy-to-teal diagonal gradient with a subtle medical cross / molecular grid SVG pattern overlay (CSS `background-image`)
- **Snowfall**: white particles, low count (80), slow speed — evokes sterile, clean, clinical atmosphere
- Headline: `"Pharmaceutical Wholesale & Distribution"` — animate in with Framer Motion `fadeInUp`
- Sub-headline: `"Your trusted partner for medicines, consumables & surgical equipment across Southern Africa"`
- Two CTA buttons: `"Explore Products"` (teal filled) + `"Contact Us"` (white outlined)
- Framer Motion stagger children on load

```jsx
// Snowfall config
<Snowfall
  color="#ffffff"
  snowflakeCount={80}
  speed={[0.5, 1.5]}
  wind={[-0.5, 0.5]}
  radius={[1, 4]}
  style={{ opacity: 0.4, zIndex: 1 }}
/>
```

---

### 6.3 Stats Bar
Full-width dark band (`bg-brand-blue`) with 4 animated counters:

| Stat | Value |
|------|-------|
| Years in Operation | 6+ |
| Product Categories | 3 |
| Partner Brands | 18+ |
| Countries Served | 2 |

- Use `framer-motion` `useInView` + counter animation
- Dividers between stats with `border-brand-teal`
- Icons from `lucide-react`: `Calendar`, `Package`, `Globe`, `Handshake`

---

### 6.4 About Pharma Section
- Two-column layout (text left, decorative right)
- Left: heading, paragraph about division history (est. Sept 2019), mission
- Right: stylized card stack or abstract medical illustration using CSS/SVG
- Light background (`bg-brand-offWhite`)
- Teal left-border accent on the intro paragraph

**Copy:**
> AVOMA Pharma is a division of AVOMA Group, established in September 2019, joining Avoma Life and Avoma Strategy which have been trading since 2017. Our main focus is the wholesale and distribution of pharmaceutical products, surgical equipment and medical consumables — serving private clients, the corporate sector, NGOs and government.

---

### 6.5 Consumables Section
- Dark background (`bg-brand-navy`)
- Section label: `"WHAT WE SUPPLY"` in teal uppercase tracking
- Heading: `"Medical Consumables"`
- Intro paragraph on clients served (private, corporate, NGO, government)
- **Product grid**: Masonry or CSS grid of consumable tags/pills — styled chips in `bg-brand-blue text-white` with teal border hover, using Framer Motion stagger
- Full consumables list (see data below)
- **Brands sub-section**: horizontal logo strip on `bg-brand-blue/50` with grayscale → color hover

**Consumables Data** (`src/data/consumables.js`):
```js
export const consumableItems = [
  "PPE", "Breathing Tubes", "Gauze", "Stocking", "ET Tubes",
  "BP Monitor", "Crutches", "Tablet Bags & Vials", "Medicine Bottles",
  "Suction Catheters", "Needles", "Pressure Air Mattress",
  "Glucometers & Strips", "Surgical Gowns", "Aprons & Suits",
  "Mop Cap", "Shoe Covers", "Nebulizer Mask", "Abdominal Swabs",
  "Eye Pads", "Cervical Collars", "Compression Stockings",
  "Stethoscopes", "Molicare Incontinence Pads", "Tongue Depressors",
  "Infusion Sets", "Buretrol", "Exam Gloves", "Surgical Gloves",
  "Nitrile Gloves", "Emergency High Risk Gloves",
  "Bin Liner Bags (Red & Black)", "Sharp Containers",
  "Pregnancy Strips", "Urine Strips", "Uterine Balloons"
];

export const consumableBrands = [
  { name: "Healthesse",          url: null },
  { name: "Neomedic",            url: null },
  { name: "Hartmann",            url: "https://www.hartmann.info/en-za" },
  { name: "Grobir",              url: null },
  { name: "Disa Life Science",   url: "https://www.disals.co.za/" },
  { name: "Lohmann & Rauscher",  url: null },
  { name: "Rossmax",             url: "https://www.rossmax.com/" },
  { name: "E-LinkCare",          url: "http://www.e-linkcare.com/" },
  { name: "Ellavi",              url: null },
];
```

---

### 6.6 Medicines Section
- Light background (`bg-brand-offWhite`)
- Heading: `"Medicines"` with teal underline bar
- Description: range of South African pharmaceutical brands
- **Brand cards**: grid of branded cards — each card has brand name, a subtle logo placeholder area, and a link. Style: `bg-white rounded-xl shadow-md hover:shadow-xl border-t-4 border-brand-teal`
- Framer Motion: `whileHover={{ y: -4 }}` on each card
- React Icons: `FaPills` from `react-icons/fa` for section icon

**Medicine Brands Data** (`src/data/medicines.js`):
```js
export const medicineBrands = [
  { name: "Aspen",           url: "https://www.aspenpharma.com/",     specialty: "Oncology & Generics" },
  { name: "Adcock Ingram",   url: "https://www.adcock.co.za",         specialty: "OTC & Ethical" },
  { name: "Cipla",           url: "https://www.cipla.com/",            specialty: "Generics" },
  { name: "Pharma Dynamics", url: "https://pharmadynamics.co.za/",    specialty: "Cardiovascular" },
  { name: "Sun Pharma",      url: "https://www.sunpharma.com/",        specialty: "Specialty Pharma" },
  { name: "Austell",         url: "http://www.austell.co.za/",         specialty: "Generics" },
  { name: "Johnson & Johnson",url: "https://www.jnj.com/",            specialty: "Consumer Health" },
  { name: "Actor Pharma",    url: "https://www.actorpharma.co.za/",   specialty: "Generics" },
];
```

---

### 6.7 Certified Section
- Full-width dark section (`bg-brand-blue`)
- Heading: `"Internationally Certified"`
- Three certification badges side-by-side with icons + descriptions:

| Badge | Icon | Description |
|-------|------|-------------|
| GMP Certified | `lucide: ShieldCheck` | Good Manufacturing Practice |
| CE Approved | `lucide: BadgeCheck` | European Conformity |
| FDA Approved | `lucide: Award` | US Food & Drug Administration |

- Gold badge color (`text-brand-gold border-brand-gold`) for premium feel
- Sub-copy: *"We stock certified international generics from Europe and India — tablets, syrups, capsules, injectables, and European oncology drugs."*
- Framer Motion: scale-in animation on scroll

---

### 6.8 Partners Carousel
- Auto-scrolling infinite logo carousel (CSS animation or Framer Motion)
- All partner brand logos: Rossmax, E-LinkCare, Disa LS, Neomedic, Hartmann, Aspen, Adcock, Cipla, Pharma Dynamics, Sun Pharma, Austell, J&J, Actor Pharma
- Logos: grayscale by default, full color on hover
- Background: `bg-brand-offWhite`
- Use `useRef` + CSS `animation: scroll 30s linear infinite`

---

### 6.9 Contact Section
- Split layout: left = contact info + map CTA, right = contact form
- Background: `bg-brand-navy`
- Contact details:
  - 📍 Plot 943, Mshini Rd, Sidwashini Industrial Site, Eswatini
  - ☎️ +268 2422 0013 / 0014 / 0034
  - 📲 +268 7806 1334 / +268 7611 4900
- Form fields: Name, Email, Phone Number, Message
- Submit button: teal filled with `lucide: Send` icon
- Form validation with React state
- Lucide icons: `MapPin`, `Phone`, `Smartphone`, `Mail`, `Send`

---

### 6.10 Footer
- Four columns: Logo+tagline | Products | Company | Contact
- Background: `bg-brand-navy` with top border `border-brand-teal`
- Social icons via React Icons: `FaFacebook`, `FaInstagram`, `FaLinkedin`
- Links: Ministry of Health Eswatini, Ministerio da Saude (Mozambique), Eswatini Vaccination Registration
- Copyright: `© 2025 AVOMA GROUP — AVOMA Pharma Division`
- Bottom bar: `Privacy Policy` link, small text

---

## 7. Animations — Framer Motion Guide

### Standard Variants (reuse across sections)
```js
// src/utils/animations.js

export const fadeInUp = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

export const fadeInLeft = {
  hidden:  { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

export const staggerContainer = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1 } }
};

export const scaleIn = {
  hidden:  { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'backOut' } }
};
```

### Usage Pattern
```jsx
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/animations';

// Wrap sections with:
<motion.div
  variants={staggerContainer}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
>
  <motion.h2 variants={fadeInUp}>Heading</motion.h2>
  <motion.p variants={fadeInUp}>Body text</motion.p>
</motion.div>
```

### Key Animations Per Section
| Section | Animation |
|---------|-----------|
| Hero | `fadeInUp` stagger on headline → sub → CTAs |
| Stats Bar | Count-up number animation on inView |
| Consumable chips | `staggerContainer` + `scaleIn` |
| Medicine cards | `fadeInUp` stagger + `whileHover={{ y: -4 }}` |
| Cert badges | `scaleIn` stagger |
| Contact form | `fadeInLeft` (info) + `fadeInRight` (form) |
| Page transitions | `AnimatePresence` + slide fade |

---

## 8. Reusable UI Components

### Button.jsx
```jsx
// Variants: 'primary' (teal filled), 'outline' (white border), 'ghost'
const Button = ({ children, variant = 'primary', icon, ...props }) => {
  const base = 'inline-flex items-center gap-2 px-6 py-3 rounded-lg font-body font-semibold text-sm tracking-wide transition-all duration-200';
  const variants = {
    primary: 'bg-brand-teal hover:bg-brand-tealLight text-white shadow-lg hover:shadow-teal-500/30',
    outline: 'border-2 border-white text-white hover:bg-white hover:text-brand-navy',
    ghost:   'text-brand-teal hover:bg-brand-teal/10',
  };
  return (
    <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
      className={`${base} ${variants[variant]}`} {...props}>
      {icon && icon}{children}
    </motion.button>
  );
};
```

### SectionHeader.jsx
```jsx
// label: small teal uppercase tag above heading
const SectionHeader = ({ label, heading, subtext, light = false }) => (
  <div className="text-center max-w-2xl mx-auto mb-12">
    {label && <span className="text-brand-teal font-body text-sm font-semibold tracking-widest uppercase">{label}</span>}
    <h2 className={`font-display text-3xl md:text-4xl font-bold mt-2 mb-4 ${light ? 'text-white' : 'text-brand-navy'}`}>
      {heading}
    </h2>
    {subtext && <p className={`font-body text-base leading-relaxed ${light ? 'text-gray-300' : 'text-brand-gray'}`}>{subtext}</p>}
  </div>
);
```

---

## 9. Tailwind Config (Full)

```js
// tailwind.config.js
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          navy:       '#0a1628',
          blue:       '#1a3a6b',
          teal:       '#0d6e8a',
          tealLight:  '#1a9ab8',
          white:      '#ffffff',
          offWhite:   '#f4f8fb',
          gray:       '#6b7280',
          grayLight:  '#e5edf5',
          gold:       '#c9a84c',
        }
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body:    ['"DM Sans"', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #0a1628 0%, #1a3a6b 50%, #0d6e8a 100%)',
        'section-gradient': 'linear-gradient(180deg, #1a3a6b 0%, #0a1628 100%)',
      },
      animation: {
        'scroll': 'scroll 30s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    }
  },
  plugins: [],
}
```

---

## 10. index.html (Head Tags)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>AVOMA Pharma — Pharmaceutical Wholesale & Distribution</title>
  <meta name="description" content="AVOMA Pharma: Wholesale and distribution of pharmaceutical products, surgical equipment and medical consumables across Eswatini and Mozambique." />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap" rel="stylesheet" />
</head>
<body>
  <div id="root"></div>
  <script type="module" src="/src/main.jsx"></script>
</body>
</html>
```

---

## 11. Contact Information (Source Data)

```js
// src/data/contact.js
export const contactInfo = {
  address: 'Plot 943, Mshini Rd, Sidwashini Industrial Site, Eswatini',
  phones: ['+268 2422 0013', '+268 2422 0014', '+268 2422 0034'],
  mobile: ['+268 7806 1334', '+268 7611 4900'],
  email: 'avoma@avomagroup.com',
  social: {
    facebook:  'https://www.facebook.com/AVOMAGroup/',
    instagram: 'https://instagram.com/AVOMAGroup/',
    linkedin:  'https://www.linkedin.com/company/avoma-group/',
  },
  countryContacts: {
    eswatini:   '+268 2422 1804',
    mozambique: '+258 2141 8083',
  },
  importantLinks: [
    { label: 'Ministry of Health Eswatini', url: 'https://www.gov.sz/index.php/ministries-departments/ministry-of-health' },
    { label: 'Ministerio da Saude (Mozambique)', url: 'https://www.misau.gov.mz/' },
    { label: 'Eswatini Vaccination Registration', url: 'https://eswatinihealth.org/' },
  ]
};
```

---

## 12. Design Principles & Don'ts

### ✅ DO
- Use `font-display` for all headings, `font-body` for body text
- Maintain alternating light/dark section rhythm for visual breathing room
- Keep snowfall subtle — it's ambience, not a feature
- Use teal as the primary accent consistently; gold only for certifications/trust signals
- Ensure all sections have `overflow-hidden` to prevent scroll jank from animations
- Use `viewport={{ once: true }}` on all Framer Motion scroll animations

### ❌ DON'T
- Don't use purple, pink, or orange — they're off-brand
- Don't use Inter, Roboto, or Arial — use Playfair Display + DM Sans only
- Don't make the snowfall count too high (>150) — it will hurt performance
- Don't animate every single element — reserve motion for meaningful reveals
- Don't use default Tailwind blues (blue-500 etc.) — always use `brand.*` colors
- Don't skip mobile responsiveness — the site serves healthcare workers in the field

---

## 13. Accessibility & Performance Notes

- All interactive elements must have `aria-label` attributes
- Color contrast ratio minimum: 4.5:1 for body text
- Framer Motion: use `prefers-reduced-motion` media query
  ```js
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  ```
- Images: use `loading="lazy"` and provide `alt` text for all partner logos
- Snowfall: disable on `prefers-reduced-motion`
- Form: client-side validation before submit, show inline error states

---

## 14. Navigation Structure

```
/ (PharmaPage)
  ├── #hero
  ├── #about
  ├── #consumables
  ├── #medicines
  ├── #certified
  ├── #partners
  └── #contact
```

All nav links are anchor scroll links with `scroll-behavior: smooth` (set on `html` in CSS).

---

## 15. Summary Checklist for Gemini

- [ ] Scaffold Vite + React project
- [ ] Install all packages listed in Section 2
- [ ] Configure Tailwind with brand colors and fonts (Section 9)
- [ ] Add Google Fonts to `index.html` (Section 10)
- [ ] Create file structure (Section 5)
- [ ] Build reusable components: `Button`, `SectionHeader`, `Card`, `Badge`
- [ ] Build `Navbar` with scroll glass effect + mobile drawer
- [ ] Build `Hero` with snowfall, gradient bg, staggered text animation
- [ ] Build `StatsBar` with counter animations
- [ ] Build `AboutPharma` two-column section
- [ ] Build `ConsumablesSection` with chip grid + brand logos
- [ ] Build `MedicinesSection` with brand cards
- [ ] Build `CertifiedSection` with gold badge cards
- [ ] Build `PartnersCarousel` auto-scroll strip
- [ ] Build `ContactSection` with form + info split
- [ ] Build `Footer` with four-column layout
- [ ] Wire all sections into `PharmaPage.jsx`
- [ ] Add `AnimatePresence` page transitions in `App.jsx`
- [ ] Test mobile responsiveness across all breakpoints
- [ ] Verify `prefers-reduced-motion` handling

---

*Brief prepared from: [avomagroup.com/pharma](https://avomagroup.com/pharma/) | April 2025*