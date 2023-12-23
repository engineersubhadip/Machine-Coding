let addBtn = document.querySelector(".add-btn");
let modalContainer = document.querySelector(".modal-container");
let isModalHidden = true;
let parentTicketHolder = document.querySelector(".row");

let priorityColorFlag = false;
let defaultTicketColor = "red"

let priorityColor = document.querySelector(".color-priority");

let priorityColorList = document.querySelectorAll(".priority-color");

// On Click of the Add Btn We will show/hide the Modal

addBtn.addEventListener("click", function(e){
    if (isModalHidden){
        modalContainer.style.display = "flex";
        isModalHidden = false;
        for (let i=0; i<priorityColorList.length; i++){
            priorityColorList[i].style.border = "";
        }
    }else{
        modalContainer.style.display = "none";
        isModalHidden = true;  
    }
});

// If the user enters anything on the task input and presses Enter a Ticket should Generate

let taskInput = document.querySelector(".task-input");

priorityColor.addEventListener("click",function(e){
    if(e.target.classList.contains("priority-color")){
        for (let i=0; i<priorityColorList.length; i++){
            priorityColorList[i].style.border = "";
        }
        defaultTicketColor = undefined
        e.target.style.border = "12px solid purple";
        defaultTicketColor = e.target.classList[1];
        console.log(defaultTicketColor);
    }
})


taskInput.addEventListener("keyup",function(e){

    // Now we will select the color from color Priority:-
    // let colorPriority = document.querySelector(".color-priority");

    // colorPriority.addEventListener("click",function(event){
    if (e.key == "Enter"){
        let currentValue = taskInput.value;
        createTicket(currentValue,defaultTicketColor);
        modalContainer.style.display = "none";
        isModalHidden = true;
        taskInput.value = "";
        }
    // })
})


function createTicket(currentValue,defaultTicketColor){
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
    bannerColor.style.backgroundColor = defaultTicketColor;
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
    const ticketDescription = event.target.parentElement.parentElement.querySelector(".ticket-description");

    if (event.target.classList.contains("fa-lock")){

        event.target.classList.remove("fa-lock");
        event.target.classList.add("fa-lock-open");

        ticketDescription.setAttribute("contentEditable",true);

        ticketDescription.addEventListener("keyup",function(e){

            let updatedValue = ticketDescription.textContent;
            ticketDescription.textContent = updatedValue;
            
        });
        
    }else if (event.target.classList.contains("fa-lock-open")){

        event.target.classList.remove("fa-lock-open");
        ticketDescription.setAttribute("contentEditable",false);
        event.target.classList.add("fa-lock");
    }
}