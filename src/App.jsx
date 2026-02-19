import { useState } from "react";
import Startscreen from "./startscreen";
import Gamescreen from "./gamescreen";
import "./App.css";

function App() {
  const [started, setstarted] = useState(false);   

  return (
    <div>
      {started ? (
        <Gamescreen />
      ) : (
        <Startscreen Onstart={() => setstarted(true)} />
      )}
    </div>
  );
}

export default App;
