import {
  emailInput,
  pwInput,
  confirmPw,
  emailErrorElement,
  passwordErrorElement,
  confirmErrorElement,
  signForm,
  togglePasswordVisibility,
  toggleConfirmVisibility,
} from "./ui.js";
import {
  validateEmail,
  validatePassword,
  validateConfirmPassword,
} from "../../utils/validation.js";
import {
  togglePassword,
  displayErrorMessage,
  clearInput,
} from "../../utils/ui.js";
import { checkDuplicateEmail, submitRegisterForm } from "./api.js";

emailInput.addEventListener("focusout", () => {
  onEmailFocusOut(emailInput, emailErrorElement);
});

function onEmailFocusOut(emailInput, emailErrorElement) {
  const email = emailInput.value;
  const [isValidEmail, emailErrorMessage] = validateEmail(email);
  checkDuplicateEmail(email, emailErrorElement);
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

signForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const emailInput = form.querySelector('input[type="email"]');
  const pwInput = form.querySelector('input[type="password"]');
  const confirmPw = form.querySelector("#confirm-password");

  submitRegisterForm(emailInput, pwInput, confirmPw);
});
