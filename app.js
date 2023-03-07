"use strict";

const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

const topicsPreviewArray = require("./public/home/topicsPreview.js")

let userIdCounter = 1;

/*Sign up & Log in*/
const users = [];
const admin = {
    id: 0,
    username: "admin",
    password: "admin"
}
users.push(admin);

/*API*/
app.get("/api/topicsPreview", (req, res) => {
    res.send({data: topicsPreviewArray});
 });
 
 app.get("/api/topicPreview/:id", (req, res) => {
    const requestedTopicPreview = topicsPreviewArray.find(topic => topic.id === Number(req.params.id));
 
   if (!requestedTopicPreview) return res.sendStatus(404);
 
   res.send({data: requestedTopicPreview});
 });

 app.get("/api/topic/:id", (req,res) => {
    const requestedTopic = topicsPreviewArray.find(topic => topic.id === Number(req.params.id));
 
   if (!requestedTopic) return res.sendStatus(404);
 
   res.sendFile(__dirname + "/public/topic/topic" + req.params.id + ".html");
 });

 //HTTP
 //LandingPage
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/landingPage/landingPage.html")
});

//landingPage error
app.get("/login/error", (req,res) => {
    res.sendFile(__dirname + "/public/landingPage/error.html");
});

//Signup
app.get("/signup", (req, res) => {
    res.sendFile(__dirname + "/public/signup/signup.html")
});

app.get("/signup/error", (req,res) => {
    res.sendFile(__dirname + "/public/signup/error.html");
});

//Home
app.get("/home", (req, res) => {
    res.sendFile(__dirname + "/public/home/home.html")
});

//logs in
app.post("/", (req, res) => {
    const user = users.find(user => user.username === req.body.username && user.password === req.body.password);

    if (!user) return res.redirect("/login/error");

    res.redirect("/home");
});

//Create a new user
app.post("/users", (req, res) => {
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