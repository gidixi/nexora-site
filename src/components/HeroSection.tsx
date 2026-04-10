import { NEXORA_DOCS_REPO_URL } from '@/lib/site'

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
        when we open a controlled release.{' '}
        <a href={NEXORA_DOCS_REPO_URL} target="_blank" rel="noopener noreferrer" className="footer-link" style={{ color: 'var(--blue)' }}>
          Full documentation
        </a>
        {' '}— build, tests, and deployment — lives in the Nexora repository on GitHub.
      </p>

      {/* CTA */}
      <div className="hero-cta-row" style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
        <a href={NEXORA_DOCS_REPO_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ fontSize: 14, padding: '10px 22px' }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
          </svg>
          Documentation on GitHub
        </a>
        <a href="#architecture" className="btn btn-secondary" style={{ fontSize: 14, padding: '10px 22px' }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
          </svg>
          On-page overview
        </a>
      </div>
      <p style={{ marginTop: 16, marginBottom: 0, fontSize: 13, color: 'var(--text-sub)' }}>
        <a href="#waitlist" style={{ color: 'var(--text-muted)' }}>Request product updates</a>
        <span style={{ margin: '0 8px', color: 'var(--border)' }}>·</span>
        <a href={NEXORA_DOCS_REPO_URL} target="_blank" rel="noopener noreferrer" className="footer-link" style={{ color: 'var(--text-muted)' }}>
          Repository ↗
        </a>
      </p>

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
          { label: '281 tests (repo)', color: 'var(--text-sub)' },
        ].map(({ label, color }) => (
          <span key={label} style={{ color }}>{label}</span>
        ))}
      </div>
    </section>
  )
}
