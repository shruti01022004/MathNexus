import { useState } from "react";

export default function Quiz() {

  const [selectedClass, setSelectedClass] = useState(null);
  const [currentQ, setCurrentQ] = useState(0);

  const [score, setScore] = useState(0);

  const [wrong, setWrong] = useState(0);

  const [started, setStarted] = useState(false);

  const [selectedOption, setSelectedOption] = useState(null);

  const [showAnswer, setShowAnswer] = useState(false);

  const [quizFinished, setQuizFinished] = useState(false);

  const data = {

    "Class 6": [

      {
        q: "What is the HCF of 12 and 18?",
        options: ["6", "3", "9", "12"],
        answer: "6",
      },

      {
        q: "Which shape has 3 sides?",
        options: ["Square", "Circle", "Triangle", "Rectangle"],
        answer: "Triangle",
      },

      {
        q: "50 ÷ 5 = ?",
        options: ["5", "10", "15", "20"],
        answer: "10",
      },

      {
        q: "What is the perimeter of a square of side 4 cm?",
        options: ["8 cm", "12 cm", "16 cm", "20 cm"],
        answer: "16 cm",
      },

      {
        q: "Roman numeral for 50?",
        options: ["L", "V", "X", "C"],
        answer: "L",
      },

      {
        q: "12 × 8 = ?",
        options: ["96", "88", "108", "84"],
        answer: "96",
      },

      {
        q: "Which is a prime number?",
        options: ["9", "15", "11", "21"],
        answer: "11",
      },

      {
        q: "Area of rectangle formula?",
        options: ["l+b", "l×b", "2l+b", "2(l+b)"],
        answer: "l×b",
      },

      {
        q: "What is half of 100?",
        options: ["25", "50", "75", "60"],
        answer: "50",
      },

      {
        q: "How many degrees in a right angle?",
        options: ["45°", "90°", "180°", "360°"],
        answer: "90°",
      },
    ],

    "Class 7": [

      {
        q: "5² = ?",
        options: ["10", "20", "25", "15"],
        answer: "25",
      },

      {
        q: "LCM of 4 and 6?",
        options: ["24", "12", "18", "6"],
        answer: "12",
      },

      {
        q: "Sum of angles in triangle?",
        options: ["90°", "180°", "360°", "120°"],
        answer: "180°",
      },

      {
        q: "Decimal form of 1/2?",
        options: ["0.2", "0.5", "0.7", "1.5"],
        answer: "0.5",
      },

      {
        q: "What is 15% of 100?",
        options: ["10", "15", "20", "25"],
        answer: "15",
      },

      {
        q: "Perimeter of square formula?",
        options: ["4a", "a²", "2a", "a+a"],
        answer: "4a",
      },

      {
        q: "Integer includes?",
        options: ["Only positive", "Negative numbers", "Fractions", "Decimals"],
        answer: "Negative numbers",
      },

      {
        q: "7 × 9 = ?",
        options: ["63", "72", "54", "81"],
        answer: "63",
      },

      {
        q: "What is an acute angle?",
        options: ["Less than 90°", "90°", "More than 180°", "180°"],
        answer: "Less than 90°",
      },

      {
        q: "What is the value of π?",
        options: ["2.14", "3.14", "4.14", "1.14"],
        answer: "3.14",
      },
    ],

    "Class 8": [

      {
        q: "Square root of 64?",
        options: ["6", "7", "8", "9"],
        answer: "8",
      },

      {
        q: "Cube of 3?",
        options: ["9", "18", "27", "81"],
        answer: "27",
      },

      {
        q: "Area of square formula?",
        options: ["a²", "4a", "2a", "a+a"],
        answer: "a²",
      },

      {
        q: "Linear equation example?",
        options: ["x²+1", "2x+3=0", "x³", "x²+y²"],
        answer: "2x+3=0",
      },

      {
        q: "What is 25% of 200?",
        options: ["25", "50", "75", "100"],
        answer: "50",
      },

      {
        q: "Angle on straight line?",
        options: ["90°", "180°", "360°", "45°"],
        answer: "180°",
      },

      {
        q: "What is algebra?",
        options: ["Shapes", "Only numbers", "Numbers and variables", "Angles"],
        answer: "Numbers and variables",
      },

      {
        q: "Volume of cube?",
        options: ["a²", "a³", "4a", "2a"],
        answer: "a³",
      },

      {
        q: "Which is rational number?",
        options: ["√2", "π", "3/4", "√5"],
        answer: "3/4",
      },

      {
        q: "Mean means?",
        options: ["Average", "Difference", "Total", "Product"],
        answer: "Average",
      },
    ],
    "Class 9": [

  {
    q: "What is the degree of polynomial x³ + 2x² + 1 ?",
    options: ["1", "2", "3", "4"],
    answer: "3",
  },

  {
    q: "Which theorem states a² + b² = c² ?",
    options: [
      "Pythagoras Theorem",
      "Euclid Theorem",
      "Thales Theorem",
      "Triangle Theorem",
    ],
    answer: "Pythagoras Theorem",
  },

  {
    q: "What is the value of √81 ?",
    options: ["7", "8", "9", "10"],
    answer: "9",
  },

  {
    q: "Probability value lies between?",
    options: ["0 and 1", "1 and 10", "-1 and 1", "0 and 100"],
    answer: "0 and 1",
  },

  {
    q: "How many axes are there in coordinate geometry?",
    options: ["1", "2", "3", "4"],
    answer: "2",
  },

  {
    q: "What is the sum of angles of a triangle?",
    options: ["90°", "180°", "270°", "360°"],
    answer: "180°",
  },

  {
    q: "Which graph represents a linear equation?",
    options: [
      "Straight line",
      "Circle",
      "Parabola",
      "Curve",
    ],
    answer: "Straight line",
  },

  {
    q: "What is the midpoint of (2,4) and (6,8) ?",
    options: ["(4,6)", "(2,6)", "(8,12)", "(5,7)"],
    answer: "(4,6)",
  },

  {
    q: "A rational number can be written as?",
    options: ["p/q", "√2", "π", "∞"],
    answer: "p/q",
  },

  {
    q: "Area of triangle formula?",
    options: [
      "1/2 × base × height",
      "base × height",
      "side²",
      "2(l+b)",
    ],
    answer: "1/2 × base × height",
  },
],

"Class 10": [

  {
    q: "What is the value of sin 90° ?",
    options: ["0", "1", "2", "-1"],
    answer: "1",
  },

  {
    q: "Quadratic equation standard form?",
    options: [
      "ax²+bx+c=0",
      "ax+b=0",
      "x+y=0",
      "a+b=c",
    ],
    answer: "ax²+bx+c=0",
  },

  {
    q: "What is the discriminant formula?",
    options: [
      "b²-4ac",
      "a²+b²",
      "2ab",
      "a+b+c",
    ],
    answer: "b²-4ac",
  },

  {
    q: "What is tan 45° ?",
    options: ["0", "1", "√3", "2"],
    answer: "1",
  },

  {
    q: "What is cos 0° ?",
    options: ["0", "1", "-1", "2"],
    answer: "1",
  },

  {
    q: "Pythagoras theorem formula?",
    options: [
      "a²+b²=c²",
      "a+b=c",
      "ab=c",
      "a²-b²=c²",
    ],
    answer: "a²+b²=c²",
  },

  {
    q: "What is the probability of a sure event?",
    options: ["0", "1", "1/2", "-1"],
    answer: "1",
  },

  {
    q: "Arithmetic Progression stands for?",
    options: [
      "Arithmetic Progression",
      "Average Progression",
      "Advanced Pattern",
      "None",
    ],
    answer: "Arithmetic Progression",
  },

  {
    q: "Distance formula in coordinate geometry?",
    options: [
      "√[(x₂-x₁)² + (y₂-y₁)²]",
      "x+y",
      "a²+b²",
      "2(l+b)",
    ],
    answer: "√[(x₂-x₁)² + (y₂-y₁)²]",
  },

  {
    q: "What is the median?",
    options: [
      "Middle value",
      "Average",
      "Highest value",
      "Total",
    ],
    answer: "Middle value",
  },
],
  };

  const startQuiz = (cls) => {

    setSelectedClass(cls);

    setCurrentQ(0);

    setScore(0);

    setWrong(0);

    setStarted(true);

    setQuizFinished(false);

    setSelectedOption(null);

    setShowAnswer(false);
  };

  const handleAnswer = (opt) => {

    if (showAnswer) return;

    setSelectedOption(opt);

    setShowAnswer(true);

    const correctAnswer =
      data[selectedClass][currentQ].answer;

    if (opt === correctAnswer) {

      setScore((prev) => prev + 1);

    } else {

      setWrong((prev) => prev + 1);
    }

    setTimeout(() => {

      if (currentQ < data[selectedClass].length - 1) {

        setCurrentQ((prev) => prev + 1);

        setSelectedOption(null);

        setShowAnswer(false);

      } else {

        setQuizFinished(true);

        setStarted(false);
      }

    }, 1500);
  };

  return (
    <div style={styles.page}>

      <div style={styles.glow1}></div>

      <div style={styles.glow2}></div>

      <h1 style={styles.heading}>
        🚀 NCERT Maths Quiz
      </h1>

      {/* CLASS SELECTION */}
      {!started && !quizFinished && (

        <div style={styles.grid}>

          {Object.keys(data).map((cls, i) => (

            <div
              key={i}
              style={styles.card}
              onClick={() => startQuiz(cls)}
            >
              <h2>{cls}</h2>

              <p>10 Questions Quiz</p>
            </div>
          ))}
        </div>
      )}

      {/* QUIZ SECTION */}
      {started && (

        <div style={styles.quizBox}>

          <h2>{selectedClass}</h2>

          {/* PROGRESS */}
          <div style={styles.progressWrapper}>

            <div
              style={{
                ...styles.progress,

                width: `${
                  ((currentQ + 1) /
                    data[selectedClass].length) *
                  100
                }%`,
              }}
            ></div>
          </div>

          <p style={styles.questionCount}>
            Question {currentQ + 1} /{" "}
            {data[selectedClass].length}
          </p>

          <h3 style={styles.question}>
            {data[selectedClass][currentQ].q}
          </h3>

          <div style={styles.options}>

            {data[selectedClass][currentQ].options.map(
              (opt, i) => {

                const correct =
                  opt ===
                  data[selectedClass][currentQ].answer;

                const isSelected =
                  selectedOption === opt;

                return (
                  <button
                    key={i}
                    onClick={() => handleAnswer(opt)}
                    style={{
                      ...styles.btn,

                      background:
                        showAnswer && correct
                          ? "#22c55e"
                          : showAnswer &&
                            isSelected &&
                            !correct
                          ? "#ef4444"
                          : "rgba(255,255,255,0.08)",
                    }}
                  >
                    {opt}
                  </button>
                );
              }
            )}
          </div>

          <div style={styles.score}>
            ⭐ Correct: {score}
          </div>

        </div>
      )}

      {/* RESULT */}
      {quizFinished && (

        <div style={styles.resultBox}>

          <h1>🎉 Quiz Completed</h1>

          <h2>
            ✅ Correct Answers: {score}
          </h2>

          <h2>
            ❌ Wrong Answers: {wrong}
          </h2>

          <h2>
            📊 Score: {score} / 10
          </h2>

          <button
            style={styles.restartBtn}
            onClick={() => {
              setQuizFinished(false);
            }}
          >
            Play Again 🚀
          </button>

        </div>
      )}
    </div>
  );
}

const styles = {

  page: {
    minHeight: "100vh",
    padding: "100px 40px",
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

  heading: {
    textAlign: "center",
    color: "#fff",
    fontSize: "42px",
    marginBottom: "50px",
    position: "relative",
    zIndex: 2,
  },

  grid: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit,minmax(240px,1fr))",

    gap: "25px",

    position: "relative",
    zIndex: 2,
  },

  card: {
    padding: "30px",

    borderRadius: "25px",

    background: "rgba(255,255,255,0.05)",

    backdropFilter: "blur(20px)",

    color: "white",

    textAlign: "center",

    cursor: "pointer",

    transition: "0.3s",

    border: "1px solid rgba(255,255,255,0.1)",
  },

  quizBox: {
    maxWidth: "700px",

    margin: "auto",

    padding: "40px",

    borderRadius: "30px",

    background: "rgba(255,255,255,0.05)",

    backdropFilter: "blur(20px)",

    color: "white",

    position: "relative",

    zIndex: 2,
  },

  progressWrapper: {
    width: "100%",
    height: "10px",
    background: "rgba(255,255,255,0.1)",
    borderRadius: "10px",
    overflow: "hidden",
    marginTop: "20px",
  },

  progress: {
    height: "100%",
    background:
      "linear-gradient(90deg,#8b5cf6,#ec4899)",

    transition: "0.4s",
  },

  questionCount: {
    marginTop: "15px",
    color: "#cbd5e1",
  },

  question: {
    marginTop: "25px",
    fontSize: "24px",
  },

  options: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    marginTop: "30px",
  },

  btn: {
    padding: "15px",

    borderRadius: "15px",

    border: "1px solid rgba(255,255,255,0.1)",

    color: "white",

    cursor: "pointer",

    transition: "0.3s",

    background: "rgba(255,255,255,0.08)",
  },

  score: {
    marginTop: "25px",
    fontSize: "20px",
    color: "#facc15",
    fontWeight: "700",
  },

  resultBox: {
    maxWidth: "500px",

    margin: "auto",

    padding: "40px",

    borderRadius: "30px",

    textAlign: "center",

    background: "rgba(255,255,255,0.06)",

    backdropFilter: "blur(20px)",

    color: "white",

    position: "relative",

    zIndex: 2,
  },

  restartBtn: {
    marginTop: "25px",

    padding: "14px 28px",

    borderRadius: "20px",

    border: "none",

    background:
      "linear-gradient(90deg,#8b5cf6,#ec4899)",

    color: "white",

    fontWeight: "700",

    cursor: "pointer",
  },
};