import React from 'react';
import { History } from '../components/about/History';
import { Services } from '../components/about/Services';

export function AboutPage() {
  return (
    <div>
      <div className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl font-bold mb-4">About Grand Vista Hotel</h1>
          <p className="text-xl">Discover our story of luxury and excellence</p>
        </div>
      </div>
      
      <History />
      <Services />
      
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Experience Luxury Today</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join us at Grand Vista Hotel and discover why we've been the preferred choice for
            discerning travelers for over five decades.
          </p>
          <a
            href="/rooms"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors"
          >
            View Our Rooms
          </a>
        </div>
      </section>
    </div>
  );
}