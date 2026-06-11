import { motion } from 'framer-motion'

const ProjectFilter = ({ categories, active, onSelect }) => {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {categories.map((cat) => (
        <motion.button
          key={cat}
          onClick={() => onSelect(cat)}
          whileTap={{ scale: 0.95 }}
          className={`
            px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300
            ${active === cat
              ? 'bg-gradient-primary text-white shadow-glow-sm'
              : 'bg-card border border-card-border text-muted hover:text-text hover:border-primary/30'
            }
          `}
        >
          {cat}
        </motion.button>
      ))}
    </div>
  )
}

export default ProjectFilter