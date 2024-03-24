import {
  emailInput,
  pwInput,
  emailErrorElement,
  passwordErrorElement,
  signForm,
  togglePasswordVisibility,
} from "./ui.js";
import { validateEmail, validatePassword } from "../../utils/validation.js";
import {
  togglePassword,
  clearInput,
  displayErrorMessage,
} from "../../utils/ui.js";
import { submitLoginForm, checkAccessToken } from "./api.js";

emailInput.addEventListener("focusout", () => {
  onEmailFocusOut(emailInput, emailErrorElement);
});

function onEmailFocusOut(emailInput, emailErrorElement) {
  const email = emailInput.value;
  const [isValidEmail, emailErrorMessage] = validateEmail(email);

  if (isValidEmail) {
    return clearInput(emailInput, emailErrorElement);
  }
  displayErrorMessage(emailInput, emailErrorElement, emailErrorMessage);
}

pwInput.addEventListener("focusout", () => {
  onPasswordFocusOut(pwInput, passwordErrorElement);
});

function onPasswordFocusOut(pwInput, passwordErrorElement) {
  const password = pwInput.value;
  const [isValidPassword, passwordErrorMessage] = validatePassword(password);

  if (isValidPassword) {
    return clearInput(pwInput, passwordErrorElement);
  }
  displayErrorMessage(pwInput, passwordErrorElement, passwordErrorMessage);
}

togglePasswordVisibility.addEventListener("click", () =>
  togglePassword(pwInput, togglePasswordVisibility)
);

signForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const emailInput = form.querySelector('input[type="email"]');
  const pwInput = form.querySelector('input[type="password"]');
  const emailErrorElement = form.querySelector("#email-error-message");
  const passwordErrorElement = form.querySelector("#pw-error-message");

  submitLoginForm(emailInput, pwInput, emailErrorElement, passwordErrorElement);
});

function redirectToFolderPage() {
  if (checkAccessToken()) {
    location.href = "./folder.html";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  redirectToFolderPage();
});
