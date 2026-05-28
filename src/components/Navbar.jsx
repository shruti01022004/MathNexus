import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("loggedIn")
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ logout outside useEffect
  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    setIsLoggedIn(false);
  };

  return (
    <div
      style={{
        ...styles.nav,
        ...(scrolled ? styles.navScrolled : {}),
      }}
    >
      <h2
        style={{
          ...styles.logo,
          color: scrolled ? "#111" : "#fff",
        }}
      >
        MathNexus
      </h2>

      <div style={styles.links}>
        <Link style={styles.link} to="/">Home</Link>
        <Link style={styles.link} to="/Classes">Classes</Link>
        <Link style={styles.link} to="/Quiz">Quiz</Link>
        <Link style={styles.link} to="/contact">Contact</Link>
      </div>

      {/* ✅ FIXED AUTH */}
      <div style={styles.auth}>
        {isLoggedIn ? (
          <button onClick={handleLogout} style={styles.login}>
            Logout
          </button>
        ) : (
          <>
            <Link to="/login" style={styles.login}>Login</Link>
            <Link to="/signup" style={styles.signup}>Sign Up</Link>
          </>
        )}
      </div>
    </div>
  );
}

const styles = {
  nav: {
    position: "fixed",
    top: 0,
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "18px 50px",
    zIndex: 1000,
    background: "rgba(0,0,0,0.25)",
    backdropFilter: "blur(12px)",
    transition: "all 0.4s ease",
  },

  navScrolled: {
    background: "rgba(255,255,255,0.9)",
    backdropFilter: "blur(18px)",
    boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
  },

  logo: {
    fontWeight: "800",
    fontSize: "22px",
    letterSpacing: "1px",
  },

  links: {
    display: "flex",
    gap: "30px",
  },

  link: {
    textDecoration: "none",
    color: "#e5e7eb",
  },

  auth: {
    display: "flex",
    gap: "12px",
  },

  login: {
    padding: "8px 18px",
    borderRadius: "25px",
    border: "1px solid rgba(255,255,255,0.4)",
    background: "transparent",
    color: "white",
    cursor: "pointer",
  },

  signup: {
    padding: "8px 18px",
    borderRadius: "25px",
    border: "none",
    background: "linear-gradient(90deg, #8b5cf6, #6366f1)",
    color: "white",
    fontWeight: "600",
    cursor: "pointer",
  },
};