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

/* password password */
function validatePassword() {
  if (pwInput.value === "") {
    pwInput.classList.add("empty");
    appendPWError("비밀번호를 입력해 주세요.");
  } else {
    pwInput.classList.remove("empty");
    appendPWError(" ");
  }
}

const emailInput = document.querySelector("#emailInput");
const emailErrorMessage = document.querySelector(".emailErrorMessage");
const pwInput = document.querySelector("#pwInput");
const pwErrorMessage = document.querySelector(".pwErrorMessage");

emailInput.addEventListener("focusout", validateEmail);
pwInput.addEventListener("focusout", validatePassword);
