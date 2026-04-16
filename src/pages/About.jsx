import { CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <section id="about" style={{ padding: '4rem 0 8rem', backgroundColor: 'var(--color-bg)' }}>
      <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto 8rem' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.4rem 1rem', backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: '99px', fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-text-muted)', marginBottom: '2rem' }}>
                <span style={{ display: 'inline-block', width: '8px', height: '8px', backgroundColor: 'var(--color-primary)', borderRadius: '50%' }}></span>
                The Vanguard of Indian Compliance
              </div>
              <h2 style={{ fontSize: '3.5rem', lineHeight: 1.1, letterSpacing: '-0.04em', marginBottom: '1.5rem', color: 'var(--color-dark)' }}>
                 Architecting Financial <span style={{ color: 'var(--color-primary)' }}>Defense.</span>
              </h2>
              <p style={{ fontSize: '1.15rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                 TaxSafar was founded on a singular mathematical principle: to provide institutional-grade legal and financial shielding to India's fastest-growing enterprises. We don't just file taxes; we build fortifications around your capital.
              </p>
          </div>

          <div className="grid-2" style={{ alignItems: 'center' }}>
             <div style={{ textAlign: 'left' }}>
                 <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', color: 'var(--color-primary)', fontWeight: 700, fontSize: '0.9rem', letterSpacing: '1px', textTransform: 'uppercase' }}>
                     Our Foundation
                 </div>
                 <h3 style={{ fontSize: '2.8rem', letterSpacing: '-0.03em', color: 'var(--color-dark)', marginBottom: '1.5rem', lineHeight: 1.1 }}>The Leadership DNA</h3>
                 <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '2.5rem' }}>
                    Our network consists of former tax adjudicators, senior legal counsel, and Tier-1 chartered accountants. We leverage decades of direct corporate litigation experience to ensure your enterprise operates autonomously in a state of absolute legal perfection.
                 </p>
                 
                 <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    {[
                      "Zero-Tolerance Compliance Engineering",
                      "Algorithmic Ledger Auditing",
                      "Pre-emptive Litigation Defense"
                    ].map((item, i) => (
                       <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--color-dark)', fontWeight: 600, fontSize: '1.05rem' }}>
                          <CheckCircle2 color="var(--color-primary)" size={24} /> {item}
                       </div>
                    ))}
                 </div>
             </div>
             
             {/* Classy Corporate Photography Block */}
             <div style={{ position: 'relative', borderRadius: '32px', overflow: 'hidden', boxShadow: '0 25px 60px -12px rgba(0,0,0,0.3)', minHeight: '400px' }}>
                 <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80" alt="Corporate Headquarters" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }} />
                 
                 {/* Bottom Information overlay */}
                 <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '4rem 1.5rem 1.5rem', background: 'linear-gradient(to top, rgba(15,23,42,0.95), rgba(15,23,42,0.6) 60%, transparent)', zIndex: 1 }}>
                     <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                         <div style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(12px)', padding: '1rem', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.2)' }}>
                             <div style={{ color: '#e2e8f0', fontSize: '0.75rem', fontWeight: 600, marginBottom: '0.3rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Assets Protected</div>
                             <div style={{ color: 'white', fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-0.5px' }}>₹4.2K Cr</div>
                         </div>
                         <div style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(12px)', padding: '1rem', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.2)' }}>
                             <div style={{ color: '#e2e8f0', fontSize: '0.75rem', fontWeight: 600, marginBottom: '0.3rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Legal Network</div>
                             <div style={{ color: 'white', fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-0.5px' }}>Tier-1</div>
                         </div>
                     </div>
                 </div>
             </div>
          </div>
      </div>
    </section>
  )
}
