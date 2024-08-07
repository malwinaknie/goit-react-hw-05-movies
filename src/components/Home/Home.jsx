import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTrendingMovies } from '../Api';
import './Home.css'; // Dodaj ten import

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(data => setTrendingMovies(data));
  }, []);

  return (
    <div className="wrapper">
      <h1 className="home-title">Popular Movies Today</h1>
      <ul className="home-list">
        {trendingMovies.map(movie => (
          <li className="home-item" key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;