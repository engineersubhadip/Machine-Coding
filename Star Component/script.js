

let starParent = document.querySelector(".star-container");

let starList = document.querySelectorAll(".star");

let ratingCounter = document.querySelector(".rating");

starParent.addEventListener("click",function(e){
    if (e.target.classList.contains("star")){
        let selectedStar = e.target;
        let selectedIndex = 0;

        for (let k=0; k<starList.length; k++){
            starList[k].classList.remove("active");
        }
        
        for (let i=0; i<starList.length; i++){
            if (starList[i] == selectedStar){
                selectedIndex = i;
                break;
            };
        };

        for (let j=0; j<=selectedIndex; j++){
            starList[j].classList.add("active");
        }

        ratingCounter.innerText = `Rating : ${selectedIndex+1}`;
    }
})