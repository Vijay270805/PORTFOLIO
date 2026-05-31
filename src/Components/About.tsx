import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiUser, FiMapPin, FiMail, FiPhone, FiAward } from 'react-icons/fi';

const stats = [
  { label: 'CGPA', value: '8.23', icon: '🎓' },
  { label: 'Projects Completed', value: '10+', icon: '🚀' },
  { label: 'Certifications', value: '3+', icon: '📜' },
  { label: 'Internship Experience', value: '2', icon: '💼' },
  { label: 'ML Models Built', value: '15+', icon: '🤖' },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section-padding relative" ref={ref}>
      <div className="container-max px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="tag mb-4 inline-block">Who I Am</span>
          <h2 className="section-title">About <span className="text-gradient">Me</span></h2>
          <p className="section-subtitle">Get to know more about my background and journey</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="glass rounded-2xl p-8 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--primary)]/20 to-[var(--secondary)]/20 border border-[var(--primary)]/30 flex items-center justify-center">
                  <FiUser className="text-[var(--primary)] w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-[var(--text-primary)] font-['Space_Grotesk']">Vijay D</h3>
                  <p className="text-[var(--primary)] text-sm">Final Year AI & ML Student</p>
                </div>
              </div>

              <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
                I am an AI/ML-focused Computer Science Engineering student with hands-on experience in
                Machine Learning, Deep Learning, Computer Vision, and Software Development.
              </p>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
                My expertise includes Python, TensorFlow, Scikit-Learn, OpenCV, Java, React JS, and Data Analytics.
                I enjoy building intelligent systems that solve real-world problems.
              </p>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                I continuously explore advancements in Artificial Intelligence, Software Engineering,
                Financial Markets, and Emerging Technologies.
              </p>
            </div>

            {/* Contact Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: FiMapPin, label: 'Location', value: 'Chennai, TN, India' },
                { icon: FiMail, label: 'Email', value: 'vijayd2708@gmail.com' },
                { icon: FiPhone, label: 'Phone', value: '+91 9445942708' },
                { icon: FiAward, label: 'Status', value: 'Open to Opportunities' },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="glass rounded-xl p-4 flex items-center gap-3 glass-hover">
                  <div className="w-9 h-9 rounded-lg bg-[var(--primary)]/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="text-[var(--primary)] w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[var(--text-secondary)] text-xs">{label}</p>
                    <p className="text-[var(--text-primary)] text-sm font-medium truncate">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className={`card text-center ${i === 4 ? 'col-span-2' : ''}`}
                >
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-gradient font-bold font-['Space_Grotesk'] text-3xl mb-1">
                    {stat.value}
                  </div>
                  <div className="text-[var(--text-secondary)] text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Currently Learning */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mt-4 glass rounded-xl p-5"
            >
              <p className="text-[var(--primary)] text-sm font-semibold mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
                Currently Exploring
              </p>
              <div className="flex flex-wrap gap-2">
                {['LangChain', 'LLM Fine-tuning', 'RAG Systems', 'MLOps', 'Docker', 'FastAPI'].map(t => (
                  <span key={t} className="tag text-xs">{t}</span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
