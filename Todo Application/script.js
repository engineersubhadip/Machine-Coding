let todoDataSection = document.querySelector(".todo-data");

let globalCounter = 0;
let invisibleCounter = 0; // This variable is needed so that if we have some todo's in the Completed state and user clicks on Get Pending todo. The user will get a list of In Progress todo's. Now if a user adds a new todo. Then this variable will ensure that invisible todo's will not affect the numbering of the incoming todo's.

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

      let childCount = globalCounter-invisibleCounter; // To get the number of Children of todoSection
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
      
      delBtn.addEventListener("click",removeTodo);

      // Handling the Scenario where I am adding event listener on the click of Finished Button.

      finishedBtn.addEventListener("click",changeStatus);
      
      
};

function removeTodo (event){
      let recordDeleted = event.target;
      let targetParentDeleted = recordDeleted.parentElement.parentElement.parentElement;
      
      globalCounter-=1;
      targetParentDeleted.remove();

      // Once I am removing the record I need to re-render the whole to-do list so that serial number
      updateRecords();
}

// Handling the Scenario where I am adding event listener on the click of 
// Get Pending Todo button:-

let getPendingButton = document.querySelector(".get-todo");

getPendingButton.addEventListener("click",function(event){
      
      if (globalCounter === 0){
            return;
      }else{
            let todoItemList = document.querySelectorAll(".todo-item");

            for (let i=0; i<todoItemList.length; i++){
                  let filteringCriteria = todoItemList[i].querySelector(".todo-status").textContent;

                  if (filteringCriteria !== "In Progress"){
                        let parentBlock = todoItemList[i].parentElement;

                        parentBlock.style.display = "none";
                  }
            }
            updateRecords();
      }
})


function updateRecords(){
      let todoRecords = document.querySelectorAll(".row .todo-item");
      
      todoRecords = Array.from(todoRecords);
      
      let filteredRecords = todoRecords.reduce(function(acc,curr){
            let parentBlock = curr.parentElement;
            if (parentBlock.style.display != "none"){
                  acc.push(parentBlock);
            }
            return acc;
      },[]);

      invisibleCounter = globalCounter - filteredRecords.length;

      for (let i=0; i<filteredRecords.length; i++){
            let targetedNumber = filteredRecords[i].querySelector(".todo-item .todo-no");
            targetedNumber.textContent = i+1;
      }
}

function changeStatus(event){
      let currFinishedBtn = event.target;

      let parentElement = currFinishedBtn.parentElement.parentElement;

      let targetStatusChange = parentElement.querySelector(".todo-status");

      if(currFinishedBtn.textContent=="Finished"){
            targetStatusChange.textContent = "Completed";
            targetStatusChange.style.color = "green";
            currFinishedBtn.textContent = "Undo";


      }else{
            targetStatusChange.textContent = "In Progress";
            targetStatusChange.style.color = "";
            currFinishedBtn.textContent = "Finished";

            
      };

      let totalRecords = document.querySelectorAll(".todo-data .row");

      let headerTag = totalRecords[0]

      let parentAttach =  document.querySelector(".todo-data");

      let hrTag = document.createElement("hr");
      
      let outputList = sortRecords(totalRecords);
      
      parentAttach.innerHTML = "";
      parentAttach.appendChild(headerTag);
      parentAttach.appendChild(hrTag);

      for (let i=0; i<outputList.length; i++){
            parentAttach.appendChild(outputList[i]);
      }
};

function comparator(recordOne,recordTwo){

      let recordOneStatus = recordOne.querySelector(".todo-status").textContent;

      let recordTwoStatus = recordTwo.querySelector(".todo-status").textContent;

      if (recordOneStatus == "Completed" && recordTwoStatus == "In Progress"){
            return -1;
      }else if (recordOneStatus == "In Progress" && recordTwoStatus == "Completed"){
            return 1;
      }else if ((recordOneStatus == "Completed" && recordTwoStatus == "Completed") || (recordOneStatus == "In Progress" && recordTwoStatus == "In Progress")){
            return -1;
      }


}

function sortRecords(totalRecords){

      

      totalRecords = Array.from(totalRecords);
      totalRecords = totalRecords.splice(1);
      
      totalRecords.sort(comparator);

      console.log(totalRecords);
      return totalRecords

      // totalRecords.splice(1);

      // console.log(totalRecords);
      // console.log(recordList[0].parentElement);
      // console.log(recordList[0].parentElement);

      // for (let i=0; i<recordList.length; i++){
      //       totalRecords.push(recordList[i].parentElement)
      // }

      // console.log(totalRecords);
      // addTodo(totalRecords);

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
});

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



