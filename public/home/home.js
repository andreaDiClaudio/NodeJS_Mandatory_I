"use strict";

const topicsWrapper = document.getElementById("topics-wrapper");

window.onload = loadTopics();

function loadTopics() {
    fetch("/api/topicsPreview").then(response => response.json()).then(result => {
        result.data.forEach(topic => {
            const topicWrapper = document.createElement("div");
            topicWrapper.className = "topic";
            topicWrapper.id = topic.id;
            topicsWrapper.appendChild(topicWrapper);

            const topicInfoWrapper = document.createElement("div");
            topicInfoWrapper.id = "topic-info";
            topicWrapper.appendChild(topicInfoWrapper);

            const topicTitle = document.createElement("h1");
            topicTitle.innerText = topic.title;
            topicInfoWrapper.appendChild(topicTitle);

            const topicDescription = document.createElement("textarea");
            topicDescription.className = "topic-info";
            topicDescription.readOnly = true;
            topicDescription.innerText = topic.description;
            topicInfoWrapper.appendChild(topicDescription); 

            //If title > 17 characters, make the text area height to max 90px. Needed for Textarea problems
            const titleCharArray = Array.from(topic.title);
            if (titleCharArray.length > 17) {
                topicDescription.style.height = "78px";
            } else {
                topicDescription.style.height = "115px";
            }
            //Event listener that redirectes to route that gives back the html file for that topic
            topicWrapper.addEventListener('click', () => {
                location.href = topic.href;
            });
        })
    })
}