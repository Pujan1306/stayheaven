import React from 'react';
import { useScrollToSection } from '../../hooks/useScrollToSection';

const sections = [
  { id: 'welcome', label: 'Welcome' },
  { id: 'featured-rooms', label: 'Rooms' },
  { id: 'dining', label: 'Dining' },
  { id: 'location', label: 'Location' },
  { id: 'contact', label: 'Contact' }
];

export function ScrollNav() {
  const scrollToSection = useScrollToSection();

  return (
    <nav className="hidden lg:block fixed right-8 top-1/2 -translate-y-1/2 space-y-4 z-40">
      {sections.map(section => (
        <button
          key={section.id}
          onClick={() => scrollToSection(section.id)}
          className="w-3 h-3 rounded-full bg-gray-300 hover:bg-blue-600 transition-colors"
          aria-label={`Scroll to ${section.label}`}
        />
      ))}
    </nav>
  );
}