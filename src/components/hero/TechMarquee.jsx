import { motion } from 'framer-motion'
import {
  SiPython, SiReact, SiFastapi, SiDjango, SiTensorflow,
  SiPytorch, SiScikitlearn, SiNumpy, SiPandas, SiOpencv,
  SiGit, SiGithub, SiJavascript, SiHtml5, SiCss3,
  SiMongodb, SiPostgresql, SiVercel, SiFlask, SiNodedotjs
} from 'react-icons/si'

const techs = [
  { name: 'Python',       icon: <SiPython />,      color: '#3776AB' },
  { name: 'React',        icon: <SiReact />,       color: '#61DAFB' },
  { name: 'FastAPI',      icon: <SiFastapi />,     color: '#009688' },
  { name: 'Django',       icon: <SiDjango />,      color: '#092E20' },
  { name: 'TensorFlow',   icon: <SiTensorflow />,  color: '#FF6F00' },
  { name: 'PyTorch',      icon: <SiPytorch />,     color: '#EE4C2C' },
  { name: 'Scikit-learn', icon: <SiScikitlearn />, color: '#F7931E' },
  { name: 'NumPy',        icon: <SiNumpy />,       color: '#013243' },
  { name: 'Pandas',       icon: <SiPandas />,      color: '#150458' },
  { name: 'OpenCV',       icon: <SiOpencv />,      color: '#5C3EE8' },
  { name: 'JavaScript',   icon: <SiJavascript />,  color: '#F7DF1E' },
  { name: 'Node.js',      icon: <SiNodedotjs />,   color: '#339933' },
  { name: 'Git',          icon: <SiGit />,         color: '#F05032' },
  { name: 'GitHub',       icon: <SiGithub />,      color: '#ffffff' },
  { name: 'PostgreSQL',   icon: <SiPostgresql />,  color: '#4169E1' },
  { name: 'MongoDB',      icon: <SiMongodb />,     color: '#47A248' },
  { name: 'Flask',        icon: <SiFlask />,       color: '#ffffff' },
  { name: 'Vercel',       icon: <SiVercel />,      color: '#ffffff' },
  { name: 'HTML5',        icon: <SiHtml5 />,       color: '#E34F26' },
  { name: 'CSS3',         icon: <SiCss3 />,        color: '#1572B6' },
]

const MarqueeRow = ({ items, direction = 'left', speed = 30 }) => {
  const doubled = [...items, ...items]

  return (
    <div className="flex overflow-hidden">
      <motion.div
        className="flex gap-4 flex-shrink-0"
        animate={{ x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'] }}
        transition={{ duration: speed, repeat: Infinity, ease: 'linear' }}
      >
        {doubled.map((tech, i) => (
          <div
            key={i}
            className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-card border border-card-border flex-shrink-0 hover:border-primary/30 transition-colors duration-300 group"
          >
            <span
              className="text-xl flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
              style={{ color: tech.color }}
            >
              {tech.icon}
            </span>
            <span className="text-muted text-sm font-medium whitespace-nowrap group-hover:text-text transition-colors duration-300">
              {tech.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

const TechMarquee = () => {
  const half = Math.ceil(techs.length / 2)
  const row1 = techs.slice(0, half)
  const row2 = techs.slice(half)

  return (
    <section className="py-16 bg-background relative overflow-hidden">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <div className="flex flex-col gap-4">
        <MarqueeRow items={row1} direction="left"  speed={35} />
        <MarqueeRow items={row2} direction="right" speed={28} />
      </div>
    </section>
  )
}

export default TechMarquee