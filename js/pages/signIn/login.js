import { showMessage } from "../../utils/ui.js";
import { messages, testMembers } from "../../contants/contants.js";

export function submitLoginForm(
  emailInput,
  pwInput,
  emailErrorMessage,
  pwErrorMessage
) {
  const email = emailInput.value;
  const password = pwInput.value;

  if (
    email === testMembers.TEST_EMAIL &&
    password === testMembers.TEST_PASSWORD
  ) {
    location.href = "./folder.html";
  } else {
    showMessage(emailErrorMessage, messages.INCORRECT_CREDENTIALS);
    showMessage(pwErrorMessage, messages.INCORRECT_CREDENTIALS);
  }
}
