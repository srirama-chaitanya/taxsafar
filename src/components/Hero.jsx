import { motion } from 'framer-motion';

export default function Hero({ setPage }) {
  return (
    <section style={{ paddingTop: '7rem', paddingBottom: '7rem', backgroundColor: 'var(--color-bg)', overflow: 'hidden' }}>
      <div className="container">
        <div className="grid-2">
            
            {/* Left Content */}
            <div style={{ textAlign: 'left' }}>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', padding: '0.5rem 1.25rem', backgroundColor: '#e0f2fe', border: '1px solid #bae6fd', borderRadius: '99px', fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-primary)', marginBottom: '2.5rem' }}>
                    India's Certified Financial Infrastructure
                    </div>
                    
                    <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', lineHeight: 1.1, letterSpacing: '-0.04em', marginBottom: '2rem', color: 'var(--color-dark)', fontWeight: 900 }}>
                    Precision Compliance. <br/> <span style={{ color: 'var(--color-primary)' }}>Unrivaled Scale.</span>
                    </h1>
                    
                    <p style={{ fontSize: 'clamp(1rem, 4vw, 1.2rem)', color: 'var(--color-text-muted)', marginBottom: '3.5rem', lineHeight: 1.6, maxWidth: '550px' }}>
                    A powerful fusion of top-tier legal defense, flawless corporate tax return filing, and institutional accounting. Everything required to scale your business.
                    </p>
                    
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                        <button className="btn btn-dark" onClick={() => setPage && setPage('signup')} style={{ padding: '1.1rem 2.4rem', fontSize: '1.05rem', fontWeight: 700, borderRadius: '16px' }}>Schedule Consultation</button>
                        <a className="btn btn-outline" href="#services" style={{ padding: '1.1rem 2.4rem', fontSize: '1.05rem', fontWeight: 700, borderRadius: '16px' }}>View Services</a>
                    </div>
                </motion.div>
            </div>
            
            {/* Right Content : High-Fidelity Fintech Visual Image */}
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1, ease: 'easeOut' }}
                    style={{ position: 'relative', width: '100%', borderRadius: '32px', overflow: 'hidden', boxShadow: '0 40px 80px -20px rgba(0,0,0,0.15)', border: '1px solid var(--color-border)' }}>
                    <img src="/hero_visual.png" alt="TaxSafar Enterprise Dashboard" style={{ width: '100%', height: 'auto', display: 'block' }} />
                </motion.div>
                
                {/* Subtle Ambient Glow */}
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '80%', height: '80%', background: 'radial-gradient(circle, rgba(14,165,233,0.1) 0%, transparent 70%)', filter: 'blur(50px)', zIndex: -1 }}></div>
            </div>
            
        </div>
      </div>
    </section>
  );
}
