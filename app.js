"use strict";

const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

let userIdCounter = 1;

/*Sign up & Log in*/
const users = [];
const admin = {
    id: 0,
    username: "admin",
    password: "admin"
}
users.push(admin);

/*Topics*/
const topics = [];
const hardcodedTopic = {
    //TODO
}

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/landingPage/landingPage.html")
});

app.get("/signup", (req, res) => {
    res.sendFile(__dirname + "/public/signup/signup.html")
});

app.get("/home", (req, res) => {
    res.sendFile(__dirname + "/public/home/home.html")
});

app.get("/signup/error", (req, res) => {
    res.sendFile(__dirname + "/public/signup/error.html")
})

app.post("/", (req, res) => {
    const user = users.find(user => user.username === req.body.username && user.password === req.body.password);

    if (!user) return res.send(`<script>alert("Ops, Wrong credentials, try again"); window.location.href = "/"; </script>`);

    res.redirect("/home");
});

app.post("/signup", (req, res) => {
    const user = users.find(user => user.username === req.body.username && user.password === req.body.password);

    if(user) return res.redirect("/signup/error");

    const newUser = {
        id: userIdCounter,
        username: req.body.username,
        password: req.body.password
    }

    users.push(newUser);
    userIdCounter++
    res.redirect("/")
});



const PORT = 8080;
app.listen(PORT, (error) => {
    error ? console.log(error) : console.log("Server is running on port: ", PORT);
});