import React from 'react';

const GallerySection = () => {
  const images = [
    { src: "/placeholder.svg", alt: "Submarine 1" },
    { src: "/placeholder.svg", alt: "Team 1" },
    { src: "/placeholder.svg", alt: "Event 1" },
    { src: "/placeholder.svg", alt: "Submarine 2" },
    { src: "/placeholder.svg", alt: "Team 2" },
    { src: "/placeholder.svg", alt: "Event 2" },
  ];

  return (
    <section id="gallery" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;