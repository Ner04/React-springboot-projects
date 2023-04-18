import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2"; // import SweetAlert
import { useNavigate } from "react-router";

export default function AddUser() {
  let navigate = useNavigate();
  const [addUser, setAddUser] = useState({
    name: "",
    username: "",
    email: "",
  });
  const { name, username, email } = addUser;

  const onInputChange = (e) => {
    setAddUser({ ...addUser, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!name || !username || !email) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "All fields are required!",
      });
      return;
    }
    await axios.put("http://localhost:8080/user", addUser);
    Swal.fire({
      icon: "success",
      title: "Success!",
      text: "Data has been saved.",
    }).then(() => {
      navigate("/");
    });
  };

  const clearForm = () => {
    setAddUser({
      name: "",
      username: "",
      email: "",
    });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow ">
          <h2 className="text-center m-4">Register User</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Name
              </label>
              <input
                type={"text"}
                name="name"
                className="form-control"
                placeholder="Enter Your Name"
                value={name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                Username
              </label>
              <input
                type={"text"}
                name="username"
                className="form-control"
                placeholder="Enter your Username"
                value={username}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                Email
              </label>
              <input
                type={"text"}
                name="email"
                className="form-control"
                placeholder="Enter your Email"
                value={email}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <button
              type="button"
              className="btn btn-outline-danger mx-2"
              onClick={clearForm}
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
