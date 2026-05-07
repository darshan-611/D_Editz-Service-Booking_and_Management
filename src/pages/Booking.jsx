import { useState } from 'react'

const API_URL = import.meta.env.VITE_API_URL

function BookingForm({ onAddBooking }) {
  const [name, setName] = useState('')
  const [service, setService] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    const bookingData = {
      name,
      service,
      phone,
      message,
    }

    try {
      const response = await fetch(`${API_URL}/api/bookings`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData),
      })

      const data = await response.json()

      console.log('Booking Success:', data)

      if (onAddBooking) {
        onAddBooking(bookingData)
      }

      alert('Booking submitted successfully!')

      setName('')
      setService('')
      setPhone('')
      setMessage('')

    } catch (error) {
      console.error('Booking Failed:', error)
      alert('Booking failed')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Service"
        value={service}
        onChange={(e) => setService(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />

      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button type="submit">
        Submit Booking
      </button>
    </form>
  )
}

export default BookingForm