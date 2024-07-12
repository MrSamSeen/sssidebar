console.log("Sidebar loaded");
document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("gemini").addEventListener("click", function () {
        setContainer("cnt-gemini");
        loadWebpage("https://gemini.google.com");
        function loadWebpage(url) {
            const open = async (url) => {
                let frame = document.getElementById("gemini-iframe");
                if (frame) {
                    frame.className = "";
                }

                await chrome.declarativeNetRequest.updateSessionRules({
                    removeRuleIds: [1],
                    addRules: [{
                        id: 1,
                        priority: 1,
                        action: {
                            type: "modifyHeaders",
                            responseHeaders: [
                                { header: "x-frame-options", operation: "remove" },
                                { header: "content-security-policy", operation: "remove" },
                            ],
                        },
                        condition: {
                            urlFilter: "*",
                            resourceTypes: ["main_frame", "sub_frame", "xmlhttprequest", "websocket"],
                        },
                    },
                    ],
                });
                let iframe = document.getElementById("gemini-iframe");
                iframe.src = url;
                console.log(open);
            }

        }
        // if (iframe.innerHTML === "") {
        //     iframe.innerHTML = `
        //     <iframe id="preview" class="hidden" allow="camera; clipboard-write; fullscreen; microphone; geolocation" src="https://google.com"></iframe>
        //     `;
        // }

    });
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
    });

    document.getElementById("cal").addEventListener("click", function () {
        let iframe = document.getElementById("cnt-cal");
        if (iframe.innerHTML === "") {
            iframe.innerHTML = `
            <iframe class="iframe" src="https://calendarwidget.netlify.app" allowfullscreen></iframe>
            `;
        }
        setContainer("cnt-cal");
    });
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
    console.log(element);
    document.getElementById(element).style.display = "block";
    document.getElementById("menu").style.flexWrap = "wrap";
    document.getElementById("menu").style.flexGrow = "1";
    document.getElementById("menu").style.flexDirection = "row";
    document.getElementById("container").style.display = "block";
    document.getElementById("container").style.height = "98vh";
}
