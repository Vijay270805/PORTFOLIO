import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './Components/Navbar';
import ParticleBackground from './Components/ParticleBackground';
import Hero from './Components/Hero';
import About from './Components/About';
import Skills from './Components/Skills';
import Experience from './Components/Experience';
import Projects from './Components/Projects';
import Education from './Components/Education';
import ContentCreator from './Components/ContentCreator';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import LoadingScreen from './Components/LoadingScreen';
// @ts-ignore: allow side-effect import of SCSS without type declarations
import "./App.css";
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
            <Education />
            <Skills />
            <Experience />
            <Projects />
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
