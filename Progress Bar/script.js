let start = document.querySelector(".start");
let stop = document.querySelector(".stop");
let reset = document.querySelector(".reset");

let progressBar = document.querySelector(".blue-loader");

let timerID = undefined;

function fillBar(){
    timerID = setInterval(function(){
        let width = captureWidth();
        width = width+5;
        progressBar.style.width=`${width}%`;

        if (width == 100){
            stopFilling(timerID);
        }
    },1000);
};

function captureWidth(){
    let currentWidth = Number(progressBar.style.width.split("%")[0]);
    return currentWidth;
}

function stopFilling(timerID){
    clearInterval(timerID);
    start.removeAttribute("disabled");
}


start.addEventListener("click",function(e){
    fillBar();
    start.setAttribute("disabled","true");
})

stop.addEventListener("click",function(){
    stopFilling(timerID);
});

reset.addEventListener("click",function(){
    stopFilling(timerID);
    progressBar.style.width = `0%`;
});