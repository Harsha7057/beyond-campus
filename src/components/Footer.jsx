import React, { useState } from 'react';
import { ArrowUp, Sparkles, Send, Heart, Shield, Globe2, CheckCircle2 } from 'lucide-react';

export default function Footer({ onShowToast }) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!newsletterEmail) return;

    setSubscribed(true);
    onShowToast('🎉 Thank you for subscribing to the Beyond Campus Dispatch!');
    setNewsletterEmail('');
    setTimeout(() => setSubscribed(false), 5000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#05080F] border-t border-white/10 pt-16 pb-12 overflow-hidden text-slate-300">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-orange-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Newsletter Grid */}
        <div className="p-8 sm:p-10 rounded-3xl glass-panel-warm border border-orange-500/20 mb-16 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <span className="text-xs uppercase font-mono tracking-widest text-orange-400 font-bold flex items-center gap-1.5 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              The Beyond Campus Dispatch
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
              Stay ahead with curated hackathons, internship drops & tech talks.
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-300">
              Zero spam. Delivered every alternating Tuesday to 18,000+ ambitious student engineers worldwide.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="w-full lg:w-auto flex-1 max-w-md">
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                required
                placeholder="Enter your student or work email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-orange-500 text-white text-xs sm:text-sm focus:outline-none placeholder:text-slate-400"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg shadow-orange-500/20 hover:scale-105 transition-all flex items-center justify-center gap-2 whitespace-nowrap"
              >
                {subscribed ? (
                  <>
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Subscribed!</span>
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>Subscribe Free</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Navigation Columns */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
          
          {/* Brand Col (2 spans on desktop) */}
          <div className="col-span-2">
            <a href="#hero" className="flex items-center gap-3 mb-4 group inline-flex">
              <div className="w-10 h-10 rounded-xl overflow-hidden border border-white/15">
                <img src="./logo.jpg" alt="Beyond Campus" className="w-full h-full object-cover" />
              </div>
              <span className="font-display font-extrabold tracking-wider text-xl text-white group-hover:text-orange-400 transition-colors">
                BEYOND CAMPUS
              </span>
            </a>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm mb-6">
              Beyond Campus is a global bridge connecting ambitious high school and college students with experienced developers and working professionals worldwide.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>All Systems & Mentorship Slots Operational</span>
            </div>
          </div>

          {/* Links Col 1: Platform */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold mb-4">
              Programs
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li><a href="#pillars" className="hover:text-orange-400 transition-colors">1:1 Mentorship</a></li>
              <li><a href="#events" className="hover:text-orange-400 transition-colors">BeyondHacks 2026</a></li>
              <li><a href="#events" className="hover:text-orange-400 transition-colors">Tech Masterclasses</a></li>
              <li><a href="#pillars" className="hover:text-orange-400 transition-colors">Campus Chapter Grants</a></li>
              <li><a href="#mentors" className="hover:text-orange-400 transition-colors">Browse 680+ Mentors</a></li>
            </ul>
          </div>

          {/* Links Col 2: Community */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold mb-4">
              Community
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li><a href="https://discord.gg" target="_blank" rel="noreferrer" className="hover:text-orange-400 transition-colors">Discord Server</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-orange-400 transition-colors">LinkedIn Network</a></li>
              <li><a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-orange-400 transition-colors">GitHub Community</a></li>
              <li><a href="https://x.com" target="_blank" rel="noreferrer" className="hover:text-orange-400 transition-colors">X / Twitter Alerts</a></li>
              <li><a href="#about" className="hover:text-orange-400 transition-colors">Code of Conduct</a></li>
            </ul>
          </div>

          {/* Links Col 3: Legal & Safety */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold mb-4">
              Initiative
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li><a href="#about" className="hover:text-orange-400 transition-colors">About Our Story</a></li>
              <li><a href="#stats" className="hover:text-orange-400 transition-colors">Impact Reports</a></li>
              <li><a href="#join" className="hover:text-orange-400 transition-colors">Become a Mentor</a></li>
              <li><a href="#join" className="hover:text-orange-400 transition-colors">Sponsor Hackathons</a></li>
              <li><a href="mailto:team@beyondcampus.community" className="hover:text-orange-400 transition-colors">Contact Leadership</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to top */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-1">
            <span>© {new Date().getFullYear()} Beyond Campus Community Foundation. Empowering student innovators globally.</span>
          </div>

          <div className="flex items-center gap-4">
            <a href="#about" className="hover:text-slate-300">Privacy Policy</a>
            <span>•</span>
            <a href="#about" className="hover:text-slate-300">Terms of Mentorship</a>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors flex items-center gap-1.5"
              aria-label="Back to Top"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-orange-400" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
