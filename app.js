// Quering the dom
const body = document.getElementById("background");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const colorGenerator = document.querySelector("h3");

// function gradient color generator
const colorMixer = () => {
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
};

// eventListeners input

color1.addEventListener("input", colorMixer());
color2.addEventListener("input", colorMixer());
