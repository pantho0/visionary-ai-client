# Image Placeholders Guide

This document outlines the image placeholders used in the About Us page and recommendations for the images you should add.

## About Us Page Images

### 1. Hero Section Image
**Location:** `/public/placeholder-about-hero.jpg`  
**Dimensions:** 1920x1000px (recommended)  
**Description:** Add a professional team photo or modern office workspace showcasing collaboration and innovation  
**Suggestions:**
- Team meeting around a modern conference table
- Collaborative workspace with designers working on computers
- Modern tech office with creative atmosphere
- Team brainstorming session with whiteboards and digital displays

### 2. Mission Section Image
**Location:** Displayed as placeholder in the mission section  
**Dimensions:** 800x800px (recommended)  
**Description:** An inspiring image representing creative workspace, digital art creation, or AI visualization  
**Suggestions:**
- Designer working on AI-generated artwork
- Digital art creation process
- Abstract AI visualization or neural network graphics
- Creative professional using advanced technology
- Colorful digital artwork being created

## Additional Image Recommendations

### Contact Page Map Section
**Description:** Add Google Maps embed or location map image  
**Suggestions:**
- Embed Google Maps iframe with your actual office location
- Custom styled map image showing your location
- 3D rendered map with location pin

### Homepage Images
If you want to enhance the existing homepage, consider adding:
- High-quality AI-generated sample images
- Before/after comparison images
- User testimonial photos
- Feature showcase images

## How to Add Images

1. **Place images in the public folder:**
   ```
   /public/images/about-hero.jpg
   /public/images/mission-image.jpg
   ```

2. **Update the image paths in the code:**
   - Edit `app/about/page.tsx`
   - Replace `"/placeholder-about-hero.jpg"` with your actual image path

3. **Image optimization tips:**
   - Use WebP format for better performance
   - Optimize images before uploading (use tools like TinyPNG or Squoosh)
   - Keep file sizes under 500KB for faster loading
   - Use Next.js Image component for automatic optimization

## Color Palette Reference

Match your images with the site's color scheme:
- Primary: `#59deca` (Teal/Cyan)
- Secondary Blue: `#94eaff` (Light Blue)
- Background Dark: `#030708` (Near Black)
- Light Text: `#e7f2ff` (Light Blue/White)

## Stock Photo Resources

If you need professional stock photos:
- **Unsplash** (https://unsplash.com) - Free high-quality images
- **Pexels** (https://pexels.com) - Free stock photos
- **Freepik** (https://freepik.com) - Free and premium graphics
- **Icons8** (https://icons8.com) - Illustrations and photos

### Recommended Search Terms:
- "tech team collaboration"
- "modern office workspace"
- "AI technology"
- "digital art creation"
- "creative workspace"
- "software development team"
- "innovation hub"
