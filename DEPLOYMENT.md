# Vercel Deployment Guide

## Quick Deployment (5 Minutes)

### Step 1: Push to GitHub

Make sure your code is on GitHub:

```bash
git add .
git commit -m "Initial portfolio setup"
git push origin dev
```

### Step 2: Connect to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign up/Login with your GitHub account
3. Click **"Add New..."** → **"Project"**

### Step 3: Import Repository

1. Find `Film_Director_Master_Showcase` in the list
2. Click **"Import"**

### Step 4: Configure Project

Vercel auto-detects Next.js:

- **Framework Preset**: Next.js ✅ (auto-detected)
- **Root Directory**: `./` (default)
- **Build Command**: `next build` (auto)
- **Output Directory**: `.next` (auto)

Click **"Deploy"**

### Step 5: Wait for Deployment

- Takes ~30 seconds
- You'll get a live URL: `your-project.vercel.app`

### Step 6: Add Custom Domain (Optional)

1. Go to project Settings → Domains
2. Add your domain: `aldriankilet.com`
3. Follow DNS configuration instructions

---

## Environment Variables (If Needed)

If you need to hide contact information from the repo:

1. Go to Project Settings → Environment Variables
2. Add variables:
   - `NEXT_PUBLIC_WHATSAPP`: +254XXXXXXXXX
   - `NEXT_PUBLIC_EMAIL`: email@example.com
3. Update `data/profile.json` to use: `process.env.NEXT_PUBLIC_WHATSAPP`
4. Redeploy

---

## Auto-Deployment Setup

**Already configured!** Every push to GitHub triggers:
1. Automatic build
2. Automatic deployment
3. Live in 30 seconds

To disable: Project Settings → Git → Disable auto-deployment

---

## Branch Deployments

- **`main` branch** → Production (yoursite.com)
- **`dev` branch** → Preview (yoursite-dev.vercel.app)
- **Pull requests** → Unique preview URLs

---

## Monitoring

View in Vercel dashboard:
- Build logs
- Deployment history
- Performance analytics
- Error tracking

---

## Rollback

If something breaks:
1. Go to Deployments
2. Find previous working version
3. Click **"..."** → **"Promote to Production"**

---

## Custom Domain Setup

### 1. Buy Domain
- Namecheap, GoDaddy, Google Domains

### 2. Add to Vercel
- Project Settings → Domains
- Add domain: `aldriankilet.com`

### 3. Configure DNS
Add these records at your domain provider:

**For root domain:**
```
Type: A
Name: @
Value: 76.76.21.21
```

**For www:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### 4. Wait for SSL
- Auto SSL certificate (free)
- Takes 5-10 minutes

---

## Performance Optimization

Already configured in `next.config.js`:
- Static export for faster loading
- Image optimization
- Automatic code splitting

---

## Cost

**$0/month** - Vercel free tier includes:
- Unlimited deployments
- 100GB bandwidth
- Free SSL certificate
- Automatic CDN
- Preview deployments

---

## Troubleshooting

### Build Failed
- Check build logs in Vercel
- Test locally: `npm run build`
- Common issue: Missing dependencies

### Images Not Loading
- Ensure images are in repo
- Check `assets/images/` path
- Verify `next.config.js` settings

### 404 on Page Refresh
- Fixed by `output: 'export'` in config
- Vercel handles routing automatically

---

## Support

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [GitHub Issues](https://github.com/REVOgati/Film_Director_Master_Showcase/issues)
