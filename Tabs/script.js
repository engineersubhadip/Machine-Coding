let headerBtn = document.querySelector(".header");

let contentList = document.querySelectorAll(".description");


headerBtn.addEventListener("click",function(e){
    if (e.target.classList.contains("btn")){
        let selectedCategory = e.target.innerText;
        
        for (let i=0; i<contentList.length; i++){
            let currentContent = contentList[i].querySelector("h3").innerText;

            if (currentContent == selectedCategory){
                contentList[i].style.display = "block";
            }
            else{
                contentList[i].style.display = "none";
            };
        };
    };
});