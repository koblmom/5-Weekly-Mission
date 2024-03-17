import {
  validateEmail,
  validatePassword,
  validateConfirmPassword,
} from "./common/validation.js";
import { submitLoginForm } from "./login.js";
import { togglePassword } from "./common/ui.js";

const emailInput = document.querySelector('input[type="email"]');
const pwInput = document.querySelector('input[type="password"]');
const comfirmPw = document.querySelector("#confirm-password");
const emailErrorMessage = document.querySelector("#email-error-message");
const pwErrorMessage = document.querySelector("#pw-error-message");
const confirmErrorMessage = document.querySelector("#pw-confirm-message");
const submitButton = document.querySelector("#submit-button");
const eyeButton = document.querySelector(".eye-button");

emailInput.addEventListener("focusout", () =>
  validateEmail(emailInput, emailErrorMessage, true)
);

pwInput.addEventListener("focusout", () =>
  validatePassword(pwInput, pwErrorMessage, true)
);

comfirmPw.addEventListener("focusout", () => {
  validateConfirmPassword(comfirmPw, confirmErrorMessage, pwInput);
});

submitButton.addEventListener("click", () =>
  submitLoginForm(emailInput, pwInput, emailErrorMessage, pwErrorMessage)
);
eyeButton.addEventListener("click", () => togglePassword(pwInput, eyeButton));

document.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    submitLoginForm(emailInput, pwInput, emailErrorMessage, pwErrorMessage);
  }
});
