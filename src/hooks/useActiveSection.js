import { useEffect, useState } from 'react'

const useActiveSection = (sectionIds = [], offset = 100) => {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    if (sectionIds.length === 0) return

    const handleScroll = () => {
      const scrollY = window.scrollY

      // Find which section is currently in view
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const element = document.getElementById(sectionIds[i])
        if (!element) continue

        const top = element.offsetTop - offset
        if (scrollY >= top) {
          setActiveSection(sectionIds[i])
          return
        }
      }

      // Default to first section if at top
      setActiveSection(sectionIds[0] || '')
    }

    handleScroll() // run once on mount
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [sectionIds, offset])

  return activeSection
}

export default useActiveSection