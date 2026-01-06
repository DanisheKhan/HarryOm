import { Link } from 'react-router-dom';
import { FaXTwitter, FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube, FaSpotify } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/HarryOmLogo.png" alt="Harry Om Logo" className="w-8 h-8" />
            <span className="text-2xl font-semibold font-[Playfair_Display]">Harry Om</span>
          </Link>
          <p className="mt-4 text-gray-600">
            Spiritual guidance for the modern soul. Finding peace in a digital world.
          </p>
          <div className="flex space-x-4 mt-6">
            <a href="https://twitter.com/harryom" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-sky-500 transition-colors">
              <FaXTwitter size={20} />
            </a>
            <a href="https://www.facebook.com/harryom" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
              <FaFacebookF size={20} />
            </a>
            <a href="https://www.linkedin.com/in/harryom" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-blue-700 transition-colors">
              <FaLinkedinIn size={20} />
            </a>
            <a href="https://www.instagram.com/harryomofficial?igsh=bDk1dmN4ZG41cHRs" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-pink-500 transition-colors">
              <FaInstagram size={20} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-red-600 transition-colors">
              <FaYoutube size={20} />
            </a>
            <a href="https://spotify.com" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-green-500 transition-colors">
              <FaSpotify size={20} />
            </a>
          </div>
        </div>

        <div className="col-span-1">
          <h3 className="font-semibold text-lg mb-4">Explore</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="text-gray-600 hover:text-sky-500 transition-colors">Home</Link></li>
            <li><Link to="/about" className="text-gray-600 hover:text-sky-500 transition-colors">About Harry Om</Link></li>
            <li><Link to="/soul-guide" className="text-gray-600 hover:text-sky-500 transition-colors">Soul Guide Book</Link></li>
            <li><Link to="/practices" className="text-gray-600 hover:text-sky-500 transition-colors">Practices & Rituals</Link></li>
          </ul>
        </div>

        <div className="col-span-1">
          <h3 className="font-semibold text-lg mb-4">Resources</h3>
          <ul className="space-y-2">
            <li><Link to="/wisdom" className="text-gray-600 hover:text-sky-500 transition-colors">Wisdom Drops</Link></li>
            <li><Link to="/blog" className="text-gray-600 hover:text-sky-500 transition-colors">Blog & Insights</Link></li>
            <li><Link to="/journal" className="text-gray-600 hover:text-sky-500 transition-colors">Journal & Tools</Link></li>
            <li><Link to="/programs" className="text-gray-600 hover:text-sky-500 transition-colors">Programs & Coaching</Link></li>
          </ul>
        </div>

        <div className="col-span-1">
          <h3 className="font-semibold text-lg mb-4">Support</h3>
          <ul className="space-y-2">
            <li><Link to="/contact" className="text-gray-600 hover:text-sky-500 transition-colors">Contact Us</Link></li>
            <li><Link to="/faq" className="text-gray-600 hover:text-sky-500 transition-colors">FAQ</Link></li>
            <li><Link to="/support" className="text-gray-600 hover:text-sky-500 transition-colors">Help Center</Link></li>
            <li><Link to="/community" className="text-gray-600 hover:text-sky-500 transition-colors">Community</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-200">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">
            © {currentYear} Harry Om. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-600 hover:text-sky-500 text-sm">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-600 hover:text-sky-500 text-sm">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
