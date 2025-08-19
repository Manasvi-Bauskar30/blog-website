import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, User, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import CommentSection from '../components/CommentSection';
import { getPostById, getRelatedPosts } from '../data/blogData';
import { BlogPost as BlogPostType } from '../types';
import BlogPostCard from '../components/BlogPostCard';

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPostType[]>([]);
  const [loading, setLoading] = useState(true);
  const [showShareOptions, setShowShareOptions] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      if (!id) return;
      try {
        setLoading(true);
        // Scroll to top when loading a new post
        window.scrollTo(0, 0);
        
        const postData = await getPostById(parseInt(id));
        setPost(postData);
        
        const related = await getRelatedPosts(parseInt(id), postData.category);
        setRelatedPosts(related);
        
        setLoading(false);
      } catch (error) {
        console.error('Error fetching post:', error);
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Post not found</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">The post you're looking for doesn't exist or has been removed.</p>
        <Link 
          to="/" 
          className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  const toggleShareOptions = () => {
    setShowShareOptions(!showShareOptions);
  };

  return (
    <article className="max-w-4xl mx-auto">
      {/* Post Header */}
      <header className="mb-8">
        <div className="mb-4">
          <Link 
            to={`/category/${post.category.toLowerCase()}`}
            className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors duration-200"
          >
            {post.category}
          </Link>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 dark:text-white mb-6">
          {post.title}
        </h1>
        
        <div className="flex flex-wrap items-center text-gray-600 dark:text-gray-400 gap-4 mb-6">
          <div className="flex items-center">
            <User size={18} className="mr-2" />
            <span>By {post.author}</span>
          </div>
          <div className="flex items-center">
            <Calendar size={18} className="mr-2" />
            <time dateTime={post.publishedAt}>{post.publishedAt}</time>
          </div>
          <div className="flex items-center">
            <Clock size={18} className="mr-2" />
            <span>{post.readingTime} min read</span>
          </div>
          
          <div className="relative ml-auto">
            <button 
              onClick={toggleShareOptions}
              className="flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              aria-label="Share this post"
            >
              <Share2 size={18} className="mr-2" />
              Share
            </button>
            
            {showShareOptions && (
              <div className="absolute right-0 mt-2 p-2 bg-white dark:bg-gray-800 rounded-md shadow-lg z-10 flex space-x-2">
                <button className="p-2 text-blue-600 hover:bg-blue-100 dark:hover:bg-blue-900/30 rounded-full transition-colors duration-200">
                  <Facebook size={18} />
                </button>
                <button className="p-2 text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/30 rounded-full transition-colors duration-200">
                  <Twitter size={18} />
                </button>
                <button className="p-2 text-blue-700 hover:bg-blue-100 dark:hover:bg-blue-900/30 rounded-full transition-colors duration-200">
                  <Linkedin size={18} />
                </button>
              </div>
            )}
          </div>
        </div>
        
        <div className="rounded-xl overflow-hidden mb-8">
          <img 
            src={post.coverImage} 
            alt={post.title} 
            className="w-full h-auto object-cover"
          />
        </div>
      </header>
      
      {/* Post Content */}
      <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
        {post.content.split('\n\n').map((paragraph, idx) => (
          <p key={idx} className="mb-6 text-gray-800 dark:text-gray-200 leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>
      
      {/* Tags */}
      {post.tags && post.tags.length > 0 && (
        <div className="mb-12">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">Tags:</h3>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag, idx) => (
              <Link 
                key={idx} 
                to={`/tag/${tag.toLowerCase()}`}
                className="px-3 py-1 text-sm rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                #{tag}
              </Link>
            ))}
          </div>
        </div>
      )}
      
      {/* Author Bio */}
      <div className="p-6 rounded-lg bg-gray-50 dark:bg-gray-800/50 mb-12 flex flex-col sm:flex-row gap-6">
        <img 
          src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${post.author}`}
          alt={post.author} 
          className="w-20 h-20 rounded-full object-cover"
        />
        <div>
          <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">
            About {post.author}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi volutpat, 
            leo quis hendrerit dictum, sapien libero fermentum justo, eget faucibus 
            ipsum sem non eros.
          </p>
          <div className="flex space-x-3">
            <a href="#" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
              Twitter
            </a>
            <a href="#" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
              LinkedIn
            </a>
            <a href="#" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
              Website
            </a>
          </div>
        </div>
      </div>
      
      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <div className="mb-12">
          <h3 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-6">
            Related Posts
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((relatedPost) => (
              <BlogPostCard key={relatedPost.id} post={relatedPost} />
            ))}
          </div>
        </div>
      )}
      
      {/* Comments Section */}
      <CommentSection postId={post.id} comments={post.comments || []} />
    </article>
  );
};

export default BlogPost;