import React from "react"; // importato da una libreria npm.
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App"; // importato da un file presente sulla sinistra, ovvero presente nello stesso percorso. 
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

reportWebVitals();

