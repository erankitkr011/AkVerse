import React from 'react';
import { Film } from 'lucide-react';
import MovieCard from './MovieCard';

const MovieList = ({ movies, onToggleFavorite, onDeleteMovie }) => (
  <div className="space-y-6">
    <div className="flex items-center gap-3 mb-6">
      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
        <Film className="w-5 h-5 text-white" />
      </div>
      <h2 className="text-2xl font-bold text-white">All Movies</h2>
      <span className="px-3 py-1 bg-white/10 rounded-full text-sm text-slate-300 border border-white/20">
        {movies.length} movies
      </span>
    </div>
    
    {movies.length === 0 ? (
      <div className="text-center py-12">
        <Film className="w-16 h-16 text-slate-400 mx-auto mb-4" />
        <p className="text-slate-400 text-lg">No movies found</p>
      </div>
    ) : (
      <div className="grid gap-4">
        {movies.map(movie => (
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

export default MovieList;