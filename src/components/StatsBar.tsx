const stats = [
  { label: 'Smart Contracts', value: '3', sub: 'Deployed mainnet', color: 'var(--green)' },
  { label: 'Bytecode size', value: '~2.8kb', sub: '-57% vs Solidity', color: 'var(--blue)' },
  { label: 'Test suite', value: '281', sub: 'Foundry + proptest', color: 'var(--purple)' },
  { label: 'Strategies', value: '3', sub: 'Sandwich · Backrun · FL Arb', color: 'var(--cyan)' },
  { label: 'Flash loan fee', value: '0%', sub: 'Balancer V2 on Polygon', color: 'var(--yellow)' },
  { label: 'Block time', value: '2s', sub: 'Polygon PoS target', color: 'var(--text-muted)' },
]

export default function StatsBar() {
  return (
    <section style={{ padding: '0 24px 60px', maxWidth: 960, margin: '0 auto' }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
        gap: 12,
      }}>
        {stats.map(s => (
          <div key={s.label} className="stat-card">
            <div className="stat-label">{s.label}</div>
            <div className="stat-value" style={{ color: s.color }}>{s.value}</div>
            <div className="stat-sub">{s.sub}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
