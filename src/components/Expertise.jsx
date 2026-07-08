import React from 'react';
import { GitBranch, BrainCircuit, Component } from 'lucide-react';

const Expertise = () => {
  const items = [
    {
      icon: <GitBranch size={32} className="mb-4" style={{ color: '#a78bfa' }} />,
      title: 'Systems Thinking',
      desc: 'A mechanical engineering lens for understanding how complex systems break, applied to enterprise UX, B2B SaaS, and civic tech.'
    },
    {
      icon: <BrainCircuit size={32} className="mb-4" style={{ color: '#3b82f6' }} />,
      title: 'AI-Driven UX',
      desc: 'Currently exploring agentic UX — designing for agent-based systems, reasoning workflows, and AI-native products.'
    },
    {
      icon: <Component size={32} className="mb-4" style={{ color: '#f472b6' }} />,
      title: 'Enterprise Design Systems',
      desc: 'Built a 48-component design system adopted across 4 products, bringing consistency at scale without slowing teams down.'
    }
  ];

  return (
    <section id="expertise" className="section container">
      <div className="text-center mb-12 animate-fade-in">
        <h2 style={{ fontSize: '2.5rem' }}>My <span className="text-gradient-secondary">Approach</span></h2>
        <p className="text-muted mt-2">Harmonizing systems thinking with product and business needs.</p>
      </div>

      <div className="grid grid-3">
        {items.map((item, idx) => (
          <div key={idx} className="glass hover-card" style={{ padding: '2rem' }}>
            {item.icon}
            <h3 className="mb-2">{item.title}</h3>
            <p className="text-muted">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Expertise;
