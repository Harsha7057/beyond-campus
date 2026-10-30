import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles, Compass } from 'lucide-react';

export default function Navbar({ onJoinClick }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'pillars', 'events', 'mentors', 'stats', 'join'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'What We Do', href: '#pillars' },
    { name: 'Events', href: '#events' },
    { name: 'Mentors', href: '#mentors' },
    { name: 'Impact', href: '#stats' },
    { name: 'Join Community', href: '#join' },
  ];

  const handleNavClick = (href) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#070B14]/85 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/50 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Title */}
          <a
            href="#hero"
            className="flex items-center gap-3.5 group cursor-pointer focus:outline-none"
            aria-label="Beyond Campus Homepage"
          >
            <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-white/15 shadow-lg shadow-orange-500/10 group-hover:border-orange-500/40 transition-all duration-300">
              <img
                src="./logo.jpg"
                alt="Beyond Campus Logo"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 to-transparent pointer-events-none" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold tracking-wider text-lg text-white group-hover:text-orange-400 transition-colors flex items-center gap-1.5">
                BEYOND CAMPUS
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block animate-ping opacity-75" />
              </span>
              <span className="text-[10px] tracking-widest uppercase font-mono text-slate-400 font-medium">
                Student & Industry Bridge
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`px-3.5 py-1.5 rounded-full text-xs lg:text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-orange-500/20 to-amber-500/20 text-orange-400 border border-orange-500/30 shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Header Actions */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => onJoinClick('student')}
              className="relative group overflow-hidden px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider text-white transition-all duration-300 shadow-md shadow-orange-500/20 focus:outline-none"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 transition-all duration-300 group-hover:scale-105" />
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative z-10 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-200" />
                Join Movement
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => onJoinClick('student')}
              className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-gradient-to-r from-amber-500 to-orange-500 text-white"
            >
              Join
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-300 hover:text-white bg-white/5 border border-white/10 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-orange-400" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pt-3 pb-6 bg-[#070B14]/95 backdrop-blur-2xl border-b border-white/10 shadow-2xl animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-1.5 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="px-4 py-2.5 rounded-xl text-sm font-medium text-slate-200 hover:text-white hover:bg-white/5 active:bg-orange-500/10 flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ArrowUpRight className="w-4 h-4 text-slate-400" />
              </a>
            ))}
            <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onJoinClick('student');
                }}
                className="w-full py-3 rounded-xl text-center text-sm font-semibold bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 text-white shadow-lg shadow-orange-500/20"
              >
                Join as Student
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onJoinClick('mentor');
                }}
                className="w-full py-3 rounded-xl text-center text-sm font-semibold bg-white/5 text-slate-200 hover:bg-white/10 border border-white/10"
              >
                Become a Mentor
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
