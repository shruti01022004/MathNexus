import { useEffect, useState } from "react";

export default function Dashboard() {

  const [user, setUser] = useState(null);

  useEffect(() => {

    const currentUser =
      JSON.parse(localStorage.getItem("user"));

    setUser(currentUser);

  }, []);

  return (
    <div style={styles.page}>

      {/* BACKGROUND GLOW */}
      <div style={styles.glow1}></div>

      <div style={styles.glow2}></div>

      {/* TOP SECTION */}
      <div style={styles.hero}>

        <div>

          <h1 style={styles.heading}>
            Welcome Back 👋
          </h1>

          <p style={styles.sub}>
            {user?.name || "Math Explorer"}
          </p>

        </div>

        <div style={styles.profile}>

          {(user?.name || "M")
            .charAt(0)
            .toUpperCase()}

        </div>

      </div>

      {/* STATS */}
      <div style={styles.statsGrid}>

        <div style={styles.statCard}>

          <h2 style={styles.statNumber}>12</h2>

          <p style={styles.statText}>
            Courses Completed
          </p>

        </div>

        <div style={styles.statCard}>

          <h2 style={styles.statNumber}>84%</h2>

          <p style={styles.statText}>
            Quiz Accuracy
          </p>

        </div>

        <div style={styles.statCard}>

          <h2 style={styles.statNumber}>25</h2>

          <p style={styles.statText}>
            Lessons Watched
          </p>

        </div>

        <div style={styles.statCard}>

          <h2 style={styles.statNumber}>1200 XP</h2>

          <p style={styles.statText}>
            Total Points
          </p>

        </div>

      </div>

      {/* MAIN CONTENT */}
      <div style={styles.contentGrid}>

        {/* RECENT COURSES */}
        <div style={styles.bigCard}>

          <h2 style={styles.cardTitle}>
            📚 Continue Learning
          </h2>

          <div style={styles.courseItem}>

            <div>

              <h3>Class 10 Algebra</h3>

              <p>Progress: 75%</p>

            </div>

            <button style={styles.btn}>
              Resume
            </button>

          </div>

          <div style={styles.progressBar}>

            <div
              style={{
                ...styles.progressFill,
                width: "75%",
              }}
            ></div>

          </div>

          <div style={styles.courseItem}>

            <div>

              <h3>Class 9 Geometry</h3>

              <p>Progress: 50%</p>

            </div>

            <button style={styles.btn}>
              Resume
            </button>

          </div>

          <div style={styles.progressBar}>

            <div
              style={{
                ...styles.progressFill,
                width: "50%",
              }}
            ></div>

          </div>

        </div>

        {/* ACHIEVEMENTS */}
        <div style={styles.smallCard}>

          <h2 style={styles.cardTitle}>
            🏆 Achievements
          </h2>

          <div style={styles.badge}>
            ⭐ Quiz Master
          </div>

          <div style={styles.badge}>
            🚀 Fast Learner
          </div>

          <div style={styles.badge}>
            📘 10 Lessons Completed
          </div>

        </div>

      </div>

      {/* RECENT QUIZZES */}
      <div style={styles.quizSection}>

        <h2 style={styles.cardTitle}>
          🧠 Recent Quiz Scores
        </h2>

        <div style={styles.quizGrid}>

          <div style={styles.quizCard}>
            <h3>Class 6</h3>
            <p>8 / 10</p>
          </div>

          <div style={styles.quizCard}>
            <h3>Class 7</h3>
            <p>9 / 10</p>
          </div>

          <div style={styles.quizCard}>
            <h3>Class 8</h3>
            <p>7 / 10</p>
          </div>

          <div style={styles.quizCard}>
            <h3>Class 10</h3>
            <p>10 / 10</p>
          </div>

        </div>

      </div>

    </div>
  );
}

const styles = {

  page: {
    minHeight: "100vh",

    padding: "120px 50px",

    background:
      "linear-gradient(135deg,#020617,#0f172a)",

    position: "relative",

    overflow: "hidden",
  },

  glow1: {
    position: "absolute",

    width: "300px",

    height: "300px",

    background: "#8b5cf6",

    borderRadius: "50%",

    filter: "blur(120px)",

    top: "10%",

    left: "10%",

    opacity: 0.4,
  },

  glow2: {
    position: "absolute",

    width: "300px",

    height: "300px",

    background: "#ec4899",

    borderRadius: "50%",

    filter: "blur(120px)",

    bottom: "10%",

    right: "10%",

    opacity: 0.4,
  },

  hero: {
    display: "flex",

    justifyContent: "space-between",

    alignItems: "center",

    marginBottom: "40px",

    position: "relative",

    zIndex: 2,
  },

  heading: {
    color: "#fff",

    fontSize: "42px",

    fontWeight: "800",
  },

  sub: {
    color: "#cbd5e1",

    marginTop: "8px",

    fontSize: "18px",
  },

  profile: {
    width: "70px",

    height: "70px",

    borderRadius: "50%",

    background:
      "linear-gradient(90deg,#8b5cf6,#ec4899)",

    display: "flex",

    alignItems: "center",

    justifyContent: "center",

    color: "white",

    fontSize: "28px",

    fontWeight: "700",
  },

  statsGrid: {
    display: "grid",

    gridTemplateColumns:
      "repeat(auto-fit,minmax(220px,1fr))",

    gap: "25px",

    marginBottom: "40px",

    position: "relative",

    zIndex: 2,
  },

  statCard: {
    padding: "30px",

    borderRadius: "25px",

    background: "rgba(255,255,255,0.05)",

    backdropFilter: "blur(20px)",

    border: "1px solid rgba(255,255,255,0.1)",

    textAlign: "center",

    color: "white",
  },

  statNumber: {
    fontSize: "38px",

    fontWeight: "800",

    background:
      "linear-gradient(90deg,#8b5cf6,#ec4899)",

    WebkitBackgroundClip: "text",

    WebkitTextFillColor: "transparent",
  },

  statText: {
    marginTop: "10px",

    color: "#cbd5e1",
  },

  contentGrid: {
    display: "grid",

    gridTemplateColumns: "2fr 1fr",

    gap: "25px",

    marginBottom: "40px",

    position: "relative",

    zIndex: 2,
  },

  bigCard: {
    padding: "30px",

    borderRadius: "25px",

    background: "rgba(255,255,255,0.05)",

    backdropFilter: "blur(20px)",

    border: "1px solid rgba(255,255,255,0.1)",

    color: "white",
  },

  smallCard: {
    padding: "30px",

    borderRadius: "25px",

    background: "rgba(255,255,255,0.05)",

    backdropFilter: "blur(20px)",

    border: "1px solid rgba(255,255,255,0.1)",

    color: "white",
  },

  cardTitle: {
    marginBottom: "25px",

    fontSize: "24px",

    fontWeight: "700",
  },

  courseItem: {
    display: "flex",

    justifyContent: "space-between",

    alignItems: "center",

    marginBottom: "10px",
  },

  progressBar: {
    width: "100%",

    height: "10px",

    background: "rgba(255,255,255,0.1)",

    borderRadius: "10px",

    overflow: "hidden",

    marginBottom: "25px",
  },

  progressFill: {
    height: "100%",

    background:
      "linear-gradient(90deg,#8b5cf6,#ec4899)",
  },

  btn: {
    padding: "10px 20px",

    borderRadius: "20px",

    border: "none",

    background:
      "linear-gradient(90deg,#8b5cf6,#ec4899)",

    color: "white",

    cursor: "pointer",

    fontWeight: "600",
  },

  badge: {
    padding: "15px",

    borderRadius: "15px",

    background: "rgba(255,255,255,0.08)",

    marginBottom: "15px",

    textAlign: "center",
  },

  quizSection: {
    padding: "30px",

    borderRadius: "25px",

    background: "rgba(255,255,255,0.05)",

    backdropFilter: "blur(20px)",

    border: "1px solid rgba(255,255,255,0.1)",

    position: "relative",

    zIndex: 2,

    color: "white",
  },

  quizGrid: {
    display: "grid",

    gridTemplateColumns:
      "repeat(auto-fit,minmax(180px,1fr))",

    gap: "20px",
  },

  quizCard: {
    padding: "25px",

    borderRadius: "20px",

    background: "rgba(255,255,255,0.08)",

    textAlign: "center",
  },
};