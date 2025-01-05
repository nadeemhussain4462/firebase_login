import { auth } from './firebase-config.js';
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

document.getElementById("signupForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
        await createUserWithEmailAndPassword(auth, email, password);
        alert("Signup successful!");
        window.location.href = "login.html"; // Redirect to login page
    } catch (error) {
        document.getElementById("message").textContent = error.message;
    }
});
