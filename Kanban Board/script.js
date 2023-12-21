let addBtn = document.querySelector(".add-btn");
let modalContainer = document.querySelector(".modal-container");
let isModalHidden = true;
let parentTicketHolder = document.querySelector(".row");

// On Click of the Add Btn We will show/hide the Modal

addBtn.addEventListener("click", function(e){
    if (isModalHidden){
        modalContainer.style.display = "flex";
        isModalHidden = false;
    }else{
        modalContainer.style.display = "none";
        isModalHidden = true;  
    }
});

// On Click of the Del Button the button color will change
// If someone clicks for the first time it will change to "red" and if someone clicks on it again it will change to "black";

let delBtn = document.querySelector(".del-btn");
let delBtnColor = "black";

delBtn.addEventListener("click", function(e){
    if (delBtnColor == "black"){
        delBtn.style.color = "red";
        delBtnColor = "red";
    }else if(delBtnColor == "red"){
        delBtn.style.color = "black";
        delBtnColor = "black";
    }
})

// If the user enters anything on the task input and presses Enter a Ticket should Generate

let taskInput = document.querySelector(".task-input");

taskInput.addEventListener("keyup",function(e){
    if (e.key == "Enter"){
        let currentValue = taskInput.value;
        createTicket(currentValue);
        modalContainer.style.display = "none";
        isModalHidden = true;
        taskInput.value = "";
    }
})


function createTicket(currentValue){
    let ticket = document.createElement("div");
    let bannerColor = document.createElement("div");
    let ticketNumber = document.createElement("div");
    let ticketDescription = document.createElement("div");
    let lockUnlock = document.createElement("div");

    ticket.classList.add("ticket");
    bannerColor.classList.add("header-banner-color", "text-center");
    ticketNumber.classList.add("ticket-number");
    ticketDescription.classList.add("ticket-description");
    lockUnlock.classList.add("ock-unlock");

    ticket.appendChild(bannerColor);
    ticket.appendChild(ticketNumber);
    ticket.appendChild(ticketDescription);
    ticket.appendChild(lockUnlock);

    ticketDescription.textContent = currentValue;

    parentTicketHolder.appendChild(ticket);
}