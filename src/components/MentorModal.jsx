import React, { useState } from 'react';
import { X, Calendar, Star, CheckCircle2, MessageSquare, Sparkles, Send } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function MentorModal({ mentor, onClose, onShowToast }) {
  const [formData, setFormData] = useState({
    studentName: '',
    studentEmail: '',
    topic: mentor?.topics?.[0] || 'Career Roadmap & Resume Review',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isBooked, setIsBooked] = useState(false);

  if (!mentor) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.studentName || !formData.studentEmail) {
      alert('Please fill in your name and email');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsBooked(true);

      confetti({
        particleCount: 70,
        spread: 50,
        origin: { y: 0.6 },
        colors: ['#F97316', '#FBBF24', '#FFFFFF']
      });

      onShowToast(`🎉 1:1 Request Sent to ${mentor.name}!`);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative max-w-lg w-full rounded-3xl bg-[#090F1E] border border-orange-500/30 p-6 sm:p-8 shadow-2xl shadow-orange-500/20 max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white bg-white/5 border border-white/10 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {!isBooked ? (
          <div>
            {/* Mentor Header */}
            <div className="flex items-center gap-4 mb-5">
              <img
                src={mentor.avatar}
                alt={mentor.name}
                className="w-16 h-16 rounded-2xl object-cover border-2 border-orange-500/40 shadow-lg shadow-orange-500/10"
              />
              <div>
                <h3 className="text-xl font-bold font-display text-white">{mentor.name}</h3>
                <div className="text-xs text-slate-300">
                  {mentor.role} • <span className="text-orange-400 font-semibold">{mentor.company}</span>
                </div>
                <div className="flex items-center gap-2 mt-1 text-[11px] font-mono text-slate-400">
                  <span className="flex items-center gap-1 text-amber-300 font-semibold">
                    <Star className="w-3.5 h-3.5 fill-amber-300" />
                    {mentor.rating}
                  </span>
                  <span>•</span>
                  <span>{mentor.sessionsGiven} sessions completed</span>
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 mb-5 leading-relaxed bg-white/[0.02] p-3 rounded-xl border border-white/5">
              "{mentor.bio}"
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-1.5">
                  Mentorship Focus Area
                </label>
                <select
                  value={formData.topic}
                  onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 focus:border-orange-500 text-white text-xs sm:text-sm focus:outline-none"
                >
                  {mentor.topics.map((t) => (
                    <option key={t} value={t} className="bg-slate-900 text-white">
                      {t}
                    </option>
                  ))}
                  <option value="General Advice" className="bg-slate-900 text-white">
                    General Tech Career Q&A
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-1.5">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Maya Chen"
                  value={formData.studentName}
                  onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 focus:border-orange-500 text-white text-xs sm:text-sm focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-1.5">
                  Your Student / Work Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. maya@university.edu"
                  value={formData.studentEmail}
                  onChange={(e) => setFormData({ ...formData, studentEmail: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 focus:border-orange-500 text-white text-xs sm:text-sm focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-1.5">
                  What would you like to achieve in this 1:1 session?
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell your mentor about your current project, target roles, or specific questions..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 focus:border-orange-500 text-white text-xs sm:text-sm focus:outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-xl text-xs sm:text-sm font-semibold uppercase tracking-wider bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 text-white shadow-lg shadow-orange-500/25 hover:opacity-95 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <span>Requesting Session...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Mentorship Request (100% Free)</span>
                  </>
                )}
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-6">
            <div className="w-16 h-16 rounded-2xl bg-orange-500/20 border border-orange-500/40 flex items-center justify-center text-orange-400 mx-auto mb-4 animate-bounce">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <span className="text-xs uppercase font-mono tracking-widest text-orange-400 font-bold">
              Request Dispatched
            </span>
            <h3 className="text-2xl font-bold font-display text-white mt-1 mb-2">
              Mentorship Requested!
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-sm mx-auto mb-6">
              We’ve pinged <span className="text-white font-medium">{mentor.name}</span> with your request. Expect a calendar invite on <span className="text-orange-400 font-medium">{formData.studentEmail}</span> within 24-48 hours.
            </p>

            <button
              onClick={onClose}
              className="w-full py-3 rounded-xl text-xs font-semibold uppercase tracking-wider bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              Back to Mentors Directory
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
