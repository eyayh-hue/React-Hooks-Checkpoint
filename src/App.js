import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import MovieList from "./Component/MovieList";
import Filter from "./Component/Filter";
import AddMovie from "./Component/AddMovie";
import MovieDetails from "./Component/MovieDetails";

const App = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Inception",
      description:
        "Un voleur qui s'infiltre dans les rêves des autres pour dérober des secrets est chargé d'une ultime mission : implanter une idée dans l'esprit d'un héritier.",
      posterURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjdhunAp1tS2_sCHf1rZUqd94v0mLoq2nHrAYFoyBWlg&s=10",
      trailerURL: "<https://www.youtube.com/embed/YoHD9XEInc0",
      rating: 5,
    },
    {
      id: 2,
      title: "Interstellar",
      description:
        "Alors que la Terre se meurt, une équipe d'explorateurs franchit un trou de ver pour trouver une nouvelle planète habitable pour l'humanité.",
      posterURL:
        "https://m.media-amazon.com/images/I/71JC2qvPx5L._AC_UF894,1000_QL80_.jpg",
      trailerURL: "https://www.youtube.com/embed/zSWdZVtXT7E",
      rating: 5,
    },
    {
      id: 3,
      title: "The Dark Knight",
      description:
        "Batman augmente les mises dans sa guerre contre le crime. Avec l'aide du lieutenant Jim Gordon et du procureur Harvey Dent, il s'attaque au Joker.",
      posterURL: "https://static.posters.cz/image/1300/184446.jpg",
      trailerURL: "https://www.youtube.com/embed/EXeTwQWrcwY",
      rating: 4,
    },
    {
      id: 4,
      title: "Avatar",
      description:
        "Un marine paraplégique envoyé sur la lune Pandora pour une mission unique se retrouve déchiré entre suivre ses ordres et protéger le monde qu'il considère comme sa maison.",
      posterURL: "https://cdng.europosters.eu/pod_public/750/262965.jpg",
      trailerURL: "https://www.youtube.com/embed/5PSNL1qE6VY",
      rating: 4,
    },
    {
      id: 5,
      title: "Gladiator",
      description:
        "Un ancien général romain cherche à se venger de l'empereur corrompu qui a assassiné sa famille et l'a condamné à l'esclavage.",
      posterURL:
        "https://cdn.displate.com/artwork/857x1200/2024-11-18/d0e448c7-98e3-4bf3-8cf7-883a3c2f731f.jpg",
      trailerURL: "https://www.youtube.com/embed/owK1qxDselE",
      rating: 5,
    },
    {
      id: 6,
      title: "Pulp Fiction",
      description:
        "Les vies de deux tueurs à gages de la mafia, d'un boxeur, de la femme d'un gangster et d'un couple de braqueurs s'entremêlent dans quatre histoires de violence et de rédemption.",
      posterURL:
        "https://m.media-amazon.com/images/I/61tWAHWr0lL._AC_UF1000,1000_QL80_.jpg",
      trailerURL: "https://www.youtube.com/embed/s7EdQ4FqbhY",
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
      <Routes>
        {/* Route Principale (Page d'accueil) */}
        <Route
          path="/"
          element={
            <>
              <h1 style={{ textAlign: "center", color: "#333" }}>
                Ma Cinémathèque
              </h1>
              <Filter
                titleFilter={titleFilter}
                ratingFilter={ratingFilter}
                onTitleChange={setTitleFilter}
                onRatingChange={setRatingFilter}
              />
              <AddMovie onAdd={handleAddMovie} />
              <MovieList movies={filteredMovies} />
            </>
          }
        />

        <Route path="/movie/:id" element={<MovieDetails movies={movies} />} />
      </Routes>
    </div>
  );
};

export default App;
