"use strict";

console.log("Hello");

const indexContent1 = document.querySelector(".index-content");

//a tags
const a1 = document.createElement("a");
a1.href = "#1";
a1.className = "index-topic";
a1.innerText = "1. NodeJs"
indexContent1.appendChild(a1);

const a2 = document.createElement("a");
a2.href = "#2";
a2.className = "index-topic";
a2.innerText = "2. Package Manager and Dependecies";
indexContent1.appendChild(a2);

const a3 = document.createElement("a");
a3.href = "#3";
a3.className = "index-topic";
a3.innerText = "3. How to install packages";
indexContent1.appendChild(a3);

const a4 = document.createElement("a");
a4.href = "#4";
a4.className = "index-topic";
a4.innerText = "4. Express";
indexContent1.appendChild(a4);

const a5 = document.createElement("a");
a5.href = "#5";
a5.className = "index-topic";
a5.innerText = "5. How to set a server";
indexContent1.appendChild(a5);

const a6 = document.createElement("a");
a6.href = "#6";
a6.className = "index-topic";
a6.innerText = "6. Anatomy of URL";
indexContent1.appendChild(a6);
