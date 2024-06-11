import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAr7yfDKXSi3bZh5xW0hAwEwu8BQbp-rec",
  authDomain: "clipboard-extension-63acb.firebaseapp.com",
  projectId: "clipboard-extension-63acb",
  storageBucket: "clipboard-extension-63acb.appspot.com",
  messagingSenderId: "236309694102",
  appId: "1:236309694102:web:2cbe48a255c5cbab4924b7",
  measurementId: "G-SWFPY56YVJ"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById('loginButton').addEventListener('click', () => {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(userCredential.user);
      toggleAuthButtons();
    })
    .catch((error) => {
      console.error(error);
    });
});

document.getElementById('signupButton').addEventListener('click', () => {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(userCredential.user);
      toggleAuthButtons();
    })
    .catch((error) => {
      console.error(error);
    });
});

document.getElementById('logoutButton').addEventListener('click', () => {
  signOut(auth).then(() => {
    toggleAuthButtons();
  }).catch((error) => {
    console.error(error);
  });
});

onAuthStateChanged(auth, (user) => {
  if (user) {
    toggleAuthButtons();
  } else {
    toggleAuthButtons(false);
  }
});

function toggleAuthButtons(loggedIn = true) {
  if (loggedIn) {
    document.getElementById('login-container').style.display = 'none';
    document.getElementById('logoutButton').style.display = 'block';
  } else {
    document.getElementById('login-container').style.display = 'block';
    document.getElementById('logoutButton').style.display = 'none';
  }
}
