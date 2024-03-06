/* Email valid check */
function isValidEmail(email) {
  emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
  return emailRegex.test(email);
}

/* Append message */
function appendEmailError(message) {
  emailErrorMessage.textContent = message;
}
function appendPWError(message) {
  pwErrorMessage.textContent = message;
}

/* Validate email */
function validateEmail() {
  if (emailInput.value === "") {
    emailInput.classList.add("empty");
    appendEmailError("이메일을 입력해 주세요.");
  } else if (!isValidEmail(emailInput.value)) {
    appendEmailError("올바른 이메일 주소가 아닙니다.");
  } else {
    emailInput.classList.remove("empty");
    appendEmailError(" ");
  }
}

/* validate password */
function validatePassword() {
  if (pwInput.value === "") {
    pwInput.classList.add("empty");
    appendPWError("비밀번호를 입력해 주세요.");
  } else {
    pwInput.classList.remove("empty");
    appendPWError(" ");
  }
}

const emailInput = document.querySelector(".emailInput");
const emailErrorMessage = document.querySelector(".emailErrorMessage");
const pwInput = document.querySelector(".pwInput");
const pwErrorMessage = document.querySelector(".pwErrorMessage");

emailInput.addEventListener("focusout", validateEmail);
pwInput.addEventListener("focusout", validatePassword);

/* Submit loginform */
document
  .querySelector(".submit-button")
  .addEventListener("click", submitLoginForm);

document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault(); // Enter 키의 기본 동작(폼 제출) 막기
    submitLoginForm();
  }
});

function submitLoginForm() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email === "test@codeit.com" && password === "codeit101") {
    location.href = "./folder.html";
  } else {
    appendEmailError("이메일을 확인 해주세요.");
    appendPWError("비밀번호를 확인해 주세요.");
  }
}

/* Password eye toggle */
const eyeImg = document.querySelector(".eyeImg");
const pwField = document.querySelector(".pwInput");

eyeImg.addEventListener("click", function () {
  if (pwField.type === "password") {
    pwField.setAttribute("type", "text");
    eyeImg.setAttribute("src", "../images/signin/eye-on.svg");
  } else {
    pwField.setAttribute("type", "password");
    eyeImg.setAttribute("src", "../images/signin/eye-off.svg");
  }
});
