import React, { useEffect, useState } from "react";
import axios from "axios";
import '../styles/MovieCarousel.css'

const API_KEY = "75965813";

function MovieCarousel() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await axios.get("http://www.omdbapi.com/", {
          params: {
            s: "horror", // Search term to fetch initial movies
            apikey: API_KEY,
          },
        });

        if (res.data.Search) {
          setMovies(res.data.Search);
        } else {
          setMovies([]);
        }
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
      setLoading(false);
    };
    fetchMovies();
  }, []);

  if (loading) {
    return <div>Content is Loading...</div>; }

  return (

    <div className="movie-carousel">
      {movies.length > 0 ? (
        movies.map((movie) => (
          <div className="movie-box" key={movie.imdbID}>
            <img
              src={movie.Poster}
              alt={movie.Title}
              className="movie-poster"
            />
            <h3 className="movie-title">{movie.Title}</h3>
          </div>
        ))
      ) : (
        <div>No Movies Found</div>
      )}
    </div>


  );
}


export default MovieCarousel;
