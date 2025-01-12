import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useScrollToSection } from '../../hooks/useScrollToSection';
import { ScrollButton } from '../common/ScrollButton';

const slides = [
  {
    id: 1,
    imageUrl: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1920&q=80',
    title: 'Welcome to Grand Vista Hotel',
    subtitle: 'Experience Luxury Like Never Before'
  },
  {
    id: 2,
    imageUrl: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1920&q=80',
    title: 'Elegant Accommodations',
    subtitle: 'Comfort Meets Sophistication'
  },
  {
    id: 3,
    imageUrl: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1920&q=80',
    title: 'Fine Dining Experience',
    subtitle: 'Culinary Excellence at Its Best'
  }
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const scrollToSection = useScrollToSection();

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  React.useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.imageUrl}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40">
            <div className="h-full flex flex-col items-center justify-center text-white text-center">
              <h1 className="text-5xl font-bold mb-4">{slide.title}</h1>
              <p className="text-xl">{slide.subtitle}</p>
            </div>
          </div>
        </div>
      ))}
      
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 rounded-full p-2 transition-colors"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 rounded-full p-2 transition-colors"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>
      
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>

      <ScrollButton
        targetId="welcome-section"
        onClick={scrollToSection}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      />
    </div>
  );
}