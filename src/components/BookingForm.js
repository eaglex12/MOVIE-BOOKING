// import React, { useState } from 'react';
// import './BookingForm.css';

// function BookingForm({ show }) {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     showName: show.name,
//     showTime: '',
//     seats: 1,
//   });

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
  
//     // Get existing bookings from local storage
//     const existingBookings = JSON.parse(localStorage.getItem('bookings')) || [];
  
//     // Create a new booking object from form data
//     const newBooking = {
//       name: formData.name,
//       email: formData.email,
//       phone: formData.phone,
//       showName: formData.showName,
//       showTime: formData.showTime,
//       seats: formData.seats,
//     };
  
//     // Add new booking to existing bookings
//     const updatedBookings = [...existingBookings, newBooking];
  
//     // Save updated bookings to local storage
//     localStorage.setItem('bookings', JSON.stringify(updatedBookings));
  
//     // Clear form data
//     setFormData({
//       name: '',
//       email: '',
//       phone: '',
//       showName: show.name,
//       showTime: '',
//       seats: 1,
//     });
  
//     // Display success message
//     alert('Booking submitted successfully!');
//   };

//   return (
//     <div className="booking-form-container">
//       <h2>Book a Movie Ticket</h2>
//       <form className="booking-form" onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="name">Name:</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="phone">Phone:</label>
//           <input
//             type="tel"
//             id="phone"
//             name="phone"
//             value={formData.phone}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="showName">Show Name:</label>
//           <input
//             type="text"
//             id="showName"
//             name="showName"
//             value={formData.showName}
//             disabled
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="showTime">Show Time:</label>
//           <input
//             type="time"
//             id="showTime"
//             name="showTime"
//             value={formData.showTime}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="seats">Seats:</label>
//           <input
//             type="number"
//             id="seats"
//             name="seats"
//             value={formData.seats}
//             min="1"
//             max="10"
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <button type="submit" className="btn-submit">Submit</button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default BookingForm;
