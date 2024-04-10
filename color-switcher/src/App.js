import React, { useState } from "react";
import "./App.css";
import ColorChangeButton from "./ColorChangeButton";

function App() {
  const [color, setColor] = useState("");
  return (
    <div className={`react-root ${color}`}>
      <div className="centered circle-container">
        <ColorChangeButton color="red" setColor={setColor} />
        <ColorChangeButton color="blue" setColor={setColor} />
        <ColorChangeButton color="yellow" setColor={setColor} />
        <ColorChangeButton color="purple" setColor={setColor} />
        <ColorChangeButton color="green" setColor={setColor} />
        <ColorChangeButton color="orange" setColor={setColor} />
      </div>
    </div>
  );
}

export default App;
