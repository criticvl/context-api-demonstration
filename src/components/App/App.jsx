import "./App.css";
import Parent from "../Parent/Parent.jsx";
import { UserContextProvider } from "../../context/UserContext";

function App() {
  return (
    <UserContextProvider>
      <div className="App">
        <p className="parentTag">Parent</p>
        <Parent></Parent>
      </div>
    </UserContextProvider>
  );
}

export default App;
