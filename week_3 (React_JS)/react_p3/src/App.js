import React from "react";
import UserCard from "./UserCard"; // Import the UserCard component

function App() {
  return (
    <div className="App p-4">
      <h1 className="text-2xl font-bold text-center mb-4">User Cards</h1>
      <UserCard name="John Doe" email="john.doe@example.com" />
      <UserCard name="Jane Smith" email="jane.smith@example.com" />
    </div>
  );
}

export default App;