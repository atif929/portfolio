import { lazy, Suspense } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import MainLayout  from '@/layouts/MainLayout'
import NotFound    from '@/components/common/NotFound'

// ── Lazy load all pages ──────────────────────────────────
const Home           = lazy(() => import('@/pages/Home'))
const About          = lazy(() => import('@/pages/About'))
const Projects       = lazy(() => import('@/pages/Projects'))
const Skills         = lazy(() => import('@/pages/Skills'))
const Certifications = lazy(() => import('@/pages/Certifications'))
const Goals          = lazy(() => import('@/pages/Goals'))
const Contact        = lazy(() => import('@/pages/Contact'))

// ── Page loader fallback ─────────────────────────────────
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="flex flex-col items-center gap-4">
      <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow-sm animate-pulse">
        <span className="text-white font-black text-lg">A</span>
      </div>
      <div className="w-32 h-1 bg-card rounded-full overflow-hidden">
        <div className="h-full bg-gradient-primary rounded-full animate-shimmer" />
      </div>
    </div>
  </div>
)

const AppRoutes = () => {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<MainLayout />}>
          <Route path="/" element={
            <Suspense fallback={<PageLoader />}><Home /></Suspense>
          } />
          <Route path="/about" element={
            <Suspense fallback={<PageLoader />}><About /></Suspense>
          } />
          <Route path="/projects" element={
            <Suspense fallback={<PageLoader />}><Projects /></Suspense>
          } />
          <Route path="/skills" element={
            <Suspense fallback={<PageLoader />}><Skills /></Suspense>
          } />
          <Route path="/certifications" element={
            <Suspense fallback={<PageLoader />}><Certifications /></Suspense>
          } />
          <Route path="/goals" element={
            <Suspense fallback={<PageLoader />}><Goals /></Suspense>
          } />
          <Route path="/contact" element={
            <Suspense fallback={<PageLoader />}><Contact /></Suspense>
          } />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </AnimatePresence>
  )
}

export default AppRoutes