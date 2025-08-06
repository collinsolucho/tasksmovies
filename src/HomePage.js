import React from "react";
import MovieList from "./MovieList";
import Filter from "./Filter";
import AddMovie from "./AddMovie";

function HomePage({
  movies,
  onAddMovie,
  filterTitle,
  filterRating,
  onTitleChange,
  onRatingChange,
}) {
  return (
    <div>
      <h1>My Movie App</h1>
      <Filter
        filterTitle={filterTitle}
        filterRating={filterRating}
        onTitleChange={onTitleChange}
        onRatingChange={onRatingChange}
      />
      <AddMovie onAdd={onAddMovie} />
      <MovieList movies={movies} />
    </div>
  );
}

export default HomePage;
