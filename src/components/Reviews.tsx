
import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Reviews = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const reviews = [
    {
      id: 1,
      name: 'Lisa Johnson',
      role: 'Data Science Student',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2564',
      review: 'The Data Science course completely transformed my career path. The instructors were incredibly knowledgeable and supportive, and the hands-on projects gave me real-world skills that impressed my employers.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Michael Zhang',
      role: 'Software Engineer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2574',
      review: 'As someone already working in the industry, I was looking to enhance my AI skills. This lab provided exactly what I needed - cutting-edge content, practical applications, and networking opportunities with like-minded professionals.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Priya Patel',
      role: 'Recent Graduate',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2061',
      review: "I enrolled in the robotics course right after completing my bachelor's degree. The lab experience was invaluable, and the mentorship from the instructors helped me secure my dream job at a tech startup.",
      rating: 4,
    },
  ];
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };
  
  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i} 
        size={18} 
        className={i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'} 
      />
    ));
  };

  return (
    <section id="reviews" className="py-20 bg-lab-900 text-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title text-white">Student Reviews</h2>
          <p className="section-subtitle text-white/80">
            Don't just take our word for it. Here's what our students have to say about their experiences.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {reviews.map((review) => (
                  <div key={review.id} className="w-full flex-shrink-0 px-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 relative">
                      <Quote size={48} className="absolute top-8 left-8 text-white/10" />
                      <div className="flex flex-col md:flex-row items-center text-center md:text-left md:items-start gap-6 relative z-10">
                        <div className="md:w-1/4 flex flex-col items-center md:items-start">
                          <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
                            <img 
                              src={review.image} 
                              alt={review.name} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <h3 className="text-xl font-semibold">{review.name}</h3>
                          <p className="text-white/70 text-sm">{review.role}</p>
                          <div className="flex mt-2">
                            {renderStars(review.rating)}
                          </div>
                        </div>
                        <div className="md:w-3/4">
                          <p className="text-white/90 text-lg italic leading-relaxed">"{review.review}"</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <button 
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors text-white z-10"
              aria-label="Previous review"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors text-white z-10"
              aria-label="Next review"
            >
              <ChevronRight size={24} />
            </button>
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`h-2 rounded-full transition-all ${
                  i === currentSlide ? 'w-8 bg-white' : 'w-2 bg-white/30'
                }`}
                aria-label={`Go to review ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
