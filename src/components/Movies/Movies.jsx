import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { searchMovies } from '../Api';
import './Movies.css';

const Movies = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResuts] = useState([]);

    const handleSearch = async () => {
        const results = await searchMovies(searchTerm);
        setSearchResuts(results);
    };

    return (
        <div>
            <h1 className='search-title'>Search Movies</h1>
            <input 
            type="text" 
            placeholder='Search'
            className='search-input'
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            />
            <button className='search-button' onClick={handleSearch}>
                Search
            </button>
            <ul className='search-results'>
                {searchResults.map(movie => (
                    <li key={movie.id}>
                        <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Movies;