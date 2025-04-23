
import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle } from "lucide-react";

const CommentSection = () => {
  const [comments, setComments] = useState<Array<{ text: string; date: string }>>([]);
  const [newComment, setNewComment] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;
    
    setComments(prev => [...prev, {
      text: newComment,
      date: new Date().toLocaleDateString()
    }]);
    setNewComment('');
  };

  return (
    <Card className="p-6 mt-12 bg-black/50 border-blue-600/50">
      <div className="flex items-center gap-2 mb-4">
        <MessageCircle className="w-6 h-6 text-blue-600" />
        <h2 className="text-2xl font-semibold text-blue-600">Comentarios</h2>
      </div>
      
      <form onSubmit={handleSubmit} className="mb-6">
        <Textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Deja un comentario..."
          className="mb-3 bg-black/50 text-gray-300 border-blue-600/50 focus:border-blue-600"
        />
        <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
          Enviar comentario
        </Button>
      </form>

      <div className="space-y-4">
        {comments.map((comment, index) => (
          <div key={index} className="p-4 bg-black/30 border border-blue-600/30 rounded-lg">
            <p className="text-gray-300">{comment.text}</p>
            <p className="text-sm text-gray-500 mt-2">{comment.date}</p>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default CommentSection;
