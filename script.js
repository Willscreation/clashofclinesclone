    let isLoggedIn = false;

    function downloadGame() {
        if (isLoggedIn) {
            alert('Starting game download...');
            // Simulate download behavior - redirect to a download link or trigger download
            window.location.href = 'https://play.google.com/store/apps/details?id=com.supercell.clashofclans'; // Add your actual game download link
        } else {
            document.getElementById('login-page').classList.remove('hidden');
        }
    }

    function login() {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username && password) {
            isLoggedIn = true;
            alert('Login successful!');
            document.getElementById('login-page').classList.add('hidden');
            document.getElementById('logout-button').classList.remove('hidden');
        } else {
            alert('Please enter valid credentials.');
        }
    }

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


