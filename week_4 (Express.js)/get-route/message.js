const express = require("express"); // Import express
const app = express(); // Create an Express app

const PORT = 5000; // Define the port

// ✅ Define the GET route /welcome
app.get("/welcome", (req, res) => {
  res.json({ message: "Welcome to Express!" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});