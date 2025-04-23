
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
    <Card className="p-6">
      <div className="flex items-center gap-2 mb-4">
        <MessageCircle className="w-6 h-6 text-blue-600" />
        <h2 className="text-2xl font-semibold">Comentarios</h2>
      </div>
      
      <form onSubmit={handleSubmit} className="mb-6">
        <Textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Deja un comentario..."
          className="mb-3"
        />
        <Button type="submit">Enviar comentario</Button>
      </form>

      <div className="space-y-4">
        {comments.map((comment, index) => (
          <div key={index} className="p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-700">{comment.text}</p>
            <p className="text-sm text-gray-500 mt-2">{comment.date}</p>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default CommentSection;
