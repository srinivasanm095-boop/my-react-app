import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  return (
    <>
      <h1>Patient Registration</h1>

      <input type="text" placeholder="Name" />

      <br /><br />

      <input type="email" placeholder="Email" />

      <br /><br />

      <button onClick={() => navigate("/doctors")}>
        Register
      </button>
    </>
  );
}

export default Register;