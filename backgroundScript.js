`user strict`;





chrome.clipboard.onClipboardDataChanged.addListener(
    ()=>{
        navigator.clipboard.readText()
    .then(text => {
        console.log("Clipboard value:", text);
    })
    .catch(err => {
        console.error("Failed to read clipboard contents:", err);
    });
    },
  ) 