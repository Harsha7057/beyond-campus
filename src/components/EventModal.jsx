import React, { useState } from 'react';
import { X, Calendar, Clock, MapPin, User, CheckCircle2, Ticket, Sparkles, Download, Share2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function EventModal({ event, onClose, onShowToast }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    institution: '',
    ticketTier: 'Student Free Pass',
    interests: 'AI & Hackathons'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [ticketConfirmed, setTicketConfirmed] = useState(false);
  const [ticketId, setTicketId] = useState('');

  if (!event) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      alert('Please fill in your name and email');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const generatedId = `BC-${Math.floor(1000 + Math.random() * 9000)}-${event.category.substring(0, 3).toUpperCase()}`;
      setTicketId(generatedId);
      setTicketConfirmed(true);

      // Trigger Confetti!
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#F97316', '#FBBF24', '#38BDF8', '#FFFFFF']
      });

      onShowToast(`🎉 Registration Confirmed for ${event.title}!`);
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative max-w-xl w-full rounded-3xl bg-[#090F1E] border border-orange-500/30 p-6 sm:p-8 shadow-2xl shadow-orange-500/20 max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white bg-white/5 border border-white/10 transition-colors"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!ticketConfirmed ? (
          <div>
            {/* Modal Header */}
            <div className="flex items-center gap-2 mb-3">
              <span className={`px-3 py-1 rounded-full text-xs font-mono font-semibold border ${event.badgeColor}`}>
                {event.badge}
              </span>
              <span className="text-xs font-mono text-slate-400">{event.mode}</span>
            </div>

            <h3 className="text-2xl font-bold font-display text-white mb-2 leading-tight">
              {event.title}
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 mb-6">
              {event.description}
            </p>

            {/* Quick Event Metadata Grid */}
            <div className="grid grid-cols-2 gap-3 p-4 rounded-2xl bg-white/[0.03] border border-white/10 mb-6 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-orange-400" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-orange-400" />
                <span>{event.time}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-orange-400" />
                <span>{event.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-orange-400" />
                <span>{event.speaker.name} ({event.speaker.company})</span>
              </div>
            </div>

            {/* Registration Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-1.5">
                  Select Ticket Tier
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['Student Free Pass', 'Mentor / Pro Pass', 'Observer Pass'].map((tier) => (
                    <button
                      type="button"
                      key={tier}
                      onClick={() => setFormData({ ...formData, ticketTier: tier })}
                      className={`py-2 px-2 rounded-xl text-xs font-medium border text-center transition-all ${
                        formData.ticketTier === tier
                          ? 'bg-orange-500/20 text-orange-400 border-orange-500/50 shadow-sm'
                          : 'bg-white/5 text-slate-400 border-white/10 hover:border-white/20'
                      }`}
                    >
                      {tier}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Rivera"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 focus:border-orange-500 focus:outline-none text-white text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-1.5">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. alex@stanford.edu"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 focus:border-orange-500 focus:outline-none text-white text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-1.5">
                  School / University or Company
                </label>
                <input
                  type="text"
                  placeholder="e.g. Stanford University '26 or Independent"
                  value={formData.institution}
                  onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 focus:border-orange-500 focus:outline-none text-white text-sm"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-4 py-3.5 rounded-xl text-sm font-semibold uppercase tracking-wider bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 text-white shadow-xl shadow-orange-500/30 hover:opacity-95 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <span>Securing Your Spot...</span>
                ) : (
                  <>
                    <Ticket className="w-4 h-4" />
                    <span>Claim Free Pass</span>
                  </>
                )}
              </button>
            </form>
          </div>
        ) : (
          /* Confirmed Digital Ticket Pass */
          <div className="text-center py-4">
            <div className="w-16 h-16 rounded-2xl bg-orange-500/20 border border-orange-500/40 flex items-center justify-center text-orange-400 mx-auto mb-4 animate-bounce">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <span className="text-xs uppercase font-mono tracking-widest text-orange-400 font-bold">
              You're Going! Pass Secured
            </span>
            <h3 className="text-2xl font-bold font-display text-white mt-1 mb-2">
              Registration Confirmed
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-sm mx-auto mb-6">
              We’ve reserved your spot and sent calendar details to <span className="text-white font-medium">{formData.email}</span>.
            </p>

            {/* Virtual Ticket Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-b from-[#111C35] to-[#0A1020] border border-orange-500/30 relative overflow-hidden text-left shadow-2xl mb-6">
              <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3">
                <div className="flex items-center gap-2">
                  <img src="./logo.jpg" alt="Beyond Campus" className="w-6 h-6 rounded-md object-cover" />
                  <span className="font-display font-bold text-white text-xs tracking-wider">BEYOND CAMPUS PASS</span>
                </div>
                <span className="font-mono text-[11px] text-orange-400 font-semibold">{ticketId}</span>
              </div>

              <div className="text-sm font-bold text-white mb-1">{event.title}</div>
              <div className="text-xs text-slate-300 mb-3">{event.date} • {event.time}</div>

              <div className="flex items-center justify-between pt-3 border-t border-dashed border-white/15 text-xs text-slate-400">
                <div>
                  <span className="block text-[10px] uppercase font-mono text-slate-400">Attendee</span>
                  <span className="text-white font-medium">{formData.name}</span>
                </div>
                <div>
                  <span className="block text-[10px] uppercase font-mono text-slate-400">Tier</span>
                  <span className="text-orange-400 font-medium">{formData.ticketTier}</span>
                </div>
                <div className="w-10 h-10 rounded bg-white p-1 flex items-center justify-center">
                  <div className="w-full h-full bg-slate-900 flex items-center justify-center text-[7px] text-white font-mono">
                    QR
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={onClose}
                className="w-full py-3 rounded-xl text-xs font-semibold uppercase tracking-wider bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
