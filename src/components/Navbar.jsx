import React from 'react';

export default function Navbar() {
  return (
    <header className="w-full bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-emerald-500 flex items-center justify-center text-white font-bold">AB</div>
          <span className="text-lg font-semibold tracking-tight">Animal Bite Center Clinic</span>
        </div>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-gray-600">
          <a href="#auth" className="hover:text-gray-900">Register / Login</a>
          <a href="#book" className="hover:text-gray-900">Book Appointment</a>
          <a href="#contact" className="hover:text-gray-900">Contact</a>
        </nav>
      </div>
    </header>
  );
}
