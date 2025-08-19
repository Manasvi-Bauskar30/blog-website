import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import BlogPostCard from '../components/BlogPostCard';
import { searchPosts } from '../data/blogData';
import { BlogPost } from '../types';

const SearchResults: React.FC = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('q') || '';
  
  const [results, setResults] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState(query);

  useEffect(() => {
    const fetchResults = async () => {
      if (!query) {
        setResults([]);
        setLoading(false);
        return;
      }
      
      try {
        setLoading(true);
        const searchResults = await searchPosts(query);
        setResults(searchResults);
        setLoading(false);
      } catch (error) {
        console.error('Error searching posts:', error);
        setLoading(false);
      }
    };

    fetchResults();
    setSearchQuery(query);
  }, [query]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.history.pushState(
        {},
        '',
        `${window.location.pathname}?q=${encodeURIComponent(searchQuery)}`
      );
      
      // Force re-render to trigger the useEffect
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-serif font-bold text-gray-900 dark:text-white mb-6">
          {query ? `Search Results for "${query}"` : 'Search'}
        </h1>
        
        <form onSubmit={handleSearch} className="flex items-center mb-8">
          <input
            type="text"
            placeholder="Search for articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-grow px-4 py-3 rounded-l-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
          />
          <button 
            type="submit" 
            className="px-6 py-3 bg-blue-600 text-white rounded-r-md hover:bg-blue-700 transition-colors duration-200 flex items-center"
          >
            <Search size={20} className="mr-2" />
            Search
          </button>
        </form>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
          </div>
        ) : (
          <div>
            {query ? (
              <>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {results.length} {results.length === 1 ? 'result' : 'results'} found
                </p>
                
                {results.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {results.map((post) => (
                      <BlogPostCard key={post.id} post={post} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                    <h2 className="text-xl font-medium text-gray-900 dark:text-white mb-2">No results found</h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      We couldn't find any posts matching "{query}".
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                      <Link 
                        to="/" 
                        className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200"
                      >
                        Back to Home
                      </Link>
                      <button 
                        onClick={() => setSearchQuery('')}
                        className="px-6 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
                      >
                        Clear Search
                      </button>
                    </div>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-12 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                <h2 className="text-xl font-medium text-gray-900 dark:text-white mb-2">
                  Search for something
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Enter a search term above to find blog posts.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResults;