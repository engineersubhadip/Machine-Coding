let min = document.querySelector(".min");
let sec = document.querySelector(".sec");
let milisec = document.querySelector(".milisec");

let start = document.querySelector(".start");
let stop = document.querySelector(".stop");
let reset = document.querySelector(".reset");

let timerId = undefined;

function startTimer(){
    let currValMil = Number(milisec.textContent);
    let currValSec = Number(sec.textContent);
    let currValMin = Number(min.textContent);

    timerId = setInterval(function(){
        currValMil+=1;
        if (currValMil == 1000){
            currValMil=0;
            currValSec+=1;
            if (currValSec == 60){
                currValSec = 0;
                currValMin+=1;
                min.textContent = currValMin;
            }
            sec.textContent = currValSec;
        }
        milisec.textContent=currValMil;
    },1);
};

function stopTimer(timerId){
    clearInterval(timerId);
}

function resetTimer(){
    clearInterval(timerId);
}



