import { messages, testMembers } from "./contants.js";

function isValidEmail(email) {
  return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i.test(email);
}

function checkStrongPassword(password) {
  return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);
}

export function showMessage(ele, message) {
  ele.textContent = message;
}

export function validateEmail(
  emailInput,
  emailErrorMessage,
  checkDuplicate = false
) {
  const email = emailInput.value;
  if (email === "") {
    emailInput.classList.add("empty");
    showMessage(emailErrorMessage, messages.EMAIL_EMPTY);
  } else if (!isValidEmail(email)) {
    showMessage(emailErrorMessage, messages.EMAIL_INVALID);
  } else if (checkDuplicate && email === testMembers.TEST_EMAIL) {
    emailInput.classList.add("empty");
    showMessage(emailErrorMessage, messages.EMAIL_DUPLICATE);
  } else {
    emailInput.classList.remove("empty");
    showMessage(emailErrorMessage, " ");
  }
}

export function validatePassword(
  pwInput,
  pwErrorMessage,
  isStrongPassword = false
) {
  const password = pwInput.value;
  if (password === "") {
    pwInput.classList.add("empty");
    showMessage(pwErrorMessage, messages.PASSWORD_EMPTY);
  } else if (isStrongPassword && !checkStrongPassword(password)) {
    pwInput.classList.add("empty");
    showMessage(pwErrorMessage, messages.PASSWORD_WEAK);
  } else {
    pwInput.classList.remove("empty");
    showMessage(pwErrorMessage, " ");
  }
}
