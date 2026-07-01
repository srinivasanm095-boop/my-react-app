import { useNavigate } from "react-router-dom";

function Appointment() {
  const navigate = useNavigate();

  return (
    <>
      <h1>Appointment Booking</h1>

      <input type="date" />

      <br /><br />

      <select>
        <option>9:00 AM</option>
        <option>10:00 AM</option>
        <option>11:00 AM</option>
      </select>

      <br /><br />

      <button onClick={() => navigate("/payment")}>
        Continue
      </button>
    </>
  );
}

export default Appointment;