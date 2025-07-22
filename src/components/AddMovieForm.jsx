import React, { useState } from 'react';
import { Plus } from 'lucide-react';

const AddMovieForm = ({ onAddMovie }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (title.trim()) {
      onAddMovie(title);
      setTitle('');
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
        <h3 className="text-xl font-semibold text-white mb-4 text-center">Add New Movie</h3>
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Enter movie title..."
            value={title}
            onChange={e => setTitle(e.target.value)}
            className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
          />
          <button 
            type="submit"
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-medium hover:from-purple-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transform hover:scale-105 transition-all duration-200 flex items-center gap-2"
          >
            <Plus className="w-5 h-5" />
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddMovieForm;