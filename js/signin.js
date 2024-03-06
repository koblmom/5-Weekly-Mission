/* Email valid check */
function isValidEmail(email) {
  emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
  return emailRegex.test(email);
}

/* Append message */
function appendErrorMessage(message) {
  emailErrorMessage.textContent = message;
}

/* Validate email */
function validateEmail() {
  if (emailInput.value === "") {
    emailInput.classList.add("empty");
    appendErrorMessage("이메일을 입력해 주세요.");
  } else if (!isValidEmail(emailInput.value)) {
    appendErrorMessage("올바른 이메일 주소가 아닙니다.");
  } else {
    emailInput.classList.remove("empty");
    appendErrorMessage(" ");
  }
}

const emailInput = document.querySelector("#emailInput");
const emailErrorMessage = document.querySelector(".emailErrorMessage");

emailInput.addEventListener("focusout", validateEmail);
