import React from "react";
import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";


import "./movie-card.scss";
  
export const MovieCard = ({ movie }) => {
  console.log("movie from movie-card", movie)
  return (
    // <div>
    //   we are here
    // <Card>
    //   <Card.Img variant="top" src={movie.image} />
    //   <Card.Body>
    //     <Card.Title>{movie.Title}</Card.Title>
    //     <Card.Text>{movie.Director}</Card.Text>
    //     <Link to={`/movies/${encodeURIComponent(movie.id)}`}>
    //       <Button variant="link">Open</Button>
    //     </Link>
    //   </Card.Body>
    // </Card>
    // </div>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={movie.Image} />
    <Card.Body>
      <Card.Title>{movie.Title}</Card.Title>
      <Card.Text>
        {movie.Description}
      </Card.Text>
      <Link to={`/movies/${encodeURIComponent(movie._id)}`}>
     <Button variant="link">Open</Button>
     </Link>
    </Card.Body>
  </Card>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    director: PropTypes.string
  }).isRequired
};

  
  
  