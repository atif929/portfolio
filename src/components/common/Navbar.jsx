import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'

const navLinks = [
  { name: 'Home',           path: '/' },
  { name: 'About',          path: '/about' },
  { name: 'Projects',       path: '/projects' },
  { name: 'Skills',         path: '/skills' },
  { name: 'Certifications', path: '/certifications' },
  { name: 'Goals',          path: '/goals' },
  { name: 'Contact',        path: '/contact' },
]

const Navbar = () => {
  const [isScrolled,     setIsScrolled]     = useState(false)
  const [isMobileOpen,   setIsMobileOpen]   = useState(false)
  const location = useLocation()

  // Glass effect on scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => { setIsMobileOpen(false) }, [location])

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isMobileOpen])

  const isActive = (path) =>
    path === '/' ? location.pathname === '/' : location.pathname === path

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className={`
          fixed top-0 left-0 right-0 z-navbar
          transition-all duration-300
          ${isScrolled
            ? 'bg-background/80 backdrop-blur-lg border-b border-card-border shadow-glass'
            : 'bg-transparent'
          }
        `}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">

            {/* ── Logo ── */}
            <Link to="/" className="flex items-center gap-2 group">
              <motion.div
                className="w-9 h-9 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow-sm"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                <span className="text-white font-black text-base">A</span>
              </motion.div>
              <span className="text-text font-bold text-lg tracking-tight group-hover:text-primary transition-colors duration-300">
                Atif<span className="text-primary">.</span>
              </span>
            </Link>

            {/* ── Desktop Links ── */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`
                    relative px-4 py-2 rounded-lg text-sm font-medium
                    transition-all duration-300
                    ${isActive(link.path)
                      ? 'text-primary'
                      : 'text-muted hover:text-text'
                    }
                  `}
                >
                  {isActive(link.path) && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute inset-0 bg-primary/10 rounded-lg border border-primary/20"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </Link>
              ))}
            </div>

            {/* ── Desktop CTA ── */}
            <div className="hidden lg:flex items-center gap-3">
              <motion.a
                href="/Atif_Rameez_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-gradient-primary text-white text-sm font-semibold shadow-glow-sm hover:shadow-glow-primary hover:-translate-y-0.5 transition-all duration-300"
                whileTap={{ scale: 0.97 }}
              >
                Resume
              </motion.a>
            </div>

            {/* ── Mobile Hamburger ── */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="lg:hidden p-2 rounded-lg text-muted hover:text-text hover:bg-card transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isMobileOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>

          </div>
        </div>
      </motion.nav>

      {/* ── Mobile Menu ── */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileOpen(false)}
              className="fixed inset-0 z-40 bg-background/60 backdrop-blur-sm lg:hidden"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-card border-l border-card-border shadow-2xl lg:hidden flex flex-col"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between p-6 border-b border-card-border">
                <span className="text-text font-bold text-lg">
                  Atif<span className="text-primary">.</span>
                </span>
                <button
                  onClick={() => setIsMobileOpen(false)}
                  className="p-2 rounded-lg text-muted hover:text-text hover:bg-background transition-colors"
                >
                  <HiX size={20} />
                </button>
              </div>

              {/* Drawer Links */}
              <nav className="flex flex-col gap-1 p-4 flex-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                  >
                    <Link
                      to={link.path}
                      className={`
                        flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium
                        transition-all duration-200
                        ${isActive(link.path)
                          ? 'bg-primary/10 text-primary border border-primary/20'
                          : 'text-muted hover:text-text hover:bg-background'
                        }
                      `}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Drawer Footer */}
              <div className="p-6 border-t border-card-border">
                <a
                  href="/Atif_Rameez_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full px-5 py-3 rounded-xl bg-gradient-primary text-white text-sm font-semibold shadow-glow-sm"
                >
                  Download Resume
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar