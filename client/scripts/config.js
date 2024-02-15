document.getElementById('lockBtn').addEventListener('click', function () {
  var unlockForm = document.getElementById('unlockForm')
  var blockLevelSelect = document.getElementById('blockLevel')
  var logoutBtn = document.getElementById('logout-btn')

  if (unlockForm.style.display === 'none') {
    unlockForm.style.display = 'block'
    blockLevelSelect.disabled = true
    this.style.display = 'none'
    logoutBtn.style.display = 'none'
  } else {
    unlockForm.style.display = 'none'
    blockLevelSelect.disabled = false
    this.value = 'Lock'
  }
})

document.getElementById('unlockBtn').addEventListener('click', function () {
  var unlockPassword = document.getElementById('unlockPassword').value
  let token
  chrome.storage.local.get(['token']).then(result => {
    token = result
  })
  // fetch("https://your-api-endpoint.com/login", {
  //     method: "POST",
  //     headers: {
  //         "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify({  password: unlockPassword,token:token })
  // })
  // .then(response => {
  //     if (!response.ok) {
  //         alert("Login failed. Please check your credentials and try again.");
  //     }
  //     return response.json();
  // })
  // .then(data => {
  //     if(data.isCorrect){

  //         var unlockForm = document.getElementById("unlockForm");
  //         var blockLevelSelect = document.getElementById("blockLevel");

  //         unlockForm.style.display = "none";
  //         blockLevelSelect.disabled = false;

  //         // Optionally, reset the password input field
  //         document.getElementById("unlockPassword").value = "";

  //         // Change the Lock button back to its original state
  //         document.getElementById("lockBtn").style.display = "block";
  //         document.getElementById('logout-btn').style.display = "block";
  //     }else{
  //         alert("Incorrect password. Please try again.");
  //     }
  // })
  // .catch(error => {
  //     console.log(error);
  // });

  //! TEST SECTION

  var unlockForm = document.getElementById('unlockForm')
  var blockLevelSelect = document.getElementById('blockLevel')

  unlockForm.style.display = 'none'
  blockLevelSelect.disabled = false

  // Optionally, reset the password input field
  document.getElementById('unlockPassword').value = ''

  // Change the Lock button back to its original state
  document.getElementById('lockBtn').style.display = 'block'
  document.getElementById('logout-btn').style.display = 'block'
})

document.getElementById("whiteList").addEventListener('click',redirectToWhiteLIst)
function redirectToWhiteLIst(){
    console.log("Button clicked"); // Check if this message appears in the console
    chrome.tabs.create({ url: chrome.runtime.getURL('../pages/settings.html') });
};

document.getElementById('logout-btn').addEventListener('click', logout);
function logout () {
  localStorage.removeItem('token')
  window.location.href = '../pages/login.html'
}
