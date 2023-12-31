let contactList = document.querySelector("#contact-list");

let contactArray = [];

let messageContainer = document.querySelector("#messagelist");

let sendBtn = document.querySelector("#sendBtn");

let currentActiveContact = undefined;

function createContact(element){

    // Creating the Contact :-

    let contact = document.createElement("div");

    let contactImage = document.createElement("div");

    let image = document.createElement("img");

    let contactName = document.createElement("div");

    // Adding the Classes :-

    contact.classList.add("contact");

    contactImage.classList.add("contact-image");

    image.classList.add("imagecontact")

    contactName.classList.add("contact-name");

    // Appending the Children :-

    contactImage.appendChild(image);

    contact.appendChild(contactImage);
    contact.appendChild(contactName);

    // Adding the inner content :-

    contact.setAttribute("contact-id",element.id);

    image.src = element.imageURL;

    contactName.innerText = element.title;

    // Corresponding to the current contact we will store all the messages :-

    contactArray.push({[element.id]:element.messageList});

    contact.addEventListener("click",targetContact);

    return contact;

};

for (let i=0; i<data.length; i++){
    let runningContact = createContact(data[i]);
    contactList.appendChild(runningContact);
}

function targetContact(e){
        
        let currentContact = undefined;

        if (e.target.classList.contains("contact")){
            currentContact = e.target;
            currentActiveContact = e.target;

        }else if (e.target.classList.contains("imagecontact")){
            currentContact = e.target.parentElement.parentElement;
            currentActiveContact = e.target.parentElement.parentElement;
        }else{
            currentContact = e.target.parentElement;
            currentActiveContact = e.target.parentElement;
        }

        let currentContactID = currentContact.getAttribute("contact-id");

        let currentContactMessage = undefined;

        for (let i=0; i<data.length; i++){

            if (data[i].id == currentContactID){

                currentContactMessage = data[i].messageList;
                break;
            };
        };


        // Firstly we will clear out the existing messages shown inside messageContainer

        messageContainer.innerText="";

        let rightSide = document.querySelector("#right-side");
        rightSide.style.display = "flex"; // Line 97-98 is required for the Search bar functionality. When the user searches for a contact and clicks on them, then we want to display the messages for the particular contact. Line 95 states that we are emptying out the previous content and then displaying the new one

        // Now we will iterate through each element of currentContactMessage and call showMessages()

        for (let i=0; i<currentContactMessage.length; i++){
            let runningMessage = currentContactMessage[i].message;

            let currentMessageElement = showMessage(runningMessage);

            messageContainer.appendChild(currentMessageElement);
        };
};


function showMessage(messageElement){
    
    // Creating the Element :-

    let message = document.createElement("div");

    // Adding the Class :-

    message.classList.add("message");

    // Adding the incoming text :-

    message.innerText = messageElement;

    return message;
};

// Upon Landing we will show the messages of the First person:-

let landingContact = contactArray[0];


let landingContactMessages = landingContact[1];

for (let i=0; i<landingContactMessages.length; i++){
    let runningMessage = landingContactMessages[i].message;

    let currentMessageElement = showMessage(runningMessage);

    messageContainer.appendChild(currentMessageElement);
};

// When we will write new messages and send it it should display:-

let messageInput = document.querySelector(".messageinput");

messageInput.addEventListener("keyup",function(e){
    let currentValue = messageInput.value;
    
    if (currentValue.length > 0){
        sendBtn.removeAttribute("disabled");
        sendBtn.addEventListener("click",sendMessage);
    }else{
        sendBtn.setAttribute("disabled","true");
    };
});


function sendMessage(e){
    
    let currentInputValue = messageInput.value;
    let currentContact = undefined;

    // How will we get to know for which contact is clicking on the SEND Button :-

    if (currentActiveContact == undefined){ // This means that user hasn't clicked on any contact upon landing first time. He just typed in a message and clicked SEND.
        currentContact = contactList.querySelector(".contact");
    }else{
        currentContact = currentActiveContact
    }

    let currentContactID = undefined;
    
    currentContactID = currentContact.getAttribute("contact-id");

    let currentContactMessages = contactArray[currentContactID-1][currentContactID];
    
    currentContactMessages.push({message:currentInputValue});

    // Now for the particular ID we will update the Data File :-

    let targetIndex = undefined;

    for (let i=0; i<data.length; i++){
        if (data[i].id == currentContactID){
            targetIndex = i;
            break;
        };
    };

    if (targetIndex != undefined){
        data[targetIndex].messageList = currentContactMessages; // In the data file we have updated the message list of the contactID
    }

    messageContainer.innerText = "";

    let updatedMessages = data[targetIndex].messageList;

    for (let i=0; i<updatedMessages.length; i++){ // Now we will iterate through the updated list and print the messages :-

        let currentMessage = showMessage(updatedMessages[i].message);
        messageContainer.appendChild(currentMessage);
    };

    messageInput.value = "";
    sendBtn.setAttribute("disabled","true"); // We are emptying out the sent value from the Input Box so that it does not gets populated in the next contact or the current one. And we are disabling the SEND Button
};

// Implementation of the Search Functionality :-

let searchBar = document.querySelector(".search-contact");

searchBar.addEventListener("keyup",function(e){
    let currentValue = searchBar.value;
    currentValue = currentValue.toLowerCase();

    let availableContacts = document.querySelectorAll(".contact"); // List of all the contacts on the left side
    let rightSide = document.querySelector("#right-side"); // When the user searches for a contact we will not show anything on the right side.

    if (currentValue.length > 0){
        let runningArr = [];
        
        for (let i=0; i<data.length; i++){

            let currentContactName = data[i].title;
            currentContactName = currentContactName.toLowerCase();
            let flag = true;

            for (let j=0; j<currentValue.length; j++){
                if (currentValue[j] != currentContactName[j]){
                    flag = false;
                    break;
                }
            }
            if (flag){
                runningArr.push(data[i].id);
            }
        }

        if (runningArr.length > 0){

            for (let i=0; i<runningArr.length; i++){
                let currentID = runningArr[i];
                for (let j=0; j<availableContacts.length; j++){
                    let runID = availableContacts[j].getAttribute("contact-id");

                    if (currentID == runID){
                        availableContacts[j].style.display = "flex";
                    }else{
                        availableContacts[j].style.display = "none";
                    };
                };
            };

            // We will not show anything on the right side :-

            rightSide.style.display = "none";
        }

    }
    else{
        for (let i=0; i<availableContacts.length; i++){
            availableContacts[i].style.display = "flex";
        }

        // We will show everything on the right side :-

        rightSide.style.display = "flex";
    }
});