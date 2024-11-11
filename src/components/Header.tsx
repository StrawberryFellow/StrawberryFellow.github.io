import React from 'react';
import { Search, Calendar, User } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Calendar className="w-8 h-8" />
            <span className="text-xl font-bold">EventHub</span>
          </div>
          
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search events..."
                className="w-full pl-10 pr-4 py-2 rounded-full bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/70"
              />
            </div>
          </div>

          <nav className="flex items-center space-x-4">
            <button className="hover:bg-white/10 px-3 py-2 rounded-lg transition-colors">
              Create Event
            </button>
            <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
              <User className="w-5 h-5" />
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}