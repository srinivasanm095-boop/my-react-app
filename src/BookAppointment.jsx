import { useState } from "react";

function BookAppointment() {
  const [data, setData] = useState({
    patient: "",
    doctor: "",
    date: "",
    slot: "",
  });

  const change = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const submit = (e) => {
    e.preventDefault();

    const appointments =
      JSON.parse(localStorage.getItem("appointments")) || [];

    appointments.push(data);

    localStorage.setItem(
      "appointments",
      JSON.stringify(appointments)
    );

    alert("Appointment Booked");
  };

  return (
    <form onSubmit={submit}>
      <h2>Book Appointment</h2>

      <input
        name="patient"
        placeholder="Patient Name"
        onChange={change}
      />

      <select
        name="doctor"
        onChange={change}
      >
        <option>Select Doctor</option>
        <option>Dr Kumar</option>
        <option>Dr Priya</option>
        <option>Dr Ravi</option>
      </select>

      <input
        type="date"
        name="date"
        onChange={change}
      />

      <select
        name="slot"
        onChange={change}
      >
        <option>9:00 AM</option>
        <option>10:00 AM</option>
        <option>11:00 AM</option>
      </select>

      <button type="submit">
        Book
      </button>
    </form>
  );
}

export default BookAppointment;