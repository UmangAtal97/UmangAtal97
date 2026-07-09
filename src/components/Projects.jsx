import React from 'react';
import { Layers, Globe2, Trophy, Bot } from 'lucide-react';

const projects = [
  {
    icon: <Layers size={28} />,
    color: '#a78bfa',
    tag: 'Enterprise SaaS',
    title: 'Enterprise Design System',
    desc: 'Built a 48-component design system from the ground up, adopted across 4 products — bringing visual and interaction consistency at scale.',
    stats: ['48 components', '4 products']
  },
  {
    icon: <Globe2 size={28} />,
    color: '#3b82f6',
    tag: 'Civic Tech',
    title: 'FIDE / Beckn Protocol',
    desc: 'UX for decentralized civic tech infrastructure, designing open-network experiences for public-good discovery and access.',
    stats: ['Decentralized network', 'Open protocol']
  },
  {
    icon: <Trophy size={28} />,
    color: '#f472b6',
    tag: 'Sports Entertainment',
    title: 'ONE Championship',
    desc: 'Designed a global fan platform experience for one of the world’s largest martial arts organizations, shipped across 7 markets.',
    stats: ['7 markets', 'Global fan platform']
  },
  {
    icon: <Bot size={28} />,
    color: '#22d3ee',
    tag: 'AI / Agentic',
    title: 'Warble Cloud',
    desc: 'Currently contributing UX, brand, and product strategy to an agentic SRE platform — designing for reasoning and autonomous workflows.',
    stats: ['Agentic SRE platform', 'Currently building']
  }
];

const Projects = () => {
  return (
    <section id="work" className="section container">
      <div className="text-center mb-12 animate-fade-in">
        <h2 style={{ fontSize: '2.5rem' }}>Selected <span className="text-gradient">Work</span></h2>
        <p className="text-muted mt-2">Across B2B SaaS, enterprise platforms, civic tech, sports entertainment, and Web3.</p>
      </div>

      <div className="grid grid-2">
        {projects.map((p, idx) => (
          <div key={idx} className="glass hover-card" style={{ padding: '2rem' }}>
            <div className="flex items-center gap-4 mb-4">
              <div style={{ background: `${p.color}1a`, padding: '0.875rem', borderRadius: '12px', color: p.color, display: 'flex' }}>
                {p.icon}
              </div>
              <span className="badge" style={{ marginBottom: 0 }}>{p.tag}</span>
            </div>
            <h3 className="mb-2">{p.title}</h3>
            <p className="text-muted mb-4">{p.desc}</p>
            <div className="flex gap-4" style={{ flexWrap: 'wrap' }}>
              {p.stats.map((s, i) => (
                <span key={i} className="stat-pill">{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
