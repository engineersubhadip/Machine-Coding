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

let priorityColor = document.querySelectorAll(".priority-color");


taskInput.addEventListener("keyup",function(e){

    // Now we will select the color from color Priority:-
    // let colorPriority = document.querySelector(".color-priority");

    // colorPriority.addEventListener("click",function(event){
    if (e.key == "Enter"){
        let currentValue = taskInput.value;
        createTicket(currentValue);
        modalContainer.style.display = "none";
        isModalHidden = true;
        taskInput.value = "";
        }
    // })
})


function createTicket(currentValue){
    var uid = new ShortUniqueId();
    let id = uid.rnd();
    let ticket = document.createElement("div");
    let bannerColor = document.createElement("div");
    let ticketNumber = document.createElement("div");
    let ticketDescription = document.createElement("div");
    let lockUnlock = document.createElement("div");
    let lockUnlockImage = document.createElement("i");


    ticket.classList.add("ticket");
    bannerColor.classList.add("header-banner-color", "text-center");
    ticketNumber.classList.add("ticket-number");
    ticketDescription.classList.add("ticket-description");
    lockUnlock.classList.add("lock-unlock");
    lockUnlockImage.classList.add("fa-solid","fa-lock");

    lockUnlock.appendChild(lockUnlockImage);
    ticket.appendChild(bannerColor);
    ticket.appendChild(ticketNumber);
    ticket.appendChild(ticketDescription);
    ticket.appendChild(lockUnlock);

    ticketNumber.textContent = `#${id}`;
    ticketNumber.style.backgroundColor = "#CCC098";
    bannerColor.style.backgroundColor = "greenyellow";
    ticketDescription.textContent = currentValue;

    ticket.addEventListener("click",delTicket); // For every ticket we are generating has a click event listener attached to it.

    lockUnlockImage.addEventListener("click",toggleLock);

    parentTicketHolder.appendChild(ticket);
};


let delBtn = document.querySelector(".del-btn");

function delTicket(e){ // This function will ticket one or multiple tickets at a time.
    if (e.target.classList.contains("ticket")){
        e.target.style.border = "2px solid black"; // By doing this only when the user clicks on the ticket as a whole the border around the ticket gets applied. Other-wise if the user clicks on ticket number, lock-i=unlock button etc. The border does not gets applied.
    }
    let currentTicket = e.target;

    delBtn.addEventListener("click", function(){
            e.target.remove(); // Here e.target is the current Ticket.
    });
};

function toggleLock(event){

    if (event.target.classList.contains("fa-lock")){
        event.target.classList.remove("fa-lock");
        event.target.classList.add("fa-lock-open");
    }else if (event.target.classList.contains("fa-lock-open")){
        event.target.classList.remove("fa-lock-open");
        event.target.classList.add("fa-lock");
    }
}