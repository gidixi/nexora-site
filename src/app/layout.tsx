import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Nexora — Production MEV Bot on Polygon',
  description: 'Production-grade MEV infrastructure on Polygon. Sandwich, backrun and flash loan arbitrage in a single Rust engine with Yul smart contracts.',
  keywords: ['MEV', 'Polygon', 'sandwich bot', 'arbitrage', 'DeFi', 'Rust', 'Yul', 'flash loan'],
  openGraph: {
    title: 'Nexora — Production MEV Bot on Polygon',
    description: 'Production-grade MEV infrastructure. Rust engine + Yul contracts. Sandwich · Backrun · Flash Loan Arb.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
