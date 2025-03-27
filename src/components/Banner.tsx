
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    title: 'Discover the Future of Learning',
    subtitle: 'Advanced lab facilities for innovative education',
    image: 'https://images.unsplash.com/photo-1581092787765-e3feb951d987?q=80&w=2070',
    align: 'left',
  },
  {
    id: 2,
    title: 'Hands-on Learning Experience',
    subtitle: 'State-of-the-art equipment for real-world skills',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070',
    align: 'center',
  },
  {
    id: 3,
    title: 'Collaborate & Innovate',
    subtitle: 'Join a community of passionate learners and educators',
    image: 'https://images.unsplash.com/photo-1581093196277-9f608bb3d4b8?q=80&w=2070',
    align: 'right',
  },
];

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    
    return () => clearInterval(timer);
  }, [currentSlide]);
  
  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsTransitioning(false), 500);
  };
  
  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const slide = slides[currentSlide];
  
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Slides */}
      <div className="absolute inset-0">
        {slides.map((s, i) => (
          <div 
            key={s.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              i === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-[2s] scale-105"
              style={{ 
                backgroundImage: `url(${s.image})`,
                transform: i === currentSlide ? 'scale(1)' : 'scale(1.05)'
              }}
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>
        ))}
      </div>
      
      {/* Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="container mx-auto px-6">
          <div className={`max-w-xl text-white ${
            slide.align === 'center' ? 'mx-auto text-center' : 
            slide.align === 'right' ? 'ml-auto text-right' : ''
          }`}>
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-up"
              style={{ animationDelay: '200ms' }}
            >
              {slide.title}
            </h1>
            <p 
              className="text-xl md:text-2xl mb-8 text-white/90 animate-fade-up"
              style={{ animationDelay: '400ms' }}
            >
              {slide.subtitle}
            </p>
            <button 
              className="px-8 py-3 rounded-full bg-lab-500 text-white hover:bg-lab-600 transition-colors animate-fade-up"
              style={{ animationDelay: '600ms' }}
            >
              Know More
            </button>
          </div>
        </div>
      </div>
      
      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors text-white"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors text-white"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>
      
      {/* Indicators */}
      <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`h-2 rounded-full transition-all ${
              i === currentSlide ? 'w-8 bg-white' : 'w-2 bg-white/50'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Banner;
