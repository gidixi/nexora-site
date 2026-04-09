const contracts = [
  {
    name: 'SandwichExecutorYul',
    address: '0x7E3Aa7C95299c5FDD94D1f63F5022b3F75EB76dC',
    chain: 'Polygon mainnet',
    size: '~2,800 bytes',
    tests: 32,
    color: 'var(--red)',
    functions: ['swapV2Front', 'swapV2BackWithCheck', 'swapAlgebraFront', 'swapAlgebraBackWithCheck'],
  },
  {
    name: 'ArbExecutorYul',
    address: '0x…',
    chain: 'Polygon mainnet',
    size: '~2,800 bytes',
    tests: 30,
    color: 'var(--blue)',
    functions: ['executeArbMulti (V2/V3/Algebra)', 'executeArb (V2-only compat)'],
  },
  {
    name: 'FlashLoanArbExecutor',
    address: '0x…',
    chain: 'Polygon mainnet',
    size: '~2,700 bytes',
    tests: 19,
    color: 'var(--purple)',
    functions: ['executeFlashArb', 'receiveFlashLoan (Balancer callback)'],
  },
]

const securityItems = [
  { label: 'Access control', desc: '_guardOwner() on every function — caller != owner → revert', color: 'var(--green)' },
  { label: 'Reentrancy guard', desc: 'Storage slot 3 mutex — lock on entry, unlock on exit', color: 'var(--green)' },
  { label: 'Pause mechanism', desc: '_guardNotPaused() — instant kill-switch, no redeploy', color: 'var(--green)' },
  { label: 'Profit check', desc: 'Atomic revert if received < minProfit — zero loss guarantee', color: 'var(--green)' },
  { label: 'USDT-safe approve', desc: 'Reset-to-zero fallback for non-standard ERC20 tokens', color: 'var(--yellow)' },
  { label: 'FL callback guard', desc: 'receiveFlashLoan: only callable from Balancer Vault', color: 'var(--green)' },
]

export default function ContractsSection() {
  return (
    <section id="contracts" style={{ padding: '0 24px 80px', maxWidth: 960, margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: 40 }}>
        <div className="badge badge-muted" style={{ marginBottom: 12 }}>Smart Contracts</div>
        <h2 style={{ fontSize: 32, fontWeight: 800, margin: 0, letterSpacing: '-0.5px' }}>Yul Inline Assembly</h2>
        <p style={{ color: 'var(--text-muted)', marginTop: 10, fontSize: 15 }}>3 contracts — 81 Foundry tests — deployed on Polygon mainnet. -57% bytecode vs equivalent Solidity.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16, marginBottom: 24 }}>
        {contracts.map(c => (
          <div key={c.name} className="card" style={{ borderTop: `2px solid ${c.color}` }}>
            <div className="card-header">
              <span>{c.name}</span>
              <span className="badge badge-success">{c.tests} tests</span>
            </div>
            <div className="card-body">
              <div style={{ marginBottom: 12 }}>
                <div style={{ fontSize: 10, color: 'var(--text-sub)', marginBottom: 4 }}>DEPLOYED ADDRESS</div>
                <code style={{ fontSize: 11, color: 'var(--blue)', wordBreak: 'break-all' }}>{c.address}</code>
              </div>
              <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
                <div style={{ flex: 1, background: 'var(--bg-base)', borderRadius: 4, padding: '6px 8px', fontSize: 11 }}>
                  <div style={{ color: 'var(--text-sub)', marginBottom: 2 }}>Size</div>
                  <div style={{ fontFamily: 'var(--font-mono)', color: c.color }}>{c.size}</div>
                </div>
                <div style={{ flex: 1, background: 'var(--bg-base)', borderRadius: 4, padding: '6px 8px', fontSize: 11 }}>
                  <div style={{ color: 'var(--text-sub)', marginBottom: 2 }}>Chain</div>
                  <div style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>{c.chain}</div>
                </div>
              </div>
              <div style={{ fontSize: 10, color: 'var(--text-sub)', marginBottom: 6 }}>FUNCTIONS</div>
              {c.functions.map(f => (
                <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '3px 0' }}>
                  <span style={{ color: c.color, fontSize: 10 }}>›</span>
                  <code style={{ fontSize: 11, color: 'var(--text-muted)' }}>{f}</code>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Security */}
      <div className="card">
        <div className="card-header">Security Model</div>
        <div className="card-body">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 10 }}>
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
