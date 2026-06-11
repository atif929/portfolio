import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink, FiStar } from 'react-icons/fi'

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card p-6 flex flex-col gap-4 group h-full"
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex flex-col gap-1 flex-1">
          {/* Category + Featured badge */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="tag">{project.category}</span>
            {project.featured && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold">
                <FiStar size={10} />
                Featured
              </span>
            )}
          </div>
          {/* Date */}
          <span className="text-muted text-xs mt-1">{project.date}</span>
        </div>

        {/* Links */}
        <div className="flex items-center gap-2 flex-shrink-0">
          {project.github && (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-background border border-card-border text-muted hover:text-primary hover:border-primary/40 flex items-center justify-center transition-all duration-200"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label="GitHub"
            >
              <FiGithub size={15} />
            </motion.a>
          )}
          {project.live && (
            <motion.a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-background border border-card-border text-muted hover:text-accent hover:border-accent/40 flex items-center justify-center transition-all duration-200"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Live Demo"
            >
              <FiExternalLink size={15} />
            </motion.a>
          )}
        </div>
      </div>

      {/* Title */}
      <h3 className="text-text font-bold text-lg leading-tight group-hover:text-primary transition-colors duration-300">
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-muted text-sm leading-relaxed line-clamp-3 flex-1">
        {project.description}
      </p>

      {/* Highlights */}
      {project.highlights && (
        <ul className="flex flex-col gap-1.5">
          {project.highlights.slice(0, 2).map((h, i) => (
            <li key={i} className="flex items-start gap-2 text-xs text-muted">
              <span className="text-primary mt-0.5 flex-shrink-0">▹</span>
              {h}
            </li>
          ))}
        </ul>
      )}

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-1.5 pt-2 border-t border-card-border">
        {project.stack.map((tech) => (
          <span key={tech} className="skill-badge text-xs py-1 px-2">
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default ProjectCard