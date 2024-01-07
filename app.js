// navbar

let nav = document.getElementById("nav");
let burger = document.getElementById("burger");
burger.addEventListener("click", () => {
  nav.classList.toggle("open");
});

let sections = document.getElementById("sections");
let options = document.getElementById("options");
let addAppear = () => {
  sections.classList.toggle("flex");
};
options.addEventListener("click", addAppear);

// film
