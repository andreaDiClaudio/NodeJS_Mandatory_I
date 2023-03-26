const generatedInputDiv = document.querySelector(".input-wrapper");
const headingButton = document.getElementById("add-heading-button");
const paragraphButton = document.getElementById("add-paragraph-button");
const codeButton = document.getElementById("add-code-button");
const saveButton = document.getElementById("save-button");

let idHeadingCounter = 0;
let idParagraphCounter = 0;
let idCodeCounter = 0;

headingButton.addEventListener('click', addHeading);
paragraphButton.addEventListener('click', addParagraph);
codeButton.addEventListener('click', addCode);
saveButton.addEventListener('click', savePage)

function addHeading() {
    const wrapper = document.createElement("div");
    wrapper.className = "heading-input-wrapper";
    generatedInputDiv.appendChild(wrapper);
    
    const label = document.createElement("label");
    label.className="label";
    label.id=`heading${++idHeadingCounter}`
    label.innerText = `Heading ${idHeadingCounter}`;
    wrapper.appendChild(label);

    const text = document.createElement("textarea");
    text.className = "input";
    wrapper.appendChild(text);
}

function addParagraph() {
    const wrapper = document.createElement("div");
    wrapper.className = "paragraph-input-wrapper";
    generatedInputDiv.appendChild(wrapper);

    const label = document.createElement("label");
    label.className="label";
    label.id=`paragraph${++idParagraphCounter}`
    label.innerText = `Paragraph ${idParagraphCounter}`;
    wrapper.appendChild(label);

    const text = document.createElement("textarea");
    text.className = "input";
    wrapper.appendChild(text);
}

function addCode(){
    const wrapper = document.createElement("div");
    wrapper.className = "paragraph-input-wrapper";
    generatedInputDiv.appendChild(wrapper);

    const label = document.createElement("label");
    label.className="label";
    label.id=`code${++idCodeCounter}`
    label.innerText = `Code ${idCodeCounter}`;
    wrapper.appendChild(label);

    const text = document.createElement("textarea");
    text.className = "input";
    wrapper.appendChild(text);
}

function savePage() {
    confirm("Not implemented yet");
}