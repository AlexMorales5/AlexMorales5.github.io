// ========================================
// Alexander Morales Portfolio - Main Script
// ========================================

document.addEventListener('DOMContentLoaded', function() {
  initializeNavigation();
  loadPage('home');
});

// ========================================
// Navigation Setup
// ========================================

function initializeNavigation() {
  const navLinks = document.querySelectorAll('.nav-links a');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const page = this.getAttribute('data-page');
      loadPage(page);
      
      // Update active link
      navLinks.forEach(l => l.classList.remove('active'));
      this.classList.add('active');
    });
  });
}

// ========================================
// Page Loading
// ========================================

function loadPage(page) {
  const content = document.getElementById('content');
  
  // Scroll to top
  window.scrollTo(0, 0);
  
  if (page === 'home') {
    content.innerHTML = getHomePage();
  } else if (page === 'projects') {
    content.innerHTML = getProjectsPage();
  }
}

// ========================================
// Home Page Content
// ========================================

function getHomePage() {
  return `
    <section class="about-section">
      <h2>About Me</h2>
      <p>I am a Computer Engineering student at Purdue University's College of Engineering with a strong interest in embedded systems, full-stack development, and applied AI. My experience spans government engineering automation, large-scale data systems, robotics control, and embedded hardware design, where I've worked on projects ranging from multimillion-dollar infrastructure improvements to AI-driven academic tools. I have led engineering teams, managed complex technical projects, and built production-level applications while maintaining a strong academic record. I am passionate about using engineering to create efficient, scalable, and impactful solutions across both public and private sectors.</p>
    </section>

    <section class="about-section">
      <h3>Education</h3>
      <p><strong>Purdue University, College of Engineering</strong><br>
      Bachelor of Science in Computer Engineering<br>
      West Lafayette, IN<br>
      Expected Graduation: May 2028</p>
    </section>

    <section class="about-section">
      <h3>Contact Information</h3>
      <div class="contact-info">
        <p><strong>Phone:</strong> <a href="tel:+19733094431">+1 973-309-4431</a></p>
        <p><strong>Email:</strong> <a href="mailto:alexander.rey.morales@gmail.com">alexander.rey.morales@gmail.com</a></p>
        <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/alexrmorales" target="_blank">www.linkedin.com/in/alexrmorales</a></p>
        <p><strong>GitHub:</strong> <a href="https://github.com/AlexMorales5" target="_blank">github.com/AlexMorales5</a></p>
      </div>
    </section>

    <section>
      <h2>Leadership</h2>
      <div class="leadership-grid">
        <div class="leadership-card">
          <h4>ECE Student Society President</h4>
          <p>Led a student organization representing Purdue ECE students by organizing events, managing executive members, and coordinating with faculty and industry partners. Focused on improving student engagement, professional development, and community building within the department.</p>
          <div class="leadership-images">
            <!-- Add images by placing files in assets/images/leadership/ -->
          </div>
        </div>

        <div class="leadership-card">
          <h4>ECE Ambassador</h4>
          <p>Represented the Elmore Family School of Electrical and Computer Engineering by assisting with outreach, tours, and student engagement events. Helped prospective students learn about the ECE curriculum, research opportunities, and student life.</p>
          <div class="leadership-images">
            <!-- Add images by placing files in assets/images/leadership/ -->
          </div>
        </div>

        <div class="leadership-card">
          <h4>Purdue Senator – College of Engineering</h4>
          <p>Served as a student representative in Purdue's shared governance system. Advocated for engineering students by participating in discussions on academic policy, student experience, and institutional initiatives.</p>
          <div class="leadership-images">
            <!-- Add images by placing files in assets/images/leadership/ -->
          </div>
        </div>
      </div>
    </section>

    <section class="resume-section">
      <h2>Resume</h2>
      <p>Download my resume to learn more about my experience and qualifications.</p>
      <a href="./assets/resume.pdf" class="resume-button" download>Download Resume (PDF)</a>
    </section>
  `;
}

// ========================================
// Projects Page Content
// ========================================

function getProjectsPage() {
  const projects = [
    {
      name: 'Audio Equalizer',
      description: 'This project implemented a three-band audio equalizer with independent control of bass, midrange, and treble frequencies. The system included active filter stages, a recombination stage, and a power amplifier capable of driving an 8-ohm speaker. Measured frequency responses matched expected low-pass, band-pass, and high-pass behavior, with minor deviations attributed to component tolerances and lack of buffering.',
      links: [],
      folder: 'audio-equalizer'
    },
    {
      name: 'Pulse Width Modulation Generator',
      description: 'This project used a 555 timer configured for pulse width modulation to control the brightness of an LED or the speed of a DC motor. By varying resistor values, the duty cycle of the output signal was adjusted, directly changing the power delivered to the load. The design demonstrates how capacitor charge and discharge timing affects PWM behavior in practical control systems.',
      links: [],
      folder: 'pwm-generator'
    },
    {
      name: 'ECE Student Society (2025–2026 Academic Year)',
      description: 'This project represents leadership and organizational work within the Purdue ECE Student Society. The organization connects students, faculty, alumni, and corporate partners through technical workshops, networking events, and professional development opportunities. The work focused on strengthening engagement and expanding resources for ECE students.',
      links: [],
      folder: 'ece-student-society'
    },
    {
      name: 'County Roads Automated Python Process',
      description: 'This project was developed for a government Department of Engineering to improve efficiency in county road classification workflows. A Python-based automation system streamlined inspection and data processing tasks, reducing manual effort and improving consistency.',
      links: [],
      folder: 'county-roads'
    },
    {
      name: 'Government Department of Engineering: County Roads CAD Schematics',
      description: 'This project involved drafting and modifying CAD schematics for a 2025 road improvement initiative. Custom designs were created and edited to reflect required roadway upgrades and engineering specifications.',
      links: [],
      folder: 'cad-schematics'
    },
    {
      name: 'Personal Project: AI-Based 5-Process Pose Estimation',
      description: 'This personal project used the MediaPipe computer vision framework to recognize human poses through a camera feed. Detected poses were mapped to specific keyboard inputs and computer functions, enabling hands-free task automation.',
      links: [
        { text: 'Video Showcase', url: 'https://www.youtube.com/shorts/QwnTgdWo3Sw' }
      ],
      folder: 'pose-estimation'
    },
    {
      name: 'AI Data Management System (Purdue EPICS)',
      description: 'This project architected a full-stack application that consolidated approximately one million unstructured student records into a MongoDB database. A Node.js and Express.js API enabled real-time student lookup, analytics, and academic recommendations across nearly 20 years of data. An AI-based recommendation system was integrated using the Anthropic API, and the application was deployed live using HTML, CSS, and JavaScript. (Note: Anthropic API integration is currently inactive due to subscription cancellation.)',
      links: [
        { text: 'Website Link', url: 'https://chs-data-system.onrender.com/' }
      ],
      folder: 'ai-data-system'
    },
    {
      name: 'Purdue Humanoid Robotics Walking Cycles Software',
      description: 'This project developed sinusoidal walking cycles for a small-scale humanoid robot leg using Arduino. Work included programming, motion planning, and hardware board design to support standing and walking behaviors.',
      links: [
        { text: 'GitHub', url: 'https://github.com/BurhanLaxmidhar/HRC' }
      ],
      folder: 'robotics-walking'
    },
    {
      name: 'Automotive Vehicle Simulator System',
      description: 'This project involved designing an embedded automotive simulator to teach new drivers vehicle control fundamentals. Circuits were built for ignition, horn, turn signals, tachometer, and gear shifting using microcontrollers, sensors, and motors. Real-time RPM and gear data were displayed on an LCD interface, and a five-member team was led through design and implementation.',
      links: [
        { text: 'Presentation', url: 'https://docs.google.com/presentation/d/171AV35Ndm1GgeeLvxqpJkHYzlNshu-mWcPLgkwGcttg/edit' }
      ],
      folder: 'vehicle-simulator'
    }
  ];

  let html = '<h2>Projects</h2><div class="projects-grid">';

  projects.forEach(project => {
    html += `
      <div class="project-card">
        <div class="project-header">
          <h3>${project.name}</h3>
        </div>
        <div class="project-description">
          ${project.description}
        </div>
        ${project.links.length > 0 ? `
          <div class="project-links">
            ${project.links.map(link => `<a href="${link.url}" target="_blank">${link.text}</a>`).join('')}
          </div>
        ` : ''}
        <div class="project-gallery">
          <h4>Gallery</h4>
          <div class="gallery-images" id="gallery-${project.folder}">
            <!-- Images will be loaded from assets/images/projects/${project.folder}/ -->
          </div>
        </div>
      </div>
    `;
  });

  html += '</div>';
  
  // Load project images after DOM is updated
  setTimeout(() => {
    projects.forEach(project => {
      loadProjectImages(project.folder);
    });
  }, 0);
  
  return html;
}

// ========================================
// Image Loading Functions
// ========================================

function loadProjectImages(folderName) {
  const galleryContainer = document.getElementById(`gallery-${folderName}`);
  if (!galleryContainer) return;
  
  // Common image formats
  const imageExtensions = ['jpg', 'jpeg', 'png', 'webp', 'gif'];
  const imageFiles = [];
  
  // Try to load images with common names (image1.jpg, photo1.png, etc.)
  // In a real implementation, you'd need a server-side API to list files
  // For now, we'll use a simple approach: try numbered images
  for (let i = 1; i <= 20; i++) {
    imageExtensions.forEach(ext => {
      const img = new Image();
      img.onload = function() {
        if (!imageFiles.includes(this.src)) {
          imageFiles.push(this.src);
          const imgElement = document.createElement('img');
          imgElement.src = this.src;
          imgElement.alt = `Project image ${i}`;
          imgElement.onclick = () => openImageModal(this.src);
          galleryContainer.appendChild(imgElement);
        }
      };
      img.src = `./assets/images/projects/${folderName}/image${i}.${ext}`;
    });
  }
  
  // Also try common filenames
  const commonNames = ['photo1', 'photo2', 'photo3', 'img1', 'img2', 'img3', 'screenshot1', 'screenshot2'];
  commonNames.forEach(name => {
    imageExtensions.forEach(ext => {
      const img = new Image();
      img.onload = function() {
        if (!imageFiles.includes(this.src)) {
          imageFiles.push(this.src);
          const imgElement = document.createElement('img');
          imgElement.src = this.src;
          imgElement.alt = name;
          imgElement.onclick = () => openImageModal(this.src);
          galleryContainer.appendChild(imgElement);
        }
      };
      img.src = `./assets/images/projects/${folderName}/${name}.${ext}`;
    });
  });
}

function openImageModal(imageSrc) {
  // Simple modal for viewing images (you can enhance this later)
  const modal = document.createElement('div');
  modal.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.9);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    cursor: pointer;
  `;
  
  const img = document.createElement('img');
  img.src = imageSrc;
  img.style.cssText = `
    max-width: 90%;
    max-height: 90%;
    object-fit: contain;
  `;
  
  modal.appendChild(img);
  modal.onclick = () => document.body.removeChild(modal);
  document.body.appendChild(modal);
}
