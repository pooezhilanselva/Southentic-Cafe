# Southentic Cafe Website

A premium, Apple-inspired single-page marketing website for Southentic Cafe, built with Next.js 15, TypeScript, Tailwind CSS, Framer Motion, and shadcn/ui.

## Features

- **Hero Section** - Eye-catching landing with cafe name, tagline, and CTAs
- **About Section** - Brief philosophy and brand story
- **Popular Menu** - Showcase of bestselling items with animations
- **Full Menu** - Tabbed interface for complete menu by category
- **Order Online** - Quick links to Swiggy and Zomato
- **Location & Contact** - Address, phone, and embedded Google Maps
- **Footer** - Minimal branding footer

## Design Highlights

- Apple-inspired minimal design
- Smooth Framer Motion animations
- Custom color palette (warm beige, coffee brown)
- Fully responsive layout
- Smooth scroll navigation

## Getting Started

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### Build for Production

```bash
npm run build
npm start
```

### Lint Code

```bash
npm run lint
```

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Animations:** Framer Motion
- **Icons:** Lucide React

## Project Structure

```
cafe/
├── app/
│   ├── components/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── PopularMenu.tsx
│   │   ├── FullMenu.tsx
│   │   ├── OrderOnline.tsx
│   │   ├── Location.tsx
│   │   └── Footer.tsx
│   ├── data/
│   │   └── menu.ts
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/ui/
├── lib/
└── public/
```

## Customization

### Update Menu Items

Edit `app/data/menu.ts` to modify menu items and pricing.

### Change Colors

Update colors in `tailwind.config.ts`:
- `cafe-bg`: Background color
- `cafe-text`: Text color
- `cafe-accent`: Primary accent color
- `cafe-accent-dark`: Darker accent for hovers

### Update Contact Info

Edit `app/components/Location.tsx` to update:
- Address
- Phone number
- Google Maps location

### Update Delivery Links

Edit `app/components/OrderOnline.tsx` to update:
- Swiggy URL
- Zomato URL

## Notes

- Built with production-ready optimizations
- SEO-friendly metadata configured
- All images use placeholder illustrations (can be replaced with actual photos)
- Smooth scroll behavior enabled
- Fully accessible with semantic HTML

## License

© Southentic Cafe. All rights reserved.
