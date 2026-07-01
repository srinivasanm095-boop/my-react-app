import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <h1>Hospital Appointment System</h1>

      <button onClick={() => navigate("/login")}>
        Start
      </button>
    </>
  );
}

export default Home;