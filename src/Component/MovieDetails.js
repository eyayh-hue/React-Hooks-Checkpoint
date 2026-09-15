import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const MovieDetails = ({ movies }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Recherche du film correspondant à l'ID
  const movie = movies.find((m) => m.id === Number(id));

  if (!movie) {
    return (
      <div style={{ textAlign: 'center', margin: '50px' }}>
        <h2>Film introuvable !</h2>
        <button onClick={() => navigate('/')}>Retour à l'accueil</button>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
      <h1>{movie.title}</h1>
      <p style={{ fontSize: '1.1rem', lineHeight: '1.6', margin: '20px 0' }}>{movie.description}</p>
      
      {/* Intégration de la bande-annonce vidéo */}
      <div style={{ margin: '30px 0' }}>
        <iframe
          width="100%"
          height="450"
          src={movie.trailerURL}
          title={`Bande-annonce de ${movie.title}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ borderRadius: '12px' }}
        ></iframe>
      </div>

      {/* Bouton pour retourner à la page d'accueil */}
      <button 
        onClick={() => navigate('/')} 
        style={{
          padding: '10px 25px',
          fontSize: '1rem',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer'
        }}
      >
        Retour à l'accueil
      </button>
    </div>
  );
};

export default MovieDetails;