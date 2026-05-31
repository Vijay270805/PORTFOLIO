import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import ParticleBackground from './components/ParticleBackground';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Education from './components/Education';
import ContentCreator from './components/ContentCreator';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
    }
  }, [darkMode]);

  return (
    <>
      <AnimatePresence>
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <div className="relative min-h-screen" style={{ background: 'var(--bg)' }}>
          <ParticleBackground />
          <Navbar darkMode={darkMode} toggleDarkMode={() => setDarkMode(d => !d)} />
          <main>
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Certifications />
            <Education />
            <ContentCreator />
            <Contact />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
