import { showMessage } from "../../utils/ui.js";
import { messages, urls } from "../../contants/contants.js";
import {
  validateEmail,
  validatePassword,
  validateConfirmPassword,
} from "../../utils/validation.js";

function saveAccessToken(token) {
  localStorage.setItem("acessToken", token);
}

function checkAccessToken() {
  return localStorage.getItem("accessToken") !== null;
}

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

async function submitRegisterForm(emailInput, pwInput, confirmPw) {
  const email = emailInput.value;
  const password = pwInput.value;
  const confirmPassword = confirmPw.value;
  const isEmailInputValid = validateEmail(email);
  const isPasswordInputValid = validatePassword(password);
  const isConfirmPasswordInputValid = validateConfirmPassword(
    password,
    confirmPassword
  );

  if (
    isEmailInputValid[0] === true &&
    isPasswordInputValid[0] === true &&
    isConfirmPasswordInputValid[0] === true
  ) {
    try {
      const response = await fetch(urls.BASE_URL + "/sign-up", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      if (response.status === 200) {
        const token = await response.json();
        saveAccessToken(token.data.accessToken);
        location.href = "./folder.html";
      } else {
        throw new Error("ERROR");
      }
    } catch (error) {
      console.log("회원가입 오류");
    }
  }
}

export { checkDuplicateEmail, submitRegisterForm, checkAccessToken };
