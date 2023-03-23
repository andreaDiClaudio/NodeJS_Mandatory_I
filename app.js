"use strict";
import express from "express";
import bodyParser from "body-parser"
import templateEngine from './util/templateEngine.js';
import topicsPreviewArray from "./public/assets/js/topicsPreview.js"

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

/*Sign up & Log in*/
let userIdCounter = 1;
const users = [];
const admin = {
    id: 0,
    username: "admin",
    password: "admin"
}
users.push(admin);

/*Pages*/
const landingpage = templateEngine.readPage("./public/pages/landingpage/landingpage.html");
const landingpagePage = templateEngine.renderPage(landingpage, {
    tabtitle: "Mandatory I | Login",
    cssPath: "/pages/landingpage/landingpage.css"
});

const landingpageError = templateEngine.readPage("./public/pages/landingpage/error.html");
const landingpageErrorPage = templateEngine.renderPage(landingpageError);

const signup = templateEngine.readPage("./public/pages/signup/signup.html");
const signupPage = templateEngine.renderPage(signup, {
    tabtitle: "Sign up | Mandatory I",
    cssPath: "/pages/landingpage/landingpage.css"
});

const signupError = templateEngine.readPage("./public/pages/signup/error.html");
const signupErrorPage = templateEngine.renderPage(signupError, {
    tabtitle: "Error | Mandatory I"
});

const home = templateEngine.readPage("./public/pages/home/home.html");
const homePage = templateEngine.renderPage(home, {
    tabtitle: "Home | Mandatory I",
    cssPath: "pages/home/home.css"
});

const aboutJs = templateEngine.readPage("./public/pages/topic/aboutJs.html");
const aboutJsPage = templateEngine.renderTopicPage(aboutJs, {
    tabtitle: "About Js | Mandatory I",
    indexContent: "aboutJs",
    topicTitle: "About JavaScript",
    topicDescription: "From data types to callback function and fetch."
});

const nodeJs = templateEngine.readPage("./public/pages/topic/nodeJs.html");
const nodeJsPage = templateEngine.renderTopicPage(nodeJs, {
    tabtitle: "NodeJs | Mandatory I",
    indexContent: "NodeJs",
    topicTitle: "NodeJs",
    topicDescription: "What is it? How do we use Express?"
});

const restAPI = templateEngine.readPage("./public/pages/topic/restAPI.html");
const restAPIPage = templateEngine.renderTopicPage(restAPI, {
    tabtitle: "Mandatory I | Rest API",
    indexContent : "restAPI",
    topicTitle: "REST API",
    topicDescription: "Definition and CRUD"
});

const exportAndImport = templateEngine.readPage("./public/pages/topic/exportAndImport.html")
const exportAndImportPage = templateEngine.renderTopicPage(exportAndImport, {
    tabtitle: "Mandatory I | Export / Import",
    indexContent: "exportAndImport",
    topicTitle: "Export / Import",
    topicDescription: "What is a module? How to export and import modules"
});

const clientAndServerRendering = templateEngine.readPage("./public/pages/topic/clientAndServerRendering.html");
const clientAndServerRenderingPage = templateEngine.renderTopicPage(clientAndServerRendering);

/*HTTP*/
app.get("/", (req, res) => {
    res.send(landingpagePage);
});

app.post("/", (req, res) => {
    const user = users.find(user => user.username === req.body.username && user.password === req.body.password);

    if (!user) return res.redirect("/login/error");

    res.redirect("/home");
});

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

app.get("/login/error", (req,res) => {
    res.send(landingpageErrorPage);
});

app.get("/signup", (req, res) => {
    res.send(signupPage);
});

app.get("/signup/error", (req,res) => {
    res.send(signupErrorPage);
});

app.get("/home", (req, res) => {
    res.send(homePage);
});

/*TOPICS*/
app.get("/aboutJs", (req, res) => {
    res.send(aboutJsPage);
});

app.get("/nodeJs", (req,res) => {
    res.send(nodeJsPage);
});

app.get("/restAPI", (req,res) => {
    res.send(restAPIPage);
});

app.get("/exportAndImport", (req, res) => {
    res.send(exportAndImportPage);
});

app.get("/clientAndServerRendering", (req,res) => {
    res.send(CRUDableAPIPage);
});

/*API*/
app.get("/api/topicsPreview", (req, res) => {
    res.send({data: topicsPreviewArray});
 });

 //PORT
const PORT = 8080;
app.listen(PORT, (error) => {
    error ? console.log(error) : console.log("Server is running on port: ", PORT);
});