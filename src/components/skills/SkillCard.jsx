import { motion } from 'framer-motion'

const SkillCard = ({ name, level, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="flex flex-col gap-2"
    >
      {/* Name + Level */}
      <div className="flex items-center justify-between">
        <span className="text-text text-sm font-medium">{name}</span>
        <span className="text-primary text-xs font-semibold">{level}%</span>
      </div>

      {/* Progress bar */}
      <div className="h-1.5 w-full bg-card-border rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-primary"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: index * 0.05 + 0.2, ease: [0.4, 0, 0.2, 1] }}
        />
      </div>
    </motion.div>
  )
}

export default SkillCard