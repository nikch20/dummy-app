import express from 'express';

// Creates a new instance of the Express Router - a mini Express app
const router = express.Router();

// Sample Date - This will be reset whenever the server restarts
let users = [{ id: 1, name: "John Doe", email: "john@example.com" }];

router.get('/', (req, res) => res.json(users));

router.post('/', (req, res) => {
  const newUser = { id: users.length + 1, ...req.body };
  users.push(newUser);
  res.status(201).json(newUser);
});

export default router;
