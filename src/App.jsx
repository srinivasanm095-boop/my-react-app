import React, { useState } from "react";

function App() {
  const [page, setPage] = useState("home");

  const [user, setUser] = useState({
    name: "",
    vehicle: "",
  });

  const [location, setLocation] = useState("");
  const [slot, setSlot] = useState("");

  const slots = ["A1", "A2", "B1", "B2", "C1"];

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation(
            `Latitude: ${position.coords.latitude.toFixed(
              4
            )}, Longitude: ${position.coords.longitude.toFixed(4)}`
          );
        },
        () => {
          alert("Location access denied");
        }
      );
    }
  };

  const containerStyle = {
    maxWidth: "600px",
    margin: "30px auto",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    textAlign: "center",
  };

  const buttonStyle = {
    padding: "10px 20px",
    margin: "10px",
    cursor: "pointer",
  };

  return (
    <div style={containerStyle}>
      {page === "home" && (
        <>
          <h1>🚗 Smart Parking Management System</h1>
          <p>Welcome to Smart City Parking Service</p>

          <button
            style={buttonStyle}
            onClick={() => setPage("register")}
          >
            Start Booking
          </button>
        </>
      )}

      {page === "register" && (
        <>
          <h2>Vehicle Registration</h2>

          <input
            type="text"
            placeholder="Owner Name"
            value={user.name}
            onChange={(e) =>
              setUser({ ...user, name: e.target.value })
            }
          />

          <br />
          <br />

          <input
            type="text"
            placeholder="Vehicle Number"
            value={user.vehicle}
            onChange={(e) =>
              setUser({ ...user, vehicle: e.target.value })
            }
          />

          <br />
          <br />

          <button
            style={buttonStyle}
            onClick={() => setPage("gps")}
          >
            Continue
          </button>
        </>
      )}

      {page === "gps" && (
        <>
          <h2>📍 GPS Location</h2>

          <button style={buttonStyle} onClick={getLocation}>
            Detect My Location
          </button>

          <p>{location}</p>

          <button
            style={buttonStyle}
            onClick={() => setPage("parking")}
          >
            Find Parking
          </button>
        </>
      )}

      {page === "parking" && (
        <>
          <h2>Available Parking Slots</h2>

          {slots.map((s) => (
            <button
              key={s}
              style={{
                ...buttonStyle,
                backgroundColor:
                  slot === s ? "lightgreen" : "white",
              }}
              onClick={() => setSlot(s)}
            >
              {s}
            </button>
          ))}

          <br />

          <button
            style={buttonStyle}
            onClick={() => setPage("booking")}
          >
            Book Selected Slot
          </button>
        </>
      )}

      {page === "booking" && (
        <>
          <h2>Booking Confirmation</h2>

          <p>
            <strong>Name:</strong> {user.name}
          </p>

          <p>
            <strong>Vehicle:</strong> {user.vehicle}
          </p>

          <p>
            <strong>Slot:</strong> {slot}
          </p>

          <button
            style={buttonStyle}
            onClick={() => setPage("payment")}
          >
            Proceed To Payment
          </button>
        </>
      )}

      {page === "payment" && (
        <>
          <h2>💳 Payment</h2>

          <h3>Parking Charge: ₹50</h3>

          <button
            style={buttonStyle}
            onClick={() => setPage("ticket")}
          >
            Pay Now
          </button>
        </>
      )}

      {page === "ticket" && (
        <>
          <h2>🎫 Parking Ticket</h2>

          <p>
            <strong>Owner:</strong> {user.name}
          </p>

          <p>
            <strong>Vehicle:</strong> {user.vehicle}
          </p>

          <p>
            <strong>Parking Slot:</strong> {slot}
          </p>

          <p>
            <strong>Status:</strong> Confirmed ✅
          </p>

          <button
            style={buttonStyle}
            onClick={() => setPage("thankyou")}
          >
            Finish
          </button>
        </>
      )}

      {page === "thankyou" && (
        <>
          <h1>🎉 Booking Successful</h1>

          <h2>Thank You For Choosing Us</h2>

          <p>Your parking slot has been reserved.</p>

          <p>Safe Journey 🚗</p>

          <button
            style={buttonStyle}
            onClick={() => window.location.reload()}
          >
            New Booking
          </button>
        </>
      )}
    </div>
  );
}

export default App;