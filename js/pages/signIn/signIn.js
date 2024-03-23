import {
  emailInput,
  pwInput,
  emailErrorElement,
  passwordErrorElement,
  submitButton,
  togglePasswordVisibility,
} from "./ui.js";

import { validateEmail, validatePassword } from "../../utils/validation.js";
import { submitLoginForm } from "./login.js";
import {
  togglePassword,
  clearInput,
  displayErrorMessage,
} from "../../utils/ui.js";

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

submitButton.addEventListener("click", () => {
  submitLoginForm(emailInput, pwInput, emailErrorElement, passwordErrorElement);
});
togglePasswordVisibility.addEventListener("click", () =>
  togglePassword(pwInput, togglePasswordVisibility)
);

document.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    submitLoginForm(
      emailInput,
      pwInput,
      emailErrorElement,
      passwordErrorElement
    );
  }
});
