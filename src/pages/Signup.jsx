import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  setError("");

  // ✅ Validation
  if (!form.name || !form.email || !form.password) {
    setError("Please fill all fields");
    return;
  }

  if (form.password.length < 6) {
    setError("Password must be at least 6 characters");
    return;
  }

  try {
    const res = await fetch("http://localhost:5000/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    // ❌ Backend error
    if (!res.ok) {
      setError(data.msg || "Signup failed");
      return;
    }

    // ✅ Success
    localStorage.setItem("user", JSON.stringify(data.user || form));

    alert("🎉 Account created successfully!");

    navigate("/login");

  } catch (err) {
    console.log(err);
    setError("⚠️ Server not responding");
  }
};

  return (
    <div style={styles.page}>

      {/* BACKGROUND BLOBS */}
      <div style={styles.blob1}></div>
      <div style={styles.blob2}></div>

      <div style={styles.card}>
        <h1 style={styles.heading}>Create Account ✨</h1>
        <p style={styles.sub}>Start your Math journey today</p>

        <form onSubmit={handleSubmit}>
          {error && <p style={styles.error}>{error}</p>}

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            style={styles.input}
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            style={styles.input}
          />

          <input
            type="password"
            name="password"
            placeholder="Create Password"
            value={form.password}
            onChange={handleChange}
            style={styles.input}
          />

          <button type="submit" style={styles.button}>
            Sign Up 🚀
          </button>
        </form>

        <p style={styles.bottomText}>
          Already have an account?{" "}
          <Link to="/login" style={styles.link}>
            Login
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
  padding: "14px",
  marginBottom: "15px",
  borderRadius: "14px",
  border: "1px solid rgba(255,255,255,0.2)",
  background: "rgba(255,255,255,0.08)",
  color: "white",
  outline: "none",
  fontSize: "14px",
  transition: "0.3s",
},

  button: {
  width: "100%",
  padding: "14px",
  borderRadius: "30px",
  border: "none",
  background: "linear-gradient(90deg, #8b5cf6, #ec4899)",
  color: "white",
  fontWeight: "700",
  fontSize: "15px",
  cursor: "pointer",
  marginTop: "10px",
  transition: "0.3s",
  boxShadow: "0 10px 30px rgba(236,72,153,0.4)",
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