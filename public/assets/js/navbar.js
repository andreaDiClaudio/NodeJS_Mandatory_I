"use strict";

const navBarWrapper = document.getElementById("navbar");

//index-menu-wrapper
const indexMenuWrapper = document.createElement("div");
indexMenuWrapper.className = "index-menu-wrapper";
navBarWrapper.appendChild(indexMenuWrapper);

//button-wrapper
const buttonWrapper = document.createElement("div");
buttonWrapper.className = "button-wrapper";
indexMenuWrapper.appendChild(buttonWrapper);

//a tag for redirection to home
const aTagHome = document.createElement("a");
aTagHome.href = "/home";
buttonWrapper.appendChild(aTagHome);

//button for the a tag
const homeButton = document.createElement("button");
homeButton.className = "button";
homeButton.innerText = "Home";
aTagHome.appendChild(homeButton);

//index-topic-wrapper
const indexTopicWrapper = document.createElement("div");
indexTopicWrapper.className = "index-topic-wrapper";
indexTopicWrapper.id = "index-topic-wrapper";
indexMenuWrapper.appendChild(indexTopicWrapper);

//index-button-wrapper
const indexButtonWrapper = document.createElement("div");
indexButtonWrapper.className = "index-button-wrapper";
indexTopicWrapper.appendChild(indexButtonWrapper);

//index-button
const indexButton = document.createElement("button");
indexButton.className = "index";
indexButton.innerText = "Index ↓";
indexButtonWrapper.appendChild(indexButton);

//index-content
const indexContent = document.createElement("div");
indexContent.className = "index-content";
indexTopicWrapper.appendChild(indexContent);