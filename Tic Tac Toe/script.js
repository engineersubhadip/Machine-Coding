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

    let rowCount = 3;
    let colCount = 3;

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
        
        // For every time we insert an element we have to check if either "X" or "Y" has won.

        // ! We will first check for horizontally :-
        //* Iterate in every row and check if we get a substring like "XXX" or "OOO".

        let finalStringX = false;
        let finalStringO = false;

        for (let i=0; i<rowCount; i++){
            let tempString = "";
            for (let j=0; j<colCount; j++){
                tempString += arr[i][j];
            }
            if (tempString == "XXX"){
                finalStringX = true;
            }else if (tempString == "OOO"){
                finalStringO = true;
            }
        }

        if (finalStringX){
            console.log("X Won !!!");
        }else if (finalStringO){
            console.log("O wins !!!");
        }

        // ! We will now check vertically:-

        for (j=0; j<colCount; j++){
            let tempStr = "";
            for (let i=0; i<rowCount; i++){
                tempStr += arr[i][j];
            };
            if (tempStr == "XXX"){
                finalStringX = true;
            }else if (tempStr == "OOO"){
                finalStringO = true;
            };
        };

        if (finalStringX){
            console.log("X Wins !!!");
        }else if (finalStringO){
            console.log("O wins !!!");
        }

    });

});