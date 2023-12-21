document.addEventListener("DOMContentLoaded",function(){

    let outer = document.querySelector("#outer");

    outer.addEventListener("click",function(e){
        console.log(e.target);
    });

});