
import { useState } from 'react';
import { Maximize2, X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const galleryImages = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1581093458791-9d8415e72669?q=80&w=2069',
      alt: 'Students working in the robotics lab',
      category: 'Robotics'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1581093588036-9c55f3908902?q=80&w=2070',
      alt: 'AI demonstration session',
      category: 'AI'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1581092919536-fd612eb5303e?q=80&w=2070',
      alt: 'Data visualization project',
      category: 'Data Science'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1581093457696-ee3fb247e189?q=80&w=2070',
      alt: 'VR programming workshop',
      category: 'VR/AR'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1581094651191-5abdbebf6d80?q=80&w=2070',
      alt: 'Cybersecurity team exercise',
      category: 'Security'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1581092580835-5b7e76886a9c?q=80&w=2070',
      alt: 'Team collaboration on project',
      category: 'Team Projects'
    },
  ];
  
  const openModal = (image: string) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };
  
  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Gallery</h2>
          <p className="section-subtitle">
            Take a visual tour of our labs, events, and student projects that showcase our vibrant learning environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <div 
              key={image.id}
              className="relative group rounded-xl overflow-hidden h-64 cursor-pointer"
              onClick={() => openModal(image.src)}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="text-center text-white p-4">
                  <span className="bg-lab-500 text-white px-3 py-1 rounded-full text-xs inline-block mb-3">
                    {image.category}
                  </span>
                  <div className="flex items-center justify-center">
                    <Maximize2 size={24} className="text-white" />
                  </div>
                  <p className="mt-2 text-sm">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button className="px-6 py-3 bg-lab-500 text-white rounded-lg hover:bg-lab-600 transition-colors shadow-sm">
            View Full Gallery
          </button>
        </div>
      </div>
      
      {/* Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={closeModal}
        >
          <div 
            className="relative max-w-5xl w-full max-h-[90vh] animate-zoom-in"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedImage} 
              alt="Enlarged gallery image" 
              className="w-full h-full object-contain"
            />
            <button 
              className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
              onClick={closeModal}
            >
              <X size={24} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
