function DashboardTable({ bookings, onUpdateStatus, onDeleteOrder }) {
  return (
    <div className="table-responsive glass-card p-3">
      <table className="table table-dark table-hover align-middle mb-0">
        <thead>
          <tr>
            <th>Client</th>
            <th>Service</th>
            <th>Budget</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookings.length === 0 ? (
            <tr>
              <td colSpan="5" className="text-center text-secondary py-4">
                No bookings found.
              </td>
            </tr>
          ) : (
            bookings.map((booking) => (
              <tr key={booking.id}>
                <td>
                  <div>{booking.clientName}</div>
                  <small className="text-secondary">{booking.email}</small>
                </td>
                <td>{booking.serviceType}</td>
                <td>{booking.budget}</td>
                <td>
                  <select
                    className="form-select form-select-sm custom-input"
                    value={booking.status}
                    onChange={(event) =>
                      onUpdateStatus(booking.id, event.target.value)
                    }
                  >
                    <option>Pending</option>
                    <option>In Progress</option>
                    <option>Completed</option>
                  </select>
                </td>
                <td>
                  <button
                    className="btn btn-sm btn-outline-danger"
                    onClick={() => onDeleteOrder(booking.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}

export default DashboardTable
