import React from 'react';
import { GraduationCap, Compass, Layers, Users, Sparkles } from 'lucide-react';

const milestones = [
  {
    icon: <GraduationCap size={20} />,
    year: '2019',
    title: 'B.Tech, Mechanical Engineering',
    desc: 'VIT Pune — the systems-thinking foundation behind how I approach UX today.'
  },
  {
    icon: <Compass size={20} />,
    year: 'Since',
    title: 'UX across domains',
    desc: 'B2B SaaS, enterprise platforms, civic tech, sports entertainment, and Web3.'
  },
  {
    icon: <Layers size={20} />,
    year: 'Milestone',
    title: 'Enterprise design system',
    desc: '48 components adopted across 4 products, plus civic tech work on FIDE/Beckn Protocol and ONE Championship’s fan platform in 7 markets.'
  },
  {
    icon: <Users size={20} />,
    year: 'Ongoing',
    title: 'Association of Designers of India',
    desc: 'Core Committee Member, Pune Chapter — event planning and speaker curation for the design community.'
  },
  {
    icon: <Sparkles size={20} />,
    year: 'Now',
    title: 'Warble Cloud + AI/agentic UX',
    desc: 'Contributing UX, brand, and product strategy to an agentic SRE platform, while learning Python, Electron.js, and Kubernetes fundamentals to build credibility for AI/agentic UX roles.'
  }
];

const Journey = () => {
  return (
    <section id="journey" className="section container">
      <div className="text-center mb-12 animate-fade-in">
        <h2 style={{ fontSize: '2.5rem' }}>My <span className="text-gradient-secondary">Journey</span></h2>
        <p className="text-muted mt-2">From mechanical engineering to designing agentic systems.</p>
      </div>

      <div className="timeline">
        {milestones.map((m, idx) => (
          <div key={idx} className="timeline-item">
            <div className="timeline-marker">{m.icon}</div>
            <div className="glass hover-card timeline-content">
              <span className="timeline-year">{m.year}</span>
              <h3 className="mb-2">{m.title}</h3>
              <p className="text-muted">{m.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Journey;
