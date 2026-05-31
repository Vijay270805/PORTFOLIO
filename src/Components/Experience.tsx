import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';

const experiences = [
  {
    title: 'AI Intern',
    company: 'Global Techno Solution',
    duration: 'June 2025 – July 2025',
    location: 'Chennai, India',
    type: 'Internship',
    color: 'var(--primary)',
    responsibilities: [
      'Built supervised machine learning models using Python and Scikit-Learn.',
      'Performed feature engineering and data preprocessing on real-world datasets.',
      'Conducted model validation, hyperparameter tuning, and optimization.',
      'Collaborated on AI development workflows and cross-functional teams.',
    ],
    skills: ['Python', 'Scikit-Learn', 'Machine Learning', 'Data Preprocessing'],
  },
  {
    title: 'Frontend Web Development Intern',
    company: 'Coderz Vision Technology',
    duration: 'June 2025',
    location: 'Chennai, India',
    type: 'Internship',
    color: 'var(--secondary)',
    responsibilities: [
      'Improved UI responsiveness across multiple web applications.',
      'Enhanced cross-device and cross-browser compatibility.',
      'Participated in Agile development sprints and stand-up meetings.',
      'Contributed through code reviews, debugging, and feature development.',
    ],
    skills: ['React JS', 'HTML/CSS', 'JavaScript', 'Agile', 'Debugging'],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="experience" className="section-padding relative" ref={ref}>
      <div className="container-max px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="tag mb-4 inline-block">Work History</span>
          <h2 className="section-title">Professional <span className="text-gradient">Experience</span></h2>
          <p className="section-subtitle">My internship and work experience in the tech industry</p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Central timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--primary)] via-[var(--secondary)] to-transparent opacity-30 hidden md:block" />

          <div className="flex flex-col gap-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2 + i * 0.2 }}
                className={`relative flex flex-col md:flex-row gap-6 items-start ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Card */}
                <div className="flex-1 card group relative">
                  {/* Color accent bar */}
                  <div
                    className="absolute top-0 left-0 w-1 h-full rounded-l-xl"
                    style={{ background: exp.color }}
                  />
                  <div className="pl-4">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span
                            className="text-xs font-semibold px-2 py-0.5 rounded-full"
                            style={{
                              background: `${exp.color}20`,
                              color: exp.color,
                              border: `1px solid ${exp.color}40`,
                            }}
                          >
                            {exp.type}
                          </span>
                        </div>
                        <h3 className="font-bold text-[var(--text-primary)] font-['Space_Grotesk'] text-lg">
                          {exp.title}
                        </h3>
                        <p className="font-semibold" style={{ color: exp.color }}>
                          {exp.company}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1 text-[var(--text-secondary)] text-sm mb-1">
                          <FiCalendar className="w-3 h-3" />
                          {exp.duration}
                        </div>
                        <div className="flex items-center gap-1 text-[var(--text-secondary)] text-sm">
                          <FiMapPin className="w-3 h-3" />
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-4">
                      {exp.responsibilities.map((r, ri) => (
                        <li key={ri} className="flex items-start gap-2 text-[var(--text-secondary)] text-sm">
                          <span
                            className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                            style={{ background: exp.color }}
                          />
                          {r}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map(s => (
                        <span
                          key={s}
                          className="text-xs px-2 py-0.5 rounded-full font-medium"
                          style={{
                            background: `${exp.color}10`,
                            color: exp.color,
                            border: `1px solid ${exp.color}30`,
                          }}
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="hidden md:flex flex-shrink-0 w-12 items-center justify-center">
                  <motion.div
                    className="w-10 h-10 rounded-full flex items-center justify-center relative z-10"
                    style={{
                      background: `linear-gradient(135deg, ${exp.color}, ${exp.color}80)`,
                      boxShadow: `0 0 20px ${exp.color}50`,
                    }}
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.2 }}
                  >
                    <FiBriefcase className="text-white w-4 h-4" />
                  </motion.div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
