import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

 const [success, setSuccess] = useState(false);

const handleSubmit = (e) => {
  e.preventDefault();
  setSuccess(true);
};
{success && (
  <div style={styles.success}>
    ✅ Message Sent Successfully!
  </div>
)}

  return (
    <div style={styles.page}>

      {/* 🌌 BACKGROUND GLOW */}
      <div style={styles.glow1}></div>
      <div style={styles.glow2}></div>

      {/* LEFT CONTENT */}
      <div style={styles.left}>
        <h1 style={styles.heading}>Contact Us</h1>
        <p style={styles.text}>
          Have questions about MathNexus? Reach out and we’ll respond quickly.
        </p>

        <div style={styles.info}>
          <p>📧 support@mathnexus.com</p>
          <p>📞 +91 9876543210</p>
          <p>📍 India</p>
        </div>
      </div>

      {/* RIGHT FORM */}
      <div style={styles.right}>
        <form onSubmit={handleSubmit} style={styles.form}>
          
         <div style={styles.inputGroup}>
  <input
    type="text"
    name="name"
    value={form.name}
    onChange={handleChange}
    required
    style={styles.input}
  />
  <label style={styles.label}>Your Name</label>
</div>

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            style={styles.input}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            style={styles.textarea}
            required
          />

          <button type="submit" style={styles.button}>
            Send Message 🚀
          </button>

        </form>
      </div>

    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "100px 80px",
    position: "relative",
    overflow: "hidden",

    background: "linear-gradient(135deg, #020617, #0f172a)",
  },

  /* 🌌 GLOW EFFECTS */
  glow1: {
    position: "absolute",
    width: "350px",
    height: "350px",
    background: "#ec4899",
    borderRadius: "50%",
    filter: "blur(150px)",
    top: "10%",
    left: "10%",
    opacity: 0.4,
  },

  glow2: {
    position: "absolute",
    width: "300px",
    height: "300px",
    background: "#3b82f6",
    borderRadius: "50%",
    filter: "blur(150px)",
    bottom: "10%",
    right: "10%",
    opacity: 0.4,
  },

  /* LEFT */
  left: {
    flex: 1,
    zIndex: 2,
  },

  heading: {
    fontSize: "52px",
    fontWeight: "800",
    color: "#fff",
    marginBottom: "20px",
  },

  text: {
    color: "#cbd5f5",
    fontSize: "18px",
    maxWidth: "400px",
  },

  info: {
    marginTop: "30px",
    lineHeight: "2",
    color: "#94a3b8",
  },

  /* RIGHT */
  right: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    zIndex: 2,
  },

  /* 💎 GLASS FORM */
  form: {
    width: "100%",
    maxWidth: "420px",
    padding: "35px",

    backdropFilter: "blur(25px)",
    background: "rgba(255,255,255,0.05)",

    borderRadius: "20px",
    border: "1px solid rgba(255,255,255,0.1)",

    boxShadow: "0 25px 60px rgba(0,0,0,0.7)",
  },

  input: {
    width: "100%",
    padding: "14px",
    marginBottom: "15px",
    borderRadius: "12px",
    border: "1px solid rgba(255,255,255,0.2)",
    background: "rgba(255,255,255,0.05)",
    color: "#fff",
    outline: "none",
  },

  textarea: {
    width: "100%",
    height: "120px",
    padding: "14px",
    marginBottom: "15px",
    borderRadius: "12px",
    border: "1px solid rgba(255,255,255,0.2)",
    background: "rgba(255,255,255,0.05)",
    color: "#fff",
    outline: "none",
  },

  button: {
  width: "100%",
  padding: "14px",
  borderRadius: "30px",
  border: "none",
  background: "linear-gradient(90deg, #ec4899, #8b5cf6)",
  color: "#fff",
  fontWeight: "600",
  cursor: "pointer",
  boxShadow: "0 10px 30px rgba(236,72,153,0.5)",
  transition: "0.3s",
},
  inputGroup: {
  position: "relative",
  marginBottom: "20px",
},

label: {
  position: "absolute",
  left: "15px",
  top: "50%",
  transform: "translateY(-50%)",
  color: "#94a3b8",
  pointerEvents: "none",
  transition: "0.3s",
},

input: {
  width: "100%",
  padding: "16px 14px",
  borderRadius: "12px",
  border: "1px solid rgba(255,255,255,0.2)",
  background: "rgba(255,255,255,0.05)",
  color: "#fff",
  outline: "none",
},

textarea: {
  width: "100%",
  height: "120px",
  padding: "16px 14px",
  borderRadius: "12px",
  border: "1px solid rgba(255,255,255,0.2)",
  background: "rgba(255,255,255,0.05)",
  color: "#fff",
  outline: "none",
},

success: {
  marginTop: "15px",
  padding: "12px",
  borderRadius: "10px",
  background: "rgba(34,197,94,0.2)",
  color: "#4ade80",
  textAlign: "center",
  animation: "fadeInUp 0.5s ease",
},

};