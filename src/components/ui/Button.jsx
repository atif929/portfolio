import { motion } from 'framer-motion'

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  disabled = false,
  fullWidth = false,
  icon,
  iconPosition = 'right',
  className = '',
  ...props
}) => {

  const base = `
    inline-flex items-center justify-center gap-2 font-semibold
    rounded-xl transition-all duration-300 cursor-pointer
    focus-visible:outline-none focus-visible:ring-2
    focus-visible:ring-primary focus-visible:ring-offset-2
    focus-visible:ring-offset-background disabled:opacity-50
    disabled:cursor-not-allowed select-none
  `

  const variants = {
    primary: `
      bg-gradient-primary text-white shadow-glow-sm
      hover:shadow-glow-primary hover:-translate-y-0.5
      active:translate-y-0
    `,
    secondary: `
      bg-card border border-card-border text-text
      hover:border-primary hover:text-primary
      hover:-translate-y-0.5 active:translate-y-0
    `,
    outline: `
      bg-transparent border border-primary text-primary
      hover:bg-primary hover:text-white
      hover:-translate-y-0.5 active:translate-y-0
    `,
    ghost: `
      bg-transparent text-muted
      hover:text-text hover:bg-card
      active:translate-y-0
    `,
    accent: `
      bg-gradient-accent text-white shadow-glow-sm
      hover:shadow-glow-accent hover:-translate-y-0.5
      active:translate-y-0
    `,
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
    xl: 'px-10 py-5 text-lg',
  }

  const classes = `
    ${base}
    ${variants[variant]}
    ${sizes[size]}
    ${fullWidth ? 'w-full' : ''}
    ${className}
  `

  const content = (
    <>
      {icon && iconPosition === 'left'  && <span className="flex-shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="flex-shrink-0">{icon}</span>}
    </>
  )

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileTap={{ scale: 0.97 }}
        {...props}
      >
        {content}
      </motion.a>
    )
  }

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      className={classes}
      whileTap={{ scale: 0.97 }}
      {...props}
    >
      {content}
    </motion.button>
  )
}

export default Button