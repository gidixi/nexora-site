const stats = [
  { label: 'Executors (Yul)', value: '3', sub: 'Polygon mainnet (testing)', color: 'var(--text-muted)' },
  { label: 'Bytecode (approx.)', value: '~2.8 kb', sub: 'per executor, hand-tuned', color: 'var(--text-muted)' },
  { label: 'Automated tests', value: '281', sub: 'Foundry + proptest (internal)', color: 'var(--text-muted)' },
  { label: 'Strategy modules', value: '3', sub: 'Order-flow · Post-fill · Flash loan', color: 'var(--text-muted)' },
  { label: 'Balancer V2 fee', value: '0%', sub: 'on Polygon (protocol param)', color: 'var(--text-muted)' },
  { label: 'Target chain', value: 'Polygon', sub: '~2s block time (network)', color: 'var(--text-muted)' },
]

export default function StatsBar() {
  return (
    <section className="section-page-x" style={{ padding: '0 0 60px', maxWidth: 960, margin: '0 auto' }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
        gap: 10,
      }}>
        {stats.map(s => (
          <div key={s.label} className="stat-card">
            <div className="stat-label">{s.label}</div>
            <div className="stat-value" style={{ color: s.color, fontSize: 'clamp(15px, 4vw, 18px)' }}>{s.value}</div>
            <div className="stat-sub">{s.sub}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
