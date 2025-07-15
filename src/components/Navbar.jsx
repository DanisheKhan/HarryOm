import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <motion.nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 py-4 px-4 md:px-8 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-3">
          <img src="/HarryOmLogo.png" alt="Harry Om Logo" className="w-10 h-10" />
          <span className={`text-2xl font-serif font-bold ${scrolled ? 'text-gradient' : 'text-white'}`}>Harry Om</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-1">
          <Link
            to="/"
            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors relative ${location.pathname === '/'
              ? (scrolled ? 'text-blue-600' : 'text-white font-bold')
              : (scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-white/80')
              }`}
          >
            Home
            {location.pathname === '/' && (
              <motion.div
                layoutId="nav-indicator"
                className={`absolute -bottom-1 left-3 right-3 h-0.5 ${scrolled ? 'bg-blue-600' : 'bg-white'}`}
                transition={{ type: 'spring', bounce: 0.2 }}
              />
            )}
          </Link>

          <Link
            to="/about"
            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors relative ${location.pathname === '/about'
              ? (scrolled ? 'text-blue-600' : 'text-white font-bold')
              : (scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-white/80')
              }`}
          >
            About
            {location.pathname === '/about' && (
              <motion.div
                layoutId="nav-indicator"
                className={`absolute -bottom-1 left-3 right-3 h-0.5 ${scrolled ? 'bg-blue-600' : 'bg-white'}`}
                transition={{ type: 'spring', bounce: 0.2 }}
              />
            )}
          </Link>

          <Link
            to="/soul-guide"
            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors relative ${location.pathname === '/soul-guide'
              ? (scrolled ? 'text-blue-600' : 'text-white font-bold')
              : (scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-white/80')
              }`}
          >
            Soul Guide
            {location.pathname === '/soul-guide' && (
              <motion.div
                layoutId="nav-indicator"
                className={`absolute -bottom-1 left-3 right-3 h-0.5 ${scrolled ? 'bg-blue-600' : 'bg-white'}`}
                transition={{ type: 'spring', bounce: 0.2 }}
              />
            )}
          </Link>

          <Link
            to="/practices"
            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors relative ${location.pathname === '/practices'
              ? (scrolled ? 'text-blue-600' : 'text-white font-bold')
              : (scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-white/80')
              }`}
          >
            Practices
            {location.pathname === '/practices' && (
              <motion.div
                layoutId="nav-indicator"
                className={`absolute -bottom-1 left-3 right-3 h-0.5 ${scrolled ? 'bg-blue-600' : 'bg-white'}`}
                transition={{ type: 'spring', bounce: 0.2 }}
              />
            )}
          </Link>

          <Link
            to="/wisdom"
            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors relative ${location.pathname === '/wisdom'
              ? (scrolled ? 'text-blue-600' : 'text-white font-bold')
              : (scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-white/80')
              }`}
          >
            Wisdom Drops
            {location.pathname === '/wisdom' && (
              <motion.div
                layoutId="nav-indicator"
                className={`absolute -bottom-1 left-3 right-3 h-0.5 ${scrolled ? 'bg-blue-600' : 'bg-white'}`}
                transition={{ type: 'spring', bounce: 0.2 }}
              />
            )}
          </Link>

          <Link
            to="/insights"
            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors relative ${location.pathname === '/insights'
              ? (scrolled ? 'text-blue-600' : 'text-white font-bold')
              : (scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-white/80')
              }`}
          >
            Insights
            {location.pathname === '/insights' && (
              <motion.div
                layoutId="nav-indicator"
                className={`absolute -bottom-1 left-3 right-3 h-0.5 ${scrolled ? 'bg-blue-600' : 'bg-white'}`}
                transition={{ type: 'spring', bounce: 0.2 }}
              />
            )}
          </Link>

          <Link
            to="/connect"
            className={`ml-3 px-5 py-2 rounded-full text-sm font-medium transition-colors ${scrolled
              ? 'bg-blue-600 hover:bg-blue-700 text-white'
              : 'bg-white/20 backdrop-blur-md hover:bg-white/30 text-white border border-white/30'
              }`}
          >
            Connect
          </Link>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`${scrolled || isOpen ? 'text-gray-800' : 'text-white'} focus:outline-none`}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden mt-4 bg-white rounded-lg shadow-lg py-4 absolute left-4 right-4"
          >
            <div className="flex flex-col space-y-3 px-4">
              <Link to="/" className="text-gray-800 hover:text-blue-600 py-2 transition-colors">Home</Link>
              <Link to="/about" className="text-gray-800 hover:text-blue-600 py-2 transition-colors">About</Link>
              <Link to="/soul-guide" className="text-gray-800 hover:text-blue-600 py-2 transition-colors">Soul Guide</Link>
              <Link to="/practices" className="text-gray-800 hover:text-blue-600 py-2 transition-colors">Practices</Link>
              <Link to="/wisdom" className="text-gray-800 hover:text-blue-600 py-2 transition-colors">Wisdom Drops</Link>
              <Link to="/insights" className="text-gray-800 hover:text-blue-600 py-2 transition-colors">Insights</Link>
              <Link to="/connect" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full transition-colors inline-block w-fit">Connect</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};


export default Navbar;
