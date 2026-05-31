import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiMail, FiLinkedin, FiGithub, FiMapPin, FiPhone, FiSend, FiUser, FiMessageSquare } from 'react-icons/fi';

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  const contactInfo = [
    { icon: FiMail, label: 'Email', value: 'vijayd2708@gmail.com', href: 'mailto:vijayd2708@gmail.com', color: 'var(--primary)' },
    { icon: FiPhone, label: 'Phone', value: '+91 9445942708', href: 'tel:+919445942708', color: 'var(--secondary)' },
    { icon: FiMapPin, label: 'Location', value: 'Chennai, Tamil Nadu, India', href: '#', color: 'var(--accent)' },
  ];

  const socialLinks = [
    { icon: FiLinkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/vijayd2708', color: '#0A66C2' },
    { icon: FiGithub, label: 'GitHub', href: 'https://github.com/vijayd2708', color: 'var(--text-secondary)' },
    { icon: FiMail, label: 'Email', href: 'mailto:vijayd2708@gmail.com', color: 'var(--primary)' },
  ];

  return (
    <section id="contact" className="section-padding relative" ref={ref}>
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full opacity-5 blur-3xl"
          style={{ background: 'radial-gradient(circle, var(--primary), transparent)' }} />
        <div className="absolute top-0 right-1/4 w-64 h-64 rounded-full opacity-5 blur-3xl"
          style={{ background: 'radial-gradient(circle, var(--secondary), transparent)' }} />
      </div>

      <div className="container-max px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="tag mb-4 inline-block">Get In Touch</span>
          <h2 className="section-title">Let's <span className="text-gradient">Connect</span></h2>
          <p className="section-subtitle">Have a project in mind or want to discuss opportunities? I'd love to hear from you!</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Left - Info */}
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
                Machine Learning, and Software Development. Whether you have a job opening, freelance project,
                or just want to connect — feel free to reach out!
              </p>

              <div className="space-y-3 mb-6">
                {contactInfo.map(({ icon: Icon, label, value, href, color }) => (
                  <a
                    key={label}
                    href={href}
                    className="flex items-center gap-3 group"
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-200 group-hover:scale-110"
                      style={{ background: `${color}15`, border: `1px solid ${color}30` }}
                    >
                      <Icon className="w-4 h-4" style={{ color }} />
                    </div>
                    <div>
                      <p className="text-[var(--text-secondary)] text-xs">{label}</p>
                      <p className="text-[var(--text-primary)] text-sm font-medium">{value}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="pt-4 border-t border-[var(--border)]">
                <p className="text-[var(--text-secondary)] text-sm mb-3">Connect with me</p>
                <div className="flex gap-3">
                  {socialLinks.map(({ icon: Icon, label, href, color }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 glass rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110"
                      style={{ '--hover-color': color } as React.CSSProperties}
                      title={label}
                    >
                      <Icon className="w-5 h-5 transition-colors duration-200" style={{ color }} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Availability Badge */}
            <div className="glass rounded-xl p-4 flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-[var(--accent)] animate-pulse flex-shrink-0" />
              <div>
                <p className="text-[var(--text-primary)] text-sm font-semibold">Available for Hire</p>
                <p className="text-[var(--text-secondary)] text-xs">Open to full-time roles & internships</p>
              </div>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass rounded-2xl p-8 text-center h-full flex flex-col items-center justify-center"
              >
                <div className="text-5xl mb-4">🎉</div>
                <h3 className="font-bold text-[var(--text-primary)] font-['Space_Grotesk'] text-xl mb-2">
                  Message Sent!
                </h3>
                <p className="text-[var(--text-secondary)] mb-6">
                  Thank you for reaching out! I'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }); }}
                  className="btn-outline"
                >
                  Send Another
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-5">
                <h3 className="font-bold text-[var(--text-primary)] font-['Space_Grotesk'] text-lg mb-2">
                  Send a Message
                </h3>

                {/* Name & Email Row */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[var(--text-secondary)] text-xs font-medium block mb-1.5">
                      Full Name *
                    </label>
                    <div className="relative">
                      <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-secondary)]" />
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="w-full bg-[var(--bg-card)] border border-[var(--border)] rounded-xl pl-10 pr-4 py-3 text-sm text-[var(--text-primary)] placeholder-[var(--text-secondary)] focus:outline-none focus:border-[var(--primary)] transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-[var(--text-secondary)] text-xs font-medium block mb-1.5">
                      Email Address *
                    </label>
                    <div className="relative">
                      <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-secondary)]" />
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="w-full bg-[var(--bg-card)] border border-[var(--border)] rounded-xl pl-10 pr-4 py-3 text-sm text-[var(--text-primary)] placeholder-[var(--text-secondary)] focus:outline-none focus:border-[var(--primary)] transition-colors"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="text-[var(--text-secondary)] text-xs font-medium block mb-1.5">
                    Subject *
                  </label>
                  <div className="relative">
                    <FiMessageSquare className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-secondary)]" />
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      required
                      placeholder="Job Opportunity / Project Discussion"
                      className="w-full bg-[var(--bg-card)] border border-[var(--border)] rounded-xl pl-10 pr-4 py-3 text-sm text-[var(--text-primary)] placeholder-[var(--text-secondary)] focus:outline-none focus:border-[var(--primary)] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[var(--text-secondary)] text-xs font-medium block mb-1.5">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project or opportunity..."
                    className="w-full bg-[var(--bg-card)] border border-[var(--border)] rounded-xl px-4 py-3 text-sm text-[var(--text-primary)] placeholder-[var(--text-secondary)] focus:outline-none focus:border-[var(--primary)] transition-colors resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full justify-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {loading ? (
                    <>
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiSend className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
