document.addEventListener("DOMContentLoaded",function(){
    let outer = document.querySelector("#outer");
    let chance = false; // If Chance is False we put "O", if true we put "X"
    let arr = Array(9).fill(9);

    

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
        document.getElementById("result").textContent;
    });

    
    function winningCombo(char) {
        let result = document.getElementById("result");
        if(arr[0] == char && arr[1] == char && arr[2] == char) {
            // the f0th row is having the char;
            result.textContent = `${char} wins`;
        }
        else if(arr[3] == char && arr[4] == char && arr[5] == char) {
            // the 1st row is having the char;
            result.textContent = `${char} wins`;
        }
        else if(arr[6] == char && arr[7] == char && arr[8] == char) {
            // the 2nd row is having the char;
            result.textContent = `${char} wins`;
        }
        else if(arr[0] == char && arr[3] == char && arr[6] == char) {
            // the 0th col is having the char;
            result.textContent = `${char} wins`;
        }
        else if(arr[1] == char && arr[4] == char && arr[7] == char) {
            // the 1st col is having the char;
            result.textContent = `${char} wins`;
        }
        else if(arr[2] == char && arr[5] == char && arr[0] == char) {
            // the 2nd col is having the char;
            result.textContent = `${char} wins`;
        }
        else if(arr[0] == char && arr[4] == char && arr[8] == char) {
            // the 1st col is having the char;
            result.textContent = `${char} wins`;
        }
        else if(arr[2] == char && arr[4] == char && arr[6] == char) {
            // the 2nd col is having the char;
            result.textContent = `${char} wins`;
        }
    }

});