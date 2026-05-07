import BookingForm from '../components/BookingForm'

function Booking({ onAddBooking }) {
  return (
    <section className="section-spacing">
      <div className="container">
        <BookingForm onAddBooking={onAddBooking} />
      </div>
    </section>
  )
}

export default Booking
