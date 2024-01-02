

let starParent = document.querySelector(".star-container");

let starList = document.querySelectorAll(".star");

let ratingCounter = document.querySelector(".rating");

// Upon Clicking on the Star Icon, my rating will update likewise

starParent.addEventListener("click",function(e){
    if (e.target.classList.contains("star")){
        let selectedStar = e.target;
        let selectedIndex = e.target.getAttribute("position");

        for (let k=0; k<starList.length; k++){
            starList[k].classList.remove("active");
        }
        
        for (let j=0; j<selectedIndex; j++){
            starList[j].classList.add("active");
        }

        ratingCounter.innerText = `Rating : ${selectedIndex}`;
    };
});

// Upon Hovering, we will implement active class till the icon where the cursor is currently. But not update the Rating value

