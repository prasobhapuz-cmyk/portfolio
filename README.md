# 🚀 Prasobh Kumar - Mechanical & Aerospace Engineering Portfolio

A modern, high-performance personal portfolio website built with clean **HTML5, Vanilla CSS3, Canvas2D, and JavaScript**. Designed specifically with an engineering and aerospace theme, rich micro-interactions, dark/light themes, and a modular architecture.

---

## 🌟 Key Features

1. **Aerospace & Mechanical Scroll Animation Engine**
   - Interactive HTML5 Canvas in the Hero section rendering an axial turbofan engine compressor stage, involute gear trains, wind tunnel streamlines, and live telemetry HUD.
   - Rotations and particle flow velocities dynamically accelerate with user scroll and mouse motion.

2. **Modular Data Architecture (`js/data.js`)**
   - **Adding or editing content is effortless!** All your projects, education milestones, skills, future innovation ideas, and contact information live in `js/data.js`.
   - You can add a new project or education entry in seconds simply by adding an item to the array—no need to touch complex HTML.

3. **Core Sections Included**
   - **Hero Section**: Dynamic typewriter text, status pill, direct CTA buttons, and quick telemetry stats.
   - **About Me**: Bio, engineering philosophy, and focus pillars (Precision CAD, Aerospace Fluids, Robotics, Sustainable Energy).
   - **Education Timeline**: B.Tech at Government Engineering College Thrissur (GECT), Higher Secondary (Trivandrum), High School.
   - **Skills & Competencies**: Multi-discipline filterable tabs (CAD, Aerospace, Programming, Workshop, Leadership).
   - **Projects & CAD Showcase**: Filterable grid with interactive Project Deep-Dive Modal.
   - **Future Ideas & Innovation Roadmap**: Future research ideas (Micro-Turbines, Pipe Crawlers, Ornithopter, Flywheels).
   - **Contact Hub**: 1-click WhatsApp chat (`+91 6282576450`), direct email copy (`prasobhapuz@gmail.com`), Instagram profile (`@iprasobh`), and interactive contact form.

4. **Theme Switcher & Responsive Design**
   - Obsidian Dark Theme (default) & Crisp Light Theme with persistent memory in `localStorage`.
   - Fully responsive across mobile phones, tablets, laptops, and desktop displays.

---

## 🛠️ How to Add or Update Content

Open [`js/data.js`](js/data.js) in any text editor.

### 1. Add a New Project
Under `portfolioData.projects`, simply append a new object:
```javascript
{
  id: "proj-7",
  title: "Your New Project Title",
  category: "aerospace", // options: 'aerospace', 'mechanical', 'robotics', 'computational'
  categoryLabel: "Aerospace & Design",
  badge: "CAD / Prototype",
  summary: "A brief 1-line description of the project.",
  image: "assets/images/your-image.png",
  tags: ["SolidWorks", "Aerodynamics", "Python"],
  description: "Detailed description of the project...",
  keyFeatures: [
    "Feature 1 or mechanism details",
    "Feature 2 or analysis result"
  ],
  toolsUsed: ["SolidWorks", "ANSYS", "Python"],
  demoUrl: "#",
  githubUrl: "#"
}
```

### 2. Add an Education Milestone
Under `portfolioData.education`:
```javascript
{
  id: "edu-new",
  degree: "Certification in Advanced Aerospace CAD",
  institution: "Online / Institution Name",
  location: "Kerala, India",
  period: "2026",
  status: "Completed",
  badge: "Certification",
  description: "Description of the course and outcomes.",
  highlights: [
    "Key topic 1",
    "Key topic 2"
  ]
}
```

---

## 🚀 How to Run Locally

### Option A: Open directly in any browser
Double click on `index.html` to open it in Chrome, Edge, Firefox, or Safari.

### Option B: Using the built-in PowerShell server
Run in PowerShell:
```powershell
powershell -ExecutionPolicy Bypass -File server.ps1
```
Then open `http://localhost:8080` in your web browser.

### Option C: Deploy Online (Free)
You can deploy this repository in 1 click to:
- **GitHub Pages**: Push this folder to a GitHub repository, go to **Settings > Pages**, and enable GitHub Pages on `main` branch.
- **Vercel / Netlify**: Drag and drop the folder into Vercel or Netlify.

---

## 👤 Profile & Contact Summary
- **Name**: Prasobh Kumar
- **College**: Government Engineering College Thrissur (GECT)
- **Hometown**: Trivandrum, Kerala, India
- **Email**: `prasobhapuz@gmail.com`
- **WhatsApp**: `+91 6282576450`
- **Instagram**: `@iprasobh`
