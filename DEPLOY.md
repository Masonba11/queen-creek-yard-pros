# Deployment Instructions

## GitHub Setup

1. Create a new repository on GitHub: https://github.com/new

   - Name: `queen-creek-yard-pros`
   - Don't initialize with README

2. Push your code:

```bash
git remote add origin https://github.com/YOUR_USERNAME/queen-creek-yard-pros.git
git push -u origin main
```

## Vercel Deployment

### Option 1: Via Vercel Dashboard (Recommended)

1. Go to https://vercel.com/new
2. Sign in with GitHub
3. Click "Import Project"
4. Select your `queen-creek-yard-pros` repository
5. Vercel will auto-detect Next.js settings
6. Click "Deploy"

### Option 2: Via Vercel CLI

```bash
npm i -g vercel
vercel login
vercel
```

### Environment Variables

No environment variables needed for this project.

### Custom Domain

After deployment, you can add your custom domain `queencreekyardpros.com` in Vercel dashboard:

- Go to Project Settings → Domains
- Add `queencreekyardpros.com`
- Follow DNS configuration instructions

## Post-Deployment Checklist

- [ ] Verify sitemap.xml is accessible: `https://queencreekyardpros.com/sitemap.xml`
- [ ] Verify robots.txt is accessible: `https://queencreekyardpros.com/robots.txt`
- [ ] Test mobile menu on all pages
- [ ] Verify Schema.org markup with Google Rich Results Test
- [ ] Test all service pages load correctly
- [ ] Test all service area pages load correctly
