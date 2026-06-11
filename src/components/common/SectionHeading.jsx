import { motion } from 'framer-motion'

const SectionHeading = ({
  label = '',
  title = '',
  highlight = '',
  subtitle = '',
  align = 'center',
  className = '',
}) => {
  const alignClass = {
    center: 'text-center items-center',
    left:   'text-left items-start',
    right:  'text-right items-end',
  }

  return (
    <motion.div
      className={`flex flex-col gap-3 ${alignClass[align]} ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
    >
      {/* Label */}
      {label && (
        <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase text-primary">
          <span className="w-6 h-px bg-primary" />
          {label}
          <span className="w-6 h-px bg-primary" />
        </span>
      )}

      {/* Title */}
      {title && (
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text leading-tight">
          {title}{' '}
          {highlight && (
            <span className="text-gradient-primary">{highlight}</span>
          )}
        </h2>
      )}

      {/* Animated underline */}
      <motion.div
        className="h-1 rounded-full bg-gradient-primary"
        initial={{ width: 0 }}
        whileInView={{ width: align === 'center' ? '80px' : '60px' }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
      />

      {/* Subtitle */}
      {subtitle && (
        <p className="text-muted text-base sm:text-lg max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}

export default SectionHeading