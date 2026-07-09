import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '8rem' }}>
      <div className="container text-center animate-fade-in">
        <div className="badge"><Sparkles size={16} style={{display: 'inline', verticalAlign: 'middle', marginRight: '4px'}}/> Open to Senior/Lead UX &amp; AI Product Design roles</div>
        <h1 className="mb-6" style={{ fontSize: '4rem' }}>
          Senior UX Designer,<br />
          <span className="text-gradient">Systems Thinker</span> at heart.
        </h1>
        <p className="text-muted mb-8" style={{ fontSize: '1.25rem', maxWidth: '640px', margin: '0 auto 2rem' }}>
          I design systems by understanding how they break — a lens from mechanical engineering
          applied to enterprise UX, AI/agentic products, and civic tech.
        </p>
        <div className="flex justify-center gap-4 delay-200 animate-fade-in">
          <a href="#work" className="btn btn-primary">
            See my work <ArrowRight size={20} />
          </a>
          <a href="#expertise" className="btn btn-glass">
            My approach
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
