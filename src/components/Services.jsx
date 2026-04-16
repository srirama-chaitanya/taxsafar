import { FileText, Receipt, Building, Scale, Globe, Calculator, BookOpen, CreditCard, TrendingUp } from 'lucide-react';

const coreServices = [
  {
    title: "Income Tax Return (ITR) Filing",
    desc: "Complete processing and filing of corporate and individual tax liabilities.",
    icon: FileText
  },
  {
    title: "GST Return Filing",
    desc: "End-to-end GST compliance, handling GSTR-1, GSTR-3B, and annual reconciliations.",
    icon: Receipt
  },
  {
    title: "Company Registration",
    desc: "Incorporations for Pvt Ltd, LLP, OPC, and overarching legal entity structuring.",
    icon: Building
  },
  {
    title: "Assessment & Notice Resolution",
    desc: "Specialized representation before tax authorities handling litigations and notices.",
    icon: Scale
  },
  {
    title: "FSSAI, MSME, Import Export",
    desc: "Comprehensive bureaucratic registrations including MSME, trade, and export licensing.",
    icon: Globe
  },
  {
    title: "Virtual Bookkeeping",
    desc: "Remote, algorithmic accounting to ensure your ledgers are perpetually synced.",
    icon: Calculator
  },
  {
    title: "Consultancy & Legal Compliance",
    desc: "Strategic advisory ensuring absolute alignment with corporate legal frameworks.",
    icon: BookOpen
  },
  {
    title: "Loan & Finance Documentation",
    desc: "Drafting bulletproof financial documentation to secure capital and institutional loans.",
    icon: CreditCard
  },
  {
    title: "Financial Planning & Advisory",
    desc: "Institutional-grade wealth management and strategic investment structuring.",
    icon: TrendingUp
  }
];

const ServiceCard = ({ srv }) => {
  const Icon = srv.icon;
  return (
    <div className="card" style={{ width: '420px', flexShrink: 0, padding: '2.5rem', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', cursor: 'grab', backgroundColor: '#ffffff', boxShadow: '0 10px 25px rgba(0,0,0,0.03)' }}>
      <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: '#e0f2fe', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', color: 'var(--color-primary)' }}>
        <Icon size={28} strokeWidth={2} />
      </div>
      <h4 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.75rem', color: 'var(--color-dark)', letterSpacing: '-0.02em' }}>{srv.title}</h4>
      <p style={{ color: 'var(--color-text-muted)', fontSize: '1rem', lineHeight: 1.6 }}>{srv.desc}</p>
    </div>
  );
};

export default function Services() {
  return (
    <section id="services" style={{ padding: '8rem 0', backgroundColor: '#f8fafc', borderTop: '1px solid var(--color-border)', overflowX: 'hidden' }}>
      <div className="container" style={{ position: 'relative' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h2 style={{ fontSize: '3rem', letterSpacing: '-0.03em', color: 'var(--color-dark)', marginBottom: '1rem' }}>Extensive Capabilities.</h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>A comprehensive suite of institutional-grade financial services designed to scale with your enterprise.</p>
        </div>

      </div>

      {/* Infinite Seamless Slider Area */}
      <style>
        {`
          .marquee-wrapper {
            display: flex;
            width: max-content;
          }
          .marquee-content {
            display: flex;
            gap: 2.5rem;
            padding-right: 2.5rem; /* Match gap exactly to ensure mathematical seamless loop */
            animation: moveLeft 40s linear infinite;
          }
          .marquee-wrapper:hover .marquee-content {
            animation-play-state: paused;
          }
          @keyframes moveLeft {
            0% { transform: translateX(0); }
            100% { transform: translateX(-100%); } /* Shifts exactly 1 array worth of pixels */
          }
        `}
      </style>

      {/* Edge-to-Edge Bleed Wrapper */}
      <div style={{ width: '100vw', position: 'relative', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw' }}>
          
          {/* Edge Vignettes (Frosted fade effect) */}
          <div style={{ position: 'absolute', top: '-10px', left: 0, bottom: '-10px', width: '15vw', background: 'linear-gradient(to right, #f8fafc 10%, transparent)', zIndex: 10, pointerEvents: 'none' }}></div>
          <div style={{ position: 'absolute', top: '-10px', right: 0, bottom: '-10px', width: '15vw', background: 'linear-gradient(to left, #f8fafc 10%, transparent)', zIndex: 10, pointerEvents: 'none' }}></div>
          
          <div className="marquee-wrapper">
             <div className="marquee-content">
                {coreServices.map((srv, i) => (
                   <ServiceCard key={i} srv={srv} />
                ))}
             </div>
             <div className="marquee-content">
                {coreServices.map((srv, i) => (
                   <ServiceCard key={i} srv={srv} />
                ))}
             </div>
          </div>
      </div>

      <div className="container">
        {/* The Security Sub-Section */}
        <div className="grid-2" style={{ marginTop: '10rem' }}>
          <div>
            <h3 style={{ fontSize: '2.5rem', lineHeight: 1.2, marginBottom: '1rem', color: 'var(--color-dark)' }}>Expertise backed by <br/>decades of litigation.</h3>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem' }}>We operate a dense network of former tax adjudicators and senior legal counsel to defend your capital.</p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '3rem', color: 'var(--color-text-muted)' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontWeight: 600 }}><span style={{ color: 'var(--color-primary)' }}>✓</span> 100% compliance mapping</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontWeight: 600 }}><span style={{ color: 'var(--color-primary)' }}>✓</span> Bank-grade encryption for all financial records</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontWeight: 600 }}><span style={{ color: 'var(--color-primary)' }}>✓</span> Direct access to Tier-1 legal counsel</li>
            </ul>
            <a href="#company" className="btn btn-dark" style={{ padding: '0.875rem 2.2rem' }}>Meet the Partners</a>
          </div>
          
          <div style={{ backgroundColor: '#0f172a', borderRadius: '24px', height: '500px', padding: '3.5rem', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden', boxShadow: '0 25px 50px -12px rgba(15,23,42,0.4)' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundImage: 'radial-gradient(#334155 1px, transparent 1px)', backgroundSize: '24px 24px', opacity: 0.25 }}></div>
              
              <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                 <div>
                     <div style={{ color: '#bae6fd', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Enterprise Security Infrastructure</div>
                     <h3 style={{ color: 'white', fontSize: '2.5rem', lineHeight: 1.15, letterSpacing: '-0.02em', maxWidth: '300px' }}>Fortified data protection.</h3>
                 </div>
                 
                 <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                     <div style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)', padding: '1.5rem', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
                         <div style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '0.5rem', fontWeight: 500 }}>Encryption Standard</div>
                         <div style={{ color: 'white', fontSize: '1.5rem', fontWeight: 700 }}>AES-256</div>
                     </div>
                     <div style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)', padding: '1.5rem', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
                         <div style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '0.5rem', fontWeight: 500 }}>System Uptime</div>
                         <div style={{ color: 'white', fontSize: '1.5rem', fontWeight: 700 }}>99.99%</div>
                     </div>
                 </div>
          
                 <div style={{ background: 'linear-gradient(90deg, #0ea5e9, #bae6fd)', height: '4px', width: '100%', borderRadius: '4px', marginTop: '1.5rem', opacity: 0.8 }}></div>
              </div>
          </div>
        </div>

      </div>
    </section>
  );
}
