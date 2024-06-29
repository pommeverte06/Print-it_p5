//
//tableau contenant 4 objet correspondants aux 4 diapos et textes du carousel

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

//variables

let currentIndiceSlide = 0;

const dots = document.querySelectorAll(".dot");
const image = document.querySelector(".banner-img");
const tagLine = document.querySelector("#banner p");

const arrowLeft = document.getElementById("arrow-left");
const arrowRight = document.getElementById("arrow-right");

// FONCTION pour changer diapos, textes et dots en fonction de la direction droite ou gauche
function changeImageAndBullet() {
  const objet = slides[currentIndiceSlide];

  dots.forEach(function (dot) {
    dot.classList.remove("dot-selected");
  });

  dots[currentIndiceSlide].classList.add("dot-selected");

  tagLine.innerHTML = objet.tagLine; // change le texte des tagline en fonction des diapos
  image.src = `images/slideshow/${objet.image}`; // change l'image au clic
}

//Ecouteurs d'évènements sur les flèches de navigation
arrowRight.addEventListener("click", () => {
  currentIndiceSlide += 1;
  if (currentIndiceSlide >= slides.length) {
    currentIndiceSlide = 0;
  }
  changeImageAndBullet();
});

arrowLeft.addEventListener("click", () => {
  if (currentIndiceSlide == 0) {
    currentIndiceSlide = slides.length - 1;
  } else {
    currentIndiceSlide -= 1;
  }
  changeImageAndBullet();
});
