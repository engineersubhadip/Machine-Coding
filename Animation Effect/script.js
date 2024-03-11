console.log("Linked");

let targetElement = document.querySelector("#container");
let count = 0;


setInterval(function(){
    if (count%2 == 0){
        targetElement.style.backgroundColor = "blue";
        count+=1;
    }else{
        targetElement.style.backgroundColor = "red";
        count+=1;
    }
},500);