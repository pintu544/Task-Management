const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://localhost:27017/newsdb"
);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error connection on mongodb"));

db.once("open", function () {
  console.log("Connected to database :: MongoDB");
});

module.exports = db;
