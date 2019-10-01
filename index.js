var express = require("express");
var path = require("path");
const app = express();
var path = require("path");

app.use(express.json([{ limit: "250000" }]));
app.use(express.static("public"));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname + "/public", "", "index.html"));
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));
