import React from "react";
import { Link } from "react-router-dom";

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
      <Link
        to={`/movie/${movie.id}`}
        style={{ textDecoration: "none", color: "inherit" }}
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
        <h3 style={{ margin: "10px 0 5px", fontSize: "1.1rem" }}>
          {movie.title}
        </h3>
      </Link>
      <div>
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
