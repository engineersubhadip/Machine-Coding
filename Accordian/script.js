let selectedAccordian = document.querySelector("#container");

let descriptionList = document.querySelectorAll(".accordian");


selectedAccordian.addEventListener("click",function(e){
    if (e.target.classList.contains("header")){
        let selectedHeading = e.target.innerText;
        
        for (let i=0; i<descriptionList.length; i++){
            let currentHeading = descriptionList[i].querySelector(".header").innerText;

            let currentDescription = descriptionList[i].querySelector(".description").innerText;

            if (selectedHeading == currentHeading){
                descriptionList[i].querySelector(".description").style.display = "block";
            }else{
                descriptionList[i].querySelector(".description").style.display = "none";
            }
        }
        
    }
})