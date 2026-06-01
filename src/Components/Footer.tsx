import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowUp, FiHeart } from 'react-icons/fi';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Education', href: '#education' },
  { label: 'Content', href: '#content' },
  { label: 'Contact', href: '#contact' },
];

const socials = [
  { icon: FiGithub, href: 'https://github.com/vijayd2708', label: 'GitHub', color: 'var(--text-secondary)' },
  { icon: FiLinkedin, href: 'https://linkedin.com/in/vijayd2708', label: 'LinkedIn', color: '#0A66C2' },
  { icon: FiMail, href: 'mailto:vijayd2708@gmail.com', label: 'Email', color: 'var(--primary)' },
];

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const scrollTo = (href: string) => {
    document.getElementById(href.slice(1))?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-[var(--border)] py-12 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(to top, rgba(0,245,255,0.03), transparent)' }} />

      <div className="container-max px-4 relative z-10">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center text-black font-bold text-lg">
                V
              </div>
              <div>
                <p className="font-bold text-[var(--text-primary)] font-['Space_Grotesk'] text-lg leading-none">Vijay D</p>
                <p className="text-[var(--primary)] text-xs">AI & ML Engineer</p>
              </div>
            </div>
            <p className="text-[var(--text-secondary)] text-sm leading-relaxed max-w-xs">
              Building intelligent systems with AI, Machine Learning & Modern Software Engineering.
              Based in Chennai, Tamil Nadu, India.
            </p>
            <div className="flex gap-3 mt-4">
              {socials.map(({ icon: Icon, href, label, color }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={label}
                  className="w-9 h-9 glass rounded-lg flex items-center justify-center hover:scale-110 transition-all duration-200"
                  whileHover={{ y: -2 }}
                >
                  <Icon className="w-4 h-4" style={{ color }} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-[var(--text-primary)] font-['Space_Grotesk'] mb-4 text-sm">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map(link => (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className="text-[var(--text-secondary)] hover:text-[var(--primary)] text-sm text-left transition-colors duration-200"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-[var(--text-primary)] font-['Space_Grotesk'] mb-4 text-sm">Contact</h4>
            <div className="space-y-2">
              <a href="mailto:vijayd2708@gmail.com"
                className="flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--primary)] text-sm transition-colors duration-200">
                <FiMail className="w-4 h-4 flex-shrink-0" />
                vijayd2708@gmail.com
              </a>
              <a href="tel:+919445942708"
                className="flex items-center gap-2 text-[var(--text-secondary)] text-sm">
                📞 +91 9445942708
              </a>
              <p className="flex items-center gap-2 text-[var(--text-secondary)] text-sm">
                📍 Chennai, Tamil Nadu, India
              </p>
            </div>

            <div className="mt-4 glass rounded-xl px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
                <span className="text-[var(--accent)] text-xs font-semibold">Open to Work</span>
              </div>
              <p className="text-[var(--text-secondary)] text-xs mt-0.5">Full-time & Internship Roles</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[var(--border)] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[var(--text-secondary)] text-sm flex items-center gap-1.5">
            © 2026 Vijay D. Made with
            <FiHeart className="text-blue-500 w-3.5 h-3.5 fill-current" />
            in Chennai, India.
          </p>
          <div className="flex items-center gap-4">
            <p className="text-[var(--text-secondary)] text-xs">
            Built For Fun and Learning. Always Open to Feedback and Oppurunities.
            </p>
            <motion.button
              onClick={scrollTop}
              className="w-9 h-9 btn-primary rounded-lg flex items-center justify-center p-0"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              title="Back to Top"
            >
              <FiArrowUp className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
