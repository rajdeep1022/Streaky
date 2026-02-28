import Header from "./components/Header";
import HabitCard from "./components/HabitCard";
import { ComplexNavbar } from "./components/NavBar";

function App() {
  return (
    <div style={{ maxWidth: "500px", margin: "auto" }}>
      <ComplexNavbar />
      <Header />
      <HabitCard name="📖 Read Book" />
      <HabitCard name="🏋️ Go to Gym" />
      <HabitCard name="🧘 Meditation" />
    </div>
  );
}


export default App;
