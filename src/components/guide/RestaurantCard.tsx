import React from 'react';
import { DollarSign, Clock, MapPin } from 'lucide-react';
import type { Restaurant } from '../../types/guide';

interface RestaurantCardProps {
  restaurant: Restaurant;
}

export function RestaurantCard({ restaurant }: RestaurantCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-2">{restaurant.name}</h3>
      <div className="flex items-center text-gray-600 mb-2">
        <MapPin className="h-4 w-4 mr-2" />
        <span>{restaurant.neighborhood}</span>
        <span className="mx-2">•</span>
        <span>{restaurant.cuisine}</span>
        <span className="mx-2">•</span>
        <span>{restaurant.priceRange}</span>
      </div>
      <div className="flex items-center text-gray-600 mb-4">
        <Clock className="h-4 w-4 mr-2" />
        <span>{restaurant.openingHours}</span>
      </div>
      <div className="mb-4">
        <h4 className="font-semibold mb-2">Signature Dishes:</h4>
        <ul className="list-disc list-inside text-gray-600">
          {restaurant.signatureDishes.map((dish, index) => (
            <li key={index}>{dish}</li>
          ))}
        </ul>
      </div>
      <div className="flex items-center justify-between text-sm">
        <span className="text-gray-600">
          Average meal: ${restaurant.averageMealCost}/person
        </span>
        {restaurant.reservationRequired && (
          <span className="text-red-600">Reservation required</span>
        )}
      </div>
    </div>
  );
}