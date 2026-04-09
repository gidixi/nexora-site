'use client'
import { useState } from 'react'
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import StatsBar from '@/components/StatsBar'
import ArchitectureSection from '@/components/ArchitectureSection'
import StrategiesSection from '@/components/StrategiesSection'
import ContractsSection from '@/components/ContractsSection'
import PerformanceSection from '@/components/PerformanceSection'
import WaitlistSection from '@/components/WaitlistSection'
import Footer from '@/components/Footer'

export default function Home() {
  const [waitlistCount] = useState(0)
  return (
    <main style={{ minHeight: '100vh', background: 'var(--bg-base)' }}>
      <Header />
      <HeroSection />
      <StatsBar />
      <StrategiesSection />
      <ArchitectureSection />
      <ContractsSection />
      <PerformanceSection />
      <WaitlistSection count={waitlistCount} />
      <Footer />
    </main>
  )
}
