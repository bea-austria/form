// App.js
import React from 'react';
import Navbar from './components/Navbar';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div className="font-sans bg-gray-50 min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 p-6">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Contact Us</h1>
        <ContactForm />
      </main>
    </div>
  );
}

export default App;
