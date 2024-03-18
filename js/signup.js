import {
  validateEmail,
  clearInput,
  displayErrorMessage,
  validatePassword,
  checkDuplicateEmail,
  validateConfirmPassword,
} from "./common/validation.js";
import { submitLoginForm } from "./login.js";
import { togglePassword } from "./common/ui.js";
import { messages } from "./common/contants.js";

const emailInput = document.querySelector('input[type="email"]');
const pwInput = document.querySelector('input[type="password"]');
const comfirmPw = document.querySelector("#confirm-password");
const emailErrorElement = document.querySelector("#email-error-message");
const passwordErrorElement = document.querySelector("#pw-error-message");
const confirmErrorElement = document.querySelector("#pw-confirm-message");
const submitButton = document.querySelector("#submit-button");
const eyeButton = document.querySelector(".eye-button");
const confirmeyeButton = document.querySelector(".confirm-eye-button");

emailInput.addEventListener("focusout", () => {
  onEmailFocusOut(emailInput, emailErrorElement);
});

function onEmailFocusOut(emailInput, emailErrorElement) {
  const email = emailInput.value;
  const [isValid, message] = validateEmail(email);

  if (!checkDuplicateEmail(email)) {
    return displayErrorMessage(
      emailInput,
      emailErrorElement,
      messages.EMAIL_DUPLICATE
    );
  }
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

comfirmPw.addEventListener("focusout", () =>
  onConfirmFoucsOut(pwInput, comfirmPw)
);

function onConfirmFoucsOut(pwInput, comfirmPw) {
  const password = pwInput.value;
  const confirmPassword = comfirmPw.value;
  const [isValid, message] = validateConfirmPassword(password, confirmPassword);

  if (isValid) {
    return clearInput(comfirmPw, confirmErrorElement);
  }
  displayErrorMessage(comfirmPw, confirmErrorElement, message);
}

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
