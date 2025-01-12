import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <p className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                +1 (555) 123-4567
              </p>
              <p className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                info@grandvista.com
              </p>
              <p className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                123 Luxury Avenue, Beverly Hills, CA 90210
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/rooms" className="hover:text-blue-400">Book a Room</a></li>
              <li><a href="/restaurant" className="hover:text-blue-400">Restaurant Menu</a></li>
              <li><a href="/gallery" className="hover:text-blue-400">Photo Gallery</a></li>
              <li><a href="/contact" className="hover:text-blue-400">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400"><Facebook /></a>
              <a href="#" className="hover:text-blue-400"><Instagram /></a>
              <a href="#" className="hover:text-blue-400"><Twitter /></a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Grand Vista Hotel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}