let employeeList = [];

let empContainer = document.querySelector("#employee-container");//left-side

let empDetails = document.querySelector("#employee-details"); //right-side

function createEmployee(element){
    // Create the Element :-

    let employeeHolder = document.createElement("div");
    let name = document.createElement("div");
    let cross = document.createElement("div");
    let icon = document.createElement("i");

    // Adding the Classes :-

    employeeHolder.classList.add("employee");
    name.classList.add("name");
    cross.classList.add("cross");
    icon.classList.add("fa-regular");
    icon.classList.add("fa-circle-xmark");

    // Appending the Children

    cross.appendChild(icon);
    employeeHolder.appendChild(name);
    employeeHolder.appendChild(cross);

    // Adding the inner Text Content:-

    name.innerText = element.firstName+" "+element.lastName;

    // Returning the Employee Holder:-

    employeeList.push({empID:element.id});
    return employeeHolder;
}

function findTargetEmployee(empID){
    let targetIndex = undefined; // For which employee I want the details to be visible for

    for (let i=0; i<data.length; i++){
        let currEmployee = data[i];
        if (currEmployee.id == empID){
            targetIndex = i;
            break;
        };
    };

    return data[targetIndex];
}

function fillEmployeeDetails(empID){

    let targetEmployee = findTargetEmployee(empID);

    // Create the Elements :-

    let h3 = document.createElement("h3");
    let empImage = document.createElement("div");
    let image = document.createElement("image");
    let empName = document.createElement("div");
    let span = document.createElement("span");
    let address = document.createElement("div");
    let email = document.createElement("div");
    let mobile = document.createElement("div");
    let span2 = document.createElement("span");
    let dob = document.createElement("div");

    // Adding the Classes :-

    empImage.classList.add("employee-image");
    empName.classList.add("employee-name");
    address.classList.add("address");
    email.classList.add("email");
    mobile.classList.add("mobile");
    dob.classList.add("dob");

    // Appending the Children :-
    empImage.appendChild(image);
    empName.appendChild(span);
    mobile.appendChild(span2);

    empDetails.appendChild(h3);
    empDetails.appendChild(empImage);
    empDetails.appendChild(empName);
    empDetails.appendChild(address);
    empDetails.appendChild(email);
    empDetails.appendChild(mobile);
    empDetails.appendChild(dob);

    // Adding the inner Text :-

    image.src = targetEmployee.imageUrl;
    empName.innerText = targetEmployee.firstName+" "+targetEmployee.lastName;
    span.innerText = targetEmployee.age;
    address.innerText = targetEmployee.address;
    email.innerText = targetEmployee.email;
    mobile.innerText = "Mobile - "
    span2.innerText = targetEmployee.contactNumber;
    dob.innerText = targetEmployee.dob;
}

for (let i=0; i<data.length; i++){
    let currentData = data[i];
    let runningChild = createEmployee(currentData);
    empContainer.appendChild(runningChild);
}

console.log(employeeList);