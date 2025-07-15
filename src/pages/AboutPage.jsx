import { motion } from 'framer-motion';

const AboutPage = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/HarmeetImages/img1.jpg"
            alt="Harmeet Singh Chandhoke"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl">
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white mb-6 font-[Playfair_Display]"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            About Harry Om
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-white mb-8 max-w-3xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ delay: 0.2 }}
          >
            The story of Harmeet Singh Chandhoke and his vision for spiritual guidance in the digital age
          </motion.p>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-start gap-12">
            <div className="w-full md:w-1/3">
              <img
                src="/HarmeetImages/img3.jpg"
                alt="Harmeet Singh Chandhoke Portrait"
                className="w-full h-auto rounded-lg shadow-lg mb-8"
              />

              <div className="bg-sky-50 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Quick Facts</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-sky-600 mr-2">•</span>
                    <span>Spiritual Guide & Author</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sky-600 mr-2">•</span>
                    <span>Music Producer (Meet Bros)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sky-600 mr-2">•</span>
                    <span>Gen Z Mental Wellbeing Advocate</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sky-600 mr-2">•</span>
                    <span>Meditation & Breathwork Practitioner</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sky-600 mr-2">•</span>
                    <span>Digital Wellness Expert</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full md:w-2/3">
              <h2 className="text-3xl md:text-4xl font-[Playfair_Display] font-bold mb-8 text-gray-900">
                The Journey of Harmeet Singh Chandhoke
              </h2>

              <div className="space-y-6 text-lg text-gray-700">
                <p>
                  Harmeet Singh Chandhoke, known professionally as Harry Om, is a renowned spiritual guide
                  whose journey began in the bustling music industry of Bollywood as part of the famous
                  duo "Meet Bros". After years of success in the entertainment world, Harmeet felt a calling
                  toward deeper spiritual work.
                </p>

                <p>
                  His transformation from music producer to spiritual mentor came after a profound period
                  of self-reflection and inner work. Recognizing the growing mental health challenges
                  facing Generation Z in our hyper-connected digital world, Harmeet dedicated himself to
                  creating a bridge between ancient spiritual wisdom and modern psychological understanding.
                </p>

                <p>
                  Through his book "Living Right in the Digital Age," Harry Om offers practical guidance
                  for young people navigating the complexities of modern life. His teachings emphasize the
                  importance of digital detox, mindful living, authentic connection, and developing a
                  personal spiritual practice that fits within contemporary lifestyles.
                </p>

                <p>
                  Harry Om combines his understanding of music, vibration, and energy with spiritual
                  principles to create a unique approach to wellbeing. His work has touched thousands of
                  young lives, offering hope and practical tools for finding peace and purpose in a
                  chaotic world.
                </p>

                <blockquote className="border-l-4 border-sky-400 pl-6 italic my-8">
                  "My vision is to help the younger generation rediscover their inner wisdom and peace
                  without disconnecting from the modern world. We can embrace technology while maintaining
                  our spiritual core."
                </blockquote>

                <p>
                  Today, Harry Om divides his time between writing, speaking engagements, one-on-one
                  coaching, and creating spiritual content that resonates with younger audiences. His
                  approach is non-dogmatic, inclusive, and focused on practical spirituality for everyday life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 px-4 md:px-8 bg-lavender-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-[Playfair_Display] font-bold mb-4 text-gray-900">
              Vision & Mission
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              The guiding principles behind Harry Om's work
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Our Vision</h3>
              <p className="text-gray-700 mb-4">
                To create a world where young people can thrive spiritually while navigating the
                complexities of the digital age, finding balance between technological advancement
                and inner peace.
              </p>
              <p className="text-gray-700">
                We envision a generation that uses technology mindfully, cultivates meaningful human
                connections, and develops a strong inner foundation based on timeless spiritual principles.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Our Mission</h3>
              <p className="text-gray-700 mb-4">
                To provide practical spiritual guidance, tools, and resources specifically designed for
                Generation Z and young millennials who are seeking meaning, purpose, and emotional wellbeing
                in the digital era.
              </p>
              <p className="text-gray-700">
                We accomplish this through accessible content, community building, and teaching practices
                that integrate seamlessly into modern lifestyles while honoring ancient wisdom.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-[Playfair_Display] font-bold mb-4 text-gray-900">
              Core Values
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              The principles that guide our approach to spiritual guidance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Authenticity</h3>
              <p className="text-gray-700">
                We believe in being true to oneself and expressing genuine emotions, thoughts, and beliefs.
              </p>
            </div>

            <div className="p-6">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Balance</h3>
              <p className="text-gray-700">
                Finding harmony between traditional wisdom and modern life, technology and nature, work and rest.
              </p>
            </div>

            <div className="p-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Mindfulness</h3>
              <p className="text-gray-700">
                Cultivating present-moment awareness and intentionality in our actions and choices.
              </p>
            </div>

            <div className="p-6">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Compassion</h3>
              <p className="text-gray-700">
                Approaching ourselves and others with kindness, understanding, and empathy.
              </p>
            </div>

            <div className="p-6">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Growth</h3>
              <p className="text-gray-700">
                Embracing continuous learning, evolution, and transformation throughout life's journey.
              </p>
            </div>

            <div className="p-6">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Inclusivity</h3>
              <p className="text-gray-700">
                Welcoming people of all backgrounds, beliefs, and experiences on their spiritual journey.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
