import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
// import { Link } from 'react-router-dom';

const requiredData = {
  username: "Rohit Foujdar",
  password: "123",
  email: "rohitfoujdar8696@gmail.com"
}

export default function Login({ setIsLoggedIn }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); 

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    if (username === requiredData.username && password === requiredData.password) {
      setError(""); 
      localStorage.setItem("name",username)
      navigate("/");
      toast.success("Login successful!");
      setIsLoggedIn(true); 
    } else {
      toast.error("Incorrect username or password. Please try again.");
    }
  };


  return (
    <div className="Card">
      {error && <p style={{ color: "yellow" }}>{error}</p>}
      <div className="input-1">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={handleUsernameChange}
        />
      </div>
      <div className="input-2">
        <input
          type="password"
          placeholder="Enter your Password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <div className="log-btn">
       <button type="button"onClick={handleLogin} className="btn btn-outline-warning">Submit</button>
      </div>
    </div>
  );
}