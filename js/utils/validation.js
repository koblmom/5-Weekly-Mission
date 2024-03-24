import { messages } from "../contants/contants.js";

function checkValidEmail(email) {
  return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i.test(email);
}

function checkStrongPassword(password) {
  return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);
}

export function validateEmail(email) {
  if (email === "") {
    return [false, messages.EMAIL_EMPTY];
  } else if (!checkValidEmail(email)) {
    return [false, messages.EMAIL_INVALID];
  }

  return [true, null];
}

export function validatePassword(password) {
  if (password === "") {
    return [false, messages.PASSWORD_EMPTY];
  } else if (!checkStrongPassword(password)) {
    return [false, messages.PASSWORD_WEAK];
  }

  return [true, null];
}

export function validateConfirmPassword(password, confirmPassword) {
  if (password !== confirmPassword) {
    return [false, messages.PASSWORD_MISMACTH];
  }

  return [true, null];
}
