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

console.log("coucou");

for (let i = 0; i < slides.length; i++) {
  const objet = slides[i];

  console.log(objet.image);
  console.log(objet.tagLine);

  if(i==0){
    console.log("premier")
  }

  if(i==slides.length -1){

    console.log("dernier")
  }
}


