import { db } from '../../firebase-config.js';
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

document.addEventListener("DOMContentLoaded", async () => {
  const courseList = document.getElementById("course-list");
  const querySnapshot = await getDocs(collection(db, "courses"));
  querySnapshot.forEach((doc) => {
    const course = doc.data();
    const div = document.createElement("div");
    div.innerHTML = `<h3>${course.title}</h3><p>${course.description}</p>`;
    courseList.appendChild(div);
  });
});
