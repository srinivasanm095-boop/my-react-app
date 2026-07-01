import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  return (
    <>
      <h1>Login</h1>

      <input type="email" placeholder="Email" />

      <br /><br />

      <input type="password" placeholder="Password" />

      <br /><br />

      <button onClick={() => navigate("/register")}>
        Login
      </button>
    </>
  );
}

export default Login;