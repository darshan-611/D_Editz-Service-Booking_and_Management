import { useMemo, useState } from 'react'
import DashboardTable from '../components/DashboardTable'
import SearchBar from '../components/SearchBar'
import { Link } from 'react-router-dom'

function AdminOrders({ bookings, onUpdateStatus, onDeleteOrder }) {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredBookings = useMemo(() => {
    const query = searchQuery.toLowerCase()
    return bookings.filter(
      (booking) =>
        booking.clientName.toLowerCase().includes(query) ||
        booking.serviceType.toLowerCase().includes(query)
    )
  }, [bookings, searchQuery])

  return (
    <section className="section-spacing">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-3">
          <div>
            <h2 className="section-title mb-1">Manage Orders</h2>
            <p className="text-secondary mb-0">
              Update status and delete orders from one place.
            </p>
          </div>
          <Link className="btn btn-outline-light" to="/admin">
            Back to Dashboard
          </Link>
        </div>

        <SearchBar searchQuery={searchQuery} onSearchChange={setSearchQuery} />

        <DashboardTable
          bookings={filteredBookings}
          onUpdateStatus={onUpdateStatus}
          onDeleteOrder={onDeleteOrder}
        />
      </div>
    </section>
  )
}

export default AdminOrders
