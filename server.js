const express = require("express");

const app = express();

app.use("/", (req, res) => res.send('Olá Mundo'))

app.listen(3001, function () {
  console.log('listening on port 3001')
})