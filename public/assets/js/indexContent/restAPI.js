"use strict";

console.log("Hello");

const indexContent1 = document.querySelector(".index-content");

//a tags
const a1 = document.createElement("a");
a1.href = "#1";
a1.className = "index-topic";
a1.innerText = "1. REST API"
indexContent1.appendChild(a1);

const a2 = document.createElement("a");
a2.href = "#2";
a2.className = "index-topic";
a2.innerText = "2. CRUDable REST API";
indexContent1.appendChild(a2);

const a3 = document.createElement("a");
a3.href = "#3";
a3.className = "index-topic";
a3.innerText = "3. How to send data in a GET requests";
indexContent1.appendChild(a3);