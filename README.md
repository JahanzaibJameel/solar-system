# 🪐 Solar System Simulation · 2026 Edition

<div align="center">

![Version](https://img.shields.io/badge/version-2.0.0--rc1-blue?style=for-the-badge\&logo=semver\&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-brightgreen?style=for-the-badge\&logo=open-source-initiative\&logoColor=white)
![Vanilla JS](https://img.shields.io/badge/vanilla-js-f7df1e?style=for-the-badge\&logo=javascript\&logoColor=black)
![PWA Ready](https://img.shields.io/badge/PWA-ready-5a0fc8?style=for-the-badge\&logo=pwa\&logoColor=white)
![Spatial Ready](https://img.shields.io/badge/spatial-ready-ff2d55?style=for-the-badge\&logo=apple\&logoColor=white)

**An immersive, AI-augmented, real-time simulation of our solar system — right in your browser.**

Built for the modern web (2026), embracing spatial computing, dark-mode elegance, and seamless interactivity.
</div>

<p align="center">
  <img src="./assets/solar-preview.gif" alt="Solar System Simulation preview" width="80%">
</p>

---

## ✨ What Makes It 2026-Ready

* **Spatial-first architecture** — Designed for future WebXR/AR overlays with no framework lock-in.
* **AI-enhanced insights** — Ready to connect to on-device LLMs such as WebLLM or Chrome built-in AI for real-time planetary facts.
* **Ultra-smooth 60 FPS animations** — Powered by `requestAnimationFrame` and hardware-accelerated CSS transforms.
* **Real-scale mode** — Toggle scientifically accurate relative distances for a true perspective of the solar system.
* **Responsive & adaptive** — Designed to work from 4K desktop monitors down to mobile and foldable displays.
* **Zero dependencies** — Pure vanilla HTML5, CSS3, and modern JavaScript. No npm installation or build step required.
* **Dark-native UI** — Automatically respects the system theme and works beautifully with OLED displays.
* **Voice & gesture ready** — Exposed event architecture makes future voice commands and hand-tracking controls easy to integrate.

---

## 🚀 Quick Start

### Clone the Repository

```bash
git clone https://github.com/JahanzaibJameel/solar-system
cd solar-system
```

### Run the Simulation

No installation or build process is required.

```bash
# macOS
open index.html

# Windows
start index.html

# Linux
xdg-open index.html
```

> Or simply drag `index.html` into your favorite modern browser.

The simulation is designed to work offline, making it ideal for demos, classrooms, presentations, and experimentation.

---

## 🎮 Controls & Interaction

| Button / Action    | Description                                                   |
| ------------------ | ------------------------------------------------------------- |
| **Speed Up**       | Increase the orbital simulation speed.                        |
| **Slow Down**      | Decrease the orbital simulation speed.                        |
| **Reset Speed**    | Return to the default simulation speed.                       |
| **Toggle Orbits**  | Show or hide orbital paths.                                   |
| **Real Scale**     | Switch to scientifically accurate relative orbital distances. |
| **Click a Planet** | Select a planet and display its information.                  |

---

## 🧠 Architecture Overview

```text
solar-system-2026/
├── index.html           # Single-file entry point
└── script.js            # Logic, rendering, animations, and UI
```

The application is built as a **self-contained dynamically generated SPA**.

DOM elements, styles, animations, and UI components are created and managed through JavaScript, keeping the project lightweight and dependency-free.

### Key Technical Highlights

* **Virtual Orbital Engine** — Calculates planetary positions using configurable orbital periods and parametric circular motion.
* **CSS Sun Glow** — Uses gradients and `box-shadow` effects to create the solar corona without external images.
* **CSS Saturn Rings** — Saturn's rings are created using CSS pseudo-elements and transform effects.
* **State-Driven UI** — A centralized `config` object controls simulation speed, visibility, and selected planets.
* **Real-Time Rendering** — Planet positions and animations update continuously using `requestAnimationFrame`.
* **Responsive Layout** — The simulation adapts to different screen sizes and viewport dimensions.
* **Dependency-Free Architecture** — No framework, package manager, bundler, or external runtime dependency is required.

---

## 🔮 2026 Roadmap & AI Integration

| Feature                   | Status          | Description                                                                           |
| ------------------------- | --------------- | ------------------------------------------------------------------------------------- |
| **AI Planetary Narrator** | 🔜 Planned      | Explain planets and generate interactive educational insights using browser-based AI. |
| **WebGPU Solar Flares**   | 🧪 Experimental | Explore GPU-powered solar flare and advanced lighting effects.                        |
| **WebXR Orbit View**      | 💡 Concept      | Explore the solar system through compatible AR/VR devices using WebXR.                |
| **Collaborative Mode**    | 📡 Proposed     | Allow multiple users to explore the simulation together using WebRTC.                 |
| **PWA Offline Mode**      | ✅ Ready         | Support offline access through service-worker caching.                                |
| **Voice Controls**        | 🔜 Planned      | Control simulation speed, planets, and views using voice commands.                    |
| **Gesture Controls**      | 💡 Concept      | Support hand-tracking interactions for compatible spatial devices.                    |

---

## 🌍 Planet Data

Planetary parameters are stored in a simple JavaScript array, making it easy to extend the simulation or replace static data with live astronomical data sources.

```js
const planets = [
  {
    name: "Mercury",
    color: "#b5b5b5",
    radius: 0.38,
    orbitRadius: 0.39,
    orbitPeriod: 0.24,
    moons: 0
  },
  {
    name: "Venus",
    color: "#e6c229",
    radius: 0.95,
    orbitRadius: 0.72,
    orbitPeriod: 0.62,
    moons: 0
  },
  {
    name: "Earth",
    color: "#6b93d6",
    radius: 1,
    orbitRadius: 1,
    orbitPeriod: 1,
    moons: 1
  }

  // ... additional planets
];
```

> **💡 Did you know?** In real-scale mode, Earth becomes extremely small compared with the distances between planets. The solar system is dominated by vast empty space.

---

## 🛠️ Customization

You can customize the simulation without modifying the HTML structure.

### Change Planet Colors or Sizes

Edit the `planets` array inside `script.js`:

```js
const planets = [
  {
    name: "Earth",
    color: "#6b93d6",
    radius: 1,
    orbitRadius: 1,
    orbitPeriod: 1,
    moons: 1
  }
];
```

### Adjust Simulation Speed

Modify the simulation configuration:

```js
const config = {
  speed: 1
};
```

### Add a New Celestial Body

Simply add another object to the `planets` array:

```js
planets.push({
  name: "Planet Nine",
  color: "#3a3a6b",
  radius: 2.5,
  orbitRadius: 70,
  orbitPeriod: 18520,
  moons: 0
});
```

The rendering system can then automatically process the new object according to the simulation logic.

### Add Voice Controls

The project can be extended with the Web Speech API to support commands such as:

```text
"Speed up"
"Slow down"
"Show Earth"
"Hide orbits"
"Reset simulation"
```

---

## 📁 Project Structure

```text
solar-system-2026/
│
├── assets/
│   └── solar-preview.gif
│
├── docs/
│
├── index.html
├── script.js
├── CODE_OF_CONDUCT.md
├── CONTRIBUTING.md
├── LICENSE
└── README.md
```

---

## 🌟 Features

* 🪐 Interactive planetary simulation
* ☀️ Animated Sun
* 🌍 Planet selection
* 🌙 Moon representation
* 💫 Orbital paths
* ⚡ Adjustable simulation speed
* 📏 Real-scale visualization
* 🌌 Immersive space-themed interface
* 📱 Responsive design
* 🌙 Dark-mode support
* 📡 PWA-ready architecture
* 🧠 AI integration ready
* 🎙️ Voice-control ready
* 🥽 WebXR-ready architecture
* 🚫 Zero dependencies
* 📦 No build step required
* 💻 Works directly in modern browsers

---

## 🤝 Contributing

Contributions are welcome and encouraged.

If you have an idea, improvement, optimization, bug fix, or new astronomical feature, feel free to contribute.

### 1. Fork the Repository

```bash
git clone https://github.com/your-username/solar-system-2026.git
cd solar-system-2026
```

### 2. Create a Feature Branch

```bash
git checkout -b feat/ai-narrator
```

Or:

```bash
git checkout -b fix/orbit-precision
```

### 3. Make Your Changes

Implement your feature or fix while keeping the project lightweight and dependency-free.

### 4. Commit Your Changes

```bash
git add .
git commit -m "feat: add AI planetary narrator"
```

### 5. Push Your Branch

```bash
git push origin feat/ai-narrator
```

### 6. Open a Pull Request

Create a Pull Request with a clear description of the changes.

Please read the [Contributing Guidelines](./CONTRIBUTING.md) and [Code of Conduct](./CODE_OF_CONDUCT.md) before contributing.

---

## 📚 Documentation

Project documentation is available in the [`docs`](./docs) directory.

You can use it to document:

* Architecture
* Simulation mathematics
* Planetary data
* API integrations
* AI integrations
* WebXR experiments
* Development guidelines
* Future roadmap

---

## 🔐 License

This project is licensed under the **MIT License**.

See the [LICENSE](./LICENSE) file for the complete license text.

---

<div align="center">

### 🪐 Explore. Learn. Simulate. 🌌

**Built with ❤️ using pure web standards.**

Ready for 2026 and beyond.

**© 2026 SolarSim Labs · Star the project on GitHub ⭐**

</div>
