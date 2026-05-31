const certifications = [
  {
    title: 'Data Visualization in Power BI',
    issuer: 'Tata Group',
    date: 'January 2025',
    description:
      'Mastered data visualization techniques using Microsoft Power BI for business intelligence and analytics.',
    certificateUrl: '/certificates/powerbi.pdf',
    color: 'var(--primary)',
    icon: '📊',
    skills: ['Power BI', 'Data Visualization', 'Business Intelligence', 'Analytics'],
  },
  {
    title: 'Masterclass in AI & ML',
    issuer: 'NoviTech R&D Pvt Ltd',
    date: 'August 2024 – September 2024',
    description:
      'Comprehensive masterclass covering advanced AI and Machine Learning concepts.',
    certificateUrl: '/certificates/ai-ml.pdf',
    color: 'var(--secondary)',
    icon: '🤖',
    skills: ['Machine Learning', 'Deep Learning', 'Neural Networks', 'AI Development'],
  },
  {
    title: 'Master in Software Engineering',
    issuer: 'Apollo Groups of Colleges',
    date: 'May 2023 – May 2024',
    description: 'Software engineering program covering design principles and development methodologies.',
    color: 'var(--accent)',
    icon: '💻',
    skills: ['Software Engineering', 'System Design', 'Agile', 'Best Practices'],
  },
];
const Certifications: React.FC = () => {
  return (
    <div className="grid gap-4">
      {certifications.map((cert) => (
        <div
          key={cert.title}
          className="p-4 border rounded flex flex-col"
          style={{ borderColor: cert.color }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">{cert.icon}</div>
            <div>
              <h3 className="font-semibold">{cert.title}</h3>
              <p className="text-sm text-muted">{cert.issuer} • {cert.date}</p>
              <p className="mt-2 text-sm">{cert.description}</p>
            </div>
          </div>

          <a
            href={cert.certificateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-medium mt-auto transition-colors hover:opacity-80"
            style={{ color: cert.color }}
          >
            <FiExternalLink className="w-3 h-3" />
            View Certificate
          </a>
        </div>
      ))}
    </div>
  )
}

export default Certifications