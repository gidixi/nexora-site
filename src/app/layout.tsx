import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Nexora — Polygon execution infrastructure',
  description:
    'Rust-based execution stack and compact Yul executors on Polygon PoS. Pre-production: simulation, testing, and controlled validation.',
  keywords: ['Polygon', 'DeFi', 'execution', 'arbitrage', 'MEV', 'Rust', 'Yul', 'smart contracts'],
  openGraph: {
    title: 'Nexora — Polygon execution infrastructure',
    description:
      'Rust engine and Yul executors for DEX-related strategies. Pre-production; metrics and addresses are disclosed for verification where applicable.',
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
