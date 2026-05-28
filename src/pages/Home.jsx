import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Home() {

  const navigate = useNavigate();

  const words = [
    "Mathematics",
    "Algebra",
    "Calculus",
    "Success",
  ];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  // ✨ TYPEWRITER EFFECT
  useEffect(() => {

    let i = 0;

    const current = words[index];

    const interval = setInterval(() => {

      setText(current.slice(0, i));

      i++;

      if (i > current.length) {

        clearInterval(interval);

        setTimeout(() => {

          setIndex((prev) =>
            (prev + 1) % words.length
          );

        }, 1200);

      }

    }, 80);

    return () => clearInterval(interval);

  }, [index]);

  // ✨ FLOAT ANIMATION
  useEffect(() => {

    const style = document.createElement("style");

    style.innerHTML = `

      @keyframes float {
        0% {
          transform: translateY(0px);
        }

        50% {
          transform: translateY(-20px);
        }

        100% {
          transform: translateY(0px);
        }
      }

      @keyframes pulseGlow {
        0% {
          opacity: 0.4;
        }

        50% {
          opacity: 0.8;
        }

        100% {
          opacity: 0.4;
        }
      }

    `;

    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };

  }, []);

  return (

    <div style={styles.page}>

      {/* 🌌 STARS */}
      <div style={styles.stars}></div>

      {/* 🌌 OVERLAY */}
      <div style={styles.overlay}></div>

      {/* ✨ PARTICLES */}
      <div style={styles.particle1}></div>
      <div style={styles.particle2}></div>
      <div style={styles.particle3}></div>

      {/* 🔢 FLOATING SYMBOLS */}

      <motion.div
        style={styles.symbol1}
        animate={{
          y: [0, -20, 0],
          rotate: [0, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
      >
        ∑
      </motion.div>

      <motion.div
        style={styles.symbol2}
        animate={{
          y: [0, 30, 0],
          rotate: [0, -360],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
      >
        π
      </motion.div>

      <motion.div
        style={styles.symbol3}
        animate={{
          x: [0, 20, 0],
          rotate: [0, 360],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
        }}
      >
        √
      </motion.div>

      <motion.div
        style={styles.symbol4}
        animate={{
          y: [0, -25, 0],
          rotate: [0, -360],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
      >
        ∞
      </motion.div>

      {/* 🚀 HERO CONTENT */}

      <div style={styles.content}>

        <motion.p
          style={styles.small}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          🚀 FUTURE OF MATHEMATICS LEARNING
        </motion.p>

        <motion.h1
          style={styles.heading}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Explore The <br />

          <span style={styles.highlight}>
            {text}
          </span>

          <br />

          Galaxy
        </motion.h1>

        <motion.p
          style={styles.subtext}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Enter a futuristic world of animated
          mathematics learning with quizzes,
          interactive lessons, dashboards,
          glowing effects & smart learning.
        </motion.p>

        <motion.div
          style={styles.buttons}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >

          <button
            style={styles.primaryBtn}
            onClick={() => navigate("/classes")}
          >
            Start Journey 🚀
          </button>

          <button style={styles.secondaryBtn}>
            Explore Galaxy
          </button>

        </motion.div>

      </div>

      {/* 👨‍🏫 MALE TEACHER IMAGE */}

<motion.div
  style={styles.teacherWrapper}
  animate={{
    y: [0, -20, 0],
  }}
  transition={{
    duration: 5,
    repeat: Infinity,
  }}
>

  {/* GLOW */}
  <div style={styles.teacherGlow}></div>

  

  {/* TEACHER IMAGE */}

  <motion.img

    src="https://static.vecteezy.com/system/resources/previews/047/449/768/original/cheerful-educator-3d-cartoon-teaching-in-a-vibrant-classroom-png.png"

    alt="teacher"

    style={styles.heroImg}

    animate={{
      rotate: [0, 2, -2, 0],
    }}

    transition={{
      duration: 6,
      repeat: Infinity,
    }}
  />

</motion.div>

      {/* 🌌 GLOW EFFECTS */}

      <div style={styles.glow1}></div>
      <div style={styles.glow2}></div>

    </div>
  );
}

const styles = {

  page: {
    height: "100vh",
    width: "100%",
    overflow: "hidden",
    position: "relative",

    background:
      "radial-gradient(circle at top,#111827,#020617 70%)",
  },

  stars: {
    position: "absolute",
    width: "100%",
    height: "100%",

    backgroundImage:
      "radial-gradient(white 1px, transparent 1px)",

    backgroundSize: "40px 40px",

    opacity: 0.15,
  },

  overlay: {
    position: "absolute",
    width: "100%",
    height: "100%",

    background:
      "linear-gradient(to right, rgba(2,6,23,0.95), rgba(15,23,42,0.4))",
  },

  content: {
    position: "relative",

    zIndex: 10,

    height: "100%",

    display: "flex",

    flexDirection: "column",

    justifyContent: "center",

    paddingLeft: "90px",

    maxWidth: "700px",

    color: "white",
  },

  small: {
    color: "#c084fc",

    letterSpacing: "3px",

    fontSize: "14px",

    marginBottom: "10px",
  },

  heading: {
    fontSize: "78px",

    fontWeight: "800",

    lineHeight: "1.1",

    marginBottom: "20px",
  },

  highlight: {
    background:
      "linear-gradient(90deg,#8b5cf6,#ec4899)",

    WebkitBackgroundClip: "text",

    WebkitTextFillColor: "transparent",

    textShadow:
      "0 0 35px rgba(168,85,247,0.8)",
  },

  subtext: {
    color: "#cbd5e1",

    lineHeight: "1.8",

    marginBottom: "35px",

    fontSize: "18px",
  },

  buttons: {
    display: "flex",

    gap: "20px",
  },

  primaryBtn: {
    padding: "16px 34px",

    borderRadius: "50px",

    border: "none",

    background:
      "linear-gradient(90deg,#8b5cf6,#ec4899)",

    color: "white",

    fontWeight: "700",

    cursor: "pointer",

    boxShadow:
      "0 0 25px rgba(168,85,247,0.5)",

    transition: "0.3s",
  },

  secondaryBtn: {
    padding: "16px 34px",

    borderRadius: "50px",

    border: "1px solid rgba(255,255,255,0.2)",

    background: "rgba(255,255,255,0.05)",

    color: "white",

    backdropFilter: "blur(10px)",

    cursor: "pointer",
  },

  glow1: {
    position: "absolute",

    width: "400px",

    height: "400px",

    background: "#8b5cf6",

    borderRadius: "50%",

    filter: "blur(140px)",

    top: "-100px",

    right: "-100px",

    opacity: 0.4,

    animation: "pulseGlow 6s infinite",
  },

  glow2: {
    position: "absolute",

    width: "300px",

    height: "300px",

    background: "#ec4899",

    borderRadius: "50%",

    filter: "blur(140px)",

    bottom: "-100px",

    left: "-100px",

    opacity: 0.4,

    animation: "pulseGlow 6s infinite",
  },

  particle1: {
    position: "absolute",

    width: "10px",

    height: "10px",

    borderRadius: "50%",

    background: "#fff",

    top: "20%",

    left: "60%",

    boxShadow: "0 0 20px white",

    animation: "float 6s infinite ease-in-out",
  },

  particle2: {
    position: "absolute",

    width: "14px",

    height: "14px",

    borderRadius: "50%",

    background: "#8b5cf6",

    top: "70%",

    left: "80%",

    boxShadow: "0 0 20px #8b5cf6",

    animation: "float 8s infinite ease-in-out",
  },

  particle3: {
    position: "absolute",

    width: "12px",

    height: "12px",

    borderRadius: "50%",

    background: "#ec4899",

    top: "50%",

    left: "50%",

    boxShadow: "0 0 20px #ec4899",

    animation: "float 7s infinite ease-in-out",
  },

  symbol1: {
    position: "absolute",

    top: "15%",

    right: "15%",

    fontSize: "90px",

    color: "#8b5cf6",

    opacity: 0.2,
  },

  symbol2: {
    position: "absolute",

    bottom: "20%",

    right: "30%",

    fontSize: "100px",

    color: "#ec4899",

    opacity: 0.2,
  },

  symbol3: {
    position: "absolute",

    top: "60%",

    left: "10%",

    fontSize: "80px",

    color: "#06b6d4",

    opacity: 0.2,
  },

  symbol4: {
    position: "absolute",

    top: "10%",

    left: "40%",

    fontSize: "120px",

    color: "#facc15",

    opacity: 0.15,
  },

  teacherWrapper: {

  position: "absolute",

  right: "4%",

  bottom: "0",

  width: "500px",

  height: "650px",

  display: "flex",

  alignItems: "center",

  justifyContent: "center",

  zIndex: 5,
},

teacherGlow: {

  position: "absolute",

  width: "420px",

  height: "420px",

  background:
    "radial-gradient(circle, rgba(168,85,247,0.35), transparent 70%)",

  borderRadius: "50%",

  filter: "blur(60px)",

  zIndex: -1,
},

heroImg: {

  width: "100%",

  maxWidth: "430px",

  objectFit: "contain",

  filter:
    "drop-shadow(0 0 40px rgba(168,85,247,0.6))",
},


};