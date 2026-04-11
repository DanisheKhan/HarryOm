import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// Navigation links configuration
const navigationLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/soul-guide', label: 'Soul Guide' },
  { path: '/quotes', label: 'Quotes' },
];

// Reusable NavLink component for desktop navigation with enhanced animations
const NavLink = ({ to, children, className = '' }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Link
      to={to}
      className={`relative transition-all duration-300 group px-1 py-2 ${isActive
        ? 'text-sky-600 font-semibold'
        : 'text-gray-700 hover:text-sky-600'
        } ${className}`}
      onClick={handleClick}
    >
      <span className="relative z-10">{children}</span>

      {/* Animated underline */}
      <motion.span
        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-sky-500 via-purple-500 to-pink-500"
        initial={false}
        animate={{
          width: isActive ? '100%' : '0%',
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />

      {/* Hover effect underline */}
      {!isActive && (
        <span className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-sky-400 to-purple-400 w-0 group-hover:w-full transition-all duration-300" />
      )}

      {/* Glow effect on hover */}
      <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-sky-500/0 to-purple-500/0 group-hover:from-sky-500/5 group-hover:to-purple-500/5 transition-all duration-300" />
    </Link>
  );
};

// Reusable MobileNavLink component with enhanced animations
const MobileNavLink = ({ to, onClick, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  const handleClick = () => {
    window.scrollTo(0, 0);
    if (onClick) onClick(); // Call original onClick (closeMenu) if provided
  };

  return (
    <motion.div
      whileHover={{ x: 4 }}
      whileTap={{ scale: 0.98 }}
    >
      <Link
        to={to}
        className={`block py-3.5 px-5 rounded-xl transition-all duration-300 ${isActive
          ? 'bg-gradient-to-r from-sky-500 to-purple-500 text-white font-semibold shadow-lg shadow-sky-500/30'
          : 'text-gray-700 hover:bg-gradient-to-r hover:from-sky-50 hover:to-purple-50 hover:text-sky-600'
          }`}
        onClick={handleClick}
      >
        <span className="flex items-center justify-between">
          {children}
          {isActive && (
            <motion.svg
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </motion.svg>
          )}
        </span>
      </Link>
    </motion.div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`py-4 px-4 md:px-8 w-full fixed top-0 z-50 transition-all duration-300 ${scrolled
        ? 'bg-white/80 backdrop-blur-xl shadow-lg border-b border-gray-200/50'
        : 'bg-white/95 backdrop-blur-lg shadow-sm border-b border-gray-100'
        }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo with enhanced animations */}
        <Link
          to="/"
          className="flex items-center group"
          onClick={() => window.scrollTo(0, 0)}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src="/HarryOmLogo.png"
              alt="Harry Om Logo"
              className="w-11 h-11 transition-transform duration-300"
            />
          </motion.div>
        </Link>

        {/* Desktop Navigation with stagger animation */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navigationLinks.map((link, index) => (
            <motion.div
              key={link.path}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <NavLink to={link.path}>{link.label}</NavLink>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: navigationLinks.length * 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/connect"
              onClick={() => window.scrollTo(0, 0)}
              className="bg-gradient-to-r from-sky-500 via-sky-600 to-purple-600 hover:from-sky-600 hover:via-purple-600 hover:to-pink-600 text-white py-2.5 px-7 rounded-full shadow-lg shadow-sky-500/30 hover:shadow-xl hover:shadow-purple-500/40 transition-all duration-300 flex items-center gap-2 font-medium"
            >
              Connect
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </motion.div>
        </div>

        {/* Mobile Navigation Toggle with animation */}
        <div className="md:hidden">
          <motion.button
            onClick={toggleMenu}
            className="text-gray-800 focus:outline-none hover:text-sky-600 transition-colors p-2.5 rounded-xl hover:bg-gradient-to-r hover:from-sky-50 hover:to-purple-50"
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.svg
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </motion.svg>
              ) : (
                <motion.svg
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </motion.svg>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu with enhanced animations */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm -z-10"
              onClick={closeMenu}
            />

            {/* Menu */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="md:hidden mt-4 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl py-5 border border-gray-200/50 overflow-hidden"
            >
              <div className="flex flex-col space-y-2 px-4">
                {navigationLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <MobileNavLink to={link.path} onClick={closeMenu}>
                      {link.label}
                    </MobileNavLink>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navigationLinks.length * 0.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    to="/connect"
                    className="block bg-gradient-to-r from-sky-500 via-sky-600 to-purple-600 hover:from-sky-600 hover:via-purple-600 hover:to-pink-600 text-white font-semibold py-3.5 px-5 rounded-xl transition-all duration-300 text-center shadow-lg shadow-sky-500/30 hover:shadow-xl hover:shadow-purple-500/40 mt-3"
                    onClick={() => {
                      window.scrollTo(0, 0);
                      closeMenu();
                    }}
                  >
                    <span className="flex items-center justify-center gap-2">
                      Connect
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
