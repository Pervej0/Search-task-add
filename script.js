let taskField = document.getElementById("task-field");

function searchTask(id) {
  const tasks = document.querySelectorAll(".task-box");
  const search = document.getElementById("searchBox");

  document.getElementById(id).addEventListener("click", function (event) {
    event.preventDefault();
    let searchedTask = [];
    for (task of tasks) {
      let userTaskText = task.children[0].innerText;
      if (
        userTaskText.toLowerCase().includes(search.value.toLowerCase()) == true
      ) {
        task.style.display = "block";
      } else {
        task.style.display = "none";
      }
    }

    // taskField.appendChild(...searchedTask);
    // console.log(searchedTask);
    //  parent.inerHTML = (...searchedTask);
  });
}

// task button click functionality===
function taskButton(taskParent) {
  let buttonElements = document.getElementsByClassName("task-button");
  let unDone = document.getElementById("unDone");
  unDone.innerText = taskParent.childElementCount;
  for (buttonElement of buttonElements) {
    // function()
    buttonElement.addEventListener("click", function (event) {
      if (event.target.innerText == "Done") {
        event.target.setAttribute("disabled", true);
        event.target.previousSibling.style.textDecoration = "line-through";
        event.target.innerText = "Compleated";
        let done = document.getElementById("done");
        done.innerText++;
        unDone.innerText =
          parseInt(totalTask.innerText) - parseInt(done.innerText);
      }
    });
  }
}

// createing task --
function createTask() {
  let inputText = document.getElementById("inputField");

  // createing task component--
  const div = document.createElement("div");
  const p = document.createElement("p");
  const button = document.createElement("button");

  if (inputText.value == "" || inputText.value.indexOf("!") != -1) {
    return console.log("Please add valid text in your input!");
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
  p.style.textTransform = "capitalize";
  button.classList.add("btn", "btn-success", "task-button");
  button.innerText = "Done";
  div.appendChild(p);
  div.appendChild(button);
  div.classList.add("task-box");
  taskField.appendChild(div);
  inputText.value = "";

  let totalTask = document.getElementById("totalTask");
  totalTask.innerText = taskField.childElementCount;
  taskButton(taskField);
  searchTask("searchBtn");
}

addTask.addEventListener("click", function () {
  createTask();
});
