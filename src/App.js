import React, { useState } from "react";

function App() {
  const [isLightMode, setIsLightMode] = useState(true);

  const toggleTheme = () => {
    setIsLightMode(!isLightMode);
  };

  return (
    <div
      style={{
        backgroundColor: isLightMode ? "#ffffff" : "#000000",
        color: isLightMode ? "#000000" : "#ffffff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <button
        style={{ position: "absolute", top: "20px", right: "20px" }}
        onClick={toggleTheme}
      >
        {isLightMode ? "Dark Mode" : "Light Mode"}
      </button>
      <div
        style={{ fontSize: "24px", textAlign: "center", marginBottom: "20px" }}
      >
        <h1>Welcome</h1>
      </div>
    </div>
  );
}

export default App;
