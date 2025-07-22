# 🎬 AkVault

A beautiful, modern movie collection manager built with React, TypeScript, and Tailwind CSS. Keep track of your favorite movies with an elegant, production-ready interface.

![AkVault Preview](https://images.unsplash.com/photo-1489599735734-79b4169c4388?w=1200&h=600&fit=crop&crop=center)

## ✨ Features

### Core Functionality
- **📝 Add Movies**: Easily add new movies to your collection
- **⭐ Favorite System**: Mark movies as favorites with beautiful heart animations
- **🔍 Real-time Search**: Instantly filter movies as you type
- **🗑️ Delete Movies**: Remove movies from your collection with confirmation
- **💾 Local Storage**: Your movie collection persists between browser sessions

### Design & UX
- **🎨 Modern UI**: Glass morphism design with gradient backgrounds
- **📱 Responsive**: Optimized for desktop, tablet, and mobile devices
- **🎭 Smooth Animations**: Hover effects and micro-interactions
- **🌙 Dark Theme**: Elegant dark interface with purple/pink accents
- **🎯 Intuitive Layout**: Clean, organized interface with clear visual hierarchy

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd cinevault
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to see the app in action!

## 🛠️ Built With

### Core Technologies
- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework

### UI Components
- **Lucide React** - Beautiful, customizable icons
- **Glass Morphism** - Modern translucent design elements
- **CSS Grid & Flexbox** - Responsive layout system

### Development Tools
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing
- **Autoprefixer** - Automatic vendor prefixes

## 📁 Project Structure

```
src/
├── components/
│   ├── AddMovieForm.tsx    # Form for adding new movies
│   ├── FavoriteList.tsx    # Display favorite movies
│   ├── MovieCard.tsx       # Individual movie card component
│   └── MovieList.tsx       # Display all movies
├── App.tsx                 # Main application component
├── main.tsx               # Application entry point
└── index.css              # Global styles and Tailwind imports
```

## 🎯 Usage

### Adding Movies
1. Type a movie title in the "Add New Movie" form
2. Click the "Add" button or press Enter
3. Your movie will appear in the "All Movies" section

### Managing Favorites
1. Click the heart button on any movie card
2. Favorited movies will appear in the "Favorite Movies" section
3. Click the heart again to remove from favorites

### Searching Movies
1. Use the search bar at the top of the page
2. Results filter in real-time as you type
3. Search works across all movie titles

### Deleting Movies
1. Click the trash icon on any movie card
2. The movie will be permanently removed from your collection
3. Deleted movies are also removed from favorites if applicable

## 💾 Data Persistence

CineVault automatically saves your movie collection to your browser's local storage:

- **Automatic Saving**: Changes are saved instantly
- **Session Persistence**: Your movies remain after closing the browser
- **Fallback Data**: Includes sample movies for first-time users
- **Error Handling**: Graceful fallback if storage is unavailable

## 🎨 Design System

### Color Palette
- **Primary**: Purple to Pink gradients (`from-purple-600 to-pink-600`)
- **Secondary**: Blue to Cyan gradients (`from-blue-500 to-cyan-500`)
- **Background**: Dark slate gradients (`from-slate-900 via-purple-900`)
- **Glass Effects**: White with opacity (`bg-white/10`)

### Typography
- **Headings**: Bold, gradient text effects
- **Body**: Clean, readable fonts with proper contrast
- **Interactive**: Hover states and focus indicators

### Animations
- **Hover Effects**: Scale transforms and color transitions
- **Button States**: Smooth color and shadow changes
- **Card Interactions**: Subtle lift effects on hover

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run ESLint
```

## 📱 Responsive Design

CineVault is fully responsive and optimized for:

- **Desktop**: Full-width layout with side-by-side sections
- **Tablet**: Stacked layout with optimized spacing
- **Mobile**: Single-column layout with touch-friendly buttons

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

### Deploy to Netlify
1. Build the project: `npm run build`
2. Upload the `dist/` folder to Netlify
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts to deploy

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 🙏 Acknowledgments

- **Tailwind CSS** for the amazing utility-first CSS framework
- **Lucide** for the beautiful icon set
- **Unsplash** for the stunning movie-themed imagery
- **Vite** for the lightning-fast development experience

## 📞 Support

If you have any questions or run into issues:

1. Check the [Issues](../../issues) page
2. Create a new issue with detailed information
3. Include your browser version and steps to reproduce

---

**Made with ❤️ and lots of ☕**

*Enjoy managing your movie collection with AkVault!*