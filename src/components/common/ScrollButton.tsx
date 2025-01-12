import React from 'react';
import { ChevronDown } from 'lucide-react';

interface ScrollButtonProps {
  targetId: string;
  onClick: (id: string) => void;
  className?: string;
}

export function ScrollButton({ targetId, onClick, className = '' }: ScrollButtonProps) {
  return (
    <button
      onClick={() => onClick(targetId)}
      className={`animate-bounce p-2 rounded-full bg-white/30 hover:bg-white/50 transition-colors ${className}`}
      aria-label="Scroll to next section"
    >
      <ChevronDown className="h-6 w-6 text-white" />
    </button>
  );
}