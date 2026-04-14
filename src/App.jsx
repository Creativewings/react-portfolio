import { useState } from 'react';
import ParticleCanvas from './components/ParticleCanvas';
import Hero from './components/Hero';
import NavPills from './components/NavPills';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import './index.css';

const SECTIONS = {
  About: <About />,
  Experience: <Experience />,
  Skills: <Skills />,
  Education: <Education />,
  Journey: <Timeline />,
  Contact: <Contact />,
};

export default function App() {
  const [active, setActive] = useState('About');

  return (
    <div style={{ minHeight: '100vh', background: '#05070f', position: 'relative' }}>
      <ParticleCanvas />
      <div style={{ position: 'relative', zIndex: 2 }}>
        <Hero />
        <NavPills active={active} onSelect={setActive} />
        <div key={active}>
          {SECTIONS[active]}
        </div>
        <footer style={{
          textAlign: 'center',
          padding: '24px',
          fontSize: '11px',
          color: '#2a3a5a',
          letterSpacing: '1px',
          position: 'relative',
          zIndex: 2,
        }}>
          ANKUR GHOSH · JAVA FULL STACK DEVELOPER · KOLKATA
        </footer>
      </div>
    </div>
  );
}
