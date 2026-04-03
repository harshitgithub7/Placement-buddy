type Opportunity = {
  id: number;
  company: string;
  role: string;
};

type CompanyOpportunitiesProps = {
  opportunities: Opportunity[];
};

const CompanyOpportunities = ({
  opportunities,
}: CompanyOpportunitiesProps) => {
  return (
    <div style={styles.card}>
      <h3 style={styles.title}>Company Opportunities</h3>

      {opportunities.length === 0 ? (
        <p style={styles.empty}>No opportunities available</p>
      ) : (
        <div style={styles.list}>
          {opportunities.map((item) => (
            <div key={item.id} style={styles.item}>
              <div>
                <strong>{item.company}</strong>
                <p style={styles.role}>{item.role}</p>
              </div>

              <button style={styles.applyBtn}>Apply</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CompanyOpportunities;

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
    marginBottom: "15px",
  },
  list: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "10px",
  },
  item: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "#334155",
    padding: "10px",
    borderRadius: "8px",
  },
  role: {
    fontSize: "12px",
    color: "#94a3b8",
  },
  applyBtn: {
    background: "#3b82f6",
    border: "none",
    padding: "6px 12px",
    borderRadius: "5px",
    color: "white",
    cursor: "pointer",
  },
  empty: {
    fontSize: "14px",
    color: "#94a3b8",
  },
};