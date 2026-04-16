import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" style={{ padding: '8rem 0', backgroundColor: '#ffffff', borderTop: '1px solid var(--color-border)' }}>
      <div className="container">
         <div className="grid-2" style={{ alignItems: 'flex-start', gap: '6rem' }}>
            
            {/* Left Box: Contact Info */}
            <div>
               <h2 style={{ fontSize: '3.5rem', letterSpacing: '-0.04em', lineHeight: 1.1, color: 'var(--color-dark)', marginBottom: '1.5rem' }}>
                  Secure your <br/><span style={{ color: 'var(--color-primary)' }}>corporate future.</span>
               </h2>
               <p style={{ fontSize: '1.15rem', color: 'var(--color-text-muted)', marginBottom: '4rem', lineHeight: 1.6, maxWidth: '400px' }}>
                  Our Tier-1 legal and accounting network is ready to architect your financial defense. Drop us a line to schedule an introductory consultation.
               </p>

               <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                   <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                       <div style={{ width: '64px', height: '64px', borderRadius: '50%', border: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f8fafc' }}>
                           <Mail color="var(--color-dark)" size={24} />
                       </div>
                       <div>
                           <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.25rem' }}>Direct Inquiry</div>
                           <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-dark)' }}>hello@taxsafar.com</div>
                       </div>
                   </div>
                   
                   <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                       <div style={{ width: '64px', height: '64px', borderRadius: '50%', border: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f8fafc' }}>
                           <Phone color="var(--color-dark)" size={24} />
                       </div>
                       <div>
                           <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.25rem' }}>Partner Desk</div>
                           <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-dark)' }}>+91 98765 43210</div>
                       </div>
                   </div>

                   <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                       <div style={{ width: '64px', height: '64px', borderRadius: '50%', border: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f8fafc' }}>
                           <MapPin color="var(--color-dark)" size={24} />
                       </div>
                       <div>
                           <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.25rem' }}>Global HQ</div>
                           <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-dark)' }}>Connaught Place, New Delhi</div>
                       </div>
                   </div>
               </div>
            </div>

            {/* Right Box: Consultation Form */}
            <div style={{ backgroundColor: 'var(--color-surface)', padding: '3.5rem', borderRadius: '32px', border: '1px solid var(--color-border)', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.05)' }}>
               <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-dark)', marginBottom: '2rem' }}>Request Consultation</h3>
               
               <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }} onSubmit={e => e.preventDefault()}>
                  <div className="grid-2" style={{ gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
                      <div className="input-group">
                          <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--color-text)' }}>First Name</label>
                          <input type="text" placeholder="John" className="auth-input" style={{ width: '100%', paddingLeft: '1.25rem' }} />
                      </div>
                      <div className="input-group">
                          <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--color-text)' }}>Last Name</label>
                          <input type="text" placeholder="Doe" className="auth-input" style={{ width: '100%', paddingLeft: '1.25rem' }} />
                      </div>
                  </div>

                  <div className="input-group">
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--color-text)' }}>Work Email</label>
                      <input type="email" placeholder="john@company.com" className="auth-input" style={{ width: '100%', paddingLeft: '1.25rem' }} />
                  </div>

                  <div className="input-group">
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--color-text)' }}>Corporate Entity</label>
                      <input type="text" placeholder="Acme Corp Ltd." className="auth-input" style={{ width: '100%', paddingLeft: '1.25rem' }} />
                  </div>

                  <div className="input-group">
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--color-text)' }}>How can we help?</label>
                      <textarea placeholder="Briefly describe your compliance requirements..." className="auth-input" style={{ width: '100%', paddingLeft: '1.25rem', paddingTop: '1.25rem', minHeight: '120px', resize: 'none', fontFamily: 'inherit' }}></textarea>
                  </div>

                  <button className="btn btn-dark" style={{ width: '100%', padding: '1.25rem', marginTop: '0.75rem', display: 'flex', justifyContent: 'center', gap: '0.5rem' }}>
                      Transmit Inquiry <ArrowRight size={18} />
                  </button>
               </form>
            </div>

         </div>
      </div>
    </section>
  )
}
