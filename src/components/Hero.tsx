import React from 'react';
import { Calendar, MapPin, Tag } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-purple-600 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80"
          alt="People at an event"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Discover Amazing Events Near You
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join your community in celebrating local events, workshops, and gatherings. Find your next adventure today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="inline-flex items-center px-6 py-3 rounded-lg bg-white text-purple-600 hover:bg-gray-100 transition-colors">
              <Calendar className="w-5 h-5 mr-2" />
              Browse Events
            </button>
            <button className="inline-flex items-center px-6 py-3 rounded-lg bg-purple-500 text-white hover:bg-purple-400 transition-colors">
              <MapPin className="w-5 h-5 mr-2" />
              Find Nearby
            </button>
            <button className="inline-flex items-center px-6 py-3 rounded-lg bg-purple-500 text-white hover:bg-purple-400 transition-colors">
              <Tag className="w-5 h-5 mr-2" />
              Categories
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}