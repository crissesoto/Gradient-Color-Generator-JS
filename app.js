// Quering the dom
const body = document.getElementById("background");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const colorGenerator = document.querySelector("h3");

// eventListeners input

color1.addEventListener("input", () => {
  console.log(color1.value);
});
color2.addEventListener("input", () => {
  console.log(color2.value);
});
