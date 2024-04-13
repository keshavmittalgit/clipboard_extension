

let sendButton = document.getElementById('send-btn')
sendButton.addEventListener('click',()=>{
    if (!navigator.clipboard) {
        console.error("Clipboard API is not supported in this browser");
        return;
      }
    
      // Access the clipboard contents and log it
      navigator.clipboard.readText()
        .then(clipboardData => {
          console.log("Clipboard Data:", clipboardData);
        })
        .catch(error => {
          console.error("Failed to read clipboard data:", error);
        });
})
