import React from 'react';
import { Utensils, Car, Wifi, Dumbbell } from 'lucide-react';

const services = [
  {
    icon: Utensils,
    title: '24/7 Fine Dining',
    description: 'Experience culinary excellence at any hour in our award-winning restaurant and through our premium room service.'
  },
  {
    icon: Car,
    title: 'Valet Parking',
    description: 'Complimentary valet parking service with 24-hour security for all our guests.'
  },
  {
    icon: Wifi,
    title: 'High-Speed Internet',
    description: 'Complimentary high-speed fiber internet access throughout the property.'
  },
  {
    icon: Dumbbell,
    title: 'Fitness Center',
    description: 'State-of-the-art fitness center with personal training services available.'
  }
];

export function Services() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">World-Class Amenities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <service.icon className="h-8 w-8 mx-auto text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}