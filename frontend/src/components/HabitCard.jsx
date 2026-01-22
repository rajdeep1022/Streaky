function HabitCard({ name }) {
  return (
    <div style={{
      background: "white",
      padding: "15px",
      margin: "10px",
      borderRadius: "10px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
    }}>
      <div>
        <h3>{name}</h3>
        <p>🔥 Streak: 5 days</p>
      </div>
      <button>✅</button>
    </div>
  );
}
