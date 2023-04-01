import React from 'react';

function ShowSummary({ show }) {
  const { name, summary } = show;

  const handleBookTicket = () => {
    // Get the user's details from local storage
    const userDetails = JSON.parse(localStorage.getItem('userDetails'));
  
    // If the user details are not present in local storage, redirect to the login page
    if (!userDetails) {
      window.location.href = '/';
      return;
    }
  
    // Get the show details from the props
    const { id, name } = show;
  
    // Create a booking object with the show ID and name, and the user's details
    const booking = {
      showId: id,
      showName: name,
      userId: userDetails.id,
      userName: userDetails.name,
      userEmail: userDetails.email,
    };
  
    // Save the booking object to local storage
    localStorage.setItem('booking', JSON.stringify(booking));
  
    // Redirect to the booking form page
    window.location.href = '/booking';
  };
  
  return (
    <div className="show-summary">
      <h2>{name}</h2>
      <p>{summary}</p>
      <button onClick={handleBookTicket}>Book a Movie Ticket</button>
    </div>
  );
}

export default ShowSummary;
