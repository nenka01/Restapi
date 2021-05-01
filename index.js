const favicon = require("serve-favicon");
const cookie = require("cookie-parser");
const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const app = express();
const dir = process.cwd();
const api = require("./routes/api");

const options = {
  dotfiles: "ignore",
  etag: false,
  extensions: ["html", "htm"],
  index: false,
  maxAge: "999999d",
  redirect: false,
  setHeaders: function (res, path, stat) {
    res.set("x-timestamp", Date.now())
  }
}

app.use(cors());
app.use(cookie());
app.use(express.json());
app.use(logger("dev"));
app.set("json spaces", 2);
app.use(express.static("public", options));
app.use(favicon(dir + "/public/favicon.ico"));

app.use(api);

app.listen(1234, () => {
  console.log("Server berjalan di port 1234");
});
