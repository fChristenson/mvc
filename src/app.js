const express = require("express");
const path = require("path");
const app = express();

app.use(express.json());
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "views"));

/**
 * This is our controller and this is where we handle incoming
 * network requests.
 * 
 * The goal of the controller is to be the glue that connects the
 * model and the view.
 * 
 * It is usually a good idea to group controllers based on
 * functionality but in the demo app we don't have enough
 * endpoints to warrant that.
 */

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "views", "static.html"));
});

app.get("/render", (req, res) => {
  res.render("render.ejs", { message: "This is a rendered view" });
});

app.get("/json", (req, res) => {
  res.sendFile(path.resolve(__dirname, "views", "still_a_view.json"));
});

module.exports = app;
