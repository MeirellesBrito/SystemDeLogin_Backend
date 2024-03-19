const express = require("express");
const routes = require("./routes");
const cors = require('cors');
const app = express();

const PORT = 3001;

app.use(express.json());
app.use(cors());
app.use(routes);

app.get("/", (req, res) => {
  res.send("Hola mundo");
});

app.listen(PORT, () => {
  console.log("servidor esta on na porta: " + PORT);
});
