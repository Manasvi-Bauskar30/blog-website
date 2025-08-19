import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BlogPostCard from '../components/BlogPostCard';
import { getPostsByCategory } from '../data/blogData';
import { BlogPost } from '../types';

const CategoryPage: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      if (!category) return;
      
      try {
        setLoading(true);
        const categoryPosts = await getPostsByCategory(category);
        setPosts(categoryPosts);
        setLoading(false);
      } catch (error) {
        console.error(`Error fetching ${category} posts:`, error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, [category]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  // Capitalize first letter of category for display
  const displayCategory = category ? category.charAt(0).toUpperCase() + category.slice(1) : '';

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-serif font-bold text-gray-900 dark:text-white mb-6">
          {displayCategory} Articles
        </h1>
        
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Explore our collection of articles about {displayCategory.toLowerCase()}.
        </p>
        
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
            <h2 className="text-xl font-medium text-gray-900 dark:text-white mb-2">
              No posts found
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              We don't have any posts in the {displayCategory} category yet. Check back later!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;