# Public Assets

This folder contains publicly accessible assets served by Next.js.

## Structure

- `images/` - Profile pictures, thumbnails, and other images
  - `Aldrian_profile_pic.jpeg` - Main profile picture

## Adding Images

Place new images in the `public/images/` folder. They will be accessible at `/images/filename.jpg` in your application.

**Example:**
- File location: `public/images/photo.jpg`
- Use in code: `/images/photo.jpg`
- Browser URL: `http://yoursite.com/images/photo.jpg`

## Note

Files in the `public` directory are served from the root path. Do not use `/public/` in your paths, just start with `/images/`.
