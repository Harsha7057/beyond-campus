import React, { useState, useEffect, useRef } from 'react';
import { Users, GraduationCap, Code2, Globe, Sparkles, CheckCircle2, Target, ArrowRight } from 'lucide-react';
import { STATS_DATA } from '../data/mockData';

// Hook for animated counter when scrolled into view
function useCounter(target, duration = 2000, trigger = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;
    let start = 0;
    const end = target;
    const totalSteps = 60;
    const stepTime = duration / totalSteps;
    const increment = end / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [target, duration, trigger]);

  return count;
}

function StatCounterCard({ stat, isVisible }) {
  const count = useCounter(stat.value, 1800, isVisible);

  return (
    <div className="p-6 sm:p-8 rounded-2xl glass-card relative overflow-hidden group">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full blur-2xl group-hover:bg-orange-500/15 transition-all duration-500 pointer-events-none" />

      <div className="flex items-center justify-between mb-4">
        <span className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight flex items-baseline">
          {count.toLocaleString()}
          <span className="text-orange-400 ml-0.5">{stat.suffix}</span>
        </span>
        <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-orange-400">
          {stat.growth}
        </span>
      </div>

      <div className="text-base sm:text-lg font-semibold text-slate-100 mb-1">
        {stat.label}
      </div>
      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
        {stat.description}
      </p>

      {/* Progress Line */}
      <div className="mt-4 w-full h-1 bg-white/10 rounded-full overflow-hidden">
        <div className="h-full bg-gradient-to-r from-amber-500 to-orange-500 rounded-full transition-all duration-1000 w-full" />
      </div>
    </div>
  );
}

export default function AboutSection({ onJoinClick }) {
  const [hasScrolledIntoView, setHasScrolledIntoView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasScrolledIntoView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const storyPillars = [
    {
      title: 'Democratized Industry Access',
      description: 'You shouldn’t need an Ivy League pedigree or Silicon Valley zip code to receive world-class mentorship from lead engineers.',
      icon: Target
    },
    {
      title: 'Real-World Production Craftsmanship',
      description: 'We transition students from toy homework problems to shipping real distributed systems, containerized cloud stacks, and open-source packages.',
      icon: Code2
    },
    {
      title: 'Global Peer & Founder Fellowship',
      description: 'Surround yourself with the top 1% ambitious student builders worldwide. Find your future hackathon teammates and co-founders.',
      icon: Sparkles
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-24 relative bg-[#070B14] overflow-hidden">
      {/* Decorative Grid and Background elements */}
      <div className="absolute inset-0 bg-hero-grid opacity-30 pointer-events-none" />
      <div className="absolute -left-40 top-1/3 w-96 h-96 bg-orange-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-mono font-semibold tracking-wider uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Our Story & Global Mission
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight">
            The Classroom Ends. <br />
            <span className="text-gradient-sunrise">Your Real Career Begins Here.</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed">
            University curricula teach foundational algorithms, but the modern tech industry moves at lightspeed. Beyond Campus was founded by students and engineers who realized the fastest route to mastery is direct apprenticeship with those who build at scale every single day.
          </p>
        </div>

        {/* Impact Counters Grid (Section 3 Requirement) */}
        <div id="stats" className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS_DATA.map((stat) => (
            <StatCounterCard key={stat.id} stat={stat} isVisible={hasScrolledIntoView} />
          ))}
        </div>

        {/* The Story & Difference Grid */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Visual Manifesto Card */}
          <div className="lg:col-span-6 relative">
            <div className="p-8 sm:p-10 rounded-3xl glass-panel-warm border border-orange-500/20 relative overflow-hidden shadow-2xl">
              <div className="relative z-10">
                <span className="text-xs uppercase font-mono tracking-widest text-orange-400 font-bold">
                  The Beyond Campus Philosophy
                </span>
                <h3 className="mt-3 text-2xl sm:text-3xl font-bold font-display text-white">
                  "No Gatekeepers. No Geographies. Just Builders Helping Builders."
                </h3>
                <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
                  We believe talent is uniformly distributed across the world, but opportunity is not. Whether you attend a high school in Nairobi, a community college in Ohio, or a university in Berlin — our platform pairs your curiosity with industry leaders eager to pull you up.
                </p>

                <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src="./logo.jpg"
                      alt="Beyond Campus Icon"
                      className="w-12 h-12 rounded-xl object-cover border border-white/15"
                    />
                    <div>
                      <div className="text-sm font-semibold text-white">Beyond Campus Foundation</div>
                      <div className="text-xs text-slate-400">501(c)(3) Global Educational Community</div>
                    </div>
                  </div>
                  <button
                    onClick={() => onJoinClick('student')}
                    className="p-3 rounded-xl bg-orange-500/20 hover:bg-orange-500/30 text-orange-400 border border-orange-500/40 transition-colors"
                    aria-label="Join Community"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 3 Pillars of Impact */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            {storyPillars.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl glass-card flex items-start gap-4 hover:border-orange-500/30 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex-shrink-0 flex items-center justify-center text-orange-400">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold font-display text-white mb-1.5 flex items-center gap-2">
                      {item.title}
                    </h4>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
