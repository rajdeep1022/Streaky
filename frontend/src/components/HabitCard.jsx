import { useState } from "react";

function HabitCard({ name }) {
  // state variable
  const [streak, setStreak] = useState(0);

  // function runs on button click
  const markDone = () => {
    setStreak(streak + 1);
  };

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
        <p>🔥 Streak: {streak} days</p>
      </div>

      <button onClick={markDone}>
        ✅
      </button>
    </div>
  );
}

export default HabitCard;
