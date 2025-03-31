function showAlert() {
  alert("Регистрация успешна!");
}

const modal = document.getElementById("modal");
const registerBtn = document.getElementById("learnMore");
const closeModal = document.getElementById("closeModal");

registerBtn.addEventListener("click", () => modal.classList.remove("hidden"));
closeModal.addEventListener("click", () => modal.classList.add("hidden"));
modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.classList.add("hidden");
});
