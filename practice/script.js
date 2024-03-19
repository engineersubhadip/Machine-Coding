console.log("Linked");

let currCount = document.querySelector(".count");

let userInput = document.querySelector("input");

let userBtn = document.querySelector(".button-group");

// let userReset = document.querySelector(".reset-btn");

let oldVal = 0;

userBtn.addEventListener("click",function(e){

    let currUserVal = Number(userInput.value);

    if(e.target.classList.contains("add-btn")){ // Users clicks on Add Btn
        if (currUserVal >= 0){
            oldVal += currUserVal;
            currCount.innerText = oldVal;
            userInput.value = 0;
        }else{
            window.alert("Just enter a value");
        }

    }else if(e.target.classList.contains("sub-btn")){ // User clicks on Sub Btn
        if (currUserVal >= 0){
            oldVal -= currUserVal;
            currCount.innerText = oldVal;
            userInput.value = 0;
        }else{
            window.alert("Just enter a value");
        }
    }else if(e.target.classList.contains("reset-btn")){
        oldVal = 0;
        currCount.innerText = 0;
        userInput.value = 0;
    }
})