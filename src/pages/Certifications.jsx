import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PageTransition from '@/components/common/PageTransition'
import Container from '@/components/common/Container'
import SectionHeading from '@/components/common/SectionHeading'
import CertificationCard from '@/components/certifications/CertificationCard'
import { certifications, certCategories } from '@/data/certifications'

const Certifications = () => {
  const [active, setActive] = useState('All')

  const filtered = active === 'All'
    ? certifications
    : certifications.filter((c) => c.category === active)

  return (
    <PageTransition>
      <div className="py-20">
        <Container>
          <div className="flex flex-col gap-12">

            {/* Heading */}
            <SectionHeading
              label="Credentials"
              title="My"
              highlight="Certifications"
              subtitle={`${certifications.length} verified certifications across frontend, backend, AI/ML, and data science.`}
              align="center"
            />

            {/* Filter */}
            <div className="flex flex-wrap gap-2 justify-center">
              {certCategories.map((cat) => (
                <motion.button
                  key={cat}
                  onClick={() => setActive(cat)}
                  whileTap={{ scale: 0.95 }}
                  className={`
                    px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300
                    ${active === cat
                      ? 'bg-gradient-primary text-white shadow-glow-sm'
                      : 'bg-card border border-card-border text-muted hover:text-text hover:border-primary/30'
                    }
                  `}
                >
                  {cat}
                  <span className="ml-1.5 text-xs opacity-70">
                    ({cat === 'All'
                      ? certifications.length
                      : certifications.filter(c => c.category === cat).length
                    })
                  </span>
                </motion.button>
              ))}
            </div>

            {/* Grid */}
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
              >
                {filtered.map((cert, index) => (
                  <CertificationCard
                    key={cert.id}
                    cert={cert}
                    index={index}
                  />
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Summary bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { value: '15',  label: 'Total Certifications' },
                { value: '5',   label: 'Frontend Certs' },
                { value: '3',   label: 'AI/ML Certs' },
                { value: '3',   label: 'Backend Certs' },
              ].map((stat, i) => (
                <div key={i} className="card p-5 flex flex-col items-center gap-1 text-center">
                  <span className="text-3xl font-black text-gradient-primary">{stat.value}</span>
                  <span className="text-muted text-sm">{stat.label}</span>
                </div>
              ))}
            </div>

          </div>
        </Container>
      </div>
    </PageTransition>
  )
}

export default Certifications