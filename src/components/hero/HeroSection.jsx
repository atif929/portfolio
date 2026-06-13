import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiMail } from 'react-icons/fi'
import Button from '@/components/ui/Button'
import HeroSocialLinks from './HeroSocialLinks'

const roles = [
  'Software Engineer',
  'AI/ML Enthusiast',
  'Full Stack Developer',
  'FastAPI Developer',
  'React Developer',
]

const fadeUp = {
  initial:  { opacity: 0, y: 40 },
  animate:  { opacity: 1, y: 0 },
}

const HeroSection = () => {
  const [roleIndex,  setRoleIndex]  = useState(0)
  const [displayed,  setDisplayed]  = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80)
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 40)
    } else {
      setIsDeleting(false)
      setRoleIndex((prev) => (prev + 1) % roles.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, isDeleting, roleIndex])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">

      <div className="absolute inset-0 bg-hero-gradient pointer-events-none" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Left ── */}
          <div className="flex flex-col gap-6 order-2 lg:order-1">

            <motion.div
              variants={fadeUp} initial="initial" animate="animate"
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-primary animate-ping-slow" />
                Available for opportunities
              </span>
            </motion.div>

            <motion.div
              variants={fadeUp} initial="initial" animate="animate"
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col gap-2"
            >
              <span className="text-muted text-lg font-medium">Hello, I'm</span>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-none">
                <span className="text-text">Atif </span>
                <span className="text-gradient-primary">Rameez</span>
              </h1>
            </motion.div>

            <motion.div
              variants={fadeUp} initial="initial" animate="animate"
              transition={{ duration: 0.6, delay: 0.3 }}
              className="h-10 flex items-center"
            >
              <span className="text-xl sm:text-2xl font-semibold text-muted">
                {displayed}
                <span className="inline-block w-0.5 h-6 bg-primary ml-1 animate-pulse" />
              </span>
            </motion.div>

            <motion.p
              variants={fadeUp} initial="initial" animate="animate"
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-muted text-base sm:text-lg leading-relaxed max-w-lg"
            >
              Software Engineering student at Sukkur IBA building AI-powered software
              solutions that merge intelligent systems with modern web experiences.
            </motion.p>

            <motion.div
              variants={fadeUp} initial="initial" animate="animate"
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/projects">
                <Button variant="primary" size="lg" icon={<FiArrowRight />} iconPosition="right">
                  View Projects
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="secondary" size="lg" icon={<FiMail />} iconPosition="right">
                  Contact Me
                </Button>
              </Link>
            </motion.div>

            <motion.div
              variants={fadeUp} initial="initial" animate="animate"
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <HeroSocialLinks />
            </motion.div>

            <motion.div
              variants={fadeUp} initial="initial" animate="animate"
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex items-center gap-8 pt-2"
            >
              {[
                { value: '6+',   label: 'Projects Built' },
                { value: '15+',  label: 'Technologies' },
                { value: '3.14', label: 'GPA' },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col gap-0.5">
                  <span className="text-2xl font-black text-gradient-primary">{stat.value}</span>
                  <span className="text-muted text-xs font-medium">{stat.label}</span>
                </div>
              ))}
            </motion.div>

          </div>

          {/* ── Right — Image ── */}
          <motion.div
            className="flex items-center justify-center order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative flex-shrink-0">
              <div className="absolute -inset-4 rounded-full bg-gradient-primary opacity-20 blur-xl animate-pulse-glow" />
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary via-secondary to-accent animate-spin-slow opacity-70" />
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-background">
                <img
                  src="/src/assets/images/hero.png"
                  alt="Atif Rameez"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.parentElement.style.background = 'linear-gradient(135deg, #6366F1, #8B5CF6)'
                    e.target.parentElement.innerHTML = '<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center"><span style="color:white;font-size:4rem;font-weight:900">AR</span></div>'
                  }}
                />
              </div>

              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-2 -right-2 glass-card px-3 py-2 rounded-xl"
              >
                <span className="text-xs font-semibold text-text">⚡ React Dev</span>
              </motion.div>

              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-2 -left-2 glass-card px-3 py-2 rounded-xl"
              >
                <span className="text-xs font-semibold text-text">🚀 Open to Work</span>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <span className="text-muted text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          className="w-0.5 h-8 bg-gradient-to-b from-primary to-transparent rounded-full"
          animate={{ scaleY: [1, 0.5, 1], opacity: [1, 0.4, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </motion.div>

    </section>
  )
}

export default HeroSection