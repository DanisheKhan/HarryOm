import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaXTwitter, FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube, FaSpotify } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-gray-50 to-gray-100 pt-16 pb-8 px-4 md:px-8 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-sky-100/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="inline-flex items-center space-x-3 group mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-sky-400 to-purple-400 rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                <img src="/HarryOmLogo.png" alt="Harryy Om Logo" loading="lazy" decoding="async" className="relative w-10 h-10 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <span className="text-2xl font-bold font-[Playfair_Display] bg-gradient-to-r from-gray-900 via-sky-800 to-purple-800 bg-clip-text text-transparent">Harryy Om</span>
            </Link>
            <p className="text-gray-600 leading-relaxed mb-6">
              Spiritual guidance for the modern soul. Finding peace in a digital world.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="https://twitter.com/harryom" target="_blank" rel="noreferrer" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-white hover:bg-sky-500 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110">
                <FaXTwitter size={18} />
              </a>
              <a href="https://www.facebook.com/harryom" target="_blank" rel="noreferrer" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-white hover:bg-blue-600 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110">
                <FaFacebookF size={18} />
              </a>
              <a href="https://www.linkedin.com/in/harryom" target="_blank" rel="noreferrer" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-white hover:bg-blue-700 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110">
                <FaLinkedinIn size={18} />
              </a>
              <a href="https://www.instagram.com/harryomofficial?igsh=bDk1dmN4ZG41cHRs" target="_blank" rel="noreferrer" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-white hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-500 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110">
                <FaInstagram size={18} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-white hover:bg-red-600 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110">
                <FaYoutube size={18} />
              </a>
              <a href="https://spotify.com" target="_blank" rel="noreferrer" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-white hover:bg-green-500 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110">
                <FaSpotify size={18} />
              </a>
            </div>
          </div>

          <div className="col-span-1">
            <h3 className="font-bold text-lg mb-5 text-gray-900 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-sky-500 to-purple-500 rounded-full"></span>
              Explore
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-600 hover:text-sky-600 transition-colors duration-300 inline-flex items-center group">
                  <span className="w-0 h-0.5 bg-sky-500 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-sky-600 transition-colors duration-300 inline-flex items-center group">
                  <span className="w-0 h-0.5 bg-sky-500 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  About Harryy Om
                </Link>
              </li>
              <li>
                <Link to="/soul-guide" className="text-gray-600 hover:text-sky-600 transition-colors duration-300 inline-flex items-center group">
                  <span className="w-0 h-0.5 bg-sky-500 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  Soul Guide Book
                </Link>
              </li>
              <li>
                <Link to="/quotes" className="text-gray-600 hover:text-sky-600 transition-colors duration-300 inline-flex items-center group">
                  <span className="w-0 h-0.5 bg-sky-500 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  Quotes & Wisdom
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="font-bold text-lg mb-5 text-gray-900 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-sky-500 to-purple-500 rounded-full"></span>
              Resources
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/quotes" className="text-gray-600 hover:text-sky-600 transition-colors duration-300 inline-flex items-center group">
                  <span className="w-0 h-0.5 bg-sky-500 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  Quotes & Insights
                </Link>
              </li>
              <li>
                <Link to="/journal" className="text-gray-600 hover:text-sky-600 transition-colors duration-300 inline-flex items-center group">
                  <span className="w-0 h-0.5 bg-sky-500 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  Journal & Tools
                </Link>
              </li>
              <li>
                <Link to="/programs" className="text-gray-600 hover:text-sky-600 transition-colors duration-300 inline-flex items-center group">
                  <span className="w-0 h-0.5 bg-sky-500 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  Programs & Coaching
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="font-bold text-lg mb-5 text-gray-900 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-sky-500 to-purple-500 rounded-full"></span>
              Support
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-sky-600 transition-colors duration-300 inline-flex items-center group">
                  <span className="w-0 h-0.5 bg-sky-500 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-600 hover:text-sky-600 transition-colors duration-300 inline-flex items-center group">
                  <span className="w-0 h-0.5 bg-sky-500 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/support" className="text-gray-600 hover:text-sky-600 transition-colors duration-300 inline-flex items-center group">
                  <span className="w-0 h-0.5 bg-sky-500 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/community" className="text-gray-600 hover:text-sky-600 transition-colors duration-300 inline-flex items-center group">
                  <span className="w-0 h-0.5 bg-sky-500 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  Community
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-300">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm flex items-center gap-2">
              <span>© {currentYear} Harryy Om. All rights reserved.</span>
            </p>
            <div className="flex items-center gap-6">
              <Link to="/privacy" className="text-gray-600 hover:text-sky-600 text-sm transition-colors duration-300 relative group">
                Privacy Policy
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <span className="text-gray-300">|</span>
              <Link to="/terms" className="text-gray-600 hover:text-sky-600 text-sm transition-colors duration-300 relative group">
                Terms of Use
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
