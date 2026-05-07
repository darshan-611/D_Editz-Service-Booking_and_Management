import { useEffect, useState } from "react";

const API_URL = import.meta.env.VITE_API_URL;

export default function AdminOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/api/bookings`)
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
      })
      .catch((err) => {
        console.error("Error fetching bookings:", err);
      });
  }, []);

  return (
    <div>
      <h1>Manage Orders</h1>

      {orders.map((order) => (
        <div key={order.id}>
          <h3>{order.name}</h3>
          <p>{order.service}</p>
          <p>{order.phone}</p>
          <p>{order.message}</p>
        </div>
      ))}
    </div>
  );
}