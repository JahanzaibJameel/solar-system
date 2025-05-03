// 1. First create all HTML elements dynamically
document.body.innerHTML = `
<div id="solar-system">
    <div class="sun"></div>
    <!-- Planets will be added by JavaScript -->
</div>

<div id="info">
    <h2>Solar System Simulation</h2>
    <p>Click on a planet to select it</p>
    <div id="planet-info"></div>
</div>

<div id="controls">
    <button id="speed-up">Speed Up</button>
    <button id="slow-down">Slow Down</button>
    <button id="reset-speed">Reset Speed</button>
    <button id="toggle-orbits">Toggle Orbits</button>
    <button id="real-scale">Real Scale (Warning: Huge!)</button>
</div>
`;

// 2. Add CSS styles dynamically
const style = document.createElement('style');
style.textContent = `
body {
    margin: 0;
    overflow: hidden;
    background-color: #000;
    font-family: Arial, sans-serif;
}

#solar-system {
    position: relative;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.sun {
    position: absolute;
    width: 40px;
    height: 40px;
    background: radial-gradient(circle at 30% 30%, #fff, #ffdf00, #ff9900, #ff4500);
    border-radius: 50%;
    box-shadow: 0 0 50px #ff9900;
    z-index: 10;
}

.orbit {
    position: absolute;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    transform-origin: center;
}

.planet {
    position: absolute;
    border-radius: 50%;
    transform-origin: center;
    cursor: pointer;
}

#controls {
    position: fixed;
    bottom: 20px;
    left: 20px;
    color: white;
    background: rgba(0, 0, 0, 0.7);
    padding: 10px;
    border-radius: 5px;
    z-index: 100;
}

#info {
    position: fixed;
    top: 20px;
    left: 20px;
    color: white;
    background: rgba(0, 0, 0, 0.7);
    padding: 10px;
    border-radius: 5px;
    z-index: 100;
}

button {
    background: #444;
    color: white;
    border: none;
    padding: 5px 10px;
    margin: 5px;
    border-radius: 3px;
    cursor: pointer;
}

button:hover {
    background: #666;
}
`;
document.head.appendChild(style);

// 3. Now the JavaScript logic for the solar system
const config = {
    scale: 1,
    speed: 1,
    showOrbits: true,
    selectedPlanet: null,
    realScaleMode: false
};

const planets = [
    { name: "Mercury", color: "#b5b5b5", radius: 0.38, orbitRadius: 0.39, orbitPeriod: 0.24, moons: 0 },
    { name: "Venus", color: "#e6c229", radius: 0.95, orbitRadius: 0.72, orbitPeriod: 0.62, moons: 0 },
    { name: "Earth", color: "#6b93d6", radius: 1, orbitRadius: 1, orbitPeriod: 1, moons: 1 },
    { name: "Mars", color: "#e27b58", radius: 0.53, orbitRadius: 1.52, orbitPeriod: 1.88, moons: 2 },
    { name: "Jupiter", color: "#c88b3a", radius: 11.2, orbitRadius: 5.20, orbitPeriod: 11.86, moons: 79 },
    { name: "Saturn", color: "#e4d191", radius: 9.45, orbitRadius: 9.58, orbitPeriod: 29.46, moons: 82, hasRings: true },
    { name: "Uranus", color: "#d1e7e7", radius: 4.01, orbitRadius: 19.22, orbitPeriod: 84.01, moons: 27 },
    { name: "Neptune", color: "#5b5ddf", radius: 3.88, orbitRadius: 30.05, orbitPeriod: 164.8, moons: 14 }
];

let basePlanetSize = 10;
const baseOrbitDistance = 150;
let baseSunSize = 40;

function createSolarSystem() {
    const solarSystem = document.getElementById('solar-system');
    
    if (config.realScaleMode) {
        config.scale = 1;
        basePlanetSize = 1;
        baseSunSize = 4;
    }
    
    planets.forEach((planet, index) => {
        const orbit = document.createElement('div');
        orbit.className = 'orbit';
        const orbitSize = baseOrbitDistance * planet.orbitRadius * config.scale;
        orbit.style.width = `${orbitSize * 2}px`;
        orbit.style.height = `${orbitSize * 2}px`;
        orbit.style.left = `calc(50% - ${orbitSize}px)`;
        orbit.style.top = `calc(50% - ${orbitSize}px)`;
        orbit.style.display = config.showOrbits ? 'block' : 'none';
        orbit.id = `orbit-${index}`;
        solarSystem.appendChild(orbit);
        
        const planetElement = document.createElement('div');
        planetElement.className = 'planet';
        const planetSize = basePlanetSize * planet.radius;
        planetElement.style.width = `${planetSize}px`;
        planetElement.style.height = `${planetSize}px`;
        planetElement.style.backgroundColor = planet.color;
        planetElement.id = `planet-${index}`;
        
        planetElement.style.left = `calc(50% + ${orbitSize}px - ${planetSize/2}px)`;
        planetElement.style.top = `calc(50% - ${planetSize/2}px)`;
        
        if (planet.hasRings) {
            const rings = document.createElement('div');
            rings.style.position = 'absolute';
            rings.style.width = `${planetSize * 2.5}px`;
            rings.style.height = `${planetSize * 0.5}px`;
            rings.style.backgroundColor = 'transparent';
            rings.style.border = `2px solid #e4d191`;
            rings.style.borderRadius = '50%';
            rings.style.transform = 'rotate(-20deg)';
            rings.style.left = `-${planetSize * 0.75}px`;
            rings.style.top = `calc(50% - ${planetSize * 0.25}px)`;
            planetElement.appendChild(rings);
        }
        
        planetElement.addEventListener('click', () => {
            selectPlanet(index);
        });
        
        solarSystem.appendChild(planetElement);
    });
    
    animate();
}

function animate() {
    const now = Date.now();
    
    planets.forEach((planet, index) => {
        const planetElement = document.getElementById(`planet-${index}`);
        const orbitSize = baseOrbitDistance * planet.orbitRadius * config.scale;
        
        const angle = (now / (1000 * planet.orbitPeriod * 10 / config.speed)) % (2 * Math.PI);
        const x = Math.cos(angle) * orbitSize;
        const y = Math.sin(angle) * orbitSize;
        
        planetElement.style.transform = `translate(${x}px, ${y}px)`;
        
        if (config.selectedPlanet === index) {
            planetElement.style.boxShadow = `0 0 10px white`;
        } else {
            planetElement.style.boxShadow = 'none';
        }
    });
    
    requestAnimationFrame(animate);
}

function selectPlanet(index) {
    config.selectedPlanet = index;
    const planet = planets[index];
    const infoDiv = document.getElementById('planet-info');
    
    infoDiv.innerHTML = `
        <h3>${planet.name}</h3>
        <p>Radius: ${planet.radius.toFixed(2)} Earth radii</p>
        <p>Orbit Radius: ${planet.orbitRadius.toFixed(2)} AU</p>
        <p>Orbital Period: ${planet.orbitPeriod.toFixed(2)} Earth years</p>
        <p>Moons: ${planet.moons}</p>
    `;
}

function initControls() {
    document.getElementById('speed-up').addEventListener('click', () => {
        config.speed *= 2;
    });
    
    document.getElementById('slow-down').addEventListener('click', () => {
        config.speed /= 2;
    });
    
    document.getElementById('reset-speed').addEventListener('click', () => {
        config.speed = 1;
    });
    
    document.getElementById('toggle-orbits').addEventListener('click', () => {
        config.showOrbits = !config.showOrbits;
        document.querySelectorAll('.orbit').forEach(orbit => {
            orbit.style.display = config.showOrbits ? 'block' : 'none';
        });
    });
    
    document.getElementById('real-scale').addEventListener('click', () => {
        if (!config.realScaleMode && confirm("Real scale mode will make distances accurate but the solar system will be HUGE. Continue?")) {
            config.realScaleMode = true;
            const solarSystem = document.getElementById('solar-system');
            while (solarSystem.children.length > 1) {
                solarSystem.removeChild(solarSystem.lastChild);
            }
            createSolarSystem();
        }
    });
}

// Initialize everything
createSolarSystem();
initControls();
selectPlanet(2); // Select Earth by default