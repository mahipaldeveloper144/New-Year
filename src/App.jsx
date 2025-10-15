import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Language translations
const translations = {
  en: {
    title: "✨ New Year Greetings ✨",
    placeholder: "Enter your name",
    button: "Send / Generate Link",
    copyButton: "Copy Link",
    shareButton: "Share",
    footer: "Made with ❤️ by New Year Greetings Team",
    greeting: "🎉 {name} wishes you a very Happy New Year! May this year bring you joy, success, and prosperity! 🎉",
    selectLanguage: "Select Language",
    loading: "Generating your greeting...",
    success: "Link generated successfully!",
    copied: "Link copied to clipboard!",
    shared: "Shared successfully!",
    musicToggle: "🎵",
    musicOff: "🔇"
  },
  hi: {
    title: "✨ नव वर्ष की शुभकामनाएं ✨",
    placeholder: "अपना नाम दर्ज करें",
    button: "भेजें / लिंक बनाएं",
    copyButton: "लिंक कॉपी करें",
    shareButton: "शेयर करें",
    footer: "न्यू ईयर ग्रीटिंग्स टीम द्वारा ❤️ के साथ बनाया गया",
    greeting: "🎉 {name} की तरफ़ से आपको नव वर्ष की हार्दिक शुभकामनाएँ! यह वर्ष आपके लिए खुशी, सफलता और समृद्धि लेकर आए! 🎉",
    selectLanguage: "भाषा चुनें",
    loading: "आपकी शुभकामना बनाई जा रही है...",
    success: "लिंक सफलतापूर्वक बनाया गया!",
    copied: "लिंक क्लिपबोर्ड में कॉपी हो गया!",
    shared: "सफलतापूर्वक शेयर किया गया!",
    musicToggle: "🎵",
    musicOff: "🔇"
  },
  gu: {
    title: "✨ નવા વર્ષની શુભેચ્છાઓ ✨",
    placeholder: "તમારું નામ દાખલ કરો",
    button: "મોકલો / લિંક બનાવો",
    copyButton: "લિંક કોપી કરો",
    shareButton: "શેર કરો",
    footer: "ન્યૂ ઈયર ગ્રીટિંગ્સ ટીમ દ્વારા ❤️ સાથે બનાવ્યું",
    greeting: "🎉 {name} તરફથી તમને નવા વર્ષ ની હાર્દિક શુભેચ્છાઓ! આ વર્ષ તમારા માટે આનંદ, સફળતા અને સમૃદ્ધિ લાવે! 🎉",
    selectLanguage: "ભાષા પસંદ કરો",
    loading: "તમારી શુભેચ્છા બનાવી રહ્યા છીએ...",
    success: "લિંક સફળતાપૂર્વક બનાવ્યો!",
    copied: "લિંક ક્લિપબોર્ડમાં કોપી થઈ ગઈ!",
    shared: "સફળતાપૂર્વક શેર કર્યું!",
    musicToggle: "🎵",
    musicOff: "🔇"
  }
};

// Particle component
const Particle = ({ delay = 0 }) => {
  const [position, setPosition] = useState({
    x: Math.random() * window.innerWidth,
    y: window.innerHeight + 50
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition({
        x: Math.random() * window.innerWidth,
        y: window.innerHeight + 50
      });
    }, 8000 + delay * 1000);

    return () => clearInterval(interval);
  }, [delay]);

  return (
    <motion.div
      className="particle"
      style={{
        left: position.x,
        top: position.y,
        animationDelay: `${delay}s`
      }}
      animate={{
        y: [-50, -window.innerHeight - 100],
        rotate: [0, 360]
      }}
      transition={{
        duration: 6 + delay,
        repeat: Infinity,
        ease: "linear"
      }}
    />
  );
};

// Firework component
const Firework = ({ x, y, color, delay = 0 }) => {
  return (
    <motion.div
      className="firework"
      style={{
        left: x,
        top: y,
        background: color
      }}
      initial={{ scale: 0, opacity: 1 }}
      animate={{ scale: [0, 1, 2], opacity: [1, 1, 0] }}
      transition={{ duration: 1, delay }}
    />
  );
};

// Sparkle component
const Sparkle = ({ x, y, delay = 0 }) => {
  return (
    <motion.div
      className="sparkle"
      style={{
        left: x,
        top: y
      }}
      animate={{
        scale: [0, 1, 0],
        opacity: [0, 1, 0]
      }}
      transition={{
        duration: 2,
        delay,
        repeat: Infinity,
        repeatDelay: 1
      }}
    />
  );
};

// Flower component
const Flower = ({ x, delay = 0 }) => {
  const flowers = ['🌸', '🌺', '🌻', '🌷', '🌹', '🌼', '🌿', '🍀'];
  const randomFlower = flowers[Math.floor(Math.random() * flowers.length)];

  return (
    <motion.div
      className="flower"
      style={{
        left: x,
        fontSize: '20px'
      }}
      initial={{ y: -100, rotate: 0, opacity: 1 }}
      animate={{ 
        y: window.innerHeight + 100, 
        rotate: 360,
        opacity: [1, 0.8, 0]
      }}
      transition={{
        duration: 8,
        delay,
        ease: "linear"
      }}
    >
      {randomFlower}
    </motion.div>
  );
};

// Confetti component
const Confetti = ({ x, y, color, delay = 0 }) => {
  return (
    <motion.div
      className="confetti"
      style={{
        left: x,
        top: y,
        background: color
      }}
      initial={{ y: -100, rotate: 0, opacity: 1 }}
      animate={{ 
        y: window.innerHeight + 100, 
        rotate: 720,
        opacity: [1, 0.8, 0]
      }}
      transition={{
        duration: 3,
        delay,
        ease: "linear"
      }}
    />
  );
};

// Traditional New Year Elements
const PartyHat = ({ x, y, delay = 0 }) => {
  return (
    <motion.div
      className="party-hat"
      style={{
        left: x,
        top: y,
        background: 'linear-gradient(45deg, #FF6B6B, #4ECDC4)'
      }}
      animate={{
        rotate: [-5, 5, -5]
      }}
      transition={{
        duration: 4,
        delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  );
};

const Balloon = ({ x, y, color, delay = 0 }) => {
  return (
    <motion.div
      className="balloon"
      style={{
        left: x,
        top: y,
        background: color
      }}
      animate={{
        y: [0, -20, 0],
        rotate: [-2, 2, -2]
      }}
      transition={{
        duration: 6,
        delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  );
};

const GiftBox = ({ x, y, delay = 0 }) => {
  return (
    <motion.div
      className="gift-box"
      style={{
        left: x,
        top: y,
        background: 'linear-gradient(45deg, #FF6B6B, #2ECC71)'
      }}
      animate={{
        y: [0, -15, 0],
        scale: [1, 1.1, 1]
      }}
      transition={{
        duration: 3,
        delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  );
};

// Typewriter component
const Typewriter = ({ text, speed = 100 }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  return (
    <span className="typewriter">
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

// Main App Component
const App = () => {
  const [name, setName] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [showLanguageModal, setShowLanguageModal] = useState(false);
  const [generatedLink, setGeneratedLink] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [particles, setParticles] = useState([]);
  const [fireworks, setFireworks] = useState([]);
  const [sparkles, setSparkles] = useState([]);
  const [flowers, setFlowers] = useState([]);
  const [confetti, setConfetti] = useState([]);
  const [decorations, setDecorations] = useState([]);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [showMusicToggle, setShowMusicToggle] = useState(false);
  
  const audioRef = useRef(null);
  const t = translations[selectedLanguage];

  // Initialize particles and decorations
  useEffect(() => {
    // Create particles
    const newParticles = Array.from({ length: 20 }, (_, i) => ({ id: i, delay: i * 0.5 }));
    setParticles(newParticles);

    // Create decorations
    const newDecorations = [];
    for (let i = 0; i < 8; i++) {
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * (window.innerHeight * 0.6);
      const type = ['hat', 'balloon', 'gift'][Math.floor(Math.random() * 3)];
      newDecorations.push({ id: i, x, y, type, delay: i * 0.5 });
    }
    setDecorations(newDecorations);

    // Try to start music
    setTimeout(() => {
      setShowMusicToggle(true);
      tryStartMusic();
    }, 1000);
  }, []);

  // Check URL parameters on load
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const urlName = urlParams.get('name');
    const urlLang = urlParams.get('lang');

    if (urlName && urlLang) {
      setName(urlName);
      setSelectedLanguage(urlLang);
      setShowMessage(true);
      triggerCelebration();
    }
  }, []);

  // Audio handling
  const tryStartMusic = () => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
      audioRef.current.loop = true;
      
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsMusicPlaying(true);
          })
          .catch(() => {
            // Music will start on user interaction
            setIsMusicPlaying(false);
          });
      }
    }
  };

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isMusicPlaying) {
        audioRef.current.pause();
        setIsMusicPlaying(false);
      } else {
        audioRef.current.play();
        setIsMusicPlaying(true);
      }
    }
  };

  // Celebration effects
  const triggerCelebration = () => {
    // Fireworks
    const newFireworks = [];
    for (let i = 0; i < 15; i++) {
      newFireworks.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * (window.innerHeight * 0.7),
        color: ['#FFD700', '#FF6B6B', '#4ECDC4', '#9B59B6', '#2ECC71'][Math.floor(Math.random() * 5)],
        delay: i * 0.1
      });
    }
    setFireworks(newFireworks);

    // Sparkles
    const newSparkles = [];
    for (let i = 0; i < 20; i++) {
      newSparkles.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        delay: i * 0.05
      });
    }
    setSparkles(newSparkles);

    // Flowers
    const newFlowers = [];
    for (let i = 0; i < 10; i++) {
      newFlowers.push({
        id: i,
        x: Math.random() * window.innerWidth,
        delay: i * 0.2
      });
    }
    setFlowers(newFlowers);

    // Confetti
    const newConfetti = [];
    for (let i = 0; i < 25; i++) {
      newConfetti.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * 100,
        color: ['#FFD700', '#FF6B6B', '#4ECDC4', '#9B59B6', '#2ECC71'][Math.floor(Math.random() * 5)],
        delay: i * 0.05
      });
    }
    setConfetti(newConfetti);

    // Clear effects after animation
    setTimeout(() => {
      setFireworks([]);
      setSparkles([]);
      setFlowers([]);
      setConfetti([]);
    }, 5000);
  };

  // Generate link
  const generateLink = () => {
    if (!name.trim()) return;
    
    setIsLoading(true);
    setShowLanguageModal(true);
  };

  const handleLanguageSelect = (lang) => {
    setSelectedLanguage(lang);
    setShowLanguageModal(false);
    
    // Generate the link
    const baseUrl = window.location.origin;
    const link = `${baseUrl}/?name=${encodeURIComponent(name)}&lang=${lang}`;
    setGeneratedLink(link);
    setIsLoading(false);
    setShowSuccess(true);
    
    // Trigger celebration
    triggerCelebration();
    
    // Try to start music
    tryStartMusic();
  };

  // Copy link
  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(generatedLink);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  // Share link
  const shareLink = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: t.title,
          text: t.greeting.replace('{name}', name),
          url: generatedLink
        });
      } else {
        await copyLink();
      }
    } catch (err) {
      console.error('Failed to share: ', err);
    }
  };

  // Reset to input form
  const resetForm = () => {
    setName('');
    setGeneratedLink('');
    setShowMessage(false);
    setShowSuccess(false);
    setSelectedLanguage('en');
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Music */}
      <audio
        ref={audioRef}
        src="/music/new-year-music.mp3"
        preload="auto"
      />

      {/* Audio Control */}
      {showMusicToggle && (
        <motion.button
          className="audio-control"
          onClick={toggleMusic}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
        >
          {isMusicPlaying ? t.musicToggle : t.musicOff}
        </motion.button>
      )}

      {/* Particles */}
      {particles.map(particle => (
        <Particle key={particle.id} delay={particle.delay} />
      ))}

      {/* Fireworks */}
      {fireworks.map(firework => (
        <Firework
          key={firework.id}
          x={firework.x}
          y={firework.y}
          color={firework.color}
          delay={firework.delay}
        />
      ))}

      {/* Sparkles */}
      {sparkles.map(sparkle => (
        <Sparkle
          key={sparkle.id}
          x={sparkle.x}
          y={sparkle.y}
          delay={sparkle.delay}
        />
      ))}

      {/* Flowers */}
      {flowers.map(flower => (
        <Flower
          key={flower.id}
          x={flower.x}
          delay={flower.delay}
        />
      ))}

      {/* Confetti */}
      {confetti.map(conf => (
        <Confetti
          key={conf.id}
          x={conf.x}
          y={conf.y}
          color={conf.color}
          delay={conf.delay}
        />
      ))}

      {/* Traditional Decorations */}
      {decorations.map(decoration => {
        switch (decoration.type) {
          case 'hat':
            return (
              <PartyHat
                key={decoration.id}
                x={decoration.x}
                y={decoration.y}
                delay={decoration.delay}
              />
            );
          case 'balloon':
            return (
              <Balloon
                key={decoration.id}
                x={decoration.x}
                y={decoration.y}
                color={['#FF6B6B', '#4ECDC4', '#9B59B6', '#2ECC71'][Math.floor(Math.random() * 4)]}
                delay={decoration.delay}
              />
            );
          case 'gift':
            return (
              <GiftBox
                key={decoration.id}
                x={decoration.x}
                y={decoration.y}
                delay={decoration.delay}
              />
            );
          default:
            return null;
        }
      })}

      {/* Main Content */}
      <div className="flex items-center justify-center min-h-screen p-4">
        <motion.div
          className="glass-card max-w-md w-full p-8 rounded-3xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {!showMessage ? (
            // Input Form
            <div className="text-center">
              <motion.h1
                className="text-4xl md:text-5xl font-bold mb-8 high-contrast-text"
                style={{ fontFamily: 'Great Vibes, cursive' }}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {t.title}
              </motion.h1>

              <motion.div
                className="mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t.placeholder}
                  className="w-full p-4 rounded-2xl border-2 border-yellow-400 bg-white/10 backdrop-blur-sm text-white placeholder-white/70 focus:outline-none focus:border-yellow-300 focus:bg-white/20 transition-all duration-300"
                  style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}
                />
              </motion.div>

              <motion.button
                onClick={generateLink}
                disabled={!name.trim() || isLoading}
                className="celebration-btn w-full text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="loading-spinner mr-3"></div>
                    {t.loading}
                  </div>
                ) : (
                  t.button
                )}
              </motion.button>
            </div>
          ) : (
            // Message Display
            <motion.div
              className="message-container message-float"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h2
                className="text-3xl md:text-4xl font-bold mb-6 high-contrast-text"
                style={{ fontFamily: 'Great Vibes, cursive' }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {t.title}
              </motion.h2>

              <motion.div
                className="text-xl md:text-2xl leading-relaxed high-contrast-text"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Typewriter
                  text={t.greeting.replace('{name}', name)}
                  speed={80}
                />
              </motion.div>

              <motion.button
                onClick={resetForm}
                className="mt-8 celebration-btn px-6 py-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Create New Greeting
              </motion.button>
            </motion.div>
          )}

          {/* Generated Link Section */}
          {generatedLink && (
            <motion.div
              className="mt-6 space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white/10 rounded-2xl p-4 break-all text-sm text-white/80">
                {generatedLink}
              </div>
              
              <div className="flex space-x-3">
                <motion.button
                  onClick={copyLink}
                  className="flex-1 celebration-btn py-3"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t.copyButton}
                </motion.button>
                
                <motion.button
                  onClick={shareLink}
                  className="flex-1 celebration-btn py-3"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t.shareButton}
                </motion.button>
              </div>
            </motion.div>
          )}

          {/* Success Message */}
          <AnimatePresence>
            {showSuccess && (
              <motion.div
                className="fixed inset-0 flex items-center justify-center z-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.div
                  className="bg-green-500 text-white px-6 py-3 rounded-full shadow-lg"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {t.success}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Language Selection Modal */}
      <AnimatePresence>
        {showLanguageModal && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowLanguageModal(false)}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-2xl font-bold mb-6 high-contrast-text">
                {t.selectLanguage}
              </h3>
              
              <div className="space-y-4">
                {Object.entries(translations).map(([code, translation]) => (
                  <motion.button
                    key={code}
                    onClick={() => handleLanguageSelect(code)}
                    className="w-full language-selector text-left p-4 rounded-xl"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-semibold">
                        {code === 'en' && '🇬🇧 English'}
                        {code === 'hi' && '🇮🇳 Hindi'}
                        {code === 'gu' && '🇬🇺 Gujarati'}
                      </span>
                      <span className="text-sm opacity-70">
                        {translation.greeting.split('{name}')[0]}
                      </span>
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <motion.div
        className="footer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        {t.footer}
      </motion.div>
    </div>
  );
};

export default App;
