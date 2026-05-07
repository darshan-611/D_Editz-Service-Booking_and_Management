import { useState } from "react";

const API_URL = import.meta.env.VITE_API_URL;

function BookingForm() {
  const [name, setName] = useState("");
  const [service, setService] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const bookingData = {
      name,
      service,
      phone,
      message,
    };

    try {
      const response = await fetch(
        `${API_URL}/api/bookings`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(bookingData),
        }
      );

      const data = await response.json();

      console.log("Booking success:", data);

      alert("Booking submitted successfully!");

      // Clear form
      setName("");
      setService("");
      setPhone("");
      setMessage("");

    } catch (error) {
      console.error("Booking failed:", error);
      alert("Booking failed");
    }
  };

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "0 auto",
        padding: "30px",
        background: "#111827",
        borderRadius: "16px",
        color: "white",
      }}
    >
      <h2
        style={{
          fontSize: "32px",
          marginBottom: "20px",
          textAlign: "center",
        }}
      >
        Book a Service
      </h2>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "20px" }}>
          <label>Name</label>

          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={inputStyle}
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label>Service</label>

          <input
            type="text"
            placeholder="Enter service"
            value={service}
            onChange={(e) => setService(e.target.value)}
            required
            style={inputStyle}
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label>Phone</label>

          <input
            type="text"
            placeholder="Enter phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            style={inputStyle}
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label>Message</label>

          <textarea
            placeholder="Enter your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows="5"
            style={textareaStyle}
          />
        </div>

        <button
          type="submit"
          style={buttonStyle}
        >
          Submit Booking
        </button>
      </form>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginTop: "8px",
  borderRadius: "8px",
  border: "1px solid #333",
  background: "#1f2937",
  color: "white",
  outline: "none",
};

const textareaStyle = {
  width: "100%",
  padding: "12px",
  marginTop: "8px",
  borderRadius: "8px",
  border: "1px solid #333",
  background: "#1f2937",
  color: "white",
  outline: "none",
};

const buttonStyle = {
  width: "100%",
  padding: "14px",
  border: "none",
  borderRadius: "10px",
  background: "#7c3aed",
  color: "white",
  fontSize: "16px",
  cursor: "pointer",
};

export default BookingForm;