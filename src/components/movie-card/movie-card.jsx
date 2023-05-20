import React from "react";
import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";


import "./movie-card.scss";
  
export const MovieCard = ({ movie, onClick }) => {
  console.log("movie from movie-card", movie)
  const onClick = () => {
    navigate(`/movies/${encodeURIComponent(movie._id)}`);
  };
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
    <Card.Img variant="top" src={movie.image} />
    <Card.Body>
      <Card.Title>{movie.Title}</Card.Title>
      <Card.Text>
        {movie.description}
      </Card.Text>
      <Link to={`/movies/${encodeURIComponent(movie._id)}`}>
     <Button variant="primary" >Open</Button>
     </Link>
    </Card.Body>
  </Card>
  );
};

// MovieCard.propTypes = {
//   movie: PropTypes.shape({
//     title: PropTypes.string.isRequired,
//     image: PropTypes.string.isRequired,
//     director: PropTypes.string
//   }).isRequired
// };
MovieCard.propTypes = {
  movie: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
    genre: PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired,
    director: PropTypes.shape({
      name: PropTypes.string.isRequired,
      bio: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
  
  
  