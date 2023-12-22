document.addEventListener("DOMContentLoaded",function(){
    let outer = document.querySelector("#outer");
    let chance = false; // If Chance is False we put "O", if true we put "X"
    let arr = Array(9).fill(undefined);

    let flag = false; // This flag will be used for getting who is the winner

    outer.addEventListener("click",function(e){
        let cell = e.target;
        let cellNumber = cell.getAttribute("data-cell");


        if (chance == true && cell.textContent == ""){
            cell.textContent = "X";
            chance = false;
            arr[cellNumber]="X";
            winningCombo("X");

        }else if (chance == false && cell.textContent == ""){
            cell.textContent = "O";
            chance = true;
            arr[cellNumber]="O";
            winningCombo("O")
        }

        if (flag){ // We have a winner
            let finalResult = document.getElementById("result");
            finalResult.textContent;
            
            // Clearing out the UI :- The UI will be cleared after 1s
            setTimeout(resetBoard,1000);
        
        }

    });

    
    function winningCombo(char) {
        let result = document.getElementById("result");
        if(arr[0] == char && arr[1] == char && arr[2] == char) {
            // the f0th row is having the char;
            result.textContent = `${char} wins`;
            flag = true;
        }
        else if(arr[3] == char && arr[4] == char && arr[5] == char) {
            // the 1st row is having the char;
            result.textContent = `${char} wins`;
            flag = true;
        }
        else if(arr[6] == char && arr[7] == char && arr[8] == char) {
            // the 2nd row is having the char;
            result.textContent = `${char} wins`;
            flag = true;
        }
        else if(arr[0] == char && arr[3] == char && arr[6] == char) {
            // the 0th col is having the char;
            result.textContent = `${char} wins`;
            flag = true;
        }
        else if(arr[1] == char && arr[4] == char && arr[7] == char) {
            // the 1st col is having the char;
            result.textContent = `${char} wins`;
            flag = true;
        }
        else if(arr[2] == char && arr[5] == char && arr[8] == char) {
            // the 2nd col is having the char;
            result.textContent = `${char} wins`;
            flag = true;
        }
        else if(arr[0] == char && arr[4] == char && arr[8] == char) {
            // the 1st col is having the char;
            result.textContent = `${char} wins`;
            flag = true;
        }
        else if(arr[2] == char && arr[4] == char && arr[6] == char) {
            // the 2nd col is having the char;
            result.textContent = `${char} wins`;
            flag = true;
        }
    }


    function resetBoard() {
        let result = document.getElementById("result");
        result.textContent = ""; // Clear the result message
        flag = false; // Reset the flag
        arr.fill(undefined); // Clear the array
        let innerCellArr = document.querySelectorAll(".inner");
        for (let i = 0; i < innerCellArr.length; i++) {
            innerCellArr[i].textContent = ""; // Clear the board UI
        }
    }

});