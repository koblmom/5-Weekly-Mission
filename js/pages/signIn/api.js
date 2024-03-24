import { showMessage } from "../../utils/ui.js";
import { messages, urls } from "../../contants/contants.js";

function saveAccessToken(token) {
  localStorage.setItem("accessToken", token);
}

async function submitLoginForm(
  emailInput,
  pwInput,
  emailErrorMessage,
  pwErrorMessage
) {
  const email = emailInput.value;
  const password = pwInput.value;

  try {
    const response = await fetch(urls.BASE_URL + "/sign-in", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    if (response.ok) {
      const token = await response.json();
      saveAccessToken(token.data.accessToken);
      location.href = "./folder.html";
    } else {
      throw new Error("ERROR");
    }
  } catch (error) {
    showMessage(emailErrorMessage, messages.INCORRECT_CREDENTIALS);
    showMessage(pwErrorMessage, messages.INCORRECT_CREDENTIALS);
  }
}

if (localStorage.accessToken !== undefined) {
  location.href = "./folder.html";
}
export { submitLoginForm };
