import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

const socials = [
  {
    icon:  <FiGithub size={20} />,
    href:  'https://github.com/atif929',
    label: 'GitHub',
  },
  {
    icon:  <FiLinkedin size={20} />,
    href:  'https://www.linkedin.com/in/atif-rameez-b92ba7390/',
    label: 'LinkedIn',
  },
  {
    icon:  <FiMail size={20} />,
    href:  'mailto:atifsiyal580@gmail.com',
    label: 'Email',
  },
]

const HeroSocialLinks = () => {
  return (
    <div className="flex items-center gap-3">
      {socials.map((social, i) => (
        <motion.a
          key={social.label}
          href={social.href}
          target={social.href.startsWith('http') ? '_blank' : '_self'}
          rel="noopener noreferrer"
          aria-label={social.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.7 + i * 0.1 }}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.95 }}
          className="w-10 h-10 rounded-xl bg-card border border-card-border text-muted hover:text-primary hover:border-primary/40 flex items-center justify-center transition-all duration-300"
        >
          {social.icon}
        </motion.a>
      ))}

      {/* Divider */}
      <div className="w-px h-6 bg-card-border mx-1" />

      {/* Available badge */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="text-muted text-xs font-medium"
      >
        Open to work
      </motion.span>
    </div>
  )
}

export default HeroSocialLinks