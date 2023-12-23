let parent = document.querySelector(".row");
let delBtn = document.querySelector("#del");


parent.addEventListener("click",function(e){
      if (e.target.classList.contains("inner")){
            console.log(e.target);
            e.target.style.border = "2px solid black";
      }
      
});


