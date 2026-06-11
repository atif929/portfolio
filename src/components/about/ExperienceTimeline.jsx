import { motion } from 'framer-motion'
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi'

const experiences = [
  {
    role:        'Software Development Project Contributor',
    company:     'Sukkur IBA',
    location:    'Sukkur, Pakistan',
    period:      '2023 — Present',
    type:        'Academic',
    description: 'Built and contributed to backend functionality using FastAPI in academic projects. Designed and tested RESTful APIs, implemented data preprocessing and analysis workflows for ML-based applications. Collaborated with peers using Git and GitHub for version control.',
    stack:       ['FastAPI', 'Python', 'Git', 'GitHub', 'REST APIs', 'Machine Learning'],
  },
  {
    role:        'Event Organizer — Sibathon Hackathon',
    company:     'Sukkur IBA',
    location:    'Sukkur, Pakistan',
    period:      '2024',
    type:        'Leadership',
    description: 'Led the organization of a university-wide hackathon with 300+ participants, managing end-to-end event execution. Coordinated logistics, scheduling, and communication between participants, mentors, and judges.',
    stack:       ['Event Management', 'Team Leadership', 'Project Coordination'],
  },
  {
    role:        'Executive Member',
    company:     'Computer Science Society, Sukkur IBA',
    location:    'Sukkur, Pakistan',
    period:      '2023 — Present',
    type:        'Society',
    description: 'Worked in a cross-functional team of 8 to organize technical workshops, seminars, and coding events. Mentored junior students in programming, debugging, and problem-solving techniques.',
    stack:       ['Mentoring', 'Workshop Organization', 'Community Building'],
  },
]

const ExperienceTimeline = () => (
  <div className="relative flex flex-col gap-0">
    <div className="absolute left-6 top-0 bottom-0 w-px bg-card-border" />
    {experiences.map((exp, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: i * 0.15 }}
        className="relative flex gap-6 pb-10 last:pb-0"
      >
        <div className="relative z-10 flex-shrink-0">
          <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
            <FiBriefcase className="text-primary" size={20} />
          </div>
        </div>
        <div className="flex-1 card p-5 flex flex-col gap-3">
          <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-primary/10 border border-primary/20 text-primary text-xs font-semibold w-fit">
            {exp.type}
          </span>
          <div>
            <h3 className="text-text font-bold text-lg">{exp.role}</h3>
            <p className="text-primary font-semibold text-sm">{exp.company}</p>
          </div>
          <div className="flex flex-wrap gap-4 text-muted text-sm">
            <span className="flex items-center gap-1.5">
              <FiCalendar size={13} className="text-primary" />
              {exp.period}
            </span>
            <span className="flex items-center gap-1.5">
              <FiMapPin size={13} className="text-primary" />
              {exp.location}
            </span>
          </div>
          <p className="text-muted text-sm leading-relaxed">{exp.description}</p>
          <div className="flex flex-wrap gap-2">
            {exp.stack.map((tech) => (
              <span key={tech} className="skill-badge">{tech}</span>
            ))}
          </div>
        </div>
      </motion.div>
    ))}
  </div>
)

export default ExperienceTimeline