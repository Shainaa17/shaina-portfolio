# Shaina Gera — Portfolio

A production-ready portfolio for an AI Engineer and Full Stack Developer. Built with Next.js 15, Tailwind CSS, and Framer Motion.

## ✨ Features

- **Animated Neural Network Hero** — Canvas-based network visualization, no libraries needed
- **Type-animated role display** — Cycles through AI Engineer, Full Stack Developer, etc.
- **Interactive Skills Matrix** — Category tabs with animated proficiency bars
- **Expandable Experience Cards** — Accordion with architecture diagrams
- **Project Showcase** — Cards with toggle-expand details, pipeline diagrams, and metrics
- **Currently Building** — Active WIP section with progress indicators
- **Achievements** — Premium stat cards
- **Contact Form** — Saves to MongoDB + sends confirmation email
- **Command Palette** — Press `/` to navigate anywhere
- **Scroll progress bar** — Top-of-screen reading indicator
- **Back to top** — Appears after scrolling 400px
- **SEO + Open Graph** — Full metadata, sitemap, robots.txt
- **Mobile-first** — Responsive down to 320px

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | Next.js 15, React 18, TypeScript |
| Styling | Tailwind CSS, Framer Motion |
| Fonts | Inter, Plus Jakarta Sans |
| Icons | Tabler Icons |
| Backend | Next.js API Routes + Express.js |
| Database | MongoDB + Mongoose |
| Email | Nodemailer (Gmail) |
| Deployment | Vercel (frontend) + Render (backend) |

## 🚀 Quick Start

### 1. Clone and install

```bash
git clone https://github.com/shainagera/portfolio
cd portfolio
npm install
```

### 2. Configure environment

```bash
cp .env.local.example .env.local
# Fill in your MongoDB URI and email credentials
```

### 3. Run development server

```bash
npm run dev
# Open http://localhost:3000
```

## 🌐 Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set environment variables in Vercel dashboard:
# MONGODB_URI, EMAIL_USER, EMAIL_PASS, EMAIL_TO
```

## 🖥 Deploy Backend to Render

1. Push `backend/` folder to a GitHub repo
2. Create new **Web Service** on [render.com](https://render.com)
3. Set build command: `npm install`
4. Set start command: `node server.js`
5. Add environment variables from `backend/.env.example`

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout, metadata, fonts
│   │   ├── page.tsx            # Main page, assembles sections
│   │   ├── globals.css         # Global styles, CSS variables
│   │   ├── sitemap.ts          # Auto-generated sitemap
│   │   ├── robots.ts           # Robots.txt
│   │   └── api/
│   │       └── contact/
│   │           └── route.ts    # Contact form API (Next.js)
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx      # Sticky nav with active section tracking
│   │   │   └── Footer.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx        # Network canvas + animated intro
│   │   │   ├── About.tsx       # Story + timeline
│   │   │   ├── Skills.tsx      # Interactive skill matrix
│   │   │   ├── Experience.tsx  # Accordion experience cards
│   │   │   ├── Projects.tsx    # Expandable project cards
│   │   │   ├── CurrentlyBuilding.tsx
│   │   │   ├── Achievements.tsx
│   │   │   ├── Resume.tsx      # PDF embed + download
│   │   │   └── Contact.tsx     # Form + social links
│   │   └── ui/
│   │       ├── NetworkCanvas.tsx  # Canvas neural network
│   │       ├── BackToTop.tsx
│   │       └── CommandPalette.tsx
│   └── lib/
│       └── utils.ts            # cn() helper
├── backend/
│   ├── server.js               # Express standalone server
│   └── package.json
├── public/
│   └── resume.pdf              # ← Add your resume here
├── tailwind.config.js
├── next.config.js
└── vercel.json
```

## 🔧 Customization Checklist

- [ ] Replace `shainagera` with your GitHub/LinkedIn handles in all components
- [ ] Add `public/resume.pdf` — your actual resume
- [ ] Add `public/og-image.png` — 1200×630px Open Graph image
- [ ] Update contact email in `Contact.tsx` socials
- [ ] Update `metadata` in `layout.tsx` with your actual URL
- [ ] Update `vercel.json` region if not India (`bom1`)
- [ ] Set MongoDB URI in `.env.local`
- [ ] Set Gmail App Password for email notifications

## 📧 Email Setup (Gmail)

1. Enable 2-Factor Authentication on your Google account
2. Go to **Google Account → Security → App Passwords**
3. Generate a password for "Mail"
4. Add to `.env.local`:
   ```
   EMAIL_USER=your@gmail.com
   EMAIL_PASS=xxxx xxxx xxxx xxxx
   ```

## 🎨 Color System

| Token | Value | Usage |
|-------|-------|-------|
| `bg` | `#030712` | Page background |
| `bg-card` | `#111827` | Card backgrounds |
| `primary` | `#6366F1` | CTA, active states |
| `secondary` | `#8B5CF6` | Accents, secondary UI |
| `accent` | `#22D3EE` | Highlights, stats |
| `muted` | `#6B7280` | Secondary text |

## 📄 License

MIT — free to use and modify for your own portfolio.
