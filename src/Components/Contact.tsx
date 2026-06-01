import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  FiMail,
  FiLinkedin,
  FiGithub,
  FiMapPin,
  FiPhone,
} from 'react-icons/fi';

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const contactInfo = [
    {
      icon: FiMail,
      label: 'Email',
      value: 'vijayd2708@gmail.com',
      href: 'mailto:vijayd2708@gmail.com',
      color: 'var(--primary)',
    },
    {
      icon: FiPhone,
      label: 'Phone',
      value: '+91 9445942708',
      href: 'tel:+919445942708',
      color: 'var(--secondary)',
    },
    {
      icon: FiMapPin,
      label: 'Location',
      value: 'Chennai, Tamil Nadu, India',
      href: '#',
      color: 'var(--accent)',
    },
  ];

  const socialLinks = [
    {
      icon: FiLinkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/vijayd2708',
      color: '#0A66C2',
    },
    {
      icon: FiGithub,
      label: 'GitHub',
      href: 'https://github.com/vijayd2708',
      color: 'var(--text-secondary)',
    },
    {
      icon: FiMail,
      label: 'Email',
      href: 'mailto:vijayd2708@gmail.com',
      color: 'var(--primary)',
    },
  ];

  return (
    <section id="contact" className="section-padding relative" ref={ref}>
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full opacity-5 blur-3xl"
          style={{
            background:
              'radial-gradient(circle, var(--primary), transparent)',
          }}
        />
        <div
          className="absolute top-0 right-1/4 w-64 h-64 rounded-full opacity-5 blur-3xl"
          style={{
            background:
              'radial-gradient(circle, var(--secondary), transparent)',
          }}
        />
      </div>

      <div className="container-max px-4">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="tag mb-4 inline-block">Get In Touch</span>
          <h2 className="section-title">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="section-subtitle">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you!
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="glass rounded-2xl p-8 mb-6">
              <h3 className="font-bold text-[var(--text-primary)] font-['Space_Grotesk'] text-xl mb-3">
                Open to Opportunities
              </h3>

              <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
                I'm currently seeking full-time roles and internship opportunities in AI Engineering,
                Machine Learning, and Software Development.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                {contactInfo.map(({ icon: Icon, label, value, href, color }) => (
                  <a key={label} href={href} className="flex items-center gap-3 group">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 group-hover:scale-110"
                      style={{
                        background: `${color}15`,
                        border: `1px solid ${color}30`,
                      }}
                    >
                      <Icon className="w-4 h-4" style={{ color }} />
                    </div>

                    <div>
                      <p className="text-[var(--text-secondary)] text-xs">{label}</p>
                      <p className="text-[var(--text-primary)] text-sm font-medium">
                        {value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social */}
              <div className="pt-4 border-t border-[var(--border)]">
                <p className="text-[var(--text-secondary)] text-sm mb-3">
                  Connect with me
                </p>

                <div className="flex gap-3">
                  {socialLinks.map(({ icon: Icon, label, href, color }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 glass rounded-xl flex items-center justify-center hover:scale-110 transition"
                      title={label}
                    >
                      <Icon className="w-5 h-5" style={{ color }} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Availability */}
            <div className="glass rounded-xl p-4 flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-[var(--accent)] animate-pulse" />
              <div>
                <p className="text-[var(--text-primary)] text-sm font-semibold">
                  Available for Hire
                </p>
                <p className="text-[var(--text-secondary)] text-xs">
                  Open to full-time roles & internships
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE - GOOGLE FORM */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="glass rounded-2xl p-4 h-full">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSfWBAngKpf1x_2U4HSUoi8d5neawoMIQ746bHol5gPlP0j4XQ/viewform?embedded=true"
                width="100%"
                height="650"
                style={{ border: 'none', borderRadius: '12px' }}
              >
                Loading…
              </iframe>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}