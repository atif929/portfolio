import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiDownload } from 'react-icons/fi'
import Button from '@/components/ui/Button'

const roles = [
  'Software Engineer',
  'Full Stack Developer',
  'AI/ML Enthusiast',
  'React & FastAPI Dev',
  'Problem Solver',
]

const fadeUp = {
  initial:  { opacity: 0, y: 40 },
  animate:  { opacity: 1, y: 0 },
}

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  // Typewriter effect
  useEffect(() => {
    const current = roles[roleIndex]
    let timeout

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80)
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 40)
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false)
      setRoleIndex((prev) => (prev + 1) % roles.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, isDeleting, roleIndex])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">

      {/* ── Background Effects ── */}
      <div className="absolute inset-0 bg-hero-gradient pointer-events-none" />
      <div className="absolute inset-0 bg-mesh pointer-events-none opacity-60" />

      {/* Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 orb orb-primary opacity-20 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 orb orb-secondary opacity-15 blur-3xl animation-delay-2000" />
      <div className="absolute top-3/4 left-1/2 w-64 h-64 orb orb-accent opacity-10 blur-3xl animation-delay-4000" />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />

      {/* ── Content ── */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Left — Text ── */}
          <div className="flex flex-col gap-6 order-2 lg:order-1">

            {/* Badge */}
            <motion.div
              variants={fadeUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center gap-2 w-fit"
            >
              <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-primary animate-ping-slow" />
                Available for opportunities
              </span>
            </motion.div>

            {/* Greeting */}
            <motion.div
              variants={fadeUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col gap-2"
            >
              <span className="text-muted text-lg font-medium">
                Hello, I'm
              </span>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-none">
                <span className="text-text">Atif </span>
                <span className="text-gradient-primary">Rameez</span>
              </h1>
            </motion.div>

            {/* Typewriter Role */}
            <motion.div
              variants={fadeUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center gap-2 h-10"
            >
              <span className="text-xl sm:text-2xl font-semibold text-muted">
                {displayed}
                <span className="inline-block w-0.5 h-6 bg-primary ml-1 animate-pulse" />
              </span>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-muted text-base sm:text-lg leading-relaxed max-w-lg"
            >
              I build scalable, performant, and visually stunning web applications.
              Passionate about clean code, great UX, and turning ideas into reality.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/projects">
                <Button
                  variant="primary"
                  size="lg"
                  icon={<FiArrowRight />}
                  iconPosition="right"
                >
                  View Projects
                </Button>
              </Link>
              <Button
                variant="secondary"
                size="lg"
                href="/Atif_Rameez_Resume.pdf"
                icon={<FiDownload />}
                iconPosition="right"
              >
                Download CV
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center gap-8 pt-2"
            >
              {[
                  { value: '6+',  label: 'Projects Built' },
                  { value: '15+', label: 'Technologies' },
                  { value: '3.14', label: 'GPA' },
                ].map((stat) => (
                <div key={stat.label} className="flex flex-col gap-0.5">
                  <span className="text-2xl font-black text-gradient-primary">
                    {stat.value}
                  </span>
                  <span className="text-muted text-xs font-medium">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>

          </div>

          {/* ── Right — Profile Image ── */}
          <motion.div
            className="flex items-center justify-center order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="relative">

              {/* Outer ring */}
              <div className="absolute -inset-4 rounded-full bg-gradient-primary opacity-20 blur-xl animate-pulse-glow" />

              {/* Rotating border */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary via-secondary to-accent animate-spin-slow opacity-70" />

              {/* Image container */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-background">
                <img
                  src="/src/assets/images/hero.png"
                  alt="Atif Rameez"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback if image not found
                    e.target.style.display = 'none'
                    e.target.parentElement.classList.add('bg-gradient-primary', 'flex', 'items-center', 'justify-center')
                    e.target.parentElement.innerHTML = '<span class="text-white font-black text-6xl">AR</span>'
                  }}
                />
              </div>

              {/* Floating badge — top right */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-2 -right-4 glass-card px-3 py-2 rounded-xl shadow-glass"
              >
                <span className="text-xs font-semibold text-text">⚡ React Dev</span>
              </motion.div>

              {/* Floating badge — bottom left */}
              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-2 -left-4 glass-card px-3 py-2 rounded-xl shadow-glass"
              >
                <span className="text-xs font-semibold text-text">🚀 Open to Work</span>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>

      {/* ── Scroll indicator ── */}
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