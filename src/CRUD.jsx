import { useState, useEffect } from "react";
import axios from "axios";

function Crud() {
  const [user, setUser] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const getUser = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUser(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getUser();
  }, []);

  const addUser = () => {
    if (name === "" || email === "") {
      alert("Please enter Name and Email");
      return;
    }

    const newUser = {
      name: name,
      email: email,
    };

    axios
      .post("https://jsonplaceholder.typicode.com/users", newUser)
      .then((response) => {
        alert("User Added Successfully");
        setUser([...user, response.data]);
        setName("");
        setEmail("");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateUser = (id) => {
    const updatedUser = {
      name: "Charan",
      email: "charan@gmail.com",
    };

    axios
      .put(`https://jsonplaceholder.typicode.com/users/${id}`, updatedUser)
      .then(() => {
        alert("User Updated");

        const updatedList = user.map((u) =>
          u.id === id ? { ...u, ...updatedUser } : u
        );

        setUser(updatedList);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const delUser = (id) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(() => {
        alert("User Deleted");
        setUser(user.filter((u) => u.id !== id));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>CRUD Operations using Axios</h1>

      <br />

      <label>Name : </label>
      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br />
      <br />

      <label>Email : </label>
      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br />
      <br />

      <button onClick={addUser}>Submit</button>

      <br />
      <br />

      <table
        border="1"
        cellPadding="10"
        style={{ margin: "auto", borderCollapse: "collapse" }}
      >
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {user.map((u) => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>
                <button onClick={() => updateUser(u.id)}>Update</button>
                &nbsp;
                <button onClick={() => delUser(u.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Crud;