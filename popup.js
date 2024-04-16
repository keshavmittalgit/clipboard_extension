'use strict';

let data = '';

// Ensure the DOM is fully loaded before accessing elements
document.addEventListener('DOMContentLoaded', () => {
    const displayBox = document.getElementById('display-box');
    const sendButton = document.getElementById('send-btn');

    // Event listener for Ctrl+V
    document.addEventListener('keydown', (event) => {
        if (event.ctrlKey && event.key === 'v') {
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
                    displayBox.textContent = "Failed to copy ";
                });
        }
    });

    // Event listener for the send button
    sendButton.addEventListener('click', () => {
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
                displayBox.textContent = "Failed to copy ";
            });
    });
});
