from flask import Flask, jsonify, request
from flask_cors import CORS
import os

app = Flask(__name__)

CORS(
    app,
    resources={r"/*": {"origins": [
        "http://localhost:5173",
        "https://d-editz-service-booking-and-managem.vercel.app"
    ]}},
    supports_credentials=True
)

bookings = []

@app.get("/api/bookings")
def get_bookings():
    return jsonify(bookings)

@app.post("/api/bookings")
def add_booking():
    data = request.get_json()
    bookings.append(data)
    return jsonify({
        "message": "Booking stored",
        "data": data
    }), 201

@app.get("/")
def home():
    return jsonify({"message": "Backend running successfully"})

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port, debug=True)