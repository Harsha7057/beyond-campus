import React, { useState } from 'react';
import { Users, Star, MessageSquare, Sparkles, ArrowRight, Check } from 'lucide-react';
import { MENTORS_DATA } from '../data/mockData';
import { LinkedInIcon, GitHubIcon, TwitterIcon } from './SocialIcons';
import MentorModal from './MentorModal';

export default function MentorsSection({ onJoinClick, onShowToast }) {
  const [selectedSpecialty, setSelectedSpecialty] = useState('all');
  const [activeMentor, setActiveMentor] = useState(null);

  const specialties = [
    { id: 'all', label: 'All Disciplines' },
    { id: 'ai', label: 'AI & Machine Learning' },
    { id: 'software', label: 'Software & Distributed Systems' },
    { id: 'cloud', label: 'Cloud & Infrastructure' },
    { id: 'product', label: 'Product & Design' },
  ];

  const filteredMentors = MENTORS_DATA.filter((mentor) => {
    return selectedSpecialty === 'all' || mentor.specialty === selectedSpecialty;
  });

  return (
    <section id="mentors" className="py-24 relative bg-[#070B14]">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-mono font-semibold tracking-wider uppercase mb-4">
            <Users className="w-3.5 h-3.5" />
            Industry Mentors & Guides
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight">
            Learn From Engineers Who <br />
            <span className="text-gradient-sunrise">Build Modern Tech at Scale.</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed">
            Our 680+ mentors volunteer their weekends and evenings because they believe in lifting the next generation. Book 1:1 sessions, receive code reviews, and build a lasting network.
          </p>
        </div>

        {/* Specialty Filters */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none">
          {specialties.map((spec) => (
            <button
              key={spec.id}
              onClick={() => setSelectedSpecialty(spec.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all ${
                selectedSpecialty === spec.id
                  ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg shadow-orange-500/20'
                  : 'bg-white/[0.03] text-slate-300 hover:text-white hover:bg-white/[0.06] border border-white/10'
              }`}
            >
              {spec.label}
            </button>
          ))}
        </div>

        {/* Mentors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMentors.map((mentor) => (
            <div
              key={mentor.id}
              className="rounded-3xl glass-card p-6 flex flex-col justify-between border border-white/10 hover:border-orange-500/40 relative overflow-hidden group"
            >
              <div>
                {/* Header: Photo + Rating & Experience */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="relative">
                    <img
                      src={mentor.avatar}
                      alt={mentor.name}
                      className="w-16 h-16 rounded-2xl object-cover border-2 border-white/10 group-hover:border-orange-500/50 transition-colors shadow-lg"
                    />
                    <div className="absolute -bottom-1 -right-1 px-1.5 py-0.5 rounded-md bg-orange-500 text-white text-[9px] font-mono font-bold uppercase">
                      {mentor.experience}
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="inline-flex items-center gap-1 text-xs font-semibold text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded-md border border-amber-500/20 mb-1">
                      <Star className="w-3.5 h-3.5 fill-amber-300" />
                      {mentor.rating}
                    </div>
                    <div className="text-[10px] font-mono text-slate-400">
                      {mentor.sessionsGiven} sessions
                    </div>
                  </div>
                </div>

                {/* Name & Company */}
                <h3 className="text-xl font-bold font-display text-white group-hover:text-orange-300 transition-colors">
                  {mentor.name}
                </h3>
                <div className="text-xs text-slate-300 mb-3">
                  {mentor.role} • <span className="text-orange-400 font-semibold">{mentor.company}</span>
                </div>

                <p className="text-xs text-slate-300 line-clamp-3 mb-4 leading-relaxed">
                  {mentor.bio}
                </p>

                {/* Mentorship Topics */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {mentor.topics.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-lg text-[10px] font-mono bg-white/[0.04] text-slate-300 border border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                {/* Socials */}
                <div className="flex items-center gap-2">
                  <a
                    href={mentor.social.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
                    aria-label="LinkedIn Profile"
                  >
                    <LinkedInIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={mentor.social.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
                    aria-label="GitHub Profile"
                  >
                    <GitHubIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={mentor.social.twitter}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
                    aria-label="Twitter Profile"
                  >
                    <TwitterIcon className="w-4 h-4" />
                  </a>
                </div>

                <button
                  onClick={() => setActiveMentor(mentor)}
                  className="px-3.5 py-1.5 rounded-xl text-xs font-semibold uppercase tracking-wider bg-orange-500/20 hover:bg-orange-500 text-orange-400 hover:text-white border border-orange-500/40 hover:border-transparent transition-all flex items-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Request 1:1</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Mentor Callout Banner */}
        <div className="mt-16 p-8 rounded-3xl glass-panel-warm border border-orange-500/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-orange-400 font-semibold">
              Give Back to the Community
            </span>
            <h4 className="mt-1 text-2xl font-bold font-display text-white">
              Are you an experienced engineer or tech founder?
            </h4>
            <p className="mt-2 text-sm text-slate-300 max-w-2xl">
              Dedicate just 1-2 hours a month. Review student code, conduct mock interviews, or host a masterclass. Our platform matches you with high-potential students suited to your background.
            </p>
          </div>
          <button
            onClick={() => onJoinClick('mentor')}
            className="flex-shrink-0 px-8 py-3.5 rounded-xl text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg shadow-orange-500/20 hover:scale-105 transition-transform"
          >
            Apply to Mentor
          </button>
        </div>

      </div>

      {/* Mentor Session Modal */}
      {activeMentor && (
        <MentorModal
          mentor={activeMentor}
          onClose={() => setActiveMentor(null)}
          onShowToast={onShowToast}
        />
      )}
    </section>
  );
}
