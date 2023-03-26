import fs from 'fs';

function readPage(pagePath) {
    return fs.readFileSync(pagePath).toString();
}

function renderTopicPage(page, config={}) {
    const navbar = fs.readFileSync("./public/components/topic/navbar/navbar.html").toString()
        .replace("$TAB_TITLE", config.tabTitle || "NodeJs Mandatory")
        .replace("$CSS_LINK", `<link rel="stylesheet" href="/assets/css/topic.css">`)
        .replace("$RESPONSIVNESS_LINK", `<link rel="stylesheet" href="/assets/css/topicResponsivness.css">`);

    const title = fs.readFileSync("./public/components/topic/title/title.html").toString()
        .replace("$TOPIC_TITLE", config.topicTitle)
        .replace("$TOPIC_DESCRIPTION", config.topicDescription);

    const footer = fs.readFileSync("./public/components/topic/footer/footer.html").toString()
        .replace("$FOOTER_YEAR", `© ${new Date().getFullYear()}  /  Andrea Di Claudio / Mandatory I`)
        .replace("$INDEX_CONTENT_LINK", `<script src="/assets/js/indexContent/${config.indexContent}.js"></script>`)
        .replace("$NAVBAR_LINK", `<script src="/assets/js/navbar.js"></script>`);

    return navbar + title +  page + footer;
}

function renderPage(page, config={}) {
    const start = fs.readFileSync("./public/components/general/start/start.html").toString()
        .replace("$TAB_TITLE", config.tabTitle || "NodeJs Mandatory")
        .replace("$CSS_LINK", `<link rel="stylesheet" href="${config.cssPath}">`);

    const end = fs.readFileSync(`./public/components/general/end/end.html`).toString()
        .replace("$FOOTER_YEAR", `© ${new Date().getFullYear()}  /  Andrea Di Claudio / Mandatory I`)
        .replace("$SCRIPT", `${config.script}` || " ");

    return start + page + end;
}

export default {
    renderPage,
    readPage,
    renderTopicPage,
}