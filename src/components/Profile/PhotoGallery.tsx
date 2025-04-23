
import React from 'react';

const PhotoGallery = () => {
  const photos = [
    "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    "https://images.unsplash.com/photo-1518770660439-4636190af475",
    "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      {photos.map((photo, index) => (
        <div key={index} className="aspect-video rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
          <img
            src={photo}
            alt={`Foto ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default PhotoGallery;
