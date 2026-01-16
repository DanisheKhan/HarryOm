import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// Navigation links configuration
const navigationLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/soul-guide', label: 'Soul Guide' },
  { path: '/practices', label: 'Practices' },
  { path: '/insights', label: 'Insights' },
  { path: '/quotes', label: 'Quotes' },
];

// Reusable NavLink component for desktop navigation
const NavLink = ({ to, children, className = '' }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Link
      to={to}
      className={`relative transition-all duration-300 group ${isActive
        ? 'text-sky-600 font-semibold'
        : 'text-gray-700 hover:text-sky-600'
        } ${className}`}
      onClick={handleClick}
    >
      {children}
      <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-sky-500 to-purple-500 transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'
        }`}></span>
    </Link>
  );
};

// Reusable MobileNavLink component
const MobileNavLink = ({ to, onClick, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  const handleClick = () => {
    window.scrollTo(0, 0);
    if (onClick) onClick(); // Call original onClick (closeMenu) if provided
  };

  return (
    <Link
      to={to}
      className={`py-3 px-4 rounded-xl transition-all duration-300 ${isActive
        ? 'bg-gradient-to-r from-sky-50 to-purple-50 text-sky-600 font-semibold shadow-sm'
        : 'text-gray-700 hover:bg-gray-50 hover:text-sky-600'
        }`}
      onClick={handleClick}
    >
      {children}
    </Link>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="py-5 px-4 md:px-8 w-full bg-white/95 backdrop-blur-lg fixed top-0 z-50 shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center space-x-3 group"
          onClick={() => window.scrollTo(0, 0)}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-sky-400 to-purple-400 rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
            <img src="/HarryOmLogo.png" alt="Harry Om Logo" className="relative w-10 h-10 group-hover:scale-110 transition-transform duration-300" />
          </div>
          <span className="text-2xl font-bold font-[Playfair_Display] bg-gradient-to-r from-gray-900 via-sky-800 to-purple-800 bg-clip-text text-transparent">
            Harry Om
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navigationLinks.map(link => (
            <NavLink key={link.path} to={link.path}>{link.label}</NavLink>
          ))}
          <NavLink
            to="/connect"
            className="!bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 !text-white py-2.5 px-6 rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            Connect
          </NavLink>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-800 focus:outline-none hover:text-sky-600 transition-colors p-2 rounded-lg hover:bg-sky-50"
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
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

      {/* Mobile Menu with AnimatePresence for better animation control */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden mt-4 bg-white rounded-2xl shadow-xl py-4 border border-gray-100 overflow-hidden"
          >
            <div className="flex flex-col space-y-2 px-4">
              {navigationLinks.map(link => (
                <MobileNavLink key={link.path} to={link.path} onClick={closeMenu}>
                  {link.label}
                </MobileNavLink>
              ))}
              <Link
                to="/connect"
                className="bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 inline-block text-center shadow-md hover:shadow-lg transform hover:scale-[1.02] mt-2"
                onClick={() => {
                  window.scrollTo(0, 0);
                  closeMenu();
                }}
              >
                Connect
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
