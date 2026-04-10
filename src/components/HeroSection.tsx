export default function HeroSection() {
  return (
    <section className="hero-pt section-page-x" style={{
      paddingBottom: 60,
      maxWidth: 960, margin: '0 auto',
      textAlign: 'center',
    }}>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}>
        <span className="badge badge-neutral" style={{ fontSize: 11, padding: '4px 12px', borderRadius: 6 }}>
          Pre-production · Polygon PoS
        </span>
      </div>

      {/* Title */}
      <h1 style={{
        fontSize: 'clamp(28px, 7vw, 52px)', fontWeight: 700,
        lineHeight: 1.12, letterSpacing: '-0.04em', margin: '0 0 20px',
        color: 'var(--text)',
      }}>
        Execution infrastructure
        <span style={{
          display: 'block',
          marginTop: 4,
          color: 'var(--text-muted)',
          fontWeight: 600,
        }}>for DEX-related strategies on Polygon</span>
      </h1>

      <p style={{
        fontSize: 'clamp(14px, 3vw, 17px)', color: 'var(--text-muted)', lineHeight: 1.75,
        maxWidth: 600, margin: '0 auto 36px', fontWeight: 400,
      }}>
        A single <span style={{ color: 'var(--text)' }}>Rust</span> runtime coordinates order-flow,
        post-fill, and flash-loan-assisted paths against compact{' '}
        <span style={{ color: 'var(--text)' }}>Yul</span> executors. The stack is in active
        development: contracts are exercised on-chain for testing; live trading metrics will be published
        when we open a controlled release. Nexora is <strong style={{ color: 'var(--text)', fontWeight: 600 }}>proprietary software</strong>
        {' '}— source code is not open source and is not publicly distributed. Technical documentation and runbooks are shared with authorized licensees under agreement.
      </p>

      {/* CTA */}
      <div className="hero-cta-row" style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
        <a href="#architecture" className="btn btn-primary" style={{ fontSize: 14, padding: '10px 22px' }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
          </svg>
          Technical overview
        </a>
        <a href="#waitlist" className="btn btn-secondary" style={{ fontSize: 14, padding: '10px 22px' }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 2L11 13M22 2L15 22 11 13 2 9l20-7z"/>
          </svg>
          Request access / updates
        </a>
      </div>

      {/* Mono stack line */}
      <div style={{
        marginTop: 48, fontFamily: 'var(--font-mono)', fontSize: 11,
        color: 'var(--text-sub)', display: 'flex', flexWrap: 'wrap',
        justifyContent: 'center', gap: '4px 10px',
      }}>
        {[
          { label: 'Rust', color: 'var(--text-sub)' },
          { label: 'Yul', color: 'var(--text-sub)' },
          { label: 'Foundry', color: 'var(--text-sub)' },
          { label: 'Balancer V2', color: 'var(--text-sub)' },
          { label: 'Polygon PoS', color: 'var(--text-sub)' },
          { label: 'Foundry + Rust tests', color: 'var(--text-sub)' },
        ].map(({ label, color }) => (
          <span key={label} style={{ color }}>{label}</span>
        ))}
      </div>
    </section>
  )
}
