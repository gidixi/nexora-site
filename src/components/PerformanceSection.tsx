export default function PerformanceSection() {
  const benchmarks = [
    { fn: 'get_amount_out', limit: '< 1 μs', color: 'var(--green)', pct: 20 },
    { fn: 'optimal_frontrun_exact', limit: '< 5 μs', color: 'var(--green)', pct: 35 },
    { fn: 'simulate_sandwich', limit: '< 10 μs', color: 'var(--blue)', pct: 50 },
    { fn: 'v3_simulate_swap (3 ticks)', limit: '< 50 μs', color: 'var(--blue)', pct: 65 },
    { fn: 'ArbGraph::find_cycles (50 pools)', limit: '< 10 ms', color: 'var(--purple)', pct: 80 },
    { fn: 'Full tick P95', limit: '< 500 ms', color: 'var(--cyan)', pct: 100 },
  ]

  return (
    <section id="performance" style={{ padding: '0 20px 80px', maxWidth: 960, margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: 40 }}>
        <div className="badge badge-warning" style={{ marginBottom: 12 }}>Performance · Simulation Phase</div>
        <h2 style={{ fontSize: 'clamp(24px, 5vw, 32px)', fontWeight: 800, margin: 0, letterSpacing: '-0.5px' }}>Live Data Coming Q2 2026</h2>
        <p style={{ color: 'var(--text-muted)', marginTop: 10, fontSize: 'clamp(13px, 3vw, 15px)' }}>Simulation active. On-chain verified PnL will be published here once live trading begins.</p>
      </div>

      {/* Stack on mobile */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
        <div className="card">
          <div className="card-header">Rust Benchmarks (cargo bench)</div>
          <div className="card-body">
            {benchmarks.map(b => (
              <div key={b.fn} style={{ marginBottom: 12 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4, gap: 8, flexWrap: 'wrap' }}>
                  <code style={{ fontSize: 11, color: 'var(--text-muted)', wordBreak: 'break-all' }}>{b.fn}</code>
                  <span style={{ fontSize: 11, fontFamily: 'var(--font-mono)', color: b.color, flexShrink: 0 }}>{b.limit}</span>
                </div>
                <div className="progress-mini">
                  <div className="bar" style={{ width: `${b.pct}%`, background: b.color }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <div className="card-header">Live Metrics — Q2 2026</div>
          <div className="card-body">
            {[
              { label: 'Daily PnL (USD)', value: '—', note: 'on-chain verified' },
              { label: 'Win rate', value: '—', note: 'sandwich + arb' },
              { label: 'Trades / day', value: '—', note: 'all strategies' },
              { label: 'Avg profit / trade', value: '—', note: 'net of gas' },
              { label: 'Flash arb cycles / day', value: '—', note: 'Balancer + Aave' },
              { label: 'Gas cost / month', value: '<$20', note: '@100 gwei Polygon' },
            ].map(m => (
              <div key={m.label} style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '7px 0', borderBottom: '1px solid var(--border-muted)',
                gap: 8,
              }}>
                <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>{m.label}</span>
                <div style={{ textAlign: 'right', flexShrink: 0 }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: m.value === '—' ? 'var(--text-sub)' : 'var(--green)' }}>{m.value}</span>
                  <div style={{ fontSize: 10, color: 'var(--text-sub)' }}>{m.note}</div>
                </div>
              </div>
            ))}
            <div style={{ marginTop: 14, padding: '10px 12px', background: 'var(--bg-base)', borderRadius: 6, border: '1px solid var(--border)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span className="conn-dot live" />
                <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>Simulation running on Polygon mainnet</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
