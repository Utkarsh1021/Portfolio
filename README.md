# Portfolio Website

A modern, high-quality portfolio website showcasing professional experience, projects, and skills.

## Features

- 🎨 Modern, premium UI design with glassmorphism effects
- 📱 Fully responsive design
- ✨ Smooth animations and transitions
- 🎯 Interactive navigation with active section highlighting
- 📋 All sections: Home, About, Skills, Experience, Projects, Certifications, Contact
- 🔗 Integration with GitHub, LinkedIn, and Google Drive

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- Framer Motion
- React Icons

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

## Resume download

- Put your resume PDF in `public/` (example: `public/Tejas.pdf`)
- The **Download Resume** button links to `/Tejas.pdf`

### Build

```bash
npm run build
```

### Preview

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Experience.jsx
│   ├── Projects.jsx
│   ├── Certifications.jsx
│   └── Contact.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## Sections

- **Home**: Hero section with introduction and CTA buttons
- **About**: Professional summary and education
- **Skills**: Technical skills organized by category
- **Experience**: Professional experience timeline
- **Projects**: Featured projects with tech stacks
- **Certifications**: Links to Google Drive certificates
- **Contact**: Contact form and information
