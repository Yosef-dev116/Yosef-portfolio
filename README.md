# Yosef Mekonnen Portfolio

A premium personal website built with Next.js App Router, React, TypeScript, Tailwind CSS, Motion, and Lucide.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Personalize before launch

1. Replace `public/profile.jpg` and `public/resume.pdf`.
2. Update email, LinkedIn, and GitHub links in `components/sections.tsx`.
3. Replace project demo and repository URLs.
4. Change `metadataBase`, sitemap, and robots domain from `yosefmekonnen.dev` to the final domain.
5. Connect `/api/contact` to Resend, Postmark, Formspree, or a database.
6. Replace testimonial, GitHub, achievement, and volunteer placeholders with verified content.

## Deploy to Vercel

Push to GitHub, import the repository in Vercel, and deploy with the default Next.js settings. Add any email-service environment variables through the Vercel project dashboard.

## Performance and accessibility

- Server-rendered App Router pages
- Reduced-motion support
- Semantic landmarks and labels
- Keyboard-accessible floating navigation and command palette
- Generated metadata, sitemap, robots, icon, and Open Graph image
- Minimal third-party JavaScript
