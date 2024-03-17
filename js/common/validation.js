import { messages } from "./contants.js";

function isValidEmail(email) {
  return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i.test(email);
}

export function showMessage(ele, message) {
  ele.textContent = message;
}

export function validateEmail(emailInput, emailErrorMessage) {
  if (emailInput.value === "") {
    emailInput.classList.add("empty");
    showMessage(emailErrorMessage, messages.EMAIL_EMPTY);
  } else if (!isValidEmail(emailInput.value)) {
    showMessage(emailErrorMessage, messages.EMAIL_INVALID);
  } else {
    emailInput.classList.remove("empty");
    showMessage(emailErrorMessage, " ");
  }
}

export function validatePassword(pwInput, pwErrorMessage) {
  if (pwInput.value === "") {
    pwInput.classList.add("empty");
    showMessage(pwErrorMessage, messages.PASSWORD_EMPTY);
  } else {
    pwInput.classList.remove("empty");
    showMessage(pwErrorMessage, " ");
  }
}
