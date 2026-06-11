import { motion } from 'framer-motion'
import { FiExternalLink, FiAward } from 'react-icons/fi'

const CertificationCard = ({ cert, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="card p-5 flex flex-col gap-4 group hover:border-primary/30"
    >
      {/* Top row */}
      <div className="flex items-start justify-between gap-3">
        {/* Icon + Category */}
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-xl flex-shrink-0">
            {cert.icon}
          </div>
          <span className="tag">{cert.category}</span>
        </div>

        {/* Verify link */}
        {cert.link && (
          <motion.a
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Verify Certificate"
            className="w-8 h-8 rounded-lg bg-background border border-card-border text-muted hover:text-primary hover:border-primary/40 flex items-center justify-center transition-all duration-200 flex-shrink-0"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiExternalLink size={14} />
          </motion.a>
        )}
      </div>

      {/* Title */}
      <div className="flex flex-col gap-1">
        <h3 className="text-text font-bold text-sm leading-snug group-hover:text-primary transition-colors duration-300">
          {cert.title}
        </h3>
        <p className="text-primary text-xs font-semibold">{cert.issuer}</p>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-2 border-t border-card-border">
        <div className="flex items-center gap-1.5 text-muted text-xs">
          <FiAward size={12} className="text-primary" />
          {cert.badge || 'Verified Certificate'}
        </div>
        <span className="text-muted text-xs">{cert.date}</span>
      </div>
    </motion.div>
  )
}

export default CertificationCard    