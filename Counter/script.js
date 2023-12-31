let finalDisplay = document.querySelector("#number");

let incDecField = document.querySelector("#increment");

let finalOutput = 0;

let addBtn = document.querySelector("#add");
let subBtn = document.querySelector("#subtract");

addBtn.addEventListener("click",function(e){
    
    // When this button will be clicked. We will take out the value from the incDecField and add it to the finalOutput

    let userValue = parseInt(incDecField.value);
    
    if (userValue >= 1 && userValue <= 10){
        finalOutput = finalOutput + userValue;
        finalDisplay.textContent = finalOutput;
    };
});

subBtn.addEventListener("click",function(e){
    // When this button will be clicked. We will take out the value from the incDecField and subtract it to the finalOutput.

    let userValue = parseInt(incDecField.value);

    if (userValue >= 1 && userValue <= 10){
        finalOutput = finalOutput - userValue;
        finalDisplay.textContent = finalOutput;
        
    };
});

let resetBtn = document.querySelector("#reset");

resetBtn.addEventListener("click",function(e){
    finalDisplay.textContent = 0;
    finalOutput = 0;
})