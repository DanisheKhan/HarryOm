import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const WisdomDropsPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  // Categories for filtering
  const categories = [
    { id: 'all', name: 'All' },
    { id: 'audio', name: 'Audio' },
    { id: 'video', name: 'Video' },
    { id: 'meditation', name: 'Meditation' },
    { id: 'music', name: 'Music' }
  ];

  // Wisdom content
  const wisdomItems = [
    {
      id: 1,
      title: 'Mind as a Supercomputer',
      description: 'Understanding how your thoughts create your reality and how to optimize your mental processes.',
      image: '/HarmeetImages/img12.JPG',
      type: 'video',
      duration: '18:42',
      link: 'https://youtube.com'
    },
    {
      id: 2,
      title: 'Morning Meditation for Clarity',
      description: 'Start your day with this 10-minute guided meditation to set intentions and create mental space.',
      image: '/HarmeetImages/img5.JPG',
      type: 'meditation',
      duration: '10:15',
      link: 'https://spotify.com'
    },
    {
      id: 3,
      title: 'Digital Detox Protocol',
      description: 'Learn practical strategies to maintain a healthy relationship with technology in this audio session.',
      image: '/HarmeetImages/img8.JPG',
      type: 'audio',
      duration: '24:30',
      link: 'https://spotify.com'
    },
    {
      id: 4,
      title: 'Sacred Love: Beyond Romance',
      description: 'Understanding the deeper dimensions of love that transcend romantic relationships.',
      image: '/HarmeetImages/img10.JPG',
      type: 'video',
      duration: '15:22',
      link: 'https://youtube.com'
    },
    {
      id: 5,
      title: 'Healing Frequency: 528Hz',
      description: 'Experience the healing vibrations of the 528Hz frequency, known as the "love frequency".',
      image: '/HarmeetImages/img13.JPG',
      type: 'music',
      duration: '30:00',
      link: 'https://spotify.com'
    },
    {
      id: 6,
      title: 'Breath of Fire Technique',
      description: 'Learn this powerful Kundalini breathing technique to energize your system and clear your mind.',
      image: '/HarmeetImages/img14.JPG',
      type: 'video',
      duration: '12:48',
      link: 'https://youtube.com'
    },
    {
      id: 7,
      title: 'Evening Wind-Down Meditation',
      description: 'Release the day and prepare your mind and body for restful sleep with this gentle practice.',
      image: '/HarmeetImages/img17.JPG',
      type: 'meditation',
      duration: '15:10',
      link: 'https://spotify.com'
    },
    {
      id: 8,
      title: 'Ocean Soundscape for Focus',
      description: 'Ambient ocean sounds designed to enhance concentration and creative work.',
      image: '    image: "/HarmeetImages/img7.jpg",',
      type: 'music',
      duration: '45:00',
      link: 'https://spotify.com'
    },
    {
      id: 9,
      title: 'Finding Purpose in Chaos',
      description: 'Harry Om discusses how to discover your deeper calling amidst the noise of modern life.',
      image: "/HarmeetImages/img3.jpg",
      type: 'audio',
      duration: '32:15',
      link: 'https://spotify.com'
    }
  ];

  // Filter items based on active category
  const filteredItems = activeCategory === 'all'
    ? wisdomItems
    : wisdomItems.filter(item => item.type === activeCategory);

  // Get icon based on content type
  const getTypeIcon = (type) => {
    switch (type) {
      case 'video':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 'audio':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.536a5 5 0 010-7.072m12.728 0a9 9 0 010 12.728M3 9l9-6 9 6m-9 6v-6" />
          </svg>
        );
      case 'meditation':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 'music':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
          </svg>
        );
      default:
        return null;
    }
  };

  // Get background color based on content type
  const getTypeBgColor = (type) => {
    switch (type) {
      case 'video':
        return 'bg-red-100 text-red-800';
      case 'audio':
        return 'bg-blue-100 text-blue-800';
      case 'meditation':
        return 'bg-purple-100 text-purple-800';
      case 'music':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/HarmeetImages/img19.JPG"
            alt="Wisdom Drops"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl">
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white mb-6 font-serif"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            Wisdom Drops
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-white mb-8 max-w-3xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ delay: 0.2 }}
          >
            Audio, video, and guided meditations to nurture your soul journey
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-3">
                Explore Our Collection
              </h2>
              <p className="text-gray-600 max-w-xl">
                Dive into our curated content designed to elevate your consciousness and support your spiritual practice.
              </p>
            </div>

            {/* Filter Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Wisdom Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                className="bg-white rounded-xl overflow-hidden shadow-md hover-lift"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                  {/* Duration Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/60 text-white text-xs font-medium">
                    {item.duration}
                  </div>

                  {/* Play Button */}
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="absolute inset-0 flex items-center justify-center group"
                  >
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transition-transform group-hover:scale-110">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </a>
                </div>

                <div className="p-6">
                  {/* Type Badge */}
                  <div className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-medium mb-3 ${getTypeBgColor(item.type)}`}>
                    <span>{getTypeIcon(item.type)}</span>
                    <span className="capitalize">{item.type}</span>
                  </div>

                  <h3 className="text-xl font-bold mb-2 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>

                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors font-medium"
                  >
                    <span>Listen Now</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Pagination or Load More (Optional) */}
          <div className="mt-12 text-center">
            <button className="px-6 py-3 border border-blue-600 text-blue-600 hover:bg-blue-50 rounded-full font-medium transition-colors">
              Load More
            </button>
          </div>
        </div>
      </section>

      {/* Featured Playlist */}
      <section className="py-16 px-4 md:px-8 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
                Featured Collection: Inner Harmony
              </h2>
              <p className="text-gray-700 mb-6">
                A specially curated playlist to help you restore balance and peace in your daily life.
                This collection combines guided meditations, wisdom talks, and healing music.
              </p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Morning Clarity Meditation</p>
                    <p className="text-sm text-gray-500">10:15</p>
                  </div>
                </li>

                <li className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Healing Frequency: 528Hz</p>
                    <p className="text-sm text-gray-500">30:00</p>
                  </div>
                </li>

                <li className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Breath of Fire Technique</p>
                    <p className="text-sm text-gray-500">12:48</p>
                  </div>
                </li>

                <li className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.536a5 5 0 010-7.072m12.728 0a9 9 0 010 12.728" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Finding Purpose in Chaos</p>
                    <p className="text-sm text-gray-500">32:15</p>
                  </div>
                </li>
              </ul>

              <a
                href="https://spotify.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                </svg>
                <span>Listen on Spotify</span>
              </a>
            </div>

            <div className="w-full md:w-1/2 order-1 md:order-2">
              <img
                src="/HarmeetImages/img19.JPG"
                alt="Featured Collection"
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Subscription CTA */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
            Get Exclusive Wisdom Drops
          </h2>

          <p className="text-lg text-gray-700 mb-8">
            Subscribe to receive early access to new meditations, audio sessions, and special content
            delivered directly to your inbox.
          </p>

          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
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

          <p className="text-sm text-gray-500 mt-3">
            Join 10,000+ subscribers. We respect your privacy.
          </p>
        </div>
      </section>
    </div>
  );
};

export default WisdomDropsPage;
