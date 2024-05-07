'use strict';

const loginForm = document.getElementById('login-form');
const googleSignin = document.getElementById('google-signin');



googleSignin.addEventListener('click', () => {
  // Handle Google Sign-in logic using Firebase or other libraries
  // (You'll need to implement Google Sign-in functionality)
  loginForm.innerHTML = '<h1>  login ho gaya bhai</h1>';
});
