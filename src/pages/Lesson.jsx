import { useParams } from "react-router-dom";

export default function Lesson() {
  const { id, chapterId } = useParams();

  const lessons = {
    6: [
      {
        title: "Knowing Our Numbers",
        video: "https://www.youtube.com/embed/5o3fMLPY7qY",

        notes: {
          intro:
            "In this chapter, we learn about large numbers, place values, and number comparison.",

          points: [
            "Place value system (ones, tens, hundreds...)",
            "Indian vs International number system",
            "Comparing large numbers",
            "Rounding off numbers",
          ],

          example:
            "Example: Compare 4,56,789 and 4,65,321 → 4,65,321 is greater",

          formula: "No formulas, concept-based chapter",
        },
      },

      {
        title: "Whole Numbers",
        video: "https://www.youtube.com/embed/8r5s8vR7FvY",

        notes: {
          intro:
            "Whole numbers include all natural numbers along with zero.",

          points: [
            "0 is the smallest whole number",
            "Closure property",
            "Commutative property",
            "Associative property",
          ],

          example:
            "Example: 2 + 3 = 3 + 2 (Commutative Property)",

          formula: "a + b = b + a",
        },
      },
    ],
  };

  const lesson = lessons[id]?.[chapterId];

  if (!lesson) {
    return (
      <div style={{ color: "white", padding: "100px" }}>
        <h2>🚧 Lesson Coming Soon...</h2>
      </div>
    );
  }

  return (
    <div style={styles.page}>
      
      {/* TITLE */}
      <h1 style={styles.title}>{lesson.title}</h1>

      {/* 🎥 VIDEO */}
      <div style={styles.videoBox}>
        <iframe
          width="100%"
          height="400"
          src={lesson.video}
          title="lesson"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>

      {/* 📄 NOTES */}
      <div style={styles.notesCard}>
        <h2>📘 Chapter Notes</h2>

        <p style={styles.intro}>{lesson.notes.intro}</p>

        <ul>
          {lesson.notes.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>

        <h3>📌 Example</h3>
        <p>{lesson.notes.example}</p>

        <h3>📐 Formula</h3>
        <p>{lesson.notes.formula}</p>
      </div>

      {/* ACTION BUTTONS */}
      <div style={styles.actions}>
        <button style={styles.download}>📥 Download Notes</button>
        <button style={styles.quiz}>🧠 Take Quiz</button>
      </div>

    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    padding: "100px 40px",
    background: "linear-gradient(135deg, #020617, #0f172a)",
    color: "white",
  },

  title: {
    fontSize: "36px",
    marginBottom: "20px",
  },

  videoBox: {
    borderRadius: "15px",
    overflow: "hidden",
    marginBottom: "30px",
    boxShadow: "0 15px 40px rgba(0,0,0,0.5)",
  },

  notesCard: {
    background: "rgba(255,255,255,0.05)",
    padding: "25px",
    borderRadius: "15px",
    backdropFilter: "blur(10px)",
    lineHeight: "1.8",
  },

  intro: {
    marginBottom: "15px",
    color: "#cbd5f5",
  },

  actions: {
    marginTop: "30px",
    display: "flex",
    gap: "20px",
  },

  download: {
    padding: "12px 20px",
    borderRadius: "25px",
    border: "none",
    background: "linear-gradient(90deg, #22c55e, #4ade80)",
    color: "white",
    cursor: "pointer",
  },

  quiz: {
    padding: "12px 20px",
    borderRadius: "25px",
    border: "none",
    background: "linear-gradient(90deg, #ec4899, #8b5cf6)",
    color: "white",
    cursor: "pointer",
  },
};