function AdminDashboard({ bookings, onUpdateStatus, onDeleteOrder }) {
  const totalOrders = bookings.length
  const pendingOrders = bookings.filter((booking) => booking.status === 'Pending').length
  const completedOrders = bookings.filter(
    (booking) => booking.status === 'Completed'
  ).length

  return (
    <section className="section-spacing">
      <div className="container">
        <h2 className="section-title mb-4">Admin Dashboard</h2>
        <div className="row g-3 mb-4">
          <div className="col-md-4">
            <div className="glass-card p-3">
              <h6>Total Orders</h6>
              <h3>{totalOrders}</h3>
            </div>
          </div>
          <div className="col-md-4">
            <div className="glass-card p-3">
              <h6>Pending Orders</h6>
              <h3>{pendingOrders}</h3>
            </div>
          </div>
          <div className="col-md-4">
            <div className="glass-card p-3">
              <h6>Completed Orders</h6>
              <h3>{completedOrders}</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AdminDashboard
