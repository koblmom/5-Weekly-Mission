import { messages, testMembers } from "./contants.js";

function checkValidEmail(email) {
  return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i.test(email);
}

function checkStrongPassword(password) {
  return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);
}

export function showMessage(ele, message) {
  ele.textContent = message;
}

export function clearInput(inputElement, errorElement) {
  inputElement.classList.remove("empty");
  showMessage(errorElement, " ");
}

export function displayErrorMessage(inputElement, errorElement, message) {
  inputElement.classList.add("empty");
  showMessage(errorElement, message);
}

export function validateEmail(email) {
  if (email === "") {
    return [false, messages.EMAIL_EMPTY];
  } else if (!checkValidEmail(email)) {
    return [false, messages.EMAIL_INVALID];
  }

  return [true, null];
}

export function checkDuplicateEmail(email) {
  if (email === testMembers.TEST_EMAIL) {
    return false;
  }
  return true;
}

export function validatePassword(password) {
  if (password === "") {
    return [false, messages.PASSWORD_EMPTY];
  }

  return [true, null];
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
