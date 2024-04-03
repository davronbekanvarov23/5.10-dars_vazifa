const form = document.querySelector("form");
const input = document.querySelector("input");
const url = "https://restcountries.com/v3.1/name/";
const div = document.querySelector("div");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(url + input.value)
    .then((data) => {
      return data.json();
    })
    .then((posts) => {
      updateUI(posts);
    })
    .catch();
});
function updateUI(data) {
  console.log(data[0]);
  const image = document.querySelector(".image");
  const countName = document.querySelector(".name");
  const population = document.querySelector(".population");
  const tld = document.querySelector(".tld");
  const continents = document.querySelector(".continents");
  const borders = document.querySelector(".borders");
  const capital = document.querySelector(".capital");
  const area = document.querySelector(".area");

  image.src = data[0].flags.svg;
  image.width = 300;
  image.height = 200;

  countName.textContent = data[0].name.common;
  population.textContent = data[0].population;
  tld.textContent = data[0].tld;
  continents.textContent = data[0].continents;
  borders.textContent = data[0].borders;
  capital.textContent = data[0].capital;
  area.textContent = data[0].area;

  input.value = "";
}
