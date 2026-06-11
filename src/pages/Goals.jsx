import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageTransition from '@/components/common/PageTransition'
import Container from '@/components/common/Container'
import SectionHeading from '@/components/common/SectionHeading'
import GoalCard from '@/components/ui/GoalCard'
import { goals } from '@/data/goals'

const Goals = () => {
  return (
    <PageTransition>
      <div className="py-20">
        <Container>
          <div className="flex flex-col gap-16">

            <SectionHeading
              label="Roadmap"
              title="My"
              highlight="Goals"
              subtitle="Where I'm headed — short-term milestones and long-term ambitions driving my growth as an engineer."
              align="center"
            />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative glass-card p-8 text-center"
            >
              <span className="text-4xl mb-4 block">🎯</span>
              <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-3">
                Vision Statement
              </p>
              <p className="text-text text-lg sm:text-xl font-medium leading-relaxed max-w-3xl mx-auto">
                "{goals.vision}"
              </p>
            </motion.div>

            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">⚡</span>
                  <h2 className="text-2xl font-bold text-text">
                    Short-Term <span className="text-gradient-primary">Goals</span>
                  </h2>
                </div>
                <div className="flex-1 h-px bg-gradient-to-r from-primary/30 to-transparent" />
                <span className="tag">2025 — 2026</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {goals.shortTerm.map((goal, index) => (
                  <GoalCard key={goal.id} goal={goal} index={index} />
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🌟</span>
                  <h2 className="text-2xl font-bold text-text">
                    Long-Term <span className="text-gradient-primary">Goals</span>
                  </h2>
                </div>
                <div className="flex-1 h-px bg-gradient-to-r from-primary/30 to-transparent" />
                <span className="tag">2026 — 2028</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {goals.longTerm.map((goal, index) => (
                  <GoalCard key={goal.id} goal={goal} index={index} />
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center flex flex-col items-center gap-4"
            >
              <p className="text-muted text-base max-w-xl">
                Interested in collaborating or have an opportunity that aligns with my goals?
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-primary text-white font-semibold text-sm shadow-glow-sm hover:shadow-glow-primary hover:-translate-y-0.5 transition-all duration-300"
              >
                Let's Connect →
              </Link>
            </motion.div>

          </div>
        </Container>
      </div>
    </PageTransition>
  )
}

export default Goals