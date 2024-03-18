import {
  validateEmail,
  clearEmailInput,
  displayErrorMessage,
  validatePassword,
} from "./common/validation.js";
import { submitLoginForm } from "./login.js";
import { togglePassword } from "./common/ui.js";

const emailInput = document.querySelector('input[type="email"]');
const pwInput = document.querySelector('input[type="password"]');
const emailErrorElement = document.querySelector("#email-error-message");
const pwErrorMessage = document.querySelector("#pw-error-message");
const submitButton = document.querySelector("#submit-button");
const eyeButton = document.querySelector(".eye-button");

emailInput.addEventListener("focusout", () => {
  onEmailFocusOut(emailInput);
});

function onEmailFocusOut(email) {
  const [isValid, message] = validateEmail(email);

  if (isValid) {
    return clearEmailInput(email, emailErrorElement);
  }

  displayErrorMessage(emailInput, emailErrorElement, message);
}

emailInput.addEventListener("focusout", () =>
  validateEmail(emailInput, emailErrorMessage)
);
pwInput.addEventListener("focusout", () =>
  validatePassword(pwInput, pwErrorMessage)
);
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
