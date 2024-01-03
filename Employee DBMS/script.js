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
    employeeHolder.setAttribute("empid",element.id);

    // Returning the Employee Holder:-

    employeeList.push({empID:element.id});

    employeeHolder.addEventListener("click",showDetails); // For displaying the Employee Information on the right side

    icon.addEventListener("click",delRecord); // When the user clicks on the Delete Button

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

    return [data[targetIndex],targetIndex];
}

function fillEmployeeDetails(empID){

    let targetEmployee = findTargetEmployee(empID)[0];
    // Create the Elements :-

    let h2 = document.createElement("h2");
    let empImage = document.createElement("div");
    let image = document.createElement("img");
    let empName = document.createElement("div");
    // let span = document.createElement("span");
    let address = document.createElement("div");
    let email = document.createElement("div");
    let cell = document.createElement("div");
    // let span2 = document.createElement("span");
    let dob = document.createElement("div");

    // Adding the Classes :-

    empImage.classList.add("employee-image");
    empName.classList.add("employee-name");
    address.classList.add("address");
    email.classList.add("email");
    cell.classList.add("mobile");
    dob.classList.add("dob");

    // Appending the Children :-
    empImage.appendChild(image);
    // empName.appendChild(span);
    // cell.appendChild(span2);

    empDetails.appendChild(h2);
    empDetails.appendChild(empImage);
    empDetails.appendChild(empName);
    empDetails.appendChild(address);
    empDetails.appendChild(email);
    empDetails.appendChild(cell);
    empDetails.appendChild(dob);

    // Adding the inner Text :-

    h2.innerText = "Employee Details"
    image.src = targetEmployee.imageUrl;
    empName.innerText = `${targetEmployee.firstName.toUpperCase()} ${targetEmployee.lastName.toUpperCase()} (${targetEmployee.age})`;
    // span.innerText = targetEmployee.age;
    address.innerText = targetEmployee.address;
    email.innerText = targetEmployee.email;
    cell.innerText = `Mobile - ${targetEmployee.contactNumber}`
    // span2.innerText = targetEmployee.contactNumber;
    dob.innerText = `DOB - ${targetEmployee.dob}`;
}

for (let i=0; i<data.length; i++){
    let currentData = data[i];
    let runningChild = createEmployee(currentData);
    empContainer.appendChild(runningChild);
}

function showDetails(e){
    if (e.target.classList.contains("employee") || e.target.classList.contains("name")){
        let employeeClicked = undefined;

        if (e.target.classList.contains("name")){
            employeeClicked = e.target.parentElement;
        }else{
            employeeClicked = e.target;
        };

        let employeeID = employeeClicked.getAttribute("empid");
        empDetails.innerText = "";
        fillEmployeeDetails(employeeID);
    }
}

function delRecord(e){
    if (e.target.classList.contains("fa-regular")){
        
        let recordToBeDeleted = e.target.parentElement.parentElement.getAttribute("empid");


        let indexToBeDeletedEmpList = undefined; // We will delete this record from the Emp List

        indexToBeDeletedEmpList = findTargetEmployee(recordToBeDeleted)[1];

        employeeList.splice(indexToBeDeletedEmpList,1); // We have removed the data from Employee List

        
        let recordFromDataList = undefined; // We will delete this record from the data.js file

        recordFromDataList = findTargetEmployee(recordToBeDeleted)[0];

        let indexToBeDeletedDataList = undefined;

        for (let i=0; i<data.length; i++){
            if (recordFromDataList.id == data[i].id){
                indexToBeDeletedDataList = i;
                break;
            };
        };

        data.splice(indexToBeDeletedDataList,1);

        e.target.parentElement.parentElement.remove();

        // If I delete an employee we want to show the details of the employee who is currently sitting on the front:-

        if (employeeList.length > 0){
            let employeeAtFirst = employeeList[0]; // We could have also picked from the Data File
            empDetails.innerText = "";
            fillEmployeeDetails(employeeAtFirst.empID);
        }else{
            empDetails.innerText = "";
        }
    };
};