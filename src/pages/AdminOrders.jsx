import { useEffect, useState } from 'react'

const API_URL = import.meta.env.VITE_API_URL

function AdminOrders() {
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`${API_URL}/api/bookings`)
      .then((res) => res.json())
      .then((data) => {
        const updatedOrders = data.map((order) => ({
          ...order,
          status: order.status || 'Pending',
        }))

        setOrders(updatedOrders)
        setLoading(false)
      })
      .catch((err) => {
        console.error('Error fetching bookings:', err)
        setLoading(false)
      })
  }, [])

  const handleDelete = (indexToDelete) => {
    const updatedOrders = orders.filter(
      (_, index) => index !== indexToDelete
    )

    setOrders(updatedOrders)
  }

  const handleStatusChange = (index, value) => {
    const updatedOrders = [...orders]

    updatedOrders[index].status = value

    setOrders(updatedOrders)
  }

  return (
    <section className="section-spacing">
      <div className="container">
        <div className="glass-card p-4 p-md-5">

          <h1 className="section-title mb-2">
            Manage Orders
          </h1>

          <p className="section-description mb-4">
            Client bookings from website
          </p>

          {loading ? (
            <p>Loading bookings...</p>
          ) : orders.length === 0 ? (
            <p>No bookings found.</p>
          ) : (
            <div className="table-responsive">
              <table className="table table-dark table-bordered align-middle">
                <thead>
                  <tr>
                    <th>Client Name</th>
                    <th>Service</th>
                    <th>Phone</th>
                    <th>Message</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {orders.map((order, index) => (
                    <tr key={index}>

                      <td>{order.name}</td>

                      <td>{order.service}</td>

                      <td>{order.phone}</td>

                      <td>{order.message}</td>

                      <td>
                        <select
                          className="form-select custom-input"
                          value={order.status}
                          onChange={(e) =>
                            handleStatusChange(
                              index,
                              e.target.value
                            )
                          }
                        >
                          <option value="Pending">
                            Pending
                          </option>

                          <option value="Ongoing">
                            Ongoing
                          </option>

                          <option value="Completed">
                            Completed
                          </option>
                        </select>
                      </td>

                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() =>
                            handleDelete(index)
                          }
                        >
                          Delete
                        </button>
                      </td>

                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

        </div>
      </div>
    </section>
  )
}

export default AdminOrders