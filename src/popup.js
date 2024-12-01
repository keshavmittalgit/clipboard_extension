import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { firebaseConfig } from "../firebaseApiKey";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById('loginButton').addEventListener('click', () => {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  showLoading();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(userCredential.user);
      toggleAuthButtons();
      hideLoading();
    })
    .catch((error) => {
      console.error(error);
      hideLoading();
    });
});

document.getElementById('signupButton').addEventListener('click', () => {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  showLoading();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(userCredential.user);
      toggleAuthButtons();
      hideLoading();
    })
    .catch((error) => {
      console.error(error);
      hideLoading();
    });
});

document.getElementById('logoutButton').addEventListener('click', () => {
  showLoading();
  signOut(auth).then(() => {
    toggleAuthButtons();
    hideLoading();
  }).catch((error) => {
    console.error(error);
    hideLoading();
  });
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

function showLoading() {
  document.getElementById('loading').classList.remove('hidden');
  document.getElementById('login-container').classList.add('hidden');
  document.getElementById('logoutButton').classList.add('hidden');
}

function hideLoading() {
  document.getElementById('loading').classList.add('hidden');
  document.getElementById('login-container').classList.remove('hidden');
  document.getElementById('logoutButton').classList.remove('hidden');
}

// Show loading initially
showLoading();

// Check auth state
onAuthStateChanged(auth, (user) => {
  if (user) {
    toggleAuthButtons();
  } else {
    toggleAuthButtons(false);
  }
  hideLoading(); // Hide loading once auth state is determined
});
