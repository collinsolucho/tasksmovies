import React, { useState } from "react";

function AddMovie({ onAdd }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [posterURL, setPosterURL] = useState("");
  const [rating, setRating] = useState("");
  const [trailer, setTrailer] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description || !posterURL || !rating) return;
    onAdd({
      title,
      description,
      posterURL,
      rating,
      trailer: trailer || "",
    });
    setTitle("");
    setDescription("");
    setPosterURL("");
    setRating("");
    setTrailer("");
  };

  return (
    <form className="add-movie" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="Poster URL"
        value={posterURL}
        onChange={(e) => setPosterURL(e.target.value)}
      />
      <input
        type="text"
        placeholder="Trailer URL (YouTube embed)"
        value={trailer}
        onChange={(e) => setTrailer(e.target.value)}
      />
      <input
        type="number"
        placeholder="Rating"
        value={rating}
        min="0"
        max="10"
        onChange={(e) => setRating(e.target.value)}
      />
      <button type="submit">Add Movie</button>
    </form>
  );
}

export default AddMovie;
