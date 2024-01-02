function cardCreation(element){
    // Creating the Elements

    let card = document.createElement("div");
    let details = document.createElement("div");

    let productName = document.createElement("span");
    let breakTag = document.createElement("br");
    let productCategory = document.createElement("span");
    let allStar = document.createElement("div");

    let ratingCount = document.createElement("div");
    let span = document.createElement("span");

    let btn = document.createElement("div");
    let button = document.createElement("button");

    // Adding the Class Lists

    card.classList.add("card");
    details.classList.add("details");
    productName.classList.add("product__name");
    productCategory.classList.add("product__category");
    allStar.classList.add("all__star");

    ratingCount.classList.add("rating__count");
    btn.classList.add("btn");
    button.classList.add("btn__buy");

    // Filling up the inner content:-

    productName.innerText = element.title;
    productCategory.innerText = element.category;

    ratingCount.innerText = "Rating Count : ";

    let runCount = element.rating.rate;
    runCount = Math.floor(runCount,0);
    
    for (let i=0; i<runCount; i++){
        let starCreation = document.createElement("span");
        starCreation.classList.add("star__filled");
        starCreation.innerHTML = "&#9733";
        allStar.appendChild(starCreation);
    };

    for (let j=runCount; j<5; j++){
        let starCreation = document.createElement("span");
        starCreation.classList.add("star__notfilled");
        starCreation.innerHTML = "&#9734";
        allStar.appendChild(starCreation);  
    };


    span.innerText =   element.rating.count;

    button.innerText = "Buy Now";

    btn.appendChild(button);
    ratingCount.appendChild(span);


    details.appendChild(productName);
    details.appendChild(breakTag);
    details.appendChild(productCategory);
    details.appendChild(allStar);
    details.appendChild(ratingCount);

    card.appendChild(details);
    card.appendChild(btn);

    return card;
}


let cardHolder = document.querySelector("#container");

for (let i=0; i<data.length; i++){
    let currentCard = cardCreation(data[i]);
    cardHolder.appendChild(currentCard);
}