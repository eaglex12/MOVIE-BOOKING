import React from 'react';

function ConfirmationPage() {
  // Retrieve the booking details from local storage
  const bookingDetails = JSON.parse(localStorage.getItem('bookingDetails'));

  return (
    <div>
      <h2>Booking Confirmation</h2>
      <p>Name: {bookingDetails.name}</p>
      <p>Email: {bookingDetails.email}</p>
      <p>Show Date: {bookingDetails.date}</p>
      <p>Number of Tickets: {bookingDetails.tickets}</p>
      {/* Add any additional confirmation details here */}
    </div>
  );
}

export default ConfirmationPage;
