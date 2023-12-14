let targetButton = document.querySelector(".double");
let parentDiv = document.querySelector("#doubleHolder");

targetButton.addEventListener("click",function(event){
      targetButton.remove();
      let childButtonOne = document.createElement("button");
      childButtonOne.textContent = "Child Button One";
      childButtonOne.style.marginRight = "2rem";
      let childButtonTwo = document.createElement("button");
      childButtonTwo.textContent = "Child Button Two";

      parentDiv.appendChild(childButtonOne);
      parentDiv.appendChild(childButtonTwo);

});