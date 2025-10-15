/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'great-vibes': ['Great Vibes', 'cursive'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'sparkle': 'sparkle 2s ease-in-out infinite',
        'firework': 'firework 1s ease-out forwards',
        'flower-fall': 'flowerFall 8s linear infinite',
        'confetti-fall': 'confettiFall 3s ease-out forwards',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite alternate',
        'typewriter': 'typewriter 3s steps(40, end)',
        'blink': 'blink 0.75s step-end infinite',
        'message-float': 'messageFloat 3s ease-in-out infinite',
        'hat-sway': 'hatSway 4s ease-in-out infinite',
        'balloon-float': 'balloonFloat 6s ease-in-out infinite',
        'gift-bounce': 'giftBounce 3s ease-in-out infinite',
        'champagne-glow': 'champagneGlow 2s ease-in-out infinite alternate',
        'clock-tick': 'clockTick 2s ease-in-out infinite',
        'firework-burst': 'fireworkBurst 1.5s ease-out forwards',
        'spin': 'spin 1s linear infinite',
        'success-pulse': 'successPulse 0.6s ease-out',
        'border-glow': 'borderGlow 3s ease-in-out infinite',
        'gradient-shift': 'gradientShift 15s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(100vh) rotate(0deg)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '50%': { transform: 'translateY(-20vh) rotate(180deg)' },
        },
        sparkle: {
          '0%, 100%': { opacity: '0', transform: 'scale(0)' },
          '50%': { opacity: '1', transform: 'scale(1)' },
        },
        firework: {
          '0%': { transform: 'scale(0)', opacity: '1' },
          '50%': { transform: 'scale(1)', opacity: '1' },
          '100%': { transform: 'scale(2)', opacity: '0' },
        },
        flowerFall: {
          '0%': { transform: 'translateY(-100vh) rotate(0deg)', opacity: '1' },
          '100%': { transform: 'translateY(100vh) rotate(360deg)', opacity: '0' },
        },
        confettiFall: {
          '0%': { transform: 'translateY(-100vh) rotate(0deg)', opacity: '1' },
          '100%': { transform: 'translateY(100vh) rotate(720deg)', opacity: '0' },
        },
        glowPulse: {
          'from': { boxShadow: '0 0 20px #FFD700, 0 0 40px #FFD700, 0 0 60px #FFD700' },
          'to': { boxShadow: '0 0 30px #FFD700, 0 0 60px #FFD700, 0 0 90px #FFD700' },
        },
        typewriter: {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        blink: {
          'from, to': { borderColor: 'transparent' },
          '50%': { borderColor: '#FFD700' },
        },
        messageFloat: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        hatSway: {
          '0%, 100%': { transform: 'rotate(-5deg)' },
          '50%': { transform: 'rotate(5deg)' },
        },
        balloonFloat: {
          '0%, 100%': { transform: 'translateY(0px) rotate(-2deg)' },
          '50%': { transform: 'translateY(-20px) rotate(2deg)' },
        },
        giftBounce: {
          '0%, 100%': { transform: 'translateY(0px) scale(1)' },
          '50%': { transform: 'translateY(-15px) scale(1.1)' },
        },
        champagneGlow: {
          'from': { boxShadow: '0 0 10px #FFD700' },
          'to': { boxShadow: '0 0 20px #FFD700, 0 0 30px #FFD700' },
        },
        clockTick: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(5deg)' },
        },
        fireworkBurst: {
          '0%': { transform: 'scale(0)', opacity: '1' },
          '50%': { transform: 'scale(1.5)', opacity: '0.8' },
          '100%': { transform: 'scale(3)', opacity: '0' },
        },
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        successPulse: {
          '0%': { transform: 'scale(0)' },
          '50%': { transform: 'scale(1.2)' },
          '100%': { transform: 'scale(1)' },
        },
        borderGlow: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        gradientShift: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      colors: {
        'primary-gold': '#FFD700',
        'secondary-gold': '#FFA500',
        'accent-red': '#FF6B6B',
        'accent-blue': '#4ECDC4',
        'accent-purple': '#9B59B6',
        'accent-green': '#2ECC71',
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
}
