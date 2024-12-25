// Form validation
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function(event) {
        // Prevent the form from submitting if there are validation errors
        event.preventDefault();

        let isValid = true;

        // Get the form fields
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Clear any previous error messages
        document.querySelectorAll(".error-message").forEach(function(element) {
            element.textContent = "";
        });

        // Validate Name
        if (name.trim() === "") {
            isValid = false;
            document.getElementById("nameError").textContent = "Please enter your name.";
        }

        // Validate Email
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (email.trim() === "") {
            isValid = false;
            document.getElementById("emailError").textContent = "Please enter your email.";
        } else if (!emailPattern.test(email)) {
            isValid = false;
            document.getElementById("emailError").textContent = "Please enter a valid email address.";
        }

        // Validate Message
        if (message.trim() === "") {
            isValid = false;
            document.getElementById("messageError").textContent = "Please enter your message.";
        }

        // If form is valid, allow submission
        if (isValid) {
            form.submit();
        }
    });
});
