import { useNavigate } from "react-router-dom";

function Doctors() {
  const navigate = useNavigate();

  return (
    <>
      <h1>Doctors</h1>

      <h3>Dr. Kumar - Cardiologist</h3>
      <button onClick={() => navigate("/appointment")}>
        Book Appointment
      </button>

      <hr />

      <h3>Dr. Priya - Dermatologist</h3>
      <button onClick={() => navigate("/appointment")}>
        Book Appointment
      </button>
    </>
  );
}

export default Doctors;