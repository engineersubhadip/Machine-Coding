let contactList = document.querySelector("#contact-list");

let contactArray = [];

let messageContainer = document.querySelector("#messagelist");

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

console.log(contactArray);

function targetContact(e){

        let currentContact = undefined;

        if (e.target.classList.contains("contact")){
            currentContact = e.target;
        }else if (e.target.classList.contains("imagecontact")){
            currentContact = e.target.parentElement.parentElement;
        }else{
            currentContact = e.target.parentElement;
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
}