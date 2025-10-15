# Complete New Year Greeting React.js Website Prompt

## 🎯 **Project Overview**
Create a fully responsive single-page New Year Greeting Website using React.js and Tailwind CSS that fulfills all the following design, functionality, and language requirements with advanced features and animations.

## 🌟 **UI & Animation Requirements**

### **Festive Theme & Visual Design:**
- Use a beautiful, festive New Year theme with vibrant colors, celebration elements, and party animations
- The background should be vibrant and animated, using gradients or particle effects to represent a festive atmosphere
- Add smooth CSS and JS animations — glowing elements, flickering lights, sparkles, and subtle motion
- The main content (input form or message) should be inside a glassmorphism-style card with glow and soft shadows
- Use Google Fonts such as Poppins and Great Vibes for a festive look
- Make the layout 100% responsive for desktop, tablet, and mobile screens

### **Advanced Animation System:**
- **Particle System**: Floating colorful particles in the background
- **Firework Effects**: Celebration bursts when generating links with multiple colors
- **Glowing Elements**: Traditional lamps and decorative elements with flickering effects
- **Sparkle Effects**: Magical twinkling stars throughout the page
- **Typewriter Animation**: Enhanced animated text reveal with character-by-character animation
- **New Year Decorations**: Party hats, confetti, and celebration elements with gentle swaying motion
- **Message Glow**: Dynamic glowing text effects with gradient animations
- **Message Float**: Gentle floating animation for personalized messages
- **Flower Rain**: Beautiful falling flower animation with multiple flower types (🌸🌺🌻🌷🌹🌼🌿🍀)
- **Confetti**: Colorful celebration particles
- **Sound Effects**: Optional audio feedback for interactions

### **Traditional New Year Elements (PNG-like CSS Styling):**
- **Party Hats**: Colorful party hats and celebration accessories
- **Confetti**: Colorful confetti and streamers
- **Fireworks**: New Year fireworks and sparklers
- **Champagne**: Celebration drinks and glasses
- **Clock Elements**: Time and countdown decorations
- **Balloons**: Party balloons in various colors
- **Gift Boxes**: Present and gift elements
- **Decorative Images**: Traditional New Year celebration images with glowing effects
- **Side Decorations**: Animated side images with floating animations

### **Image Integration:**
- **Main Card Image**: Decorative image at the top of the middle card
- **Side Images**: Decorative images on top left and right corners
- **Image Animations**: Glowing effects and floating animations
- **Responsive Images**: Proper sizing for mobile and desktop

## 🪔 **Core Functionality**

### **Input + URL Generator:**
- Show an input box with placeholder text: "Enter your name" and a "Send / Generate Link" button
- When the user enters a name and clicks Send, show a language selection modal
- Generate a unique shareable URL that includes the name and selected language:
  - `https://mynewyeargreetings.com/?name=Mahipal&lang=gu`
- Include loading animation during URL generation
- Trigger celebration effects (fireworks, confetti, flower rain) when generating link

### **Copy Link & Share:**
- Show Copy Link and Share buttons after generating the link
- Copy Link should use navigator.clipboard with success feedback
- Share should use the Web Share API (with a fallback to copy)
- Include visual feedback for successful copy/share actions

### **Display Personalized Message:**
- When anyone opens the generated link:
  - The site detects the name and lang parameters
  - Shows a personalized New Year message with the person's name
  - If no name is in the URL, show the input box again
- **Enhanced Message Display:**
  - Dark background with high contrast for better text visibility
  - White text with strong shadows for maximum readability
  - Animated message container with glassmorphism effects
  - Decorative sparkles and corner animations

### **Advanced Animations:**
- **Typewriter Effect**: Character-by-character animation with individual character styling
- **Sparkle Finale**: Random sparkles appear after message completion
- **Message Glow**: Dynamic glowing text effects with gradient animations
- **Message Float**: Gentle floating animation for personalized messages

## 💫 **Language Support (Multilingual)**

### **Supported Languages:**
- 🇬🇧 **English**
- 🇮🇳 **Hindi** 
- 🇬🇺 **Gujarati**

### **Language Features:**
- Language dropdown (English / Hindi / Gujarati) visible at all times
- All text content (greeting messages, placeholders, button texts) changes based on selected language
- Website detects the `?lang=` parameter from the URL and displays content accordingly
- Language selection modal appears when generating links
- Consistent language experience across all interactions

### **Example Messages:**
- **English**: "🎉 {name} wishes you a very Happy New Year! May this year bring you joy, success, and prosperity! 🎉"
- **Hindi**: "🎉 {name} की तरफ़ से आपको नव वर्ष की हार्दिक शुभकामनाएँ! यह वर्ष आपके लिए खुशी, सफलता और समृद्धि लेकर आए! 🎉"
- **Gujarati**: "🎉 {name} તરફથી તમને નવા વર્ષ ની હાર્દિક શુભેચ્છાઓ! આ વર્ષ તમારા માટે આનંદ, સફળતા અને સમૃદ્ધિ લાવે! 🎉"

## 🎯 **Meta Information (SEO)**

### **Page Title & Description:**
- **Title**: "✨ New Year Greetings – Send Personalized Wishes Online ✨"
- **Description**: "Celebrate New Year with joy and hope! Create and share your own personalized New Year greeting with animated elements and festive spirit."

### **Required Meta Tags:**
- `og:title` - Open Graph title for social sharing
- `og:description` - Open Graph description for social sharing  
- `og:image` - Open Graph image for social sharing
- `favicon` - Website favicon
- `viewport` - Responsive viewport meta tag
- `charset` - UTF-8 character encoding

## ⚙️ **Tech Stack & Guidelines**

### **Core Technologies:**
- **React.js**: Functional Components + Hooks (useState, useEffect, useRef)
- **Tailwind CSS**: For styling and responsiveness
- **Framer Motion**: For advanced animations and transitions
- **URLSearchParams**: To handle the name and lang parameters
- **Web APIs**: Clipboard API, Web Share API, Audio API

### **Development Guidelines:**
- Code should be clean, well-commented, and production-ready
- Keep everything in a single file (App.jsx) for demo simplicity
- Create a companion index.css file for Tailwind setup and custom animations
- Use modern ES6+ JavaScript features
- Implement proper error handling and fallbacks

### **Audio Features:**
- **Background Music**: Festive New Year instrumental music
- **Immediate Playback**: Music starts immediately when user visits page
- **Auto-play**: Multiple strategies to bypass browser autoplay restrictions
- **Sound Toggle**: User can enable/disable music with speaker button
- **Volume Control**: Optimized volume levels for background music
- **Loop Playback**: Continuous music playback
- **Browser Compatibility**: Advanced techniques to ensure music plays
- **User Interaction**: Detects and responds to any user interaction
- **Synthetic Events**: Creates artificial user interactions to trigger audio

### **Responsive Design:**
- Mobile-first approach with flexible grid layouts
- Touch-friendly interactions optimized for all screen sizes
- Perfect text alignment and typography
- High contrast text for maximum readability
- Dark backgrounds for better text visibility
- Compact title sizing for better mobile experience

## 🧨 **Expected Output**

### **✅ Core Functionality:**
- A fully functional, animated, responsive single-page website that:
  - Detects and displays user name and language from the URL
  - Lets users enter their name, select language, and generate a shareable greeting link
  - Includes copy and share buttons with visual feedback
  - Shows a festive animated background and glowing New Year decorations
  - Displays multilingual greetings with enhanced typewriter effects
  - Shows footer text: "Made with ❤️ by New Year Greetings Team"
  - Works perfectly on mobile, tablet, and desktop

### **✅ Advanced Features:**
- **Immediate Audio Playback**: Music starts automatically when user visits
- **Celebration Effects**: Fireworks, confetti, and flower rain on link generation
- **Traditional Elements**: Party hats, confetti, fireworks, balloons, gifts
- **Image Integration**: Main card image and side decorative images
- **Enhanced Animations**: Particle system, sparkles, floating elements
- **High Contrast Text**: Optimized for maximum readability
- **Debug Tools**: Audio testing and troubleshooting features

## 🧭 **Example URL Behaviors**
- `/?name=Mahipal&lang=gu` → Shows Gujarati greeting with Mahipal's name
- `/?name=Karan&lang=hi` → Shows Hindi greeting from Karan  
- `/` → Shows input form + language selector

## 📦 **Final Deliverables**
- **App.jsx**: React component with all logic and functionality
- **index.css**: Tailwind setup + custom CSS animations
- **public/index.html**: SEO meta tags and HTML structure
- **public/music/**: Background music files
- **public/image/**: Decorative images
- **package.json**: Dependencies and scripts
- **README.md**: Complete documentation

## 🎊 **Festive Celebration Features**
- **Traditional New Year Elements**: Complete with authentic styling
- **Advanced Animation System**: Multiple layers of visual effects
- **Audio Experience**: Immediate music playback with user control
- **Multilingual Support**: Full language switching capabilities
- **Responsive Design**: Perfect on all devices
- **User Experience**: Intuitive and engaging interactions
- **New Year Theme**: Focus on celebration, hope, and new beginnings
- **Party Atmosphere**: Colorful and vibrant celebration elements
