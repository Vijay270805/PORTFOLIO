import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiBook, FiAward } from 'react-icons/fi';

const educationData = [
  {
    degree: 'B.E. Computer Science Engineering (AI & ML)',
    institution: 'Vel Tech High Tech Dr. Rangarajan Dr. Sathunthala Engineering College',
    period: '2022 – 2026',
    grade: 'CGPA: 8.23',
    gradeLabel: 'Current',
    description: 'Specializing in Artificial Intelligence and Machine Learning. Core coursework in Deep Learning, Computer Vision, Data Structures, Algorithms, and Software Engineering.',
    color: 'var(--primary)',
    icon: '🎓',
    highlights: ['AI & ML Specialization', 'CGPA 8.23', 'Final Year Student', 'Multiple Projects'],
  },
  {
    degree: 'Higher Secondary Certificate (HSC)',
    institution: 'Tamil Nadu State Board',
    period: '2020 – 2022',
    grade: '85%',
    gradeLabel: 'Score',
    description: 'Completed Higher Secondary education with strong focus on Mathematics, Physics, Chemistry, and Computer Science.',
    color: 'var(--secondary)',
    icon: '📚',
    highlights: ['Science Stream', '85% Score', 'Mathematics & CS Focus'],
  },
  {
    degree: 'Secondary School Leaving Certificate (SSLC)',
    institution: 'Tamil Nadu State Board',
    period: '2019 – 2020',
    grade: '85%',
    gradeLabel: 'Score',
    description: 'Completed secondary education with distinction, establishing a strong foundation in core subjects.',
    color: 'var(--accent)',
    icon: '🏫',
    highlights: ['Distinction', '85% Score', 'All Subjects'],
  },
];

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="education" className="section-padding relative" ref={ref}>
      <div className="container-max px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="tag mb-4 inline-block">Academic Background</span>
          <h2 className="section-title">My <span className="text-gradient">Education</span></h2>
          <p className="section-subtitle">Academic journey and educational qualifications</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--primary)] via-[var(--secondary)] to-[var(--accent)] opacity-30 md:left-8" />

            <div className="flex flex-col gap-8">
              {educationData.map((edu, i) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.2 }}
                  className="flex gap-6 md:gap-8"
                >
                  {/* Timeline dot */}
                  <div className="flex-shrink-0 relative">
                    <motion.div
                      className="w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center text-xl relative z-10"
                      style={{
                        background: `linear-gradient(135deg, ${edu.color}20, ${edu.color}10)`,
                        border: `2px solid ${edu.color}50`,
                      }}
                      initial={{ scale: 0 }}
                      animate={inView ? { scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: 0.3 + i * 0.2 }}
                    >
                      {edu.icon}
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-2">
                    <div className="card group relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-1 h-full rounded-l-xl"
                        style={{ background: edu.color }} />
                      <div className="pl-4">
                        <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                          <div>
                            <h3 className="font-bold text-[var(--text-primary)] font-['Space_Grotesk'] text-base leading-snug mb-1">
                              {edu.degree}
                            </h3>
                            <div className="flex items-center gap-2">
                              <FiBook className="w-3 h-3 flex-shrink-0" style={{ color: edu.color }} />
                              <p className="text-[var(--text-secondary)] text-sm">{edu.institution}</p>
                            </div>
                          </div>
                          <div className="text-right flex-shrink-0">
                            <div
                              className="font-bold font-['Space_Grotesk'] text-lg"
                              style={{ color: edu.color }}
                            >
                              {edu.grade}
                            </div>
                            <div className="text-[var(--text-secondary)] text-xs">{edu.gradeLabel}</div>
                            <div className="text-[var(--text-secondary)] text-xs mt-0.5">{edu.period}</div>
                          </div>
                        </div>

                        <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-3">
                          {edu.description}
                        </p>

                        <div className="flex flex-wrap gap-1.5">
                          {edu.highlights.map(h => (
                            <span
                              key={h}
                              className="text-xs px-2 py-0.5 rounded-full font-medium flex items-center gap-1"
                              style={{
                                background: `${edu.color}10`,
                                color: edu.color,
                                border: `1px solid ${edu.color}25`,
                              }}
                            >
                              <FiAward className="w-2.5 h-2.5" />
                              {h}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
