import PageTransition from '@/components/common/PageTransition'
import Container from '@/components/common/Container'
import SectionHeading from '@/components/common/SectionHeading'
import SkillCategory from '@/components/skills/SkillCategory'
import { skills } from '@/data/skills'

const Skills = () => {
  return (
    <PageTransition>
      <div className="py-20">
        <Container>
          <div className="flex flex-col gap-12">

            {/* Heading */}
            <SectionHeading
              label="Expertise"
              title="My"
              highlight="Skills"
              subtitle="Technologies, frameworks, and tools I work with across full stack development, AI/ML, and data science."
              align="center"
            />

            {/* Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {Object.entries(skills).map(([category, data], index) => (
                <SkillCategory
                  key={category}
                  category={category}
                  data={data}
                  index={index}
                />
              ))}
            </div>

            {/* Bottom summary */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
              {[
                { value: '6+',  label: 'Languages' },
                { value: '15+', label: 'Frameworks' },
                { value: '10+', label: 'ML Libraries' },
                { value: '5+',  label: 'Projects Shipped' },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="card p-5 flex flex-col items-center gap-1 text-center"
                >
                  <span className="text-3xl font-black text-gradient-primary">
                    {stat.value}
                  </span>
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

export default Skills