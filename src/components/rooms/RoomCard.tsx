import React from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import type { Room } from '../../types';

interface RoomCardProps {
  room: Room;
}

export function RoomCard({ room }: RoomCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-64">
        <img
          src={room.imageUrl}
          alt={room.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
          ${room.price}/night
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{room.name}</h3>
        <p className="text-gray-600 mb-4">{room.description}</p>
        <div className="space-y-2 mb-6">
          {room.features.map((feature, index) => (
            <div key={index} className="flex items-center text-gray-600">
              <Check className="h-5 w-5 text-green-500 mr-2" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
        <Link
          to={`/rooms/${room.id}/book`}
          className="block w-full text-center bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
}