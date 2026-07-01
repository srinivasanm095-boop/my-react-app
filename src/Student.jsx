function Student() {
  const doctors = [
    { id: 1, name: "Dr. Kumar", specialization: "Cardiologist" },
    { id: 2, name: "Dr. Priya", specialization: "Dermatologist" },
    { id: 3, name: "Dr. Ravi", specialization: "Neurologist" }
  ];

  return (
    <>
      <h1>Hospital Appointment Booking System</h1>

      <h2>Available Doctors</h2>

      {doctors.map((doctor) => (
        <div key={doctor.id}>
          <h3>{doctor.name}</h3>
          <p>{doctor.specialization}</p>
          <hr />
        </div>
      ))}
    </>
  );
}

export default Student;