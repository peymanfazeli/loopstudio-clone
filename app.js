// Mobile menu handlers
const hamburger = document.querySelector("#menu-btn");
const menu = document.querySelector("#menu");
// clickable handlers
const btns = document.querySelectorAll("a");
// scrolling handlers
const feature = document.querySelector("#feature");
const creations = document.querySelector("#creations");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");
});
// scrolling event
btns.forEach((e) => {
  e.addEventListener("click", (f) => {
    f.preventDefault();
    if (e.getAttribute("href") === "#feature") {
      feature.scrollIntoView({ behavior: "smooth" });
    } else if (e.getAttribute("href") === "#creations") {
      creations.scrollIntoView({ behavior: "smooth" });
    }
  });
});
// console.log(btns);
