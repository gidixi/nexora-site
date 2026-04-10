import { POLYGON_CONTRACTS, POLYGON_SANDWICH_ALT_ADDRESS } from '@/lib/site'

type ExecutorCard = {
  name: string
  address: string
  chain: string
  size: string
  tests: number
  functions: string[]
  footnote?: string
}

const contracts: ExecutorCard[] = [
  {
    name: 'SandwichExecutorYul',
    address: POLYGON_CONTRACTS.sandwichExecutorYul,
    chain: 'Polygon mainnet',
    size: '~2,800 bytes',
    tests: 32,
    functions: ['swapV2Front', 'swapV2BackWithCheck', 'swapAlgebraFront', 'swapAlgebraBackWithCheck'],
    footnote: `Strategy doc also references ${POLYGON_SANDWICH_ALT_ADDRESS.slice(0, 6)}…${POLYGON_SANDWICH_ALT_ADDRESS.slice(-4)} — confirm the deployment you operate.`,
  },
  {
    name: 'ArbExecutorYul',
    address: POLYGON_CONTRACTS.arbExecutorYul,
    chain: 'Polygon mainnet',
    size: '~2,800 bytes',
    tests: 33,
    functions: ['executeArbMulti (V2/V3/Algebra)', 'executeArb (V2-only compat)'],
  },
  {
    name: 'FlashLoanArbExecutor',
    address: POLYGON_CONTRACTS.flashLoanArbExecutorBalancer,
    chain: 'Polygon mainnet · Balancer V2',
    size: '~2,700 bytes',
    tests: 19,
    functions: ['executeFlashArb', 'receiveFlashLoan (Balancer callback)'],
  },
  {
    name: 'AaveFlashLoanArbExecutor',
    address: POLYGON_CONTRACTS.aaveFlashLoanArbExecutor,
    chain: 'Polygon mainnet · Aave V3',
    size: '~2,842 bytes',
    tests: 23,
    functions: ['executeFlashArb (same selector)', 'executeOperation (Aave callback)'],
  },
]

const securityItems = [
  { label: 'Access control', desc: '_guardOwner() on swap and admin paths; revert if caller ≠ owner (slot 0).', color: 'var(--text-muted)' },
  { label: 'Reentrancy', desc: 'Storage slot 3 lock: locked for the outer swap / flash entry; Balancer callback path documented internally.', color: 'var(--text-muted)' },
  { label: 'Pause', desc: '_guardNotPaused() — owner can halt new execution without redeploying bytecode.', color: 'var(--text-muted)' },
  { label: 'Profit checks', desc: 'Atomic min-profit / min-output on backrun, multi-hop arb, and flash repay (fee-inclusive where applicable).', color: 'var(--text-muted)' },
  { label: 'Token approvals', desc: 'USDT-style reset-to-zero approve fallback before non-zero approvals.', color: 'var(--text-muted)' },
  { label: 'Flash callbacks', desc: 'Balancer: caller must be vault; Aave: pool + initiator guards per integration docs.', color: 'var(--text-muted)' },
]

export default function ContractsSection() {
  return (
    <section id="contracts" className="section-page-x" style={{ padding: '0 0 80px', maxWidth: 960, margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: 40 }}>
        <div className="badge badge-muted" style={{ marginBottom: 12 }}>Smart contracts</div>
        <h2 style={{ fontSize: 'clamp(24px, 5vw, 32px)', fontWeight: 700, margin: 0, letterSpacing: '-0.03em' }}>On-chain executors (Yul)</h2>
        <p style={{ color: 'var(--text-muted)', marginTop: 10, fontSize: 'clamp(13px, 3vw, 15px)', maxWidth: 580, marginLeft: 'auto', marginRight: 'auto' }}>
          Four compact Yul executors on Polygon PoS (sandwich / arb / Balancer flash / Aave flash). Selector tables and integration notes are part of the proprietary documentation for licensees. Always confirm bytecode and ownership on PolygonScan before relying on an address.
        </p>
      </div>

      <div className="card-grid-responsive" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: 16, marginBottom: 24 }}>
        {contracts.map(c => (
          <div key={c.name} className="card" style={{ borderTop: '1px solid var(--border)' }}>
            <div className="card-header">
              <span style={{ fontSize: 10 }}>{c.name}</span>
              <span className="badge badge-neutral">{c.tests} Foundry tests</span>
            </div>
            <div className="card-body">
              <div style={{ marginBottom: 12 }}>
                <div style={{ fontSize: 10, color: 'var(--text-sub)', marginBottom: 4 }}>POLYGON ADDRESS</div>
                <code style={{ fontSize: 10, color: 'var(--blue)', wordBreak: 'break-all', lineHeight: 1.5 }}>{c.address}</code>
              </div>
              {c.footnote && (
                <p style={{ margin: '0 0 12px', fontSize: 10, color: 'var(--text-sub)', lineHeight: 1.5 }}>{c.footnote}</p>
              )}
              <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
                <div style={{ flex: 1, background: 'var(--bg-base)', borderRadius: 4, padding: '6px 8px', fontSize: 11 }}>
                  <div style={{ color: 'var(--text-sub)', marginBottom: 2 }}>Runtime size</div>
                  <div style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>{c.size}</div>
                </div>
                <div style={{ flex: 1, background: 'var(--bg-base)', borderRadius: 4, padding: '6px 8px', fontSize: 11 }}>
                  <div style={{ color: 'var(--text-sub)', marginBottom: 2 }}>Network</div>
                  <div style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', fontSize: 10, lineHeight: 1.35 }}>{c.chain}</div>
                </div>
              </div>
              <div style={{ fontSize: 10, color: 'var(--text-sub)', marginBottom: 6 }}>FUNCTIONS (HIGH LEVEL)</div>
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
        <div className="card-header">Security model (summary)</div>
        <div className="card-body">
          <p style={{ margin: '0 0 14px', fontSize: 12, color: 'var(--text-muted)', lineHeight: 1.6 }}>
            Full selector tables and deployment notes are provided under license. This summary is not an audit or a guarantee of correctness.
          </p>
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
