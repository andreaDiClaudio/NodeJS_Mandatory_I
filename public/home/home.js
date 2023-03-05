"use strict";

const topicsWrapper = document.getElementById("topics-wrapper");


window.onload = loadTopics();

function loadTopics() {
    fetch("/api/topics").then(response => response.json()).then(result => {
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
            topicDescription.id = "topic-info-description";
            topicDescription.readOnly = true;
            topicDescription.innerText = topic.description;
            topicInfoWrapper.appendChild(topicDescription);

            topicWrapper.addEventListener('click', () => {
                location.href = `/topic/${topic.id}`;
            });
        })
    })
}