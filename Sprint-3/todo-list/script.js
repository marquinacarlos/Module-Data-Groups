function createTodoItem(taskText) {
  const li = document.createElement("li");
  li.textContent = taskText;

  const badge = document.createElement("span");
  badge.className = "badge bg-primary rounded-pill";

  const checkIcon = document.createElement("i");
  checkIcon.className = "fa fa-check";
  checkIcon.setAttribute("aria-hidden", "true");
  checkIcon.addEventListener("click", function () {
    if (li.style.textDecoration === "line-through") {
      li.style.textDecoration = "none";
    } else {
      li.style.textDecoration = "line-through";
    }
  });

  const trashIcon = document.createElement("i");
  trashIcon.className = "fa fa-trash";
  trashIcon.setAttribute("aria-hidden", "true");
  trashIcon.addEventListener("click", function () {
    li.remove();
  });

  badge.appendChild(checkIcon);
  badge.appendChild(trashIcon);
  li.appendChild(badge);
  return li;
}

function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
  for (const todo of todos) {
    list.appendChild(createTodoItem(todo.task));
  }
}

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

populateTodoList(todos);

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
  const input = document.getElementById("todoInput");
  const list = document.getElementById("todo-list");
  list.appendChild(createTodoItem(input.value));
  input.value = "";
}

document.querySelector("form").addEventListener("submit", addNewTodo);

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
  const items = document.querySelectorAll("#todo-list li");
  for (const item of items) {
    if (item.style.textDecoration === "line-through") {
      item.remove();
    }
  }
}

document.getElementById("remove-all-completed").addEventListener("click", deleteAllCompletedTodos);
