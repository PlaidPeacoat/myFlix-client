import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";


export const MainView = () => {
    const [movies, setMovies] = useState([
        {
          id: 1,
          title: "Silence of the Lambs",
          image:
            "https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
          director: "Jonathan Demme"
        },
        {
          id: 2,
          title: "The Lion King",
          image:
            "https://m.media-amazon.com/images/M/MV5BYTYxNGMyZTYtMjE3MS00MzNjLWFjNmYtMDk3N2FmM2JiM2M1XkEyXkFqcGdeQXVyNjY5NDU4NzI@._V1_.jpg",
          director: "Roger Allers"
        },
        {
          id: 3,
          title: "Inglorious Basterds",
          image:
            "https://m.media-amazon.com/images/I/81+4I8lZZeL._AC_UF894,1000_QL80_.jpg",
          director: "Quentin Tarantino"
        },
        {
          id: 4,
          title: "Django Unchained",
          image:
            "https://image.tmdb.org/t/p/w500/szvidvi0Fo4j2gmMtk1sNe1rkzw.jpg",
          director: "Quentin Tarantino"
        },
        {
          id: 5,
          title: "Mrs. Doubtfire",
          image:
            "https://images-na.ssl-images-amazon.com/images/I/41MBLi5a4jL._SX384_BO1,204,203,200_.jpg",
          director: "Chris Columbus"
        }
      ]);
    
      const [selectedMovie, setSelectedMovie] = useState(null);

      if (selectedMovie) {
        return <MovieView movie={selectedMovie} onBackClick={() => setSelectedBook(null)} /> //does a ')' need to go here? It is throwing an error.
        ;
      }
    
      if (movies.length === 0) {
        return <div>The list is empty!</div>;
      }
    
      return (
        <div>
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onClick={() => {
                setSelectedMovie(movie);
              }}
            />
          ))}
        </div>
      );
    }
    
    
<MovieCard
          key={movie.id}
          movie={movie}
          onMovieClick={(newSelectedMovie) => {
            setSelectedMovie(newSelectedMovie);
          }}
        />
    
  