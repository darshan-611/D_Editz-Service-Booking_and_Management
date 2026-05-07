import { useState } from 'react'
import BookingForm from '../components/BookingForm'

function Booking() {
  const [bookings, setBookings] = useState([])

  const handleAddBooking = (newBooking) => {
    setBookings([...bookings, newBooking])
  }

  return (
    <section className="section-spacing">
      <div className="container">
        <div className="booking-page">
          <h1 className="section-title">Book a Service</h1>

          <p className="section-description">
            Fill in your details and our team will contact you soon.
          </p>

          <BookingForm onAddBooking={handleAddBooking} />
        </div>
      </div>
    </section>
  )
}

export default Booking