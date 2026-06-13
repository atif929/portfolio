import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

const stats = [
  { value: 5,   suffix: '+',  label: 'Projects Built',       icon: '🚀' },
  { value: 15,  suffix: '+',  label: 'Technologies',         icon: '⚙️' },
  { value: 15,  suffix: '',   label: 'Certifications',       icon: '🏆' },
  { value: 3.14, suffix: '',  label: 'GPA',                  icon: '🎓', decimal: true },
]

const CountUp = ({ value, suffix, decimal }) => {
  const [display, setDisplay] = useState('0')
  const ref = useRef(null)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true) },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [started])

  useEffect(() => {
    if (!started) return
    let start = 0
    const end = value
    const duration = 2000
    const startTime = Date.now()

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = start + (end - start) * eased

      setDisplay(decimal ? current.toFixed(2) : Math.floor(current).toString())
      if (progress === 1) clearInterval(timer)
    }, 16)

    return () => clearInterval(timer)
  }, [started, value, decimal])

  return (
    <span ref={ref} className="text-4xl sm:text-5xl font-black text-gradient-primary">
      {display}{suffix}
    </span>
  )
}

const StatisticsSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Divider */}
        <div className="section-divider mb-16" />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card p-6 flex flex-col items-center text-center gap-3 group hover:border-primary/30"
            >
              <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </span>
              <CountUp
                value={stat.value}
                suffix={stat.suffix}
                decimal={stat.decimal}
              />
              <p className="text-muted text-sm font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="section-divider mt-16" />
      </div>
    </section>
  )
}

export default StatisticsSection