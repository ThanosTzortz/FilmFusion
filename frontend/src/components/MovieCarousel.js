import React from "react";
import '../styles/MovieCarousel.css';

function MovieCarousel({ movies }) {
  if (!movies || movies.length === 0) {
    return <div>No Movies Found</div>;
  }

  return (
    <div className="movie-carousel">
      {movies.map((movie) => (
        <div className="movie-box" key={movie.imdbID}>
          <img
            src={movie.Poster}
            alt={movie.Title}
            className="movie-poster"
          />
          <h3 className="movie-title">{movie.Title}</h3>
        </div>
      ))}
    </div>
  );
}

export default MovieCarousel;
