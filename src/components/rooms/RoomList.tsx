import React from 'react';
import { RoomCard } from './RoomCard';
import type { Room } from '../../types';

const rooms: Room[] = [
  {
    id: 'deluxe-king',
    name: 'Deluxe King Room',
    type: 'Deluxe',
    price: 299,
    description: 'Spacious room with a king-size bed, city views, and modern amenities.',
    features: ['King-size bed', 'City view', '42" Smart TV', 'Rain shower', 'Mini bar'],
    imageUrl: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1920&q=80'
  },
  {
    id: 'luxury-suite',
    name: 'Luxury Suite',
    type: 'Suite',
    price: 499,
    description: 'Premium suite with separate living area and panoramic ocean views.',
    features: ['Ocean view', 'Separate living area', '55" Smart TV', 'Jacuzzi tub', 'Butler service'],
    imageUrl: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1920&q=80'
  },
  {
    id: 'standard-double',
    name: 'Standard Double Room',
    type: 'Standard',
    price: 199,
    description: 'Comfortable room with two double beds, perfect for families.',
    features: ['Two double beds', 'Garden view', '42" Smart TV', 'Work desk', 'Coffee maker'],
    imageUrl: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1920&q=80'
  }
];

export function RoomList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {rooms.map(room => (
        <RoomCard key={room.id} room={room} />
      ))}
    </div>
  );
}