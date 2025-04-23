
import React from 'react';
import { Avatar } from "@/components/ui/avatar";

const ProfileHeader = () => {
  return (
    <div className="flex flex-col items-center mb-8 animate-fade-in">
      <Avatar className="w-32 h-32 mb-4">
        <img
          src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
          alt="Thomas"
          className="w-full h-full object-cover"
        />
      </Avatar>
      <h1 className="text-4xl font-bold text-blue-600 mb-2">Thomas Alejandro Rodriguez Rivera</h1>
      <p className="text-xl text-gray-600">21 años</p>
    </div>
  );
};

export default ProfileHeader;
