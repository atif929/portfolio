import { motion } from 'framer-motion'
import { FiBook, FiCalendar, FiMapPin } from 'react-icons/fi'

const education = [
  {
    degree:      'Bachelor of Science in Software Engineering',
    institution: 'Sukkur Institute of Business Administration (IBA)',
    location:    'Sukkur, Pakistan',
    period:      '2023 — 2027',
    grade:       '3.14 / 4.00 GPA',
    courses:     ['Data Structures & Algorithms', 'Object-Oriented Programming', 'Software Development Lifecycle', 'System Design', 'API Development', 'Machine Learning'],
  },
]

const EducationCard = () => (
  <div className="flex flex-col gap-6">
    {education.map((edu, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: i * 0.1 }}
        className="card p-6 flex flex-col gap-4"
      >
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
            <FiBook className="text-primary" size={22} />
          </div>
          <div className="flex flex-col gap-1 flex-1">
            <h3 className="text-text font-bold text-lg leading-tight">{edu.degree}</h3>
            <p className="text-primary font-semibold text-sm">{edu.institution}</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 text-muted text-sm">
          <span className="flex items-center gap-1.5">
            <FiCalendar size={14} className="text-primary" />
            {edu.period}
          </span>
          <span className="flex items-center gap-1.5">
            <FiMapPin size={14} className="text-primary" />
            {edu.location}
          </span>
        </div>
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary/10 border border-primary/20 w-fit">
          <span className="text-primary text-xs font-semibold">🎓 {edu.grade}</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {edu.courses.map((course) => (
            <span key={course} className="tag">{course}</span>
          ))}
        </div>
      </motion.div>
    ))}
  </div>
)

export default EducationCard