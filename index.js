const cookie = require("cookie-parser")
const express = require("express");
const cors = require("cors");
const app = express();
const api = require("./routes/api");

app.use(cors());
app.use(cookie());
app.use(express.json());
app.set("json spaces", 2);

app.use(api);

app.listen(8080, () => {
  console.log("Server berjalan di port 8080");
});

module.export = app;