import React from 'react';
import { ChevronRight } from 'lucide-react';
import EventCard from './EventCard';
import type { Event } from '../types';

const FEATURED_EVENTS: Event[] = [
  {
    id: '1',
    title: 'Tech Innovators Summit 2024',
    date: 'Mar 15, 2024',
    location: 'San Francisco, CA',
    description: 'Join leading tech innovators for a day of inspiring talks, workshops, and networking opportunities.',
    category: 'Technology',
    imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80',
    organizer: 'Tech Community SF'
  },
  {
    id: '2',
    title: 'Spring Arts Festival',
    date: 'Apr 5, 2024',
    location: 'Central Park, NY',
    description: 'Celebrate spring with local artists, live music, and interactive art installations.',
    category: 'Arts & Culture',
    imageUrl: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&q=80',
    organizer: 'NYC Arts Council'
  },
  {
    id: '3',
    title: 'Food & Wine Experience',
    date: 'Mar 20, 2024',
    location: 'Downtown Seattle, WA',
    description: 'Experience the finest local cuisine and wine pairings from top chefs and sommeliers.',
    category: 'Food & Drink',
    imageUrl: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80',
    organizer: 'Seattle Culinary Association'
  }
];

export default function FeaturedEvents() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Featured Events</h2>
          <button className="inline-flex items-center text-purple-600 hover:text-purple-800">
            View all events
            <ChevronRight className="w-5 h-5 ml-1" />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_EVENTS.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
}