import { motion } from 'framer-motion'

const orbs = [
  { color: '#6366F1', size: 500, top: '5%',   left: '-5%',  delay: 0, duration: 8  },
  { color: '#8B5CF6', size: 400, top: '50%',  right: '-5%', delay: 2, duration: 10 },
  { color: '#06B6D4', size: 300, bottom: '5%',left: '30%',  delay: 4, duration: 7  },
]

const AnimatedBackground = ({ showGrid = true, showOrbs = true }) => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">

      {showOrbs && orbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width:      orb.size,
            height:     orb.size,
            background: orb.color,
            top:        orb.top,
            left:       orb.left,
            right:      orb.right,
            bottom:     orb.bottom,
            filter:     'blur(120px)',
            opacity:    0.18,
          }}
          animate={{ y: [-20, 20, -20], x: [-10, 10, -10] }}
          transition={{ duration: orb.duration, delay: orb.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      {showGrid && (
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(99,102,241,0.06) 1px, transparent 1px),
              linear-gradient(90deg, rgba(99,102,241,0.06) 1px, transparent 1px)
            `,
            backgroundSize: '64px 64px',
          }}
        />
      )}

      <div
        className="absolute inset-x-0 top-0 h-96"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(99,102,241,0.35), transparent)',
        }}
      />
    </div>
  )
}

export default AnimatedBackground