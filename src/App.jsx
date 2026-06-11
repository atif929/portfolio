import { useState, useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import AppRoutes from '@/routes/AppRoutes'
import ScrollToTop from '@/components/common/ScrollToTop'
import LoadingScreen from '@/components/common/LoadingScreen'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <BrowserRouter>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        {loading ? (
          <LoadingScreen key="loading" />
        ) : (
          <AppRoutes key="app" />
        )}
      </AnimatePresence>
    </BrowserRouter>
  )
}

export default App