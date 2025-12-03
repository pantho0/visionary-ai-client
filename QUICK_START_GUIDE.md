# Quick Start Guide - New Pages

## 🎉 What's New?

Your Visionary AI website now has:
1. ✅ **Redesigned About Us page** - Professional, multi-section layout
2. ✅ **New Contact Us page** - Fully functional contact form
3. ✅ **Updated navigation** - Links to the new Contact page

## 🌐 Access the Pages

- **About Us:** `http://localhost:3001/about`
- **Contact Us:** `http://localhost:3001/contact`

## 📸 Adding Images

### Quick Steps:
1. Download/prepare your images
2. Place them in `/public/images/` folder
3. Update the paths in the code

### About Us Page - Hero Image
```typescript
// File: app/about/page.tsx (line 25)
// Change from:
src="/placeholder-about-hero.jpg"

// To:
src="/images/about-hero.jpg"  // or your actual image path
```

### Recommended Images:
- **About Hero:** Team photo, office workspace (1920x1000px)
- **Mission Section:** AI visualization, creative workspace (800x800px)
- **Contact Map:** Google Maps embed or location image

## 📝 Updating Contact Information

### Edit Contact Details
File: `app/contact/page.tsx`

```typescript
// Email (line 69-72)
href="mailto:support@visionaryai.com"  // Replace with your email
support@visionaryai.com                // Replace with your email

// Phone (line 86-89)
href="tel:+1234567890"                 // Replace with your phone
+1 (234) 567-890                       // Replace with your phone

// Address (line 102-106)
123 Innovation Drive                    // Replace with your address
Tech District, San Francisco
CA 94103, United States

// Business Hours (line 116-127)
Monday - Friday: 9:00 AM - 6:00 PM     // Update as needed
Saturday: 10:00 AM - 4:00 PM
Sunday: Closed
```

## 🔌 Connecting the Contact Form

The form currently simulates submission. To connect to a real backend:

### Option 1: Email Service (e.g., EmailJS)
```typescript
// File: app/contact/page.tsx (line 23-33)
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setFormStatus("sending");
  
  try {
    // Replace with your email service API call
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    
    if (response.ok) {
      setFormStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } else {
      setFormStatus("error");
    }
  } catch (error) {
    setFormStatus("error");
  }
};
```

### Option 2: Third-Party Services
- **Formspree:** https://formspree.io
- **EmailJS:** https://www.emailjs.com
- **Web3Forms:** https://web3forms.com

## 🗺️ Adding Google Maps

Replace the map placeholder in Contact page:

```typescript
// File: app/contact/page.tsx (line 251-267)
<div className="relative w-full h-[300px] sm:h-[400px] rounded-2xl overflow-hidden">
  <iframe
    src="https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>
```

**Get your embed code:**
1. Go to Google Maps
2. Search for your location
3. Click "Share" → "Embed a map"
4. Copy the iframe code

## 🎨 Customization Tips

### Change Colors
All colors are defined in `app/globals.css`:
```css
:root {
  --color-blue: #94eaff;
  --color-primary: #59deca;
  --color-light-100: #e7f2ff;
  /* ... */
}
```

### Modify Content
- **About Us:** Edit `app/about/page.tsx`
- **Contact:** Edit `app/contact/page.tsx`

### Add/Remove Sections
Each page is divided into `<section>` tags - you can easily add, remove, or reorder them.

## 🚀 Testing

### View Pages Locally
```bash
npm run dev
# Visit http://localhost:3001/about
# Visit http://localhost:3001/contact
```

### Test Responsiveness
- Desktop: Default view
- Tablet: Resize browser to ~768px
- Mobile: Resize browser to ~375px
- Or use browser DevTools (F12) → Device Toolbar

### Test Form
1. Go to Contact page
2. Fill out all fields
3. Click "Send Message"
4. Watch for loading state and success message

## 📱 Mobile Optimization

Both pages are fully responsive:
- ✅ Mobile-first design
- ✅ Touch-friendly buttons
- ✅ Readable text on small screens
- ✅ Stacked layouts on mobile
- ✅ Hamburger menu integration

## 🔍 SEO Optimization (Recommended)

Add metadata to each page:

```typescript
// Add to app/about/page.tsx
export const metadata = {
  title: 'About Us | Visionary AI',
  description: 'Learn about Visionary AI and our mission to democratize creative intelligence through cutting-edge AI technology.',
};

// Add to app/contact/page.tsx
export const metadata = {
  title: 'Contact Us | Visionary AI',
  description: 'Get in touch with Visionary AI. We\'re here to help with any questions about our AI image generation platform.',
};
```

## 📚 Documentation Files

- **IMAGE_PLACEHOLDERS.md** - Detailed image requirements and suggestions
- **REDESIGN_SUMMARY.md** - Complete technical documentation
- **QUICK_START_GUIDE.md** - This file

## ❓ Need Help?

Common issues:
- **Page not found:** Make sure dev server is running (`npm run dev`)
- **Styling issues:** Clear browser cache and .next folder
- **Form not working:** Check browser console for errors

## 🎯 Next Steps Checklist

- [ ] Add hero image to About page
- [ ] Add mission section image
- [ ] Update contact information (email, phone, address)
- [ ] Connect contact form to backend/email service
- [ ] Add Google Maps to contact page
- [ ] Test on mobile device
- [ ] Add custom images (not placeholders)
- [ ] Set up form notification system
- [ ] Add SEO metadata
- [ ] Deploy changes

## 🎊 You're All Set!

Your website now has professional About and Contact pages. Customize them with your own content and images to make them truly yours!
