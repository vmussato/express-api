const express = require("express");

const app = express();

app.use("/", (req, res) => res.json({imgSrc:'http://www.fillmurray.com/400/500'}))

app.listen(3001, function () {
  console.log('listening on port 3001, hello')
})