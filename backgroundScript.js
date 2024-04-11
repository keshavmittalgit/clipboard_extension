`user strict`;

let copyButton = document.getElementById('test-btn')
copyButton.addEventListener('click', ()=> {
    navigator.clipboard.readText()
    .then(text => {
        console.log("Clipboard value:", text);
    })
    .catch(err => {
        console.error("Failed to read clipboard contents:", err);
    });
})

console.log("welcome to the extension world keshav mittal")



