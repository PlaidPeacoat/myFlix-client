
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";
import { SignupView } from "../signup-view/signup-view";
import NavigationBar from "../navigation-bar/navigation-bar";

export const MainView = () => {
  const [movies, setMovies] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("https://openlibrary.org/search.json?q=star+wars")
      .then((response) => response.json())
      .then((data) => {
        const moviesFromApi = data.docs.map((doc) => {
          return {
            id: doc.key,
            title: doc.title,
            image: `https://covers.openlibrary.org/b/id/${doc.cover_i}-L.jpg`,
            author: doc.author_name?.[0]
          };
        });

        setMovies(moviesFromApi);
      });
  }, []);

  return (
    <BrowserRouter>
      <Row className="justify-content-md-center">
        <Routes>
          <Route
            path="/signup"
            element={
              <>
                {user ? (
                  <Navigate to="/" />
                ) : (
                  <Col md={5}>
                    <SignupView />
                  </Col>
                )}
              </>

            }
          />
          <Route
            path="/login"
            element={
              <>
                {user ? (
                  <Navigate to="/" />
                ) : (
                  <Col md={5}>
                    <LoginView onLoggedIn={(user) => setUser(user)} />
                  </Col>
                )}
              </>

            }
          />
          <Route
            path="/movies/:movieId"
            element={
              <>
                {!user ? (
                  <Navigate to="/login" replace />
                ) : movies.length === 0 ? (
                  <Col>The list is empty!</Col>
                ) : (
                  <Col md={8}>
                    <MovieView movies={movies} />
                  </Col>
                )}
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                {!user ? (
                  <Navigate to="/login" replace />
                ) : movies.length === 0 ? (
                  <Col>The list is empty!</Col>
                ) : (
                  <>
                    {movies.map((movie) => (
                      <Col className="mb-4" key={movie.id} md={3}>
                        <MovieCard movie={movie} />
                      </Col>
                    ))}
                  </>
                )}
              </>
            }
          />
        </Routes>
      </Row>
    </BrowserRouter>
  );
};






  
  useEffect(() => {
    if (!token) return;

    fetch("https://movieapialexsears.herokuapp.com//movies", {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then((response) => response.json())
    .then((movies) => {
      setMovies(movies);

    });
}, [token]);



  if (!user) {
    return (
      <Col md={5}>
        <LoginView onLoggedIn={(user, token) => {
          setUser(user);
          setToken(token);
        }} />
        or
        <SignupView />
      </Col>
    );
  }



  if (selectedMovie) {
    return (
      <Col md={8}>
      <MovieView 
      movie={selectedMovie} 
      onBackClick={() => setSelectedMovie(null)} 
      />
      </Col>
    );
  }

  if (movies.length === 0) {
    return <div>The list is empty!</div>;
  }

  return (
    <div>
     {movies.map((movie) => (
            <Col className="mb-5" key={movie.id} md={3}>
              <MovieCard
                movie={movie}
                onMovieClick={(newSelectedMovie) => {
                  setSelectedMovie(newSelectedMovie);
                }}
              />
            </Col>
          ))}
    </div>
  );

<button onClick={() => { setUser(null); setToken(null); localStorage.clear(); }}>Logout</button>