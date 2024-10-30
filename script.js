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

document.getElementById("show-register").addEventListener("click", function() {
    document.getElementById("login-form").style.display = "none";
    document.getElementById("register-form").style.display = "block";
});

document.getElementById("show-login").addEventListener("click", function() {
    document.getElementById("register-form").style.display = "none";
    document.getElementById("login-form").style.display = "block";
});


