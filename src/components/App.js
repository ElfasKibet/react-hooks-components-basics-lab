import React from "react";
import Navbar from "./Navbar"; // Importing Navbar component
import Home from "./Home"; // Importing Home component
import About from "./About"; // Importing About component

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About /> {/* Render About component here */}
    </div>
  );
}

export default App;
