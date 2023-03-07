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

//Signup
app.get("/signup", (req, res) => {
    res.sendFile(__dirname + "/public/signup/signup.html")
});

//Home
app.get("/home", (req, res) => {
    res.sendFile(__dirname + "/public/home/home.html")
});

//logs in
app.post("/", (req, res) => {
    const user = users.find(user => user.username === req.body.username && user.password === req.body.password);

    const errorScript = `
    <style>
    body {
        background: linear-gradient(55deg, #f4dfc5, #e7793e);	
        background-repeat: round;	
        height: 100%;
    }
    </style>
    <script>
    setTimeout(function() { alert('Ops, wrong credentials, please try again'); }, 2); window.location.href = "/";
    </script>
    `;

    if (!user) return res.send(errorScript);

    res.redirect("/home");
});

//Create a new user
app.post("/users", (req, res) => {
    const user = users.find(user => user.username === req.body.username && user.password === req.body.password);

    const errorScript = `
    <style>
    body {
        background: linear-gradient(55deg, #f4dfc5, #e7793e);	
        background-repeat: round;	
        height: 100%;
    }
    </style>
    <script>
    setTimeout(function() { alert('Ops, credentials already taken, please try again'); }, 1); window.location.href = "/signup";
    </script>
    `;

    if(user) return res.send(errorScript);

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