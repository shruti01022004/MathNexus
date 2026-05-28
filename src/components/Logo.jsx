import { motion } from "framer-motion";

export default function Logo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="text-2xl font-bold"
    >
      <span style={{ color: "#06B6D4" }}>∑</span> Math
      <span style={{ color: "#4F46E5" }}>Nexus</span>
    </motion.div>
  );
}