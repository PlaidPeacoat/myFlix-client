import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";
import "./book-card.scss";
  
  export const MovieCard = ({ movie, onMovieClick }) => {
    return (
      <Card className="h-100">
      <Card.Img variant="top" src={movie.image} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{movie.author}</Card.Text>
        <Button onClick={() => onMovieClick(movie)} variant="link">
          Open
        </Button>
      </Card.Body>
    </Card>
  );
};


  MovieCard.propTypes = {
    movie: PropTypes.shape({
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      author: PropTypes.string,
      genre: PropTypes.shape({
      })
    }).isRequired,
    onMovieClick: PropTypes.func.isRequired
  };
  
  
  