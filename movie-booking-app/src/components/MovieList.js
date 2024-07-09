import React from 'react';
import { Link } from 'react-router-dom';
import movieData from '../data/movieData';
import '../styles/MovieList.css';

const MovieList = () => {
  return (
    <div className="movie-list">
      <h2>Movie List</h2>
      <div className="grid-container">
        {movieData.map((movie, index) => (
          <div className="movie-card" key={index}>
            <img src={`/images/image${index + 1}.jpg`} alt={movie.name} />
            <div className="movie-info">
              <h3>{movie.name}</h3>
              <Link to={`/movie/${movie.id}`} className="btn">
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
