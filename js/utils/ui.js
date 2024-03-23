export function togglePassword(pwInput, eyeButton) {
  pwInput.type = pwInput.type === "password" ? "text" : "password";
  eyeButton.classList.toggle("eye-button-off");
}

export function showMessage(ele, message) {
  ele.textContent = message;
}

export function clearInput(inputElement, errorElement) {
  inputElement.classList.remove("empty");
  showMessage(errorElement, " ");
}

export function displayErrorMessage(inputElement, errorElement, message) {
  inputElement.classList.add("empty");
  showMessage(errorElement, message);
}
