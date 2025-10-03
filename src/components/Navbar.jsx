import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// Navigation links configuration
const navigationLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/soul-guide', label: 'Soul Guide' },
  { path: '/practices', label: 'Practices' },
  { path: '/wisdom', label: 'Wisdom Drops' },
  { path: '/insights', label: 'Insights' },
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
      className={`transition-colors ${isActive ? 'text-sky-600 font-medium border-b-2 border-sky-500' : 'text-gray-800 hover:text-sky-500'} ${className}`}
      onClick={handleClick}
    >
      {children}
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
      className={`py-2 transition-colors ${isActive ? 'text-sky-600 font-medium' : 'text-gray-800 hover:text-sky-500'}`}
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
    <nav className="py-6 px-4 md:px-8 w-full bg-white/90 backdrop-blur-sm fixed top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center space-x-2"
          onClick={() => window.scrollTo(0, 0)}
        >
          <img src="/HarryOmLogo.png" alt="Harry Om Logo" className="w-8 h-8" />
          <span className="text-2xl font-semibold font-[Playfair_Display]">Harry Om</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navigationLinks.map(link => (
            <NavLink key={link.path} to={link.path}>{link.label}</NavLink>
          ))}
          <NavLink to="/connect" className="bg-sky-100 hover:bg-sky-200 text-sky-800 py-2 px-4 rounded-full">
            Connect
          </NavLink>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-800 focus:outline-none"
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
            transition={{ duration: 0.3 }}
            className="md:hidden mt-4 bg-white rounded-lg shadow-lg py-4"
          >
            <div className="flex flex-col space-y-3 px-4">
              {navigationLinks.map(link => (
                <MobileNavLink key={link.path} to={link.path} onClick={closeMenu}>
                  {link.label}
                </MobileNavLink>
              ))}
              <Link
                to="/connect"
                className="bg-sky-100 hover:bg-sky-200 text-sky-800 py-2 px-4 rounded-full transition-colors inline-block w-fit"
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
