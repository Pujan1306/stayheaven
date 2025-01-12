import React from 'react';
import { RoomList } from '../components/rooms/RoomList';

export function RoomsPage() {
  return (
    <div>
      <div className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Luxurious Accommodations</h1>
          <p className="text-xl">Choose from our carefully curated selection of rooms and suites</p>
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Your Perfect Stay</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Each room is thoughtfully designed to provide the ultimate comfort and luxury,
            featuring premium amenities and stunning views of Beverly Hills.
          </p>
        </div>

        <RoomList />
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Special Offers</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Book directly through our website to receive exclusive benefits including
            complimentary breakfast, early check-in, and special seasonal discounts.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors"
          >
            Contact Us for Details
          </a>
        </div>
      </section>
    </div>
  );
}