let refAPI = "http://api.weatherapi.com/v1/current.json?key=028be68db8544e0abd031821231612&q=mumbai&aqi=no";

refAPI = refAPI.split("&q");

let resultOne = refAPI[0]+"&q=";
let resultTwo = "&aqi=no";


let locationInputBar = document.querySelector("#location-input-bar");

let searchButton = document.querySelector(".location-search");

let weatherSection = document.querySelector(".weather-section"); // I am making this Global because if the search bar is empty I will show nothing.
weatherSection.innerHTML = ""; // By Default when my Page first loads it will show nothing;

locationInputBar.addEventListener("keyup", function(e){
      let locationValue = locationInputBar.value;
      
      if (locationValue.length == 0){  
            weatherSection.innerHTML = "";         
            searchButton.classList.add("disabled");
      }else{
            searchButton.classList.remove("disabled");
      }
});

searchButton.addEventListener("click", function(e){
      populateWeather(locationInputBar.value);
      // We will call a function which will populate the DOM
});

async function fetchUserLocation(locationValue){
      let apiLink = `${resultOne}${locationValue}${resultTwo}`;
      let response = await fetch(apiLink);
      let data = await response.json();
      return data;
}

async function populateWeather(locationValue){     
      let data = await fetchUserLocation(locationValue);
      weatherSection.innerHTML = "";

      if ('error' in data){
            window.alert(`${locationInputBar.value} is not a valid location`);

      }else{

            let weatherNumber = document.createElement("div");
            weatherNumber.classList.add("weather");
            weatherNumber.textContent = data.current.temp_c;
//
            let weatherLocationDate = document.createElement("div");
            weatherLocationDate.classList.add("weather-location-date","d-flex", "flex-column" ,"justify-content-end");

            let weatherLocation = document.createElement("div");
            weatherLocation.classList.add("weather-location");
            weatherLocation.textContent = data.location.name;

            let dateTime = document.createElement("div");
            dateTime.classList.add("date-time");
            dateTime.textContent = data.location.localtime;

            weatherLocationDate.appendChild(weatherLocation);
            weatherLocationDate.appendChild(dateTime);
//
            let weatherDetailsImage = document.createElement("div");
            weatherDetailsImage.classList.add("weather-details-image","d-flex", "flex-column");

            let weatherImage = document.createElement("div");
            weatherImage.classList.add("weather-image");

            let image = document.createElement("img");
            image.src = data.current.condition.icon;

            weatherImage.appendChild(image);

            let weatherDetails = document.createElement("div");
            weatherDetails.classList.add("weather-details");
            weatherDetails.textContent = data.current.condition.text;

            weatherDetailsImage.appendChild(weatherImage);
            weatherDetailsImage.appendChild(weatherDetails);

            // Adding the new Details:-

            weatherSection.appendChild(weatherNumber);
            weatherSection.appendChild(weatherLocationDate);
            weatherSection.appendChild(weatherDetailsImage);

      }

}



// fetchUserLocation()