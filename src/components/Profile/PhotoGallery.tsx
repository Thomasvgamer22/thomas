
import React from 'react';

const PhotoGallery = () => {
  const photos = [
    "/lovable-uploads/c9a41cb0-d875-46f5-8a42-0d4c472b0fb0.png",
    "/lovable-uploads/369517ad-ed8c-4e9f-b26e-80fcf3a3fea1.png",
    "/lovable-uploads/ac49640f-991a-4635-8624-b28ee693dc35.png",
    "/lovable-uploads/a60aa91a-4efb-405f-9037-152547b4d8a5.png",
    "/lovable-uploads/98071b3a-cbfb-4ae1-9ae0-cbf3baaed2aa.png"
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      {photos.map((photo, index) => (
        <div 
          key={index} 
          className="aspect-[3/4] rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 border border-blue-600/50 hover:border-blue-600"
        >
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
