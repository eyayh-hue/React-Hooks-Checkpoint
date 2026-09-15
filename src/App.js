import React, { useState } from "react";
import MovieList from "./Component/MovieList";
import Filter from "./Component/Filter";
import AddMovie from "./Component/AddMovie";

const App = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Inception",
      description:
        "Un voleur qui s'infiltre dans les rêves des autres pour dérober des secrets.",
      posterURL:
        "https://image.tmdb.org/t/p/original/xlaY2zyzMfkhk0HSC5VUwzoZPU1.jpg",
      rating: 5,
    },
    {
      id: 2,
      title: "Interstellar",
      description:
        "Une équipe d'explorateurs voyage à travers un trou de ver dans l'espace.",
      posterURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1TyRV0JvCVEcms_BO9hZaPRtkEe78o25sB95upv3esw&s=10",
      rating: 5,
    },
    {
      id: 3,
      title: "The Dark Knight",
      description:
        "Batman affronte le Joker, un criminel sadique qui sème le chaos à Gotham.",
      posterURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3PhCcXO0pyxx4bXbkEJbCmPNQNj7nmFjdN1gPy0JCsw&s=10",
      rating: 4,
    },
    {
      id: 4,
      title: "Avatar",
      description:
        "Un marine paraplégique est envoyé sur la lune Pandora pour une mission unique.",
      posterURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF6LXMXyTh9f9X7pbsatyMX1Qmd3lV2VetqXRTe4o7Kg&s=10",
      rating: 4,
    },
    {
      id: 5,
      title: "Gladiator",
      description:
        "Un général romain trahi cherche à se venger de l'empereur corrompu.",
      posterURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7Qp7DkHdlZmjMGrntgn_Q3ilJ2a2SNkQWbPq8HUSb5Q&s=10",
      rating: 5,
    },
    {
      id: 6,
      title: "Pulp Fiction",
      description:
        "Les vies de deux tueurs à gages, d'un boxeur et de deux braqueurs s'entremêlent.",
      posterURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7U9aLgY1F4GJg8sMnFlrP8TIMcQ5K1c38Wr7LiF9LEw&s=10",
      rating: 3,
    },
  ]);

  const [titleFilter, setTitleFilter] = useState("");
  const [ratingFilter, setRatingFilter] = useState(0);

  const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const filteredMovies = movies.filter((movie) => {
    const matchesTitle = movie.title
      .toLowerCase()
      .includes(titleFilter.toLowerCase());
    const matchesRating = movie.rating >= ratingFilter;
    return matchesTitle && matchesRating;
  });

  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f4f4f9",
        minHeight: "100vh",
      }}
    >
      <h1 style={{ textAlign: "center", color: "#333" }}>Ma Cinémathèque</h1>

      <Filter
        titleFilter={titleFilter}
        ratingFilter={ratingFilter}
        onTitleChange={setTitleFilter}
        onRatingChange={setRatingFilter}
      />

      <AddMovie onAdd={handleAddMovie} />

      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default App;
