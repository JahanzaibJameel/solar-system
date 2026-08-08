# 🌌 Solar System Simulation

![JavaScript](https://img.shields.io/badge/JavaScript-ES2026%2B-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen?style=for-the-badge)
![Made with Love](https://img.shields.io/badge/Made%20with-%E2%9D%A4%EF%B8%8F-red?style=for-the-badge)

> **An immersive, real-time planetary simulation built with vanilla JavaScript — experience the elegance of orbital mechanics directly in your browser.**

---

## 📖 Table of Contents

- [✨ Overview](#-overview)
- [🚀 Features](#-features)
- [🎮 Live Demo](#-live-demo)
- [📦 Installation](#-installation)
- [🕹️ Usage](#️-usage)
- [⚙️ Configuration](#️-configuration)
- [🛠️ Technology Stack](#️-technology-stack)
- [📁 Project Structure](#-project-structure)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [🙏 Acknowledgments](#-acknowledgments)
- [📬 Contact](#-contact)

---

## ✨ Overview

**Solar System Simulation** is a lightweight, browser-based interactive visualization that brings the celestial dance of our solar system to life.

Built entirely with **HTML5, CSS3, and vanilla JavaScript**, this project requires no frameworks, external libraries, or complex setup.

The simulation combines educational information with an immersive visual experience, allowing users to explore planetary motion, orbital periods, planetary data, and different visualization modes directly in their browser.

Whether you're an astronomy enthusiast, a student learning about orbital mechanics, or a developer interested in browser-based animation, this project provides an engaging way to explore our solar system.

---

## 🚀 Features

### 🌞 Core Simulation

- **Realistic Orbital Mechanics** — Planets orbit the Sun at relative speeds based on their orbital periods.
- **Interactive Planetary System** — Explore the Sun and planets through a dynamic browser-based simulation.
- **Real-Scale Mode** — Switch between visual scale and astronomically accurate relative proportions.
- **Dynamic Animation** — Smooth frame-based animation powered by `requestAnimationFrame`.
- **Real-Time Simulation Controls** — Adjust the simulation speed while it is running.
- **Responsive Interface** — Designed to work across modern desktop and mobile browsers.

### 🪐 Interactive Controls

| Control | Action |
|---|---|
| **Speed Up** | Accelerates simulation time using a 2× multiplier |
| **Slow Down** | Slows simulation time using a 0.5× multiplier |
| **Reset Speed** | Returns the simulation to normal 1× speed |
| **Toggle Orbits** | Shows or hides planetary orbital paths |
| **Real Scale** | Switches to astronomically accurate relative proportions |

### 🎯 Planet Selection

Click any planet to display detailed information, including:

- Planet name
- Planetary radius
- Orbital radius
- Orbital period
- Number of moons
- Visual planetary representation

Selected planets are highlighted with a radiant visual glow.

### 🎨 Visual Design

- ☀️ **Radiant Sun** — Gradient-based rendering with a warm luminous glow.
- 🪐 **Saturn's Rings** — Dedicated visual representation of Saturn's ring system.
- 🌀 **Orbital Paths** — Semi-transparent orbital rings for easier visualization.
- 🌌 **Dark Space Theme** — Immersive dark background designed for celestial visualization.
- ✨ **Planet Highlighting** — Selected planets receive a visual glow effect.
- 📱 **Responsive Layout** — Interface adapts to different screen sizes.

---

## 🎮 Live Demo

> 🌐 **[View Live Demo](https://yourusername.github.io/solar-system-simulation)**

**Note:** Replace the URL above with your actual deployment URL.

---

## 📦 Installation

### Prerequisites

You only need:

- A modern web browser
- Chrome 90+
- Firefox 88+
- Edge 90+
- Safari 14+

No Node.js, npm, server, or external dependencies are required.

### 🚀 Quick Start

Clone the repository:

```bash
git clone https://github.com/yourusername/solar-system-simulation.git

Navigate into the project:

cd solar-system-simulation

Open the project:

# Windows
start index.html

# macOS
open index.html

# Linux
xdg-open index.html

Alternatively, simply double-click index.html to launch the simulation.

🕹️ Usage
Basic Interaction
Explore — Watch the planets orbit the Sun in real time.
Select — Click any planet to view its information.
Control — Use the simulation controls to adjust speed and visualization.
Toggle Orbits — Show or hide orbital paths.
Change Scale — Switch between visual and real-scale modes.
💡 Tips
Try Real Scale mode to appreciate the enormous distances between celestial bodies.
Use Speed Up to observe planetary movement across longer simulated time periods.
Use Slow Down when examining individual planetary orbits.
Toggle orbital paths off for a cleaner visual experience.
Click different planets to explore their individual data.
⚙️ Configuration

Simulation parameters can be customized directly in script.js.

Example configuration:

const config = {
    scale: 1,
    speed: 1,
    showOrbits: true,
    selectedPlanet: null,
    realScaleMode: false
};
Configuration Options
Property	Description
scale	Global visual scale multiplier
speed	Simulation speed multiplier
showOrbits	Controls whether orbital paths are visible
selectedPlanet	Stores the currently selected planet
realScaleMode	Enables or disables real-scale visualization
🪐 Adding a New Planet

You can extend the planetary data by adding a new object to the planets array.

Example:

{
    name: "Pluto",
    color: "#d4c4b0",
    radius: 0.18,
    orbitRadius: 39.5,
    orbitPeriod: 248.09,
    moons: 5,
    hasRings: false
}
Planet Properties
Property	Description
name	Name of the celestial body
color	Planet visualization color
radius	Radius relative to Earth
orbitRadius	Orbital distance in astronomical units
orbitPeriod	Orbital period in Earth years
moons	Number of known moons
hasRings	Whether the planet has a ring system
🛠️ Technology Stack
Technology	Version	Purpose
JavaScript	ES2026+	Core logic, animation, and DOM manipulation
HTML5	—	Semantic structure and application markup
CSS3	—	Styling, animations, layout, and visual effects
🔧 Key Techniques
Vanilla JavaScript — No frameworks or external dependencies.
Dynamic DOM Generation — UI elements are created and manipulated programmatically.
requestAnimationFrame — Smooth and performance-friendly animation.
CSS Radial Gradients — Used for celestial lighting and glow effects.
Event Handling — Interactive planet selection and simulation controls.
Responsive CSS — Adaptive layout for different screen sizes.
Data-Driven Rendering — Planet properties are defined through structured JavaScript data.
📁 Project Structure
solar-system-simulation/
├── index.html          # Application entry point
├── script.js           # Simulation logic and DOM generation
└── README.md           # Project documentation

Note: This project intentionally uses a minimal structure to keep the application lightweight, portable, and easy to understand.

⚡ Performance

The simulation is designed to remain lightweight by:

Using browser-native APIs.
Avoiding unnecessary dependencies.
Using requestAnimationFrame for animation.
Keeping the project client-side.
Minimizing DOM operations during animation.
Using CSS-based visual effects where possible.

Because everything runs locally in the browser, there is no backend server or database required.

🌍 Browser Compatibility

The project is designed for modern browsers supporting:

ES2026+ JavaScript features
HTML5
CSS3
requestAnimationFrame
Modern DOM APIs

Recommended browsers:

Browser	Support
Google Chrome	✅
Microsoft Edge	✅
Mozilla Firefox	✅
Apple Safari	✅
Opera	✅
🤝 Contributing

Contributions are welcome! 🎉

Whether you want to fix a bug, improve the visualization, add a new celestial body, or enhance the documentation, your contribution is appreciated.

How to Contribute
Fork the repository.
Clone your fork:
git clone https://github.com/yourusername/solar-system-simulation.git
Create a feature branch:
git checkout -b feature/amazing-feature
Make your changes.
Commit your changes:
git add .
git commit -m "Add amazing feature"
Push your branch:
git push origin feature/amazing-feature
Open a Pull Request.
Development Guidelines
Keep the project vanilla JavaScript.
Avoid unnecessary external dependencies.
Maintain cross-browser compatibility.
Write clean and readable code.
Use meaningful variable and function names.
Add comments where they improve code understanding.
Test changes before submitting a Pull Request.
📄 License

This project is licensed under the MIT License.

See the LICENSE file for the complete license text.

MIT License

Copyright (c) 2026 [Your Name]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
🙏 Acknowledgments
NASA — For publicly available planetary and astronomical data that can be used for educational visualization.
Open Source Community — For inspiring developers to build and share useful projects.
Web Platform — For providing powerful browser-native APIs that make interactive simulations possible.
You — For exploring this project. ⭐
📬 Contact

Have questions, suggestions, or want to contribute?

GitHub: @yourusername
Email: youremail@example.com
<div align="center">
🌌 Explore. Learn. Simulate. 🚀

Built with ☕, 🚀, JavaScript, and a whole lot of curiosity.

⭐ If you like this project, consider giving it a star!

</div> ```
