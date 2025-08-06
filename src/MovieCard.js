import React from "react";
import { useNavigate } from "react-router-dom";

function MovieCard({ movie }) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    const formattedTitle = movie.title.toLowerCase().replace(/\s+/g, "-");
    navigate(`/movie/${formattedTitle}`);
  };

  return (
    <div
      className="movie-card"
      onClick={handleCardClick}
      style={{ cursor: "pointer" }}
    >
      <img
        src={movie.posterURL}
        alt={movie.title}
        style={{ width: "150px", height: "220px" }}
      />
      <h3>{movie.title}</h3>
      <p>{movie.description.substring(0, 100)}...</p>
      <p>Rating: {movie.rating}</p>
    </div>
  );
}

export default MovieCard;
