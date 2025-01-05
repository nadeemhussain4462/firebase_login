import { auth } from "./firebase-config.js";
import {
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

// Display User Info
onAuthStateChanged(auth, (user) => {
  if (user) {
    document.getElementById("userInfo").textContent = `Welcome, ${user.email}`;
  } else {
    alert("No user logged in!");
    window.location.href = "login.html"; // Redirect to login page
  }
});

// Logout Functionality
document.getElementById("logoutBtn").addEventListener("click", async () => {
  try {
    await signOut(auth);
    alert("You have logged out!");
    window.location.href = "login.html";
  } catch (error) {
    console.error(error.message);
  }
});
