import { motion } from 'framer-motion'
import SkillCard from './SkillCard'

const SkillCategory = ({ category, data, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card p-6 flex flex-col gap-5"
    >
      {/* Header */}
      <div className="flex items-center gap-3">
        <span className="text-2xl">{data.icon}</span>
        <h3 className="text-text font-bold text-base">{category}</h3>
        <span className="ml-auto text-muted text-xs font-medium">
          {data.items.length} skills
        </span>
      </div>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-primary/30 via-primary/10 to-transparent" />

      {/* Skills */}
      <div className="flex flex-col gap-4">
        {data.items.map((skill, i) => (
          <SkillCard
            key={skill.name}
            name={skill.name}
            level={skill.level}
            index={i}
          />
        ))}
      </div>
    </motion.div>
  )
}

export default SkillCategory