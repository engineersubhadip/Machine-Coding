
let row = document.querySelector(".row");

row.addEventListener("click",function(e){
      if (e.target.classList.contains("inner")){
            console.log(e.target);
      }
})