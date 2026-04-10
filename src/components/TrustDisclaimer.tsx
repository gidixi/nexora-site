export default function TrustDisclaimer() {
  return (
    <section className="section-page-x" style={{ padding: '0 0 56px', maxWidth: 720, margin: '0 auto' }}>
      <div style={{
        border: '1px solid var(--border)',
        borderRadius: 8,
        padding: '16px 18px',
        background: 'var(--bg-surface)',
      }}>
        <p style={{
          margin: 0,
          fontSize: 12,
          lineHeight: 1.65,
          color: 'var(--text-muted)',
        }}>
          <strong style={{ color: 'var(--text)', fontWeight: 600 }}>Transparency.</strong>{' '}
          Nexora is pre-production software. On-chain activity today is simulation and validation—not a
          solicitation to trade, and not investment advice. Past or hypothetical performance does not
          guarantee future results. Use of MEV-related strategies may be restricted or unlawful in your
          jurisdiction; you are responsible for compliance. Nexora is proprietary: source code and full technical documentation are not open source and are provided only under license to authorized parties.
        </p>
      </div>
    </section>
  )
}
