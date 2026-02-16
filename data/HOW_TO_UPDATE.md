# How to Update Content

This guide will help you add new films, episodes, and photos to your portfolio without any coding knowledge.

## Adding a New Film

1. Go to the GitHub repository: `https://github.com/REVOgati/Film_Director_Master_Showcase`
2. Navigate to `data/films.json`
3. Click the **pencil icon** (Edit) at the top right
4. Copy this template and paste at the end before the closing `]`:

```json
  ,
  {
    "id": 2,
    "title": "Your Film Title Here",
    "youtubeId": "PASTE_YOUTUBE_ID_HERE",
    "thumbnail": "https://img.youtube.com/vi/PASTE_YOUTUBE_ID_HERE/maxresdefault.jpg",
    "description": "Brief description of your film",
    "category": "Short Film",
    "priority": 2,
    "featured": false,
    "premiereDate": "2024-03-20"
  }
```

5. **Get YouTube ID**: From URL `https://youtu.be/4H5NTEzCLyI`, copy `4H5NTEzCLyI`
6. Replace `PASTE_YOUTUBE_ID_HERE` with your ID (in both places)
7. Change the title, description, and date
8. Click **"Commit changes"** at the bottom
9. Your website updates automatically in 30 seconds!

## Adding a Mancave Episode

Same process, but edit `data/mancave.json` instead:

```json
  ,
  {
    "id": 3,
    "title": "Mancave - Episode 10",
    "youtubeId": "YOUR_YOUTUBE_ID",
    "thumbnail": "https://img.youtube.com/vi/YOUR_YOUTUBE_ID/maxresdefault.jpg",
    "description": "Episode description",
    "episodeNumber": 10,
    "priority": 3,
    "featured": false,
    "releaseDate": "2024-03-01"
  }
```

## Adding Instagram Photos

Edit `data/photos.json`:

```json
  ,
  {
    "id": 2,
    "title": "Photo Collection Name",
    "instagramUrl": "https://www.instagram.com/p/YOUR_POST_ID/",
    "embedUrl": "https://www.instagram.com/p/YOUR_POST_ID/embed",
    "description": "Description",
    "category": "Fashion & Modelling",
    "priority": 2,
    "featured": false
  }
```

**Get Instagram Post ID**: From URL `https://www.instagram.com/p/DUd_iKzEvpL/`, copy `DUd_iKzEvpL`

## Updating Profile Information

Edit `data/profile.json` to change:
- Your bio
- Contact information (WhatsApp, email)
- Profile picture path (images should be in `public/images/` folder)

**To change profile picture:**
1. Add new image to `public/images/` folder
2. Edit `data/profile.json` 
3. Update `"profileImage": "/images/your-new-image.jpg"`
4. Commit changes

## Important Tips

✅ **Always include the comma** before adding new items  
✅ **Keep the ID numbers unique** (1, 2, 3, etc.)  
✅ **Priority 1** shows first, higher numbers show later  
✅ **Set featured: true** to show on homepage  
✅ **Test YouTube IDs** by visiting: `https://www.youtube.com/watch?v=YOUR_ID`  

## Common Mistakes to Avoid

❌ Missing comma between items  
❌ Forgetting to change the ID number  
❌ Not closing brackets `}`  
❌ Using wrong YouTube ID  

## Need Help?

If something breaks, just go to GitHub → History → Revert to previous version!
