import { Mail, Lock, Building, ArrowRight } from 'lucide-react';

export default function Signup({ setPage }) {
  return (
    <section className="auth-bg" style={{ minHeight: 'calc(100vh - 70px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '4rem 2rem' }}>
      <div className="card" style={{ width: '100%', maxWidth: '440px', padding: '3.5rem 3rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-50%', left: '-50%', width: '200%', height: '200%', background: 'radial-gradient(circle, rgba(14,165,233,0.04) 0%, transparent 60%)', zIndex: 0, pointerEvents: 'none' }}></div>
        
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <h1 style={{ fontSize: '2rem', marginBottom: '0.4rem', color: 'var(--color-dark)' }}>Create Account</h1>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>Establish your enterprise profile.</p>
          </div>
          
          <form style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }} onSubmit={(e) => e.preventDefault()}>
            <div className="input-group">
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--color-text)' }}>Organization Name</label>
              <div style={{ position: 'relative' }}>
                <Building size={18} color="var(--color-text-muted)" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
                <input type="text" placeholder="Acme Corp Ltd." className="auth-input" />
              </div>
            </div>

            <div className="input-group">
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--color-text)' }}>Work Email</label>
              <div style={{ position: 'relative' }}>
                <Mail size={18} color="var(--color-text-muted)" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
                <input type="email" placeholder="name@company.com" className="auth-input" />
              </div>
            </div>
            
            <div className="input-group">
               <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                 <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text)' }}>Password</label>
               </div>
               <div style={{ position: 'relative' }}>
                <Lock size={18} color="var(--color-text-muted)" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
                <input type="password" placeholder="••••••••" className="auth-input" />
              </div>
            </div>
            
            <button className="btn btn-primary" style={{ width: '100%', marginTop: '1rem', padding: '1rem', justifyContent: 'center', gap: '0.5rem' }}>
              Initialize Account <ArrowRight size={18} />
            </button>
          </form>
          
          <div style={{ textAlign: 'center', marginTop: '2.5rem', fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
            Already have an account? <button onClick={() => setPage('login')} style={{ background: 'none', border: 'none', color: 'var(--color-primary)', fontWeight: 700, cursor: 'pointer', padding: 0, marginLeft: '0.2rem' }}>Sign In</button>
          </div>
        </div>
      </div>
    </section>
  );
}
