export default function HeroSection() {
  return (
    <section className="hero-pt section-page-x" style={{
      paddingBottom: 60,
      maxWidth: 960, margin: '0 auto',
      textAlign: 'center',
    }}>
      {/* Live badge */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          background: 'var(--bg-surface)', border: '1px solid var(--border)',
          borderRadius: 20, padding: '5px 14px', fontSize: 12,
          flexWrap: 'wrap', justifyContent: 'center', textAlign: 'center',
        }}>
          <span className="conn-dot live" />
          <span style={{ color: 'var(--text-muted)' }}>Simulation on </span>
          <span style={{ color: 'var(--green)', fontFamily: 'var(--font-mono)' }}>Polygon PoS</span>
          <span style={{ color: 'var(--text-muted)' }}>· Live Q2 2026</span>
        </div>
      </div>

      {/* Title */}
      <h1 style={{
        fontSize: 'clamp(28px, 7vw, 56px)', fontWeight: 800,
        lineHeight: 1.1, letterSpacing: '-1px', margin: '0 0 20px',
      }}>
        Production MEV
        <span style={{
          display: 'block',
          background: 'linear-gradient(90deg, var(--blue), var(--purple))',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
        }}>Infrastructure on Polygon</span>
      </h1>

      <p style={{
        fontSize: 'clamp(14px, 3vw, 17px)', color: 'var(--text-muted)', lineHeight: 1.7,
        maxWidth: 620, margin: '0 auto 36px', fontWeight: 400,
      }}>
        Sandwich · Backrun · Flash Loan Arbitrage — three MEV strategies
        in a single <span style={{ color: 'var(--text)' }}>Rust engine</span> with
        Yul smart contracts deployed on mainnet.
        Built for searchers who take execution seriously.
      </p>

      {/* CTA */}
      <div className="hero-cta-row" style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
        <a href="#waitlist" className="btn btn-primary" style={{ fontSize: 14, padding: '10px 22px' }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 2L11 13M22 2L15 22 11 13 2 9l20-7z"/>
          </svg>
          Join Waitlist
        </a>
        <a href="#architecture" className="btn btn-secondary" style={{ fontSize: 14, padding: '10px 22px' }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
          </svg>
          View on GitHub
        </a>
      </div>

      {/* Mono stack line */}
      <div style={{
        marginTop: 48, fontFamily: 'var(--font-mono)', fontSize: 11,
        color: 'var(--text-sub)', display: 'flex', flexWrap: 'wrap',
        justifyContent: 'center', gap: '4px 10px',
      }}>
        {[
          { label: 'rust', color: 'var(--green)' },
          { label: 'yul', color: 'var(--blue)' },
          { label: 'foundry', color: 'var(--purple)' },
          { label: 'balancer v2', color: 'var(--cyan)' },
          { label: 'polygon pos', color: 'var(--yellow)' },
          { label: '281 tests', color: 'var(--text-muted)' },
        ].map(({ label, color }) => (
          <span key={label} style={{ color }}>{label}</span>
        ))}
      </div>
    </section>
  )
}
