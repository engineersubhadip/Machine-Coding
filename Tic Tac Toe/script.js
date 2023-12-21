document.addEventListener("DOMContentLoaded",function(){

    let outer = document.querySelector("#outer");
    let chance = false; // If Chance is False we put "O", if true we put "X"

    outer.addEventListener("click",function(e){
        let cell = e.target;
        let cellNumber = cell.getAttribute("data-cell");
        
        if (chance == true && cell.textContent == ""){
            cell.textContent = "X";
            chance = false;
        }else if (chance == false && cell.textContent == ""){
            cell.textContent = "O";
            chance = true;
        }
    });

});