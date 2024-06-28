  //tableau contenant 4 objet correspondants aux 4 diapos et textes du carousel

 const slides = [
   {
     image: "slide1.jpg",
     tagLine: "Impressions tous formats <span>en boutique et en ligne<span>",
   },
   {
     image: "slide2.jpg",
     tagLine:
       "Tirages haute définition grand format <span>pour vos bureaux et events<span>",
   },
   {
     image: "slide3.jpg",
     tagLine: "Grand choix de couleurs <span>de CMJN aux pantones<span>",
   },
   {
     image: "slide4.png",    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
   },
 ];





 let currentIndiceSlide = 0; //indice de la slide actuellemnt affichée du carousel

 const dots = document.querySelectorAll(".dot");  //récupération de tous les dots du carousel

 const image = document.querySelector(".banner-img");  //récup banner-img pour les diapos

 const tagLine = document.querySelector("#banner p");  //récup texte tagline pour les diapos

// récupération des flèches de défilement entre les diapos
 const arrowLeft = document.getElementById("arrow-left");
 const arrowRight = document.getElementById("arrow-right");






  //fonction pour changer diapos, texte et dot en fonction de la direction

 function changeImageAndBullet(direction) {
   //nom de la fonction et nom du parametre
   let operation = 1; //variable qui initialise à 1
   if (direction == "right") {
     //condition si direction égale à right
     operation = -1; //alors direction recule d'une image
   }
  

   const objet = slides[currentIndiceSlide]; //variable qui recupere indice de la diapo actuelle

   const activeDot = dots[currentIndiceSlide + operation]; //dot qui recupere l'indice actuel

   console.log(currentIndiceSlide, operation, currentIndiceSlide + operation);

    //et ajoute la valeur de l'operation pour actualiser le dot
   const dot = dots[currentIndiceSlide]; //recupere indice point actuel

   dot.classList.add("dot-selected"); //ajoute la classe CSS pour modifier la couleur du dot actuel
   activeDot.classList.remove("dot-selected"); //ote la classe CSS

   tagLine.innerHTML = objet.tagLine; //insere le texte des tagline en fonction des diapos
   image.src = `images/slideshow/${slides[currentIndiceSlide].image}`;//insere les photos

 }











//  arrowRight.addEventListener("click", () => {
//    //ecoute le clic sur la fléche droite
//    currentIndiceSlide += 1; //augmente l'indice actuel à 1 au clic

//    if (currentIndiceSlide < slides.length) {
//      //si l'indice actuel est inf à la longueur du tableau

    
//    } else {
//      //sinon

//    currentIndiceSlide = 0; //reste a l'indice actuel
//    }
//    changeImageAndBullet("right");  //appel de la fonction pour changer txte img et diapos au clic
//  });

arrowRight.addEventListener("click", () => {
  currentIndiceSlide += 1;

  if (currentIndiceSlide < slides.length) {
    changeImageAndBullet("right");
  } else {
    currentIndiceSlide = 0;
    changeImageAndBullet("right");
  }
});


arrowLeft.addEventListener("click", () => {
  if (currentIndiceSlide == 0) {
    currentIndiceSlide = slides.length - 1;
  } else {
    currentIndiceSlide -= 1;
  }
  changeImageAndBullet("left");
});











//  arrowLeft.addEventListener("click", () => {
//    //ecoute le clic sur la fleche gauche
//    if (currentIndiceSlide == 0) {
//      //si l'indice actuel egal 0
//      currentIndiceSlide = slides.length - 1; //alors indice actuel vaut longueur du tableau-1 diapo
//    } else {
//     // sinon
//      currentIndiceSlide -= 1; //rien ne se passe
//    }
//    changeImageAndBullet("left"); //appel de la fonction pour changer txte img et diapos au clic
//  });

