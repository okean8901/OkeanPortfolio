# Pham Le Truong Portfolio - React Version

This is the React.js version of the portfolio website, converted from the original HTML/CSS/JS version while maintaining the same design and functionality.

## Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI**: Clean and modern design with smooth animations
- **Interactive Elements**:
  - Particle background animation
  - Scroll progress bar
  - Smooth scrolling navigation
  - Project filtering
  - Contact form with validation
  - Mobile-friendly navigation menu
- **Performance Optimized**: Built with React for better performance and maintainability

## Technologies Used

- **React 18**: Modern React with hooks
- **CSS3**: Custom CSS with CSS variables and animations
- **Particles.js**: Interactive particle background
- **FontAwesome**: Icon library
- **Responsive Design**: Mobile-first approach

## Project Structure

```
src/
├── components/
│   ├── Header.js          # Navigation header
│   ├── Hero.js             # Hero section with typing effect
│   ├── About.js            # About section with stats
│   ├── Skills.js           # Skills section with progress bars
│   ├── Projects.js         # Projects section with filtering
│   ├── Contact.js          # Contact form and info
│   ├── Footer.js           # Footer
│   ├── SocialLinks.js      # Social media links
│   ├── ScrollProgress.js   # Scroll progress bar
│   └── ParticlesBackground.js # Particle background
├── App.js                  # Main App component
├── App.css                 # Main styles
├── index.js               # React entry point
└── index.css              # Base styles

public/
├── IMG/                    # Images
├── fontawesome-free-6.5.2/ # FontAwesome assets
├── CV_QA_Pham_Le_Truong.pdf    # Resume PDF (VI)
├── CV_QA_PhamLeTruong_EN.pdf   # Resume PDF (EN)
├── index.html             # HTML template
└── manifest.json          # PWA manifest
```

## Installation & Setup

1. **Install Dependencies**:

   ```bash
   npm install
   ```

2. **Start Development Server**:

   ```bash
   npm start
   ```

   The app will open at `http://localhost:3000`

3. **Build for Production**:
   ```bash
   npm run build
   ```

## Key Features Converted

### 1. Navigation

- Smooth scrolling between sections
- Mobile-responsive hamburger menu
- Active section highlighting
- Header scroll effects

### 2. Hero Section

- Typing animation for description text
- Animated profile image with rotating border
- Call-to-action buttons

### 3. About Section

- Education information
- Statistics with hover effects
- Responsive grid layout

### 4. Skills Section

- Animated progress bars
- Intersection Observer for scroll animations
- Hover effects on skill cards

### 5. Projects Section

- Project filtering by category
- Hover effects on project cards
- GitHub and live demo links
- Technology tags

### 6. Contact Section

- Form validation
- Notification system
- Contact information display
- Resume download section

### 7. Interactive Elements

- Particle background with mouse interaction
- Scroll progress indicator
- Social media links
- Mobile-optimized navigation

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Features

- Lazy loading for images
- Throttled scroll events
- Optimized animations
- Responsive images
- Efficient state management

## Development Notes

- All original functionality has been preserved
- CSS animations and transitions maintained
- Mobile responsiveness improved
- Code structure optimized for React
- Accessibility features maintained

## Original vs React Version

| Feature          | Original    | React Version    |
| ---------------- | ----------- | ---------------- |
| Structure        | HTML/CSS/JS | React Components |
| State Management | Vanilla JS  | React Hooks      |
| Animations       | CSS + JS    | CSS + React      |
| Performance      | Good        | Optimized        |
| Maintainability  | Basic       | High             |
| Scalability      | Limited     | Excellent        |

The React version maintains 100% visual and functional parity with the original while providing better code organization, performance, and maintainability.
