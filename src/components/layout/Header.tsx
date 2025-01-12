import React from 'react';
import { Link } from 'react-router-dom';
import { Hotel } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Hotel className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-semibold text-gray-900">Grand Vista Hotel</span>
          </Link>
          
          <div className="hidden sm:flex sm:space-x-8">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/rooms">Rooms</NavLink>
            <NavLink to="/guide">City Guide</NavLink>
            <NavLink to="/restaurant">Restaurant</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
}

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
    >
      {children}
    </Link>
  );
}