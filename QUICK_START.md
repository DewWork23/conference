# Quick Start Guide

## Installation (5 minutes)

```bash
cd conference
npm install
npm run dev
```

Open http://localhost:3000

## Deploy to GitHub Pages (10 minutes)

```bash
# 1. Create repo on GitHub named 'conference'

# 2. Push code
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/conference.git
git push -u origin main

# 3. Enable GitHub Pages
# Go to Settings → Pages → Source: GitHub Actions

# 4. Access your site
# https://YOUR_USERNAME.github.io/conference/
```

## What's Included

✅ **8 Pages:**
- Home - Conference overview
- Schedule - Browse and filter 30 sessions
- Presenter - Submit abstracts, view sessions
- Evaluations - Rate sessions with QR codes
- Announcements - Conference updates
- CEU - Track continuing ed credits
- Networking - Connect with attendees
- Admin - Dashboard and management

✅ **Mock Data:**
- 30 social work sessions
- 20 presenters
- 20 attendees
- 10 announcements
- All realistic and professional

✅ **Features:**
- Filter and search
- Favorite sessions
- QR code generation
- Mobile responsive
- UNC Pembroke branding
- GitHub Pages ready

## Technology

- Next.js 15 + TypeScript
- Tailwind CSS
- React Context API
- Static export (no server needed)

## Important Files

- `app/` - All pages and routes
- `lib/mock-data.ts` - Conference data
- `components/Navigation.tsx` - Main nav
- `next.config.ts` - GitHub Pages config
- `.github/workflows/deploy.yml` - Auto deployment

## Customization

### Change Repository Name
Edit `next.config.ts`:
```typescript
basePath: '/YOUR_REPO_NAME'
```

### Update Mock Data
Edit `lib/mock-data.ts`

### Change Branding Colors
Search and replace:
- Navy: `#041E42`
- Gold: `#FDB913`

## Commands

```bash
npm run dev      # Development server
npm run build    # Production build
npm run start    # Start production server
npm run export   # Build + create .nojekyll
```

## Troubleshooting

**Build fails?**
- Run `npm install` again
- Check Node version (needs v18+)

**Pages show 404?**
- Verify `basePath` in next.config.ts
- Clear browser cache

**Changes not showing?**
- Hard refresh (Ctrl+Shift+R)
- Check GitHub Actions completed

## Demo Flow

1. Home → Overview
2. Schedule → Filter "Trauma-Informed Care" → Favorite a session
3. Presenter → Submit abstract
4. Evaluations → Complete evaluation
5. CEU → Mark attended sessions
6. Networking → Search attendees
7. Admin → View dashboard

## Documentation

- README.md - Full documentation
- DEPLOYMENT.md - Deployment guide
- PROJECT_SUMMARY.md - Complete feature list

## Support

All features work! No backend needed. Deploy and demo to stakeholders.

Ready to go! 🚀
