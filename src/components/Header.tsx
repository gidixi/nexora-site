'use client'
import { useState, useEffect } from 'react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      height: 'var(--header-height)',
      background: scrolled ? 'rgba(13,17,23,0.95)' : 'transparent',
      borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      transition: 'all 0.2s ease',
      display: 'flex', alignItems: 'center', padding: '0 24px',
      justifyContent: 'space-between',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{
          width: 28, height: 28, borderRadius: 6,
          background: 'linear-gradient(135deg, var(--blue-dim), var(--purple))',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 14, fontWeight: 800, color: '#fff', fontFamily: 'var(--font-mono)',
        }}>N</div>
        <span style={{ fontWeight: 700, fontSize: 15, letterSpacing: '-0.3px' }}>Nexora</span>
        <span className="badge badge-warning" style={{ marginLeft: 4 }}>Simulation Phase</span>
      </div>
      <nav style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
        {['Architecture', 'Strategies', 'Contracts', 'Performance'].map(item => (
          <a key={item}
            href={`#${item.toLowerCase()}`}
            style={{ padding: '5px 10px', borderRadius: 6, fontSize: 13, color: 'var(--text-muted)', transition: 'var(--transition)' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
          >{item}</a>
        ))}
        <a href="#waitlist" className="btn btn-primary" style={{ marginLeft: 8 }}>Join Waitlist</a>
      </nav>
    </header>
  )
}
