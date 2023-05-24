import React from "react";
import PropTypes from "prop-types";
import { Button, Card, Col } from "react-bootstrap";
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
    <Col>
    <Card
        style={{ width: "20rem" }}
        className="movie-card p-0"
      >
    <Card.Img variant="top" className="rounded-0"
          style={{
            height: '100%',
            objectFit: 'cover',
            maxWidth: '100%'}} src={movie.image} />
    <Card.Body className="d-flex flex-column ">
      <Card.Title>{movie.Title}</Card.Title>
      <Card.Text>
      {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-person-video2 me-2"
              viewBox="0 0 16 16"
            >
            <path d="M10 9.05a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
              <path d="M2 1a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2ZM1 3a1 1 0 0 1 1-1h2v2H1V3Zm4 10V2h9a1 1 0 0 1 1 1v9c0 .285-.12.543-.31.725C14.15 11.494 12.822 10 10 10c-3.037 0-4.345 1.73-4.798 3H5Zm-4-2h3v2H2a1 1 0 0 1-1-1v-1Zm3-1H1V8h3v2Zm0-3H1V5h3v2Z" />
            </svg>   */}
        {movie.description}
      </Card.Text>
      <Link to={`/movies/${encodeURIComponent(movie._id)}`}>
     <Button variant="primary" >Open</Button>
     </Link>
    </Card.Body>
  </Card>
  </Col>
  );
};
MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    director: PropTypes.string
  }).isRequired
};

  
  
  