# Alexander Morales Portfolio Website

A clean, professional portfolio website built with HTML, CSS, and JavaScript. Fully responsive and easy to edit.

## Project Structure

```
alexander-portfolio/
├── index.html                 # Main HTML file
├── assets/
│   ├── css/
│   │   └── style.css         # Main stylesheet
│   ├── js/
│   │   └── script.js         # Main JavaScript file
│   ├── images/
│   │   ├── projects/         # Project images (organized by folder)
│   │   │   ├── audio-equalizer/
│   │   │   ├── pwm-generator/
│   │   │   ├── county-roads/
│   │   │   ├── cad-schematics/
│   │   │   ├── pose-estimation/
│   │   │   ├── ai-data-system/
│   │   │   ├── robotics-walking/
│   │   │   ├── vehicle-simulator/
│   │   │   └── ece-student-society/
│   │   └── leadership/        # Leadership role images
│   └── resume.pdf            # Your resume (add here)
├── README.md                  # This file
└── .gitignore                # Git ignore file
```

## Quick Start

1. **Clone or download** this repository
2. **Open `index.html`** in your web browser to view the site
3. **To deploy on GitHub Pages:**
   - Push this repository to GitHub
   - Go to Settings → Pages
   - Select "Deploy from a branch" and choose `main` branch
   - Your site will be live at `https://yourusername.github.io/alexander-portfolio`

## How to Edit

### Update Personal Information

Edit the content in `assets/js/script.js`:
- **About Me section**: Modify the text in `getHomePage()` function
- **Contact Info**: Update phone, email, LinkedIn, and GitHub links
- **Leadership roles**: Edit the three leadership cards

### Add/Edit Projects

Projects are defined in the `getProjectsPage()` function in `assets/js/script.js`. Each project has:
- `name`: Project title
- `description`: 2-5 sentence description
- `links`: External links (GitHub, PDFs, etc.)
- `folder`: Folder name in `assets/images/projects/`

To add a new project, add an object to the `projects` array:

```javascript
{
  name: 'Project Name',
  description: 'Your project description here.',
  links: [
    { text: 'GitHub', url: 'https://github.com/...' },
    { text: 'Report', url: 'path/to/report.pdf' }
  ],
  folder: 'project-folder-name'
}
```

### Add Project Images

1. Create a folder in `assets/images/projects/` with the project's folder name
2. Add your images to that folder
3. Images will automatically appear in the project gallery

**Example:**
- Project folder name: `audio-equalizer`
- Image path: `assets/images/projects/audio-equalizer/photo1.jpg`
- Image path: `assets/images/projects/audio-equalizer/photo2.jpg`

### Add Leadership Images

1. Add images to `assets/images/leadership/`
2. Edit the `getHomePage()` function in `assets/js/script.js`
3. Add image tags to the leadership card's `leadership-images` div:

```html
<div class="leadership-images">
  <img src="./assets/images/leadership/image1.jpg" alt="Leadership event">
  <img src="./assets/images/leadership/image2.jpg" alt="Leadership event">
</div>
```

### Add Your Resume

1. Save your resume as `resume.pdf` in the `assets/` folder
2. The download button on the home page will automatically link to it

### Customize Colors

Edit the color variables in `assets/css/style.css`:

```css
:root {
  --primary-color: #1a1a1a;      /* Dark text */
  --secondary-color: #333333;    /* Medium text */
  --accent-color: #0066cc;       /* Links and buttons */
  --text-color: #222222;         /* Body text */
  --light-bg: #f5f5f5;           /* Light backgrounds */
  --white: #ffffff;              /* White */
  --border-color: #e0e0e0;       /* Borders */
}
```

## Features

✅ **Fully Responsive** - Works on desktop, tablet, and mobile  
✅ **Clean Design** - Professional, minimal aesthetic  
✅ **Easy to Edit** - Simple HTML, CSS, and JavaScript  
✅ **No Dependencies** - No frameworks or build tools required  
✅ **GitHub Pages Ready** - Deploy directly to GitHub Pages  
✅ **Fast Loading** - Lightweight and optimized  

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Tips for Best Results

- **Image Optimization**: Compress images before uploading (use tools like TinyPNG)
- **File Naming**: Use lowercase and hyphens for folder/file names (e.g., `project-name`)
- **Relative Paths**: Always use relative paths for images (e.g., `./assets/images/...`)
- **Testing**: Test on mobile devices before deploying
- **Git Commits**: Make regular commits with clear messages

## Support

For questions about editing or deploying, refer to the inline comments in:
- `index.html` - HTML structure
- `assets/css/style.css` - Styling
- `assets/js/script.js` - Content and functionality

---

**Last Updated:** January 2026
