export default function PerformanceSection() {
  const benchmarks = [
    { fn: 'get_amount_out', limit: '< 1 μs', note: 'single call, dev CPU' },
    { fn: 'optimal_frontrun_exact', limit: '< 5 μs', note: 'microbench' },
    { fn: 'simulate_sandwich', limit: '< 10 μs', note: 'synthetic fixture' },
    { fn: 'v3_simulate_swap (3 ticks)', limit: '< 50 μs', note: 'bounded tick count' },
    { fn: 'ArbGraph::find_cycles (50 pools)', limit: '< 10 ms', note: 'graph size fixed in bench' },
    { fn: 'Full pipeline tick (P95)', limit: '< 500 ms', note: 'lab setup; not a live-SLA' },
  ]

  return (
    <section id="performance" className="section-page-x" style={{ padding: '0 0 80px', maxWidth: 960, margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: 40 }}>
        <div className="badge badge-neutral" style={{ marginBottom: 12 }}>Performance & transparency</div>
        <h2 style={{ fontSize: 'clamp(24px, 5vw, 32px)', fontWeight: 700, margin: 0, letterSpacing: '-0.03em' }}>Benchmarks and live metrics</h2>
        <p style={{ color: 'var(--text-muted)', marginTop: 10, fontSize: 'clamp(13px, 3vw, 15px)', maxWidth: 560, marginLeft: 'auto', marginRight: 'auto' }}>
          Microbenchmarks are useful for regression testing; they are not predictions of revenue or inclusion. Aggregate trading statistics will appear here only after we are comfortable attesting to their methodology.
        </p>
      </div>

      <div className="card-grid-responsive" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: 16 }}>
        <div className="card">
          <div className="card-header">Rust microbenchmarks (cargo bench)</div>
          <div className="card-body">
            <p style={{ margin: '0 0 14px', fontSize: 12, color: 'var(--text-sub)', lineHeight: 1.55 }}>
              Figures are order-of-magnitude targets from internal runs. Hardware, compiler version, and workload shape materially change results.
            </p>
            {benchmarks.map((b, i) => (
              <div key={b.fn} style={{
                marginBottom: i < benchmarks.length - 1 ? 14 : 0,
                paddingBottom: i < benchmarks.length - 1 ? 12 : 0,
                borderBottom: i < benchmarks.length - 1 ? '1px solid var(--border-muted)' : 'none',
              }}>
                <div className="kv-row-mobile-stack" style={{ display: 'flex', justifyContent: 'space-between', gap: 8, flexWrap: 'wrap' }}>
                  <code style={{ fontSize: 11, color: 'var(--text-muted)', wordBreak: 'break-all' }}>{b.fn}</code>
                  <span style={{ fontSize: 11, fontFamily: 'var(--font-mono)', color: 'var(--text-sub)', flexShrink: 0 }}>{b.limit}</span>
                </div>
                <div style={{ fontSize: 10, color: 'var(--text-sub)', marginTop: 4 }}>{b.note}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <div className="card-header">Production metrics</div>
          <div className="card-body">
            {[
              { label: 'Daily PnL (USD)', value: '—', note: 'To be published with methodology' },
              { label: 'Win rate', value: '—', note: 'Strategy-level, net of costs' },
              { label: 'Trades / day', value: '—', note: 'All enabled paths' },
              { label: 'Avg profit / trade', value: '—', note: 'After gas and fees' },
              { label: 'Flash arb cycles / day', value: '—', note: 'Where applicable' },
              { label: 'Operational gas (illustrative)', value: '—', note: 'Depends on volume and gas price' },
            ].map(m => (
              <div key={m.label} className="kv-row-mobile-stack" style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '7px 0', borderBottom: '1px solid var(--border-muted)',
                gap: 8,
              }}>
                <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>{m.label}</span>
                <div style={{ textAlign: 'right', flexShrink: 0 }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--text-sub)' }}>{m.value}</span>
                  <div style={{ fontSize: 10, color: 'var(--text-sub)' }}>{m.note}</div>
                </div>
              </div>
            ))}
            <div style={{ marginTop: 14, padding: '10px 12px', background: 'var(--bg-base)', borderRadius: 6, border: '1px solid var(--border)' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                <span className="conn-dot subtle" style={{ marginTop: 4, flexShrink: 0 }} />
                <span style={{ fontSize: 12, color: 'var(--text-muted)', lineHeight: 1.55 }}>
                  On-chain simulation and dry-runs may use mainnet state; that does not constitute a performance claim for discretionary trading.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
