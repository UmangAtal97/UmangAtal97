import React from 'react';
import { Code2, Terminal, Boxes, Container } from 'lucide-react';

const Skills = () => {
  return (
    <section className="section container">
      <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', alignItems: 'center' }}>
        <div className="animate-fade-in">
          <h2 className="mb-4" style={{ fontSize: '2.5rem' }}>Currently <span className="text-gradient">Learning</span></h2>
          <p className="text-muted mb-8">
            Building technical credibility to design better for AI/agentic and infrastructure-heavy products.
          </p>

          <div className="flex gap-4 mb-6" style={{ flexDirection: 'column' }}>
            <div className="glass hover-card" style={{ padding: '1.5rem', display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
              <div style={{ background: 'rgba(59, 130, 246, 0.1)', padding: '1rem', borderRadius: '12px' }}>
                <Terminal size={28} style={{ color: '#3b82f6' }} />
              </div>
              <div>
                <h4 className="mb-2">Python</h4>
                <p className="text-muted" style={{ fontSize: '0.9rem' }}>Foundations → DevOps-relevant scripting</p>
              </div>
            </div>

            <div className="glass hover-card" style={{ padding: '1.5rem', display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
              <div style={{ background: 'rgba(139, 92, 246, 0.1)', padding: '1rem', borderRadius: '12px' }}>
                <Boxes size={28} style={{ color: '#8b5cf6' }} />
              </div>
              <div>
                <h4 className="mb-2">Electron.js</h4>
                <p className="text-muted" style={{ fontSize: '0.9rem' }}>Desktop app fundamentals</p>
              </div>
            </div>

            <div className="glass hover-card" style={{ padding: '1.5rem', display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
              <div style={{ background: 'rgba(34, 211, 238, 0.1)', padding: '1rem', borderRadius: '12px' }}>
                <Container size={28} style={{ color: '#22d3ee' }} />
              </div>
              <div>
                <h4 className="mb-2">Kubernetes</h4>
                <p className="text-muted" style={{ fontSize: '0.9rem' }}>Fundamentals, framed around AI/agentic UX credibility</p>
              </div>
            </div>
          </div>
        </div>

        <div className="glass" style={{ padding: '3rem', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '150px', height: '150px', background: 'var(--primary-gradient)', filter: 'blur(80px)', opacity: 0.5 }}></div>
          <div style={{ position: 'absolute', bottom: '-50px', left: '-50px', width: '150px', height: '150px', background: 'var(--secondary-gradient)', filter: 'blur(80px)', opacity: 0.5 }}></div>

          <Code2 size={48} className="mb-6 text-gradient" style={{ color: '#a78bfa' }} />
          <h3 className="mb-4" style={{ fontSize: '1.5rem' }}>Why I code</h3>
          <p className="text-muted" style={{position: 'relative', zIndex: 1}}>
            Design decides the direction — but understanding the underlying systems, from scripting
            to infrastructure, means I can design agentic and DevOps-adjacent products that actually
            hold up in production.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
