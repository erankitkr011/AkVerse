import React from 'react';
import { Heart, Film, Trash2 } from 'lucide-react';

const MovieCard = ({ movie, onToggleFavorite, onDeleteMovie }) => (
  <div className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/20 hover:border-white/30 transform hover:scale-105 transition-all duration-300">
    <div className="flex items-center gap-4 mb-4">
      <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
        <Film className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-xl font-semibold text-white group-hover:text-purple-300 transition-colors">
        {movie.title}
      </h3>
    </div>
    
    <div className="flex gap-3">
      <button 
        onClick={() => onToggleFavorite(movie.id)}
        className={`flex-1 px-4 py-3 rounded-xl font-medium transition-all duration-200 flex items-center justify-center gap-2 ${
          movie.favorite 
            ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white hover:from-red-600 hover:to-pink-600' 
            : 'bg-white/10 text-slate-300 hover:bg-white/20 border border-white/20'
        }`}
      >
        <Heart className={`w-4 h-4 ${movie.favorite ? 'fill-current' : ''}`} />
        {movie.favorite ? 'Unfavorite' : 'Favorite'}
      </button>
      
      <button 
        onClick={() => onDeleteMovie(movie.id)}
        className="px-4 py-3 bg-red-500/20 text-red-400 border border-red-500/30 rounded-xl font-medium hover:bg-red-500/30 hover:text-red-300 transition-all duration-200 flex items-center justify-center"
        title="Delete movie"
      >
        <Trash2 className="w-4 h-4" />
      </button>
    </div>
  </div>
);

export default MovieCard;