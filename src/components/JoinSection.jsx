import React, { useState } from 'react';
import { 
  Sparkles, Send, CheckCircle2, Users, GraduationCap, Briefcase, 
  Copy, Check, ArrowRight 
} from 'lucide-react';
import { DiscordIcon, LinkedInIcon, GitHubIcon, TwitterIcon } from './SocialIcons';
import confetti from 'canvas-confetti';
import { COMMUNITY_PLATFORMS } from '../data/mockData';

export default function JoinSection({ initialTab = 'student', onShowToast }) {
  const [activeTab, setActiveTab] = useState(initialTab);
  const [copiedLink, setCopiedLink] = useState(false);

  // Student Form State
  const [studentForm, setStudentForm] = useState({
    name: '',
    email: '',
    school: '',
    level: 'Undergraduate',
    goal: 'Land an internship',
    interests: ['AI & Machine Learning', 'Full-Stack Web'],
    github: ''
  });

  // Professional Form State
  const [proForm, setProForm] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    years: '5-8 years',
    availability: '2 hours / month',
    linkedin: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const studentInterestsList = [
    'AI & Machine Learning',
    'Full-Stack Web',
    'Cloud & DevOps',
    'Distributed Systems',
    'Open Source',
    'Product & UI/UX'
  ];

  const handleInterestToggle = (item) => {
    setStudentForm((prev) => {
      const exists = prev.interests.includes(item);
      return {
        ...prev,
        interests: exists ? prev.interests.filter((i) => i !== item) : [...prev.interests, item]
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);

      // Trigger Confetti Celebration!
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#F97316', '#FBBF24', '#38BDF8', '#FFFFFF']
      });

      onShowToast(
        activeTab === 'student'
          ? '🎉 Welcome aboard! Student fellowship application submitted.'
          : '🎉 Thank you! Mentor application received. We will reach out shortly.'
      );
    }, 700);
  };

  const copyInvite = () => {
    navigator.clipboard.writeText('https://discord.gg/beyondcampus');
    setCopiedLink(true);
    onShowToast('📋 Community invite link copied to clipboard!');
    setTimeout(() => setCopiedLink(false), 2500);
  };

  return (
    <section id="join" className="py-24 relative bg-[#070B14]">
      {/* Glow elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-b from-orange-500/10 to-transparent rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-mono font-semibold tracking-wider uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Get Involved Today
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight">
            Step Through the Portal. <br />
            <span className="text-gradient-sunrise">Join Beyond Campus.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300">
            Whether you are eager to accelerate your journey or passionate about coaching the next generation, there is a place for you in our global fellowship.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Interactive Application Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl glass-panel-warm border border-orange-500/30 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
              
              {!isSuccess ? (
                <div>
                  {/* Tab Selector */}
                  <div className="flex p-1.5 rounded-2xl bg-black/40 border border-white/10 mb-8">
                    <button
                      type="button"
                      onClick={() => setActiveTab('student')}
                      className={`flex-1 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 ${
                        activeTab === 'student'
                          ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg shadow-orange-500/20'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      <GraduationCap className="w-4 h-4" />
                      <span>I'm a Student</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setActiveTab('mentor')}
                      className={`flex-1 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 ${
                        activeTab === 'mentor'
                          ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg shadow-orange-500/20'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      <Briefcase className="w-4 h-4" />
                      <span>I'm a Working Professional</span>
                    </button>
                  </div>

                  {/* Form Component */}
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {activeTab === 'student' ? (
                      /* Student Fields */
                      <>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5 font-medium">
                              Full Name *
                            </label>
                            <input
                              type="text"
                              required
                              placeholder="Alex Rivera"
                              value={studentForm.name}
                              onChange={(e) => setStudentForm({ ...studentForm, name: e.target.value })}
                              className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 focus:border-orange-500 text-white text-xs sm:text-sm focus:outline-none"
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5 font-medium">
                              Email Address *
                            </label>
                            <input
                              type="email"
                              required
                              placeholder="alex@university.edu"
                              value={studentForm.email}
                              onChange={(e) => setStudentForm({ ...studentForm, email: e.target.value })}
                              className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 focus:border-orange-500 text-white text-xs sm:text-sm focus:outline-none"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5 font-medium">
                              School / University *
                            </label>
                            <input
                              type="text"
                              required
                              placeholder="e.g. Stanford University or Lincoln High"
                              value={studentForm.school}
                              onChange={(e) => setStudentForm({ ...studentForm, school: e.target.value })}
                              className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 focus:border-orange-500 text-white text-xs sm:text-sm focus:outline-none"
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5 font-medium">
                              Current Standing
                            </label>
                            <select
                              value={studentForm.level}
                              onChange={(e) => setStudentForm({ ...studentForm, level: e.target.value })}
                              className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 focus:border-orange-500 text-white text-xs sm:text-sm focus:outline-none"
                            >
                              <option value="High School" className="bg-slate-900">High School Student</option>
                              <option value="Undergraduate" className="bg-slate-900">Undergraduate Student</option>
                              <option value="Graduate / Masters" className="bg-slate-900">Graduate / Masters Student</option>
                              <option value="Bootcamp / Self-Taught" className="bg-slate-900">Bootcamp / Self-Taught</option>
                            </select>
                          </div>
                        </div>

                        {/* Interests Multi-Select */}
                        <div>
                          <label className="block text-xs font-mono uppercase text-slate-300 mb-2 font-medium">
                            Primary Engineering Interests
                          </label>
                          <div className="flex flex-wrap gap-2">
                            {studentInterestsList.map((interest) => {
                              const isChecked = studentForm.interests.includes(interest);
                              return (
                                <button
                                  type="button"
                                  key={interest}
                                  onClick={() => handleInterestToggle(interest)}
                                  className={`px-3 py-1.5 rounded-xl text-xs font-medium border transition-all ${
                                    isChecked
                                      ? 'bg-orange-500/20 text-orange-400 border-orange-500/50'
                                      : 'bg-white/5 text-slate-400 border-white/10 hover:border-white/20'
                                  }`}
                                >
                                  {interest}
                                </button>
                              );
                            })}
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5 font-medium">
                            GitHub or Portfolio Link (Optional)
                          </label>
                          <input
                            type="url"
                            placeholder="https://github.com/yourhandle"
                            value={studentForm.github}
                            onChange={(e) => setStudentForm({ ...studentForm, github: e.target.value })}
                            className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 focus:border-orange-500 text-white text-xs sm:text-sm focus:outline-none"
                          />
                        </div>
                      </>
                    ) : (
                      /* Working Professional Fields */
                      <>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5 font-medium">
                              Full Name *
                            </label>
                            <input
                              type="text"
                              required
                              placeholder="David Chen"
                              value={proForm.name}
                              onChange={(e) => setProForm({ ...proForm, name: e.target.value })}
                              className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 focus:border-orange-500 text-white text-xs sm:text-sm focus:outline-none"
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5 font-medium">
                              Work Email *
                            </label>
                            <input
                              type="email"
                              required
                              placeholder="david@company.com"
                              value={proForm.email}
                              onChange={(e) => setProForm({ ...proForm, email: e.target.value })}
                              className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 focus:border-orange-500 text-white text-xs sm:text-sm focus:outline-none"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5 font-medium">
                              Current Company / Organization *
                            </label>
                            <input
                              type="text"
                              required
                              placeholder="e.g. Stripe, Google, or Tech Startup"
                              value={proForm.company}
                              onChange={(e) => setProForm({ ...proForm, company: e.target.value })}
                              className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 focus:border-orange-500 text-white text-xs sm:text-sm focus:outline-none"
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5 font-medium">
                              Job Title *
                            </label>
                            <input
                              type="text"
                              required
                              placeholder="e.g. Senior Software Engineer"
                              value={proForm.role}
                              onChange={(e) => setProForm({ ...proForm, role: e.target.value })}
                              className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 focus:border-orange-500 text-white text-xs sm:text-sm focus:outline-none"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5 font-medium">
                              Years of Industry Experience
                            </label>
                            <select
                              value={proForm.years}
                              onChange={(e) => setProForm({ ...proForm, years: e.target.value })}
                              className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 focus:border-orange-500 text-white text-xs sm:text-sm focus:outline-none"
                            >
                              <option value="2-4 years" className="bg-slate-900">2 - 4 years</option>
                              <option value="5-8 years" className="bg-slate-900">5 - 8 years</option>
                              <option value="9-12 years" className="bg-slate-900">9 - 12 years</option>
                              <option value="12+ years" className="bg-slate-900">12+ years / Staff / Exec</option>
                            </select>
                          </div>

                          <div>
                            <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5 font-medium">
                              Monthly Availability
                            </label>
                            <select
                              value={proForm.availability}
                              onChange={(e) => setProForm({ ...proForm, availability: e.target.value })}
                              className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 focus:border-orange-500 text-white text-xs sm:text-sm focus:outline-none"
                            >
                              <option value="1 hour / month" className="bg-slate-900">1 hour / month (Async AMA)</option>
                              <option value="2 hours / month" className="bg-slate-900">2 hours / month (1:1 sessions)</option>
                              <option value="4+ hours / month" className="bg-slate-900">4+ hours / month (Hackathon mentor)</option>
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5 font-medium">
                            LinkedIn Profile URL *
                          </label>
                          <input
                            type="url"
                            required
                            placeholder="https://linkedin.com/in/yourname"
                            value={proForm.linkedin}
                            onChange={(e) => setProForm({ ...proForm, linkedin: e.target.value })}
                            className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 focus:border-orange-500 text-white text-xs sm:text-sm focus:outline-none"
                          />
                        </div>
                      </>
                    )}

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl text-sm font-semibold uppercase tracking-wider bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 text-white shadow-xl shadow-orange-500/25 hover:opacity-95 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <span>Processing Application...</span>
                      ) : (
                        <>
                          <Sparkles className="w-4 h-4 text-amber-200" />
                          <span>{activeTab === 'student' ? 'Complete Student Application' : 'Submit Mentor Application'}</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                    <p className="text-center text-[11px] text-slate-400">
                      100% Free • No tuition or dues • Built by the community for the community
                    </p>
                  </form>
                </div>
              ) : (
                /* Success Screen */
                <div className="text-center py-10 animate-in fade-in">
                  <div className="w-20 h-20 rounded-3xl bg-orange-500/20 border-2 border-orange-500/40 flex items-center justify-center text-orange-400 mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <span className="text-xs uppercase font-mono tracking-widest text-orange-400 font-bold">
                    Application Received
                  </span>
                  <h3 className="text-3xl font-bold font-display text-white mt-1 mb-3">
                    Welcome to Beyond Campus!
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto mb-8 leading-relaxed">
                    Your details have landed in our review queue. Next, join our central Discord hub to meet your regional chapter leads and mentors immediately!
                  </p>

                  <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 max-w-md mx-auto flex items-center justify-between gap-3 mb-8">
                    <span className="font-mono text-xs text-orange-300 truncate">
                      discord.gg/beyondcampus
                    </span>
                    <button
                      onClick={copyInvite}
                      className="px-3 py-1.5 rounded-lg bg-orange-500/20 hover:bg-orange-500 text-orange-300 hover:text-white text-xs font-semibold flex items-center gap-1.5 transition-colors"
                    >
                      {copiedLink ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedLink ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href="https://discord.gg"
                      target="_blank"
                      rel="noreferrer"
                      className="w-full sm:w-auto px-6 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg"
                    >
                      Launch Discord Server
                    </a>
                    <button
                      onClick={() => setIsSuccess(false)}
                      className="w-full sm:w-auto px-6 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider bg-white/5 hover:bg-white/10 text-slate-300"
                    >
                      Submit Another
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>

          {/* Right Column: Community Platforms Hub (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="p-6 rounded-3xl glass-card border border-white/10 mb-2">
              <h3 className="text-xl font-bold font-display text-white mb-2">
                Join our Global Hubs
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Stay updated on weekly hackathons, emergency resume drops, live coding stages, and campus chapter meetups across your favorite platforms.
              </p>
            </div>

            {COMMUNITY_PLATFORMS.map((platform) => (
              <a
                key={platform.name}
                href={platform.href}
                target="_blank"
                rel="noreferrer"
                className="p-5 rounded-2xl glass-card border border-white/10 hover:border-orange-500/40 flex items-center justify-between gap-4 group transition-all"
              >
                <div className="flex items-center gap-3.5">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-white flex-shrink-0"
                    style={{ backgroundColor: `${platform.accent}20`, border: `1px solid ${platform.accent}40` }}
                  >
                    {platform.name.includes('Discord') && <DiscordIcon className="w-6 h-6" style={{ color: platform.accent }} />}
                    {platform.name.includes('LinkedIn') && <LinkedInIcon className="w-6 h-6" style={{ color: platform.accent }} />}
                    {platform.name.includes('GitHub') && <GitHubIcon className="w-6 h-6" style={{ color: platform.accent }} />}
                    {platform.name.includes('Twitter') && <TwitterIcon className="w-6 h-6" style={{ color: platform.accent }} />}
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-white group-hover:text-orange-300 transition-colors">
                        {platform.name}
                      </span>
                      <span className="px-2 py-0.5 rounded text-[9px] font-mono bg-white/10 text-slate-300">
                        {platform.badge}
                      </span>
                    </div>
                    <div className="text-xs text-orange-400 font-mono font-medium">
                      {platform.members}
                    </div>
                    <p className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">
                      {platform.description}
                    </p>
                  </div>
                </div>

                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-orange-400 group-hover:translate-x-1 transition-all flex-shrink-0" />
              </a>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
