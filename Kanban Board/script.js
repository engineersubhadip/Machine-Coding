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

    ticket.addEventListener("click",delTicket); // For every ticket we are generating has a click event listener attached to it.

    parentTicketHolder.appendChild(ticket);
};


let delBtn = document.querySelector(".del-btn");

function delTicket(e){ // This function will ticket one or multiple tickets at a time.
    e.target.style.border = "2px solid black";
    let currentTicket = e.target;

    delBtn.addEventListener("click", function(){
            e.target.remove(); // Here e.target is the current Ticket.
    });
};
