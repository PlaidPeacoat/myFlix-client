import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";


export const MainView = () => {
    const [movies, setMovies] = useState([null]);
    useEffect(() => {
        fetch("https://openlibrary.org/search.json?q=star+wars")
          .then((response) => response.json())
          .then((data) => {
            const moviesFromApi = data.docs.map((doc) => {
              return {
                id: doc.key,
                title: doc.title,
                image:
    `https://covers.openlibrary.org/b/id/${doc.cover_i}-L.jpg`,
                director: doc.director_name?.[0]
              };
            });
    
            setMovies(moviesFromApi);
          });
      }, []);
    
    
    
      const [selectedMovie, setSelectedMovie] = useState(null);

      if (selectedMovie) {
        return <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} /> //does a ')' need to go here? It is throwing an error.
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
    
  