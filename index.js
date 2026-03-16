const express = require("express");
const app = express();

// enable JSON parsing
app.use(express.json());

app.listen(3000, () => {
  console.log("local3000 server listening on port 3000");
});