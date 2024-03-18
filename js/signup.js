import {
  validateEmail,
  clearEmailInput,
  displayErrorMessage,
  validatePassword,
  validateConfirmPassword,
  checkDuplicateEmail,
} from "./common/validation.js";
import { submitLoginForm } from "./login.js";
import { togglePassword } from "./common/ui.js";

const emailInput = document.querySelector('input[type="email"]');
const pwInput = document.querySelector('input[type="password"]');
const comfirmPw = document.querySelector("#confirm-password");
const emailErrorElement = document.querySelector("#email-error-message");
const pwErrorMessage = document.querySelector("#pw-error-message");
const confirmErrorMessage = document.querySelector("#pw-confirm-message");
const submitButton = document.querySelector("#submit-button");
const eyeButton = document.querySelector(".eye-button");
const confirmeyeButton = document.querySelector(".confirm-eye-button");

emailInput.addEventListener("focusout", () => {
  onEmailFocusOut(emailInput);
});

function onEmailFocusOut(email) {
  const [isValid, message] = validateEmail(email);

  if (!checkDuplicateEmail(email, emailErrorElement, message)) {
    return;
  }

  if (isValid) {
    return clearEmailInput(email, emailErrorElement);
  }

  displayErrorMessage(emailInput, emailErrorElement, message);
}

pwInput.addEventListener("focusout", () =>
  validatePassword(pwInput, pwErrorMessage, true)
);

comfirmPw.addEventListener("focusout", () =>
  validateConfirmPassword(comfirmPw, confirmErrorMessage, pwInput)
);

eyeButton.addEventListener("click", () => togglePassword(pwInput, eyeButton));
confirmeyeButton.addEventListener("click", () =>
  togglePassword(comfirmPw, confirmeyeButton)
);

document.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    submitLoginForm(emailInput, pwInput, emailErrorMessage, pwErrorMessage);
  }
});
