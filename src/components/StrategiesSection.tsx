const strategies = [
  {
    id: 'sandwich',
    color: 'var(--border)',
    name: 'Order-flow (mempool)',
    badge: 'Research / testing',
    badgeClass: 'badge-neutral',
    description:
      'Observes pending swaps and sizes companion trades when expected value clears risk thresholds. Designed for deterministic, revert-on-loss execution—not a guarantee of profitability or inclusion.',
    details: [
      { label: 'Venues (examples)', value: 'QuickSwap V2, SushiSwap, Algebra, Uniswap V3' },
      { label: 'Execution guard', value: 'On-chain min-output / min-profit checks' },
      { label: 'Submission', value: 'Private relay or RPC (configurable)' },
      { label: 'Sizing (design)', value: 'Closed-form optimizer (implementation-specific)' },
    ],
    formula: 'a* = (√(x·(xD+Fv)·D) - xD) / F',
  },
  {
    id: 'backrun',
    color: 'var(--border)',
    name: 'Post-fill reaction',
    badge: 'Lower race sensitivity',
    badgeClass: 'badge-neutral',
    description:
      'Reacts to large swaps after inclusion when pool state has moved. Trades only when post-trade reserves imply a path with edge after fees and gas—still subject to competition and reorgs.',
    details: [
      { label: 'Trigger', value: 'Included transaction + decoded swap' },
      { label: 'Risk note', value: 'No strategy eliminates adverse selection or failed landing' },
      { label: 'Integration', value: 'Hooks from the scorer into arb execution' },
      { label: 'Latency (internal goal)', value: 'Sub-second tick (environment-dependent)' },
    ],
  },
  {
    id: 'flashloan',
    color: 'var(--border)',
    name: 'Flash-loan arbitrage',
    badge: 'Capital-efficient paths',
    badgeClass: 'badge-neutral',
    description:
      'Explores multi-hop cycles using protocol flash liquidity. Profit is model-dependent; transactions revert if realized output is below the configured minimum.',
    details: [
      { label: 'Primary provider', value: 'Balancer V2 Vault (0% flash fee on Polygon)' },
      { label: 'Secondary (optional)', value: 'Aave V3 for additional stable routes' },
      { label: 'Sizing', value: 'Numeric search on simulated PnL curve' },
      { label: 'Atomicity', value: 'Whole bundle reverts if constraints fail' },
    ],
  },
]

export default function StrategiesSection() {
  return (
    <section id="strategies" className="section-page-x" style={{ padding: '0 0 80px', maxWidth: 960, margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: 40 }}>
        <div className="badge badge-muted" style={{ marginBottom: 12 }}>Strategies</div>
        <h2 style={{ fontSize: 'clamp(24px, 5vw, 32px)', fontWeight: 700, margin: 0, letterSpacing: '-0.03em' }}>One runtime, multiple execution paths</h2>
        <p style={{ color: 'var(--text-muted)', marginTop: 10, fontSize: 'clamp(13px, 3vw, 15px)', maxWidth: 560, marginLeft: 'auto', marginRight: 'auto' }}>
          Shared filtering, simulation, and risk controls feed the same transaction builder. Descriptions reflect design intent; results depend on market conditions and deployment parameters.
        </p>
      </div>
      <div className="card-grid-responsive" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: 16 }}>
        {strategies.map(s => (
          <div key={s.id} className="card" style={{ borderTop: `1px solid ${s.color}` }}>
            <div className="card-header">
              <span>{s.name}</span>
              <span className={`badge ${s.badgeClass}`}>{s.badge}</span>
            </div>
            <div className="card-body">
              <p style={{ color: 'var(--text-muted)', fontSize: 13, lineHeight: 1.6, marginTop: 0, marginBottom: 16 }}>{s.description}</p>
              {s.formula && (
                <div style={{
                  background: 'var(--bg-base)', border: '1px solid var(--border)',
                  borderRadius: 6, padding: '8px 12px', marginBottom: 16,
                  fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-muted)',
                  overflowX: 'auto', whiteSpace: 'nowrap',
                }}>
                  {s.formula}
                </div>
              )}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                {s.details.map(d => (
                  <div key={d.label} className="kv-row-mobile-stack" style={{ display: 'flex', justifyContent: 'space-between', gap: 8, flexWrap: 'wrap' }}>
                    <span style={{ fontSize: 11, color: 'var(--text-sub)', flexShrink: 0 }}>{d.label}</span>
                    <span style={{ fontSize: 11, color: 'var(--text-muted)', textAlign: 'right', fontFamily: 'var(--font-mono)' }}>{d.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
