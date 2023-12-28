let array = [12,13,14,15];

// How to store inside the Local Storage

let arrayStr = JSON.stringify(array);

localStorage.setItem("Array",arrayStr);

// How to access data from Local Storage;

let dataStr = localStorage.getItem("Array");

let data = JSON.parse(dataStr);

console.log(data);