import React from 'react';
import { MapPin, Calendar as CalendarIcon, Users } from 'lucide-react';
import type { Event } from '../types';

interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-[1.02] hover:shadow-lg">
      <div className="h-48 overflow-hidden">
        <img
          src={event.imageUrl}
          alt={event.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center space-x-2 text-sm text-purple-600 mb-2">
          <CalendarIcon className="w-4 h-4" />
          <span>{event.date}</span>
        </div>
        <h3 className="text-xl font-semibold mb-2 text-gray-900">{event.title}</h3>
        <div className="flex items-center space-x-2 text-gray-600 text-sm mb-4">
          <MapPin className="w-4 h-4" />
          <span>{event.location}</span>
        </div>
        <p className="text-gray-600 mb-4 line-clamp-2">{event.description}</p>
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
            {event.category}
          </span>
          <button className="inline-flex items-center space-x-1 text-purple-600 hover:text-purple-800">
            <Users className="w-4 h-4" />
            <span>RSVP</span>
          </button>
        </div>
      </div>
    </div>
  );
}