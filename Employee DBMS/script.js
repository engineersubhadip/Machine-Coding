let employeeList = [];

let parentContainer = document.querySelector("#parent-container");

let empContainer = document.querySelector("#employee-container");//left-side

let empDetails = document.querySelector("#employee-details"); //right-side

let empForm = document.querySelector(".empForm");

let isSubmitClickable = false; // By default it will be False

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

    if (element.id != undefined){
        employeeHolder.setAttribute("empid",element.id);
        employeeList.push({empID:element.id});
    }else{
        let runningId = new ShortUniqueId();
        runningId = runningId.rnd();
        element["id"] = runningId;
        employeeHolder.setAttribute("empid",runningId);
        employeeList.push({empID:runningId});
        data.push(element);
    }

    // Returning the Employee Holder:-

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
    let address = document.createElement("div");
    let email = document.createElement("div");
    let cell = document.createElement("div");
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
    address.innerText = targetEmployee.address;
    email.innerText = targetEmployee.email;
    cell.innerText = `Mobile - ${targetEmployee.contactNumber}`
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
        };
    };
};

// Whenever the user will  click on the Add Button. I want to display the Employee Form and switch off the parent-container:-

let addEmployee = document.querySelector("#add-employee");

addEmployee.addEventListener("click",function(e){
    if (e.target.classList.contains("new-employee-btn")){
        parentContainer.style.display = "none";
        empForm.style.display = "flex";

        // We will first clear out the pre-existing values inside the input fields and disable the submit button.
        
        let totalInputFields = document.querySelectorAll(".form-control");

        let submitBtn = document.querySelector(".btn-primary");

        for (let i=0; i<totalInputFields.length; i++){
            totalInputFields[i].value=""
        }
        submitBtn.classList.add("disabled");
        empForm.addEventListener("input",enterInput);
    };

});

function enterInput(e){ // This function will enable and disable the SUBMIT button

    if (e.target.classList.contains("form-control")){
        
        let submitBtn = document.querySelector(".btn-primary");
        
        // At this point we will fetch the list of all the current input fields in the UI:-

        let totalInputFields = document.querySelectorAll(".form-control");

        // We will now try to iterate over each and every input fields and check if all of them are filled up or not:-
        
        for (let i=0; i<totalInputFields.length; i++){
            
            if (totalInputFields[i].value.length == 0){
                isSubmitClickable = false;
                break;
            }else{
                isSubmitClickable = true;
            }
        }

        if (isSubmitClickable){
            submitBtn.classList.remove("disabled");
            submitBtn.addEventListener("click",submitForm)
        }else{
            submitBtn.classList.add("disabled");
        }
    }
}

function submitForm(event){
    event.preventDefault(); // Stop the page from reloading

    empForm.style.display = "none";

    let formElement = document.querySelector(".empForm");

    let formData = new FormData(formElement);

    const formObject = {};

    for (let [key,val] of formData){
        formObject[key] = val;
    }

    let newEmployee = createEmployee(formObject);

    empContainer.appendChild(newEmployee);

    parentContainer.style.display = "flex";
}
