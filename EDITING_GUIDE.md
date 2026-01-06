# Quick Editing Guide

## Where to Edit What

### Home Page Content
**File:** `assets/js/script.js`  
**Function:** `getHomePage()`

- **About Me**: Edit the paragraph after `<h2>About Me</h2>`
- **Education**: Update degree, school, and graduation date
- **Contact Info**: Update phone, email, LinkedIn, and GitHub links
- **Leadership Roles**: Edit the three leadership cards (title and description)

### Projects Page Content
**File:** `assets/js/script.js`  
**Function:** `getProjectsPage()`

Each project in the `projects` array has:
```javascript
{
  name: 'Project Title',
  description: 'Project description...',
  links: [{ text: 'Link Text', url: 'https://...' }],
  folder: 'folder-name'
}
```

### Styling & Colors
**File:** `assets/css/style.css`

Change colors at the top:
```css
:root {
  --accent-color: #0066cc;  /* Change this to your preferred color */
}
```

### Navigation
**File:** `index.html`

The navigation links are in the `<nav>` section. Currently set to "Home" and "Projects".

## Adding Images

### Project Images
1. Create folder: `assets/images/projects/project-name/`
2. Add images to that folder
3. Images auto-display in project gallery

### Leadership Images
1. Add images to: `assets/images/leadership/`
2. Edit `getHomePage()` function in `assets/js/script.js`
3. Add to leadership card:
```html
<img src="./assets/images/leadership/image.jpg" alt="Description">
```

### Resume
1. Save as: `assets/resume.pdf`
2. Download button automatically links to it

## Common Edits

### Change Your Name
- Edit `<title>` in `index.html`
- Edit `.nav-logo` in `assets/js/script.js` (getHomePage function)

### Update Contact Info
In `getHomePage()` function, find:
```javascript
<p><strong>Phone:</strong> <a href="tel:+19733094431">+1 973-309-4431</a></p>
```
Replace with your phone number.

### Add New Project
In `getProjectsPage()` function, add to `projects` array:
```javascript
{
  name: 'New Project',
  description: 'Description here...',
  links: [
    { text: 'GitHub', url: 'https://github.com/...' }
  ],
  folder: 'new-project'
}
```

### Change Accent Color
In `assets/css/style.css`, find:
```css
--accent-color: #0066cc;
```
Change `#0066cc` to your preferred color (hex code).

## Testing

1. Open `index.html` in your browser
2. Test both "Home" and "Projects" pages
3. Check on mobile (use browser dev tools)
4. Verify all links work

## Deploying to GitHub Pages

1. Create a GitHub repository named `alexander-portfolio`
2. Push all files to the repository
3. Go to Settings → Pages
4. Select "Deploy from a branch" and choose `main`
5. Your site will be live at `https://yourusername.github.io/alexander-portfolio`

---

**Need help?** Check the comments in the code files or refer to README.md
