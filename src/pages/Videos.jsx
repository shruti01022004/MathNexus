export default function Videos() {
  return (
    <div style={styles.page}>
      <h1>Video Lessons</h1>

      <iframe
        width="500"
        height="280"
        src="https://www.youtube.com/embed/8mAITcNt710"
        title="math video"
      />
    </div>
  );
}

const styles = {
  page: { padding: "40px" },
};