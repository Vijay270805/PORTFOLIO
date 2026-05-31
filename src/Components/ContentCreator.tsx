import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiYoutube, FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi';

const topics = [
  { label: 'Artificial Intelligence', icon: '🤖', color: 'var(--primary)' },
  { label: 'Machine Learning', icon: '🧠', color: 'var(--secondary)' },
  { label: 'Software Development', icon: '💻', color: 'var(--accent)' },
  { label: 'Stock Market Fundamentals', icon: '📈', color: '#FF6B6B' },
  { label: 'Personal Finance', icon: '💰', color: '#FFD93D' },
  { label: 'Technology Trends', icon: '🔮', color: '#FF8C42' },
  { label: 'Career Growth', icon: '🚀', color: 'var(--primary)' },
];

const socials = [
  {
    platform: 'YouTube',
    handle: '@vijayd',
    followers: 'Coming Soon',
    icon: FiYoutube,
    color: '#FF0000',
    bg: 'rgba(255,0,0,0.1)',
    border: 'rgba(255,0,0,0.3)',
    href: '#',
  },
  {
    platform: 'LinkedIn',
    handle: 'vijayd2708',
    followers: 'Connect',
    icon: FiLinkedin,
    color: '#0A66C2',
    bg: 'rgba(10,102,194,0.1)',
    border: 'rgba(10,102,194,0.3)',
    href: 'https://linkedin.com/in/vijayd2708',
  },
  {
    platform: 'Twitter / X',
    handle: '@vijayd',
    followers: 'Coming Soon',
    icon: FiTwitter,
    color: 'var(--primary)',
    bg: 'rgba(0,245,255,0.1)',
    border: 'rgba(0,245,255,0.3)',
    href: '#',
  },
  {
    platform: 'Instagram',
    handle: '@vijayd',
    followers: 'Coming Soon',
    icon: FiInstagram,
    color: '#E1306C',
    bg: 'rgba(225,48,108,0.1)',
    border: 'rgba(225,48,108,0.3)',
    href: '#',
  },
];

export default function ContentCreator() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="content" className="section-padding relative" ref={ref}>
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full opacity-5 blur-3xl"
          style={{ background: 'radial-gradient(circle, var(--secondary), transparent)' }} />
      </div>

      <div className="container-max px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="tag mb-4 inline-block">Content & Media</span>
          <h2 className="section-title">Tech & AI <span className="text-gradient">Content Creation</span></h2>
          <p className="section-subtitle">Passionate about simplifying complex concepts through educational content</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Left - Description & Topics */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="glass rounded-2xl p-8 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--primary)]/20 to-[var(--secondary)]/20 border border-[var(--primary)]/30 flex items-center justify-center text-2xl mb-5">
                🎬
              </div>
              <h3 className="font-bold text-[var(--text-primary)] font-['Space_Grotesk'] text-xl mb-3">
                Simplifying Complex AI Concepts
              </h3>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-5">
                Passionate about simplifying complex AI, Machine Learning, Software Engineering, Financial Markets,
                and Emerging Technology concepts through engaging educational content for aspiring developers and tech enthusiasts.
              </p>
              <div className="flex items-center gap-2 text-sm text-[var(--accent)]">
                <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
                Building Audience — Content Coming Soon
              </div>
            </div>

            {/* Topics */}
            <div>
              <p className="text-[var(--text-secondary)] text-sm font-medium mb-3">Topics I Cover</p>
              <div className="flex flex-wrap gap-2">
                {topics.map((t, i) => (
                  <motion.span
                    key={t.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + i * 0.07 }}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium glass glass-hover cursor-default"
                    style={{ color: t.color, border: `1px solid ${t.color}30` }}
                  >
                    <span>{t.icon}</span>
                    {t.label}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right - Social Platforms */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <p className="text-[var(--text-secondary)] text-sm font-medium mb-4">Find Me On</p>
            <div className="grid grid-cols-2 gap-4">
              {socials.map((s, i) => (
                <motion.a
                  key={s.platform}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                  className="glass rounded-xl p-5 flex flex-col items-center text-center group glass-hover"
                  style={{ borderColor: s.border, background: s.bg }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <s.icon className="w-7 h-7 mb-2" style={{ color: s.color }} />
                  <p className="font-bold text-[var(--text-primary)] text-sm">{s.platform}</p>
                  <p className="text-[var(--text-secondary)] text-xs">{s.handle}</p>
                  <span
                    className="mt-2 text-xs px-2 py-0.5 rounded-full font-medium"
                    style={{ background: s.bg, color: s.color, border: `1px solid ${s.border}` }}
                  >
                    {s.followers}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
