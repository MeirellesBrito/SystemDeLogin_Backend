const express = require("express");
const routes = express.Router();

const users = [
  {
    id: 1,
    name: "Fernando",
    email: "test@gmail.com",
    passoword: "123",
  },
];

routes.post("/login", (req, res) => {
  const { email, passoword } = req.body;
  const user = users.find(
    (user) => user.email === email && user.passoword === passoword
  );

  if (user) {
    return res.status(200).json(user);
  }
  return res.status(401).json({ message: "Credencias invalida" });
});

module.exports = routes;
