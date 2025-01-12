import React from 'react';
import { Home, Info, Hotel, Map, Utensils, Phone } from 'lucide-react';
import { NavLink } from './NavLink';

export function FixedNavFooter() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 z-50">
      <div className="max-w-lg mx-auto flex justify-between items-center">
        <NavLink to="/">
          <Home className="h-5 w-5 mb-1" />
          <span>Home</span>
        </NavLink>
        
        <NavLink to="/about">
          <Info className="h-5 w-5 mb-1" />
          <span>About</span>
        </NavLink>
        
        <NavLink to="/rooms">
          <Hotel className="h-5 w-5 mb-1" />
          <span>Rooms</span>
        </NavLink>
        
        <NavLink to="/guide">
          <Map className="h-5 w-5 mb-1" />
          <span>Guide</span>
        </NavLink>
        
        <NavLink to="/restaurant">
          <Utensils className="h-5 w-5 mb-1" />
          <span>Dining</span>
        </NavLink>
        
        <NavLink to="/contact">
          <Phone className="h-5 w-5 mb-1" />
          <span>Contact</span>
        </NavLink>
      </div>
    </nav>
  );
}