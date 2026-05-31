import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const skillCategories = [
  {
    title: 'Programming Languages',
    color: 'var(--primary)',
    icon: '💻',
    skills: ['Python', 'Java', 'JavaScript', 'SQL'],
  },
  {
    title: 'AI & Machine Learning',
    color: 'var(--secondary)',
    icon: '🧠',
    skills: [
      'TensorFlow',
      'Scikit-Learn',
      'OpenCV',
      'Keras',
      'Deep Learning',
      'Computer Vision',
    ],
  },
  {
    title: 'Frontend Development',
    color: 'var(--accent)',
    icon: '🎨',
    skills: ['React JS', 'HTML5', 'CSS3', 'Bootstrap', 'Tailwind CSS'],
  },
  {
    title: 'Data Analytics',
    color: '#FF6B6B',
    icon: '📊',
    skills: ['Power BI', 'Data Analysis', 'Data Visualization'],
  },
  {
    title: 'Tools & Platforms',
    color: '#FFD93D',
    icon: '🛠️',
    skills: ['GitHub', 'VS Code', 'Figma', 'MySQL', 'Git'],
  },
  {
    title: 'Soft Skills',
    color: '#FF8C42',
    icon: '🌟',
    skills: [
      'Analytical Thinking',
      'Problem Solving',
      'Team Collaboration',
      'Technical Communication',
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
    margin: '-80px',
  });

  return (
    <section
      id="skills"
      className="section-padding relative"
      ref={ref}
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 rounded-full opacity-5 blur-3xl"
          style={{
            background:
              'radial-gradient(circle, var(--secondary), transparent)',
          }}
        />
      </div>

      <div className="container-max px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="tag mb-4 inline-block">
            Technologies & Expertise
          </span>

          <h2 className="section-title">
            Technical{' '}
            <span className="text-gradient">
              Skills
            </span>
          </h2>

          <p className="section-subtitle">
            Technologies, frameworks, tools, and concepts I use to build
            intelligent software solutions.
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {skillCategories.map((cat, index) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="card group hover:-translate-y-2 transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-lg"
                  style={{
                    background: `${cat.color}20`,
                    border: `1px solid ${cat.color}40`,
                  }}
                >
                  {cat.icon}
                </div>

                <h3 className="font-bold text-(--text-primary) font-['Space_Grotesk'] text-sm">
                  {cat.title}
                </h3>
              </div>

              {/* Skill Tags */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{
                      scale: 1.05,
                    }}
                    className="px-3 py-2 rounded-lg text-sm font-medium border cursor-default"
                    style={{
                      background: `${cat.color}15`,
                      borderColor: `${cat.color}40`,
                      color: cat.color,
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technology Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.6,
            delay: 0.8,
          }}
        />
      </div>
    </section>
  );
}