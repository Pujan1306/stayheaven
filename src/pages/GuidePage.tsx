import React, { useState } from 'react';
import { RestaurantCard } from '../components/guide/RestaurantCard';
import { AttractionCard } from '../components/guide/AttractionCard';
import { restaurants } from '../data/restaurants';
import { attractions } from '../data/attractions';
import { transportOptions } from '../data/transport';

export function GuidePage() {
  const [activeTab, setActiveTab] = useState<'dining' | 'attractions' | 'transport'>('dining');

  return (
    <div>
      <div className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Beverly Hills Travel Guide</h1>
          <p className="text-xl">Discover the best of Beverly Hills</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-center space-x-4 mb-8">
          {(['dining', 'attractions', 'transport'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-md ${
                activeTab === tab
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {activeTab === 'dining' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {restaurants.map((restaurant) => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))}
          </div>
        )}

        {activeTab === 'attractions' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {attractions.map((attraction) => (
              <AttractionCard key={attraction.id} attraction={attraction} />
            ))}
          </div>
        )}

        {activeTab === 'transport' && (
          <div className="space-y-6">
            {transportOptions.map((option, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{option.type}</h3>
                <p className="text-gray-600 mb-4">{option.description}</p>
                <div className="text-gray-600 mb-4">Cost: {option.cost}</div>
                <div>
                  <h4 className="font-semibold mb-2">Tips:</h4>
                  <ul className="list-disc list-inside text-gray-600">
                    {option.tips.map((tip, tipIndex) => (
                      <li key={tipIndex}>{tip}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}