`user strict`;





chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.message === "readClipboard") {
      navigator.clipboard.readText()
        .then(text => {
          console.log("Copied content:", text);
          sendResponse({ copiedText: text }); // Optional: Send response to popup or other parts
        })
        .catch(err => {
          console.error("Error reading clipboard:", err);
          sendResponse({ error: err.message }); // Optional: Send error message
        });
    }
  });