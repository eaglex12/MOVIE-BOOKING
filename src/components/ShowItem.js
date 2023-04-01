import React, { useState } from 'react';
import ShowDetails from './ShowDetails';

function ShowItem({ show }) {
  const { name, genres, summary } = show;
  const [showSummary, setShowSummary] = useState(true);

  const toggleSummary = () => {
    setShowSummary(!showSummary);
  };

  return (
    <div className="show-item">
      <h2>{name}</h2>
      <p>Genres: {genres.join(', ')}</p>
      <button onClick={toggleSummary}>{showSummary ? 'Hide Summary' : 'View Summary'}</button>
      {showSummary ? <div dangerouslySetInnerHTML={{ __html: summary }} /> : <ShowDetails show={show} />}
    </div>
  );
}

export default ShowItem;
