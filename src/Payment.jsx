import { useNavigate } from "react-router-dom";

function Payment() {
  const navigate = useNavigate();

  return (
    <>
      <h1>Payment</h1>

      <p>Consultation Fee: ₹500</p>

      <button onClick={() => navigate("/dashboard")}>
        Pay Now
      </button>
    </>
  );
}

export default Payment;