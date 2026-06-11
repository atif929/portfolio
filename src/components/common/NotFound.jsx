import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center flex flex-col items-center gap-6 px-4"
      >
        <span className="text-8xl font-black text-gradient-primary">404</span>
        <h1 className="text-3xl font-bold text-text">Page Not Found</h1>
        <p className="text-muted text-base max-w-md">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="px-6 py-3 rounded-xl bg-gradient-primary text-white font-semibold text-sm shadow-glow-sm hover:shadow-glow-primary hover:-translate-y-0.5 transition-all duration-300"
        >
          Back to Home
        </Link>
      </motion.div>
    </div>
  )
}

export default NotFound