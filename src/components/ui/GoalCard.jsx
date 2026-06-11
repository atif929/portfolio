import { motion } from 'framer-motion'

const statusColors = {
  'In Progress': 'bg-accent/10 border-accent/20 text-accent',
  'Planned':     'bg-primary/10 border-primary/20 text-primary',
  'Completed':   'bg-green-500/10 border-green-500/20 text-green-400',
}

const GoalCard = ({ goal, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="card p-6 flex flex-col gap-4 group hover:border-primary/30"
    >
      {/* Top */}
      <div className="flex items-start justify-between gap-3">
        <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-2xl flex-shrink-0">
          {goal.icon}
        </div>
        <span className={`inline-flex items-center px-2.5 py-1 rounded-full border text-xs font-semibold ${statusColors[goal.status]}`}>
          {goal.status}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-text font-bold text-base leading-snug group-hover:text-primary transition-colors duration-300">
        {goal.title}
      </h3>

      {/* Description */}
      <p className="text-muted text-sm leading-relaxed flex-1">
        {goal.description}
      </p>

      {/* Timeline */}
      <div className="flex items-center gap-2 pt-2 border-t border-card-border">
        <span className="text-primary text-xs">🗓</span>
        <span className="text-muted text-xs font-medium">Target: {goal.timeline}</span>
      </div>
    </motion.div>
  )
}

export default GoalCard