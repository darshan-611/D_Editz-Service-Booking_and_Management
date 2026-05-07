from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
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

BASE_DIR = os.path.abspath(os.path.dirname(__file__))

app.config["SQLALCHEMY_DATABASE_URI"] = \
    "sqlite:///" + os.path.join(BASE_DIR, "bookings.db")

app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db = SQLAlchemy(app)

class Booking(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    service = db.Column(db.String(100))
    phone = db.Column(db.String(20))
    message = db.Column(db.String(500))

with app.app_context():
    db.create_all()

@app.get("/")
def home():
    return jsonify({"message": "Backend running"})

@app.get("/api/bookings")
def get_bookings():
    bookings = Booking.query.all()

    data = []

    for booking in bookings:
        data.append({
            "id": booking.id,
            "name": booking.name,
            "service": booking.service,
            "phone": booking.phone,
            "message": booking.message
        })

    return jsonify(data)

@app.post("/api/bookings")
def add_booking():
    data = request.get_json()

    booking = Booking(
        name=data.get("name"),
        service=data.get("service"),
        phone=data.get("phone"),
        message=data.get("message")
    )

    db.session.add(booking)
    db.session.commit()

    return jsonify({
        "message": "Booking stored successfully"
    }), 201

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port, debug=True)