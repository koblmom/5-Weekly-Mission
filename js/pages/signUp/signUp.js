import {
  emailInput,
  pwInput,
  confirmPw,
  emailErrorElement,
  passwordErrorElement,
  confirmErrorElement,
  submitButton,
  togglePasswordVisibility,
  toggleConfirmVisibility,
} from "./ui.js";
import {
  validateEmail,
  validatePassword,
  checkDuplicateEmail,
  validateConfirmPassword,
} from "../../utils/validation.js";
import { submitRegisterForm } from "./register.js";
import {
  togglePassword,
  displayErrorMessage,
  clearInput,
} from "../../utils/ui.js";
import { messages } from "../../contants/contants.js";

emailInput.addEventListener("focusout", () => {
  onEmailFocusOut(emailInput, emailErrorElement);
});

function onEmailFocusOut(emailInput, emailErrorElement) {
  const email = emailInput.value;
  const [isValidEmail, emailErrorMessage] = validateEmail(email);

  if (!checkDuplicateEmail(email)) {
    return displayErrorMessage(
      emailInput,
      emailErrorElement,
      messages.EMAIL_DUPLICATE
    );
  }
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
