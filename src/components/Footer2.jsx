import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <footer className="bg-gradient-to-b from-white to-gray-50 pt-20 pb-10 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Newsletter Section */}
        <motion.div
          className="mb-20 p-8 md:p-12 bg-blue-50 rounded-2xl relative overflow-hidden border-gradient"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full -mr-32 -mt-32 opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-100 rounded-full -ml-20 -mb-20 opacity-50"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:max-w-md">
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-3">Join Our Soul Community</h3>
              <p className="text-gray-600">
                Receive weekly insights, meditation guidance, and updates on new teachings from Harry Om.
              </p>
            </div>

            <div className="w-full md:w-auto">
              <form className="flex flex-col sm:flex-row gap-3 w-full">
                <input
                  type="email"
                  placeholder="Your email address"
                  aria-label="Email address"
                  className="px-5 py-3 rounded-full bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
                  required
                />
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-full transition-colors shadow-md whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-xs text-gray-500 mt-2 text-center sm:text-left">We respect your privacy. Unsubscribe at any time.</p>
            </div>
          </div>
        </motion.div>

        {/* Main Footer */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 lg:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <img src="/HarryOmLogo.png" alt="Harry Om Logo" className="w-10 h-10" />
              <span className="text-2xl font-serif font-bold text-gradient">Harry Om</span>
            </Link>
            <p className="text-gray-600 mb-6 max-w-sm">
              Guiding the modern generation to find inner peace, purpose, and spiritual connection in the digital age.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full bg-gray-100 hover:bg-blue-100 flex items-center justify-center transition-colors">
                <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube" className="w-10 h-10 rounded-full bg-gray-100 hover:bg-blue-100 flex items-center justify-center transition-colors">
                <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a href="https://spotify.com" target="_blank" rel="noreferrer" aria-label="Spotify" className="w-10 h-10 rounded-full bg-gray-100 hover:bg-blue-100 flex items-center justify-center transition-colors">
                <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 text-lg mb-4">Navigate</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-blue-600 transition-colors">About</Link></li>
              <li><Link to="/soul-guide" className="text-gray-600 hover:text-blue-600 transition-colors">Soul Guide</Link></li>
              <li><Link to="/practices" className="text-gray-600 hover:text-blue-600 transition-colors">Practices</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 text-lg mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><Link to="/wisdom" className="text-gray-600 hover:text-blue-600 transition-colors">Wisdom Drops</Link></li>
              <li><Link to="/insights" className="text-gray-600 hover:text-blue-600 transition-colors">Insights</Link></li>
              <li><Link to="/journal" className="text-gray-600 hover:text-blue-600 transition-colors">Journal Tools</Link></li>
              <li><Link to="/programs" className="text-gray-600 hover:text-blue-600 transition-colors">Programs</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 text-lg mb-4">Connect</h3>
            <ul className="space-y-3">
              <li><Link to="/connect" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</Link></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Community</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Events</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Support</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            © {currentYear} Harry Om. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">Privacy</Link>
            <Link to="/terms" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">Terms</Link>
            <Link to="/sitemap" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
