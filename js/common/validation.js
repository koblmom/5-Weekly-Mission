import { messages, testMembers } from "./contants.js";

function isValidEmail(email) {
  return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i.test(email);
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

export function validatePassword(pwInput, pwErrorMessage) {
  if (pwInput.value === "") {
    pwInput.classList.add("empty");
    showMessage(pwErrorMessage, messages.PASSWORD_EMPTY);
  } else {
    pwInput.classList.remove("empty");
    showMessage(pwErrorMessage, " ");
  }
}
