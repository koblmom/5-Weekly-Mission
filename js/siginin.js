import {
  validateEmail,
  clearInput,
  displayErrorMessage,
  validatePassword,
} from "./common/validation.js";
import { submitLoginForm } from "./login.js";
import { togglePassword } from "./common/ui.js";

const emailInput = document.querySelector('input[type="email"]');
const pwInput = document.querySelector('input[type="password"]');
const emailErrorElement = document.querySelector("#email-error-message");
const passwordErrorElement = document.querySelector("#pw-error-message");
const submitButton = document.querySelector("#submit-button");
const eyeButton = document.querySelector(".eye-button");

emailInput.addEventListener("focusout", () => {
  onEmailFocusOut(emailInput, emailErrorElement);
});

function onEmailFocusOut(emailInput, emailErrorElement) {
  const email = emailInput.value;
  const [isValid, message] = validateEmail(email);

  if (isValid) {
    return clearInput(emailInput, emailErrorElement);
  }
  displayErrorMessage(emailInput, emailErrorElement, message);
}

pwInput.addEventListener("focusout", () => {
  onPasswordFocusOut(pwInput, passwordErrorElement);
});

function onPasswordFocusOut(pwInput, passwordErrorElement) {
  const password = pwInput.value;
  const [isValid, message] = validatePassword(password);

  if (isValid) {
    return clearInput(pwInput, passwordErrorElement);
  }
  displayErrorMessage(pwInput, passwordErrorElement, message);
}

submitButton.addEventListener("click", () => {
  submitLoginForm(emailInput, pwInput, emailErrorMessage, pwErrorMessage);
});
eyeButton.addEventListener("click", () => togglePassword(pwInput, eyeButton));

document.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    submitLoginForm(emailInput, pwInput, emailErrorMessage, pwErrorMessage);
  }
});
