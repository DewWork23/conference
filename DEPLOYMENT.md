# Quick Deployment Guide for GitHub Pages

## Step-by-Step Instructions

### 1. Create GitHub Repository

Go to [GitHub](https://github.com) and create a new repository named `conference` (or any name you prefer).

### 2. Initialize and Push

From the `conference` directory, run these commands:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Conference demo app"

# Set main branch
git branch -M main

# Add your GitHub repository as remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/conference.git

# Push to GitHub
git push -u origin main
```

### 3. Enable GitHub Pages with Actions

1. Go to your repository on GitHub
2. Click on **Settings** (top navigation)
3. Click on **Pages** (left sidebar)
4. Under "Build and deployment":
   - **Source**: Select "GitHub Actions"
5. The workflow will automatically run and deploy your site

### 4. Wait for Deployment

- Go to the **Actions** tab in your repository
- You should see a workflow running called "Deploy to GitHub Pages"
- Wait for it to complete (usually 2-3 minutes)

### 5. Access Your Site

Once deployment is complete, your site will be available at:

```
https://YOUR_USERNAME.github.io/conference/
```

## Alternative: Deploy to Different Repository Name

If you want to use a different repository name (e.g., `social-work-conf`):

1. Update `next.config.ts`:
   ```typescript
   basePath: process.env.NODE_ENV === 'production' ? '/social-work-conf' : '',
   ```

2. Rebuild and push to the new repository

## Custom Domain Setup

If you want to use a custom domain like `conference.uncp.edu`:

1. Remove or modify the `basePath` in `next.config.ts`:
   ```typescript
   basePath: '',  // Remove basePath for custom domain
   ```

2. In GitHub Pages settings, add your custom domain
3. Update your DNS records to point to GitHub Pages:
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`

4. Enable "Enforce HTTPS" in GitHub Pages settings

## Troubleshooting

### Build Fails
- Check the Actions tab for error messages
- Make sure all dependencies are in `package.json`
- Verify `next.config.ts` is properly configured

### 404 Errors
- Make sure the `basePath` matches your repository name
- Check that GitHub Pages source is set to "GitHub Actions"
- Wait a few minutes after deployment completes

### Pages Don't Load Correctly
- Clear your browser cache
- Check browser console for errors
- Verify all routes are properly configured

## Local Testing

To test the production build locally:

```bash
# Build the static export
npm run build

# Serve the 'out' directory with any static server
# For example, using Python:
cd out
python3 -m http.server 8000

# Or using npx serve:
npx serve out
```

Then open `http://localhost:8000` in your browser.

## Updating the Site

After making changes:

```bash
# Add and commit changes
git add .
git commit -m "Update conference app"

# Push to GitHub
git push

# GitHub Actions will automatically rebuild and deploy
```

## Notes

- The app uses static export, so no server-side features
- All data resets on page refresh (no database)
- Perfect for demos and prototypes
- Can be deployed to other static hosts (Netlify, Vercel, etc.)
