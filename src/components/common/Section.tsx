import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
  bgColor?: string;
}

export function Section({ id, title, children, className = '', bgColor = 'bg-white' }: SectionProps) {
  return (
    <section id={id} className={`py-16 ${bgColor} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{title}</h2>
        {children}
      </div>
    </section>
  );
}