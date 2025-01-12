import React from 'react';

export function History() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Legacy of Luxury</h2>
            <div className="prose prose-lg text-gray-600">
              <p>Since our establishment in 1970, Grand Vista Hotel has been setting the standard for luxury hospitality in Beverly Hills. What began as a visionary project by the renowned architect Robert Martinez has evolved into an icon of sophistication and excellence.</p>
              <p className="mt-4">Through five decades of service, we've hosted world leaders, celebrated artists, and discerning travelers from across the globe. Our commitment to preserving the classic elegance while embracing modern innovations has earned us numerous accolades, including the prestigious Five Diamond Award for 15 consecutive years.</p>
            </div>
          </div>
          <div className="relative h-[400px]">
            <img
              src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1920&q=80"
              alt="Grand Vista Hotel Historic Building"
              className="w-full h-full object-cover rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}