import React from 'react';
import { Clock, DollarSign, Calendar } from 'lucide-react';
import type { Attraction } from '../../types/guide';

interface AttractionCardProps {
  attraction: Attraction;
}

export function AttractionCard({ attraction }: AttractionCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-2">{attraction.name}</h3>
      <div className="text-gray-600 mb-4">{attraction.description}</div>
      
      <div className="space-y-2 mb-4">
        <div className="flex items-center text-gray-600">
          <Clock className="h-4 w-4 mr-2" />
          <span>{attraction.openingHours}</span>
        </div>
        {attraction.admissionFee && (
          <div className="flex items-center text-gray-600">
            <DollarSign className="h-4 w-4 mr-2" />
            <span>${attraction.admissionFee}</span>
          </div>
        )}
      </div>

      {attraction.currentExhibitions && (
        <div className="mb-4">
          <h4 className="font-semibold mb-2">Current Exhibitions:</h4>
          <ul className="list-disc list-inside text-gray-600">
            {attraction.currentExhibitions.map((exhibition, index) => (
              <li key={index}>{exhibition}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="text-sm text-gray-600">
        <strong>Best time to visit:</strong> {attraction.bestTimeToVisit}
      </div>
    </div>
  );
}