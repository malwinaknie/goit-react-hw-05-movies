import React from 'react';
import './Cast.css';

const Cast = ({ cast }) => (
  <div>
    <h2 className="cast-title">Cast</h2>
    <ul className="cast-list">
      {cast.map(actor => (
        <li key={actor.id} className="cast-item">
          {actor.name}
        </li>
      ))}
    </ul>
  </div>
);

export default Cast;