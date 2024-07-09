import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import movieData from '../data/movieData';
import '../styles/MovieDetails.css';

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = movieData.find(movie => movie.id === parseInt(id));

  if (!movie) return <h2>Movie not found</h2>;

  const handleBookTickets = () => {
    navigate(`/book/${movie.id}`, { state: { movie } });
  };

  return (
    <div className="movie-details">
      <h2>{movie.name}</h2>
      <img src={`/images/image${id}.jpg`} alt={movie.name} />
      <p>{movie.description}</p>
      <button className="btn" onClick={handleBookTickets}>Book Tickets</button>
    </div>
  );
};

export default MovieDetails;
