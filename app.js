"use strict";
import path from "path";
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
    tabtitle: "Mandatory I | Signup",
    cssPath: "/pages/landingpage/landingpage.css"
});

const signupError = templateEngine.readPage("./public/pages/signup/error.html");
const signupErrorPage = templateEngine.renderPage(signupError, {
    tabtitle: "Mandatory I | Error"
});

const home = templateEngine.readPage("./public/pages/home/home.html");
const homePage = templateEngine.renderPage(home, {
    tabtitle: "Mandatory I | Home",
    cssPath: "pages/home/home.css"
});

const nodeJs = templateEngine.readPage("./public/pages/topic/nodeJs.html");
const nodeJsPage = templateEngine.renderTopicPage(nodeJs,  {
    tabtitle: "Mandatory I | NodeJs",
    indexContent: "nodeJs"
});

const packageManagerAndDependencies = templateEngine.readPage("./public/pages/topic/packageManager&Dependecies.html");
const packageManagerAndDependenciesPage = templateEngine.renderTopicPage(packageManagerAndDependencies, {
    tabtitle: "Mandatory I | Packages&Dependencies",
    indexContent: "packageManager&Dependecies"
})

const expresspage = templateEngine.readPage("./public/pages/topic/express.html")
const expresspagePage = templateEngine.renderTopicPage(expresspage, {
    tabtitle: "Mandatory I | Express",
    indexContent: "express"
});

const restAPI = templateEngine.readPage("./public/pages/topic/restAPI.html");
const restAPIPage = templateEngine.renderTopicPage(restAPI, {
    tabtitle: "Mandatory I | Rest API",
    indexContent : "restAPI"
});

const loops = templateEngine.readPage("./public/pages/topic/loops.html");
const loopsPage = templateEngine.renderTopicPage(loops);

const servingHTMLFiles = templateEngine.readPage("./public/pages/topic/servingHTMLFiles.html");
const servingHtmlFilesPage = templateEngine.renderTopicPage(servingHTMLFiles);

const CRUDableAPI = templateEngine.readPage("./public/pages/topic/CRUDableAPI.html");
const CRUDableAPIPage = templateEngine.renderTopicPage(CRUDableAPI);

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
app.get("/nodeJs", (req,res) => {
    res.send(nodeJsPage);
});

app.get("/packageManager&Dependencies", (req, res) => {
    res.send(packageManagerAndDependenciesPage);
});

app.get("/restAPI", (req,res) => {
    res.send(restAPIPage);
});

app.get("/express", (req,res) => {
    res.send(expresspagePage);
});

app.get("/loops", (req, res) => {
    res.send(loopsPage);
});

app.get("/servingHtmlFiles", (req, res) => {
    res.send(servingHtmlFilesPage);
});

app.get("/crudableAPI", (req,res) => {
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