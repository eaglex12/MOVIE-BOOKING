import React, { useEffect, useState } from 'react';
import { getShows } from '../services/ShowService';
import './App.css';
import ShowList from './ShowList';

function App() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchShows = async () => {
      const showData = await getShows();
      setShows(showData);
    };
    fetchShows();
  }, []);

  return (
    <div className="App">
      <h1>TV Shows</h1>
      <ShowList shows={shows} />
    </div>
  );
}

export default App;


