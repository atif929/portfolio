import { useState, useEffect, lazy, Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import ScrollToTop    from '@/components/common/ScrollToTop'
import LoadingScreen  from '@/components/common/LoadingScreen'

const AppRoutes = lazy(() => import('@/routes/AppRoutes'))

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
          <Suspense fallback={null}>
            <AppRoutes key="app" />
          </Suspense>
        )}
      </AnimatePresence>
    </BrowserRouter>
  )
}

export default App