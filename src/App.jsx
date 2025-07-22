import React, { useState } from 'react';
import { useEffect } from 'react';
import { Search } from 'lucide-react';
import MovieList from './components/MovieList';
import AddMovieForm from './components/AddMovieForm';
import FavoriteList from './components/FavoriteList';

const STORAGE_KEY = 'Akvault-movies';

const getStoredMovies = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [
      { id: 1, title: 'Inception', favorite: false },
      { id: 2, title: 'The Matrix', favorite: false },
      { id: 3, title: 'Interstellar', favorite: false }
    ];
  } catch (error) {
    return [
      { id: 1, title: 'Inception', favorite: false },
      { id: 2, title: 'The Matrix', favorite: false },
      { id: 3, title: 'Interstellar', favorite: false }
    ];
  }
};

const App = () => {
  const [movies, setMovies] = useState(getStoredMovies);

  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(movies));
  }, [movies]);

  const handleAddMovie = (title) => {
    const newMovie = {
      id: Date.now(),
      title,
      favorite: false
    };
    setMovies([...movies, newMovie]);
  };

  const handleDeleteMovie = (id) => {
    setMovies(movies.filter(movie => movie.id !== id));
  };

  const toggleFavorite = (id) => {
    setMovies(
      movies.map(movie =>
        movie.id === id ? { ...movie, favorite: !movie.favorite } : movie
      )
    );
  };

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const favoriteMovies = movies.filter(movie => movie.favorite);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            🎬 AkVault
          </h1>
          <p className="text-slate-300 text-lg">Your personal movie collection</p>
        </div>

        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search your movies..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
            />
          </div>
        </div>

        <div className="mb-12">
          <AddMovieForm onAddMovie={handleAddMovie} />
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <MovieList 
              movies={filteredMovies} 
              onToggleFavorite={toggleFavorite}
              onDeleteMovie={handleDeleteMovie}
            />
          </div>
          <div>
            <FavoriteList 
              favorites={favoriteMovies} 
              onToggleFavorite={toggleFavorite}
              onDeleteMovie={handleDeleteMovie}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;