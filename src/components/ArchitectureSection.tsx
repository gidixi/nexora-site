const pipeline = [
  { step: '01', label: 'WS Monitor', desc: 'Mempool + blocks', color: 'var(--blue)' },
  { step: '02', label: 'Decode', desc: 'Calldata → Params', color: 'var(--cyan)' },
  { step: '03', label: 'Filter', desc: '7 ordered filters', color: 'var(--yellow)' },
  { step: '04', label: 'Scorer', desc: 'AMM math + EV', color: 'var(--purple)' },
  { step: '05', label: 'Risk', desc: 'Caps + killswitch', color: 'var(--red)' },
  { step: '06', label: 'TX Build', desc: 'Raw calldata + gas', color: 'var(--green)' },
  { step: '07', label: 'Submit', desc: 'Marlin / RPC', color: 'var(--blue)' },
]

const filters = [
  'base_not_at_endpoint', 'zero_amount', 'known_router',
  'pool_resolve_failed', 'slippage_victim_too_low',
  'net_profit_nonpositive', 'profit_fragile_under_stress',
]

export default function ArchitectureSection() {
  return (
    <section id="architecture" className="section-page-x" style={{ padding: '0 0 80px', maxWidth: 960, margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: 40 }}>
        <div className="badge badge-muted" style={{ marginBottom: 12 }}>Architecture</div>
        <h2 style={{ fontSize: 'clamp(24px, 5vw, 32px)', fontWeight: 800, margin: 0, letterSpacing: '-0.5px' }}>Async Rust Pipeline</h2>
        <p style={{ color: 'var(--text-muted)', marginTop: 10, fontSize: 'clamp(13px, 3vw, 15px)' }}>Sub-500ms P95 tick: from mempool observation to signed transaction.</p>
      </div>

      {/* Pipeline — horizontal scroll on mobile */}
      <div className="card" style={{ marginBottom: 16 }}>
        <div className="card-header">Execution Pipeline</div>
        <div className="card-body arch-pipeline-scroll" style={{ overflowX: 'auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', minWidth: 560 }}>
            {pipeline.map((p, i) => (
              <div key={p.step} style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ textAlign: 'center', minWidth: 76 }}>
                  <div style={{ fontSize: 10, color: p.color, fontFamily: 'var(--font-mono)', marginBottom: 4 }}>{p.step}</div>
                  <div style={{
                    background: 'var(--bg-elevated)', border: `1px solid ${p.color}33`,
                    borderRadius: 6, padding: '7px 8px',
                  }}>
                    <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--text)', marginBottom: 2 }}>{p.label}</div>
                    <div style={{ fontSize: 10, color: 'var(--text-sub)' }}>{p.desc}</div>
                  </div>
                </div>
                {i < pipeline.length - 1 && (
                  <div style={{ color: 'var(--text-sub)', fontSize: 14, margin: '0 3px', marginTop: 16 }}>→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 2-col grid — stacks on mobile */}
      <div className="card-grid-responsive" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: 16 }}>
        <div className="card">
          <div className="card-header">Filter Pipeline — ordered by CPU cost</div>
          <div className="card-body">
            {filters.map((f, i) => (
              <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '5px 0', borderBottom: i < filters.length - 1 ? '1px solid var(--border-muted)' : 'none' }}>
                <span style={{ fontSize: 10, color: 'var(--text-sub)', fontFamily: 'var(--font-mono)', minWidth: 16 }}>{i + 1}</span>
                <code style={{ fontSize: 12, color: 'var(--blue)', wordBreak: 'break-all' }}>{f}</code>
              </div>
            ))}
          </div>
        </div>

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
                <div key={item.label} className="kv-row-mobile-stack" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
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
