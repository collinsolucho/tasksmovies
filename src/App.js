import React, { useState } from "react";
import "./App.css";
import MovieList from "./MovieList";
import Filter from "./Filter";
import AddMovie from "./AddMovie";

const initialMovies = [
  {
    title: "Inception",
    description:
      "A thief who steals corporate secrets through dream-sharing technology.",
    posterURL: "https://m.media-amazon.com/images/I/51s+z1yQKGL._AC_SY679_.jpg",
    rating: 8.8,
  },
  {
    title: "The Matrix",
    description:
      "A computer hacker learns about the true nature of his reality.",
    posterURL: "https://m.media-amazon.com/images/I/51EG732BV3L.jpg",
    rating: 8.7,
  },
  {
    title: "Interstellar",
    description: "A team of explorers travel through a wormhole in space.",
    posterURL: "https://m.media-amazon.com/images/I/91kFYg4fX3L._AC_SY679_.jpg",
    rating: 8.6,
  },
];

function App() {
  const [movies, setMovies] = useState(initialMovies);
  const [filterTitle, setFilterTitle] = useState("");
  const [filterRating, setFilterRating] = useState("");

  const handleAddMovie = (movie) => {
    setMovies([...movies, { ...movie, rating: Number(movie.rating) }]);
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
    <div className="App">
      <h1>My Movie App</h1>
      <Filter
        filterTitle={filterTitle}
        filterRating={filterRating}
        onTitleChange={setFilterTitle}
        onRatingChange={setFilterRating}
      />
      <AddMovie onAdd={handleAddMovie} />
      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default App;
