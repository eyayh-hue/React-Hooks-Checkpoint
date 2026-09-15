import React, { useState } from "react";

const AddMovie = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [posterURL, setPosterURL] = useState("");
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !posterURL)
      return alert("Veuillez remplir le titre et l'URL");

    onAdd({
      id: Date.now(),
      title,
      description,
      posterURL,
      rating: Number(rating),
    });

    setTitle("");
    setDescription("");
    setPosterURL("");
    setRating(0);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "20px",
        margin: "20px auto",
        maxWidth: "450px",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h3 style={{ marginTop: 0 }}>Ajouter un film</h3>
      <input
        type="text"
        placeholder="Titre"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        style={inputStyle}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={inputStyle}
      />
      <input
        type="text"
        placeholder="Poster URL"
        value={posterURL}
        onChange={(e) => setPosterURL(e.target.value)}
        required
        style={inputStyle}
      />
      <input
        type="number"
        min="0"
        max="5"
        placeholder="Note (0-5)"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        style={inputStyle}
      />
      <button
        type="submit"
        style={{
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Ajouter
      </button>
    </form>
  );
};

const inputStyle = {
  display: "block",
  margin: "10px 0",
  width: "100%",
  padding: "8px",
  boxSizing: "border-box",
};

export default AddMovie;
