// Add your sidebar functionality here
console.log("Sidebar loaded");
document.addEventListener("DOMContentLoaded", function () {
    //cange ifram url when cliked on the span to gemini or chatgpt
    document.getElementById("gemini").addEventListener("click", function () {
        document.getElementById("container").innerHTML = `
        <iframe class="iframe" src="https://gemini.google.com" allowfullscreen></iframe>
        `;
        setContainer();
    })
    document.getElementById("chatgpt").addEventListener("click", function () {
        document.getElementById("container").innerHTML = `
        <iframe class="iframe" src="https://chatgpt.com/" allowfullscreen></iframe>
        `;
        setContainer();
    });

    //load calculator
    document.getElementById("calc").addEventListener("click", function () {
        document.getElementById("container").innerHTML = `
        <iframe class="iframe" src="https://calcwidget.netlify.app" allowfullscreen></iframe>
        `;
        setContainer();
    })
    //load calendar
    document.getElementById("cal").addEventListener("click", function () {
        document.getElementById("container").innerHTML = `
        <iframe class="iframe" src="https://calendarwidget.netlify.app" allowfullscreen></iframe>
        `;
        setContainer(); // Ensure this function is defined
    });
    document.getElementById("notes").addEventListener("click", function () {
        document.getElementById("container").innerHTML = `
        <iframe class="iframe" src="https://ssnotes.netlify.app/" allowfullscreen></iframe>
        `;
        setContainer(); // Ensure this function is defined
    });


});

function setContainer() {
    document.getElementById("container").style.display = "block";
    //set container hight to 100vh
    document.getElementById("container").style.height = "92vh";
}
