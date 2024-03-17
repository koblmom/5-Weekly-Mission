export function togglePassword(pwInput, eyeButton) {
  pwInput.type = pwInput.type === "password" ? "text" : "password";
  eyeButton.classList.toggle("eye-button-off");
}
