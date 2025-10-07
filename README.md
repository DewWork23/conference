# Southeastern Social Work Conference - Demo Web App

A prototype web application for the Southeastern Social Work Conference "Voices from the Field" at UNC Pembroke (March 26-27, 2026).

## Features

### ✅ Implemented Features

1. **Conference Schedule**
   - 30 sessions across 2 days
   - Filter by date, track, and topic
   - Favorite sessions to build personal agenda
   - 6 concurrent tracks with social work topics

2. **Presenter Portal**
   - View assigned presentation time slots
   - Abstract submission form
   - File upload interface (UI only)
   - Session management dashboard

3. **Session Evaluations**
   - Rating scales and open-ended questions
   - Unique QR codes for each session
   - Evaluation form with academic focus
   - Submission confirmation

4. **Announcements Feed**
   - Timeline of conference updates
   - Priority levels (high, normal, low)
   - Notification preferences UI
   - 10 realistic mock announcements

5. **Admin Dashboard**
   - Conference statistics overview
   - Session management table
   - Abstract review and approval
   - Send announcements interface

6. **CEU Tracking**
   - Mark attended sessions
   - Track continuing education credits
   - Generate certificate (mock)
   - Progress visualization

7. **Networking Directory**
   - Browse 40 attendees and presenters
   - Search and filter participants
   - Interest groups
   - Connect with colleagues

## Technology Stack

- **Framework:** Next.js 15 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI:** React components with UNC Pembroke branding (Navy #041E42 and Gold #FDB913)
- **State:** React Context API for favorites
- **Storage:** LocalStorage for browser-based persistence

## Mock Data

All data is realistic but fabricated for demonstration purposes:
- 30 conference sessions on social work topics
- 20 presenters with academic affiliations
- 20 attendees
- 10 announcements
- Topics: trauma care, policy, rural healthcare, ethics, DEI, justice, etc.

## Getting Started

### Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
# Build static export
npm run build

# The static files will be in the 'out' directory
```

## Deploying to GitHub Pages

### Option 1: Automated Deployment with GitHub Actions

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/conference.git
   git push -u origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository settings on GitHub
   - Navigate to Pages (left sidebar)
   - Under "Build and deployment", select "GitHub Actions" as the source
   - The workflow will automatically deploy on every push to main

3. **Access your site:**
   - Your site will be available at: `https://YOUR_USERNAME.github.io/conference/`

### Option 2: Manual Deployment

```bash
# Build the static export
npm run export

# The 'out' directory contains your static site
# Upload the contents to any static hosting provider
```

### Important Notes for GitHub Pages

- The app is configured with `basePath: '/conference'` for GitHub Pages
- If you use a different repository name, update `basePath` in `next.config.ts`
- For custom domains, remove the `basePath` configuration
- The `.nojekyll` file is automatically created to bypass Jekyll processing

## Project Structure

```
conference/
├── app/
│   ├── admin/          # Admin dashboard
│   ├── announcements/  # Announcements feed
│   ├── ceu/           # CEU tracking
│   ├── evaluations/   # Session evaluations
│   ├── networking/    # Attendee directory
│   ├── presenter/     # Presenter portal
│   ├── schedule/      # Conference schedule
│   ├── layout.tsx     # Root layout with navigation
│   └── page.tsx       # Home page
├── components/
│   └── Navigation.tsx # Main navigation component
├── contexts/
│   └── FavoritesContext.tsx # State management for favorites
├── lib/
│   └── mock-data.ts   # All mock conference data
└── .github/
    └── workflows/
        └── deploy.yml # GitHub Pages deployment
```

## Key Design Decisions

### No Backend/Database
- All data is mock/static
- State stored in browser LocalStorage
- Perfect for stakeholder demos
- Easy to add real backend later

### Mobile-First Design
- Responsive on all screen sizes
- Touch-friendly interfaces
- Works great on phones (most attendees will use mobile)

### UNC Pembroke Branding
- Navy blue (#041E42) and gold (#FDB913) color scheme
- Professional academic aesthetic
- Accessible color contrast

### Realistic Data
- 30 sessions on authentic social work topics
- Real-world conference flow (2 days, 4 time slots per day)
- Believable presenter bios and affiliations
- Practical CEU credit amounts

## What's NOT Implemented (By Design)

- ❌ Authentication/Login
- ❌ Database persistence
- ❌ Real file uploads
- ❌ Email sending
- ❌ Payment processing
- ❌ Actual notifications
- ❌ Backend API

These can be added later when moving from prototype to production.

## Future Enhancements

If this prototype is approved, consider adding:
- User authentication (presenters, attendees, admins)
- Database (PostgreSQL, MongoDB, etc.)
- Real-time notifications
- Mobile app (React Native)
- Payment/registration system
- Actual file storage (AWS S3, etc.)
- Analytics dashboard
- Email integration
- Calendar export (iCal)

## License

This is a demonstration project for UNC Pembroke. All rights reserved.

## Contact

For questions about this demo, contact your development team.

