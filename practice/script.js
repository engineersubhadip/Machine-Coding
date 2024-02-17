let target = document.querySelector(".container");

let startBtn = document.querySelector(".start");

let stopBtn = document.querySelector(".stop");

let timerID;

let transition = false; // Initially there is no transition
    
    startBtn.addEventListener("click",function(){ 
        if (transition == false){ // transition will happen only if the value is false.
            // startBtn.setAttribute("disabled","true");
            timerID = setInterval(function(){
                let compStyle = window.getComputedStyle(target);
                let currColor = compStyle.backgroundColor;
                
                if (currColor === "rgb(255, 0, 0)"){
                    target.style.backgroundColor = "rgb(0,0,255)";
                }else{
                    target.style.backgroundColor = "rgb(255, 0, 0)";
                }
        
            },500);
        }
        transition = true; // Once the setInterval is initiated we set the value as true. Meaning, even if the user again clicks on the Start Button. Since the value of transition is true. So line 12 will never executed
    });



stopBtn.addEventListener("click",function(){
    clearInterval(timerID);
    transition = false; // Once the user clicks on the Stop Button, then the transition stops. Now if the user clicks on START Button, then line 12 will execute
})