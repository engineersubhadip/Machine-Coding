// console.log("Linked");

let inputField = document.querySelector(".input-field");

let isActive = false;

let crossEyeIcon = document.querySelector(".fa-eye-slash");


crossEyeIcon.addEventListener("click",function(e){
    if(!isActive){
        isActive = true;
        crossEyeIcon.classList.remove("fa-eye-slash");
        crossEyeIcon.classList.add("fa-eye");
        inputField.setAttribute("type","text");
    }else{
        isActive = false;
        crossEyeIcon.classList.remove("fa-eye");
        crossEyeIcon.classList.add("fa-eye-slash");
        inputField.setAttribute("type","password");
    }
})