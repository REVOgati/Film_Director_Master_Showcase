# Quick Start Guide

## Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Run development server**
   ```bash
   npm run dev
   ```

3. **Open browser**
   ```
   http://localhost:3000
   ```

## Project Structure

- **`app/`** - Next.js pages (home, films, mancave, fashion)
- **`components/`** - Reusable UI components
- **`data/`** - Content in JSON format (easy to edit!)
- **`assets/`** - Images and static files

## Updating Content

All content is stored in simple JSON files in the `data/` folder:

### Add a Film
Edit `data/films.json` and add:
```json
{
  "id": 2,
  "title": "Film Title",
  "youtubeId": "VIDEO_ID",
  "description": "Description",
  "priority": 2,
  "featured": false,
  "premiereDate": "2024-03-20"
}
```

### Add Mancave Episode
Edit `data/mancave.json`

### Add Instagram Photo
Edit `data/photos.json`

### Update Profile
Edit `data/profile.json` for contact info, bio, etc.

## Deployment

See [DEPLOYMENT.md](DEPLOYMENT.md) for full Vercel deployment guide.

**Quick deploy:**
1. Push to GitHub
2. Connect repository to Vercel
3. Deploy (auto-detected as Next.js)
4. Live in 30 seconds!

## Design

- **Classic theme** - Black & white, no gradients
- **Responsive** - Works on all devices
- **Fast** - Static generation
- **Professional** - Clean, minimal design

## Features

✅ YouTube video embeds (films & episodes)
✅ Instagram post embeds (photos)
✅ Contact buttons (WhatsApp, Instagram, YouTube)
✅ Priority-based ordering
✅ Featured content on homepage
✅ Fully responsive design
✅ SEO optimized

## Support

- See `data/HOW_TO_UPDATE.md` for non-technical content updates
- See `README.md` for comprehensive documentation
- See `DEPLOYMENT.md` for deployment instructions

## Next Steps

1. Update `data/profile.json` with real contact information
2. Add more films/episodes/photos in data files
3. Test locally with `npm run dev`
4. Deploy to Vercel
5. Share with Aldrian!
