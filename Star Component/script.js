

let starParent = document.querySelector(".star-container");

let starList = document.querySelectorAll(".star");

let ratingCounter = document.querySelector(".rating");

let selectedIndex = undefined;

// Upon Clicking on the Star Icon, my rating will update likewise

starParent.addEventListener("click",function(e){
    if (e.target.classList.contains("star")){

        selectedIndex = e.target.getAttribute("position");

        for (let k=0; k<starList.length; k++){  // Firstly we are removing existing applied active classes
            starList[k].classList.remove("active");
        }
        
        for (let j=0; j<selectedIndex; j++){ // Now we are applying active class till the desired position
            starList[j].classList.add("active");
        }

        ratingCounter.innerText = `Rating : ${selectedIndex}`; // Updating the Rating
    };
});

// Upon Hovering, we will implement active class till the icon where the cursor is currently. But not update the Rating value

starParent.addEventListener("mouseover",function(e){
    if (e.target.classList.contains("star")){
        
        let targetStar = e.target.getAttribute("position");

        // Remove the old:-

        for (let i=0; i<starList.length; i++){
            starList[i].classList.remove("active");
        }

        // Add the new active class till the target star

        for (let j=0; j<targetStar;j++){
            starList[j].classList.add("active");
        }
    };
});

starParent.addEventListener("mouseout",function(e){
    if (e.target.classList.contains("star")){
        
        let targetStar = e.target.getAttribute("position");

        for (let i=0; i<targetStar; i++){ // Removing active class from all the Stars
            starList[i].classList.remove("active");
        }

        if (selectedIndex != undefined){ // If the user has already clicked on any star icon, we are not supposed to remove active class till the star he has clicked. So we are adding the active class till the star user has clicked on.
            for (let j=0; j<selectedIndex; j++){
                starList[j].classList.add("active");
            }
        }
    }
})