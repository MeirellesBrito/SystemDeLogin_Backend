const express = require("express");
const routes = express.Router();

const users = [
  {
    id: 1,
    name: "Fernando",
    email: "test@gmail.com",
    password: "123", // Corrigido aqui
  },
];

routes.post("/login", (req, res) => {
  const { email, password } = req.body; // Corrigido aqui
  const user = users.find(
    (user) => user.email === email && user.password === password // Corrigido aqui
  );

  if (user) {
    return res.status(200).json(user);
  }
  return res.status(401).json({ message: "Credenciais inválidas" }); // Corrigido aqui
});

module.exports = routes;
