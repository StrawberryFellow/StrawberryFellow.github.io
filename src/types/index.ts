export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  category: string;
  imageUrl: string;
  organizer: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  eventsHosting: string[];
  eventsAttending: string[];
}