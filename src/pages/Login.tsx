import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = (e: React.FormEvent) => {
    e.preventDefault();

    if (username === "admin" && password === "12345") {
      localStorage.setItem("loggedIn", "true");
      navigate("/");
    } else {
      alert("Invalid Login");
    }
  };

  return (
  <div
    className="d-flex justify-content-center align-items-center vh-100"
    style={{
      background: "#f4f6f9"
    }}
  >
    <div
      className="card shadow-lg border-0 p-4"
      style={{
        width: "400px",
        borderRadius: "15px",
        backgroundColor: "white"
      }}
    >
      <h2
        className="text-center fw-bold mb-4"
        style={{ color: "#212529" }}
      >
        Inventory System
      </h2>

      <form onSubmit={login}>

        <label
          className="form-label fw-semibold"
          style={{ color: "#212529" }}
        >
          Username
        </label>

        <input
          className="form-control mb-3"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label
          className="form-label fw-semibold"
          style={{ color: "#212529" }}
        >
          Password
        </label>

        <input
          type="password"
          className="form-control mb-4"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="btn btn-primary w-100 py-2 fw-semibold">
          Login
        </button>

      </form>

      <div
        className="text-center mt-4"
        style={{
          color: "#6c757d",
          fontSize: "14px"
        }}
      >
        Default Login: <br />
        Username: <strong>admin</strong> <br />
        Password: <strong>12345</strong>
      </div>
    </div>
  </div>
);
};

export default Login;