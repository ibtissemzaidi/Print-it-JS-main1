const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

let position = 0;
const leftArrow = document.querySelector(".arrow_left");
const rightArrow = document.querySelector(".arrow_right");
const cheminImg = "./assets/images/slideshow/";
const img = document.querySelector(".banner-img");

leftArrow.addEventListener("click", function () {
  position = position - 1;
  console.log(position);
  console.log(slides[position]);

  if (position < 0) {
    position = slides.length - 1;
  }
  img.src = cheminImg + slides[position].image;
  displayDot();
});
rightArrow.addEventListener("click", function () {
  position = position + 1;
  console.log(position);
  console.log(slides[position]);

  if (slides.length === position) {
    position = 0;
  }
  img.src = cheminImg + slides[position].image;
  displayDot();
});
// Récupérez le conteneur des points

const dotsContainer = document.querySelector(".dots");

// Créez les points en fonction du nombre de slides
for (let i = 0; i < slides.length; i++) {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  dot.setAttribute("data-slide-index", i);
  dotsContainer.appendChild(dot);
}
const initialDot = dotsContainer.querySelector(".dot");
initialDot.classList.add("dot_selected");

function displayDot() {
  const listDot = document.querySelectorAll(".dot");
  for (let i = 0; i < listDot.length; i++) {
    if (i === position) {
      listDot[i].classList.add("dot_selected");
    } else {
      listDot[i].classList.remove("dot_selected");
    }
  }
}
