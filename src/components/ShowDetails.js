import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';




function ShowDetails({ show }) {
  const [booking, setBooking] = useState(false);
  const [bookingDetails, setBookingDetails] = useState({
    name: '',
    email: '',
    tickets: 1,
    date: ''
  });


  const [showDates, setShowDates] = useState([]);
  const { name, type, language, genres, status, runtime, premiered, officialSite, network, schedule, rating, weight, externals, image, summary, updated, _links } = show;

  useEffect(() => {
    // Fetch the show details from the API endpoint
    fetch(`https://api.tvmaze.com/shows/${show.id}`)
      .then(response => response.json())
      .then(data => {
        // Extract the list of dates from the response data
        const dates = data._embedded.episodes.map(episode => episode.airdate);
        // Set the showDates state to the list of dates
        setShowDates(dates);
      })
      .catch(error => {
        console.error('Error fetching show details:', error);
      });
  }, [show.id]);

  const handleBooking = () => {
    setBooking(true);
  };

  const handleBookingDetailsChange = (event) => {
    const { name, value } = event.target;
    setBookingDetails({ ...bookingDetails, [name]: value });
  };

  const handleBookingSubmit = () => {
    // Save the booking details to local storage
    localStorage.setItem('bookingDetails', JSON.stringify(bookingDetails));
  
    // Redirect to the booking confirmation page
    window.location.href = '/confirmation';
  };
  

  return (
    <div className="show-details">
      <img src={image?.medium} alt={name} />
      <h2>{name}</h2>
      <p>Type: {type}</p>
      <p>Language: {language}</p>
      <p>Genres: {genres.join(', ')}</p>
      <p>Status: {status}</p>
      <p>Runtime: {runtime} minutes</p>
      <p>Premiere Date: {premiered}</p>
      <p>Official Website: <a href={officialSite} target="_blank" rel="noopener noreferrer">{officialSite}</a></p>
      <p>Network: {network?.name}</p>
      <p>Schedule: {schedule?.days.join(', ')} at {schedule?.time}</p>
      <p>Rating: {rating?.average}</p>
      <p>Weight: {weight}</p>
      <p>External IDs: TVRage: {externals?.tvrage}, TheTVDB: {externals?.thetvdb}, IMDb: {externals?.imdb}</p>
      <div dangerouslySetInnerHTML={{ __html: summary }} />
      <p>Last Updated: {updated}</p>
      {_links?.previousepisode && <p>Previous Episode: <a href={_links.previousepisode.href} target="_blank" rel="noopener noreferrer">{_links.previousepisode.href}</a></p>}
      {_links?.nextepisode && <p>Next Episode: <a href={_links.nextepisode.href} target="_blank" rel="noopener noreferrer">{_links.nextepisode.href}</a></p>}
      <button onClick={handleBooking}>Book a Movie Ticket</button>
      {booking && (
        <div className="booking-form">
          <h3>Booking Form</h3>
          <form onSubmit={handleBookingSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={bookingDetails.name} onChange={handleBookingDetailsChange} required />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={bookingDetails.email} onChange={handleBookingDetailsChange} required />
      </label>
      <label>
        Select Show Date:
        <DatePicker
  selected={bookingDetails.date}
  onChange={date => setBookingDetails({ ...bookingDetails, date })}
  minDate={new Date()}
  dateFormat="yyyy/MM/dd"
  required
/>

      </label>
      <label>
        Number of Tickets:
        <input type="number" name="tickets" value={bookingDetails.tickets} onChange={handleBookingDetailsChange} min="1" max="10" required />
      </label>
      <button type="submit">Book Now</button>
    </form>
  </div>
)}
 </div>
  );
}

export default ShowDetails;