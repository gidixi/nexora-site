'use client'
import { useState, useEffect } from 'react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navItems = ['Architecture', 'Strategies', 'Contracts', 'Performance']

  return (
    <>
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        height: 'var(--header-height)',
        background: scrolled || menuOpen ? 'rgba(13,17,23,0.97)' : 'transparent',
        borderBottom: scrolled || menuOpen ? '1px solid var(--border)' : '1px solid transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        transition: 'all 0.2s ease',
        display: 'flex', alignItems: 'center', padding: '0 16px',
        justifyContent: 'space-between',
      }}>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 28, height: 28, borderRadius: 6,
            background: 'linear-gradient(135deg, var(--blue-dim), var(--purple))',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 14, fontWeight: 800, color: '#fff', fontFamily: 'var(--font-mono)',
            flexShrink: 0,
          }}>N</div>
          <span style={{ fontWeight: 700, fontSize: 15, letterSpacing: '-0.3px' }}>Nexora</span>
          <span className="badge badge-warning" style={{ marginLeft: 4 }}>Simulation</span>
        </div>

        {/* Desktop nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: 4 }} className="desktop-nav">
          {navItems.map(item => (
            <a key={item}
              href={`#${item.toLowerCase()}`}
              style={{ padding: '5px 10px', borderRadius: 6, fontSize: 13, color: 'var(--text-muted)', transition: 'var(--transition)' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
            >{item}</a>
          ))}
          <a href="#waitlist" className="btn btn-primary" style={{ marginLeft: 8 }}>Join Waitlist</a>
        </nav>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(o => !o)}
          className="mobile-hamburger"
          style={{
            background: 'none', border: 'none', cursor: 'pointer',
            color: 'var(--text)', padding: 6, borderRadius: 6,
            display: 'none',
          }}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
          )}
        </button>
      </header>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="mobile-menu" style={{
          position: 'fixed', top: 'var(--header-height)', left: 0, right: 0,
          zIndex: 99, background: 'rgba(13,17,23,0.97)',
          borderBottom: '1px solid var(--border)',
          backdropFilter: 'blur(12px)',
          padding: '12px 16px 20px',
          display: 'flex', flexDirection: 'column', gap: 4,
        }}>
          {navItems.map(item => (
            <a key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              style={{
                padding: '10px 12px', borderRadius: 6,
                fontSize: 14, color: 'var(--text-muted)',
                display: 'block', transition: 'var(--transition)',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = 'var(--bg-elevated)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
            >{item}</a>
          ))}
          <a
            href="#waitlist"
            onClick={() => setMenuOpen(false)}
            className="btn btn-primary"
            style={{ marginTop: 8, justifyContent: 'center', padding: '10px' }}
          >Join Waitlist</a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-hamburger { display: flex !important; }
        }
      `}</style>
    </>
  )
}
