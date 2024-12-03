import React, { useState } from 'react';
import MovieList from './MovieList';
import Filter from './Filter';

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: 'Inception',
      description: 'A mind-bending thriller',
      posterURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK7UYbWkCihBNL-OBMxytFHUjdY_YZ0q2GzA&s',
      rating: 5,
    },
    {
      title: 'Interstellar',
      description: 'A journey through space and time',
      posterURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk2r_4Xxetfzppo3zLUvGAwNuK3cVkCVxfnQ&s',
      rating: 4.5,
    },
    {
      title: 'Retribution',
      description: 'Une bombe a été placée dans la voiture',
      posterURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzM1Mu6Fvf-WXg1YGwg0T343m0pRDjpBEkqg&s',
      rating: 4.5,
    },

  ]);

  const [filters, setFilters] = useState({ title: '', rating: '' });

  const handleFilter = (name, value) => {
    setFilters({ ...filters, [name]: value });
  };

  const filteredMovies = movies.filter((movie) => {
    return (
      movie.title.toLowerCase().includes(filters.title.toLowerCase()) &&
      (filters.rating ? movie.rating >= Number(filters.rating) : true)
    );
  });

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  return (
    <div className="App" style={{ padding: '20px' }}>
      <h1>Application de Cinéma</h1>
      <Filter onFilter={handleFilter} />
      <div>
        <button
          onClick={() =>
            addMovie({
              title: 'Avatar',
              description: 'A visually stunning epic',
              posterURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKVw3h0bcZiyQ-w2chK8_nbg7kZw47XpP7gQ&s',
              rating: 4,
            })
          }
        >
          Ajouter un film
        </button>
      </div>
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default App;
