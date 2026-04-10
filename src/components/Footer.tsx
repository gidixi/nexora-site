export default function Footer() {
  return (
    <footer className="section-page-x" style={{
      borderTop: '1px solid var(--border)',
      padding: '20px 0',
      paddingBottom: 'max(20px, env(safe-area-inset-bottom, 0px))',
    }}>
      <div className="footer-inner" style={{
        maxWidth: 960, margin: '0 auto',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        flexWrap: 'wrap', gap: 12,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 22, height: 22, borderRadius: 5,
            background: 'linear-gradient(135deg, var(--blue-dim), var(--purple))',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 11, fontWeight: 800, color: '#fff', flexShrink: 0,
          }}>N</div>
          <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>Nexora MEV Bot — Polygon PoS</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
          <a href="https://polygonscan.com/address/0x7E3Aa7C95299c5FDD94D1f63F5022b3F75EB76dC"
            target="_blank" rel="noopener noreferrer"
            style={{ fontSize: 12, color: 'var(--text-sub)' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--blue)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-sub)')}
          >PolygonScan ↗</a>
          <span style={{ fontSize: 12, color: 'var(--text-sub)' }}>© 2026 Nexora</span>
          <span className="badge badge-warning" style={{ fontSize: 10 }}>Simulation Phase</span>
        </div>
      </div>
    </footer>
  )
}
