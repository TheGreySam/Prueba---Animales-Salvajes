"use strict";

import { Leon, Lobo, Oso, Serpiente, Aguila } from "./Animals.js";

// import * as Animals from "./Animals.js";

// console.log(Animals);
(async () => {
  const Response = await fetch("/animales.json");
  const { animales: Animales } = await Response.json();

  const nombreAnimalElement = document.getElementById("animal");
  const edadAnimalElement = document.getElementById("edad");
  const comentariosAnimalElement = document.getElementById("comentarios");

  const previewAnimalElement = document.getElementById("preview");
  const btnRegistrarElement = document.getElementById("btnRegistrar");

  const AnimalCards = [];

  nombreAnimalElement.addEventListener("change", () => {
    // console.log(nombreAnimalElement.value);
    const animalElegido = nombreAnimalElement.value;

    const animalEncontrado = Animales.find(
      (animal) => animal.name === animalElegido
    );

    console.log(animalEncontrado);

    previewAnimalElement.setAttribute(
      "src",
      `/assets/imgs/${animalEncontrado.imagen}`
    );
  });

  btnRegistrarElement.addEventListener("click", () => {
    const nombreAnimal = nombreAnimalElement.value;
    const edadAnimal = edadAnimalElement.value;
    const comentariosAnimal = comentariosAnimalElement.value;

    const animalEncontrado = Animales.find(
      (animal) => animal.name === nombreAnimal
    );

    const params = [
      nombreAnimal, 
              edadAnimal, 
              animalEncontrado.imagen, 
              comentariosAnimal, 
              animalEncontrado.sonido
    ];

    switch (nombreAnimal) {
      case "Leon":
        AnimalCards.push(
            new Leon(...params);)
        break;

        case "Lobo":
        AnimalCards.push(
            new Lobo(...params);)
        break;

        case "Oso":
        AnimalCards.push(
            new Oso(...params);)
        break;

        case "Serpiente":
        AnimalCards.push(
            new Serpiente(...params);)
        break;

        case "Aguila":
        AnimalCards.push(
            new Aguila(...params);)
        break;
      }
    console.log(AnimalCards);

    render();
  });
   
})();
