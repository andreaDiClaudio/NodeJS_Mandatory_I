"use strict";

const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

const topicsPreviewArray = require("./public/pages/home/topicsPreview.js")

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

 //HTTP
 //LandingPage
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/pages/landingPage/landingPage.html")
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

//landingPage error
app.get("/login/error", (req,res) => {
    res.sendFile(__dirname + "/public/pages/landingPage/error.html");
});

//Signup
app.get("/signup", (req, res) => {
    res.sendFile(__dirname + "/public/pages/signup/signup.html")
});

app.get("/signup/error", (req,res) => {
    res.sendFile(__dirname + "/public/pages/signup/error.html");
});

//Home
app.get("/home", (req, res) => {
    res.sendFile(__dirname + "/public/pages/home/home.html")
});

/*TOPICS*/
//NodeJs
app.get("/nodeJs", (req,res) => {
    res.sendFile(__dirname + "/public/pages/topic/nodeJs.html");
});
//Package Manager and Dependencies
app.get("/packageManager&Dependencies", (req, res) => {
    res.sendFile(__dirname + "/public/pages/topic/packageManager&Dependecies.html");
});
//restAPI
app.get("/restAPI", (req,res) => {
    res.sendFile(__dirname + "/public/pages/topic/restAPI.html");
});
//express
app.get("/express", (req,res) => {
    res.sendFile(__dirname + "/public/pages/topic/express.html");
});
app.get("/loops", (req, res) => {
    res.sendFile(__dirname + "/public/pages/topic/loops.html");
});
//servingHtmlFiles
app.get("/servingHtmlFiles", (req, res) => {
    res.sendFile(__dirname + "/public/pages/topic/servingHTMLFiles.html");
});
app.get("/crudableAPI", (req,res) => {
    res.sendFile(__dirname + "/public/pages/topic/CRUDableApi.html");
});


const PORT = 8080;
app.listen(PORT, (error) => {
    error ? console.log(error) : console.log("Server is running on port: ", PORT);
});