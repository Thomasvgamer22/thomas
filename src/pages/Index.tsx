
import React from 'react';
import ProfileHeader from '@/components/Profile/ProfileHeader';
import InfoSection from '@/components/Profile/InfoSection';
import PhotoGallery from '@/components/Profile/PhotoGallery';
import CommentSection from '@/components/Profile/CommentSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <ProfileHeader />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InfoSection 
            title="Mis intereses"
            content="Mis intereses se basan en la tecnología en general, tanto los dispositivos móviles, computadores, audífonos, etc."
          />
          
          <InfoSection 
            title="Mis pasatiempos"
            content="Mis pasatiempos favoritos son jugar videojuegos, escuchar música, pasar tiempo con mis amigos y familiares."
          />
          
          <InfoSection 
            title="Mi comida favorita"
            content="Mi comida favorita son las pastas con carne molida y las hamburguesas."
          />
          
          <InfoSection 
            title="Algunos hechos curiosos"
            content="Me obsesiono con los audífonos, cada que veo un diseño diferente o por así decirlo exótico, lo quiero. Soy muy estricto en cuanto a la calidad del sonido y la música. Hablo mucho y hago chistes muy malos que aun así hacen reír."
          />
          
          <InfoSection 
            title="Mi tipo de cita favorita"
            content="Algo casual, que no se planee y que fluya el momento."
          />
          
          <InfoSection 
            title="Mi lema de vida"
            content="Hay que saber vivir cada momento, disfrutar sin dañar a los demás, pero lo más importante es ser feliz siempre."
          />
        </div>

        <h2 className="text-2xl font-semibold mb-6 text-blue-600 mt-12">Mis Fotos</h2>
        <PhotoGallery />
        
        <CommentSection />
      </div>
    </div>
  );
};

export default Index;
