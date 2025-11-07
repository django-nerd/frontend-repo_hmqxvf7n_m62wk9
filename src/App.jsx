import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AuthCard from './components/AuthCard';
import AppointmentForm from './components/AppointmentForm';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />
      <AuthCard />
      <AppointmentForm />
      <Footer />
    </div>
  );
}
