import { Link } from 'react-router-dom';

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
          <h3 className="font-semibold text-lg mb-4">Connect</h3>
          <ul className="space-y-2">
            <li><Link to="/contact" className="text-gray-600 hover:text-sky-500 transition-colors">Contact</Link></li>
            <li><a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-sky-500 transition-colors">Instagram</a></li>
            <li><a href="https://youtube.com" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-sky-500 transition-colors">YouTube</a></li>
            <li><a href="https://spotify.com" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-sky-500 transition-colors">Spotify</a></li>
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
