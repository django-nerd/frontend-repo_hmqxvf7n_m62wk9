import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8 text-sm">
        <div>
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-lg bg-emerald-500 flex items-center justify-center text-white font-bold">AB</div>
            <span className="font-semibold">Animal Bite Center Clinic</span>
          </div>
          <p className="mt-3 text-gray-600">Dedicated to fast and safe anti‑rabies care following WHO protocols.</p>
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">Contact</h3>
          <ul className="mt-3 space-y-2 text-gray-600">
            <li className="flex items-center gap-2"><Phone size={16}/> 0912 345 6789</li>
            <li className="flex items-center gap-2"><Mail size={16}/> hello@animalbitecenter.ph</li>
            <li className="flex items-center gap-2"><MapPin size={16}/> Ground Floor, Health Complex, City</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">Hours</h3>
          <ul className="mt-3 space-y-1 text-gray-600">
            <li>Mon–Fri: 8:00 AM – 5:00 PM</li>
            <li>Sat: 9:00 AM – 2:00 PM</li>
            <li>Sun & Holidays: On‑call</li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs text-gray-500 py-4">© {new Date().getFullYear()} Animal Bite Center Clinic. All rights reserved.</div>
    </footer>
  );
}
