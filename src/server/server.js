// add environment variables in .env file
require("dotenv").config();
const path = require("path");
const express = require("express");

const app = express();
app.use(express.json());

// serve client files from the dist folder
app.use(express.static(path.join(__dirname, "dist")));

// routes
require('./routes/example')(app);


app.listen(8080, () => {
  console.log("listening on 8080");
});
