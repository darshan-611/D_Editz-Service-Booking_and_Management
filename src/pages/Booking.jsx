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
        <BookingForm onAddBooking={handleAddBooking} />
      </div>
    </section>
  )
}

export default Booking