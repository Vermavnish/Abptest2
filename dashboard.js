import { auth, db } from '../../firebase-config.js';
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

onAuthStateChanged(auth, async (user) => {
  if (user) {
    const courseList = document.getElementById("enrolled-courses");
    const querySnapshot = await getDocs(collection(db, "courses"));
    querySnapshot.forEach((doc) => {
      const course = doc.data();
      const div = document.createElement("div");
      div.innerHTML = `<h3>${course.title}</h3><p>${course.description}</p>`;
      courseList.appendChild(div);
    });
  } else {
    window.location.href = "login.html";
  }
});

document.getElementById("logout").addEventListener("click", () => {
  signOut(auth).then(() => window.location.href = "login.html");
});
