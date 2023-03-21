import fs from 'fs';

function renderTopicPage(page, config={}) {
    const navbar = fs.readFileSync("./public/components/topic/navbar/navbar.html").toString()
        .replace("$TAB_TITLE", config.tabTitle || "NodeJs Mandatory")
        .replace("$CSS_LINK", `<link rel="stylesheet" href="/assets/css/topic.css">`)
        .replace("$RESPONSIVNESS_LINK", `<link rel="stylesheet" href="/assets/css/topicResponsivness.css">`);

    const footer = fs.readFileSync("./public/components/topic/footer/footer.html").toString()
        .replace("$FOOTER_YEAR", `© / ${new Date().getFullYear()} / Andrea Di Claudio`)
        .replace("$INDEX_CONTENT_LINK", `<script src="/assets/js/indexContent/${config.indexContent}.js"></script>`)
        .replace("$NAVBAR_LINK", `<script src="/assets/js/navbar.js"></script>`);

    return navbar + page + footer;
}

function renderPage(page, config={}) {
    const start = fs.readFileSync("./public/components/general/start/start.html").toString()
        .replace("$TAB_TITLE", config.tabTitle || "NodeJs Mandatory")
        .replace("$CSS_LINK", `<link rel="stylesheet" href="${config.cssPath}">`);

    const end = fs.readFileSync("./public/components/general/end/end.html").toString()
        .replace("$HOME_SCRIPT", `<script src="/pages/home/home.js"></script>` || "");

    return start + page + end;
}

function readPage(pagePath) {
    return fs.readFileSync(pagePath).toString();
}

export default {
    renderPage,
    readPage,
    renderTopicPage
}