// Bottom navigation active state
const navItems = document.querySelectorAll(".nav-item");

navItems.forEach((btn) => {
  btn.addEventListener("click", () => {
    navItems.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
  });
});

// Future: yahan tum API ya backend connect kar sakte ho.
// Filhaal sab static data hai, HTML me directly change kar sakte ho.
