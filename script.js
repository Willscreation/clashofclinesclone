function downloadGame() {
    if (isLoggedIn) {
        alert('Starting game download...');
        window.location.href = 'https://play.google.com/store/apps/details?id=com.supercell.clashofclans';
    } else {
        document.getElementById('login-page').classList.remove('hidden');
    }
}
document.addEventListener('DOMContentLoaded', () => {
    let isLoggedIn = false;

    function login(event) {
        // Prevent form submission
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username && password) {
            isLoggedIn = true;
            alert('Login successful!');
            
            // Check if redirection line is reached
            console.log("Redirecting to index.html...");

            // Redirect to index.html after login
            window.location.href = 'index.html';
        } else {
            alert('Please enter valid credentials.');
        }
    }


    // Attach the login function to the button
    document.querySelector(".btn").addEventListener("click", login);
});
function logout() {
    isLoggedIn = false;
    alert('Logged out successfully!');
    document.getElementById('logout-button').classList.add('hidden');
}

const togglePassword = document.querySelector("#togglePassword");
const passwordInput = document.querySelector("#password");
const openEye = document.querySelector(".open");
const closedEye = document.querySelector(".closed");

togglePassword.addEventListener("click", function () {
    // Toggle the password field type between password and text
    const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
    passwordInput.setAttribute("type", type);

    // Toggle between the open and closed eye
    openEye.classList.toggle("closed");
    closedEye.classList.toggle("closed");
});


