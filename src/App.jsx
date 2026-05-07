import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AppNavbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import Booking from './pages/Booking'
import AdminDashboard from './pages/AdminDashboard'
import AdminOrders from './pages/AdminOrders'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import { initialBookings } from './data/bookingsData'
import './styles/theme.css'

function App() {
  const [bookings, setBookings] = useState(() => {
    const storedBookings = localStorage.getItem('deditz_bookings')
    return storedBookings ? JSON.parse(storedBookings) : initialBookings
  })

  useEffect(() => {
    localStorage.setItem('deditz_bookings', JSON.stringify(bookings))
  }, [bookings])

  // Reusable action to create a new booking from forms.
  const addBooking = (booking) => {
    setBookings((currentBookings) => [
      ...currentBookings,
      { ...booking, id: Date.now(), status: 'Pending' },
    ])
  }

  const updateBookingStatus = (bookingId, status) => {
    setBookings((currentBookings) =>
      currentBookings.map((booking) =>
        booking.id === bookingId ? { ...booking, status } : booking
      )
    )
  }

  const deleteBooking = (bookingId) => {
    setBookings((currentBookings) =>
      currentBookings.filter((booking) => booking.id !== bookingId)
    )
  }

  return (
    <BrowserRouter>
      <div className="app-shell">
        <AppNavbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/booking" element={<Booking onAddBooking={addBooking} />} />
            <Route
              path="/admin"
              element={
                <AdminDashboard
                  bookings={bookings}
                  onUpdateStatus={updateBookingStatus}
                  onDeleteOrder={deleteBooking}
                />
              }
            />
            <Route
              path="/admin/orders"
              element={
                <AdminOrders
                  bookings={bookings}
                  onUpdateStatus={updateBookingStatus}
                  onDeleteOrder={deleteBooking}
                />
              }
            />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
