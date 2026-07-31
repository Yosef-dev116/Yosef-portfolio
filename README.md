# Yosef Mekonnen Portfolio

Personal site and blog for Yosef Mekonnen — CS Co-op student at UPEI. Built with Next.js App Router, with an MDX-based blog and a Resend-powered contact form.

Live: https://yosefmekonnen.dev

## Stack

Next.js 16, React, TypeScript, Tailwind CSS, Motion, Resend, deployed on Vercel.

## Getting started

```bash
git clone https://github.com/Yosef-dev116/Yosef-portfolio.git
cd Yosef-portfolio
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Structure

```
app/            routes (App Router) — home, /blog, /blog/[slug], contact API
components/     hero, page sections, blog UI, site shell
content/posts/  blog posts as MDX
lib/posts.ts    reads and parses posts from content/posts/
data/site.ts    project list and skills data
public/         static assets (resume, images, certificates)
```

## Contact form

Uses Resend. To run the form locally, add to `.env.local`:

```env
RESEND_API_KEY=your_resend_api_key
```

## Deployment

Deployed on Vercel with automatic deployments from `main`.

## License

MIT
