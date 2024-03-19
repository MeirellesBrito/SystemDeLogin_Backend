const express = require("express");
const app = express();

const PORT = 3001;

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hola mundo");
});

app.listen(PORT, () => {
  console.log("servidor esta on na porta: " + PORT);
});
