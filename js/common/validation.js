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

export function validateConfirmPassword(
  confirmPwInput,
  confirmErrorMessage,
  pwInput
) {
  const confirmPassword = confirmPwInput.value;

  if (pwInput.value !== confirmPassword) {
    confirmPwInput.classList.add("empty");
    showMessage(confirmErrorMessage, "비밀번호가 일치하지 않아요.");
  } else {
    confirmPwInput.classList.remove("empty");
    showMessage(confirmErrorMessage, " ");
  }
}
