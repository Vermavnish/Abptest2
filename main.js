import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyC0dQtToOsQD6Luv0YOmeethDO5kyimSKA",
  authDomain: "abpclass-7c802.firebaseapp.com",
  projectId: "abpclass-7c802",
  storageBucket: "abpclass-7c802.appspot.com",
  messagingSenderId: "841554153669",
  appId: "1:841554153669:web:6c9d4d84bf521c531b60ac",
  measurementId: "G-Y8HBFK4EV3"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// Basic signup and login logic
const loginForm = document.getElementById('loginForm');
if (loginForm) {
  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = loginForm.querySelector('input[type=email]').value;
    const password = loginForm.querySelector('input[type=password]').value;
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert('Login successful!');
      window.location.href = 'dashboard.html';
    } catch (error) {
      alert(error.message);
    }
  });
}

const signupForm = document.getElementById('signupForm');
if (signupForm) {
  signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = signupForm.querySelector('input[type=email]').value;
    const password = signupForm.querySelector('input[type=password]').value;
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert('Signup successful!');
      window.location.href = 'login.html';
    } catch (error) {
      alert(error.message);
    }
  });
}
