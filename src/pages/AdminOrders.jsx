import { useEffect, useState } from "react";

const API_URL = import.meta.env.VITE_API_URL;

export default function AdminOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_URL}/api/bookings`)
      .then((res) => res.json())
      .then((data) => {
        const updatedOrders = data.map((order) => ({
          ...order,
          status: order.status || "Pending",
        }));

        setOrders(updatedOrders);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching bookings:", err);
        setLoading(false);
      });
  }, []);

  const handleDelete = (indexToDelete) => {
    const updatedOrders = orders.filter(
      (_, index) => index !== indexToDelete
    );

    setOrders(updatedOrders);
  };

  const handleStatusChange = (index, value) => {
    const updatedOrders = [...orders];

    updatedOrders[index].status = value;

    setOrders(updatedOrders);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0b0b14",
        color: "white",
        padding: "40px",
      }}
    >
      <h1 style={{ fontSize: "40px", marginBottom: "10px" }}>
        Manage Orders
      </h1>

      <p style={{ color: "#aaa", marginBottom: "30px" }}>
        Client bookings from website
      </p>

      {loading ? (
        <p>Loading bookings...</p>
      ) : orders.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        <div
          style={{
            overflowX: "auto",
            border: "1px solid #333",
            borderRadius: "12px",
          }}
        >
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
            }}
          >
            <thead>
              <tr
                style={{
                  background: "#151520",
                }}
              >
                <th style={thStyle}>Client Name</th>
                <th style={thStyle}>Service</th>
                <th style={thStyle}>Phone</th>
                <th style={thStyle}>Message</th>
                <th style={thStyle}>Status</th>
                <th style={thStyle}>Actions</th>
              </tr>
            </thead>

            <tbody>
              {orders.map((order, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{order.name}</td>

                  <td style={tdStyle}>
                    {order.service}
                  </td>

                  <td style={tdStyle}>
                    {order.phone}
                  </td>

                  <td style={tdStyle}>
                    {order.message}
                  </td>

                  <td style={tdStyle}>
                    <select
                      value={order.status}
                      onChange={(e) =>
                        handleStatusChange(
                          index,
                          e.target.value
                        )
                      }
                      style={{
                        padding: "8px",
                        borderRadius: "6px",
                        background: "#111827",
                        color: "white",
                        border: "1px solid #333",
                      }}
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

                  <td style={tdStyle}>
                    <button
                      onClick={() =>
                        handleDelete(index)
                      }
                      style={{
                        padding: "8px 14px",
                        border: "none",
                        borderRadius: "6px",
                        background: "red",
                        color: "white",
                        cursor: "pointer",
                      }}
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
  );
}

const thStyle = {
  padding: "16px",
  textAlign: "left",
  borderBottom: "1px solid #333",
};

const tdStyle = {
  padding: "16px",
  borderBottom: "1px solid #222",
};