import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, MessageSquare, Share2 } from 'lucide-react';
import { BlogPost } from '../types';

interface BlogPostCardProps {
  post: BlogPost;
  featured?: boolean;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post, featured = false }) => {
  return (
    <article 
      className={`overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-gray-800 ${
        featured ? 'md:col-span-2 md:row-span-2' : ''
      }`}
    >
      <Link to={`/post/${post.id}`}>
        <div className="relative overflow-hidden">
          <img 
            src={post.coverImage} 
            alt={post.title} 
            className={`w-full object-cover transition-transform duration-300 hover:scale-105 ${
              featured ? 'h-64 md:h-80' : 'h-48'
            }`}
          />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-600 text-white">
              {post.category}
            </span>
          </div>
        </div>
      </Link>
      
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
          <Clock size={16} className="mr-1" />
          <time dateTime={post.publishedAt}>{post.publishedAt}</time>
          <span className="mx-2">•</span>
          <MessageSquare size={16} className="mr-1" />
          <span>{post.commentCount} comments</span>
        </div>
        
        <Link to={`/post/${post.id}`}>
          <h2 className={`font-serif font-bold text-gray-900 dark:text-white mb-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 ${
            featured ? 'text-2xl md:text-3xl' : 'text-xl'
          }`}>
            {post.title}
          </h2>
        </Link>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        
        <div className="flex items-center justify-between">
          <Link 
            to={`/post/${post.id}`} 
            className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors duration-200"
          >
            Read more
          </Link>
          
          <button 
            className="p-2 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            aria-label="Share this post"
          >
            <Share2 size={18} />
          </button>
        </div>
      </div>
    </article>
  );
};

export default BlogPostCard;