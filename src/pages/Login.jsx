import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  // ✅ validation pehle
  if (!form.email || !form.password) {
    setError("Please fill all fields");
    return;
  }

  try {
    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    // ❌ login fail
    if (!res.ok) {
      setError(data.msg || "Invalid credentials");
      return;
    }

    // ✅ SAVE TOKEN + USER
    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));

    // ✅ redirect
    navigate("/classes");

  } catch (err) {
    setError("Server error");
  }
};

  return (
    <div style={styles.page}>

      {/* BACKGROUND BLOBS */}
      <div style={styles.blob1}></div>
      <div style={styles.blob2}></div>

      <div style={styles.card}>
        <h1 style={styles.heading}>Welcome Back 👋</h1>
        <p style={styles.sub}>Login to continue learning</p>

        <form onSubmit={handleSubmit}>

          {error && <p style={styles.error}>{error}</p>}

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={handleChange}
            style={styles.input}
          />

          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={form.password}
            onChange={handleChange}
            style={styles.input}
          />

          <button type="submit" style={styles.button}>
            Login 🚀
          </button>
        </form>

        <p style={styles.bottomText}>
          Don't have an account?{" "}
          <Link to="/signup" style={styles.link}>
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
const styles = {
  page: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",

    background: `
      radial-gradient(circle at top left, #1e1b4b, #0f172a),
      radial-gradient(circle at bottom right, #ec4899, transparent)
    `,
  },

  blob1: {
    position: "absolute",
    width: "300px",
    height: "300px",
    background: "#8b5cf6",
    borderRadius: "50%",
    top: "10%",
    left: "10%",
    filter: "blur(120px)",
    animation: "float 6s infinite ease-in-out",
  },

  blob2: {
    position: "absolute",
    width: "250px",
    height: "250px",
    background: "#ec4899",
    borderRadius: "50%",
    bottom: "10%",
    right: "10%",
    filter: "blur(120px)",
    animation: "float 8s infinite ease-in-out",
  },

  card: {
    width: "350px",
    padding: "40px",
    borderRadius: "25px",

    backdropFilter: "blur(20px)",
    background: "rgba(255,255,255,0.08)",

    border: "1px solid rgba(255,255,255,0.2)",
    boxShadow: "0 20px 60px rgba(0,0,0,0.5)",

    textAlign: "center",
    color: "white",
    zIndex: 2,
  },

  heading: {
    fontSize: "28px",
    fontWeight: "700",
  },

  sub: {
    fontSize: "14px",
    color: "#cbd5f5",
    marginBottom: "20px",
  },

  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "15px",
    borderRadius: "10px",
    border: "1px solid rgba(255,255,255,0.2)",
    background: "rgba(255,255,255,0.05)",
    color: "white",
    outline: "none",
  },

  button: {
    width: "100%",
    padding: "12px",
    borderRadius: "25px",
    border: "none",
    background: "linear-gradient(90deg, #8b5cf6, #ec4899)",
    color: "white",
    fontWeight: "600",
    cursor: "pointer",
    marginTop: "10px",
  },

  bottomText: {
    marginTop: "15px",
    fontSize: "13px",
    color: "#cbd5f5",
  },

  link: {
    color: "#ec4899",
    textDecoration: "none",
    fontWeight: "600",
  },

  error: {
    color: "#f87171",
    fontSize: "13px",
    marginBottom: "10px",
  },
};