let selectInputBox = document.querySelector("select");


selectInputBox.addEventListener("change",filtration);


function filtration(event){
      let currentValue = event.target.value;
      let currentMovieList = document.querySelectorAll(".movies p");

      // console.log(currentMovieList[0].getAttribute("data-category"));

      for (let i=0; i<currentMovieList.length; i++){
            let movieCategory = currentMovieList[i].getAttribute("data-category");
            if (currentValue == "none" || movieCategory == currentValue){
                  // Show the Movie
                  currentMovieList[i].parentElement.style.display = "block";
            }else{
                  // Hide the Movie
                  currentMovieList[i].parentElement.style.display = "none";
            }
      }

      
      
}