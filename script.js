function createTask() {
  let taskField = document.getElementById("task-field");
  let inputText = document.getElementById("inputField");

  // createing task component--
  const div = document.createElement("div");
  const p = document.createElement("p");
  const button = document.createElement("button");

  if (inputText.value == "" || inputText.value.indexOf("!") != -1) {
    console.log("Please add valid text in your input!");
  }
  div.classList.add(
    "task-item",
    "border",
    "border-dark",
    "p-3",
    "me-5",
    "mb-2"
  );
  p.innerText = inputText.value;
  p.style.color = "#000000";
  p.style.fontSize = "20px";
  button.classList.add("btn", "btn-success", "task-button");
  button.innerText = "Done";
  div.appendChild(p);
  div.appendChild(button);
  taskField.appendChild(div);
  inputText.value = "";

  let totalTask = document.getElementById("totalTask");
  totalTask.innerText = taskField.childElementCount;

  // task button click functionality===

  function taskButton() {
    let buttonElements = document.getElementsByClassName("task-button");
    for (buttonElement of buttonElements) {
      // function()
      buttonElement.addEventListener("click", function (event) {
        // debugger;
        if (event.target.innerText == "Done") {
          event.target.setAttribute("disabled", true);
          event.target.previousSibling.style.textDecoration = "line-through";
          event.target.innerText = "Compleated";
          let done = document.getElementById("done");
          done.innerText++;
          console.log(done.innerText);
          let unDone = document.getElementById("unDone");
          unDone.innerText =
            parseInt(totalTask.innerText) - parseInt(done.innerText);
        }
      });
    }
  }
  taskButton();
}

addTask.addEventListener("click", function (event) {
  createTask(event.target.parentElement.parentElement.nextElementSibling);
});
