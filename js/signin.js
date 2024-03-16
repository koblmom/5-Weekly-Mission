const emailInput = document.querySelector('input[type="email"]');
const pwInput = document.querySelector('input[type="password"]');
const emailErrorMessage = document.querySelector("#email-error-message");
const pwErrorMessage = document.querySelector("#pw-error-message");
const submitButton = document.querySelector("#submit-button");
const eyeButton = document.querySelector(".eye-button");

const messages = {
  emptyEmail: "이메일을 입력해 주세요.",
  invalidEmail: "올바른 이메일 주소가 아닙니다.",
  emptyPassword: "비밀번호를 입력해 주세요.",
  incorrectCredentials: "이메일 또는 비밀번호를 확인해 주세요.",
};

function isValidEmail(email) {
  emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
  return emailRegex.test(email);
}

const showMessage = (ele, message) => {
  ele.textContent = message;
};

function validateEmail() {
  if (emailInput.value === "") {
    emailInput.classList.add("empty");
    showMessage(emailErrorMessage, messages.emptyEmail);
  } else if (!isValidEmail(emailInput.value)) {
    showMessage(emailErrorMessage, messages.invalidEmail);
  } else {
    emailInput.classList.remove("empty");
    showMessage(emailErrorMessage, " ");
  }
}

function validatePassword() {
  if (pwInput.value === "") {
    pwInput.classList.add("empty");
    showMessage(pwErrorMessage, messages.emptyPassword);
  } else {
    pwInput.classList.remove("empty");
    showMessage(pwErrorMessage, " ");
  }
}

function submitLoginForm() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email === "test@codeit.com" && password === "codeit101") {
    location.href = "./folder.html";
  } else {
    showMessage(emailErrorMessage, messages.incorrectCredentials);
    showMessage(pwErrorMessage, messages.incorrectCredentials);
  }
}

function togglePassword() {
  pwInput.type = pwInput.type === "password" ? "text" : "password";
  eyeButton.classList.toggle("eye-button-off");
}

emailInput.addEventListener("focusout", validateEmail);
pwInput.addEventListener("focusout", validatePassword);
submitButton.addEventListener("click", submitLoginForm);
eyeButton.addEventListener("click", togglePassword);

document.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    event.preventDefault(); // Enter 키의 기본 동작(폼 제출) 막기
    submitLoginForm();
  }
});
