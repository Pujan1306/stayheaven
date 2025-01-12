import React from 'react';
import { Hero } from '../components/home/Hero';
import { Section } from '../components/common/Section';
import { RoomList } from '../components/rooms/RoomList';

export function HomePage() {
  return (
    <div>
      <Hero />
      
      <Section id="welcome" title="Welcome to Grand Vista Hotel">
        <div className="prose prose-lg mx-auto text-gray-600">
          <p>
            Experience unparalleled luxury at Grand Vista Hotel, where timeless elegance meets modern comfort. 
            Nestled in the heart of Beverly Hills, our hotel offers a perfect blend of sophisticated 
            accommodation, world-class dining, and exceptional service.
          </p>
        </div>
      </Section>

      <Section id="featured-rooms" title="Featured Accommodations" bgColor="bg-gray-50">
        <RoomList />
      </Section>

      <Section id="dining" title="Fine Dining Experience">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1920&q=80"
            alt="Fine Dining"
            className="rounded-lg shadow-lg"
          />
          <div className="space-y-4">
            <p className="text-lg text-gray-600">
              Indulge in culinary excellence at our award-winning restaurant, where our master chefs 
              create extraordinary dishes using the finest ingredients. From intimate dinners to 
              special celebrations, every meal is an unforgettable experience.
            </p>
            <a href="/restaurant" className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
              View Menu
            </a>
          </div>
        </div>
      </Section>

      <Section id="location" title="Prime Location" bgColor="bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <p className="text-lg text-gray-600">
              Located in the prestigious Beverly Hills, Grand Vista Hotel puts you at the center of 
              luxury shopping, fine dining, and cultural attractions. Our concierge team is ready 
              to help you explore the best of what the city has to offer.
            </p>
            <a href="/guide" className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
              Explore Area
            </a>
          </div>
          <img
            src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1920&q=80"
            alt="Beverly Hills"
            className="rounded-lg shadow-lg"
          />
        </div>
      </Section>

      <Section id="contact" title="Get in Touch">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-lg text-gray-600 mb-6">
            Ready to experience luxury at its finest? Contact us to book your stay or learn more 
            about our special offers and packages.
          </p>
          <a href="/contact" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors">
            Contact Us
          </a>
        </div>
      </Section>
    </div>
  );
}