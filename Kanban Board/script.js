let addBtn = document.querySelector(".add-btn");
let modalContainer = document.querySelector(".modal-container");
let isModalHidden = true;

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
