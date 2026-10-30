import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import PillarsSection from './components/PillarsSection';
import EventsSection from './components/EventsSection';
import MentorsSection from './components/MentorsSection';
import TestimonialsSection from './components/TestimonialsSection';
import JoinSection from './components/JoinSection';
import Footer from './components/Footer';
import Toast from './components/Toast';

export default function App() {
  const [joinTab, setJoinTab] = useState('student');
  const [toastMessage, setToastMessage] = useState('');

  const handleJoinClick = (tab = 'student') => {
    setJoinTab(tab);
    const joinEl = document.getElementById('join');
    if (joinEl) {
      joinEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const showToast = (message) => {
    setToastMessage(message);
  };

  return (
    <div className="relative min-h-screen bg-[#070B14] text-slate-100 flex flex-col selection:bg-orange-500/30 selection:text-orange-200">
      {/* Sticky Glass Navbar */}
      <Navbar onJoinClick={handleJoinClick} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero onJoinClick={handleJoinClick} />

        {/* 2. About Us & Impact Stats */}
        <AboutSection onJoinClick={handleJoinClick} />

        {/* 3. What We Do: Core Pillars */}
        <PillarsSection onJoinClick={handleJoinClick} />

        {/* 4. Upcoming Events & Initiatives */}
        <EventsSection onShowToast={showToast} />

        {/* 5. Mentors Directory & 1:1 Booking */}
        <MentorsSection onJoinClick={handleJoinClick} onShowToast={showToast} />

        {/* 6. Student Voices & Success Stories Carousel */}
        <TestimonialsSection />

        {/* 7. Join the Community & Form */}
        <JoinSection initialTab={joinTab} onShowToast={showToast} />
      </main>

      {/* 8. Global Footer */}
      <Footer onShowToast={showToast} />

      {/* Global Toast System */}
      <Toast message={toastMessage} onClose={() => setToastMessage('')} />
    </div>
  );
}
