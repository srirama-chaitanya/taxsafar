export default function Footer() {
  return (
    <footer id="company" style={{ backgroundColor: 'white', borderTop: '1px solid var(--color-border)', paddingTop: '6rem', paddingBottom: '2rem' }}>
      <div className="container">
        <div className="grid-3" style={{ borderBottom: '1px solid var(--color-border)', paddingBottom: '4rem', marginBottom: '2rem' }}>
          <div>
            <a href="/" style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-0.5px', color: 'var(--color-dark)', display: 'block', marginBottom: '1.5rem' }}>
              TAX<span style={{ color: 'var(--color-primary)' }}>safar</span>
            </a>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: 1.6, maxWidth: '300px' }}>
              The definitive architecture for modern taxation, accounting, and legal defense. Built for scale.
            </p>
          </div>
          
          <div>
            <h4 style={{ color: 'var(--color-dark)', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Platform</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              <li><a href="#" style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', fontWeight: 500 }}>Company Incorporation</a></li>
              <li><a href="#" style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', fontWeight: 500 }}>Tax Advisory</a></li>
              <li><a href="#" style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', fontWeight: 500 }}>Virtual CFO</a></li>
            </ul>
          </div>
          
          <div>
            <h4 style={{ color: 'var(--color-dark)', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Company</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              <li><a href="#" style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', fontWeight: 500 }}>About Us</a></li>
              <li><a href="#" style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', fontWeight: 500 }}>Integrity Framework</a></li>
              <li><a href="#" style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', fontWeight: 500 }}>Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'var(--color-text-muted)', fontSize: '0.85rem', fontWeight: 500 }}>
          <span>&copy; 2026 TaxSafar. Precision guaranteed.</span>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
