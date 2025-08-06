import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function MovieDetail({ movies }) {
  const { title } = useParams();
  const navigate = useNavigate();

  const movie = movies.find(
    (movie) => movie.title.toLowerCase().replace(/\s+/g, "-") === title
  );

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div className="movie-detail">
      <button onClick={() => navigate("/")} className="back-button">
        ← Back to Home
      </button>

      <div className="movie-detail-content">
        <div className="movie-poster">
          <img
            src={movie.posterURL}
            alt={movie.title}
            style={{ width: "300px", height: "450px" }}
          />
        </div>

        <div className="movie-info">
          <h1>{movie.title}</h1>
          <p className="rating">Rating: {movie.rating}/10</p>

          <div className="description-section">
            <h3>Description</h3>
            <p>{movie.description}</p>
          </div>

          {movie.trailer && (
            <div className="trailer-section">
              <h3>Trailer</h3>
              <div className="trailer-container">
                <iframe
                  width="560"
                  height="315"
                  src={movie.trailer}
                  title={`${movie.title} Trailer`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
