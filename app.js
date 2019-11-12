// Quering the dom
const body = document.getElementById("background");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const newColorText = document.querySelector(".new");
const currentColorText = document.querySelector(".current");
const h2 = document.getElementById("h2-current");
const button = document.querySelector(".btn");

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

// Random button which generates two random numbers for the colour inputs.

const randomHue = () => {
  for (i = 0; i <= 255; i++) {
    random1 = Math.floor(Math.random() * 257);
    random2 = Math.floor(Math.random() * 257);
    random3 = Math.floor(Math.random() * 257);
    const randomHue1 = `rgb(${random1}, ${random2}, ${random3})`;
    const randomHue2 = `rgb(${random3}, ${random1}, ${random2})`;
    body.style.background =
      "linear-gradient(to right, " + randomHue1 + ", " + randomHue2 + ")";
  }
  newColorText.textContent = body.style.background + ";";
};

button.addEventListener("click", () => {
  randomHue();
});
