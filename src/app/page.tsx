import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import StatsBar from '@/components/StatsBar'
import ArchitectureSection from '@/components/ArchitectureSection'
import StrategiesSection from '@/components/StrategiesSection'
import ContractsSection from '@/components/ContractsSection'
import PerformanceSection from '@/components/PerformanceSection'
import WaitlistSection from '@/components/WaitlistSection'
import TrustDisclaimer from '@/components/TrustDisclaimer'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="main-safe-bottom" style={{ minHeight: '100vh', background: 'var(--bg-base)' }}>
      <Header />
      <HeroSection />
      <StatsBar />
      <StrategiesSection />
      <ArchitectureSection />
      <ContractsSection />
      <PerformanceSection />
      <WaitlistSection />
      <TrustDisclaimer />
      <Footer />
    </main>
  )
}
