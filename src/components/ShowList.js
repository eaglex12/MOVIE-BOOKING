import React from 'react';
import ShowItem from './ShowItem';

function ShowList({ shows }) {
  return (
    <div className="show-list">
      {shows.map((show) => (
        <ShowItem key={show.show.id} show={show.show} />
      ))}
    </div>
  );
}

export default ShowList;
