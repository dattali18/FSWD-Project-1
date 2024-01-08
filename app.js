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
// Function to create a card element
function createCard(card) {
  const cardElement = document.createElement("div");
  cardElement.classList.add("card");

  const imageElement = document.createElement("img");
  imageElement.src = card.img_path;
  imageElement.alt = "image";
  imageElement.classList.add("card-image");

  const textElement = document.createElement("div");
  textElement.classList.add("card-text");

  const titleElement = document.createElement("h3");
  titleElement.classList.add("card-title");
  titleElement.textContent = card.title;

  const infoElement = document.createElement("div");
  infoElement.classList.add("card-info");

  const yearElement = document.createElement("p");
  yearElement.classList.add("card-year");
  yearElement.textContent = card.year;

  const timeElement = document.createElement("p");
  timeElement.classList.add("card-time");
  timeElement.textContent = card.time;

  const ratingElement = document.createElement("p");
  ratingElement.classList.add("card-rating");
  ratingElement.textContent = card.rating;

  // Append elements to the card
  infoElement.append(
    yearElement,
    createCircleElement(),
    timeElement,
    createCircleElement(),
    ratingElement
  );
  textElement.append(titleElement, infoElement);
  cardElement.append(imageElement, textElement);

  return cardElement;
}

// Function to create a circle element for spacing
function createCircleElement() {
  const circleElement = document.createElement("i");
  circleElement.classList.add("fa-solid", "fa-circle");
  circleElement.style.fontSize = "0.2rem";
  return circleElement;
}

// Function to add cards to the specified section
function addCardsToSection(sectionId, cards) {
  const section = document.getElementById(sectionId);
  const sectionList = section.querySelector(".section-body");

  cards.forEach((card) => {
    const cardElement = createCard(card);
    sectionList.appendChild(cardElement);
  });
}

// Fetch data from JSON files and add cards to sections
fetch("/movies.json")
  .then((response) => response.json())
  .then((movies) => addCardsToSection("movies", movies));

fetch("/tv_series.json")
  .then((response) => response.json())
  .then((tvSeries) => addCardsToSection("series", tvSeries));
