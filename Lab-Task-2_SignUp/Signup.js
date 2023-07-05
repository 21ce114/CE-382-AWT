function validateForm(event) {
    event.preventDefault();

    clearErrors();
    changeColor();

    var fullName = document.getElementById("fullName").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var gender = document.querySelector('input[name="gender"]:checked');
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var state = document.getElementById("state").value;
    var agreement = document.getElementById("agreement").checked;

    
    var usernameRegex = /^[a-zA-Z0-9]+$/;
    var passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[\W]).{6,10}$/;
    var phoneRegex = /^\d{10}$/;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    var hasErrors = false;

    if (!fullName.trim()) {
      showError("fullNameError", "Please enter your full name");
      hasErrors = true;
    }

    if (!username.trim() || !username.match(usernameRegex)) {
      showError("usernameError", "Please enter a valid alphanumeric username");
      hasErrors = true;
    }

    if (!password.trim() || !password.match(passwordRegex)) {
      showError(
        "passwordError",
        "Please enter a valid password (alphanumeric with at least one special symbol), length must be between 6 and 10 characters"
      );
      hasErrors = true;
    }

    if (password !== confirmPassword) {
      showError("confirmPasswordError", "Passwords do not match");
      hasErrors = true;
    }

    if (!gender) {
      showError("genderError", "Please select your gender");
      hasErrors = true;
    }

    if (!phone.trim() || !phone.match(phoneRegex)) {
      showError("phoneError", "Please enter a valid 10-digit phone number");
      hasErrors = true;
    }

    if (!email.trim() || !email.match(emailRegex)) {
      showError("emailError", "Please enter a valid email address");
      hasErrors = true;
    }

    if (!state) {
      showError("stateError", "Please select a state");
      hasErrors = true;
    }

    if (!agreement) {
      showError("agreementError", "Please agree to the terms and conditions");
      hasErrors = true;
    }

    if (!hasErrors) {
      window.location.href = "login.html";
    }
  }

  function showError(elementId, errorMessage) {
    var errorElement = document.getElementById(elementId);
    errorElement.textContent = "* " + errorMessage;
  }

  function clearErrors() {
    var errorElements = document.getElementsByClassName("error");
    for (var i = 0; i < errorElements.length; i++) {
      errorElements[i].textContent = "";
    }
  }
  function changeColor(){
    var errorElements = document.getElementsByClassName("error");
      for(var i=0; i<errorElements.length; i++)
      {
          errorElements[i].style.color='red';
      }
  }
