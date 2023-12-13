let todoDataSection = document.querySelector(".todo-data");

let globalCounter = 0;

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

      let childCount = globalCounter // To get the number of Children of todoSection
      todoNoDiv.textContent = childCount; 

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


      var todoActionDiv = document.createElement("div");
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

      // Handling the Scenario where I am adding event listener on click of Delete Button.
      // I am going to call the remove() when the user clicks on "delete" button

      delBtn.addEventListener("click",removeTodo);

      // Handling the Scenario when, someone clicks on the "Finished" button Status will Change.

      finishedBtn.addEventListener("click",changeStatus);
      
};

function removeTodo(event){
      let rowToDelete =  event.target.parentElement.parentElement.parentElement;
      globalCounter-=1;
      rowToDelete.remove();
      updateRecords();
};

// Once we have removed our row, we must re-render our whole todo list. So, that we get proper serial numbers

function updateRecords(){
      let todoNo = document.querySelectorAll(".todo-no");

      // The above will give us an Node List of all the already todo-no in the DOM.
      // We have to convert the node-list to list.

      let todoNoArr = Array.from(todoNo);

      // We will remove the first element from the array, as it contains the element "No." because "No." also has a class ".todo-no";

      let resultArr = todoNoArr.splice(1);


      for (let val=0; val < globalCounter; val++){
            resultArr[val].textContent = val+1;
      }
}

// In this function I will try to change the Status of the Finished Button I clicked.
// In order to do that I will need to find the parent of the Status Button.
// From there I will grab the particular Status, and change its content.

function changeStatus(event){

      let finishBtnPressed = event.target;
      let targetParent =  finishBtnPressed.parentElement.parentElement;

      let targetStatus = targetParent.querySelector(".todo-status");

      
      // We are adding an improvement, which is when the user first clicks on the Finished button , status got "Completed" and the Finished button got "Undo". 
      // Now when the user will click on the Undo Button, the status will revert to In Progress and the button will change to Finished;

      targetStatus.textContent = "Completed";
      targetStatus.style.color = "green";
      finishBtnPressed.textContent = "Undo";

      // As of now when we are pressing on the Finished some events were happening.
      // Now the same button is "Undo" which would behave differently on the click.
      // So we need to remove the existing eventListener from the Finished Button before adding new one.

      finishBtnPressed.removeEventListener("click",changeStatus);

      finishBtnPressed.addEventListener("click",undoChange);

}

function undoChange(event){
      let undoBtn = event.target;
            
      // Again I will try to find the nearest parent of the Undo Button that will encapsulate both Undo Button and Status.

      let targetParent = undoBtn.parentElement.parentElement;
      
      let targetStatus = targetParent.querySelector(".todo-status");

      targetStatus.textContent = "In Progress";
      targetStatus.style.color = ""; 
      undoBtn.textContent = "Finished";

      // As of now when we are pressing on the Undo some events were happening. -> Undo Change was triggering.
      // Now the same button is "Undo" which would behave differently on the click.
      // So we need to remove the existing eventListener from the Undo Button before adding new one.

      undoBtn.removeEventListener("click",undoChange);

      undoBtn.addEventListener("click",changeStatus);
}

let todoInputBar = document.getElementById("todo-input-bar");

// We are going to attach an Event Listener in the SAVE Button.

let saveTodo = document.querySelector(".save-todo");

todoInputBar.addEventListener("keyup",function(){
      let inputBoxUserInput = todoInputBar.value;
      if (inputBoxUserInput.length === 0){
            saveTodo.classList.add("disabled") ;
      }else{
            saveTodo.classList.remove("disabled");
      }
})

// Getting the value inside the Input Box
let inputBoxUserInput = todoInputBar.value;

saveTodo.addEventListener("click",function getTextAndAddTodo(){
      let inputBoxUserInput = todoInputBar.value;
      if (inputBoxUserInput.length !=0){
            globalCounter += 1;
            addTodo(inputBoxUserInput);
      }
      todoInputBar.value = "";//This signifies that after adding the todo our search bar gets empty
      saveTodo.classList.add("disabled") ; // This signifies that after the search bar gets disabled we are disabling the save Button
});

