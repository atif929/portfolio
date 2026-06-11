import { motion } from 'framer-motion'
import { FiCode, FiCpu, FiZap } from 'react-icons/fi'

const traits = [
  { icon: <FiCode size={18} />, label: 'Full Stack Development',  desc: 'React, FastAPI, Django — end to end from UI to database' },
  { icon: <FiCpu size={18} />, label: 'AI & Machine Learning',    desc: 'TensorFlow, PyTorch, Scikit-learn, NLP, Computer Vision' },
  { icon: <FiZap size={18} />, label: 'Performance Focused',      desc: 'Optimized pipelines, low-latency APIs, clean architecture' },
]

const fadeUp = {
  initial:     { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport:    { once: true, margin: '-50px' },
}

const AboutIntro = () => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

    {/* ── Left — Image ── */}
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
      className="relative flex justify-center"
    >
      <div className="relative w-72 h-72 sm:w-80 sm:h-80">
        <div className="absolute -inset-4 bg-gradient-primary rounded-3xl opacity-20 blur-2xl" />
        <div className="relative w-full h-full rounded-3xl overflow-hidden border border-card-border">
          <img
            src="/src/assets/images/hero.png"
            alt="Atif Rameez"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.style.display = 'none'
              e.target.parentElement.style.background = 'linear-gradient(135deg, #6366F1, #8B5CF6)'
              e.target.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center"><span style="color:white;font-size:5rem;font-weight:900">AR</span></div>'
            }}
          />
        </div>
        <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl bg-gradient-primary opacity-60 blur-lg" />
      </div>
    </motion.div>

    {/* ── Right — Text ── */}
    <div className="flex flex-col gap-6">
      <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }}>
        <span className="text-sm font-semibold tracking-widest uppercase text-primary">
          About Me
        </span>
        <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-text leading-tight">
          Software Engineer &{' '}
          <span className="text-gradient-primary">AI Enthusiast</span>
        </h2>
      </motion.div>

      <motion.p
        {...fadeUp}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-muted text-base leading-relaxed"
      >
        I'm Atif Rameez, a Software Engineering student at Sukkur IBA with a strong
        foundation in full stack development and AI/ML. I enjoy building scalable,
        real-time systems that solve real-world problems.
      </motion.p>

      <motion.p
        {...fadeUp}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-muted text-base leading-relaxed"
      >
        From RAG engines and AI-powered resume analyzers to computer vision systems,
        I love working across the full stack — from React interfaces to Python backends
        and machine learning pipelines.
      </motion.p>

      <div className="flex flex-col gap-3 mt-2">
        {traits.map((trait, i) => (
          <motion.div
            key={trait.label}
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
            className="flex items-start gap-3 p-4 rounded-xl bg-card border border-card-border hover:border-primary/30 transition-colors duration-300"
          >
            <span className="text-primary mt-0.5 flex-shrink-0">{trait.icon}</span>
            <div>
              <p className="text-text text-sm font-semibold">{trait.label}</p>
              <p className="text-muted text-sm">{trait.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
)

export default AboutIntro