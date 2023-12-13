let todoDataSection = document.querySelector(".todo-data");

function addTodo(todoData){
      let rowDiv = document.createElement("div");
      rowDiv.classList.add("row");

      let todoItemDiv = document.createElement("div");
      todoItemDiv.classList.add("todo-item");
      todoItemDiv.classList.add("d-flex");
      todoItemDiv.classList.add("justify-content-between");
      todoItemDiv.classList.add("align-items-center");

      rowDiv.appendChild(todoItemDiv);

      let todoNoDiv = document.createElement("div");
      todoNoDiv.classList.add("todo-no");
      todoNoDiv.textContent = "2"

      todoItemDiv.appendChild(todoNoDiv);

      let todoDetailDiv = document.createElement("div");
      todoDetailDiv.classList.add("todo-detail");
      todoDetailDiv.classList.add("text-muted");
      todoDetailDiv.textContent = todoData; // Sets the todo data sent from the Input Element

      todoItemDiv.appendChild(todoDetailDiv);

      let todoStatusDiv = document.createElement("div");
      todoStatusDiv.classList.add("todo-status");
      todoStatusDiv.textContent = "In Progress";

      todoItemDiv.appendChild(todoStatusDiv);


      let todoActionDiv = document.createElement("div");
      todoActionDiv.classList.add("todo-action","d-flex","justify-content-between");

      todoItemDiv.appendChild(todoActionDiv);

      let delBtn = document.createElement("button");
      delBtn.classList.add("btn");
      delBtn.classList.add("btn-danger");
      delBtn.textContent = "Delete";

      todoActionDiv.appendChild(delBtn);

      let finishedBtn = document.createElement("button");
      finishedBtn.classList.add("btn");
      finishedBtn.classList.add("btn-success");
      finishedBtn.textContent = "Finished";

      todoActionDiv.appendChild(finishedBtn);

      let hrTag = document.createElement("hr");

      rowDiv.appendChild(hrTag);

      todoDataSection.appendChild(rowDiv);
      
};


let todoInputBar = document.getElementById("todo-input-bar");

// We are going to attach an Event Listener in the SAVE Button.

let saveTodo = document.querySelector(".save-todo");

// Getting the value inside the Input Box
let inputBoxUserInput = todoInputBar.value;

saveTodo.addEventListener("click",function getTextAndAddTodo(){
      let inputBoxUserInput = todoInputBar.value;
      addTodo(inputBoxUserInput);
      todoInputBar.value = ""; //This signifies that after adding the todo our search bar gets empty
})




