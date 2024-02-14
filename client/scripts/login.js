document.addEventListener("DOMContentLoaded", function() {
    // Check if a token already exists in localStorage
    var token = localStorage.getItem("token");
    if (token) {
        // Redirect to the configuration page
        window.location.href = "../pages/config.html";
    }
});

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the username and password from the form
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Make a fetch request to your API endpoint
    fetch("https://your-api-endpoint.com/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ username: username, password: password })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Login failed. Please check your credentials and try again.");
        }
        return response.json();
    })
    .then(data => {
        // Assuming your API returns a token in the response
        var token = data.token;

        // Store the token in local storage
        localStorage.setItem("token", token);

        // Redirect to the configuration page
        window.location.href = "../pages/config.html";
    })
    .catch(error => {
        window.location.href = "../pages/config.html";
        console.error("Error:", error);
        alert(error.message);
    });
});
