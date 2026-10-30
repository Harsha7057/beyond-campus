import React, { useEffect } from 'react';
import { Sparkles, X } from 'lucide-react';

export default function Toast({ message, onClose }) {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => {
      onClose();
    }, 4500);
    return () => clearTimeout(timer);
  }, [message, onClose]);

  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-5 duration-300">
      <div className="flex items-center gap-3 px-4 py-3 rounded-2xl glass-panel-warm border border-orange-500/40 shadow-2xl shadow-orange-500/20 text-white text-xs sm:text-sm">
        <Sparkles className="w-4 h-4 text-orange-400 flex-shrink-0" />
        <span className="font-medium text-slate-100">{message}</span>
        <button
          onClick={onClose}
          className="p-1 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
          aria-label="Close notification"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
