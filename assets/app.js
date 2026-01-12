const body = document.body;
window.addEventListener("load", () => {
  body.classList.add("loaded");
});

document.querySelectorAll(".faq-item").forEach((item) => {
  item.addEventListener("click", () => {
    const isActive = item.classList.contains("active");
    document.querySelectorAll(".faq-item").forEach((btn) => btn.classList.remove("active"));
    if (!isActive) {
      item.classList.add("active");
    }
  });
});
