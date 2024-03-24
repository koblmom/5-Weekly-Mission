import { showMessage } from "../../utils/ui.js";
import { messages, urls } from "../../contants/contants.js";

async function checkDuplicateEmail(emailInput, emailErrorMessage) {
  try {
    const response = await fetch(urls.BASE_URL + "/check-email", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email: emailInput,
      }),
    });
    if (response.status === 409) {
      throw new Error("이메일이 이미 존재합니다.");
    }
  } catch (error) {
    showMessage(emailErrorMessage, messages.EMAIL_DUPLICATE);
  }
}

export { checkDuplicateEmail };
