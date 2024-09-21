const formOpenBtn1 = document.querySelector("#user-form"),
  home1 = document.querySelector(".home"),
  formContainer1 = document.querySelector(".form_container1"),
  formCloseBtn1 = document.querySelector(".form_close1"),
  signupBtn1 = document.querySelector("#signup"),
  loginBtn1 = document.querySelector("#login"),
  pwShowHide1 = document.querySelectorAll(".pw_hide");

// Show the form container
formOpenBtn1.addEventListener("click", () => home1.classList.add("show"));

// Close the form container
formCloseBtn1.addEventListener("click", () => home1.classList.remove("show"));

// Show/hide password functionality
pwShowHide1.forEach((icon) => {
  icon.addEventListener("click", () => {
    let getPwInput = icon.parentElement.querySelector("input");
    if (getPwInput.type === "password") {
      getPwInput.type = "text";
      icon.classList.replace("uil-eye-slash", "uil-eye");
    } else {
      getPwInput.type = "password";
      icon.classList.replace("uil-eye", "uil-eye-slash");
    }
  });
});

// Switch to the signup form
signupBtn1.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer1.classList.add("active"); // Show signup form
});

// Switch to the login form
loginBtn1.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer1.classList.remove("active"); // Show login form
});

// Validate password matching for signup
function validatePassword() {
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm_password").value;

  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return false; // Prevent form submission
  }
  return true; // Allow form submission
}
