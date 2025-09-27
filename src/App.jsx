import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center">
        <p className='text-3xl font-bold text-center'>App</p>
      </main>
      <Footer />
    </div>
  );
}
export default App;
