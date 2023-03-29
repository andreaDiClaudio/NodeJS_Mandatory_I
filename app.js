"use strict";
import express from "express";
import bodyParser from "body-parser"
import templateEngine from './util/templateEngine.js';

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
    cssPath: "/assets/css/landingpage.css",
    script: " "
});

const landingpageError = templateEngine.readPage("./public/pages/error/loginError.html");
const landingpageErrorPage = templateEngine.renderPage(landingpageError);

const signup = templateEngine.readPage("./public/pages/signup/signup.html");
const signupPage = templateEngine.renderPage(signup, {
    tabtitle: "Mandatory I | Sign up",
    cssPath: "/assets/css/landingpage.css",
    script: " "
});

const signupError = templateEngine.readPage("./public/pages/error/signupError.html");
const signupErrorPage = templateEngine.renderPage(signupError, {
    tabtitle: "Mandatory I | Error",
    script: " "
});

const home = templateEngine.readPage("./public/pages/home/home.html");
const homePage = templateEngine.renderPage(home, {
    tabtitle: "Mandatory I | Home",
    cssPath: "pages/home/home.css",
    script: " "
});

const adminPanel = templateEngine.readPage("./public/pages/adminPanel/adminPanel.html");
const adminPanelPage = templateEngine.renderPage(adminPanel, {
    tabtitle:"Mandatory I | Private",
    cssPath: "/pages/adminPanel/adminPanel.css",
    script: `<script src="/pages/adminPanel/adminPanel.js"></script>`
})

const aboutJs = templateEngine.readPage("./public/pages/topic/javascript.html");
const aboutJsPage = templateEngine.renderTopicPage(aboutJs, {
    tabtitle: "Mandatory I | Js",
    indexContent: "javascript",
    topicTitle: "Javascript",
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
const clientAndServerRenderingPage = templateEngine.renderTopicPage(clientAndServerRendering, {
    tabtitle: "Mandatory I | CSR vs SSR",
    indexContent: "clientAndServerRendering",
    topicTitle: "CSR vs SSR",
    topicDescription: "The main differences between client side rendering and server side rendering"
});

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

app.get("/adminPanel", (req,res) => {
    res.send(adminPanelPage);
});

/*TOPICS*/
app.get("/javascript", (req, res) => {
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
    res.send(clientAndServerRenderingPage);
});

 //PORT
const PORT = 8080;
app.listen(PORT, (error) => {
    error ? console.log(error) : console.log("Server is running on port: ", PORT);
});