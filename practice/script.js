let userList = ["Milk","Eggs","Bread"];

let parentElement = document.querySelector(".parent");

for (let i=0; i<userList.length; i++){
    let newEle = document.createElement("li");
    newEle.innerText = userList[i];
    parentElement.appendChild(newEle);
}

