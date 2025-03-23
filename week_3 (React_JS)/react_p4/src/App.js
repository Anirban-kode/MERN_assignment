import React from "react";
import Button from "./Button"; // Import the Button component

function App() {
  return (
    <div className="App flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-4">Tailwind Button</h1>
      <Button text="Click Me" />
    </div>
  );
}

export default App;