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

let currentIndiceSlide = 0; // indice de la slide actuellement affichée du carousel

const dots = document.querySelectorAll(".dot"); // récupération de tous les dots du carousel
const image = document.querySelector(".banner-img"); // récup banner-img pour les diapos
const tagLine = document.querySelector("#banner p"); // récup texte tagline pour les diapos

// récupération des flèches de défilement entre les diapos
const arrowLeft = document.getElementById("arrow-left");
const arrowRight = document.getElementById("arrow-right");

// fonction pour changer diapos, textes et dots en fonction de la direction
function changeImageAndBullet() {
  const objet = slides[currentIndiceSlide]; // variable qui recupere la nouvelle diapo

  dots.forEach(function (dot) {
    dot.classList.remove("dot-selected"); //retire la classe
  });

  dots[currentIndiceSlide].classList.add("dot-selected"); //ajoute la classe

  tagLine.innerHTML = objet.tagLine; // insère le texte des tagline en fonction des diapos
  image.src = `images/slideshow/${objet.image}`; // change l'image au clic
}

// 'images/slideshow/'+objet.image; //concatenation

arrowRight.addEventListener("click", () => {
  // écoute le clic sur la flèche droite
  currentIndiceSlide += 1; // augmente l'indice actuel de 1 au clic
  if (currentIndiceSlide >= slides.length) {
    //si l'indice est sup/egal longueur slides
    currentIndiceSlide = 0; // revient à la première diapo si dépasse la dernière
  }
  changeImageAndBullet(); // appel de la fonction pour changer texte, image et diapos au clic
});

arrowLeft.addEventListener("click", () => {
  // écoute le clic sur la flèche gauche
  if (currentIndiceSlide == 0) {
    //si l'indice actuel egale 0
    currentIndiceSlide = slides.length - 1; // revient à la dernière diapo si dépasse la première
  } else {
    currentIndiceSlide -= 1; // diminue l'indice actuel de 1
  }
  changeImageAndBullet(); // appel de la fonction pour changer texte, image et diapos au clic
});
