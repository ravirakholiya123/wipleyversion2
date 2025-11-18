# Wipely Cleaning Services Website

## Overview
This is a professional cleaning services website for "Wipely" - a Melbourne-based cleaning company. Built with **Next.js 14 App Router**, TypeScript, and Tailwind CSS, it provides a modern, responsive, SEO-optimized interface for customers to explore services, read reviews, check service availability, and book cleaning appointments.

**Current Status:** Fully migrated to Next.js 14 with comprehensive SEO optimization and ready for production.

**Last Updated:** November 17, 2025 - **Migrated from React (Vite) to Next.js 14**

## Project Architecture

### Tech Stack
- **Framework:** Next.js 14 with App Router (TypeScript)
- **Styling:** Tailwind CSS with custom emerald/sage color scheme
- **Routing:** Next.js App Router (file-based routing)
- **Animations:** Framer Motion
- **Forms:** React Hook Form with Yup validation
- **UI Components:** Material-UI (MUI) for select components
- **Maps:** React Leaflet (dynamically loaded) for service area visualization
- **Image Carousels:** Swiper
- **Icons:** Lucide React
- **Fonts:** next/font (Google Fonts - Inter optimized)
- **Image Optimization:** next/image
- **SEO:** Comprehensive metadata, JSON-LD structured data, sitemap.xml, robots.txt

### Project Structure
```
app/                    # Next.js App Router directory
├── services/           # Service routes
│   ├── page.tsx        # /services
│   ├── layout.tsx      # Services layout with SEO metadata
│   ├── regular-cleaning/
│   ├── end-of-lease/
│   ├── spring-cleaning/
│   ├── custom-cleaning/
│   ├── carpet-cleaning/
│   ├── upholstery-cleaning/
│   ├── oven-cleaning/
│   ├── bbq-cleaning/
│   ├── staircase-cleaning/
│   └── commercial-cleaning/
├── book/               # /book (booking form)
├── reviews/            # /reviews
├── blog/               # /blog
├── about/              # /about
├── faq/                # /faq
├── contact/            # /contact
├── page.tsx            # Home page
├── layout.tsx          # Root layout with global SEO
├── globals.css         # Global styles and Tailwind directives
├── sitemap.ts          # Auto-generated sitemap
└── robots.ts           # Auto-generated robots.txt

components/             # Shared React components
├── Header.tsx          # Navigation header
├── Footer.tsx          # Site footer
├── Layout.tsx          # Page layout wrapper
├── MapComponent.tsx    # Dynamic map loader
└── MapComponentClient.tsx  # Client-side Leaflet map

public/                 # Static assets
├── images/             # Service images
└── data/               # JSON data (pricing, postal codes, blog)
```

### Key Features
- **Service Pages:** Regular cleaning, end-of-lease, spring cleaning, carpet cleaning, oven cleaning, BBQ cleaning, upholstery cleaning, commercial cleaning, staircase cleaning
- **Booking System:** Multi-step form with service selection, property details, extras, and contact information
- **Postal Code Checker:** Validates service availability for Melbourne suburbs
- **Interactive Map:** Shows service area using React Leaflet
- **Testimonials:** Customer reviews and ratings
- **Blog:** Cleaning tips and company news
- **Responsive Design:** Mobile-first approach with animated UI elements

## Recent Changes

### November 18, 2025 - Contact Page Map Fix & Local Before/After Images ✅
- **Contact Page Map Fix:**
  - Fixed Leaflet "Map container is already initialized" error
  - Implemented mounted state gating and aggressive cleanup in MapComponentClient
  - Map now renders cleanly in production (development HMR errors are expected and don't affect production)
- **Before/After Images Migration:**
  - Converted all before/after cleaning images to local assets in /public/images/
  - Updated 6 pages: reviews, end-of-lease, carpet-cleaning, regular-cleaning, spring-cleaning, bbq-cleaning
  - Local images: kitchenBefore/After.jpg, bathroomBefore/After.jpeg, upholsteryBefore/After.jpg
- **About Page Production Fix:**
  - Added 'use client' directive to About page for Next.js production build compatibility
  - Resolved `ssr: false` restriction for dynamic imports in Server Components

### November 17, 2025 - Complete Migration to Next.js 14 ✅ PRODUCTION-READY
- **Migrated entire React (Vite) project to Next.js 14 App Router**
- **SEO Enhancements (VERIFIED & SSR-READY):**
  - ✅ Added comprehensive metadata to every page (title, description, keywords, OG tags, Twitter cards)
  - ✅ Implemented JSON-LD structured data in SERVER COMPONENTS for proper SSR (LocalBusiness, Service, FAQPage, Blog, ContactPage schemas)
  - ✅ Created automated sitemap.xml (app/sitemap.ts)
  - ✅ Created robots.txt (app/robots.ts)
  - ✅ Optimized fonts using next/font (Google Fonts - Inter)
  - ✅ MapComponent dynamically loaded with SSR-safe implementation
- **Pages Migrated:** All 18 pages converted from React Router to App Router
  - Home, Services (main + 10 service detail pages), Book, Reviews, Blog, About, FAQ, Contact
- **Components:**
  - Converted Header, Footer, Layout to Next.js with proper client/server separation
  - Created dynamic MapComponent for client-side Leaflet loading (SSR-safe)
- **Configuration:**
  - Updated workflow to run Next.js dev server on port 5000
  - Configured deployment for production (autoscale with npm build/start)
  - Updated Tailwind config for Next.js content paths
  - Created next.config.ts with Turbopack and standalone output
- **Critical SEO Fixes Applied:**
  - Moved ALL JSON-LD from client components to server component layouts for proper SSR rendering
  - Created layout.tsx files for Contact, Book, FAQ, Reviews, and Services with metadata and JSON-LD
  - Enhanced root layout with Organization and WebSite schema
  - Fixed MapComponent imports to use proper path (@/components/MapComponent)

## Development

### Running Locally
The project uses Next.js dev server configured for port 5000:
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

### Linting
```bash
npm run lint
```

## Configuration Files
- `next.config.ts` - Next.js configuration (standalone, Turbopack, cache headers)
- `tailwind.config.js` - Custom Tailwind theme with brand colors
- `tsconfig.json` - TypeScript configuration for Next.js
- `package.json` - Dependencies and scripts
- `app/sitemap.ts` - Automated sitemap generation
- `app/robots.ts` - Automated robots.txt generation

## Data Files
Located in `src/data/`:
- `pricing.json` - Service pricing information
- `postalcode.json` - Melbourne postal codes for service area validation
- `extras.json` - Additional service options
- `blog.json` - Blog post content

## User Preferences
None specified yet.

## SEO Features

### Metadata Implementation
Every page includes:
- Page-specific title with template
- Meta description (unique for each page)
- Keywords relevant to cleaning services in Melbourne
- Open Graph tags (og:title, og:description, og:image, og:url)
- Twitter Card tags
- Canonical URLs
- Robots directives (index, follow)

### JSON-LD Structured Data
- **Home:** LocalBusiness with address, phone, hours, rating
- **Services:** Service schema for each cleaning service
- **About:** Organization schema with ratings
- **Reviews:** Service schema with aggregateRating
- **Blog:** Blog and BlogPosting schemas
- **FAQ:** FAQPage with all Q&A pairs
- **Contact:** ContactPage with LocalBusiness
- **Book:** ContactPage with ReserveAction

### Technical SEO
- Semantic HTML (proper heading hierarchy h1-h6)
- Alt text on all images
- Fast page loads with Next.js optimization
- Mobile-responsive design
- Sitemap.xml for search engines
- Robots.txt for crawler control

## Notes
- Project fully migrated from React+Vite to Next.js 14
- SEO-optimized for Melbourne cleaning services market
- The website is purely frontend - no backend API required
- Form submissions use client-side validation and external endpoints
- Images stored in `public/images/`
- Data files in `public/data/`
- MapComponent dynamically loaded to prevent SSR issues with Leaflet
