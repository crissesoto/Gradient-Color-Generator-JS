// Quering the dom
const body = document.getElementById("background");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const newColorText = document.querySelector(".new");
const currentColorText = document.querySelector(".current");
const h2 = document.getElementById("h2-current");
console.log(currentColorText);

// initial color gradient text function
const loadPage = () => {
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
  currentColorText.textContent = body.style.background + ";";
};

// function gradient color generator
const colorMixer = () => {
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

  h2.textContent = "Inital Gradient";
  newColorText.textContent = body.style.background + ";";
};

// eventListeners input

color1.addEventListener("input", colorMixer);
color2.addEventListener("input", colorMixer);
