import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiArrowDown, FiDownload, FiMail, FiGithub, FiLinkedin } from 'react-icons/fi';
const roles = ['AI Engineer', 'Machine Learning Engineer', 'Software Developer', 'Frontend Developer', 'Content Creator'];
export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
      } else {
        timeout = setTimeout(() => setTyping(false), 2000);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
      } else {
        setRoleIndex(i => (i + 1) % roles.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden section-padding">
      {/* Background gradient orbs */}
      <div className="absolute top-20 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl"
        style={{ background: 'radial-gradient(circle, var(--primary), transparent)' }} />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl"
        style={{ background: 'radial-gradient(circle, var(--secondary), transparent)' }} />

      <div className="container-max px-4 z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6 text-sm text-[var(--primary)]">
                <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
                Open to Software / Tech Roles — Chennai, India
              </div>

              <h1 className="font-['Space_Grotesk'] font-bold leading-tight mb-4"
                style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', color: 'var(--text-primary)' }}>
                Heyy Hii, I'm{' '}
                <span className="text-gradient">Vijay D</span>
              </h1>

              <div className="flex items-center gap-2 justify-center lg:justify-start mb-6"
                style={{ fontSize: 'clamp(1.2rem, 3vw, 1.6rem)' }}>
                <span className="text-[var(--text-secondary)] font-medium">A </span>
                <span className="text-gradient font-bold font-['Space_Grotesk']">
                  {displayed}
                  <span className="animate-blink text-[var(--primary)]">|</span>
                </span>
              </div>

              <p className="text-[var(--text-secondary)] text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
                Where AI meets innovation — building intelligent systems with Machine Learning, Deep Learning, Computer Vision, and Full Stack Engineering.
              </p>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => scrollTo('projects')}
                  className="btn-primary"
                >
                  <FiArrowDown className="w-4 h-4" />
                  View Projects
                </motion.button>
                <motion.a
                  href="./Vijay Resume.pdf"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="btn-outline"
                  download
                >
                  <FiDownload className="w-4 h-4" />
                  Download Resume
                </motion.a>
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => scrollTo('contact')}
                  className="btn-outline"
                >
                  <FiMail className="w-4 h-4" />
                  Contact Me
                </motion.button>
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-4 mt-8 justify-center lg:justify-start">
                <a
                  href="https://github.com/vijayd2708"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 glass rounded-lg flex items-center justify-center hover:border-[var(--primary)] transition-all duration-200 hover:text-[var(--primary)]"
                >
                  <FiGithub className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/in/vijayd2708"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 glass rounded-lg flex items-center justify-center hover:border-[var(--primary)] transition-all duration-200 hover:text-[var(--primary)]"
                >
                  <FiLinkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:vijayd2708@gmail.com"
                  className="w-10 h-10 glass rounded-lg flex items-center justify-center hover:border-[var(--primary)] transition-all duration-200 hover:text-[var(--primary)]"
                >
                  <FiMail className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Profile Image & Neural Network Visual */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-64 h-64 lg:w-80 lg:h-80">
              {/* Rotating rings */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0 rounded-full border border-dashed"
                  style={{
                    margin: `-${i * 20}px`,
                    borderColor: i === 0 ? 'var(--primary)' : i === 1 ? 'var(--secondary)' : 'var(--accent)',
                    opacity: 0.3,
                  }}
                  animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
                  transition={{ duration: 10 + i * 5, repeat: Infinity, ease: 'linear' }}
                />
              ))}

              {/* Profile image container */}
              <div className="absolute inset-4 rounded-full overflow-hidden border-2 border-[var(--primary)] glow-primary bg-gradient-to-br from-[var(--primary)]/20 to-[var(--secondary)]/20 flex items-center justify-center">
                <div className="text-center w-full h-full">
                  <img
                    src={`${import.meta.env.BASE_URL}profile.png`}
                    alt="Vijay D"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Floating tech badges */}
              {[
                { label: 'Python', pos: 'top-1 right-0', color: 'var(--primary)' },
                { label: 'AI', pos: 'top-0 left-0', color: 'var(--primary)' },
                { label: 'ML', pos: 'bottom-8 left-0', color: 'var(--secondary)' },
                { label: 'HTML/CSS', pos: 'bottom-3 right-[-20px]', color: 'var(--accent)' },
              ].map(({ label, pos, color }) => (
                <motion.div
                  key={label}
                  className={`absolute ${pos} glass px-3 py-1 rounded-full text-xs font-bold`}
                  style={{ color, borderColor: color, border: `1px solid ${color}` }}
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: Math.random() * 2 }}
                >
                  {label}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={() => scrollTo('about')}
        >
          <span className="text-[var(--text-secondary)] text-xs">Scroll Down</span>
          <FiArrowDown className="text-[var(--primary)] w-5 h-5" />
        </motion.div>
      </div>
    </section>
  );
}
