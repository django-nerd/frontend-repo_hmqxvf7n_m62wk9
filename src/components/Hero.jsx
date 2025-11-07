import React from 'react';
import { ShieldCheck, Syringe, Calendar } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-cyan-50">
      <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
            Fast, Safe Care for Animal Bites
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            Get immediate assessment, anti-rabies vaccination, and follow‑up reminders in one place.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#book" className="inline-flex items-center gap-2 bg-emerald-600 text-white px-5 py-3 rounded-lg shadow hover:bg-emerald-700 transition">
              <Calendar size={18} /> Book Appointment
            </a>
            <a href="#auth" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition">
              <ShieldCheck size={18} /> Register / Login
            </a>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-4 text-sm">
            <div className="p-4 rounded-xl bg-white shadow-sm border border-gray-100">
              <Syringe className="text-emerald-600" size={20} />
              <p className="mt-2 font-medium">PEP & vaccine</p>
            </div>
            <div className="p-4 rounded-xl bg-white shadow-sm border border-gray-100">
              <ShieldCheck className="text-emerald-600" size={20} />
              <p className="mt-2 font-medium">WHO Protocols</p>
            </div>
            <div className="p-4 rounded-xl bg-white shadow-sm border border-gray-100">
              <Calendar className="text-emerald-600" size={20} />
              <p className="mt-2 font-medium">Smart reminders</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-video md:aspect-square rounded-2xl bg-white shadow-lg border border-gray-100 p-4">
            <img
              src="https://images.unsplash.com/photo-1568572933382-74d440642117?q=80&w=1200&auto=format&fit=crop"
              alt="Veterinary care"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
