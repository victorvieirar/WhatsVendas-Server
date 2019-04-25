const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
const router = express.Router();

const index = require("./routes/index");
const api = require("./routes/api");

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "*");
  next();
});

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(bodyParser.json());

var db = mongoose.connection;
mongoose
  .connect("mongodb://localhost/anotaiweb", { useNewUrlParser: true })
  .then(
    () => {
      console.log("Database connection successful");
    },
    err => {
      console.log("Error when connecting to the database. Err: " + err);
    }
  );

app.use("/", index);
app.use("/api", api);

module.exports = app;
