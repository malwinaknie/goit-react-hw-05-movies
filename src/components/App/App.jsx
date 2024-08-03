import React from "react";
import { BrowserRouter as Router, Routes, Link } from "react-router-dom";
import Home from '../Home/Home';
import Movies from '../Movies/Movies';
import MovieDetails from '../MovieDetails/MovieDetails';
import './App.css';

const App = () => {
    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/movies">Movies</Link>
            </div>

            <div className="content-container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/movies" element={<Movies/>} />
                    <Route path="/movies/:movieId/*" element={<MovieDetails />} />
                </Routes>
            </div>
            </Suspense>
        </Router>
    );
};

export default App;