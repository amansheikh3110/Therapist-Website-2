# Dr. Maya Reynolds, PsyD - Clinical Psychologist Website

A modern, responsive, and production-ready web application built for a clinical psychologist practice based in Santa Monica, California.

## 🚀 Tech Stack

This project was built with a modern frontend stack to ensure high performance, maintainability, and excellent developer experience:

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Library**: [React](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Fonts**: `next/font/google` (Cormorant Garamond, Plus Jakarta Sans, Alex Brush)

## 💻 Running Locally

To run the development server locally on your machine:

1. **Install Dependencies**
   Make sure you are in the project root directory, then run:
   ```bash
   npm install
   ```

2. **Start the Development Server**
   ```bash
   npm run dev
   ```

3. **View the Website**
   Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

## 🏗️ Architecture & Structure

The project uses the Next.js App Router paradigm. The structure is broken down into modular, reusable UI components to keep the main page clean.

```text
Therapist-Website/
├── public/
│   └── images/              # All local image assets (office shots, hero portrait, etc.)
├── src/
│   ├── app/
│   │   ├── globals.css      # Global Tailwind theme variables and custom CSS (underlines, hamburger)
│   │   ├── layout.tsx       # Root HTML shell, metadata, and Google Fonts injection
│   │   └── page.tsx         # Main landing page assembling all components
│   └── components/
│       ├── Header.tsx       # Navigation bar (Client Component with mobile menu state)
│       ├── Hero.tsx         # Hero section with portrait and main CTA
│       ├── About.tsx        # "Value Proposition" / Intro section
│       ├── WhoWeHelp.tsx    # 3-column clinical services grid
│       ├── QuoteBanner.tsx  # Full-width image banner with quote
│       ├── Expertise.tsx    # 2-column list of clinical focus areas
│       ├── Approach.tsx     # "How we work" therapeutic approach section
│       ├── Specialties.tsx  # 4-card specialties grid
│       ├── Office.tsx       # Office details and photos
│       ├── FAQ.tsx          # Collapsible accordion FAQs using semantic HTML
│       ├── CTA.tsx          # Final call-to-action booking section
│       └── Footer.tsx       # Multi-column footer with dynamic copyright year
```

## 🎨 Styling & Design System

The styling relies heavily on **Tailwind CSS**. A custom design system was implemented in `src/app/globals.css` using the new `@theme` directive (Tailwind v4 syntax).

### Custom Color Palette
- **Linen & Sand** (`#F9F6F0`, `#EFE9DF`, `#E3DACD`): Used for soft, grounding background sections.
- **Sage** (`#4F6359`, `#5F827E`, `#7D8C7C`): Used for accents, buttons, and decorative elements.
- **Charcoal** (`#1E2522`, `#39433E`): Used for high-contrast, readable typography.

### Custom Fonts
- **Cormorant Garamond**: Elegant serif used for main headings.
- **Plus Jakarta Sans**: Clean sans-serif used for body text and navigation.
- **Alex Brush**: Script font used for decorative word accents (e.g., "thrive", "expertise").

### Interactivity
- **Mobile Menu**: The hamburger menu uses custom CSS transitions in `globals.css` for the three lines transforming into an "X", toggled by React state in `Header.tsx`.
- **Editorial Underlines**: Custom CSS `.editorial-underline` provides a sophisticated hover animation for text links.

## 📝 Content Strategy (Source of Truth)

The content on this website is strictly aligned with the established profile of Dr. Maya Reynolds. 

During the migration to Next.js, several placeholder elements from the original design were corrected:
- **Location**: Explicitly states "Santa Monica, California" and "Telehealth across California". Fictional addresses were removed.
- **Contact Info**: Fictional phone numbers and emails were removed to prevent false claims. The primary CTA relies on booking links or contact forms.
- **Clinical Focus**: Strictly adheres to the verified specialties: Anxiety, Trauma, Burnout, and Perfectionism.
- **Credentials**: Relies on factual statements regarding her PsyD and clinical approaches (CBT, EMDR, Mindfulness, Body-based). Unverified claims (e.g., "EMDR Certified", exact insurance policies) were omitted to maintain professional integrity.

## 📦 Deployment

This project is configured for seamless deployment to Vercel. Because all images are stored locally in `public/images/` and the framework is standard Next.js, deploying is as simple as pushing to a public GitHub repository and connecting it to Vercel.

```bash
npm run build
npm run start
```
