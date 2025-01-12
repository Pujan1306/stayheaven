import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

export function NavLink({ to, children, className = '' }: NavLinkProps) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`flex flex-col items-center text-sm font-medium transition-colors ${
        isActive ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
      } ${className}`}
    >
      {children}
    </Link>
  );
}