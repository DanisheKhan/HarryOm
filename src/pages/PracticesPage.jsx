import { useState } from 'react';
import { motion } from 'framer-motion';

const PracticesPage = () => {
  const [expandedPractice, setExpandedPractice] = useState(null);

  const practices = [
    {
      id: 1,
      title: "Digital Fasting",
      icon: "phone",
      description: "Creating intentional breaks from technology to restore mental clarity and inner peace.",
      image: "/HarmeetImages/img8.JPG",
      content: `
        <p class="mb-4">Digital fasting is not about rejecting technology, but creating a mindful relationship with it. Regular breaks from screens help reset your nervous system and reconnect with the physical world.</p>
        
        <h4 class="text-xl font-bold mb-3">How to Practice:</h4>
        <ul class="list-disc pl-6 mb-6 space-y-2">
          <li>Start with a 2-hour device-free period each day</li>
          <li>Create a weekly "Tech Shabbat" (24-hour digital break)</li>
          <li>Establish device-free zones in your home (bedroom, dining area)</li>
          <li>Use a physical alarm clock instead of your phone</li>
          <li>Try a weekend mini-retreat once per month</li>
        </ul>
        
        <h4 class="text-xl font-bold mb-3">Benefits:</h4>
        <ul class="list-disc pl-6 mb-6 space-y-2">
          <li>Reduced anxiety and mental chatter</li>
          <li>Improved sleep quality</li>
          <li>Enhanced presence and focus</li>
          <li>Greater awareness of surroundings</li>
          <li>More authentic connections</li>
        </ul>
        
        <blockquote class="italic border-l-4 border-sky-400 pl-4 py-2 my-6">
          "The space between stimulus and response is where our freedom and power lie. In the digital age, creating intentional pauses is revolutionary." — Harry Om
        </blockquote>
      `
    },
    {
      id: 2,
      title: "Sacred Mornings",
      icon: "sun",
      description: "Transforming the first hour of your day into a ritual that sets a positive tone for everything that follows.",
      image: "/HarmeetImages/img11.JPG",
      content: `
        <p class="mb-4">How you begin your day shapes your mental and emotional state. The Sacred Morning ritual helps you start each day with intention rather than reaction, creating a foundation of calm awareness.</p>
        
        <h4 class="text-xl font-bold mb-3">How to Practice:</h4>
        <ul class="list-disc pl-6 mb-6 space-y-2">
          <li>Wake up without checking your phone (use a physical alarm)</li>
          <li>Begin with 5-10 minutes of meditation or conscious breathing</li>
          <li>Express gratitude for 3 specific things</li>
          <li>Hydrate with warm water and lemon</li>
          <li>Move your body gently (stretching, yoga, or walking)</li>
          <li>Set an intention for the day</li>
          <li>Only check devices after completing your ritual</li>
        </ul>
        
        <h4 class="text-xl font-bold mb-3">Benefits:</h4>
        <ul class="list-disc pl-6 mb-6 space-y-2">
          <li>Reduced morning anxiety</li>
          <li>Increased focus and productivity</li>
          <li>Better emotional regulation throughout the day</li>
          <li>Stronger connection to personal values</li>
          <li>Enhanced sense of control over your time</li>
        </ul>
        
        <blockquote class="italic border-l-4 border-sky-400 pl-4 py-2 my-6">
          "Your morning routine creates ripples that affect your entire day. Make those first waves intentional." — Harry Om
        </blockquote>
      `
    },
    {
      id: 3,
      title: "Breathwork",
      icon: "wind",
      description: "Using your breath as a tool for emotional regulation, energy management, and spiritual connection.",
      image: "/HarmeetImages/img14.JPG",
      content: `
        <p class="mb-4">Your breath is the bridge between your conscious and unconscious mind. Through intentional breathing practices, you can shift your nervous system state, release stored emotions, and access deeper levels of awareness.</p>
        
        <h4 class="text-xl font-bold mb-3">Core Practices:</h4>
        <ul class="list-disc pl-6 mb-6 space-y-2">
          <li><strong>4-7-8 Breathing</strong>: Inhale for 4 counts, hold for 7, exhale for 8 (calming)</li>
          <li><strong>Box Breathing</strong>: Equal counts inhale, hold, exhale, hold (balancing)</li>
          <li><strong>Alternate Nostril Breathing</strong>: Balancing left and right brain hemispheres</li>
          <li><strong>Lion's Breath</strong>: Powerful exhale with tongue extended (releasing tension)</li>
          <li><strong>Breath of Fire</strong>: Rapid belly pumping breaths (energizing)</li>
        </ul>
        
        <h4 class="text-xl font-bold mb-3">When to Practice:</h4>
        <ul class="list-disc pl-6 mb-6 space-y-2">
          <li>Upon waking (to set energetic tone)</li>
          <li>Before checking social media or news</li>
          <li>During moments of stress or anxiety</li>
          <li>Before important conversations or meetings</li>
          <li>As preparation for meditation</li>
          <li>Before sleep to calm the nervous system</li>
        </ul>
        
        <blockquote class="italic border-l-4 border-sky-400 pl-4 py-2 my-6">
          "Your breath is always with you—it's a portable tool for transformation that requires no app, subscription, or download." — Harry Om
        </blockquote>
      `
    },
    {
      id: 4,
      title: "Visualization",
      icon: "eye",
      description: "Using the power of your imagination to manifest positive outcomes and reduce anxiety about the future.",
      image: "/HarmeetImages/img17.JPG",
      content: `
        <p class="mb-4">Visualization harnesses your mind's creative power to shape your reality. By regularly visualizing positive outcomes and desired states of being, you rewire neural pathways and align your subconscious with your conscious goals.</p>
        
        <h4 class="text-xl font-bold mb-3">How to Practice:</h4>
        <ul class="list-disc pl-6 mb-6 space-y-2">
          <li>Find a quiet space and comfortable position</li>
          <li>Close your eyes and take several deep breaths</li>
          <li>Create a clear mental image of your desired outcome</li>
          <li>Engage all senses (see, hear, feel, smell, taste)</li>
          <li>Add emotional content (how it feels to achieve this)</li>
          <li>Practice for 5-10 minutes daily</li>
          <li>End with gratitude as if it's already happened</li>
        </ul>
        
        <h4 class="text-xl font-bold mb-3">Types of Visualizations:</h4>
        <ul class="list-disc pl-6 mb-6 space-y-2">
          <li><strong>Future Self</strong>: Connecting with your evolved future self</li>
          <li><strong>Outcome</strong>: Visualizing successful completion of goals</li>
          <li><strong>Process</strong>: Mentally rehearsing the steps to achievement</li>
          <li><strong>Healing</strong>: Imagining restoration of physical/emotional health</li>
          <li><strong>Protection</strong>: Creating energetic boundaries</li>
        </ul>
        
        <blockquote class="italic border-l-4 border-sky-400 pl-4 py-2 my-6">
          "Your imagination is not an escape from reality but a powerful tool for creating it. What you consistently visualize with emotion tends to materialize." — Harry Om
        </blockquote>
      `
    },
    {
      id: 5,
      title: "Energy Check-Ins",
      icon: "zap",
      description: "Regular awareness pauses throughout the day to assess and adjust your mental, emotional and physical state.",
      image: "/HarmeetImages/img4.jpg",
      content: `
        <p class="mb-4">Energy Check-Ins are brief moments of self-awareness scattered throughout your day. They help you notice patterns, prevent energy depletion, and make conscious adjustments to maintain balance.</p>
        
        <h4 class="text-xl font-bold mb-3">How to Practice:</h4>
        <ul class="list-disc pl-6 mb-6 space-y-2">
          <li>Set 3-5 daily check-in reminders on your phone</li>
          <li>When prompted, pause whatever you're doing</li>
          <li>Take three conscious breaths</li>
          <li>Scan your body for tension or discomfort</li>
          <li>Notice your emotional state without judgment</li>
          <li>Assess your energy level (1-10 scale)</li>
          <li>Make one small adjustment if needed</li>
          <li>Return to your activities with renewed awareness</li>
        </ul>
        
        <h4 class="text-xl font-bold mb-3">Key Questions to Ask:</h4>
        <ul class="list-disc pl-6 mb-6 space-y-2">
          <li>How does my body feel right now?</li>
          <li>What emotion am I experiencing?</li>
          <li>Is this activity draining or energizing me?</li>
          <li>What do I need in this moment?</li>
          <li>Is my current focus aligned with my values?</li>
        </ul>
        
        <blockquote class="italic border-l-4 border-sky-400 pl-4 py-2 my-6">
          "Most people live their entire day on autopilot. Regular energy check-ins are like waking up multiple times within your waking hours." — Harry Om
        </blockquote>
      `
    },
    {
      id: 6,
      title: "Sacred Sound",
      icon: "music",
      description: "Using music, mantras, and vibration to heal the nervous system and access higher states of consciousness.",
      image: "/HarmeetImages/img18.JPG",
      content: `
        <p class="mb-4">Sound is one of the most direct pathways to altered states of consciousness. Sacred Sound practices use specific frequencies, rhythms, and vibrations to shift brain waves, release stuck emotions, and create harmony in the body-mind system.</p>
        
        <h4 class="text-xl font-bold mb-3">How to Practice:</h4>
        <ul class="list-disc pl-6 mb-6 space-y-2">
          <li><strong>Mantra Repetition</strong>: Silently or aloud, repeat sacred sounds (Om, Sat Nam, etc.)</li>
          <li><strong>Sound Bathing</strong>: Immerse yourself in healing instruments (singing bowls, gongs)</li>
          <li><strong>Vocal Toning</strong>: Using your voice to create healing vibrations in the body</li>
          <li><strong>Binaural Beats</strong>: Listening to specific frequencies that alter brain waves</li>
          <li><strong>Music Meditation</strong>: Deep, undistracted listening to carefully selected music</li>
        </ul>
        
        <h4 class="text-xl font-bold mb-3">Benefits:</h4>
        <ul class="list-disc pl-6 mb-6 space-y-2">
          <li>Reduced anxiety and stress hormones</li>
          <li>Enhanced meditation experiences</li>
          <li>Emotional release and processing</li>
          <li>Improved sleep quality</li>
          <li>Heightened intuition and creativity</li>
          <li>Stronger connection to inner wisdom</li>
        </ul>
        
        <blockquote class="italic border-l-4 border-sky-400 pl-4 py-2 my-6">
          "Sound can access parts of your being that words cannot reach. It's the original technology for consciousness expansion." — Harry Om
        </blockquote>
      `
    }
  ];

  // Icons for practice cards
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'phone':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        );
      case 'sun':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        );
      case 'wind':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
        );
      case 'eye':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
        );
      case 'zap':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        );
      case 'music':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
          </svg>
        );
      default:
        return null;
    }
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-sky-900 via-purple-900 to-pink-900">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-sky-900/80 via-purple-900/70 to-pink-900/60"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl">
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-6 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-semibold border border-white/20">
              🧘 Daily Spiritual Practices
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-[Playfair_Display] leading-tight"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            Daily Soul Practices
          </motion.h1>

          <motion.p
            className="text-lg md:text-2xl text-white/95 max-w-3xl mx-auto leading-relaxed"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ delay: 0.2 }}
          >
            Transform your daily routine with ancient wisdom for modern living
          </motion.p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-white to-sky-50/30">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-4 py-2 bg-sky-100 text-sky-700 rounded-full text-sm font-semibold mb-6">
            ✨ Getting Started
          </span>
          <h2 className="text-3xl md:text-5xl font-[Playfair_Display] font-bold mb-6 text-gray-900">
            Modern Rituals for Inner Peace
          </h2>

          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            In the rush of modern life, intentional practices are more important than ever. These rituals
            are designed to fit seamlessly into your day, helping you create moments of presence and
            peace without requiring hours of time or special equipment.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            Explore each practice by clicking on the cards below. Start with just one that resonates with
            you and gradually incorporate others as they feel right for your journey.
          </p>
        </div>
      </section>

      {/* Practices Grid */}
      <section className="py-24 px-4 md:px-8 bg-gradient-to-b from-sky-50/30 via-white to-lavender-50/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {practices.map((practice, index) => (
              <motion.div
                key={practice.id}
                className={`group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer hover:-translate-y-2 border ${expandedPractice === practice.id ? 'ring-4 ring-sky-400/50 border-sky-400' : 'border-gray-100'
                  }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                onClick={() => setExpandedPractice(expandedPractice === practice.id ? null : practice.id)}
              >
                <div className="relative overflow-hidden h-52">
                  <img
                    src={practice.image}
                    alt={practice.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute top-4 right-4 w-14 h-14 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center text-sky-600 shadow-xl group-hover:scale-110 transition-transform duration-300">
                    {getIcon(practice.icon)}
                  </div>
                </div>
                <div className="p-7">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-sky-600 transition-colors">{practice.title}</h3>

                  <p className="text-gray-600 mb-5 leading-relaxed">
                    {practice.description}
                  </p>

                  <button
                    className="inline-flex items-center gap-2 text-sky-600 font-semibold hover:text-sky-700 transition-colors group"
                  >
                    <span>{expandedPractice === practice.id ? 'Show Less' : 'Learn More'}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-5 w-5 transition-transform duration-300 ${expandedPractice === practice.id ? 'rotate-180' : ''}`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>

                  {/* Expanded Content */}
                  {expandedPractice === practice.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4 }}
                      className="mt-7 pt-7 border-t border-gray-100"
                    >
                      <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: practice.content }} />
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Practice */}
      <section className="py-24 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-sky-400 to-purple-400 rounded-3xl blur-2xl opacity-20"></div>
              <img
                src="/HarmeetImages/img19.JPG"
                alt="Community Practice"
                className="relative w-full h-auto rounded-3xl shadow-2xl hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </motion.div>

          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-6">
              🌐 Community
            </span>
            <h2 className="text-3xl md:text-5xl font-[Playfair_Display] font-bold mb-6 text-gray-900">
              Join Our Practice Community
            </h2>

            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              While individual practice forms the foundation of spiritual growth, practicing in community
              amplifies the experience and provides support on your journey.
            </p>

            <p className="text-gray-700 mb-10 text-lg leading-relaxed">
              Harry Om hosts weekly virtual practice sessions where you can join others in guided breathwork,
              meditation, and discussions about integrating these practices into daily life.
            </p>

            <div className="bg-gradient-to-br from-lavender-50 to-sky-50 rounded-3xl p-8 shadow-lg border border-purple-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Upcoming Sessions</h3>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start group">
                  <span className="text-sky-600 mr-3 text-xl group-hover:scale-125 transition-transform">•</span>
                  <div>
                    <p className="font-semibold text-gray-900">Digital Detox Workshop</p>
                    <p className="text-sm text-gray-600">Saturday, July 20 • 10:00 AM</p>
                  </div>
                </li>
                <li className="flex items-start group">
                  <span className="text-purple-600 mr-3 text-xl group-hover:scale-125 transition-transform">•</span>
                  <div>
                    <p className="font-semibold text-gray-900">Group Breathwork Session</p>
                    <p className="text-sm text-gray-600">Tuesday, July 23 • 7:00 PM</p>
                  </div>
                </li>
                <li className="flex items-start group">
                  <span className="text-sky-600 mr-3 text-xl group-hover:scale-125 transition-transform">•</span>
                  <div>
                    <p className="font-semibold text-gray-900">Sacred Morning Challenge Kickoff</p>
                    <p className="text-sm text-gray-600">Monday, July 29 • 6:30 AM</p>
                  </div>
                </li>
              </ul>

              <button
                className="w-full bg-gradient-to-r from-sky-500 to-purple-500 hover:from-sky-600 hover:to-purple-600 text-white font-bold rounded-full py-4 px-6 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] transform"
              >
                Register for Sessions
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 px-4 md:px-8 bg-gradient-to-br from-sky-500 via-sky-600 to-purple-600 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-400/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-sky-400/30 rounded-full blur-3xl"></div>

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-8 border border-white/30">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </div>

            <h2 className="text-3xl md:text-5xl font-[Playfair_Display] font-bold mb-6 text-white">
              Receive Daily Practice Reminders
            </h2>

            <p className="text-lg md:text-xl text-white/95 mb-10 max-w-2xl mx-auto leading-relaxed">
              Subscribe to receive gentle daily reminders, practice tips, and inspiration to support your spiritual journey.
            </p>

            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-6">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-6 py-4 rounded-full focus:outline-none focus:ring-4 focus:ring-white/30 border-0 text-gray-900 placeholder-gray-500 shadow-lg"
                required
              />
              <button
                type="submit"
                className="bg-white hover:bg-gray-100 text-sky-600 font-bold rounded-full py-4 px-8 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>

            <p className="text-sm text-white/80">
              🔒 Daily practice reminders delivered with love. Unsubscribe at any time.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PracticesPage;
