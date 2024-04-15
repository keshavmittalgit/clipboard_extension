`user strict`;
console.log("atlest it is connected so if you don't see a copy of clipboard some this is wrong with the code below")

let data = ''

const displayBox = document.getElementById('display-box');

document.addEventListener('keydown', () => {
    if(event.ctrlKey && event.key === 'v'){

        
        
        if (!navigator.clipboard) {
            console.error("Clipboard API is not supported in this browser");
            return;
        }
    
    // Access the clipboard contents and log it
        navigator.clipboard.readText()
        .then(clipboardData => {
            console.log("Clipboard Data:", clipboardData);
                data = clipboardData;
                displayBox.textContent = data;
            })
            .catch(error => {
                console.error("Failed to read clipboard data:", error);
            });
    }
 });



 document.getElementById('send-btn').addEventListener('click', () => {
        if (!navigator.clipboard) {
            console.error("Clipboard API is not supported in this browser");
            return;
        }
    
    // Access the clipboard contents and log it
        navigator.clipboard.readText()
        .then(clipboardData => {
            console.log("Clipboard Data:", clipboardData);
                data = clipboardData;
                displayBox.textContent = data;
            })
            .catch(error => {
                console.error("Failed to read clipboard data:", error);
            });
 });