import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/mockData';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS_DATA.length - 1 ? 0 : prev + 1));
  };

  // Auto-advance every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const current = TESTIMONIALS_DATA[currentIndex];

  return (
    <section className="py-24 relative bg-[#070B14] overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-mono font-semibold tracking-wider uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Student Voices & Outcomes
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight">
            Proof in the Craft. <br />
            <span className="text-gradient-sunrise">Real Stories from Our Community.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300">
            See how high school and university students leveraged Beyond Campus to land dream roles, launch venture-backed startups, and build open-source software.
          </p>
        </div>

        {/* Featured Testimonial Spotlight Carousel */}
        <div className="max-w-4xl mx-auto relative">
          <div className="relative rounded-3xl p-8 sm:p-12 glass-panel-warm border border-orange-500/30 shadow-2xl overflow-hidden transition-all duration-500">
            
            {/* Giant Watermark Quote */}
            <Quote className="absolute -bottom-6 -right-6 w-48 h-48 text-white/[0.03] pointer-events-none" />

            <div className="relative z-10">
              {/* Top Bar: Stars + Tag */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-1">
                  {[...Array(current.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-orange-500/20 text-orange-400 border border-orange-500/30">
                  {current.tag}
                </span>
              </div>

              {/* Quote text */}
              <p className="text-lg sm:text-2xl text-slate-100 font-medium leading-relaxed italic mb-8">
                "{current.quote}"
              </p>

              {/* Student Metadata */}
              <div className="flex items-center justify-between pt-6 border-t border-white/10">
                <div className="flex items-center gap-4">
                  <img
                    src={current.avatar}
                    alt={current.name}
                    className="w-14 h-14 rounded-2xl object-cover border-2 border-orange-500/40 shadow-lg"
                  />
                  <div>
                    <h4 className="text-base sm:text-lg font-bold font-display text-white">
                      {current.name}
                    </h4>
                    <div className="text-xs text-slate-400 mb-0.5">{current.school}</div>
                    <div className="text-xs font-semibold text-orange-400 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      {current.outcome}
                    </div>
                  </div>
                </div>

                {/* Carousel Controls */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={prev}
                    className="p-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors focus:outline-none"
                    aria-label="Previous Testimonial"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={next}
                    className="p-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors focus:outline-none"
                    aria-label="Next Testimonial"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {TESTIMONIALS_DATA.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-2 rounded-full transition-all ${
                  currentIndex === i ? 'w-8 bg-orange-500' : 'w-2 bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* 4-Card Quick Grid Preview on desktop */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {TESTIMONIALS_DATA.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setCurrentIndex(index)}
              className={`p-5 rounded-2xl cursor-pointer transition-all border ${
                currentIndex === index
                  ? 'glass-panel-warm border-orange-500/50 shadow-lg'
                  : 'glass-card border-white/5 hover:border-white/20'
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-9 h-9 rounded-xl object-cover border border-white/10"
                />
                <div className="overflow-hidden">
                  <div className="text-xs font-bold text-white truncate">{item.name}</div>
                  <div className="text-[10px] text-slate-400 truncate">{item.school}</div>
                </div>
              </div>
              <div className="text-xs text-orange-400 font-medium truncate mb-2">
                {item.outcome}
              </div>
              <p className="text-[11px] text-slate-300 line-clamp-2 italic">
                "{item.quote}"
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
