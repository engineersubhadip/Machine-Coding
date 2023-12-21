document.addEventListener("DOMContentLoaded",function(){

    let outer = document.querySelector("#outer");
    let chance = false; // If Chance is False we put "O", if true we put "X"
    let arr = [];

    for (let i=0; i<3; i++){
        let temp = [];
        for (let j=0;j<3; j++){
            temp.push(undefined);
        }
        arr.push(temp);
    }

    outer.addEventListener("click",function(e){
        let cell = e.target;
        let cellNumber = cell.getAttribute("data-cell");


        if (chance == true && cell.textContent == ""){
            cell.textContent = "X";
            chance = false;
            currRow = Math.floor(cellNumber/3);
            currCol = cellNumber%3;
            arr[currRow][currCol] = "X";

        }else if (chance == false && cell.textContent == ""){
            cell.textContent = "O";
            chance = true;
            currRow = Math.floor(cellNumber/3);
            currCol = cellNumber%3;
            arr[currRow][currCol] = "O";
        }
        console.log(arr);
    });

});