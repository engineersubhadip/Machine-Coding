let toggleBtn = document.querySelector(".toggle-button");

let partOne = document.querySelector(".part-one");

let partTwo = document.querySelector(".part-two");

let partTwoFlag = false;

toggleBtn.addEventListener("click",function(e){
    if(partTwoFlag == false){
        partTwoFlag = true;
        toggleBtn.innerText = "Switch to Part One";
        toggleBtn.style.backgroundColor = "blue";
        toggleBtn.style.color = "white";
        partOne.style.display = "none";
        partTwo.style.display = "block";
    }else{
        partTwoFlag = false;
        toggleBtn.innerText = "Switch to Part Two";
        toggleBtn.style.backgroundColor = "red";
        toggleBtn.style.color = "white";
        partTwo.style.display = "none";
        partOne.style.display = "block";
    }
});