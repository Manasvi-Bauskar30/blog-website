import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, Search } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
    }
  };

  return (
    <div className="py-4">
      <div className="flex items-center justify-between">
        <Link to="/" className="text-2xl font-serif font-bold text-blue-900 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200">
          Thoughtful<span className="text-blue-600 dark:text-blue-300">Blog</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">Home</Link>
          <Link to="/category/technology" className="font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">Technology</Link>
          <Link to="/category/travel" className="font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">Travel</Link>
          <Link to="/category/food" className="font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">Food</Link>
          <Link to="/category/lifestyle" className="font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">Lifestyle</Link>
        </nav>

        {/* Search Form */}
        <form onSubmit={handleSearch} className="hidden md:flex items-center">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-4 py-2 rounded-l-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
          />
          <button 
            type="submit" 
            className="p-2 bg-blue-600 dark:bg-blue-500 text-white rounded-r-md hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-200"
          >
            <Search size={20} />
          </button>
        </form>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 pb-4">
          <nav className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="font-medium py-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/category/technology" 
              className="font-medium py-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Technology
            </Link>
            <Link 
              to="/category/travel" 
              className="font-medium py-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Travel
            </Link>
            <Link 
              to="/category/food" 
              className="font-medium py-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Food
            </Link>
            <Link 
              to="/category/lifestyle" 
              className="font-medium py-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Lifestyle
            </Link>

            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="flex items-center mt-2">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-grow px-4 py-2 rounded-l-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
              />
              <button 
                type="submit" 
                className="p-2 bg-blue-600 dark:bg-blue-500 text-white rounded-r-md hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-200"
              >
                <Search size={20} />
              </button>
            </form>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Header;