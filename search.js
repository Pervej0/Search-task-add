// function searchTask(id) {
//   const searchBox = document.getElementById(id);
//   searchBox.addEventListener("focus", function (event) {
//     console.log(event.target);
//   });
// }
// searchTask("searchBox");

const selectElement = document.querySelector(".ice-cream");

selectElement.addEventListener("change", (event) => {
  // const result = document.querySelector('.result');
  // result.textContent = `You like ${event.target.value}`;
  console.log("change");
});

const input = document.querySelector("input");
const log = document.getElementById("log");

input.addEventListener("change", updateValue);

function updateValue(e) {
  log.textContent = e.target.value;
}
