document.getElementById("lockBtn").addEventListener("click", function () {
    var unlockForm = document.getElementById("unlockForm");
    var blockLevelSelect = document.getElementById("blockLevel");
    var logoutBtn = document.getElementById('logout-btn');

    if (unlockForm.style.display === "none") {
        unlockForm.style.display = "block";
        blockLevelSelect.disabled = true;
        this.style.display = "none";
        logoutBtn.style.display = "none"
    } else {
        unlockForm.style.display = "none";
        blockLevelSelect.disabled = false;
        this.value = "Lock";
    }
});

document.getElementById("unlockBtn").addEventListener("click", function () {
    var unlockPassword = document.getElementById("unlockPassword").value;

    // Send the password to the API for verification
    // You need to implement this part to send the password to your API and handle the response accordingly

    // For demonstration purposes, assume the password is correct
    // In a real scenario, you need to verify the password with your backend
    var isPasswordCorrect = true;

    if (isPasswordCorrect) {
        var unlockForm = document.getElementById("unlockForm");
        var blockLevelSelect = document.getElementById("blockLevel");

        unlockForm.style.display = "none";
        blockLevelSelect.disabled = false;

        // Optionally, reset the password input field
        document.getElementById("unlockPassword").value = "";

        // Change the Lock button back to its original state
        document.getElementById("lockBtn").style.display = "block";
        document.getElementById('logout-btn').style.display = "block";
    } else {
        alert("Incorrect password. Please try again.");
    }
});

function logout() {
    localStorage.removeItem("token");
    window.location.href = "login.html";
}
