import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PageTransition from '@/components/common/PageTransition'
import Container from '@/components/common/Container'
import SectionHeading from '@/components/common/SectionHeading'
import ProjectCard from '@/components/projects/ProjectCard'
import ProjectFilter from '@/components/projects/ProjectFilter'
import { projects, categories } from '@/data/projects'

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory)

  return (
    <PageTransition>
      <div className="py-20">
        <Container>
          <div className="flex flex-col gap-12">

            {/* Heading */}
            <SectionHeading
              label="Portfolio"
              title="My"
              highlight="Projects"
              subtitle="A collection of AI/ML systems, full stack applications, and computer vision projects I've built."
              align="center"
            />

            {/* Filter */}
            <ProjectFilter
              categories={categories}
              active={activeCategory}
              onSelect={setActiveCategory}
            />

            {/* Grid */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {filtered.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                  />
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Empty state */}
            {filtered.length === 0 && (
              <div className="text-center py-20">
                <p className="text-muted text-lg">No projects in this category yet.</p>
              </div>
            )}

          </div>
        </Container>
      </div>
    </PageTransition>
  )
}

export default Projects