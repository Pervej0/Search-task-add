function createTask() {
  let taskField = document.getElementById("task-field");
  let inputText = document.getElementById("inputField");

  // createing task component--
  const div = document.createElement("div");
  const p = document.createElement("p");
  const button = document.createElement("button");

  if (inputText.value == "" || inputText.value.indexOf("!") != -1) {
    console.log("Please add valid text in your input!");
  } else {
    div.classList.add(
      "task-item",
      "border",
      "border-dark",
      "p-3",
      "me-5",
      "mb-2"
    );
    p.innerText = inputText.value;
    button.classList.add("btn", "btn-success", "task-button");
    button.innerText = "Done";
    div.appendChild(p);
    div.appendChild(button);
    taskField.appendChild(div);
    inputText.value = "";
  }
}

addTask.addEventListener("click", function () {
  createTask();
});
