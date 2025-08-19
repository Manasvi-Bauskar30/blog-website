import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { Comment } from '../types';

interface CommentSectionProps {
  postId: number;
  comments: Comment[];
}

const CommentSection: React.FC<CommentSectionProps> = ({ postId, comments: initialComments }) => {
  const [comments, setComments] = useState<Comment[]>(initialComments);
  const [newComment, setNewComment] = useState({
    name: '',
    email: '',
    content: ''
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    
    if (!newComment.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!newComment.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(newComment.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!newComment.content.trim()) {
      newErrors.content = 'Comment is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    const newCommentObj: Comment = {
      id: Date.now(),
      name: newComment.name,
      email: newComment.email,
      content: newComment.content,
      date: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }),
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${newComment.name}`
    };
    
    setComments([...comments, newCommentObj]);
    setNewComment({
      name: '',
      email: '',
      content: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewComment({
      ...newComment,
      [name]: value
    });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  return (
    <div className="mt-12">
      <h3 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-8">
        Comments ({comments.length})
      </h3>
      
      {comments.length > 0 ? (
        <div className="space-y-6 mb-8">
          {comments.map((comment) => (
            <div key={comment.id} className="flex space-x-4 p-6 rounded-lg bg-gray-50 dark:bg-gray-800/50">
              <img
                src={comment.avatar}
                alt={`${comment.name}'s avatar`}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">{comment.name}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{comment.date}</p>
                  </div>
                  <button className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
                    Reply
                  </button>
                </div>
                <p className="text-gray-700 dark:text-gray-300">{comment.content}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600 dark:text-gray-400 mb-8">No comments yet. Be the first to comment!</p>
      )}
      
      <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-700">
        <h4 className="text-xl font-medium text-gray-900 dark:text-white mb-4">Leave a comment</h4>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Name*
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={newComment.name}
                onChange={handleChange}
                className={`w-full px-4 py-2 rounded-md border ${
                  errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                } bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400`}
              />
              {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Email* (will not be published)
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={newComment.email}
                onChange={handleChange}
                className={`w-full px-4 py-2 rounded-md border ${
                  errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                } bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400`}
              />
              {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
            </div>
          </div>
          
          <div className="mb-4">
            <label htmlFor="content" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Comment*
            </label>
            <textarea
              id="content"
              name="content"
              rows={4}
              value={newComment.content}
              onChange={handleChange}
              className={`w-full px-4 py-2 rounded-md border ${
                errors.content ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
              } bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400`}
            />
            {errors.content && <p className="mt-1 text-sm text-red-500">{errors.content}</p>}
          </div>
          
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded-md hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-200 flex items-center"
          >
            Post Comment
            <Send size={16} className="ml-2" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default CommentSection;