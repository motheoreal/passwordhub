function generatePassword() {
    // Get the selected options
    var includeSpecial = document.getElementById("include-special").checked;
    var includeUppercase = document.getElementById("include-uppercase").checked;
    var includeNumbers = document.getElementById("include-numbers").checked;
    // Get the length of the password from the input field
    var length = document.getElementById("password-length").value;
    // Set the possible characters for the password
    var characters = "abcdefghijklmnopqrstuvwxyz";
    if (includeSpecial) {
      characters += "!@#$%^&*()";
    }
    if (includeUppercase) {
      characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (includeNumbers) {
      characters += "0123456789";
    }
    // Initialize the password variable
    var password = "";
    // Generate the password
    for (var i = 0; i < length; i++) {
      password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    // Display the password
    document.getElementById("generated-password").value = password;
  }
  

// function to toggle the class of the body element
function toggleDarkLightMode() {
    let body = document.getElementsByTagName("body")[0];
    let currentClass = body.className;
    body.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";
  }
  
 // function to toggle the class of the body element
function toggleDarkLightMode() {
    let body = document.getElementsByTagName("body")[0];
    let currentClass = body.className;
    body.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";
  }
  
  // function to add event listener to the button
  function addEventListeners() {
    let toggleBtn = document.getElementById("mode-toggle-btn");
    toggleBtn.addEventListener("click", toggleDarkLightMode);
  }
  
  // call the addEventListeners function when the document is ready
  document.addEventListener("DOMContentLoaded", addEventListeners);
  
  
  // Sidebar
  function toggleDarkLightMode() {
    let body = document.getElementsByTagName("body")[0];
    let currentClass = body.className;
    body.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";
  
    let sidebars = document.getElementsByClassName("sidebar");
    for (let sidebar of sidebars) {
      sidebar.classList.remove("dark-mode","light-mode");
    }
  }
  
  
