const pipeline = [
  { step: '01', label: 'WS Monitor', desc: 'Mempool + confirmed blocks', color: 'var(--blue)' },
  { step: '02', label: 'Decode', desc: 'Calldata → SwapParams', color: 'var(--cyan)' },
  { step: '03', label: 'Filter Pipeline', desc: '7 ordered filters', color: 'var(--yellow)' },
  { step: '04', label: 'Scorer', desc: 'AMM math + EV model', color: 'var(--purple)' },
  { step: '05', label: 'Risk Layer', desc: 'Caps + kill switch', color: 'var(--red)' },
  { step: '06', label: 'TX Builder', desc: 'Raw calldata + gas', color: 'var(--green)' },
  { step: '07', label: 'Submit', desc: 'Marlin relay / RPC', color: 'var(--blue)' },
]

const filters = [
  'base_not_at_endpoint', 'zero_amount', 'known_router',
  'pool_resolve_failed', 'slippage_victim_too_low',
  'net_profit_nonpositive', 'profit_fragile_under_stress',
]

export default function ArchitectureSection() {
  return (
    <section id="architecture" style={{ padding: '0 24px 80px', maxWidth: 960, margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: 40 }}>
        <div className="badge badge-muted" style={{ marginBottom: 12 }}>Architecture</div>
        <h2 style={{ fontSize: 32, fontWeight: 800, margin: 0, letterSpacing: '-0.5px' }}>Async Rust Pipeline</h2>
        <p style={{ color: 'var(--text-muted)', marginTop: 10, fontSize: 15 }}>Sub-500ms P95 tick: from mempool observation to signed transaction.</p>
      </div>

      {/* Pipeline */}
      <div className="card" style={{ marginBottom: 16 }}>
        <div className="card-header">Execution Pipeline</div>
        <div className="card-body">
          <div style={{ display: 'flex', alignItems: 'center', gap: 0, overflowX: 'auto', paddingBottom: 4 }}>
            {pipeline.map((p, i) => (
              <div key={p.step} style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ textAlign: 'center', minWidth: 90 }}>
                  <div style={{ fontSize: 10, color: p.color, fontFamily: 'var(--font-mono)', marginBottom: 4 }}>{p.step}</div>
                  <div style={{
                    background: 'var(--bg-elevated)', border: `1px solid ${p.color}33`,
                    borderRadius: 6, padding: '8px 10px',
                  }}>
                    <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--text)', marginBottom: 2 }}>{p.label}</div>
                    <div style={{ fontSize: 10, color: 'var(--text-sub)' }}>{p.desc}</div>
                  </div>
                </div>
                {i < pipeline.length - 1 && (
                  <div style={{ color: 'var(--text-sub)', fontSize: 16, margin: '0 4px', marginTop: 16 }}>→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        {/* Filters */}
        <div className="card">
          <div className="card-header">Filter Pipeline — ordered by CPU cost</div>
          <div className="card-body">
            {filters.map((f, i) => (
              <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '5px 0', borderBottom: i < filters.length - 1 ? '1px solid var(--border-muted)' : 'none' }}>
                <span style={{ fontSize: 10, color: 'var(--text-sub)', fontFamily: 'var(--font-mono)', minWidth: 16 }}>{i + 1}</span>
                <code style={{ fontSize: 12, color: 'var(--blue)' }}>{f}</code>
              </div>
            ))}
          </div>
        </div>

        {/* Arb scanner */}
        <div className="card">
          <div className="card-header">ARB Scanner — background task</div>
          <div className="card-body">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                { label: 'Scan interval', value: '2,000 ms (periodic)', color: 'var(--blue)' },
                { label: 'Reactive trigger', value: 'after every sandwich score', color: 'var(--cyan)' },
                { label: 'Cycle finder', value: 'DFS iterative, stack-based', color: 'var(--purple)' },
                { label: 'Max DFS stack', value: '10,000 entries (OOM guard)', color: 'var(--yellow)' },
                { label: 'Sizing algorithm', value: 'Ternary search — 100 iter', color: 'var(--green)' },
                { label: 'Output', value: 'Top 10 cycles by net profit', color: 'var(--text-muted)' },
              ].map(item => (
                <div key={item.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: 11, color: 'var(--text-sub)' }}>{item.label}</span>
                  <span style={{ fontSize: 11, fontFamily: 'var(--font-mono)', color: item.color }}>{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
