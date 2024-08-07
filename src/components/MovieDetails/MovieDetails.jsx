import React, { lazy, Suspense } from 'react';
import { useParams, Link, Route, Routes } from 'react-router-dom';
import { getMovieDetails, getMovieCredits, getMovieReviews } from '../Api';
import './MovieDetails.css';

const Cast = lazy(() => import('../Cast/Cast'));
const Reviews = lazy(() => import('../Reviews/Reviews'));

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = React.useState(null);
  const [cast, setCast] = React.useState([]);
  const [reviews, setReviews] = React.useState([]);

  React.useEffect(() => {
    const fetchMovieDetails = async () => {
      const details = await getMovieDetails(movieId);
      setMovie(details);
    };

    const fetchMovieCast = async () => {
      const castData = await getMovieCredits(movieId);
      setCast(castData);
    };

    const fetchMovieReviews = async () => {
      const reviewsData = await getMovieReviews(movieId);
      setReviews(reviewsData);
    };

    fetchMovieDetails();
    fetchMovieCast();
    fetchMovieReviews();
  }, [movieId]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 className="movie-title">{movie.title}</h1>
      <div className="movie-container">
        <img
          className="movie-poster"
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={`${movie.title} poster`}
        />
        <p className="movie-overview">{movie.overview}</p>
      </div>
      <nav className="movie-nav">
        <Link to={`/movies/${movieId}/cast`}>Cast</Link>
        <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
      </nav>
      <hr />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route index element={<div>Default Content for MovieDetails</div>} />
          <Route path="cast" element={<Cast cast={cast} />} />
          <Route path="reviews" element={<Reviews reviews={reviews} />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default MovieDetails;