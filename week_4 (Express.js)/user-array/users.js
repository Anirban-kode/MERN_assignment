const express = require("express");
const app = express();

app.use(express.json()); // Middleware to parse JSON

const PORT = 5000;

// Root route (for testing)
app.get("/", (req, res) => {
    res.send("Welcome to the User API!");
  });
  
// In-memory array to store users
let users = [
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 2, name: "Bob", email: "bob@example.com" }
];

// GET /users - Retrieve all users
app.get("/users", (req, res) => {
  res.json(users);
});

// POST /users - Add a new user
app.post("/users", (req, res) => {
  const { name, email } = req.body;
  const newUser = { id: users.length + 1, name, email };
  users.push(newUser);
  res.status(201).json(newUser);
});

// PUT /users/:id - Update a user by ID
app.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  const user = users.find(u => u.id === parseInt(id));

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  user.name = name || user.name;
  user.email = email || user.email;
  res.json(user);
});

// DELETE /users/:id - Delete a user by ID
app.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  users = users.filter(u => u.id !== parseInt(id));
  res.json({ message: "User deleted successfully" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});