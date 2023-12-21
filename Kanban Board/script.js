console.log("Linked the JS");

let addBtn = document.querySelector(".add-btn");
let modalContainer = document.querySelector(".modal-container");
let isModalHidden = true;

addBtn.addEventListener("click", function(e){
    if (isModalHidden){
        modalContainer.style.display = "flex";
        isModalHidden = false;
    }else{
        modalContainer.style.display = "none";
        isModalHidden = true;  
    }
});
