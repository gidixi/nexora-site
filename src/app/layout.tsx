import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Nexora — Polygon execution infrastructure',
  description:
    'Proprietary Rust execution stack and compact Yul executors on Polygon PoS. Pre-production: simulation, testing, and controlled validation—not open source.',
  keywords: ['Polygon', 'DeFi', 'execution', 'arbitrage', 'MEV', 'Rust', 'Yul', 'smart contracts'],
  openGraph: {
    title: 'Nexora — Polygon execution infrastructure',
    description:
      'Proprietary Rust engine and Yul executors for DEX-related strategies. Pre-production; on-chain addresses may be verified on PolygonScan.',
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
