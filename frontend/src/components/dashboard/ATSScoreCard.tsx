type ATSScoreCardProps = {
  score: number;
};

const ATSScoreCard = ({ score }: ATSScoreCardProps) => {
  const getScoreColor = (score: number) => {
    if (score >= 75) return "#22c55e"; // green
    if (score >= 50) return "#f59e0b"; // yellow
    return "#ef4444"; // red
  };

  return (
    <div style={styles.card}>
      <h3 style={styles.title}>ATS Score</h3>

      <div style={styles.scoreContainer}>
        <span
          style={{
            ...styles.score,
            color: getScoreColor(score),
          }}
        >
          {score}%
        </span>
      </div>

      <p style={styles.subtext}>
        Optimize your resume to improve your score
      </p>
    </div>
  );
};

export default ATSScoreCard;

// Styles
const styles = {
  card: {
    background: "#1e293b",
    padding: "20px",
    borderRadius: "10px",
    color: "white",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
  },
  title: {
    fontSize: "16px",
    marginBottom: "10px",
  },
  scoreContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "80px",
  },
  score: {
    fontSize: "32px",
    fontWeight: "bold",
  },
  subtext: {
    fontSize: "12px",
    color: "#94a3b8",
    marginTop: "10px",
    textAlign: "center" as const,
  },
};