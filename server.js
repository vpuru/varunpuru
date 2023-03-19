const express = require("express");
const path = require("path");

const app = express();

// serve static files from the 'src2' directory
app.use(express.static(path.join(__dirname, "src")));

// handle GET requests to the root URL
app.get("/", (req, res) => {
  // send the index.html file
  res.sendFile(path.join(__dirname, "src2", "index.html"));
});

// start the server
const port = 80; // choose any port you like
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
