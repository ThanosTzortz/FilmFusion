import React, { useState } from "react";
import axios from "axios";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Replace with your actual login endpoint
      await axios.post("/login", { email, password });
      // Handle successful login (e.g., redirect to home page)
      window.location.href = "/"; // Redirect to homepage or dashboard
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <p>Please login, by using your email and password:</p>
      <form onSubmit={handleSubmit} className="form-styling">
        <label>
          Email:
          <input
            className="input-styling"
             placeholder='Please enter your email'
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Password:
          <input
            className="input-styling"
             placeholder='Please enter your password'
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
