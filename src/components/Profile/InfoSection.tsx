
import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { ThumbsUp, Square } from "lucide-react";

interface InfoSectionProps {
  title: string;
  content: string;
}

const InfoSection = ({ title, content }: InfoSectionProps) => {
  const [likes, setLikes] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card 
      className={`p-6 mb-6 transition-all duration-300 cursor-pointer bg-black/50 border-blue-600/50 hover:border-blue-600 ${
        isExpanded ? 'scale-105' : ''
      }`}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="flex items-center gap-2 mb-3">
        <Square className="w-6 h-6 text-blue-600" />
        <h2 className="text-2xl font-semibold text-blue-600">{title}</h2>
      </div>
      
      {isExpanded && (
        <p className="text-gray-300 mb-4 animate-fade-in">{content}</p>
      )}
      
      <button
        onClick={(e) => {
          e.stopPropagation();
          setLikes(prev => prev + 1);
        }}
        className="flex items-center gap-2 text-gray-400 hover:text-blue-600 transition-colors"
      >
        <ThumbsUp className="w-5 h-5" />
        <span>{likes} me gusta</span>
      </button>
    </Card>
  );
};

export default InfoSection;
