# Ankur Ghosh — 3D Portfolio Resume

A premium interactive portfolio built with **React + Vite**.

## Features
- Animated particle background
- Typewriter effect with your key skills
- Count-up stat animations
- Tab navigation (About, Experience, Skills, Education, Journey, Contact)
- Expandable experience cards
- Intersection-observer skill bar animations
- Fully responsive layout

## Getting Started

### Prerequisites
- Node.js 18+ installed

### Install & Run

```bash
# 1. Unzip the project
unzip ankur-ghosh-resume.zip
cd ankur-ghosh-resume

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

Output will be in the `dist/` folder — ready to deploy to Vercel, Netlify, or any static host.

### Deploy to Vercel (free, one command)

```bash
npx vercel
```

## Project Structure

```
ankur-ghosh-resume/
├── index.html
├── vite.config.js
├── package.json
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── index.css
│   ├── data/
│   │   └── resume.js        ← Edit your info here
│   └── components/
│       ├── ParticleCanvas.jsx
│       ├── useTypewriter.js
│       ├── Hero.jsx / .module.css
│       ├── NavPills.jsx / .module.css
│       ├── Section.jsx / .module.css
│       ├── About.jsx / .module.css
│       ├── Experience.jsx / .module.css
│       ├── Skills.jsx / .module.css
│       ├── Education.jsx / .module.css
│       ├── Timeline.jsx / .module.css
│       └── Contact.jsx / .module.css
```

## Customization

All your data lives in **`src/data/resume.js`** — edit that file to update your name, experience, skills, education, and contact info. No need to touch any component files.
