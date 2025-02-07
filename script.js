document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("login-form");
    const registerForm = document.getElementById("register-form");
    const showRegisterLink = document.getElementById("show-register");
    const showLoginLink = document.getElementById("show-login");

    // Show Register Form
    showRegisterLink.addEventListener("click", (event) => {
        event.preventDefault();
        loginForm.style.display = "none";
        registerForm.style.display = "block";
    });

    // Show Login Form
    showLoginLink.addEventListener("click", (event) => {
        event.preventDefault();
        registerForm.style.display = "none";
        loginForm.style.display = "block";
    });

    // Login Functionality
    loginForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Check credentials (this is a placeholder for a real authentication process)
        if (username && password) {
            localStorage.setItem("isLoggedIn", "true"); // Set login status
            alert("Login successful!");
            window.location.href = "download.html"; // Redirect to homepage
        } else {
            alert("Invalid username or password.");
        }
    });

    // Register Functionality
    registerForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const regUsername = document.getElementById("reg-username").value;
        const regEmail = document.getElementById("reg-email").value;
        const regPassword = document.getElementById("reg-password").value;

        // Placeholder for saving new user details (could be stored in a database)
        alert(`Account created for ${regUsername} with email ${regEmail}`);

        // Redirect to login form after registration
        registerForm.style.display = "none";
        loginForm.style.display = "block";
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const authBtn = document.getElementById("auth-btn");

    // Check login status and update button text
    function updateAuthButton() {
        if (localStorage.getItem("isLoggedIn") === "true") {
            authBtn.textContent = "sign out";
        } else {
            authBtn.textContent = "sign in";
        }
    }

    // Initialize button state
    updateAuthButton();

    // Toggle login/logout action
    authBtn.addEventListener("click", function () {
        if (localStorage.getItem("isLoggedIn") === "true") {
            localStorage.removeItem("isLoggedIn");
            alert("You have been logged out.");
            updateAuthButton();
            window.location.href = "login.html"; // Redirect to login page after alert
        } else {
            window.location.href = "login.html"; // Redirect to login page
        }
    });
});

const openButton = document.getElementById('open')
const navbar = document.getElementById('navbar')

function openSidebar() {
    navbar.classList.add('show')
    openButtton.setAttribute('aria-expanded', 'ture')
}

function closeSidebar() {
    navbar.classList.remove('show')
    openButtton.setAttribute('aria-expanded', 'false')
}