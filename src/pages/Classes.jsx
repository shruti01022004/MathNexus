import { useNavigate } from "react-router-dom";

export default function Classes() {
  const navigate = useNavigate();

  const classes = [
    { id: 6, title: "Class 6", desc: "Foundation Math Concepts" },
    { id: 7, title: "Class 7", desc: "Advanced Basics + Practice" },
    { id: 8, title: "Class 8", desc: "Pre-Algebra & Logic" },
    { id: 9, title: "Class 9", desc: "Algebra, Geometry, Statistics" },
    { id: 10, title: "Class 10", desc: "Board Exam Preparation" },
  ];

  return (
    <div style={styles.page}>

      {/* 🔥 BACKGROUND GLOW */}
      <div style={styles.glow1}></div>
      <div style={styles.glow2}></div>

      {/* HERO */}
      <div style={styles.hero}>
        <h1 style={styles.heroTitle}>
          CBSE Mathematics Courses
        </h1>

        <p style={styles.heroText}>
          Structured learning for Classes 6–10 with quizzes & concept clarity
        </p>
      </div>

      {/* CARDS */}
      <div style={styles.grid}>
        {classes.map((cls) => (
          <div
            key={cls.id}
            style={styles.card}
            onClick={() => navigate(`/courses/${cls.id}`)}

            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-10px) scale(1.04)";
              e.currentTarget.style.boxShadow = "0 25px 60px rgba(0,0,0,0.3)";
            }}

            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "none";
              e.currentTarget.style.boxShadow = styles.card.boxShadow;
            }}
          >
            <h2 style={styles.classTitle}>{cls.title}</h2>
            <p style={styles.classDesc}>{cls.desc}</p>

            <button style={styles.button}>
              Explore →
            </button>
          </div>
        ))}
      </div>

    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    padding: "120px 60px",
    position: "relative",
    overflow: "hidden",

    background: "linear-gradient(135deg, #020617, #0f172a)",
  },

  /* 🔥 GLOW BACKGROUND */
  glow1: {
    position: "absolute",
    width: "300px",
    height: "300px",
    background: "#ec4899",
    borderRadius: "50%",
    filter: "blur(120px)",
    top: "10%",
    left: "10%",
    opacity: 0.5,
  },

  glow2: {
    position: "absolute",
    width: "300px",
    height: "300px",
    background: "#3b82f6",
    borderRadius: "50%",
    filter: "blur(120px)",
    bottom: "10%",
    right: "10%",
    opacity: 0.5,
  },

  hero: {
    textAlign: "center",
    marginBottom: "60px",
    zIndex: 2,
    position: "relative",
  },

  heroTitle: {
    fontSize: "46px",
    fontWeight: "800",
    color: "#fff",
  },

  heroText: {
    marginTop: "10px",
    color: "#cbd5f5",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "30px",
    zIndex: 2,
    position: "relative",
  },

  /* 💎 GLASS CARD */
  card: {
    backdropFilter: "blur(20px)",
    background: "rgba(255,255,255,0.05)",
    borderRadius: "20px",
    padding: "25px",
    cursor: "pointer",

    border: "1px solid rgba(255,255,255,0.1)",

    boxShadow: "0 15px 40px rgba(0,0,0,0.4)",
    transition: "0.3s",
  },

  classTitle: {
    fontSize: "22px",
    fontWeight: "700",
    color: "#fff",
  },

  classDesc: {
    marginTop: "10px",
    color: "#cbd5f5",
  },

  button: {
    marginTop: "20px",
    padding: "10px 20px",
    borderRadius: "25px",
    border: "none",

    background: "linear-gradient(90deg, #ec4899, #8b5cf6)",
    color: "#fff",
    fontWeight: "600",

    cursor: "pointer",
  },
};