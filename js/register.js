import { showMessage } from "./common/validation.js";
import { messages } from "./common/contants.js";

export function submitRegisterForm(
  emailInput,
  pwInput,
  confirmPw,
  emailErrorElement,
  passwordErrorElement,
  confirmErrorElement
) {
  const email = emailInput.value;
  const password = pwInput.value;
  const confirm = confirmPw.value;

  if (email && password && confirm) {
    location.href = "./folder.html";
  } else {
    showMessage(emailErrorElement, messages.INCORRECT_CREDENTIALS);
    showMessage(passwordErrorElement, messages.INCORRECT_CREDENTIALS);
    showMessage(confirmErrorElement, messages.INCORRECT_CREDENTIALS);
  }
}
