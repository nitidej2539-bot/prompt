document.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    console.log("เปิดหน้า:", link.getAttribute("href"));
  });
});