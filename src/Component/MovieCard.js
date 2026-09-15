import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div
      style={{
        border: "1px solid #e0e0e0",
        borderRadius: "12px",
        padding: "15px",
        width: "240px",
        margin: "15px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
        justify: "space-between",
      }}
    >
      <img
        src={movie.posterURL}
        alt={movie.title}
        style={{
          width: "100%",
          height: "320px",
          objectFit: "cover",
          borderRadius: "8px",
        }}
      />
      <div style={{ marginTop: "10px" }}>
        <h3 style={{ margin: "10px 0 5px", fontSize: "1.1rem" }}>
          {movie.title}
        </h3>
        <p
          style={{
            color: "#555",
            fontSize: "0.85rem",
            height: "60px",
            overflow: "hidden",
          }}
        >
          {movie.description}
        </p>
        <div
          style={{ fontWeight: "bold", color: "#ffb400", marginTop: "10px" }}
        >
          {"★".repeat(movie.rating)}
          {"☆".repeat(5 - movie.rating)} ({movie.rating}/5)
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
