import { motion } from 'framer-motion'

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
    >
      <div className="flex flex-col items-center gap-6">
        {/* Logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-glow-primary"
        >
          <span className="text-white font-black text-3xl">A</span>
        </motion.div>

        {/* Bar */}
        <div className="w-48 h-1 bg-card rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-primary rounded-full"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
          />
        </div>

        <p className="text-muted text-sm font-medium tracking-widest uppercase">
          Loading...
        </p>
      </div>
    </motion.div>
  )
}

export default LoadingScreen