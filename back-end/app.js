// DEPENDENCIES
const cors = require("cors");
const express = require("express");
const app = express();

// CONTROLLERS
const bookingsController = require("./controllers/bookingsController");

app.use(cors());
app.use(express.json()); 

app.use("/bookings", bookingsController);


app.get("/", (req, res) => {
  res.send("Hello, world!");
});

//404
app.get("*", (req, res) => {
  res.status(404).send("Page not found")
})


module.exports = app;
