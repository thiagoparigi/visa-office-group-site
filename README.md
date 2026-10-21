# VISA OFFICE GROUP Website

Premium, high-converting website for VISA OFFICE GROUP - an immigration and visa services firm serving the Brazilian community in the United States.

## Features

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **TailwindCSS** for styling (Navy + Gold premium design)
- **Supabase** for data persistence (contact forms, reviews)
- **Bilingual** (Portuguese/English toggle)
- **WhatsApp Integration** with floating CTA button
- **Calendly Integration** for consultation booking
- **SEO Optimized** with metadata, OpenGraph, and Schema.org markup
- **Mobile-first** responsive design
- **Production-ready** for Vercel deployment

## Project Structure

```
visa-office-group/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.tsx           # Home page
│   │   ├── servicos/          # Services page
│   │   ├── vistos-*/          # Visa category pages
│   │   ├── sobre/             # About page
│   │   ├── avaliacoes/        # Reviews page
│   │   ├── faq/               # FAQ page
│   │   ├── contato/           # Contact page
│   │   ├── privacidade/       # Privacy policy
│   │   └── api/               # API routes
│   ├── components/            # React components
│   ├── context/               # Language context
│   ├── lib/                   # Utilities and helpers
│   └── app/globals.css        # Global styles
├── public/                    # Static assets
│   ├── logo-dark.svg
│   └── logo-light.svg
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 18+ installed
- Supabase account and project
- Calendly account (optional)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd visa-office-group
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:

Create a `.env` file in the root directory:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your-supabase-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key

# WhatsApp
NEXT_PUBLIC_WHATSAPP_NUMBER=16892981265

# Calendly
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/your-link

# Email (for notifications)
CONTACT_EMAIL_TO=contato@visaofficegroup.com
```

4. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Supabase Setup

The database schema is already configured with the following tables:

- `contact_submissions` - Stores contact form submissions
- `reviews` - Stores client reviews

Both tables have Row Level Security (RLS) enabled:
- Public users can INSERT
- Authenticated users can SELECT and UPDATE (for admin review management)

To view the migration, check your Supabase dashboard migrations tab.

## Deployment

### Deploy to Vercel

1. Push your code to GitHub/GitLab/Bitbucket

2. Import the project in Vercel:
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your repository
   - Configure environment variables (copy from `.env`)
   - Click "Deploy"

3. Configure custom domain:
   - In Vercel project settings, go to "Domains"
   - Add `visaofficegroup.com`
   - Update DNS records as instructed by Vercel

### Environment Variables in Vercel

Add these in Project Settings → Environment Variables:

```
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
NEXT_PUBLIC_WHATSAPP_NUMBER
NEXT_PUBLIC_CALENDLY_URL
CONTACT_EMAIL_TO
```

## Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Create production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Key Pages

- **Home (/)** - Hero, services overview, testimonials, process steps
- **Serviços (/servicos)** - Full services list
- **Vistos Humanitários (/vistos-humanitarios)** - T, U, VAWA, Asylum support
- **Vistos de Trabalho (/vistos-trabalho)** - EB-3, O-1, L-1 support
- **Vistos Familiares (/vistos-familiares)** - Family-based immigration
- **Sobre (/sobre)** - Team and mission
- **Avaliações (/avaliacoes)** - Client reviews
- **FAQ (/faq)** - Frequently asked questions
- **Contato (/contato)** - Contact form and information
- **Privacidade (/privacidade)** - Privacy policy

## Brand Guidelines

### Colors
- **Navy**: #0a1628 (primary dark)
- **Gold**: #d4af37 (accent)
- **White**: #ffffff (background)

### Typography
- Font: Inter (Google Fonts)
- Headings: Bold, large hierarchy
- Body: Regular, 16px base

### Logo
- Dark background: `/logo-dark.svg` (gold text)
- Light background: `/logo-light.svg` (navy text)

## Legal Compliance

The website includes appropriate legal disclaimers:
- We provide document preparation assistance, not legal advice
- We can recommend licensed attorney partners when needed
- Clear positioning as a support service, not a law firm

## Contact Information

- **WhatsApp**: +1 (689) 298-1265
- **Email**: contato@visaofficegroup.com
- **Address**: 3050 Station Square, Kissimmee, FL, USA
- **Service Area**: All 50 US states + remote support for clients in Brazil

## License

Proprietary - VISA OFFICE GROUP © 2026

## Support

For technical support or questions, contact the development team.
