// script.js

document.querySelector('form').addEventListener('submit', function(event) {
    // Perform validation here
    console.log("Form submitted");
});

document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    
    form.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent the default form submission
  
      // Redirect to content page after form submission
      window.location.href = "main.html"; 
    });
  });
