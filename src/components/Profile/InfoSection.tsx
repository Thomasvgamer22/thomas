
import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { ThumbsUp } from "lucide-react";

interface InfoSectionProps {
  title: string;
  content: string;
}

const InfoSection = ({ title, content }: InfoSectionProps) => {
  const [likes, setLikes] = useState(0);

  return (
    <Card className="p-6 mb-6 hover:shadow-lg transition-shadow duration-300">
      <h2 className="text-2xl font-semibold mb-3 text-blue-600">{title}</h2>
      <p className="text-gray-700 mb-4">{content}</p>
      <button
        onClick={() => setLikes(prev => prev + 1)}
        className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
      >
        <ThumbsUp className="w-5 h-5" />
        <span>{likes} me gusta</span>
      </button>
    </Card>
  );
};

export default InfoSection;
