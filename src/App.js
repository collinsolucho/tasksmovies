import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./HomePage";
import MovieDetail from "./MovieDetail";

const initialMovies = [
  {
    title: "Inception",
    description:
      "A thief who steals corporate secrets through dream-sharing technology. Given the chance to have his criminal history erased as payment for a task considered to be impossible: 'inception', the implantation of another person's idea into a target's subconscious.",
    posterURL: "https://m.media-amazon.com/images/I/51s+z1yQKGL._AC_SY679_.jpg",
    rating: 8.8,
    trailer: "https://www.youtube.com/embed/YoHD9XEInc0",
  },
  {
    title: "The Matrix",
    description:
      "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers. When Thomas Anderson, aka Neo, joins Morpheus and his crew, he learns the shocking truth about the Matrix.",
    posterURL: "https://m.media-amazon.com/images/I/51EG732BV3L.jpg",
    rating: 8.7,
    trailer: "https://www.youtube.com/embed/vKQi3bBA1y8",
  },
  {
    title: "Interstellar",
    description:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival. Earth's future has been riddled by disasters, famines, and droughts. There is only one way to ensure mankind's survival: Interstellar travel.",
    posterURL: "https://m.media-amazon.com/images/I/91kFYg4fX3L._AC_SY679_.jpg",
    rating: 8.6,
    trailer: "https://www.youtube.com/embed/zSWdZVtXT7E",
  },
];

function App() {
  const [movies, setMovies] = useState(initialMovies);
  const [filterTitle, setFilterTitle] = useState("");
  const [filterRating, setFilterRating] = useState("");

  const handleAddMovie = (movie) => {
    setMovies([
      ...movies,
      { ...movie, rating: Number(movie.rating), trailer: movie.trailer || "" },
    ]);
  };

  const filteredMovies = movies.filter((movie) => {
    const matchesTitle = movie.title
      .toLowerCase()
      .includes(filterTitle.toLowerCase());
    const matchesRating =
      filterRating === "" || movie.rating >= Number(filterRating);
    return matchesTitle && matchesRating;
  });

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                movies={filteredMovies}
                onAddMovie={handleAddMovie}
                filterTitle={filterTitle}
                filterRating={filterRating}
                onTitleChange={setFilterTitle}
                onRatingChange={setFilterRating}
              />
            }
          />
          <Route
            path="/movie/:title"
            element={<MovieDetail movies={movies} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
