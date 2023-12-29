let addBtn = document.querySelector(".add-btn");
let modalContainer = document.querySelector(".modal-container");
let isModalHidden = true;
let parentTicketHolder = document.querySelector(".row");

let priorityColorFlag = false;
let defaultTicketColor = "red"

let priorityColor = document.querySelector(".color-priority");
let priorityColorList = document.querySelectorAll(".priority-color");

let color = ["red","blue","green","black"]; // Using this array we will be able to toggle the priority colors on top of each ticket


let ticketList = localStorage.getItem("Array") ? JSON.parse(localStorage.getItem("Array")) : []; // Using this array we will store the details of all the generated tickets. And then push this ticket array in the local storage and if the user comes back to the browser after (closing/refresh) we can have the details of the previous tickets.
ticketList.forEach(t => createTicket(t.ticketDescription, t.bannerColor, t.ticketNumber))

let localStorageFlag = false;

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
    }
})


taskInput.addEventListener("keyup",function(e){

    if (e.key == "Enter"){
        let currentValue = taskInput.value;
        createTicket(currentValue,defaultTicketColor);
        
        modalContainer.style.display = "none";
        isModalHidden = true;
        taskInput.value = "";
        }
    
})


function createTicket(currentValue,TicketColor, ticketId){
    var uid = new ShortUniqueId();
    let id = ticketId || uid.rnd();
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

    
    ticketNumber.textContent = `${id}`;
    ticketNumber.style.backgroundColor = "#CCC098";
    bannerColor.style.backgroundColor = TicketColor;
    ticketDescription.textContent = currentValue;
    parentTicketHolder.appendChild(ticket);
    

    ticket.addEventListener("click",delTicket); // For every ticket we are generating has a click event listener attached to it.

    lockUnlockImage.addEventListener("click",toggleLock);

    bannerColor.addEventListener("click",function(e){
        let currentColor = bannerColor.style.backgroundColor;
        
        let currentColorIndex = color.indexOf(currentColor);

        let nextColorIndex = (currentColorIndex+1) % (color.length);

        let nextColor = color[nextColorIndex];

        bannerColor.style.backgroundColor = nextColor;

        // we should also update the color of the ticket in the ticket List array as well as the local Storage:-

        // We will have to find out the ticket we are changing color from the ticket List Array

        let currentTicket = ticket.querySelector(".ticket-number").textContent;
        let updateTicketColorIndex = undefined;
        
        for (let i=0; i<ticketList.length; i++){
            let runTicket = ticketList[i].ticketNumber;
            if (runTicket == currentTicket){
                updateTicketColorIndex = i;
            };
        };

        ticketList[updateTicketColorIndex].bannerColor = nextColor;
        
        localStorage.setItem("Array",JSON.stringify(ticketList));
    });
  
if(ticketId == null){   // So if the user is coming from local storage we will not store the details in the Array. If the user is creating a new ticket then we will push the ticket in the array and update the local storage.
    
    
    ticketList.push({"ticketNumber":id,"ticketNumberColor":"#CCC098","bannerColor":defaultTicketColor,"ticketDescription":currentValue}); // Storing the newly created ticket in the ticket List Array
    
// Storing the newly created ticket in the Local Storage:-

     localStorage.setItem("Array",JSON.stringify(ticketList));
}   
};


let delBtn = document.querySelector(".del-btn");

function delTicket(e){ // This function will ticket one or multiple tickets at a time.
    // Also if the user is just clicking on the color, description, lock-unlock. Then the user will not be able to delete the ticket. Only if the user is clicking on the ticket as a whole then only he/she can delete the ticket.

    if (e.target.classList.contains("ticket")){

        e.target.style.border = "2px solid black"; // By doing this only when the user clicks on the ticket as a whole the border around the ticket gets applied. Other-wise if the user clicks on ticket number, lock-i=unlock button etc. The border does not gets applied.

        let currentTicket = e.target;
        delBtn.addEventListener("click", function(){
            // We will first have to remove the ticket from the ticketList and update the local storage

            // Firstly we will have to find out the index of the current ticket which we are about to delete
            
            let targetIndex = e.target.querySelector(".ticket-number").textContent

            let deletionIndex = undefined;

            for (let i=0; i<ticketList.length; i++){
                let currentTicket = ticketList[i];
                if (currentTicket.ticketNumber == targetIndex){
                    deletionIndex = i;
                    break;
                }
            }

            //Update the Array List:-

            ticketList.splice(deletionIndex,1);

            // Also we have to update the Local Storage as well:-

            localStorage.setItem("Array",JSON.stringify(ticketList));

            e.target.remove(); // Here e.target is the current Ticket.
                
                
        });
    }

};

function toggleLock(event){
    const ticketDescription = event.target.parentElement.parentElement.querySelector(".ticket-description");

    if (event.target.classList.contains("fa-lock")){

        event.target.classList.remove("fa-lock");
        event.target.classList.add("fa-lock-open");

        ticketDescription.setAttribute("contentEditable",true);


        
    }else if (event.target.classList.contains("fa-lock-open")){

        event.target.classList.remove("fa-lock-open");
        ticketDescription.setAttribute("contentEditable",false);
        event.target.classList.add("fa-lock");

        // At this point we also have to update the content for the current ticket inside the ticket List Array.

        let currentTicketNumber = event.target.parentElement.parentElement.querySelector(".ticket-number").textContent;
        let currentTicketDescription = event.target.parentElement.parentElement.querySelector(".ticket-description").textContent;

        let targetTicketIndex = undefined;

        for (let i=0; i<ticketList.length; i++){
            let runTicketNumber = ticketList[i].ticketNumber;
            if (runTicketNumber == currentTicketNumber){
                targetTicketIndex = i;
                break;
            };
        };

        ticketList[targetTicketIndex].ticketDescription = currentTicketDescription;
        
        // We will also update the local storage at this point:-

        localStorage.setItem("Array",JSON.stringify(ticketList));
    }
}