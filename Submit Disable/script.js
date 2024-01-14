let inputField = document.querySelectorAll("input");

let submitBtn = document.querySelector("button");

let isSubmit = false;

for (let i=0; i<inputField.length; i++){
    inputField[i].addEventListener("keyup",function(e){
        let flagRes = checkFields();
        if (flagRes){
            submitBtn.removeAttribute("disabled");
        }else{
            submitBtn.setAttribute("disabled","true");
        }
    });
};

function checkFields(){
    for (let i=0; i<inputField.length; i++){
        let currentValue = inputField[i].value;
        if (currentValue.length == 0){
            isSubmit = false;
            return isSubmit;
        }
    }
    isSubmit = true;
    return isSubmit;
};


if (isSubmit){
    function submitForm(event){
        event.preventDefault();
    
        let form = document.querySelector("form");
    
        let formData = new FormData(form);
    
        let result = {};
    
        for (let [key,val] of formData.entries()){
            result[key] = val;
        }
    
        console.log(result);
    }
}

