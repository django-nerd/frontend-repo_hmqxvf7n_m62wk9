import React, { useState } from 'react';
import { UserPlus, LogIn } from 'lucide-react';

export default function AuthCard() {
  const [mode, setMode] = useState('login');

  return (
    <section id="auth" className="bg-white">
      <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Register or Login</h2>
          <p className="mt-2 text-gray-600">Create an account to book and track your anti‑rabies vaccination schedule.</p>
          <div className="mt-6 inline-flex rounded-lg p-1 bg-gray-100">
            <button
              className={`px-4 py-2 rounded-md text-sm font-medium ${mode==='login' ? 'bg-white shadow border' : 'text-gray-600'}`}
              onClick={() => setMode('login')}
            >
              <span className="inline-flex items-center gap-2"><LogIn size={16}/> Login</span>
            </button>
            <button
              className={`px-4 py-2 rounded-md text-sm font-medium ${mode==='register' ? 'bg-white shadow border ml-2' : 'text-gray-600 ml-2'}`}
              onClick={() => setMode('register')}
            >
              <span className="inline-flex items-center gap-2"><UserPlus size={16}/> Register</span>
            </button>
          </div>
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); alert(`${mode === 'login' ? 'Logged in' : 'Registered'} (demo only)`); }}
          className="bg-white border border-gray-100 shadow-sm rounded-2xl p-6 w-full"
        >
          {mode === 'register' && (
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-600">Full Name</label>
                <input required type="text" className="mt-1 w-full rounded-lg border-gray-300 focus:ring-emerald-500 focus:border-emerald-500" placeholder="Juan Dela Cruz" />
              </div>
              <div>
                <label className="text-sm text-gray-600">Phone</label>
                <input required type="tel" className="mt-1 w-full rounded-lg border-gray-300 focus:ring-emerald-500 focus:border-emerald-500" placeholder="09xx xxx xxxx" />
              </div>
            </div>
          )}

          <div className="grid sm:grid-cols-2 gap-4 mt-4">
            <div>
              <label className="text-sm text-gray-600">Email</label>
              <input required type="email" className="mt-1 w-full rounded-lg border-gray-300 focus:ring-emerald-500 focus:border-emerald-500" placeholder="you@example.com" />
            </div>
            <div>
              <label className="text-sm text-gray-600">Password</label>
              <input required type="password" className="mt-1 w-full rounded-lg border-gray-300 focus:ring-emerald-500 focus:border-emerald-500" placeholder="••••••••" />
            </div>
          </div>

          {mode === 'register' && (
            <div className="mt-4">
              <label className="text-sm text-gray-600">Address</label>
              <input type="text" className="mt-1 w-full rounded-lg border-gray-300 focus:ring-emerald-500 focus:border-emerald-500" placeholder="City, Province" />
            </div>
          )}

          <button type="submit" className="mt-6 w-full inline-flex justify-center items-center gap-2 bg-emerald-600 text-white px-5 py-3 rounded-lg shadow hover:bg-emerald-700 transition">
            {mode === 'login' ? 'Login' : 'Create Account'}
          </button>
        </form>
      </div>
    </section>
  );
}
