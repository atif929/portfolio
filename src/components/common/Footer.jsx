import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiTwitter } from 'react-icons/fi'

const navLinks = [
  { name: 'Home',           path: '/' },
  { name: 'About',          path: '/about' },
  { name: 'Projects',       path: '/projects' },
  { name: 'Skills',         path: '/skills' },
  { name: 'Certifications', path: '/certifications' },
  { name: 'Goals',          path: '/goals' },
  { name: 'Contact',        path: '/contact' },
]

const socialLinks = [
  { icon: <FiGithub size={18} />,   href: 'https://github.com/atif929',                              label: 'GitHub' },
  { icon: <FiLinkedin size={18} />, href: 'https://www.linkedin.com/in/atif-rameez-b92ba7390/',      label: 'LinkedIn' },
  { icon: <FiMail size={18} />,     href: 'mailto:atifsiyal580@gmail.com',                            label: 'Email' },
]

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-card-border bg-background">

      {/* Top glow line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* ── Brand ── */}
          <div className="flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-2 w-fit group">
              <div className="w-9 h-9 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow-sm">
                <span className="text-white font-black text-base">A</span>
              </div>
              <span className="text-text font-bold text-lg tracking-tight">
                Atif<span className="text-primary">.</span>
              </span>
            </Link>
            <p className="text-muted text-sm leading-relaxed max-w-xs">
              Full Stack Developer building scalable, performant, and beautiful digital experiences.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3 mt-1">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg bg-card border border-card-border text-muted hover:text-primary hover:border-primary/40 flex items-center justify-center transition-all duration-300"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* ── Quick Links ── */}
          <div className="flex flex-col gap-4">
            <h4 className="text-text font-semibold text-sm tracking-widest uppercase">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted text-sm hover:text-primary transition-colors duration-200 underline-grow w-fit"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contact ── */}
          <div className="flex flex-col gap-4">
            <h4 className="text-text font-semibold text-sm tracking-widest uppercase">
              Get In Touch
            </h4>
            <p className="text-muted text-sm leading-relaxed">
              Open to new opportunities, collaborations, and interesting projects.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-primary text-white text-sm font-semibold shadow-glow-sm hover:shadow-glow-primary hover:-translate-y-0.5 transition-all duration-300 w-fit"
            >
              Let's Talk
            </Link>
          </div>

        </div>

        {/* ── Bottom Bar ── */}
        <div className="mt-10 pt-6 border-t border-card-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-muted text-sm">
            © {currentYear} Atif Rameez. All rights reserved.
          </p>
          <p className="text-muted text-sm">
            Built with{' '}
            <span className="text-primary font-medium">React</span>
            {' '}+{' '}
            <span className="text-primary font-medium">Tailwind CSS</span>
            {' '}+{' '}
            <span className="text-primary font-medium">Framer Motion</span>
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer