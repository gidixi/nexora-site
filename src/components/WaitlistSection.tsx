'use client'
import { useState } from 'react'

export default function WaitlistSection({ count }: { count: number }) {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setLoading(true)
    await new Promise(r => setTimeout(r, 800))
    setSubmitted(true)
    setLoading(false)
  }

  return (
    <section id="waitlist" className="section-page-x" style={{ padding: '0 0 100px', maxWidth: 960, margin: '0 auto' }}>
      <div style={{
        background: 'var(--bg-surface)', border: '1px solid var(--border)',
        borderRadius: 12, padding: 'clamp(28px, 5vw, 48px)',
        textAlign: 'center', position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: -60, left: '50%', transform: 'translateX(-50%)',
          width: 300, height: 300, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(31,111,235,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div className="badge badge-info" style={{ marginBottom: 16 }}>Early Access</div>
        <h2 style={{ fontSize: 'clamp(20px, 5vw, 28px)', fontWeight: 800, margin: '0 0 10px', letterSpacing: '-0.5px' }}>
          Get notified when live trading starts
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: 'clamp(13px, 3vw, 14px)', marginBottom: 32, maxWidth: 480, margin: '0 auto 32px' }}>
          We&apos;re launching license access in Q2 2026. Early waitlist members get priority review,
          detailed PnL reports, and direct technical discussion.
        </p>

        {submitted ? (
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            background: '#1a3a1a', border: '1px solid var(--green-dim)',
            borderRadius: 8, padding: '12px 24px', color: 'var(--green)',
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            You&apos;re on the list. We&apos;ll be in touch.
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{
            display: 'flex', gap: 10,
            maxWidth: 420, margin: '0 auto',
            justifyContent: 'center',
            flexDirection: 'column',
          }}>
            <input
              type="email"
              required
              placeholder="your@email.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              style={{
                width: '100%',
                background: 'var(--bg-elevated)', border: '1px solid var(--border)',
                borderRadius: 6, color: 'var(--text)', fontSize: 14, padding: '11px 14px',
                outline: 'none', transition: 'border-color 0.15s',
              }}
              onFocus={e => (e.target.style.borderColor = 'var(--blue)')}
              onBlur={e => (e.target.style.borderColor = 'var(--border)')}
            />
            <button type="submit" className="btn btn-primary" disabled={loading}
              style={{ padding: '11px 20px', fontSize: 14, justifyContent: 'center', width: '100%' }}
            >
              {loading ? <span className="spinner spinner-sm" /> : 'Join Waitlist'}
            </button>
          </form>
        )}

        <p style={{ marginTop: 16, fontSize: 11, color: 'var(--text-sub)' }}>
          No spam. License access only — not a public bot service.
        </p>
      </div>
    </section>
  )
}
