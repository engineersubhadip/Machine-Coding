let locationInputBar = document.querySelector("#location-input-bar");

let searchButton = document.querySelector(".location-search");

locationInputBar.addEventListener("keyup", function(e){
      let locationValue = locationInputBar.value;
      
      if (locationValue.length == 0){
            searchButton.classList.add("disabled");
      }else{
            searchButton.classList.remove("disabled");
      }
});

