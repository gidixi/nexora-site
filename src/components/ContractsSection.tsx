const contracts = [
  {
    name: 'SandwichExecutorYul',
    address: '0x7E3Aa7C95299c5FDD94D1f63F5022b3F75EB76dC',
    chain: 'Polygon mainnet',
    size: '~2,800 bytes',
    tests: 32,
    functions: ['swapV2Front', 'swapV2BackWithCheck', 'swapAlgebraFront', 'swapAlgebraBackWithCheck'],
  },
  {
    name: 'ArbExecutorYul',
    address: '0x…',
    chain: 'Polygon mainnet',
    size: '~2,800 bytes',
    tests: 30,
    functions: ['executeArbMulti (V2/V3/Algebra)', 'executeArb (V2-only compat)'],
  },
  {
    name: 'FlashLoanArbExecutor',
    address: '0x…',
    chain: 'Polygon mainnet',
    size: '~2,700 bytes',
    tests: 19,
    functions: ['executeFlashArb', 'receiveFlashLoan (Balancer callback)'],
  },
]

const securityItems = [
  { label: 'Access control', desc: 'Owner-only entry points for sensitive execution paths.', color: 'var(--text-muted)' },
  { label: 'Reentrancy guard', desc: 'Mutex around external calls to reduce reentrancy surface area.', color: 'var(--text-muted)' },
  { label: 'Pause mechanism', desc: 'Administrative pause flag to halt new execution without migration.', color: 'var(--text-muted)' },
  { label: 'Profit / output checks', desc: 'Transactions revert when outputs fall below configured minima (does not imply strategy-level profitability).', color: 'var(--text-muted)' },
  { label: 'Token approvals', desc: 'Patterns intended to accommodate non-standard ERC-20 approve behavior where applicable.', color: 'var(--text-muted)' },
  { label: 'Flash-loan callback', desc: 'Callback restricted to the expected vault / initiator per integration.', color: 'var(--text-muted)' },
]

export default function ContractsSection() {
  return (
    <section id="contracts" className="section-page-x" style={{ padding: '0 0 80px', maxWidth: 960, margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: 40 }}>
        <div className="badge badge-muted" style={{ marginBottom: 12 }}>Smart Contracts</div>
        <h2 style={{ fontSize: 'clamp(24px, 5vw, 32px)', fontWeight: 700, margin: 0, letterSpacing: '-0.03em' }}>On-chain executors (Yul)</h2>
        <p style={{ color: 'var(--text-muted)', marginTop: 10, fontSize: 'clamp(13px, 3vw, 15px)', maxWidth: 560, marginLeft: 'auto', marginRight: 'auto' }}>
          Three small executors are deployed for integration testing. One address is published below for inspection; additional addresses will be listed as they are finalized and audited.
        </p>
      </div>

      <div className="card-grid-responsive" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: 16, marginBottom: 24 }}>
        {contracts.map(c => (
          <div key={c.name} className="card" style={{ borderTop: '1px solid var(--border)' }}>
            <div className="card-header">
              <span style={{ fontSize: 10 }}>{c.name}</span>
              <span className="badge badge-neutral">{c.tests} unit tests (reported)</span>
            </div>
            <div className="card-body">
              <div style={{ marginBottom: 12 }}>
                <div style={{ fontSize: 10, color: 'var(--text-sub)', marginBottom: 4 }}>
                  {c.address.startsWith('0x…') ? 'ADDRESS (NOT YET PUBLISHED)' : 'ON-CHAIN ADDRESS'}
                </div>
                <code style={{ fontSize: 10, color: 'var(--blue)', wordBreak: 'break-all', lineHeight: 1.5 }}>{c.address}</code>
              </div>
              <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
                <div style={{ flex: 1, background: 'var(--bg-base)', borderRadius: 4, padding: '6px 8px', fontSize: 11 }}>
                  <div style={{ color: 'var(--text-sub)', marginBottom: 2 }}>Size</div>
                  <div style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>{c.size}</div>
                </div>
                <div style={{ flex: 1, background: 'var(--bg-base)', borderRadius: 4, padding: '6px 8px', fontSize: 11 }}>
                  <div style={{ color: 'var(--text-sub)', marginBottom: 2 }}>Chain</div>
                  <div style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>{c.chain}</div>
                </div>
              </div>
              <div style={{ fontSize: 10, color: 'var(--text-sub)', marginBottom: 6 }}>FUNCTIONS</div>
              {c.functions.map(f => (
                <div key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 6, padding: '3px 0' }}>
                  <span style={{ color: 'var(--text-sub)', fontSize: 10, marginTop: 1, flexShrink: 0 }}>›</span>
                  <code style={{ fontSize: 11, color: 'var(--text-muted)', wordBreak: 'break-word' }}>{f}</code>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="card">
        <div className="card-header">Security Model</div>
        <div className="card-body">
          <div className="card-grid-responsive" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: 10 }}>
            {securityItems.map(item => (
              <div key={item.label} style={{
                background: 'var(--bg-base)', borderRadius: 6, padding: '10px 12px',
                borderLeft: `3px solid ${item.color}`,
              }}>
                <div style={{ fontSize: 12, fontWeight: 600, color: item.color, marginBottom: 4 }}>{item.label}</div>
                <div style={{ fontSize: 11, color: 'var(--text-muted)', lineHeight: 1.5 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
