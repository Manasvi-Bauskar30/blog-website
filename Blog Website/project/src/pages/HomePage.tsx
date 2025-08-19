import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import BlogPostCard from '../components/BlogPostCard';
import { getAllPosts } from '../data/blogData';
import { BlogPost } from '../types';

const HomePage: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [featuredPost, setFeaturedPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const allPosts = await getAllPosts();
        setPosts(allPosts.slice(1)); // All posts except featured
        setFeaturedPost(allPosts[0]); // First post as featured
        setLoading(false);
      } catch (error) {
        console.error('Error fetching posts:', error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const categories = ['All', 'Technology', 'Travel', 'Food', 'Lifestyle'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPosts = activeCategory === 'All' 
    ? posts 
    : posts.filter(post => post.category.toLowerCase() === activeCategory.toLowerCase());

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section with Featured Post */}
      {featuredPost && (
        <div className="mb-12">
          <div className="relative rounded-xl overflow-hidden">
            <img 
              src={featuredPost.coverImage} 
              alt={featuredPost.title} 
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-blue-600 text-white mb-3">
                {featuredPost.category}
              </span>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white mb-3">
                {featuredPost.title}
              </h1>
              <p className="text-gray-200 mb-4 max-w-2xl">
                {featuredPost.excerpt}
              </p>
              <div className="flex items-center text-sm text-gray-300 mb-4">
                <time dateTime={featuredPost.publishedAt}>{featuredPost.publishedAt}</time>
                <span className="mx-2">•</span>
                <span>{featuredPost.commentCount} comments</span>
              </div>
              <Link 
                to={`/post/${featuredPost.id}`} 
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors duration-200"
              >
                Read Article
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Category Filter */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                activeCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Latest Posts */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 dark:text-white">
            {activeCategory === 'All' ? 'Latest Posts' : `${activeCategory} Posts`}
          </h2>
          {activeCategory !== 'All' && (
            <Link 
              to={`/category/${activeCategory.toLowerCase()}`} 
              className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium flex items-center"
            >
              View All
              <ArrowRight size={16} className="ml-1" />
            </Link>
          )}
        </div>

        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400">No posts found in this category.</p>
          </div>
        )}
      </div>

      {/* Newsletter Subscription */}
      <div className="py-12 px-6 sm:px-10 bg-blue-50 dark:bg-blue-900/20 rounded-xl text-center">
        <h3 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 dark:text-white mb-4">
          Subscribe to Our Newsletter
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
          Stay updated with our latest blog posts, news, and exclusive content delivered straight to your inbox.
        </p>
        <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-grow px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
            required
          />
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-medium rounded-md transition-colors duration-200"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default HomePage;