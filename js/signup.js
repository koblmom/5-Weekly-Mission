import {
  validateEmail,
  clearInput,
  displayErrorMessage,
  validatePassword,
  checkDuplicateEmail,
  validateConfirmPassword,
} from "./common/validation.js";
import { submitRegisterForm } from "./register.js";
import { togglePassword } from "./common/ui.js";
import { messages } from "./common/contants.js";

const emailInput = document.querySelector('input[type="email"]');
const pwInput = document.querySelector('input[type="password"]');
const confirmPw = document.querySelector("#confirm-password");
const emailErrorElement = document.querySelector("#email-error-message");
const passwordErrorElement = document.querySelector("#pw-error-message");
const confirmErrorElement = document.querySelector("#pw-confirm-message");
const submitButton = document.querySelector("#submit-button");
const togglePasswordVisibility = document.querySelector(".eye-button");
const toggleConfirmVisibility = document.querySelector(".confirm-eye-button");

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

confirmPw.addEventListener("focusout", () =>
  onConfirmFoucsOut(pwInput, confirmPw)
);

function onConfirmFoucsOut(pwInput, confirmPw) {
  const password = pwInput.value;
  const confirmPassword = confirmPw.value;
  const [isValid, message] = validateConfirmPassword(password, confirmPassword);

  if (isValid) {
    return clearInput(confirmPw, confirmErrorElement);
  }
  displayErrorMessage(confirmPw, confirmErrorElement, message);
}

togglePasswordVisibility.addEventListener("click", () =>
  togglePassword(pwInput, togglePasswordVisibility)
);
toggleConfirmVisibility.addEventListener("click", () =>
  togglePassword(confirmPw, toggleConfirmVisibility)
);

submitButton.addEventListener("click", () => {
  submitRegisterForm(
    emailInput,
    pwInput,
    confirmPw,
    emailErrorElement,
    passwordErrorElement,
    confirmErrorElement
  );
});

document.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    submitRegisterForm(
      emailInput,
      pwInput,
      confirmPw,
      emailErrorElement,
      passwordErrorElement,
      confirmErrorElement
    );
  }
});
