const body = document.body;
const reveal = () => body.classList.add("loaded");
document.addEventListener("DOMContentLoaded", reveal);
window.addEventListener("load", reveal);

document.querySelectorAll(".faq-item").forEach((item) => {
  item.addEventListener("click", () => {
    const isActive = item.classList.contains("active");
    document.querySelectorAll(".faq-item").forEach((btn) => btn.classList.remove("active"));
    if (!isActive) {
      item.classList.add("active");
    }
  });
});
