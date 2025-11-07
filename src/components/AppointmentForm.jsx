import React, { useState } from 'react';
import { Calendar, Clock, Dog } from 'lucide-react';

const timeSlots = [
  '09:00 AM','09:30 AM','10:00 AM','10:30 AM','11:00 AM','01:00 PM','01:30 PM','02:00 PM','02:30 PM','03:00 PM'
];

export default function AppointmentForm() {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  function submit(e) {
    e.preventDefault();
    if (!selectedDate || !selectedTime) {
      alert('Please select date and time');
      return;
    }
    alert(`Appointment booked on ${selectedDate} at ${selectedTime} (demo only)`);
  }

  return (
    <section id="book" className="bg-emerald-50/60">
      <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Book an Appointment</h2>
          <p className="mt-2 text-gray-600">Choose your preferred date and time. Walk‑ins are accepted for urgent cases.</p>

          <div className="mt-6 space-y-3">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-white flex items-center justify-center border"><Dog className="text-emerald-600"/></div>
              <p className="text-sm text-gray-700">Animal bite assessment and post‑exposure prophylaxis</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-white flex items-center justify-center border"><Calendar className="text-emerald-600"/></div>
              <p className="text-sm text-gray-700">Follow the 0‑3‑7‑14 schedule with reminders</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-white flex items-center justify-center border"><Clock className="text-emerald-600"/></div>
              <p className="text-sm text-gray-700">Average visit time: 20–30 minutes</p>
            </div>
          </div>
        </div>

        <form onSubmit={submit} className="bg-white border border-gray-100 shadow-sm rounded-2xl p-6 w-full">
          <div>
            <label className="text-sm text-gray-600">Preferred Date</label>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="mt-1 w-full rounded-lg border-gray-300 focus:ring-emerald-500 focus:border-emerald-500"
              required
            />
          </div>

          <div className="mt-4">
            <label className="text-sm text-gray-600">Time Slot</label>
            <div className="mt-2 grid grid-cols-2 sm:grid-cols-3 gap-2">
              {timeSlots.map((t) => (
                <button
                  type="button"
                  key={t}
                  onClick={() => setSelectedTime(t)}
                  className={`px-3 py-2 rounded-lg border text-sm ${selectedTime === t ? 'bg-emerald-600 text-white border-emerald-600' : 'bg-white hover:bg-gray-50'}`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-4">
            <label className="text-sm text-gray-600">Notes (optional)</label>
            <textarea className="mt-1 w-full rounded-lg border-gray-300 focus:ring-emerald-500 focus:border-emerald-500" rows={3} placeholder="Any details about the exposure or allergies" />
          </div>

          <button type="submit" className="mt-6 w-full inline-flex justify-center items-center gap-2 bg-emerald-600 text-white px-5 py-3 rounded-lg shadow hover:bg-emerald-700 transition">
            Book Appointment
          </button>

          {selectedDate && selectedTime && (
            <p className="mt-3 text-sm text-gray-600">You selected {selectedDate} at {selectedTime}.</p>
          )}
        </form>
      </div>
    </section>
  );
}
