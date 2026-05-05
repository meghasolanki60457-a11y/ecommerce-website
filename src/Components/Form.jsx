import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  // 👇 multiple users list (BEST WAY)
  const users = [
    { email: "admin@gmail.com", password: "1234" },
    { email: "user@gmail.com", password: "5678" },
    { email: "test@gmail.com", password: "9999" },
  ];

  const handleLogin = (e) => {
    e.preventDefault();

    setError("");

    // ✅ validation
    if (!email.includes("@")) {
      setError("Email must contain @ symbol");
      return;
    }

    if (password.length > 8) {
      setError("Password must not exceed 8 characters");
      return;
    }

    // ✅ authentication check
    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      localStorage.setItem("token", "abc123");
      localStorage.setItem("user", JSON.stringify({ email }));
      navigate("/dashboard");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="login-container">
      <form className="login-box" onSubmit={handleLogin}>
        <h2>Sign In</h2>

        {error && <p className="error">{error}</p>}

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;