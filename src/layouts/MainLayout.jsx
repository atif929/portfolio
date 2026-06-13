import { Outlet } from 'react-router-dom'
import Navbar from '@/components/common/Navbar'
import Footer from '@/components/common/Footer'
import AnimatedBackground from '@/components/ui/AnimatedBackground'

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-background text-text flex flex-col relative">
      <AnimatedBackground showGrid={true} showOrbs={true} />
      <Navbar />
      <main className="flex-1 pt-16 lg:pt-20 relative z-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout