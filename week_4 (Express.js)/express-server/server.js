const express = require("express");
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Express server is running on port 5000!");
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});