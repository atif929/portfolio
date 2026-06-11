import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Home           from '@/pages/Home'
import About          from '@/pages/About'
import Projects       from '@/pages/Projects'
import Skills         from '@/pages/Skills'
import Certifications from '@/pages/Certifications'
import Goals          from '@/pages/Goals'
import Contact        from '@/pages/Contact'
import MainLayout     from '@/layouts/MainLayout'
import NotFound       from '@/components/common/NotFound'

const AppRoutes = () => {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<MainLayout />}>
          <Route path="/"               element={<Home />} />
          <Route path="/about"          element={<About />} />
          <Route path="/projects"       element={<Projects />} />
          <Route path="/skills"         element={<Skills />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/goals"          element={<Goals />} />
          <Route path="/contact"        element={<Contact />} />
          <Route path="*"               element={<NotFound />} />
        </Route>
      </Routes>
    </AnimatePresence>
  )
}

export default AppRoutes