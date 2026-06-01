import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import {
  FiGithub,
  FiShield,
  FiEye
} from "react-icons/fi";

const projects = [
  {
    id: 1,
    title: 'Intelligent File Integrity & Threat Detection Platform',
    description: 'Architected an ML-powered cybersecurity platform for identifying file integrity threats and system vulnerabilities in real-time.',
    longDescription: 'A comprehensive cybersecurity solution that leverages machine learning algorithms to detect file integrity threats, system vulnerabilities, and anomalous behaviors. Features real-time risk scoring and detailed vulnerability assessment reports.',
    highlights: [
      '85% Threat Detection Accuracy',
      'Real-Time Risk Scoring',
      'Vulnerability Assessment',
      'Anomaly Detection',
      'Machine Learning Security Analytics',
    ],
    tech: ['Python', 'Scikit-Learn', 'Machine Learning', 'Cybersecurity', 'Data Analytics'],
    category: 'ML/AI',
    icon: <FiShield className="w-6 h-6" />,
    color: 'var(--primary)',
    github: 'https://github.com/Vijay270805/SAFEHEX_project',
  },
  {
    id: 2,
    title: 'CNN-Based Optical Character Recognition System',
    description: 'Developed a deep learning OCR system achieving 90% accuracy using CNN architecture with full OpenCV preprocessing pipeline.',
    longDescription: 'A high-performance Optical Character Recognition system built using Convolutional Neural Networks (CNN). Implements a robust preprocessing pipeline with OpenCV for noise reduction, binarization, and character segmentation before feeding into the deep learning model.',
    highlights: [
      '90% Recognition Accuracy',
      'Character Segmentation',
      'OpenCV Processing Pipeline',
      'Multi-Character Recognition',
      'Real-time Processing',
    ],
    tech: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'CNN', 'Deep Learning'],
    category: 'Deep Learning',
    icon: <FiEye className="w-6 h-6" />,
    color: 'var(--secondary)',
    github: 'https://github.com/Vijay270805/ROCT-recognition-of-characters-using-Tesseract',
  },
];

const categories = ['All', 'ML/AI', 'Deep Learning'];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [expanded, setExpanded] = useState<number | null>(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const filtered = projects.filter(p => activeCategory === 'All' || p.category === activeCategory);

  return (
    <section id="projects" className="section-padding relative" ref={ref}>
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full opacity-5 blur-3xl"
          style={{ background: 'radial-gradient(circle, var(--accent), transparent)' }} />
      </div>

      <div className="container-max px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="tag mb-4 inline-block">What I Built</span>
          <h2 className="section-title">Featured <span className="text-gradient">Projects</span></h2>
          <p className="section-subtitle">Real-world applications showcasing my technical capabilities</p>
        </motion.div>

        {/* Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-3 justify-center mb-10"
        >
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-black'
                  : 'glass text-[var(--text-secondary)] hover:text-[var(--primary)] hover:border-[var(--primary)]'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card cursor-pointer group relative overflow-hidden"
                onClick={() => setExpanded(expanded === project.id ? null : project.id)}
              >
                {/* Top color bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 rounded-t-xl"
                  style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }}
                />

                <div className="flex items-start justify-between gap-4 mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: `${project.color}20`,
                      border: `1px solid ${project.color}40`,
                      color: project.color,
                    }}
                  >
                    {project.icon}
                  </div>
                  <span
                    className="text-xs font-semibold px-2 py-1 rounded-full"
                    style={{
                      background: `${project.color}15`,
                      color: project.color,
                      border: `1px solid ${project.color}30`,
                    }}
                  >
                    {project.category}
                  </span>
                </div>

                <h3 className="font-bold text-[var(--text-primary)] font-['Space_Grotesk'] text-base mb-2 leading-snug">
                  {project.title}
                </h3>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Highlights */}
                <AnimatePresence>
                  {expanded === project.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mb-4"
                    >
                      <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-3">
                        {project.longDescription}
                      </p>
                      <div className="space-y-1 mb-4">
                        {project.highlights.map(h => (
                          <div key={h} className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: project.color }} />
                            {h}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.map(t => (
                    <span
                      key={t}
                      className="text-xs px-2 py-0.5 rounded-full font-medium"
                      style={{
                        background: `${project.color}10`,
                        color: project.color,
                        border: `1px solid ${project.color}25`,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                
                {/* Actions */}
<div className="flex items-center justify-between pt-3 border-t border-[var(--border)]">
  <a
    href={project.github}
    target="_blank"
    rel="noopener noreferrer"
    onClick={(e) => e.stopPropagation()}
    className="flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors font-medium"
  >
    <FiGithub className="w-4 h-4" />
    View Repository
  </a>

  <button
    onClick={(e) => {
      e.stopPropagation();
      setExpanded(expanded === project.id ? null : project.id);
    }}
    className="text-xs text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors"
  >
    {expanded === project.id ? 'Show Less ↑' : 'Show More ↓'}
  </button>
</div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-10"
        >
          <a
            href="https://github.com/vijayd2708"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex"
          >
            <FiGithub className="w-4 h-4" />
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
