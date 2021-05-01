const favicon = require("serve-favicon");
const cookie = require("cookie-parser");
const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const app = express();
const dir = process.cwd();
const api = require("./routes/api");

app.use(cors());
app.use(cookie());
app.use(express.json());
app.use(logger("dev"));
app.set("json spaces", 2);
app.use(express.static("public"));
app.use(favicon(dir + "/public/favicon.ico"));

app.use(api);

app.listen(8080, () => {
  console.log("Server berjalan di port 8080");
});

module.exports = app;
