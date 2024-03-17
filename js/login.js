import { showMessage } from "./common/validation.js";
import { messages } from "./common/message.js";

export function submitLoginForm(
  emailInput,
  pwInput,
  emailErrorMessage,
  pwErrorMessage
) {
  const email = emailInput.value;
  const password = pwInput.value;

  if (email === "test@codeit.com" && password === "codeit101") {
    location.href = "./folder.html";
  } else {
    showMessage(emailErrorMessage, messages.incorrectCredentials);
    showMessage(pwErrorMessage, messages.incorrectCredentials);
  }
}
