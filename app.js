"use strict";

const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/landingPage/landingPage.html")
});

app.get("/home", (req, res) => {
    res.sendFile(__dirname + "/public/home/home.html")
});

app.post("/", (req, res) => {
    res.redirect("/home")
});

const PORT = 8080;
app.listen(PORT, (error) => {
    error ? console.log(error) : console.log("Server is running on port: ", PORT);
});