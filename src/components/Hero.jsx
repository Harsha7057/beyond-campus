import React from 'react';
import { ArrowRight, Compass, Sparkles, Users, Award, Calendar, Globe2, ChevronDown } from 'lucide-react';
import GlobalNetworkCanvas from './GlobalNetworkCanvas';

export default function Hero({ onJoinClick }) {
  const companyPartners = ['Google', 'Stripe', 'OpenAI', 'Meta', 'Microsoft', 'Vercel', 'GitHub', 'Datadog'];

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex flex-col justify-center overflow-hidden bg-[#070B14]">
      {/* Background Interactive Network Canvas */}
      <GlobalNetworkCanvas />

      {/* Atmospheric Radial Gradients inspired by Logo Sunrise */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-b from-orange-500/15 via-amber-500/5 to-transparent rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-2/3 right-10 w-[450px] h-[350px] bg-gradient-to-tr from-amber-600/10 to-transparent rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-10 w-[350px] h-[350px] bg-gradient-to-br from-blue-600/10 to-transparent rounded-full blur-[100px] pointer-events-none" />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Top Announcement Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-panel border border-orange-500/30 text-xs sm:text-sm text-slate-200 shadow-lg shadow-orange-500/5 hover:border-orange-500/60 transition-all duration-300 cursor-default">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            <span className="text-orange-400 font-semibold uppercase tracking-wider text-[11px]">Next-Gen Community</span>
            <span className="text-slate-400">|</span>
            <span className="text-slate-200">15,000+ Students & 680+ Mentors Worldwide</span>
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          </div>
        </div>

        {/* High-Impact Headline */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight font-display leading-[1.08] text-white">
            Bridging Students and <br className="hidden sm:inline" />
            <span className="text-gradient-sunrise">
              Tech Industry Professionals
            </span>{' '}
            Worldwide.
          </h1>

          <p className="mt-6 text-base sm:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            Beyond Campus breaks down traditional university barriers. We connect ambitious high school and university students with experienced engineers, founders, and mentors for 1:1 guidance, global hackathons, and real-world project mastery.
          </p>

          {/* Dual Call-to-Actions */}
          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onJoinClick('student')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-semibold uppercase tracking-wider text-white shadow-xl shadow-orange-500/25 relative group overflow-hidden transition-all duration-300 hover:shadow-orange-500/40 hover:-translate-y-0.5 focus:outline-none"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 transition-transform duration-300 group-hover:scale-105" />
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative z-10 flex items-center justify-center gap-2.5">
                <Sparkles className="w-4 h-4 text-amber-200" />
                Join as a Student
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>

            <button
              onClick={() => onJoinClick('mentor')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-semibold uppercase tracking-wider text-slate-200 bg-white/[0.04] hover:bg-white/[0.08] border border-white/15 hover:border-orange-500/40 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 focus:outline-none flex items-center justify-center gap-2.5"
            >
              <Compass className="w-4 h-4 text-orange-400" />
              Become a Mentor
            </button>
          </div>

          {/* Quick Nav anchor */}
          <div className="mt-5">
            <a
              href="#pillars"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-orange-400 transition-colors"
            >
              <span>Explore what we do & upcoming events</span>
              <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
            </a>
          </div>
        </div>

        {/* Dynamic 3D Portal Showcase Card */}
        <div className="mt-14 max-w-5xl mx-auto relative">
          <div className="relative rounded-3xl p-1 bg-gradient-to-b from-white/15 via-orange-500/20 to-white/5 shadow-2xl shadow-black/80">
            <div className="relative rounded-[22px] bg-[#090F1E]/95 overflow-hidden border border-white/10 p-4 sm:p-8">
              
              {/* Inner Portal Art & Visual Representation */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left: Graphic Portal Card echoing Logo */}
                <div className="lg:col-span-5 relative flex items-center justify-center">
                  <div className="relative w-full max-w-[320px] aspect-square rounded-2xl overflow-hidden border border-orange-500/30 shadow-2xl shadow-orange-500/20 group">
                    <img
                      src="./logo.jpg"
                      alt="Beyond Campus Visual Portal"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#070B14] via-transparent to-transparent opacity-60" />
                    <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 text-xs">
                      <div className="flex items-center justify-between text-orange-400 font-semibold mb-1">
                        <span>THE PORTAL</span>
                        <span className="text-[10px] uppercase font-mono text-slate-300">Global Gateway</span>
                      </div>
                      <p className="text-slate-300 text-[11px] leading-tight">
                        From campus textbooks to high-scale production systems.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right: Live Ecosystem Snapshot Cards */}
                <div className="lg:col-span-7 flex flex-col gap-3.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase font-mono tracking-widest text-orange-400 font-semibold flex items-center gap-1.5">
                      <Globe2 className="w-3.5 h-3.5" />
                      Live Community Pulse
                    </span>
                    <span className="text-xs text-slate-400 font-mono">Updated real-time</span>
                  </div>

                  {/* Micro Pulse Card 1 */}
                  <div className="p-3.5 rounded-xl glass-card flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400">
                        <Award className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white flex items-center gap-2">
                          BeyondHacks 2026
                          <span className="px-2 py-0.5 rounded-md bg-orange-500/20 text-orange-400 text-[10px] font-mono font-medium">
                            $30,000 Prizes
                          </span>
                        </div>
                        <div className="text-xs text-slate-400">Global AI & Cloud Sprint • 1,250+ already registered</div>
                      </div>
                    </div>
                    <a
                      href="#events"
                      className="hidden sm:inline-flex px-3 py-1.5 rounded-lg text-xs font-medium text-orange-400 hover:text-white bg-orange-500/10 hover:bg-orange-500/20 border border-orange-500/30 transition-colors"
                    >
                      View Event
                    </a>
                  </div>

                  {/* Micro Pulse Card 2 */}
                  <div className="p-3.5 rounded-xl glass-card flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                        <Users className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white flex items-center gap-2">
                          1:1 Senior Engineering Mentorship
                          <span className="px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-400 text-[10px] font-mono font-medium">
                            Weekly Slots
                          </span>
                        </div>
                        <div className="text-xs text-slate-400">Google, Stripe, OpenAI, Meta, Datadog mentors ready to guide you</div>
                      </div>
                    </div>
                    <a
                      href="#mentors"
                      className="hidden sm:inline-flex px-3 py-1.5 rounded-lg text-xs font-medium text-emerald-400 hover:text-white bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 transition-colors"
                    >
                      Browse Mentors
                    </a>
                  </div>

                  {/* Micro Pulse Card 3 */}
                  <div className="p-3.5 rounded-xl glass-card flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                        <Calendar className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white flex items-center gap-2">
                          Global City Chapters & Meetups
                          <span className="px-2 py-0.5 rounded-md bg-blue-500/20 text-blue-400 text-[10px] font-mono font-medium">
                            26 Hubs
                          </span>
                        </div>
                        <div className="text-xs text-slate-400">San Francisco, London, Bangalore, Berlin, Singapore, Toronto</div>
                      </div>
                    </div>
                    <a
                      href="#about"
                      className="hidden sm:inline-flex px-3 py-1.5 rounded-lg text-xs font-medium text-blue-400 hover:text-white bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 transition-colors"
                    >
                      Find Chapter
                    </a>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Proof / Mentors Work At */}
        <div className="mt-16 text-center">
          <p className="text-xs font-mono uppercase tracking-widest text-slate-400 font-medium mb-6">
            Our Mentors, Speakers & Alumni Build At Global Tech Leaders
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 opacity-75">
            {companyPartners.map((company) => (
              <span
                key={company}
                className="text-base sm:text-lg font-display font-semibold tracking-wider text-slate-300 hover:text-orange-400 transition-colors"
              >
                {company}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
