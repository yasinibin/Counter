import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("orange");
  const [darkMode, setDarkMode] = useState(false);
  console.log("🚀 ~ file: App.js:7 ~ App ~ darkMode", darkMode);
  return (
    <div
      style={{
        height: "100vh",
        width: "full",
        backgroundColor: darkMode ? "black" : "white",
      }}
    >
      <h2 style={{ color: darkMode ? "white" : "black" }}>Counter</h2>
      <p style={{ color: darkMode ? "white" : "black" }}>{count}</p>
      <button
        onClick={() => {
          setCount(count - 1);
          setColor("red");
        }}
      >
        Decrease
      </button>
      <button
        onClick={() => {
          setCount(0);
          setColor("orange");
        }}
      >
        Reset
      </button>
      <button
        onClick={() => {
          setCount(count + 1);
          setColor("green");
        }}
      >
        İncrease
      </button>
      <button onClick={() => setDarkMode(!darkMode)}>Background Color</button>
    </div>
  );
}

export default App;
