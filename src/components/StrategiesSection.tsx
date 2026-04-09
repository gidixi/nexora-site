const strategies = [
  {
    id: 'sandwich',
    color: 'var(--red)',
    icon: '🥪',
    name: 'Sandwich Attack',
    badge: 'Live on mainnet',
    badgeClass: 'badge-success',
    description: 'Detects large pending swaps in the mempool and wraps them with a frontrun + backrun pair. Optimal frontrun amount computed via closed-form formula on each opportunity.',
    details: [
      { label: 'DEX support', value: 'QuickSwap V2, SushiSwap, Algebra, Uniswap V3' },
      { label: 'Profit check', value: 'Atomic on-chain — reverts if received < minProfit' },
      { label: 'Relay', value: 'Marlin private relay (EV discount 0.90)' },
      { label: 'Optimizer', value: 'closed-form √ formula — <5μs per call' },
    ],
    formula: 'a* = (√(x·(xD+Fv)·D) - xD) / F',
  },
  {
    id: 'backrun',
    color: 'var(--blue)',
    icon: '↩',
    name: 'Backrun',
    badge: 'Zero capital risk',
    badgeClass: 'badge-info',
    description: 'Monitors confirmed blocks for large swaps that moved pool reserves. Executes a single backrun transaction on the already-shifted price. No mempool race, no victim dependency.',
    details: [
      { label: 'Trigger', value: 'Confirmed tx in block (zero state uncertainty)' },
      { label: 'Risk profile', value: 'Lowest — on-chain state is final' },
      { label: 'Reactive arb', value: 'try_arb_after_swap fires on every scored swap' },
      { label: 'Latency target', value: '<500ms P95 full tick' },
    ],
  },
  {
    id: 'flashloan',
    color: 'var(--purple)',
    icon: '⚡',
    name: 'Flash Loan Arbitrage',
    badge: '0% fee — Balancer V2',
    badgeClass: 'badge-muted',
    description: 'Executes cross-DEX triangular arbitrage cycles with zero capital using Balancer V2 flash loans (0% fee on Polygon). Optimal input found via ternary search on a concave profit function.',
    details: [
      { label: 'Flash provider', value: 'Balancer V2 Vault — 0% fee' },
      { label: 'Secondary', value: 'Aave V3 — +15-30% extra cycles (stablecoin)' },
      { label: 'Sizing', value: 'Ternary search 100 iterations — optimal in <10ms' },
      { label: 'Atomicity', value: 'Full revert if profit < minProfit — zero capital loss' },
    ],
  },
]

export default function StrategiesSection() {
  return (
    <section id="strategies" style={{ padding: '0 24px 80px', maxWidth: 960, margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: 40 }}>
        <div className="badge badge-muted" style={{ marginBottom: 12 }}>Strategies</div>
        <h2 style={{ fontSize: 32, fontWeight: 800, margin: 0, letterSpacing: '-0.5px' }}>Three MEV Strategies, One Engine</h2>
        <p style={{ color: 'var(--text-muted)', marginTop: 10, fontSize: 15 }}>Each strategy shares the same Rust async runtime and on-chain executor contracts.</p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
        {strategies.map(s => (
          <div key={s.id} className="card" style={{ borderTop: `2px solid ${s.color}` }}>
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
                  fontFamily: 'var(--font-mono)', fontSize: 12, color: s.color,
                }}>
                  {s.formula}
                </div>
              )}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                {s.details.map(d => (
                  <div key={d.label} style={{ display: 'flex', justifyContent: 'space-between', gap: 8 }}>
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
