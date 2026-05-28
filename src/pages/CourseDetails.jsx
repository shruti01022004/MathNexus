import { useParams, useNavigate } from "react-router-dom";

export default function CourseDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const courses = {
    6: [
      "Knowing Our Numbers",
      "Whole Numbers",
      "Playing with Numbers",
      "Basic Geometrical Ideas",
      "Fractions",
      "Decimals",
    ],
    7: [
      "Integers",
      "Fractions and Decimals",
      "Data Handling",
      "Simple Equations",
      "Lines and Angles",
    ],
    8: [
      "Rational Numbers",
      "Linear Equations",
      "Understanding Quadrilaterals",
      "Data Handling",
    ],
    9: [
      "Number Systems",
      "Polynomials",
      "Coordinate Geometry",
      "Linear Equations in Two Variables",
    ],
    10: [
      "Real Numbers",
      "Polynomials",
      "Pair of Linear Equations",
      "Quadratic Equations",
      "Trigonometry",
      "Probability",
    ],
  };

  return (
    <div style={styles.page}>

      <h1 style={styles.title}>Class {id} Mathematics</h1>

      <div style={styles.grid}>
        {courses[id]?.map((chapter, index) => (
          <div
            key={index}
            style={styles.card}
            onClick={() => navigate(`/lesson/${id}/${index}`)}
          >
            <h3>{chapter}</h3>
            <p>NCERT Chapter</p>

            <button style={styles.button}>
              Start Learning →
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
    background: "linear-gradient(135deg, #020617, #0f172a)",
    color: "white",
  },

  title: {
    textAlign: "center",
    fontSize: "40px",
    marginBottom: "40px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "25px",
  },

  card: {
    backdropFilter: "blur(15px)",
    background: "rgba(255,255,255,0.05)",
    padding: "20px",
    borderRadius: "20px",
    cursor: "pointer",
    border: "1px solid rgba(255,255,255,0.1)",
    transition: "0.3s",
  },

  button: {
    marginTop: "15px",
    padding: "8px 15px",
    borderRadius: "20px",
    border: "none",
    background: "linear-gradient(90deg, #ec4899, #8b5cf6)",
    color: "white",
    cursor: "pointer",
  },
};