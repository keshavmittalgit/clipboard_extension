'use strict';

const loginForm = document.getElementById('login-form');
const googleSignin = document.getElementById('google-signin');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  // Send email and password to background script for verification
  // (You'll need to implement communication with background script)
  chrome.runtime.sendMessage({
    action: 'login',
    email: document.getElementById('email').value,
    password: document.getElementById('password').value
  });
});

googleSignin.addEventListener('click', () => {
  // Handle Google Sign-in logic using Firebase or other libraries
  // (You'll need to implement Google Sign-in functionality)
  console.log('Google Sign-in clicked (Implement logic here)');
});
