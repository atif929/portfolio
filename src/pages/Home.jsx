import PageTransition from '@/components/common/PageTransition'
import HeroSection from '@/components/hero/HeroSection'
import TechMarquee from '@/components/hero/TechMarquee'
import StatisticsSection from '@/components/hero/StatisticsSection'

const Home = () => {
  return (
    <PageTransition>
      <HeroSection />
      <TechMarquee />
      <StatisticsSection />
    </PageTransition>
  )
}

export default Home