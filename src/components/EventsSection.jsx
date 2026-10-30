import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Search, Ticket, Sparkles, Filter, ExternalLink, ArrowRight } from 'lucide-react';
import { EVENTS_DATA } from '../data/mockData';
import EventModal from './EventModal';

export default function EventsSection({ onShowToast }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalEvent, setActiveModalEvent] = useState(null);

  const categories = [
    { id: 'all', label: 'All Initiatives' },
    { id: 'hackathons', label: 'Hackathons' },
    { id: 'webinars', label: 'Webinars & Talks' },
    { id: 'meetups', label: 'City Meetups' },
  ];

  const filteredEvents = EVENTS_DATA.filter((event) => {
    const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory;
    const matchesSearch =
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.speaker.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.speaker.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="events" className="py-24 relative bg-[#070B14]">
      {/* Background accents */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-orange-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-mono font-semibold tracking-wider uppercase mb-3">
              <Calendar className="w-3.5 h-3.5" />
              Live & Upcoming Programs
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight">
              Upcoming Events & <br />
              <span className="text-gradient-sunrise">Hands-On Hackathons.</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-xl">
              From intense 48-hour sprints with cash prizes to candid system design masterclasses — reserve your free ticket now.
            </p>
          </div>

          {/* Search bar */}
          <div className="w-full md:w-72 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search topics, cities, speakers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 focus:border-orange-500/60 focus:outline-none text-white text-xs sm:text-sm placeholder:text-slate-400"
            />
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all ${
                selectedCategory === cat.id
                  ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg shadow-orange-500/20'
                  : 'bg-white/[0.03] text-slate-300 hover:text-white hover:bg-white/[0.06] border border-white/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="rounded-3xl glass-card p-6 flex flex-col justify-between border border-white/10 hover:border-orange-500/40 relative overflow-hidden group"
            >
              <div>
                {/* Badges Bar */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider border ${event.badgeColor}`}>
                    {event.badge}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-orange-400" />
                    {event.location}
                  </span>
                </div>

                {/* Event Title */}
                <h3 className="text-xl font-bold font-display text-white group-hover:text-orange-300 transition-colors mb-2.5 leading-snug">
                  {event.title}
                </h3>

                <p className="text-xs text-slate-300 line-clamp-3 mb-5 leading-relaxed">
                  {event.description}
                </p>

                {/* Date and Time Bar */}
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-1.5 mb-5 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 text-orange-400" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-orange-400" />
                    <span>{event.time}</span>
                  </div>
                  {event.prizes && (
                    <div className="flex items-center gap-2 text-orange-400 font-medium">
                      <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                      <span>{event.prizes}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Bottom Speaker & CTA */}
              <div>
                <div className="flex items-center gap-3 pt-4 border-t border-white/10 mb-4">
                  <img
                    src={event.speaker.avatar}
                    alt={event.speaker.name}
                    className="w-10 h-10 rounded-full object-cover border border-white/15"
                  />
                  <div className="overflow-hidden">
                    <div className="text-xs font-bold text-white truncate">{event.speaker.name}</div>
                    <div className="text-[11px] text-slate-400 truncate">
                      {event.speaker.role} • <span className="text-orange-400 font-medium">{event.speaker.company}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-3">
                  <span className="text-[11px] font-mono text-slate-400">
                    {event.spots}
                  </span>
                  <button
                    onClick={() => setActiveModalEvent(event)}
                    className="px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-amber-500/20 to-orange-500/20 hover:from-amber-500 hover:to-orange-500 text-orange-300 hover:text-white border border-orange-500/40 hover:border-transparent transition-all duration-300 flex items-center gap-1.5 focus:outline-none"
                  >
                    <Ticket className="w-3.5 h-3.5" />
                    <span>Register Free</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <div className="p-12 text-center rounded-3xl glass-card border border-white/10">
            <Calendar className="w-10 h-10 text-orange-400 mx-auto mb-3 opacity-60" />
            <h4 className="text-lg font-bold text-white mb-1">No matching events found</h4>
            <p className="text-xs text-slate-400 mb-4">Try searching with a different term or view all categories.</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="px-4 py-2 rounded-xl text-xs font-semibold bg-white/10 hover:bg-white/20 text-white"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>

      {/* Interactive Event Registration Modal */}
      {activeModalEvent && (
        <EventModal
          event={activeModalEvent}
          onClose={() => setActiveModalEvent(null)}
          onShowToast={onShowToast}
        />
      )}
    </section>
  );
}
