export default function Navbar({ setPage }) {
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 100, backgroundColor: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(12px)', borderBottom: '1px solid var(--color-border)' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '70px' }}>
        <a href="/" onClick={(e) => { e.preventDefault(); setPage('home'); }} style={{ fontSize: '1.4rem', fontWeight: 800, letterSpacing: '-0.5px', color: 'var(--color-dark)' }}>
          TAX<span style={{ color: 'var(--color-primary)' }}>safar</span>
        </a>
        
        <nav className="hide-mobile" style={{ display: 'flex', gap: '2.5rem', fontWeight: 500, fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
          <a href="#" onClick={(e) => { e.preventDefault(); setPage('home'); window.scrollTo(0,0); }} style={{ color: 'var(--color-text)' }}>Home</a>
          <a href="#about" onClick={(e) => { if(window.location.hash.includes('signup') || window.location.hash.includes('login')) { setPage('home'); setTimeout(() => { window.location.hash = '#about' }, 100); } }}>About</a>
          <a href="#services" onClick={(e) => { if(window.location.hash.includes('signup') || window.location.hash.includes('login')) { setPage('home'); setTimeout(() => { window.location.hash = '#services' }, 100); } }}>Services</a>
          <a href="#contact" onClick={(e) => { if(window.location.hash.includes('signup') || window.location.hash.includes('login')) { setPage('home'); setTimeout(() => { window.location.hash = '#contact' }, 100); } }}>Contact</a>
        </nav>
        
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <button className="hide-mobile" onClick={() => setPage('signup')} style={{ background: 'transparent', border: 'none', fontWeight: 600, fontSize: '0.9rem', color: 'var(--color-dark)', marginRight: '1rem', cursor: 'pointer' }}>Create Account</button>
          <button className="btn btn-dark" onClick={() => setPage('login')}>Login</button>
        </div>
      </div>
    </header>
  );
}
