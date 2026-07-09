import React from 'react';
import { Users, Globe } from 'lucide-react';

const CTA = () => {
  return (
    <section id="contact" className="section container">
      <div className="glass text-center animate-fade-in" style={{ padding: '4rem 2rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '100%', height: '100%', background: 'var(--primary-gradient)', filter: 'blur(120px)', opacity: 0.15, zIndex: 0 }}></div>

        <div style={{ position: 'relative', zIndex: 1 }}>
          <h2 className="mb-4" style={{ fontSize: '3rem' }}>Let's build something <span className="text-gradient">extraordinary</span></h2>
          <p className="text-muted mb-8" style={{ fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
            Open to Senior/Lead UX and AI Product Design roles. Reach out if you're building enterprise,
            AI/agentic, or civic tech products that need systems-level design thinking.
          </p>
          <div className="flex justify-center gap-4" style={{ flexWrap: 'wrap' }}>
            <a href="https://www.linkedin.com/in/umangatal/" target="_blank" rel="noreferrer" className="btn btn-primary" style={{ fontSize: '1.125rem', padding: '1rem 2.5rem' }}>
              <Users size={20} /> Connect on LinkedIn
            </a>
            <a href="https://umangatal.netlify.app" target="_blank" rel="noreferrer" className="btn btn-glass" style={{ fontSize: '1.125rem', padding: '1rem 2.5rem' }}>
              <Globe size={20} /> Full Portfolio
            </a>
          </div>
        </div>
      </div>

      <div className="text-center mt-12 text-muted" style={{ fontSize: '0.875rem' }}>
        <p>© {new Date().getFullYear()} Umang Atal — Senior UX Designer, Systems Thinker.</p>
      </div>
    </section>
  );
};

export default CTA;
