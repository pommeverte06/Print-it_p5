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

let currentIndiceSlide = 0; //premiere slide du carousel

const dots = document.querySelectorAll(".dot");

const image = document.querySelector(".banner-img");
console.log(image);

const tagLine = document.querySelector("#banner p");
console.log(tagLine);

//ARROWS------------------------------

const arrowLeft = document.getElementById("arrow-left");
const arrowRight = document.getElementById("arrow-right");

function showImageAndBullet(direction) {
  //afficher objet du tableau slides
  let operation = 1;
  if (direction == "right") {
    operation = -1;
  }

  const objet = slides[currentIndiceSlide];
  const dotPrevious = dots[currentIndiceSlide + operation];
  const dot = dots[currentIndiceSlide];

  dot.classList.add("dot-selected");
  dotPrevious.classList.remove("dot-selected");
  console.log(objet);
  console.log(objet.image);
  console.log(objet.tagLine);
  console.log(dot);
}

arrowLeft.addEventListener("click", () => {
  if (currentIndiceSlide == 0) {
    currentIndiceSlide = slides.length - 1;
  } else {
    currentIndiceSlide -= 1;
  }
  console.log(currentIndiceSlide);
  showImageAndBullet("left");
});

arrowRight.addEventListener("click", () => {
  currentIndiceSlide += 1;

  if (currentIndiceSlide < slides.length) {
    console.log(currentIndiceSlide);
  } else {
    currentIndiceSlide = 0;
    console.log(currentIndiceSlide);
  }
  showImageAndBullet("right");
});

//LES DOTS

for (let i = 0; i < dots.length; i++) {
  console.log(dots[i]);
}
