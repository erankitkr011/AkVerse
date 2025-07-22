import React from 'react';
import { Heart } from 'lucide-react';
import MovieCard from './MovieCard';

const FavoriteList = ({ favorites, onToggleFavorite, onDeleteMovie }) => (
  <div className="space-y-6">
    <div className="flex items-center gap-3 mb-6">
      <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg flex items-center justify-center">
        <Heart className="w-5 h-5 text-white fill-current" />
      </div>
      <h2 className="text-2xl font-bold text-white">Favorite Movies</h2>
      <span className="px-3 py-1 bg-white/10 rounded-full text-sm text-slate-300 border border-white/20">
        {favorites.length} favorites
      </span>
    </div>
    
    {favorites.length === 0 ? (
      <div className="text-center py-12">
        <Heart className="w-16 h-16 text-slate-400 mx-auto mb-4" />
        <p className="text-slate-400 text-lg mb-2">No favorite movies yet</p>
        <p className="text-slate-500 text-sm">Add some movies to your favorites!</p>
      </div>
    ) : (
      <div className="grid gap-4">
        {favorites.map(movie => (
          <MovieCard 
            key={movie.id} 
            movie={movie} 
            onToggleFavorite={onToggleFavorite}
            onDeleteMovie={onDeleteMovie}
          />
        ))}
      </div>
    )}
  </div>
);

export default FavoriteList;