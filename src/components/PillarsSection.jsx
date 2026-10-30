import React, { useState } from 'react';
import { Compass, Flame, Laptop, MapPin, Check, ArrowRight, X, Sparkles, BookOpen } from 'lucide-react';
import { PILLARS_DATA } from '../data/mockData';

const iconMap = {
  Compass,
  Flame,
  Laptop,
  MapPin
};

export default function PillarsSection({ onJoinClick }) {
  const [selectedPillar, setSelectedPillar] = useState(null);

  return (
    <section id="pillars" className="py-24 relative bg-[#070B14]">
      {/* Background accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-orange-500/10 via-amber-500/5 to-transparent rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-mono font-semibold tracking-wider uppercase mb-4">
            <Flame className="w-3.5 h-3.5" />
            Core Ecosystem
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight">
            Four Pillars That Turn <br />
            <span className="text-gradient-sunrise">Potential into Production Mastery.</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed">
            Every program inside Beyond Campus is intentionally designed to accelerate your engineering maturity, cultivate soft skills, and surround you with genuine champions in the tech industry.
          </p>
        </div>

        {/* 4 Pillars Interactive Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {PILLARS_DATA.map((pillar) => {
            const Icon = iconMap[pillar.icon] || Compass;

            return (
              <div
                key={pillar.id}
                className="group relative rounded-3xl p-8 glass-card border border-white/10 hover:border-orange-500/40 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Top Subtle Gradient */}
                <div className={`absolute top-0 left-0 right-0 h-32 bg-gradient-to-b ${pillar.gradient} pointer-events-none`} />

                <div className="relative z-10">
                  {/* Top Bar: Icon & Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-orange-500/10">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-white/5 border border-white/10 text-orange-300">
                      {pillar.badge}
                    </span>
                  </div>

                  {/* Title & Summary */}
                  <h3 className="text-2xl font-bold font-display text-white group-hover:text-orange-300 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                    {pillar.summary}
                  </p>

                  {/* Bullet Highlights */}
                  <div className="mt-6 space-y-2.5">
                    {pillar.details.map((detail, index) => (
                      <div key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <Check className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Metric & Action */}
                <div className="relative z-10 mt-8 pt-5 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs font-mono text-orange-400 font-medium">
                    ⚡ {pillar.metric}
                  </span>

                  <button
                    onClick={() => setSelectedPillar(pillar)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-white hover:text-orange-400 transition-colors focus:outline-none"
                  >
                    <span>View Curriculum</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global Hubs Banner */}
        <div className="mt-16 p-8 rounded-3xl glass-panel-warm border border-orange-500/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 flex-shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold font-display text-white">
                Want to Launch a Beyond Campus Chapter at Your University?
              </h4>
              <p className="text-xs sm:text-sm text-slate-300">
                We provide grant funding, mentor speaker access, and official sponsorship packages for campus leads.
              </p>
            </div>
          </div>
          <button
            onClick={() => onJoinClick('student')}
            className="flex-shrink-0 px-6 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider bg-white/10 hover:bg-orange-500 hover:text-white text-slate-200 border border-white/15 hover:border-orange-500 transition-all duration-300"
          >
            Apply for Campus Grant
          </button>
        </div>

      </div>

      {/* Pillar Detail Modal */}
      {selectedPillar && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative max-w-xl w-full rounded-3xl bg-[#090F1E] border border-orange-500/30 p-6 sm:p-8 shadow-2xl shadow-orange-500/10">
            <button
              onClick={() => setSelectedPillar(null)}
              className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white bg-white/5 border border-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-orange-500/20 text-orange-400 border border-orange-500/30">
                {selectedPillar.badge}
              </span>
            </div>

            <h3 className="text-2xl font-bold font-display text-white mb-2">
              {selectedPillar.title}
            </h3>
            <p className="text-sm text-slate-300 mb-6">
              {selectedPillar.summary}
            </p>

            <div className="space-y-4 mb-8">
              <h4 className="text-xs uppercase font-mono tracking-widest text-orange-400 font-semibold">
                What You Receive Inside This Track:
              </h4>
              {selectedPillar.details.map((item, i) => (
                <div key={i} className="p-3 rounded-xl bg-white/[0.03] border border-white/10 flex items-start gap-3">
                  <Check className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-200">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between gap-4 pt-4 border-t border-white/10">
              <span className="text-xs font-mono text-slate-400">
                Metric: {selectedPillar.metric}
              </span>
              <button
                onClick={() => {
                  setSelectedPillar(null);
                  onJoinClick('student');
                }}
                className="px-5 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg shadow-orange-500/25 hover:scale-105 transition-transform"
              >
                Join Track Free
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
