import React from "react";

function Filter({ filterTitle, filterRating, onTitleChange, onRatingChange }) {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Filter by title"
        value={filterTitle}
        onChange={(e) => onTitleChange(e.target.value)}
      />
      <input
        type="number"
        placeholder="Filter by rating"
        value={filterRating}
        min="0"
        max="10"
        onChange={(e) => onRatingChange(e.target.value)}
      />
    </div>
  );
}

export default Filter;
