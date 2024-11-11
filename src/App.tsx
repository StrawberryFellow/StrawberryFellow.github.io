import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedEvents from './components/FeaturedEvents';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <FeaturedEvents />
      </main>
    </div>
  );
}

export default App;