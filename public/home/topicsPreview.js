const topicUrl = "/api/topic/"
const topicsPreview = [
    {
        id: 0,
        title: "NodeJS",
        description: "Inroduction to NodeJS, data types in Javascript, and the design of an API.",
        href: topicUrl + 0
    },
    {
        id: 1,
        title: "Package Manager & Dependencies",
        description: "Maven vs. npm. How to define and install dependencies.",
        href: topicUrl + 2
    },
    {
        id: 2,
        title: "Express",
        description: "What is it? How do we use it?",
        href: topicUrl + 3
    },
    {
        id: 3,
        title: "REST API",
        description: "Definition and conventions.",
        href: topicUrl +1
    },
    {
        id: 4,
        title: "Loops",
        description: "Choose the right loop for the right occasion.",
        href: topicUrl + 4
    },
    {
        id: 5,
        title: "Serving HTML Files",
        description: "How to serve an html file with express and the security behind serving static files.",
        href: topicUrl + 5
    },
    {
        id:6,
        title: "CRUDable API",
        description: "From GET to DELETE method with a little extra about 'Date' in js.",
        href: topicUrl + 6
    }
];
module.exports = topicsPreview;