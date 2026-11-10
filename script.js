const form = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const formSuccess = document.getElementById("formSuccess");

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function showError(input, errorEl, message) {
  errorEl.textContent = message;
  input.classList.add("input-error");
}

function clearError(input, errorEl) {
  errorEl.textContent = "";
  input.classList.remove("input-error");
}

function validateEmail() {
  const value = emailInput.value.trim();

  if (value === "") {
    showError(emailInput, emailError, "Email tidak boleh kosong.");
    return false;
  }
  if (!emailPattern.test(value)) {
    showError(emailInput, emailError, "Format email tidak valid.");
    return false;
  }

  clearError(emailInput, emailError);
  return true;
}

function validatePassword() {
  const value = passwordInput.value;

  if (value.trim() === "") {
    showError(passwordInput, passwordError, "Password tidak boleh kosong.");
    return false;
  }

  clearError(passwordInput, passwordError);
  return true;
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  formSuccess.textContent = "";

  const isEmailValid = validateEmail();
  const isPasswordValid = validatePassword();

  if (isEmailValid && isPasswordValid) {
    formSuccess.textContent = "Login berhasil!";
    form.reset();
  }
});

// Hapus error saat user mulai mengetik lagi
emailInput.addEventListener("input", () => clearError(emailInput, emailError));
passwordInput.addEventListener("input", () =>
  clearError(passwordInput, passwordError),
);
