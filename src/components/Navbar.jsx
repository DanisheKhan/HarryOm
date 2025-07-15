import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="py-6 px-4 md:px-8 w-full bg-white/90 backdrop-blur-sm fixed top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <img src="/music-icon.svg" alt="Harry Om Logo" className="w-8 h-8" />
          <span className="text-2xl font-semibold font-[Playfair_Display]">Harry Om</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-800 hover:text-sky-500 transition-colors">Home</Link>
          <Link to="/about" className="text-gray-800 hover:text-sky-500 transition-colors">About</Link>
          <Link to="/soul-guide" className="text-gray-800 hover:text-sky-500 transition-colors">Soul Guide</Link>
          <Link to="/practices" className="text-gray-800 hover:text-sky-500 transition-colors">Practices</Link>
          <Link to="/wisdom" className="text-gray-800 hover:text-sky-500 transition-colors">Wisdom Drops</Link>
          <Link to="/blog" className="text-gray-800 hover:text-sky-500 transition-colors">Insights</Link>
          <Link to="/contact" className="bg-sky-100 hover:bg-sky-200 text-sky-800 py-2 px-4 rounded-full transition-colors">Connect</Link>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 focus:outline-none"
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden mt-4 bg-white rounded-lg shadow-lg py-4"
        >
          <div className="flex flex-col space-y-3 px-4">
            <Link to="/" className="text-gray-800 hover:text-sky-500 py-2 transition-colors" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/about" className="text-gray-800 hover:text-sky-500 py-2 transition-colors" onClick={() => setIsOpen(false)}>About</Link>
            <Link to="/soul-guide" className="text-gray-800 hover:text-sky-500 py-2 transition-colors" onClick={() => setIsOpen(false)}>Soul Guide</Link>
            <Link to="/practices" className="text-gray-800 hover:text-sky-500 py-2 transition-colors" onClick={() => setIsOpen(false)}>Practices</Link>
            <Link to="/wisdom" className="text-gray-800 hover:text-sky-500 py-2 transition-colors" onClick={() => setIsOpen(false)}>Wisdom Drops</Link>
            <Link to="/blog" className="text-gray-800 hover:text-sky-500 py-2 transition-colors" onClick={() => setIsOpen(false)}>Insights</Link>
            <Link to="/contact" className="bg-sky-100 hover:bg-sky-200 text-sky-800 py-2 px-4 rounded-full transition-colors inline-block w-fit" onClick={() => setIsOpen(false)}>Connect</Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
