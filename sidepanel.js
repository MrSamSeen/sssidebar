console.log("Sidebar loaded");
document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("gemini").addEventListener("click", function () {
        let iframe = document.getElementById("cnt-gemini");
        if (iframe.innerHTML === "") {
            iframe.innerHTML = `
            <iframe class="iframe" src="https://gemini.google.com" allowfullscreen></iframe>
            `;
        }
        setContainer("cnt-gemini");
    })
    document.getElementById("chatgpt").addEventListener("click", function () {
        let iframe = document.getElementById("cnt-chatgpt");
        if (iframe.innerHTML === "") {
            iframe.innerHTML = `
            <iframe class="iframe" src="https://chatgpt.com/" allowfullscreen></iframe>
            `;
        }
        setContainer("cnt-chatgpt");
    });

    document.getElementById("calc").addEventListener("click", function () {
        let iframe = document.getElementById("cnt-calc");
        if (iframe.innerHTML === "") {
            iframe.innerHTML = `
            <iframe class="iframe" src="https://calcwidget.netlify.app" allowfullscreen></iframe>
            `;
        }
        setContainer("cnt-calc");
    })

    document.getElementById("cal").addEventListener("click", function () {
        let iframe = document.getElementById("cnt-cal");
        if (iframe.innerHTML === "") {
            iframe.innerHTML = `
            <iframe class="iframe" src="https://calendarwidget.netlify.app" allowfullscreen></iframe>
            `;
        }
        setContainer("cnt-cal");
    })
    document.getElementById("notes").addEventListener("click", function () {
        let iframe = document.getElementById("cnt-notes");
        if (iframe.innerHTML === "") {
            iframe.innerHTML = `
            <iframe class="iframe" src="https://ssnotes.netlify.app/" allowfullscreen></iframe>
            `;
        }
        setContainer("cnt-notes");
    });
});

function setContainer(element) {
    let content = document.getElementsByClassName("content");
    for (let i = 0; i < content.length; i++) {
        content[i].style.display = "none";
    }

    document.getElementById(element).style.display = "block";
    document.getElementById("menu").style.flexWrap = "wrap";
    document.getElementById("menu").style.flexGrow = "1";
    document.getElementById("menu").style.flexDirection = "row";
    document.getElementById("menu").style.gap = "0";
    document.getElementById("container").style.display = "block";
    document.getElementById("container").style.height = "98vh";


}
