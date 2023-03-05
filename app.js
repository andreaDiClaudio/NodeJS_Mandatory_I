"use strict";

const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

const topicsArray = require("./public/home/topics.js")

let userIdCounter = 1;

/*Sign up & Log in*/
const users = [];
const admin = {
    id: 0,
    username: "admin",
    password: "admin"
}
users.push(admin);

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

app.get("/login/error", (req, res) => {
    res.sendFile(__dirname + "/public/landingPage/error.html")
});

app.get("/topic/:id", (req, res) => {
    const topicIndex = topicsArray.findIndex(topic => topic.id === Number(req.body.id));

    if (!topicIndex) return res.sendStatus(404);

    res.sendFile(__dirname + "/public/topic/topic.html")
});

/*API*/
app.get("/api/topics", (req, res) => {
   res.send({data: topicsArray});
});

app.post("/", (req, res) => {
    const user = users.find(user => user.username === req.body.username && user.password === req.body.password);

    if (!user) return res.redirect("/login/error");

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