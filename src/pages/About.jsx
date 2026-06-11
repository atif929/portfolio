import PageTransition from '@/components/common/PageTransition'
import Container from '@/components/common/Container'
import SectionHeading from '@/components/common/SectionHeading'
import AboutIntro from '@/components/about/AboutIntro'
import EducationCard from '@/components/about/EducationCard'
import ExperienceTimeline from '@/components/about/ExperienceTimeline'

const About = () => {
  return (
    <PageTransition>
      <div className="py-20 flex flex-col gap-20">

        {/* ── Intro ── */}
        <Container>
          <AboutIntro />
        </Container>

        {/* ── Education ── */}
        <Container>
          <div className="flex flex-col gap-10">
            <SectionHeading
              label="Education"
              title="Academic"
              highlight="Background"
              align="left"
            />
            <EducationCard />
          </div>
        </Container>

        {/* ── Experience ── */}
        <Container>
          <div className="flex flex-col gap-10">
            <SectionHeading
              label="Experience"
              title="Work"
              highlight="History"
              align="left"
            />
            <ExperienceTimeline />
          </div>
        </Container>

      </div>
    </PageTransition>
  )
}

export default About